import axios from 'axios'
import { ITodo } from '../interfaces/app.interface'

const useTodoService = () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos'

    const getById = async (id: string) => {
        return axios.get<ITodo>(`${URL}/${id}`)
    }
    const getAll = async () => {
        return axios.get<ITodo[]>(`${URL}`)
    }
    return {
        getById,
        getAll,
    }
}

export default useTodoService
