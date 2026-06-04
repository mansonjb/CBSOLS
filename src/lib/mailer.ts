import nodemailer from 'nodemailer'

/**
 * Transporter SMTP mutualise (OVH ou autre). Lit la config depuis les env
 * vars SMTP_HOST / SMTP_PORT / SMTP_SECURE / SMTP_USER / SMTP_PASS.
 * Lance une erreur si une variable obligatoire manque.
 */
export function getMailer() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP env variables missing (SMTP_HOST / SMTP_USER / SMTP_PASS).')
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}
