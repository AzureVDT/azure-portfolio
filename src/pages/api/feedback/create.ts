import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const filePath = path.join(process.cwd(), "data/projects.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const newData = req.body;

        jsonData.push({
            id: jsonData.length + 1,
            ...newData,
        });

        fs.writeFileSync(filePath, JSON.stringify(jsonData));

        res.status(200).json({ message: "Add project successfully!" });
    } else {
        res.status(405).json({ message: "Error!" });
    }
}
