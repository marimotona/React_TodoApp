import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([
            ...taskList, //空のtaskListに追加する情報を入れている
            {
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);
        setInputText("");
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }

    //valueはinputされた中身
    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/> 
                    <button type="submit" className="btn-square-pop">
                        {/* <i className="fa-regular fa-comment-plus"></i> */}
                        {/* <a className="btn-square-pop">BUTTON</a> */}
                        BUTTON
                    </button>
            </form>
        
        </div>
  )
}

export default InputForm
