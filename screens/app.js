const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '459560659816-rsgu9fki0cekd3uus8bf3ckniqop1j65.apps.googleusercontent.com'
const CLIENT_SECRET = 'H7MpRig6CWI1jejtKIYuI96l'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04d_2Xpnwtz51CgYIARAAGAQSNwF-L9IrFK0fGQav3pckt_UEHMbFkzzz7A9375DPHOliJ77bT_Z8Xb7UxJbKk6mzj20lW-PSXds'
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken()
const transport = nodemailer.createTransport({service: 'gmail',
auth: {
    type: 'OAuth2',
    user: 'awalkea@live.com',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken
}
})
        const mailOptions = {
            from: 'awalkea@live.com',
            to: 'agw52@scarletmail.rutgers.edu',
            subject: "Hello",
            text: 'Yooo'
        };
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}
sendMail().then(result => console.log('Email is sent', result)).catch(error => console.log(error.message));