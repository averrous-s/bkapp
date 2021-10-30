import React, {useState} from "react";
import Layout from "../../components/layout";
import {Konsultasi} from "../../types/db";
import store from '../../services/firestore'
import {createDailyBKReportPDF} from "../../libs/pdf";

export default function LihatData(){
    const [konsultasiData, setKonsultasiData] = useState<Konsultasi[]>([])

    React.useEffect(
         () => {
            store.getKonsultasi().then(async (datas) => {
                await setKonsultasiData(datas as Konsultasi[])
                await createDailyBKReportPDF(datas[0] as Konsultasi)
            })
        }
    ,[])

    return <Layout>
        abc
    </Layout>
}