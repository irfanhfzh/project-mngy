import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const CardTodos = () => {
  const { todoItems } = useSelector((state) => state.todoItems);

  return (
    <>
      <div className="card card-todos">
        <div className="bg-white" style={{ borderRadius: "0.375rem" }}>
          <h5
            className="fw-bold py-2 mb-0"
            style={{ borderBottom: "4px solid #f64f59" }}
          >
            TO DOS
          </h5>
        </div>
        <div className="text-start card-items">
          {todoItems.map((item, index) =>
            item.completed === false && item.userId === 1 ? (
              <TodoItem key={index} text={item.title} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CardTodos;
