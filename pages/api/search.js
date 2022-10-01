import path from "path";
import { promises as fs } from "fs";

import data from "../../data/games.json";

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query" });
  }

  const filteredData = data.softwarelist.software.filter((game) => {
    if (
      game.name?.toLowerCase().includes(q.toLowerCase()) ||
      game.description?.toLowerCase().includes(q.toLowerCase())
    ) {
      return game;
    }
  });

  return res.status(200).json({
    query: q,
    length: filteredData.length,
    data: filteredData,
  });
}
