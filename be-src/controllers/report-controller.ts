import { Report } from "../models/index";

export async function createReportInDB(petId, reportData) {
    if (!petId) {
        throw new Error("Se requiere el id de la mascota");
    }
    if (!reportData) {
        throw new Error("Se requieren datos en el body");
    }
    const newReport = await Report.create({
        reporter_name: reportData.reporter_name,
        phone_number: reportData.phone_number,
        message: reportData.message,
        petId: petId,
    });
    return newReport;
}
