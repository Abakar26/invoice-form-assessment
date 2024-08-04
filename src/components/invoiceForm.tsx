import React from "react";
import InvoiceHeader from "./invoiceForm/InvoiceHeader";
import InvoicePreview from "./invoicePreview/InvoicePreview";
import { useForm } from "../hooks/useForm";
import { FormState } from "../interfaces/formInterface";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createInvoice } from "../api/InvoicePostRequest";
import { validationRules } from "../validations/formValidation";
import InvoiceInputForm from "./invoiceForm/InvoiceInputForm";

const InvoiceFrom: React.FC = () => {
  const {
    values: formState,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setValues,
  } = useForm<FormState>(
    {
      billFrom: {
        companyName: "",
        email: "",
        city: "",
        postalCode: "",
        country: "",
        address: "",
      },
      billTo: {
        companyName: "",
        email: "",
        city: "",
        postalCode: "",
        country: "",
        address: "",
      },
      invoiceDate: new Date().toISOString().split("T")[0],
      invoiceTerms: "",
      projectDescription: "",
      items: [{ name: "", quantity: 1, amount: 0, total: 0 }],
    },
    validationRules,
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const result = await createInvoice(formState);
      toast.success("Invoice created successfully!");
      resetForm();
    } catch (error) {
      toast.error("Failed to create invoice!");
    }
  };

  return (
    <>
      <div className="md:p-10 p-4">
        <form onSubmit={handleFormSubmit}>
          <InvoiceHeader resetForm={resetForm} />
          <div className="grid h-full md:grid-cols-2 grid-cols-1 gap-y-5 md:gap-x-10 mt-5">
            <InvoiceInputForm
              formState={formState}
              handleChange={handleChange}
              setValues={setValues}
              errors={errors}
            />
            <InvoicePreview formState={formState} />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
export default InvoiceFrom;
