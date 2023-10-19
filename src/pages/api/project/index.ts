import { NextApiRequest, NextApiResponse } from "next";
import projects from "@data/projects.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let filteredData = projects;
    res.status(200).json(filteredData);
}
