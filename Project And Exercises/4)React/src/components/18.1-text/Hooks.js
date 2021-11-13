import React from "react"
import './style.css'
const Words = () => {
    const [sentence, setSentence] = React.useState({
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil id perferendis, saepe ipsa asperiores impeditnon ducimus praesentium, culpa optio dignissimos labore eos repellendus nobis. Eligendi hic blanditiis accusantium,unde architecto deleniti ullam optio corrupti? Obcaecati sint cumque illum ullam ducimus, pariatur voluptatum officiis unde itaque tenetur, hic mollitia.',
        textLongNumber: 50

    })
    const [btnName, setbtnName] = React.useState('...read more')


    const showText = (e) => {
        let newWordsObj = { ...sentence }
        newWordsObj.textLongNumber = sentence.text.length
        setSentence(newWordsObj)
        setbtnName('show less')
        if (e.target.value === 'show less') {
            setbtnName('...read more')
            setSentence({ text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil id perferendis, saepe ipsa asperiores impeditnon ducimus praesentium, culpa optio dignissimos labore eos repellendus nobis. Eligendi hic blanditiis accusantium,unde architecto deleniti ullam optio corrupti? Obcaecati sint cumque illum ullam ducimus, pariatur voluptatum officiis unde itaque tenetur, hic mollitia.'
            , textLongNumber: 50 })
        }
    }

    return (
        <div>
            {sentence.text.substring(0, sentence.textLongNumber)}
            <input type='button' value={btnName} onClick={showText} />
        </div>
    )
}
export default Words

