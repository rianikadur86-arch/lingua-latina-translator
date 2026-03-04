const express = require('express');
const app = express();
const PORT = 3000;

// Data 300 kosakata (disederhanakan dalam variabel)
const kosakata = [
    {id: 1, latin: "Ab", indonesia: "Dari", jenis_kata: "Preposisi"},
    {id: 2, latin: "Abdo", indonesia: "Menyembunyikan", jenis_kata: "Kata Kerja"},
    // ... masukkan sisa 300 data Anda di sini
    {id: 300, latin: "Civis", indonesia: "Warga negara", jenis_kata: "Kata Benda"}
];

// Endpoint untuk mendapatkan semua data
app.get('/api/kosakata', (req, res) => {
    res.json({
        total: kosakata.length,
        data: kosakata
    });
});

// Endpoint untuk mencari berdasarkan jenis kata
app.get('/api/kosakata/jenis/:jenis', (req, res) => {
    const jenis = req.params.jenis.toLowerCase();
    const filter = kosakata.filter(k => k.jenis_ka
