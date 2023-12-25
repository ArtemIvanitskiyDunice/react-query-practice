import axios from 'axios'
import { ITodo } from '../interfaces/app.interface'

const useTodoService = () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos'

    const getById = async (id: string) => {
        return axios.get<ITodo>(`${URL}/${id}`)
    }
    const getAll = async () => {
        return axios.get<ITodo[]>(`${URL}/?_start=0&_limit=8`)
    }
    const createTodo = async (title: string) => {
        return axios.post(URL, {
            title,
            userId: 1,
            completed: false,
        })
    }
    return {
        getById,
        getAll,
        createTodo,
    }
}

export default useTodoService
