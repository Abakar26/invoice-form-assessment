// src/components/ItemList.tsx
import React from "react";
import { useState, useEffect } from "react";
import deleteButton from "../../assets/Frame.svg";
import { FormState, Errors, Item } from "../../interfaces/formInterface";

interface ItemProps {
  formState: FormState;
  setValues: React.Dispatch<React.SetStateAction<FormState>>;
  errors: Errors<FormState>;
}

const ItemList: React.FC<ItemProps> = ({ formState, setValues, errors }) => {
  const [items, setItems] = useState<Item[]>(formState.items);

  // Sync items state with formState.items when formState changes
  useEffect(() => {
    setItems(formState.items);
  }, [formState.items]);

  useEffect(() => {
    setValues((prevState) => ({
      ...prevState,
      items: items,
    }));
  }, [items, setValues]);

  // Function to add a new item
  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, amount: 0, total: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    } else {
      // If it's the last item, reset it to an initial empty item
      setItems([{ name: "", quantity: 1, amount: 0, total: 0 }]);
    }
  };

  const handleItemChange = (
    index: number,
    key: keyof Item,
    value: string | number,
  ) => {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          const updatedItem = { ...item, [key]: value };

          // Convert value to number if it's a string
          const quantity =
            key === "quantity" ? Number(value) : updatedItem.quantity;
          const price = key === "amount" ? Number(value) : updatedItem.amount;

          const updatedTotal = quantity * price;

          return {
            ...updatedItem,
            total: isNaN(updatedTotal) ? 0 : updatedTotal,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-semibold mb-4">Items List</h2>
      {items.map((item, index) => (
        <div key={index} className="grid md:grid-cols-10 mb-4 gap-4">
          <div className="col-span-3">
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Item Name
            </label>
            <input
              type="text"
              name={`items.${index}.name`}
              value={item.name}
              onChange={(e) => handleItemChange(index, "name", e.target.value)}
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Qty.
            </label>
            <input
              type="number"
              name={`items.${index}.quantity`}
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", parseInt(e.target.value))
              }
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Price
            </label>
            <input
              type="number"
              name={`items.${index}.amount`}
              value={item.amount}
              onChange={(e) =>
                handleItemChange(index, "amount", parseFloat(e.target.value))
              }
              className="w-full px-2 h-[44px] border border-[#D0D5DD] rounded-lg"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[14px] leading-5 text-[#344054] mb-1 font-medium">
              Total
            </label>
            <input
              type="text"
              value={item.total}
              readOnly
              className="w-full px-2 h-[44px] rounded-lg bg-[#D0D5DD]"
            />
          </div>
          <div className="mt-3 col-span-1">
            <button
              type="button"
              onClick={() => removeItem(index)}
              className=""
            >
              <img src={deleteButton} alt="delete icon" />
            </button>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 mt-4">
        <button
          type="button"
          onClick={addItem}
          className="bg-[#7F56D9] text-white p-2 mt-4 rounded-lg"
        >
          + Add New Item
        </button>
      </div>
    </div>
  );
};

export default ItemList;
