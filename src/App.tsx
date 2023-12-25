import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const todoId = 1;

function App() {

	const {isLoading, error, data} = useQuery({
        queryKey:['todos', todoId],
        queryFn:() => 
            axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    });

    return (
        <div>
            {data ? <h1>Todo: {data.data.title}</h1> : <h1>Data not found!</h1>}
        </div>
    )
}

export default App
