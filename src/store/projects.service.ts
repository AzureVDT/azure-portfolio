import { API_URL } from "@/config";
import { ProjectItemData } from "@/types/project.types";
import axios from "axios";
export async function getProjects() {
    try {
        const response = await axios.get(`${API_URL}/project`);
        if (response.status === 200) {
            return response.data;
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}

export async function getProject(
    id: number
): Promise<ProjectItemData | null | undefined> {
    try {
        const response = await axios.get(`${API_URL}/project/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.log(error);
    }
}
