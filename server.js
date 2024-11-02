import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, subject } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        From: ${email}
        Subject: ${subject}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
