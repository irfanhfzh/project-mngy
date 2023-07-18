import { Droppable } from "react-beautiful-dnd";
import SkeletonTodoItem from "./SkeletonTodoItem";
import TodoItem from "./TodoItem";

const CardInProgress = ({ todoItems, usersTodoItem, isUsersChange }) => {
	return (
		<div className="card card-todos">
			<div className="bg-white" style={{ borderRadius: "0.375rem" }}>
				<h5
					className="fw-bold py-2 mb-0"
					style={{ borderBottom: "4px solid #c471ed" }}
				>
					IN PROGRESS
				</h5>
			</div>
			<Droppable droppableId="InProgressList">
				{(provided) => (
					<div
						className="text-start card-items"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{(!isUsersChange || !usersTodoItem?.length) && (
							<>
								{todoItems?.length ? (
									todoItems?.map((item, index) => (
										<TodoItem
											key={index}
											id={item?.id?.toString()}
											index={index}
											userID={item?.userId}
											text={item?.title}
										/>
									))
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
							</>
						)}

						{isUsersChange && usersTodoItem?.length > 0 && (
							<>
								{usersTodoItem?.map((item, index) => (
									<TodoItem
										key={index}
										id={item?.id?.toString()}
										index={index}
										userID={item?.userId}
										text={item?.title}
									/>
								))}
							</>
						)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default CardInProgress;
