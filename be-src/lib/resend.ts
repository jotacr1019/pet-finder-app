import { Resend } from "resend";
import * as dotenv from "dotenv";
dotenv.config();

const resend_api_key = process.env.RESEND_API_KEY;
const resend = new Resend(resend_api_key);

export async function sendMessageToUser(messageData, reporter_email) {
    try {
        await resend.emails.send({
            from: "Pet-Finder-App <onboarding@resend.dev>",
            to: [reporter_email],
            subject: `Reporte de ${messageData.pet_name}`,
            html:
                messageData.message +
                "<br>" +
                "<br>" +
                "<br>" +
                "Reporte creado por " +
                "<strong>" +
                messageData.reporter_name +
                "</strong>" +
                "<br>" +
                "Teléfono: " +
                "<strong>" +
                messageData.phone_number +
                "</strong>",
        });
    } catch (error) {
        console.error(error);
    }
}
