import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Input} from "./Input";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState('')

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        myFetch()
    }, [])

    const showUpHandler = () => {
        myFetch()
    }
    const deleteHandler = () => {
        setTodos([])
    }
    const todosMap = todos.map(el => {
        return (
            <li key={el.id}>
                <span>{el.userId}</span>
                <span>{el.title}</span>
                <input type={"checkbox"} checked={el.completed}/>
            </li>
        )
    })

    const addNewTitleHandler = () => {
        const newTodo = {
            completed: false,
            id: todos.length+1,
            title: newTitle,
            userId: 100200
        }
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }

    return (
        <div className="App">
            <Button title='Show up' callback={showUpHandler}/>
            <Button title='Delete' callback={deleteHandler}/>
            <Input newTitle={newTitle} setNewTitle={setNewTitle}/>
            <Button title='Add new title' callback={addNewTitleHandler}/>
            <ul>
                {todosMap}
            </ul>
        </div>
    );
}

export default App;
