document.getElementsByTagName('body')[0].style.backgroundColor = 'Yellow';

//variable
let nama = "Aku";
let umur = 20;
let statusMahasiswa = true;
document.getElementById('nama').innerHTML = "Nama Saya: " + nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`; //bs dua" ny

let mahasiswa = ["Ahmad", "Budi", "Caca", "Dedi"];
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} )

let nilai = [
    {nama: "Ahmad", nilai:80},
    {nama: "Budi", nilai:70},
    {nama: "Caca", nilai:60},
    {nama: "Didi", nilai:50},
];
nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
    <td>${data.nama}</td> <td>${data.nilai}</td </tr>`;
} );

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {
    console.log(data.quotes)
    data.quotes.forEach( (q) => { document.getElementById('quotes').innerHTML += `<li>${q.quote} - ${q.author}</li>` } )
});