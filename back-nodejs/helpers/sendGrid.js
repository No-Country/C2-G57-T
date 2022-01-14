const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const send_mail = process.env.EMAIL_ENABLE
const sendMail = (name, email) => {
    if (send_mail === "true") {
        const msg = {
            to: email,
            //to: 'juanprodrigues.33@gmail.com',
            from: process.env.CORREO_SENDGRID,
            templateId: process.env.TEMPLATE_ID,
            dynamicTemplateData: {
                subject: 'asunto',
                name: name
            },
        };
        sgMail.send(msg)
            .then((response) => {
                console.log(response[0].statusCode)
                    //console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })
        console.log(msg);

    } else {
        console.log("Correo no enviado, porque una variable de entorno esta en falso");
    }
}


module.exports = {
    sendMail
}