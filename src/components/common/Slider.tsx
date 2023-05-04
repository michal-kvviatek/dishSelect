import React from "react";
import {ISlider} from "../../types/types";

const Slider = ({ input, min, max, step }: ISlider) => {
    input.value = input.value || 1;
    return (
        <div className="flex flex-col-reverse items-center justify-between my-2">
            <input
                {...input}
                type="range"
                min={min}
                max={max}
                step={step}
                className="appearance-none w-full h-8 rounded-md bg-gray-300 outline-none opacity-70 transition duration-200 hover:opacity-2 cursor-pointer
"
            />
        </div>
    );
};

export default Slider;
