import Content from "./components/Content";
import { useDispatch, useSelector } from "react-redux";
import { getTodosFetch } from "./bootstrap/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducers.todos);

  return (
    <div className="container text-center mt-4">
      <div>
        <h3>MNGY Project</h3>
        <h1 className="fw-semibold">Mau NGapain Yah...</h1>
      </div>
      <button className="mt-3" onClick={() => dispatch(getTodosFetch())}>
        Dapatkan Data API
      </button>
      <div className="d-flex justify-content-around gap-4 flex-wrap my-5">
        {todos.map((item, index) => (
          <Content
            key={index}
            title={item.title}
            userID={item.userId}
            status={item.completed.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
