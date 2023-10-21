import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacksOffProject } from "@/store/feedbacks.service";
interface IFeedbackProps {
    id: number;
}
const Feedback = ({ id }: IFeedbackProps) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["feedback", id],
        queryFn: () => getAllFeedbacksOffProject(id),
        staleTime: 1 * 60 * 1000,
        enabled: !!id,
    });
    if (error) return null;
    if (!data || data?.length <= 0)
        return <span>{`Don't have any feedback`}</span>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col gap-y-5">
            {data.map((item) => (
                <div
                    className="flex flex-col p-3 border rounded-lg border-graySoft dark:bg-darkStrock bg-grayf1 gap-y-3"
                    key={item.id}
                >
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-[18px]">
                            {item.name}
                        </span>
                        <span className="text-xs cursor-pointer">
                            {item.createdAt}
                        </span>
                    </div>
                    <hr className="border border-text3" />
                    <span>{item.content}</span>
                </div>
            ))}
        </div>
    );
};

export default Feedback;
