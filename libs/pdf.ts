import {Konsultasi} from "../types/db";
import {PDFDocument, rgb, StandardFonts} from "pdf-lib";
import {generateSemester, generateTahunAjaran} from "../utils/generate_timeunits";

/*
BASIC INFO:
- Ukuran kertas A4: width: 595.28 height: 841.89 -- satuan tidak diketahui
DECISIONS:
- Ukuran header - 85 satuan
- Ukuran margin kanan kiri atas bawah - 42.5 satuan
- Desain umum list form - Okai

QUESTIONS:
- Gimana caranya ngebuat dia tengah otomatis?
 */
function saveByteArray(reportName: string, byte: any) {
    let blob = new Blob([byte], {type: "application/pdf"});
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    let fileName = reportName;
    link.download = fileName;
    link.click();
};

export async function createDailyBKReportPDF(data: Konsultasi){
    const pdfDoc = await PDFDocument.create()
    console.log(data)
    // BAGIAN BODY
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()

    page.setFont(helveticaFont)

    // Judul
    page.drawText(
        `RENCANA PELAKSANAAN LAYANAN BIMBINGAN DAN KONSELING \n` +
        `${data.namaSiswa} \n` +
        `Semester ${generateSemester()} Tahun Ajaran ${generateTahunAjaran()}\n`,
        {
            x: 25,
            y: 800,
            font: helveticaBoldFont,
            size: 12,
            color: rgb(0,0,0),
            lineHeight: 14,
        },
    )
    let judulInputForm = [
        "Nama Konseli",
        "Tanggal",
        "Kelas",
        "Materi",
        "Bidang Bimbingan",
        "Waktu",
        "Tempat",
        "Perihal"
    ]
    // Isi
    judulInputForm.forEach((val, i) => {
        page.drawText(val, {
            y: (800 - 14*4) - (14+28)*i,
            x: 60,
            size: 12,
            color: rgb(0,0,0),
            lineHeight: 14,
            font: helveticaFont,
        })
    })

    // TTD
    page.drawText( "Guru BK / Konselor", {
        y: 130,
        x: 400,
        size: 12,
        color: rgb(0,0,0),
        lineHeight: 14,
        font: helveticaFont
    }) // harusnya nama siswa menjadi nama guru
    page.drawText(data.namaSiswa, {
        y: 20,
        x: 400,
        size: 12,
        color: rgb(0,0,0),
        lineHeight: 14,
        font: helveticaFont
    })
    const pdfBytes = await pdfDoc.save()

    saveByteArray("test", pdfBytes)
}