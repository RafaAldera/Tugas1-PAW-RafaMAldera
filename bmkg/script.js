fetch("http://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.Infogempa.gempa.Wilayah);
    console.log(data.Infogempa.gempa.Magnitude);
    
    document.getElementById("gempabumi").innerHTML = `
      <h1>${data.Infogempa.gempa.Wilayah}</h1>
      <p>Magnitude: ${data.Infogempa.gempa.Magnitude}</p>
      <p>Waktu : ${data.Infogempa.gempa.Tanggal} ${data.Infogempa.gempa.Jam}</p>
      <p>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</p>
      <p>Potensi : ${data.Infogempa.gempa.Potensi}</p>
      <img src="http://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" />`;
  

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
.then( res => res.json() )
  .then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach (list) => {
        console.log.(list);
        document.getElementById("gempabumi15").innerHTML += `
           <p>Wilayah : ${list.Wilayah}</p>
           <p>Waktu : ${list.Tanggal} ${list.Jam}</p>
           <p>Magnitude : ${list.Magnitude}</p>
           <p>Kedalaman : ${list.Kedalaman}</p>
           <p>Potensi : ${list.Potensi}</p>
           <hr>
           `;
    }
    })
})