import React from "react";

let arr = ["one", "two", "three", "four", "five"];
const CheckBox = () => {
    const [checked, setChecked] = React.useState([])
    const [copyChecked, setCopyChecked] = React.useState([])



    const Delete = () => {
        let copyChecked = [...checked]
        
        console.log(copyChecked);
    }


    return (
        <div>
            <input type='button' value='delete' onClick={Delete} />
            <input type='button' value='reset' onClick={() => window.location.reload()} /><br /><br />
            {arr.map((item, index) => {
                return <><ul>
                    <li> <input id={index} type='checkbox' onChange={() => setChecked([...checked, checked])} /><span>{item}</span></li><br />
                </ul></>
            })}
        </div>
    )


}

export default CheckBox