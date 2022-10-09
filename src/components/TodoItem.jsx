const TodoItem = (props) => {
  return (
    <>
      <div className="card card-item p-2 my-2">
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 me-2" style={props.style}>
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
