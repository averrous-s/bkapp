import {FC, useState} from 'react'
import {QuestionProps} from "../../types/props";
import {PositionState} from "../../types/states";
import {InputFormContainer} from "./InputFormComponents";



function InputForm({ index }: QuestionProps){
    const [positionState, setPositionState] = useState<PositionState>(1)

    const pushPositionState = () => {
        setPositionState((prev) => prev + 1 as PositionState)
    }

    const pullPositionState = () => {
        setPositionState((prev) => prev - 1 as PositionState)
    }

    return <>
        {
            <InputFormContainer positionState={positionState}>

            </InputFormContainer>
        }
    </>
}

export default InputForm