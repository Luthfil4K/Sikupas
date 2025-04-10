export const terbilang = (angka) => {
    const bilangan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
    const puluhan = ["", "", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];
    
    let hasil = '';
    let angkaUtama = Math.floor(angka);
    let angkaDesimal = (angka - angkaUtama).toFixed(2).substring(2); // Ambil bagian desimal dengan format 2 angka di belakang koma

    // Konversi angka bulat ke kata
    if (angkaUtama === 100) {
        hasil = "Seratus Koma Nol Nol";
    } else if (angkaUtama < 12) {
        hasil = bilangan[angkaUtama];
    } else if (angkaUtama < 20) {
        hasil = bilangan[angkaUtama];
    } else if (angkaUtama < 100) {
        hasil = puluhan[Math.floor(angkaUtama / 10)] + " " + bilangan[angkaUtama % 10];
    } else if (angkaUtama < 200) {
        hasil = "Seratus " + terbilang(angkaUtama - 100);
    } else if (angkaUtama < 1000) {
        hasil = bilangan[Math.floor(angkaUtama / 100)] + " Ratus " + terbilang(angkaUtama % 100);
    } else {
        hasil = "Angka terlalu besar";
    }

    // Konversi angka desimal ke kata
    if (parseInt(angkaDesimal) !== 0) {
        hasil += " Koma";
        for (let i = 0; i < angkaDesimal.length; i++) {
            if (angkaDesimal[i] === "0") {
                hasil += " Nol";
            } else {
                hasil += " " + bilangan[parseInt(angkaDesimal[i])];
            }
        }
    } else if (parseInt(angkaDesimal) === 0 && angkaUtama >= 100) {
        // Jika angka desimal adalah "00" dan angka utama ratusan atau lebih
        hasil = hasil;
    } else if (parseInt(angkaDesimal) === 0 && angkaUtama < 100) {
        // Jika angka desimal adalah "00" dan angka utama kurang dari 100
        hasil += " Koma Nol Nol";
    }

    // Menghilangkan spasi ganda
    hasil = hasil.replace(/\s+/g, ' ').trim();

    return hasil;
}
