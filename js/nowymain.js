let itemsNumber = document.querySelector('.klasaTestowa');
let btn = document.querySelector('button')
let data = '';

function closeModal(){
    $('#exampleModal').modal('hide');
    document.querySelector('.modal-body .YT').innerHTML = '';
}

function myFunction(){
    document.querySelector('.lowerWrapper').textContent = ' ';
    let data = document.querySelector('.input').value.toLowerCase();
    console.log(data)
    

    if(data){
    itemsNumber.style.display = 'none';
    document.querySelector('.input').value = '';
    fetch('data/data.json')
    .then(res =>res.json())
    .then(function(res){
    console.log(res)

    let fin = res.filter( record => record.name.toLowerCase() === data || record.miasto.toLowerCase() === data || record.realname.toLowerCase() === data)
    let finLength = fin.length;

        

    console.log(fin.length)
    console.log(fin.name)

    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";

    if(fin.length === 1){
    itemsNumber.style.display = 'none';
    itemsNumber.innerHTML = '';
    console.log(fin.length)
    document.querySelector('.lowerWrapper').innerHTML = ' ';

    let createDiv = document.createElement('div');
    createDiv.classList = 'divv';
    document.querySelector('.lowerWrapper').appendChild(createDiv);


    let imagine = document.querySelector('.divv');
    imagine.style.float = "right";
    imagine.innerHTML = fin[0].zdjecie;
    

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
        createThirdDiv.src = fin[0].link;
        createThirdDiv.width = '620px';
        createThirdDiv.height = '360px';
        createThirdDiv.frameBorder = 0;
        createThirdDiv.gesture = 'media';
        createThirdDiv.allow = 'encrypted-media';
        createThirdDiv.allowFullscreen;
        createThirdDiv.style.marginTop = '30px'
        document.querySelector('.lowerWrapper').appendChild(createThirdDiv);

        document.querySelector('.tekst0').textContent = 'Imię i Nazwisko: ' + fin[0].realname;  
        document.querySelector('.tekst').textContent = 'Pseudonim: ' + fin[0].name;    
        document.querySelector('.tekst4').textContent = 'Skąd pochodzi: ' + fin[0].miasto;
        document.querySelector('.tekst5').textContent = 'Data urodzenia: ' + fin[0].data_urodzenia;
        document.querySelector('.tekst6').textContent = 'Fakty: ' + fin[0].historia;
        // document.querySelector('.tekst3').innerHTML = ' <iframe src="' + fin.link + '"width="420" height="315"></iframe>'
        
        
    }
    
    else if(fin.length > 1){
        itemsNumber.innerHTML = '';
        itemsNumber.innerHTML = 'Znaleziono: ' + finLength + ' wyników w mieście ' + data;
        itemsNumber.style.display = 'block';
        let createUl = document.createElement('ul');
        createUl.classList = 'list-group';
        document.querySelector('.lowerWrapper').appendChild(createUl);
        let liste = document.querySelector('.list-group');
        fin.forEach(function(item, index){ //dodalem tu index. teraz trzeba to przekazac do kazdego data-key w <li>
        console.log('Wypisuje '+ item.name);
        let test = document.createElement('li');
        test.classList = 'list-group-item list-group-item-action list-group-item-light';
        test.style.fontSize = '30px'
        test.innerHTML = item.name;
        test.dataset.key = index; //powinno dodac kolejno dataset do kazdego li
        let CreateDiv = document.createElement('div');
        CreateDiv.style.float = 'right';
        CreateDiv.innerHTML = item.zdjecie;
        test.appendChild(CreateDiv)
        liste.appendChild(test) // dodanie stringów do wrapper
        test.addEventListener("click", (e) => {
            const index2 = e.target.dataset.key;
            document.querySelector(`li[data-key="${index2}"]`)
            $('#exampleModal').modal('show');
            // tu trzeba dodać to co ma sie wyswietlać w modalu
            document.querySelector('.modal-title').textContent = `${fin[index2].name}`;
            document.querySelector('.modal-body .imie').textContent = `Imię i Nazwisko: ${fin[index2].realname}`;
            document.querySelector('.modal-body .dUrodzenia').textContent = `Data Urodzenia: ${fin[index2].data_urodzenia}`;
            document.querySelector('.modal-body .mUrodzenia').textContent = `Miejsce Urodzenia: ${fin[index2].miasto}`;
            let miniaturka = document.querySelector('.modal-body .miniaturka');
            miniaturka.style.float = 'right';
            miniaturka.innerHTML = fin[index2].zdjecie;
            document.querySelector('.modal-body .fakty').textContent = `Informacje: ${fin[index2].historia}`;
            // dodaja sie linki z youtube zamiast podmieniac
            const youTube = document.createElement('iframe');
            youTube.src = fin[index2].link;
            youTube.width = '467px';
            youTube.height = '360px';
            youTube.frameBorder = 0;
            youTube.gesture = 'media';
            youTube.allow = 'encrypted-media';
            youTube.allowFullscreen;
            youTube.style.marginTop = '30px'
            document.querySelector('.modal-body .YT').appendChild(youTube);           
            console.log(fin[index2].name)
            console.log(index2)
        });
    })
    }
    else{
        itemsNumber.style.display = 'none';
        itemsNumber.innerHTML = '';
        let visible = document.querySelector('.lowerWrapper');
        visible.style.display = "block";
        document.querySelector('.lowerWrapper').textContent = 'Nie ma takiej pozycji w bazie danych';
        
    }
})

}
else{
    itemsNumber.style.display = 'none';
    itemsNumber.innerHTML = '';
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
   
