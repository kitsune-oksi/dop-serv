import React, {ChangeEvent} from "react";

type InputPropsType = {
    newTitle: string
    setNewTitle: (newTitle: string)=>void
}

export const Input: React.FC<InputPropsType> = (props) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeHandler} value={props.newTitle}/>
        </div>
    )
}