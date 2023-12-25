import { useTodo } from '../../hooks/useTodo'

const Todo = ({ todoId, setTodoId }) => {
    const { isLoading, isError, isFetching, error, data } = useTodo(todoId)

    return (
        <div>
            <a onClick={() => setTodoId(-1)} href="#">
                Вернцуться
            </a>
            {isLoading ? (
                <div> Загрузка...</div>
            ) : data ? (
                <h1>Todo: {data.title}</h1>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : isFetching ? (
                <div>Обновление...</div>
            ) : (
                <h1>Data not found!</h1>
            )}
        </div>
    )
}

export default Todo
