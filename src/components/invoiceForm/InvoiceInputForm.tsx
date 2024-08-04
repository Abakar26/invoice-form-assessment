// src/components/InvoiceForm.tsx
import React from "react";
import ItemList from "./ItemList";
import { FormState, Errors } from "../../interfaces/formInterface";

interface InvoiceFormProps {
  formState: FormState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  setValues: React.Dispatch<React.SetStateAction<FormState>>;
  errors: Errors<FormState>;
}

const InvoiceInputForm: React.FC<InvoiceFormProps> = ({
  formState,
  handleChange,
  setValues,
  errors,
}) => {
  return (
    <div className="container rounded-3xl shadow-lg w-full mx-auto p-6">
      <div className="space-y-6">
        {/* Bill From Section */}
        <div className="bg-white">
          <h2 className="text-2xl font-semibold mb-4">Bill From</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="billFrom.companyName"
                value={formState.billFrom.companyName}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billFrom?.companyName && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.companyName}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Company Email
              </label>
              <input
                type="email"
                name="billFrom.email"
                value={formState.billFrom.email}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billFrom?.email && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.email}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Country
              </label>
              <select
                name="billFrom.country"
                value={formState.billFrom.country}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg text-[#667085] text-[16px]"
                required
              >
                <option selected>Select country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
              {errors.billFrom?.country && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.country}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                City
              </label>
              <input
                type="text"
                name="billFrom.city"
                value={formState.billFrom.city}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billFrom?.city && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.city}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Postal Code
              </label>
              <input
                type="text"
                name="billFrom.postalCode"
                value={formState.billFrom.postalCode}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billFrom?.postalCode && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.postalCode}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Street Address
              </label>
              <input
                type="text"
                name="billFrom.address"
                value={formState.billFrom.address}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billFrom?.address && (
                <span className="text-red-500 text-sm">
                  {errors.billFrom.address}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bill To Section */}

        <div className="bg-white">
          <h2 className="text-2xl font-semibold mb-4">Bill To</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Client's Name
              </label>
              <input
                type="text"
                name="billTo.companyName"
                value={formState.billTo.companyName}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billTo?.companyName && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.companyName}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Client's Email
              </label>
              <input
                type="email"
                name="billTo.email"
                value={formState.billTo.email}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billTo?.email && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.email}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Country
              </label>
              <select
                name="billTo.country"
                value={formState.billTo.country}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg text-[#667085] text-[16px]"
                required
              >
                <option selected>Select country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
              {errors.billTo?.country && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.country}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                City
              </label>
              <input
                type="text"
                name="billTo.city"
                value={formState.billTo.city}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billTo?.city && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.city}
                </span>
              )}
            </div>
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Postal Code
              </label>
              <input
                type="text"
                name="billTo.postalCode"
                value={formState.billTo.postalCode}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billTo?.postalCode && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.postalCode}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4">
            <div>
              <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
                Street Address
              </label>
              <input
                type="text"
                name="billTo.address"
                value={formState.billTo.address}
                onChange={handleChange}
                className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
                required
              />
              {errors.billTo?.address && (
                <span className="text-red-500 text-sm">
                  {errors.billTo.address}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Invoice Date
            </label>
            <input
              type="date"
              name="invoiceDate"
              value={formState.invoiceDate}
              onChange={handleChange}
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Invoice Terms
            </label>
            <select
              name="invoiceTerms"
              value={formState.invoiceTerms}
              onChange={handleChange}
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg text-[#667085] text-[16px]"
              required
            >
              <option selected>Select Invoice Terms</option>
              <option value="NET_10_DAYS">NET 10 DAYS</option>
              <option value="NET_20_DAYS">NET 20 DAYS</option>
              <option value="NET_30_DAYS">NET 30 DAYS</option>
            </select>
            {errors.invoiceTerms && (
              <span className="text-red-500 text-sm">
                {errors.invoiceTerms}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4">
          <div>
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Project Description
            </label>
            <input
              type="text"
              name="projectDescription"
              value={formState.projectDescription}
              onChange={handleChange}
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
              required
            />
            {errors.projectDescription && (
              <span className="text-red-500 text-sm">
                {errors.projectDescription}
              </span>
            )}
          </div>
        </div>

        {/* Items List */}
        <ItemList formState={formState} setValues={setValues} errors={errors} />
      </div>
    </div>
  );
};

export default InvoiceInputForm;
