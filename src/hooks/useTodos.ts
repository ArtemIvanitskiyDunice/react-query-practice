import { useQuery } from '@tanstack/react-query'
import useTodoService from '../services/todo.service'

export const useTodos = () => {
    const { getAll } = useTodoService()
    return useQuery({
        queryKey: ['todos'],
        //ключ для взаимодействия react-query
        queryFn: () => getAll(),
        select: ({ data }) => data,
        //select позволяет после успешного получения данных их трансформировать на стороне react-query
        retry: 10,
        //количество повторных запросов до получения ошибки
    })
}
