// src/components/InvoicePreview.tsx
import React, { useEffect, useState } from "react";
import ItemPreviewTable from "./ItemPreviewTable";
import { FormState } from "../../interfaces/formInterface";

interface InvoicePreviewProps {
  formState: FormState;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ formState }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate the total price with 10% tax
  const calculateTotalPrice = () => {
    const subtotal = formState.items.reduce((acc, item) => acc + item.total, 0);
    const totalPrice = subtotal - subtotal * 0.1;
    return totalPrice;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [formState.items]);

  return (
    <div className="container rounded-3xl shadow-lg w-full mx-auto p-2 md:p-6 bg-[#F5F5F5]">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4">New Invoice</h2>
        <div className="border border-b border-[#EAECF0] mb-6"></div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-[#76787D] text-base font-normal">
              Invoice Date
            </label>
            <p>
              <strong>{formState.invoiceDate}</strong>
            </p>
          </div>
          <div>
            <label className="text-[#76787D] text-base font-normal">
              Payment Terms
            </label>
            <p>
              <strong>
                {formState.invoiceTerms ? formState.invoiceTerms : ""}
              </strong>
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-6">
          <div>
            <label>Bill From</label>
            <p>
              <strong>{formState.billFrom.companyName ?? ""}</strong>
            </p>
            <p>
              <strong>{formState.billFrom.email ?? ""}</strong>
            </p>
            <p>
              <strong>{formState.billFrom.address ?? ""}</strong>
            </p>
            <p>
              <strong>
                {formState.billFrom.city ?? ""}{" "}
                {formState.billFrom.postalCode ?? ""}
              </strong>
            </p>
            <p>
              <strong>{formState.billFrom.country ?? ""}</strong>
            </p>
          </div>
          <div>
            <label>Bill To</label>
            <p>
              <strong>{formState.billTo.companyName ?? ""}</strong>
            </p>
            <p>
              <strong>{formState.billTo.email ?? ""}</strong>
            </p>
            <p>
              <strong>{formState.billTo.address ?? ""}</strong>
            </p>
            <p>
              <strong>
                {formState.billTo.city ?? ""}{" "}
                {formState.billTo.postalCode ?? ""}
              </strong>
            </p>
            <p>
              <strong>{formState.billTo.country ?? ""}</strong>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <label>Project Description</label>
          <p>
            <strong>{formState.projectDescription ?? ""}</strong>
          </p>
        </div>
        <ItemPreviewTable items={formState.items ?? []} />
        <div className="border border-b border-[#EAECF0] mb-4"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-6">
          <div></div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-4">
              <label className="text-base font-semibold text-[#101828]">
                SubTotal
              </label>
              <p className="text-base font-semibold text-[#101828]">
                $
                {formState.items
                  .reduce((acc, item) => acc + item.total, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="text-base font-semibold text-[#101828]">
                Tax
              </label>
              <p className="text-base font-semibold text-[#101828]">10%</p>
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="text-xl font-bold text-[#101828]">Total</label>
              <p className="text-xl font-bold text-[#101828]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
