import React, {useState} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {Field, reduxForm, formValueSelector, InjectedFormProps, FormErrors} from 'redux-form';
import {IFormData} from "../types/types";

import sendDataToApi from "../api/api";
import Label from "./common/Label";
import Pizza from "./dish types/Pizza";
import Sandwich from "./dish types/Sandwitch";
import Soup from "./dish types/Soup";
import Wrapper from "./common/Wrapper";
import SuccessMessage from "./common/SuccessMessage";
import ErrorMessage from "./common/ErrorMessage";

interface Props extends ConnectedProps<typeof connector> {}

const validate = (values: IFormData) => {
    const errors: FormErrors<IFormData> = {};
    const { name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread } = values;
    errors.name = !name ? 'Required' : '';
    errors.preparation_time = !preparation_time ? 'Required' : '';
    errors.type = !type ? 'Required' : '';
    if (type === 'pizza') {
        errors.no_of_slices = !no_of_slices ? 'Required' : '';
        errors.diameter = !diameter ? 'Required' : '';
    } else if (type === 'soup') {
        errors.spiciness_scale = !spiciness_scale ? 'Required' : '';
    } else if (type === 'sandwich') {
        errors.slices_of_bread = !slices_of_bread ? 'Required' : '';
    }
    return errors;
};

const SelectingFormValuesForm: React.FC<InjectedFormProps<IFormData, Props> & Props> = ({
                                                                                           dishType,
                                                                                           handleSubmit,
                                                                                           invalid,
                                                                                           pristine,
                                                                                           reset,
                                                                                           submitting,
                                                                                       }) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const normalizeTime = (value: string) => {
        if (!value) return value;
        const onlyNums = value.replace(/\D/g, '');
        return (
            onlyNums.slice(0, 2) +
            (onlyNums.length >= 3 ? ':' + onlyNums.slice(2, 4) : '') +
            (onlyNums.length >= 5 ? ':' + onlyNums.slice(4, 6) : '')
        );
    };

    const onSubmit = (formData: IFormData) => {
        sendDataToApi(formData)
            .then((response) => {
                if (response.status === 200) {
                    setSuccessMessage('Form submitted successfully.');
                    setErrorMessage(null);
                }
            })
            .catch((error) => {
                console.error(error);
                setSuccessMessage(null);
                setErrorMessage('Error - please check the form!');
            });
    };

    const closeSuccessMessage = () => {
        setSuccessMessage(null);
        reset();
    };
    const closeErrorMessage = () => {
        setErrorMessage(null);
        reset();
    };
    return (
        <>
            { successMessage && <SuccessMessage successMessage={successMessage} closeSuccessMessage={closeSuccessMessage} /> }
            { errorMessage && <ErrorMessage errorMessage={errorMessage} closeErrorMessage={closeErrorMessage} /> }

            <Wrapper title="Please select your dish" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Wrapper>
                    <Label htmlFor="name" title="Dish name" />
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Please provide a name of your dish"
                        required
                    />
                    <Label htmlFor="preparation_time" title="Preparation time" />
                    <Field
                        name="preparation_time"
                        component="input"
                        type="text"
                        placeholder="00:00:00"
                        pattern="\d{2}:\d{2}:\d{2}"
                        required
                        normalize={normalizeTime}
                    />
                    <Label htmlFor="type" title="Dish Type" />
                    <Field name="type" component="select" required>
                        <option value="">Select a dish type...</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="sandwich">Sandwich</option>
                    </Field>
                </Wrapper>

                {dishType === 'pizza' && <Pizza />}
                {dishType === 'soup' && <Soup />}
                {dishType === 'sandwich' && <Sandwich />}

                <Wrapper>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between">
                        <button type="submit" name="submit" disabled={invalid|| submitting || pristine}>Submit</button>
                        <button name="clear" onClick={reset}>Clear</button>
                    </div>
                </Wrapper>
            </form>
        </>
    );
};

const selector = formValueSelector<IFormData>('dishForm');
const formOptions = {
    form: 'dishForm',
    validate,
};
const connector = connect((state: IFormData) => {
    const dishType = selector(state, 'type');
    const name = selector(state, 'name');
    return {
        dishType,
        name: `${name || ''}`,
    };
});
const formConnector = reduxForm<IFormData, Props>(formOptions)(SelectingFormValuesForm);
export default connector(formConnector);
