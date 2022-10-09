import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const CardDone = () => {
  const { todoItems } = useSelector((state) => state.todoItems);

  return (
    <>
      <div className="card card-todos">
        <div className="bg-white" style={{ borderRadius: "0.375rem" }}>
          <h5
            className="fw-bold py-2 mb-0"
            style={{ borderBottom: "4px solid #12c2e9" }}
          >
            DONE
          </h5>
        </div>
        <div className="text-start card-items">
          {todoItems.map(
            (item, index) =>
              item.completed === true && (
                <TodoItem
                  key={index}
                  text={item.title}
                  style={{ opacity: "0.5", textDecorationLine: "line-through" }}
                  InputID="flexCheckChecked"
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default CardDone;
