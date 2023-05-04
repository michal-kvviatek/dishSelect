import React from "react";
import {IMessages} from "../../types/types";

const ErrorMessage = ({ errorMessage, closeErrorMessage }: IMessages) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-3 w-3 text-red-500" role="button" onClick={closeErrorMessage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414l-2.93 2.93a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.414l2.929-2.93-2.93-2.929a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 0l2.93 2.93 2.929-2.93a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-2.929 2.929 2.93 2.93a1 1 0 0 1 0 1.415z"/></svg>
          </span>
        </div>
    );
};

export default ErrorMessage;