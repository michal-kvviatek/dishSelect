import React from "react";
import {IWrapper} from "../../types/types";

const Wrapper = ({ children, title }: IWrapper) => {
    return (
        <div className="flex flex-col m-4 text-left p-2 border border-gray-100 rounded-lg shadow-lg">
            {title && <p className="text-sm md:text-lg font-bold text-cyan-600 text-center uppercase">{title}</p>}
            {children}
        </div>
    );
};

export default Wrapper;