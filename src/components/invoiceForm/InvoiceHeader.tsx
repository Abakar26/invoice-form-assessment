import React from "react";

interface InvoiceProps {
  resetForm: () => void;
}

const InvoiceHeader: React.FC<InvoiceProps> = ({ resetForm }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <p className="text-[30px] font-medium">New Invoice</p>
        <p className="text-[16px] font-normal">
          Create new invoice for your customers
        </p>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={resetForm}
          className="bg-white text-black h-[44px] px-4 hover:shadow-lg shadow-md rounded-lg mr-3"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-[#7F56D9] text-white h-[44px] px-4 rounded-lg shadow-md hover:shadow-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default InvoiceHeader;
