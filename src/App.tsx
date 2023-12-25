import { ITodo } from './app.interface'
import { useTodos } from './hooks/useTodos'

function App() {
    const { isLoading, isError, error, data } = useTodos()
    if (isError) {
        return <span>Error: {error.message}</span>
        //обработка ошибок react-query
    }

    function renderItems(arr: ITodo[]) {
        const items = arr.map((item) => {
            return (
                <li key={item.id}>
                    <b>{item.id}</b> {item.title}
                </li>
            )
        })
        return <ul>{items}</ul>
    }

    const todos: JSX.Element | null = data ? renderItems(data) : null

    return (
        <div>
            {isLoading ? (
                <div> Loading...</div>
            ) : data ? (
                <h1>Todos: {todos}</h1>
            ) : (
                <h1>Data not found!</h1>
            )}
        </div>
    )
}

export default App
