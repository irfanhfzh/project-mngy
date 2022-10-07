const Content = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">User {props.userID}</h6>
          <p className="card-text">Completed : {props.status}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
