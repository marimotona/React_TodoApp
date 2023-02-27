import React, { useState } from 'react'

const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([
            ...taskList, //空のtaskListに追加する情報を入れている
            {
                text: inputText
            }
        ]);
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                    <button>
                        <i className="fa-regular fa-comment-plus"></i>
                    </button>
            </form>
        
        </div>
  )
}

export default InputForm
