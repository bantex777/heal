import { ValidationResult } from "@/app/core/types/ValidationResult";
import { useState } from "react";

type Validator = (value: string) => ValidationResult;

export const useInput = (validator: Validator) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);

    const onChange = (text: string) => {
        setValue(text);
        if (touched) {
            const result = validator(text);
            setError(result.isValid ? null : result.error!);
        }
    };

    const onBlur = () => {
        setTouched(true);
        const result = validator(value);
        setError(result.isValid ? null : result.error!);
    }

    return {
        value,error,onChange,onBlur,isValid: !error,
    };
};