export const getTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
};
