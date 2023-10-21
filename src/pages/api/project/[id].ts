import data from "@data/projects.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const project = data.find((item) => item.id === parseInt(id as string));

    if (project) {
        res.status(200).json(project);
    } else {
        res.status(404).json({ message: "Project not found!" });
    }
}
