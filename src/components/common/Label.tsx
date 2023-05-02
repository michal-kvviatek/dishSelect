import React from "react";
import {ILabel} from "../../types/types";

const Label = ({ title, className, htmlFor }: ILabel) => {
    return (
        <label className={`${className} mt-3 mb-1 ml-2 text-xs text-gray-700 font-thin`} htmlFor={htmlFor}>
            {title}
        </label>
    );
};

export default Label;