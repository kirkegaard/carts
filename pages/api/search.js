import path from "path";
import { promises as fs } from "fs";

import Carts from "../../data/games.json";

const COUNT = 100;

export default async function handler(req, res) {
  let { q, page } = req.query;

  if (!page) {
    page = 1;
  }

  const offset = COUNT * (page - 1);

  let data = Carts.softwarelist.software;

  if (q) {
    data = data.filter((game) => {
      if (
        game.name?.toLowerCase().includes(q.toLowerCase()) ||
        game.description?.toLowerCase().includes(q.toLowerCase())
      ) {
        return game;
      }
    });
  }

  return res.status(200).json({
    pagination: {
      current: parseInt(page),
      pages: Math.ceil(data.length / COUNT),
      items: data.length,
    },
    data: data.slice(offset, offset + COUNT),
  });
}
