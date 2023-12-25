import { useQuery } from "@tanstack/react-query"

const todoId = 1;

function App() {

	const {isLoading, error, data} = useQuery({
        queryKey:['todos', todoId],
        queryFn:() => 
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(
                res => res.json(),
            )
    });

    return (
        <div>
            {data ? <h1>Todo: {data.title}</h1> : <h1>Data not found!</h1>}
        </div>
    )
}

export default App
