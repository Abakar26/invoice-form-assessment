import React from "react";
import { Item } from "../../interfaces/formInterface";

type TableProps = {
  items: Item[];
};

const ItemPreviewTable: React.FC<TableProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#F5F5F5] rounded">
          <tr>
            <th className="px-6 py-3 text-left text-base font-normal text-[#76787D] tracking-wider">
              Item
            </th>
            <th className="px-6 py-3 text-left text-base font-normal text-[#76787D] tracking-wider">
              Qty.
            </th>
            <th className="px-6 py-3 text-left text-base font-normal text-[#76787D] tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-base font-normal text-[#76787D] tracking-wider">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-white">
          {items
            .filter((item) => item.amount !== 0 && item.name !== "")
            .map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-2 whitespace-nowrap text-base font-medium text-[#101828]">
                  {item.name}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-base font-medium text-[#101828]">
                  {item.quantity}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-base font-medium text-[#101828]">
                  ${item.amount.toFixed(2)}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-base font-medium text-[#101828]">
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemPreviewTable;
