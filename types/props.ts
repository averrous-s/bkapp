interface props{
    children?: JSX.Element[] | JSX.Element | string
}


export interface QuestionProps extends props{
    index: number;
    question: string;
}

