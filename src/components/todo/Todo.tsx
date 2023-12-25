import { useTodo } from '../../hooks/useTodo'

const Todo = ({ todoId, setTodoId } : {todoId: number, setTodoId: React.Dispatch<React.SetStateAction<number>>}) => {
    const { isLoading, isError, isFetching, error, data } = useTodo(todoId)

    return (
        <div>
            <a onClick={() => setTodoId(-1)} href="#">
                Вернцуться
            </a>
            {isLoading ? (
                <div> Загрузка...</div>
            ) : data ? (
                <div>
                    <h1>Todo {data.id}:</h1>
                    <div>{data.title}</div>
                </div>
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
