import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button onClick={console.log("click")} className={`px-4 py-2 rounded-full ${bgColor} ${textColor} ${className}`} {...props}>
            {children} 
        </button>
    );
}