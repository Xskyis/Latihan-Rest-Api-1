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

// end point "/kubus" dengan method POST
app.post('/kubus', (req,res) => {   
    //menampung data dari body
    let sisi = Number(req.body.sisi)

    let volume = sisi * 3
    let luas_permukaan = 6 * (sisi * 2)

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {    
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/tabung" dengan method post
app.post('/tabung', (req,res) => {   
    //menampung data dari body
    r = Number(req.body.r)
    t = Number(req.body.t)
    let phi = 3.14
    
    let volume = phi * (r*2) * t
    let luas_permukaan = 2 * phi * r * (t + r)

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {    
        r: r,
        t:t,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/balok" dengan method post
app.post('/balok', (req,res) => {
    //menampung data dari body
    p = Number(req.body.p)
    l = Number(req.body.l)
    t = Number(req.body.t)

    let volume = p * l * t
    let luas_permukaan = 2 * ((p * l) + (p * t) + (l * t))

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {
        p: p,
        l: l,
        t: t,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

// end point "/kerucut" dengan method post
app.post('/kerucut', (req,res) => {
    //menampung data dari body
    r = Number(req.body.r)
    t = Number(req.body.t)
    let phi = 3.14

    let volume = phi * (r*2) * t / 3
    let luas_permukaan = phi * r * (r + t)

    // membuat objek yang berisi data yg akan dijadikan response
    let response = {
        r: r,
        t: t,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dgn format json dari obj di atas
    res.json(response)
})

