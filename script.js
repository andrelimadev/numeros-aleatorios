const drawButton = document.querySelector(".draw-button");

function draw() {
    
    let nMin = Number(document.querySelector(".input-min").value);
    let nMax = Number(document.querySelector(".input-max").value);

        if (nMin < nMax) {
        
        const drawnNumber = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
        document.querySelector(".drawn-results").innerHTML = drawnNumber;
        
        } else {
            
            const warning = "Número mínimo maior ou igual ao número máximo!";
            document.querySelector(".title").innerHTML = warning;
            
        }
}

function clearTable() {

    const result = '';
    document.querySelector(".drawn-results").innerHTML = result;
    
    const title = "Sortear um número"
    document.querySelector(".title").innerHTML = title;

}

drawButton.addEventListener("click", draw);