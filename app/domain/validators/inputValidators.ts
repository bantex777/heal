import { ValidationResult } from "@/app/core/types/ValidationResult";

export const required = (value: string): ValidationResult => {
    if (!value.trim) {
        return { isValid: false, error: "This field is required"};
    }
    return {isValid: true};
}

export const minLenght = (min: number) => (value: string): ValidationResult => {
    if(value.length < min) {
        return {isValid: false, error: `Minimum ${min} characters`};
    }
    return {isValid: true};
} 

export const emailFormat = (value:string): ValidationResult => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)){
        return { isValid: false, error:"Invalid email format"};
    }
    return {isValid: true};
}