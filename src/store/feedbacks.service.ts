import { API_URL } from "@/config";
import { FeedbackItemData } from "@/types/feedback.types";
import axios from "axios";

export async function getAllFeedbacks() {
    try {
        const res = await axios.get(`${API_URL}/feedback`);
        if (res.status === 200) {
            return res.data;
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}

export async function getAllFeedbacksOffProject(
    id: number
): Promise<FeedbackItemData[] | null | undefined> {
    try {
        const response = await axios.get(`${API_URL}/feedback/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}

export async function addNewFeedback(feedback: FeedbackItemData) {
    try {
        const response = await axios.post(`${API_URL}/feedback/create`, {
            ...feedback,
        });
        if (response.status === 200) {
            return response.data;
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}
