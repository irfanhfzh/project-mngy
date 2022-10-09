const TodoItem = (props) => {
  return (
    <>
      <div className="card card-item p-2 my-2">
        <div
          className="bg-dark mb-1"
          style={{ width: "max-content", borderRadius: "5px" }}
        >
          <p
            className="text-white fw-bold px-2 mb-0"
            style={{ fontSize: ".75rem", paddingBlock: ".15rem" }}
          >
            User {props.userID}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 me-3" style={props.style}>
            {props.text}
          </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id={props.InputID || "flexCheckDefault"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
