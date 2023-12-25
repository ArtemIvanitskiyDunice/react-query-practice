import { useQuery } from '@tanstack/react-query'
import { ITodo } from './app.interface'
import useTodoService from './services/todo.service';


const todoId = 1

function App() {
    const {getAll, getById}  = useTodoService();

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['todos'],
        //ключ для взаимодействия react-query
        queryFn: () => getAll(),
        select: ({ data }) => data,
        //select позволяет после успешного получения данных их трансформировать на стороне react-query
    })

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    function renderItems (arr: ITodo[]) {
        const items = arr.map((item) => {
            return (
            <li key={item.id}><b>{item.id}</b> {item.title}</li>
            )  
        })
        return (
            <ul>
                {items}
            </ul>
        )
    }

    const todos: JSX.Element | null = data ? renderItems(data) : null;

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
