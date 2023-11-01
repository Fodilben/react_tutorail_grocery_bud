import Item from "./Item";

const Items = ({ items, removeItem, editeItem }) => {
  return (
    <div className="items">
      {items.map((it) => {
        return (
          <Item
            key={it.id}
            item={it}
            removeItem={removeItem}
            editeItem={editeItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
