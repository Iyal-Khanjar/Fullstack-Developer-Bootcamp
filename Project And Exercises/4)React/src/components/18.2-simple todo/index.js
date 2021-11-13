import React from "react"
import './style.css'
// import Input from "./input"
const Todo = () => {
    const [check, setCheck] = React.useState
        ([
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },
        ])
    const Clicked = (e) => {
        let newCheck = [...check]
        newCheck[e.target.id].completed = !newCheck[e.target.id].completed
        setCheck(newCheck)

    }
    return (
        <div className='container' style={{ textAlign: 'center' }}>
            {check.map((item, index) => {
                return <p key={index} className={item.completed ? 'lineThrough' : 'none'}>{item.name}<input id={index} type='button' value={item.completed ? '✓' : 'X'} onClick={Clicked} /></p>
            })}
        </div>
    )
}
export default Todo