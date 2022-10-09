import SkeletonTodoItem from "./SkeletonTodoItem";

const CardInProgress = () => {
  return (
    <>
      <div className="card card-todos">
        <div className="bg-white" style={{ borderRadius: "0.375rem" }}>
          <h5
            className="fw-bold py-2 mb-0"
            style={{ borderBottom: "4px solid #c471ed" }}
          >
            IN PROGRESS
          </h5>
        </div>
        <div className="text-start card-items">
          <>
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
          </>
        </div>
      </div>
    </>
  );
};

export default CardInProgress;
