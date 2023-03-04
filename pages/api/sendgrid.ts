import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

if (!process.env.SENDGRID_API_KEY) {
    throw new Error("Missing SENDGRID_API_KEY env var");
}

if (!process.env.EMAIL) {
    throw new Error("Missing EMAIL env var");
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const email = process.env.EMAIL;

export default async function sendEmail(req: any, res: any) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }

    if (!req.body.message) {
        res.status(400).json({ message: "Missing message" });
        return;
    }

    if (!req.body.email) {
        res.status(400).json({ message: "Missing email" });
        return;
    }

    if (!req.body.name) {
        res.status(400).json({ message: "Missing name" });
        return;
    }

    const message = `
        <h1>Portfolio contact form</h1>
        <p>From:<br/> ${req.body.name}</p>
        <p>Email:<br/> ${req.body.email}</p>
        <p>Message:<br/> ${req.body.message}</p>
    `;

    try {
        await sendgrid.send({
            to: email,
            from: "portfoliojonathanmeij@gmail.com",
            subject: "Portfolio contact form",
            html: message,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email" });
    }

    res.status(200).json({ message: "Email sent" });
}
