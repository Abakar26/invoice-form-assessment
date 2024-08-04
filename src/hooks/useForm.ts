import { useState } from "react";
import { Errors } from "../interfaces/formInterface";

type ValidationRule<T> = (value: T) => string | null;
export type ValidationRules<T> = {
  [K in keyof T]?: T[K] extends object
    ? ValidationRules<T[K]>
    : ValidationRule<T[K]>;
};

type FormState<T> = {
  values: T;
  errors: Errors<T>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  setValues: React.Dispatch<React.SetStateAction<T>>;
};

export function useForm<T>(
  initialValues: T,
  validationRules: ValidationRules<T>,
): FormState<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const [mainKey, subKey] = name.split(".");

    setValues((prevValues) => {
      const updatedValues = { ...prevValues };

      if (subKey) {
        // Cast to any to avoid TypeScript issues
        (updatedValues[mainKey as keyof T] as any)[subKey] = value;
      } else {
        updatedValues[name as keyof T] = value as any;
      }

      return updatedValues;
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Errors<T> = {} as Errors<T>;

    const validateField = (
      fieldKey: keyof T,
      value: any,
      rules: ValidationRules<T>,
    ) => {
      const rule = rules[fieldKey];

      if (typeof rule === "function") {
        // Direct field validation
        const error = (rule as ValidationRule<any>)(value);
        if (error) {
          valid = false;
          newErrors[fieldKey] = error as any;
        }
      } else if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // Handle nested object validation
        const nestedRules = rule as ValidationRules<any>;

        for (const subKey in value) {
          if (value.hasOwnProperty(subKey)) {
            const nestedValue = value[subKey as keyof typeof value];
            const nestedRule = nestedRules[subKey];
            if (nestedRule) {
              const error = (nestedRule as ValidationRule<any>)(nestedValue);
              if (error) {
                valid = false;
                if (!newErrors[fieldKey]) {
                  newErrors[fieldKey] = {} as any;
                }
                (newErrors[fieldKey] as any)[subKey as keyof any] = error;
              }
            }
          }
        }
      }
    };

    for (const key in validationRules) {
      const fieldKey = key as keyof T;
      const fieldValue = values[fieldKey];
      validateField(fieldKey, fieldValue, validationRules);
    }

    setErrors(newErrors);
    return valid;
  };

  const resetForm = () => {
    setValues({
      ...initialValues,
      items: [{ name: "", quantity: 1, amount: 0, total: 0 }], // Reset items to initial state
    });
    setErrors({});
  };

  return { values, errors, handleChange, validateForm, resetForm, setValues };
}
