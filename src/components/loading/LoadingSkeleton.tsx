import React from "react";

interface LoadingSkeletonProps {
    className?: string;
}

const LoadingSkeleton = ({ className }: LoadingSkeletonProps) => {
    return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
