import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        submitCallback(values);
    };

    const clearFormFields = () => {
        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        clearFormFields,
    }
};