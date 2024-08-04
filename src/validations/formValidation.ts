import { ValidationRules } from "../hooks/useForm";
import { FormState } from "../interfaces/formInterface";

const isRequired = (value: string) =>
  value.trim() === "" ? "This field is required" : null;

const isValidEmail = (value: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ? null
    : "Invalid email address";

export const validationRules: ValidationRules<FormState> = {
  billFrom: {
    companyName: isRequired,
    email: (value: string) => isRequired(value) || isValidEmail(value),
    city: isRequired,
    postalCode: isRequired,
    country: isRequired,
    address: isRequired,
  },
  billTo: {
    companyName: isRequired,
    email: (value: string) => isRequired(value) || isValidEmail(value),
    city: isRequired,
    postalCode: isRequired,
    country: isRequired,
    address: isRequired,
  },
  invoiceDate: isRequired,
  invoiceTerms: isRequired,
  projectDescription: isRequired,
  items: [
    // array of validation rules for items
    {
      name: isRequired,
      quantity: (value) =>
        value > 0 ? null : "Quantity must be greater than 0",
      amount: (value) => (value > 0 ? null : "Amount must be greater than 0"),
    },
  ],
};
