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

//end point bmi post
app.post('/bmi', (req,res) => {   
    //menampung data dari body
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat / (tinggi * tinggi)

    if (bmi < 18.5) {
        var status = "Kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        var status = 'Normal(ideal)'
    } else if (bmi >= 25.0 && bmi <= 29.9) {    
        var status = 'Kelebihan berat badan'
    } else if (bmi >= 30.0) {
        var status = 'Kegemukan(Obesitas)'
    }
    
    // membuat objek yang berisi data yg akan dijadikan response
    let response = {    
        tinggi: tinggi,
        berat: berat,
        Bmi: bmi,
        Status: status
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})