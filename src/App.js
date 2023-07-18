/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
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
	const selectRef = useRef(null);

	// new todoItems for dnd
	const [users, setUsers] = useState([]);
	const [todosList, setTodosList] = useState([]);
	const [inProgressList, setInProgressList] = useState([]);
	const [completedList, setCompletedList] = useState([]);
	const [usersTodoList, setUsersTodoList] = useState([]);
	const [usersInProgressList, setUsersInProgressList] = useState([]);
	const [usersCompletedList, setUsersCompletedList] = useState([]);
	const [isUsersChange, setIsUsersChange] = useState(false);

	const handleChangeUser = (e) => {
		setChangeUsers(e.target.value);
	};

	const handleGetUsersData = () => {
		dispatch(deleteUsersTodo());
		dispatch(getUsersTodo(parseInt(changeUsers)));
		dispatch(deleteTodos());

		setIsUsersChange(true);

		setInProgressList([]);
		setUsersInProgressList([]);
	};

	const handleGetData = () => {
		dispatch(getTodo());
		dispatch(deleteUsersTodo());

		if (selectRef.current) {
			selectRef.current.value = "";
		}

		setIsUsersChange(false);

		setInProgressList([]);
		setUsersInProgressList([]);
	};

	useEffect(() => {
		if (!todoItems.length) {
			dispatch(getTodo());
		} else {
			setUsers(todoItems.filter((item) => item.userId));
		}
	}, [todoItems]);

	useEffect(() => {
		setTodosList(todoItems?.filter((item) => item.completed === false));
		setCompletedList(todoItems?.filter((item) => item.completed === true));
		setUsersTodoList(usersTodoItem?.filter((item) => item.completed === false));
		setUsersCompletedList(
			usersTodoItem?.filter((item) => item.completed === true)
		);
	}, [todoItems, usersTodoItem]);

	const onDragEnd = (result) => {
		const { source, destination } = result;

		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let add,
			active = todosList,
			inProgress = inProgressList,
			complete = completedList;

		let addUsers,
			activeUsers = usersTodoList,
			inProgressUsers = usersInProgressList,
			completeUsers = usersCompletedList;

		if (source.droppableId === "TodosList") {
			add = active[source.index];
			active.splice(source.index, 1);

			addUsers = activeUsers[source.index];
			activeUsers.splice(source.index, 1);
		} else if (source.droppableId === "InProgressList") {
			add = inProgress[source.index];
			inProgress.splice(source.index, 1);

			addUsers = inProgressUsers[source.index];
			inProgressUsers.splice(source.index, 1);
		} else {
			add = complete[source.index];
			complete.splice(source.index, 1);

			addUsers = completeUsers[source.index];
			completeUsers.splice(source.index, 1);
		}

		if (destination.droppableId === "TodosList") {
			active.splice(destination.index, 0, add);

			activeUsers.splice(destination.index, 0, addUsers);
		} else if (destination.droppableId === "InProgressList") {
			inProgress.splice(destination.index, 0, add);

			inProgressUsers.splice(destination.index, 0, addUsers);
		} else {
			complete.splice(destination.index, 0, add);

			completeUsers.splice(destination.index, 0, addUsers);
		}

		setTodosList(active);
		setInProgressList(inProgress);
		setCompletedList(complete);
		setUsersTodoList(activeUsers);
		setUsersInProgressList(inProgressUsers);
		setUsersCompletedList(completeUsers);
	};

	const uniqueUserIds = [...new Set(users.map((item) => item.userId))];

	return (
		<div className="container-fluid text-center my-4">
			<>
				<h4 className="text-white fw-semibold">
					MNGY Project - Todo List Drag & Drop
				</h4>
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
									{todoItems.length === 200 && usersTodoItem.length === 0
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
										ref={selectRef}
									>
										<option value="">Ganti User</option>
										{uniqueUserIds?.length > 0 &&
											uniqueUserIds.map((item) => (
												<option key={item} value={item}>
													User {item}
												</option>
											))}
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
									Reset Data API
								</button>
							</div>
						</div>
					</div>
					<DragDropContext onDragEnd={onDragEnd}>
						<div className="col-xl-9 flex-wrap flex-lg-nowrap mx-auto d-flex gap-3 justify-content-center justify-content-lg-between todos-wrapper">
							<CardTodos
								todoItems={todosList}
								usersTodoItem={usersTodoList}
								isUsersChange={isUsersChange}
							/>
							<CardInProgress
								todoItems={inProgressList}
								usersTodoItem={usersInProgressList}
								isUsersChange={isUsersChange}
							/>
							<CardDone
								todoItems={completedList}
								usersTodoItem={usersCompletedList}
								isUsersChange={isUsersChange}
							/>
						</div>
					</DragDropContext>
				</div>
			</div>
		</div>
	);
}

export default App;
