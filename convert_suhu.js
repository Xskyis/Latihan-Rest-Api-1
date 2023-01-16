const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8090, () => {
    console.log("Server run on port 8090");
})

// endpoint "/profil/convert/celcius" dengan method GET
app.get("/convert/celcius/:suhu", (req,res) => {
 
    // menampung data yang dikirimkan
    let suhu = Number(req.params.suhu) // mengambil nilai pada parameter suhu
 
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let result = {
        celcius: suhu,
        reamur: suhu * 4/5,
        fahrenheit: suhu * 9/5 + 32,
        kelvin: suhu + 273
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(result)
 
})  

// endpoint "/profil/convert/reamur" dengan method GET
app.get("/convert/reamur/:suhu", (req,res) => {
 
    // menampung data yang dikirimkan
    let suhu = Number(req.params.suhu) // mengambil nilai pada parameter suhu
 
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let result = {
        reamur: suhu,
        celcius: suhu * 5/4,
        fahrenheit: suhu * 9/4 + 32,
        kelvin: suhu * 5/4 + 273
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(result)
 
})  

// endpoint "/profil/convert/kelvin" dengan method GET
app.get("/convert/kelvin/:suhu", (req,res) => {
    // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let suhu = Number(req.params.suhu) // mengambil nilai pada parameter suhu
 
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let result = {
        kelvin: suhu,
        celcius: suhu - 273,
        fahrenheit: suhu * 9/5 - 459.67,
        reamur: suhu * 4/5 - 273
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(result)
 
}) 

// endpoint "/profil/convert/fahrenheit" dengan method GET
app.get("/convert/fahrenheit/:suhu", (req,res) => {
    // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let suhu = Number(req.params.suhu) // mengambil nilai pada parameter suhu
 
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let result = {
        fahrenheit: suhu,
        celcius: (suhu - 32) * 5/9,
        reamur: (suhu - 32) * 4/9,
        kelvin: (suhu + 459.67) * 5/9
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(result)
 
}) 

// convert Biner

// end point "/decimal" dengan method POST
app.post('/decimal', (req,res) => {   
    //menampung data dari body
    let decimal = Number(req.body.decimal) // mengambil nilai body dari parameter name

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {    
        decimal: decimal,
        biner: decimal.toString(2), //
        oktal: decimal.toString(8),
        hexadecimal: decimal.toString(16)
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/biner" dengan method POST
app.post('/biner', (req,res) => {
    //menampung data dari body
    let biner = Number(req.body.biner) // mengambil nilai body dari parameter name

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {
        biner: biner,
        decimal: parseInt(biner, 2),
        oktal: parseInt(biner, 2).toString(8),
        hexadecimal: parseInt(biner, 2).toString(16)
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/oktal" dengan method POST
app.post('/oktal', (req,res) => {
    //menampung data dari body
    let oktal = Number(req.body.oktal) // mengambil nilai body dari parameter name

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {
        oktal: oktal,
        decimal: parseInt(oktal, 8),
        biner: parseInt(oktal, 8).toString(2),
        hexadecimal: parseInt(oktal, 8).toString(16)
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/hexadecimal" dengan method POST
app.post('/hexadecimal', (req,res) => {
    //menampung data dari body
    let hexadecimal = Number(req.body.hexadecimal) // mengambil nilai body dari parameter name

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {
        hexadecimal: hexadecimal,
        decimal: parseInt(hexadecimal, 16),
        biner: parseInt(hexadecimal, 16).toString(2),
        oktal: parseInt(hexadecimal, 16).toString(8)
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})


