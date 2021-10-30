export function generateSemester(): number{
    let today = new Date()
    let month = today.getUTCMonth() + 1
    return month <= 6? 2 : 1
}

export function generateTahunAjaran(): string {
    let today = new Date()
    let year = today.getUTCFullYear()
    return generateSemester() === 1 ? `${year}/${year+1}`: `${year-1}/${year}`
}