let btn = document.querySelector('button')
let data = '';

function myFunction(){
   
    let data = document.querySelector('.input').value.toLowerCase;
    if(data){
    document.querySelector('.input').value = '';
    fetch('data/data.json')
    .then(res =>res.json())
    .then(function(res){
    console.log(res)

    let fin = res.find( record => record.name.toLowerCase === data || record.miasto.toLowerCase == data)
    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";
    if(fin){
    console.log(fin)
    let imagine = document.querySelector('.divv');
    imagine.innerHTML = fin.zdjecie;
    document.querySelector('.tekst0').textContent = 'Imię i Nazwisko: ' + fin.realname;
    document.querySelector('.tekst').textContent = 'Pseudonim: ' + fin.name;
    document.querySelector('.tekst3').textContent = 'Utwór: ' + fin.link;
    document.querySelector('.tekst4').textContent = 'Skąd pochodzi: ' + fin.miasto;
    document.querySelector('.tekst5').textContent = 'Data urodzenia: ' + fin.data_urodzenia;
    document.querySelector('.tekst6').textContent = 'Fakty: ' + fin.historia;//to chyba niepotrzebne
    }
    else{
        document.querySelector('.tekst2').textContent = 'Nie ma takiej pozycji w wbazie danych'
    }
})
}
else{
    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";
    document.querySelector('.tekst2').textContent = 'Musisz coś wpisac'
}
}


    
