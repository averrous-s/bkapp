import type { NextPage } from 'next'
import InputIsian from "../../components/forms/input_isian";
import Layout from "../../components/layout";
import styles from "../../styles/Catat.module.scss"
import InputForm from "../../components/InputForm";
import {useEffect, useState} from "react";

const Catat: NextPage = () => {
    const questions = ["Nama konsul", "Perihal"]
    const [answers, setAnswers] = useState([])

    return <Layout>
        <div className={styles.container}>
            {
                questions.map(val => {
                    return <>
                        <InputForm index={0} question={val}/>
                    </>
                })
            }

        </div>
    </Layout>
}

export  default Catat