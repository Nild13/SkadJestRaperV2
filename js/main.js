let btn = document.querySelector('button')
let data = '';

function myFunction(){
   
    let data = document.querySelector('.input').value;
    if(data){
    document.querySelector('.input').value = '';
    fetch('data/data.json')
    .then(res =>res.json())
    .then(function(res){
    console.log(res)

    let fin = res.find( record => record.name === data || record.miasto === data)
    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";
    if(fin){
    console.log(fin)
    document.querySelector('.lowerWrapper').innerHTML = ' ';
    let createDiv = document.createElement('div');
    createDiv.classList = 'divv';
    document.querySelector('.lowerWrapper').appendChild(createDiv);
    let imagine = document.querySelector('.divv');
    imagine.style.float = "right";
    imagine.innerHTML = fin.zdjecie;
    

        let createFirstDiv = document.createElement('div');
        createFirstDiv.classList = 'tekst0';
        document.querySelector('.lowerWrapper').appendChild(createFirstDiv);

        let createSecondDiv = document.createElement('div');
        createSecondDiv.classList = 'tekst';
        document.querySelector('.lowerWrapper').appendChild(createSecondDiv);

        

        let createFourthDiv = document.createElement('div');
        createFourthDiv.classList = 'tekst4';
        document.querySelector('.lowerWrapper').appendChild(createFourthDiv);

        let createFivethDiv = document.createElement('div');
        createFivethDiv.classList = 'tekst5';
        document.querySelector('.lowerWrapper').appendChild(createFivethDiv);

        let createSixthDiv = document.createElement('div');
        createSixthDiv.classList = 'tekst6';
        document.querySelector('.lowerWrapper').appendChild(createSixthDiv);

        let createThirdDiv = document.createElement('iframe');
        createThirdDiv.classList = 'tekst3';
        createThirdDiv.src = fin.link;
        createThirdDiv.width = '620px';
        createThirdDiv.height = '360px';
        createThirdDiv.frameBorder = 0;
        createThirdDiv.gesture = 'media';
        createThirdDiv.allow = 'encrypted-media';
        createThirdDiv.allowFullscreen;
        createThirdDiv.style.marginTop = '30px'
    

        document.querySelector('.lowerWrapper').appendChild(createThirdDiv);
        document.querySelector('.tekst0').textContent = 'Imię i Nazwisko: ' + fin.realname;
        document.querySelector('.tekst').textContent = 'Pseudonim: ' + fin.name;    
        document.querySelector('.tekst4').textContent = 'Skąd pochodzi: ' + fin.miasto;
        document.querySelector('.tekst5').textContent = 'Data urodzenia: ' + fin.data_urodzenia;
        document.querySelector('.tekst6').textContent = 'Fakty: ' + fin.historia;
        // document.querySelector('.tekst3').innerHTML = ' <iframe src="' + fin.link + '"width="420" height="315"></iframe>'
        
        
    }
    else{
        
        let visible = document.querySelector('.lowerWrapper');
        visible.style.display = "block";
        document.querySelector('.lowerWrapper').textContent = 'Nie ma takiej pozycji w bazie danych';
        
    }
})
}
else{
    
    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";
    document.querySelector('.lowerWrapper').textContent = 'Musisz coś wpisac'
}
}


 let wege = document.getElementById('button');
 wege.addEventListener("keydown", function(e){
     if(e.code === "Enter"){
         myFunction()
     }
     else{}
 })   
