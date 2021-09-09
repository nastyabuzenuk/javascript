let i,j;
let root= document.getElementById("root");

for(i=1;i<=9;i++){
    let row = document.createElement("div");
    row.setAttribute("class","row");
    for(j=1;j<=9;j++){
        let cell = document.createElement("div");//інший div
        cell.setAttribute("class","cell");
        cell.innerText= i*j;
        row.appendChild(cell); //додали нову комірку
    }
    root.appendChild(row);
}

//<div class=""row">