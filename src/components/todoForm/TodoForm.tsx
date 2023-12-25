import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import useTodoService from "../../services/todo.service";

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const {createTodo} = useTodoService()
    const {mutate} = useMutation({
        //метод для любого изменения отправленного на сервер
        mutationKey: ['create todo'],
        //ключ для манипуляуии мутацией
        mutationFn: (title: string) => createTodo(title),
        onSuccess: () => {
            //действие в результате успешного ответа от сервера
            setTitle(''),
            alert('Todo created! (в данном случае не добавляется из-за ограничений API)')
        },
    })

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        mutate(title);
    }
    return (
        <div>
            <h2>Create Todo</h2>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter Todo title"/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default TodoForm;