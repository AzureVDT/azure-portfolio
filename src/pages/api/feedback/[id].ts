import data from "@data/feedbacks.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const post = data.find((item) => item.id === parseInt(id as string));

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Property not found!" });
    }
}
