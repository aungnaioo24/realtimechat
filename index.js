// import files
const app = require('./app')
const PORT = process.env.PORT || 8000  // You can change port number here

// app listener by the port number
app.listen(PORT, async() => {
    console.log('Your app running on port', PORT)
})