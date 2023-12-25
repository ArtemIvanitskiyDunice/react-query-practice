import { useState } from "react"

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(title)
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