const sendgrid = require('@sendgrid/mail');

module.exports = {
    sendEmail: async (config) => {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
        return sendgrid.send({
            to: process.env.EMAIL,
            from: process.env.EMAIL,
            subject: `(Email sent from sohncompositions.com) ${config.subject}`,
            html: `
            <h5>From: ${config.from}</h5>
            <p>${config.message}<p/>
            `,
        })
    }
}