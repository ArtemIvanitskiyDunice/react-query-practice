import { useQuery } from "@tanstack/react-query"
import useTodoService from "../services/todo.service"

export const useTodo = (todoId:number) => {
    const { getById } = useTodoService()
    return useQuery({
        queryKey: ['todo', todoId],
        //ключ для взаимодействия react-query, для каждой операции должен быть свой
        queryFn: () => getById(todoId.toString()),
        select: ({ data }) => data,
        //select позволяет после успешного получения данных их трансформировать на стороне react-query
        retry: 10,
        //количество повторных запросов до получения ошибки
        enabled:!!todoId,
        //запрос будет работать только при выполнении условий, в данном случае обязательно наличие айди в ключе
    })
}