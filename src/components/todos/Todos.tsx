import { useTodos } from '../../hooks/useTodos'
import { ITodo } from '../../interfaces/app.interface'

const Todos = ({ setTodoId }) => {
    const { isLoading, isError, isFetching, error, data } = useTodos()

    function renderItems(arr: ITodo[]) {
        const items = arr.map((item) => {
            return (
                <li key={item.id}>
                    <a onClick={() => setTodoId(item.id)} href="#">
                        {item.title}
                    </a>
                </li>
            )
        })
        return <ul>{items}</ul>
    }

    const todos: JSX.Element | null = data ? renderItems(data) : null

    return (
        <div>
            {isLoading ? (
                <div> Загрузка...</div>
            ) : data ? (
                <h1>Todos: {todos}</h1>
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

export default Todos
