import { Droppable } from "react-beautiful-dnd";
import SkeletonTodoItem from "./SkeletonTodoItem";
import TodoItem from "./TodoItem";

const CardDone = ({ todoItems, usersTodoItem, isUsersChange }) => {
	return (
		<div className="card card-todos">
			<div className="bg-white" style={{ borderRadius: "0.375rem" }}>
				<h5
					className="fw-bold py-2 mb-0"
					style={{ borderBottom: "4px solid #12c2e9" }}
				>
					DONE
				</h5>
			</div>
			<Droppable droppableId="CompletedList">
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
											style={{
												opacity: "0.5",
												textDecorationLine: "line-through",
											}}
											InputID="flexCheckChecked"
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
										style={{
											opacity: "0.5",
											textDecorationLine: "line-through",
										}}
										InputID="flexCheckChecked"
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

export default CardDone;
