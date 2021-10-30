import React from "react";
import Input from '@mui/material/Input';

interface InputIsianProps{
    pertanyaan: string;
    deskripsi: string;
    nomor: number;
}

export default function InputIsian({pertanyaan, deskripsi, nomor}:InputIsianProps){
    return <>
        <div>
            <Input placeholder={pertanyaan} multiline sx={{
                width: "50vw",
                fontSize:"2rem"
            }}/>
        </div>
    </>
}