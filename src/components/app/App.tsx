import { useState } from 'react'
import Todos from '../todos/Todos'
import Todo from '../todo/Todo'

function App() {
    const [todoId, setTodoId] = useState(-1)
    return (
        <>
            <p>
                Тестовая страничка для возможностей tanstack query. Происходит
                получение всех элементов из JSONPlaceholder, без сохранения
                состояния внутри реакта. Каждый получаемый элемент при первом
                посещении имеет прогрузку, при повторном посещении все
                происходит мгновенно. Так же есть возможность отслеживать
                состояния.
            </p>
            {todoId > -1 ? (
                <Todo todoId={todoId} setTodoId={setTodoId} />
            ) : (
                <Todos setTodoId={setTodoId} />
            )}
        </>
    )
}

export default App
