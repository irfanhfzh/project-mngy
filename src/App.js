import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "./bootstrap/actions";
import ProfilePicture from "./assets/profile-img.png";
import CardTodos from "./components/CardTodos";
import CardInProgress from "./components/CardInProgress";
import CardDone from "./components/CardDone";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { todoItems } = useSelector((state) => state.todoItems);

  const handleGetData = () => {
    dispatch(getTodo());
    console.log(todoItems.map((item) => item.completed === true));
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  console.log(todoItems);
  return (
    <div className="container-fluid text-center mt-4">
      <div>
        <h4 className="text-white fw-semibold">MNGY Project</h4>
        <h1 className="text-white fw-bold">Mau NGapain Yah...</h1>
      </div>

      <div className="d-flex my-4 gap-3">
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <div className="profile-img mx-auto mb-2">
                <img
                  src={ProfilePicture}
                  alt="User Profile"
                  className="rounded-circle"
                  style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
                />
              </div>
              <h4 className="card-title fw-semibold">User 1</h4>
              <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option>Ganti User</option>
                  <option value={1}>User 1</option>
                  <option value={2}>User 2</option>
                  <option value={3}>User 3</option>
                </select>
                <p className="btn btn-sm btn-primary fw-semibold mb-0">
                  Get Data
                </p>
              </div>
              <button
                className="btn btn-sm btn-danger fw-semibold"
                onClick={() => handleGetData()}
              >
                Dapatkan Semua Data API
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between todos-wrapper">
          <CardTodos />
          <CardInProgress />
          <CardDone />
        </div>
      </div>
    </div>
  );
}

export default App;
