import React, {ReactNode} from "react";

export interface IState {
    spicinessScale: number;
    numSandwichSlices: number;
    numPizzaSlices: number;
    pizzaDiameter: number;
};

export interface IFormData {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices?: number;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
};

export interface ISlider {
    input: {
        value: number;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    min: number;
    max: number;
    step: number;
};

export interface IWrapper {
    children?: ReactNode;
    className?: string;
    title?: string;
};

export interface ILabel {
    title: string;
    className?: string;
    htmlFor?: string;
}

export interface IMessages {
    successMessage?: string;
    closeSuccessMessage?: React.MouseEventHandler<SVGSVGElement>;
    errorMessage?: string;
    closeErrorMessage?: React.MouseEventHandler<SVGSVGElement>;
}
