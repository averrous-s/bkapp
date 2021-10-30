import type { NextPage } from 'next'
import InputIsian from "../../components/forms/input_isian";
import Layout from "../../components/layout";
import styles from "../../styles/Catat.module.scss"
import InputForm from "../../components/InputForm";

const Catat: NextPage = () => {
    return <Layout>
        <div className={styles.container}>
            <InputForm index={0}>
                aaaa
            </InputForm>
        </div>
    </Layout>
}

export  default Catat