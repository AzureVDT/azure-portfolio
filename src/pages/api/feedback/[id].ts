import data from "@data/feedbacks.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const feedback = data.filter(
        (item) => item.project_id === parseInt(id as string)
    );

    if (feedback) {
        res.status(200).json(feedback);
    } else {
        res.status(404).json({ message: "Feedback not found!" });
    }
}
