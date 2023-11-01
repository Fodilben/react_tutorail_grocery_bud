import { useState } from "react";
import Forms from "./component/Forms";
import { nanoid } from "nanoid";
import Items from "./component/Items";
import { ToastContainer, toast } from "react-toastify";
const getItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};
const setItem = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const App = () => {
  const [items, setItems] = useState(getItem());
  const addItem = (itemName) => {
    const newitem = {
      name: itemName,
      complited: false,
      id: nanoid(),
    };
    const newItems = [...items, newitem];
    setItems(newItems);
    setItem(newItems);
    toast.success("item added to the list");
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setItem(newItems);
    toast.success("item removed");
  };
  const editeItem = (id) => {
    const newItem = items.map((it) => {
      if (it.id === id) {
        const newit = { ...it, complited: !it.complited };
        return newit;
      } else {
        return it;
      }
    });
    setItems(newItem);
    setItem(newItem);
  };
  return (
    <section className="section-center ">
      <ToastContainer position="top-center" />
      <Forms addItem={addItem} />
      <Items items={items} removeItem={removeItem} editeItem={editeItem} />
    </section>
  );
};

export default App;
// localStorage.clear();
