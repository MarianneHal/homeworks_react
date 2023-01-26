

const Todo = ({todo}) => {
    return (
        <div>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.completed.toString()}</div>
        </div>
    );
};
export {Todo};