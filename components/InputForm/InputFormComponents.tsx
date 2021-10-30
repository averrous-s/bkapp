import styled from "styled-components";

interface InputFormContainerProps {
    positionState: number
}

export const InputFormContainer = styled.div<InputFormContainerProps>`
    position: absolute;
    top: ${({positionState}) => positionState === 0? "-100%" : positionState === 1? "0": "100%"};
    transition: 0.2s ease-in-out;
`

export const okayButton = styled.button`
    
`

export const Question = styled.div`
    
`