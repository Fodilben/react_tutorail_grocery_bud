import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Forms = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!itemName) {
      toast.error("please provide a value");
      return;
    }
    addItem(itemName);
    setItemName("");
  };
  return (
    <form onSubmit={submit} className="form-control">
      <input
        type="text"
        className="form-input "
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button className="btn " type="submit">
        add item
      </button>
    </form>
  );
};
export default Forms;
