import { useSelector } from "react-redux";
import SkeletonTodoItem from "./SkeletonTodoItem";
import TodoItem from "./TodoItem";

const CardTodos = () => {
  const { todoItems } = useSelector((state) => state.todoItems);
  const { usersTodoItem } = useSelector((state) => state.usersTodoItem);

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
          {todoItems.length === 200 ? (
            todoItems.map(
              (item, index) =>
                item.completed === false && (
                  <TodoItem
                    key={index}
                    userID={item.userId}
                    text={item.title}
                  />
                )
            )
          ) : usersTodoItem.length > 0 ? (
            usersTodoItem.map((item, index) =>
              item.completed === false ? (
                <TodoItem key={index} userID={item.userId} text={item.title} />
              ) : (
                ""
              )
            )
          ) : (
            <>
              <SkeletonTodoItem />
              <SkeletonTodoItem />
              <SkeletonTodoItem />
              <SkeletonTodoItem />
              <SkeletonTodoItem />
              <SkeletonTodoItem />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardTodos;
