require('dotenv').config()
const { SERVER_URL } = process.env

const whitelist = [
    `${ SERVER_URL }`,
    'http://198.168.135.103:8000',
    'http://localhost:6000'
] // adding your desired website to the whitelist for 'cors'

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions