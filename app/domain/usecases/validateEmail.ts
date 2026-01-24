import { emailFormat, required } from "../validators/inputValidators";

export const validateEmail = (value: string) => {
    const rules = [required,emailFormat];

    for (const rule of rules) {
        const result = rule(value);
        if(!result.isValid) return result;
    }

    return {isValid: true};
}