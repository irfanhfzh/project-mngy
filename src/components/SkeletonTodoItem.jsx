const SkeletonTodoItem = () => {
  return (
    <>
      <div className="card card-item p-2 my-2">
        <div
          className="skeleton-items mb-2"
          style={{
            width: "max-content",
            borderRadius: "5px",
          }}
        >
          <p
            className="text-white fw-bold px-2 mb-0"
            style={{ fontSize: ".75rem", visibility: "hidden" }}
          >
            User 10
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div
            className="skeleton-items"
            style={{
              marginRight: "20px",
              borderRadius: "5px",
            }}
          >
            <p className="mb-0 me-2" style={{ visibility: "hidden" }}>
              Lorem ipsum dolor sit amet hahah.
            </p>
          </div>
          <div className="form-check">
            <input
              className="skeleton-items form-check-input"
              type="checkbox"
              defaultValue
              disabled
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonTodoItem;
