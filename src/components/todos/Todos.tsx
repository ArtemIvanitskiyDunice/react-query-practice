import { useQueryClient } from '@tanstack/react-query'
import { useTodos } from '../../hooks/useTodos'
import { ITodo } from '../../interfaces/app.interface'

const Todos = ({ setTodoId } : {setTodoId: React.Dispatch<React.SetStateAction<number>>}) => {
    const { isLoading, isError, isFetching, refetch, error, data } = useTodos()
    //isLoading и тд - это статусы загрузки, так же можно написать status и получить значение, которое будет содержать разный статус
    //отличие isFetching от isLoading в том, что в первом случае повторный запрос к кэшу сохраненных данных, если такие уже имеются
    //refetch это возможность в ручную или по условию обновить данные на странице, самый примитивный способ, который потребует проброс пропсов
    function renderItems(arr: ITodo[]) {
        const items = arr.map((item) => {
            return (
                <li key={item.id}>
                    <a onClick={() => setTodoId(item.id)} href="#">
                        {item.id}: {item.title}
                    </a>
                </li>
            )
        })
        return <ul>{items}</ul>
    }
    const queryClient = useQueryClient();
    //хук TanStack query, который позволяет разные операции с ключом useQuery, в том числе ревалидацию запроса любого элемента по ключу

    const todos: JSX.Element | null = data ? renderItems(data) : null

    return (
        <div>
            <button onClick={() => refetch()}>Refresh...</button>
            <button onClick={() => queryClient.invalidateQueries({queryKey: ['todos']})}>Hook Refresh...</button>
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
