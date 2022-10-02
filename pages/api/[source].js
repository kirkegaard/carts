import path from "path";
import { promises as fs } from "fs";

import gb from "../../data/gb.json";
import gbc from "../../data/gbc.json";
import gba from "../../data/gba.json";

const SOURCES = { gb, gbc, gba };
const COUNT = 100;

export default async function handler(req, res) {
  let { q, source, page } = req.query;

  q = q.toLowerCase();

  if (!page) {
    page = 1;
  }

  if (!source) {
    source = "gb";
  }

  let data = SOURCES[source].softwarelist.software;

  if (q) {
    data = data.filter((game) => {
      if (
        game.name?.toLowerCase().includes(q) ||
        game.description?.toLowerCase().includes(q)
      ) {
        return game;
      } else if (game.part?.feature) {
        const feature = game.part.feature;
        if (feature.length) {
          const pcb = feature.find(
            (f) => f.name === "pcb" && f.value.toLowerCase().includes(q)
          );
          if (pcb) return game;
        }
      }
    });
  }

  const offset = COUNT * (page - 1);

  return res.status(200).json({
    pagination: {
      current: parseInt(page),
      pages: Math.ceil(data.length / COUNT),
      items: data.length,
    },
    data: data.slice(offset, offset + COUNT),
  });
}
