import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ProfilePicture from "./assets/profile-img.png";
import {
	deleteTodos,
	deleteUsersTodo,
	getTodo,
	getUsersTodo,
} from "./bootstrap/actions";
import CardDone from "./components/CardDone";
import CardInProgress from "./components/CardInProgress";
import CardTodos from "./components/CardTodos";

function App() {
	const dispatch = useDispatch();
	const { todoItems } = useSelector((state) => state.todoItems);
	const { usersTodoItem } = useSelector((state) => state.usersTodoItem);
	const [changeUsers, setChangeUsers] = useState(0);

	const handleChangeUser = (e) => {
		setChangeUsers(e.target.value);
	};

	const handleGetUsersData = () => {
		dispatch(deleteUsersTodo());
		dispatch(getUsersTodo(parseInt(changeUsers)));
		dispatch(deleteTodos());
	};

	const handleGetData = () => {
		dispatch(getTodo());
		dispatch(deleteUsersTodo());
	};

	useEffect(() => {
		if (!todoItems.length) {
			dispatch(getTodo());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container-fluid text-center my-4">
			<>
				<h4 className="text-white fw-semibold">MNGY Project</h4>
				<h1 className="text-white fw-bold">Mau NGapain Yah...</h1>
			</>

			<div className="d-flex my-4 gap-3">
				<div className="row gap-4 gap-xl-0">
					<div className="col-xl-3 col-lg-12">
						<div className="card mx-auto" style={{ width: "18rem" }}>
							<div className="card-body">
								<div className="profile-img mx-auto mb-2">
									<img
										src={ProfilePicture}
										alt="User Profile"
										className="rounded-circle"
										style={{
											width: "5rem",
											height: "5rem",
											objectFit: "cover",
										}}
									/>
								</div>
								<h4 className="card-title fw-semibold">
									{todoItems.length === 200
										? "All User"
										: usersTodoItem.length > 0
										? usersTodoItem
												.slice(0, 1)
												.map((item) => "User " + item.userId)
										: ". . . . ."}
								</h4>
								<div className="d-flex align-items-center justify-content-center gap-2 my-3">
									<select
										className="form-select form-select-sm"
										aria-label=".form-select-sm example"
										onChange={handleChangeUser}
									>
										<option>Ganti User</option>
										<option value={1}>User 1</option>
										<option value={2}>User 2</option>
										<option value={3}>User 3</option>
										<option value={4}>User 4</option>
										<option value={5}>User 5</option>
										<option value={6}>User 6</option>
										<option value={7}>User 7</option>
										<option value={8}>User 8</option>
										<option value={9}>User 9</option>
										<option value={10}>User 10</option>
									</select>
									<p
										className="btn btn-sm btn-primary fw-semibold mb-0"
										onClick={() => handleGetUsersData()}
									>
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
					<div className="col-xl-9 flex-wrap flex-lg-nowrap mx-auto d-flex gap-3 justify-content-center justify-content-lg-between todos-wrapper">
						<CardTodos />
						<CardInProgress />
						<CardDone />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
