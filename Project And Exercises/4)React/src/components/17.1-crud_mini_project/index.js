import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [addList, setAddList] = useState('')

    useEffect(() => {
        const date = () => {
            axios.get(`https://jsonplaceholder.typicode.com/todos`)
                .then(res => {
                    setTodoList((res.data).splice(0, 10))
                    // console.log(res.data);
                })

        }
        date()
    }, [addList])
    const addName = (e) => {

        setAddList([...addList, e.target.value]);
    }
    return (
        <div>
            <input type='text' onChange={(e) => { addName(e) }} />

            <ul>
                {todoList.map(item => {
                    return (
                        <li>{item.title}</li>
                    )
                })}
            </ul>
        </div>
    )

}
export default Todo