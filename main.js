let zucchine = [
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 80},
    {peso: 100,lunghezza: 1},
]


//snack 2
let noPass = [];
let Pass = [];

zucchinePass(zucchine);
console.log("La somma del peso delle zucchine che misurano più di 15cm è: "+sommaTot(Pass));
console.log("La somma del peso delle zucchine che misurano meno di 15cm è: "+sommaTot(noPass));


//funzioni
function sommaTot(array){
    let tot = 0;
    array.forEach(element => {
        tot += element;
    });
    return tot;
}

function zucchinePass(array){
    array.forEach(element=>{
        if(element.lunghezza>=15){
            Pass.push(element.peso);
        }else{
            noPass.push(element.peso);
        }
    })
}
//snack 3
let parola = "merak";
console.log(parola,reverseString(parola));

function reverseString(String){
    let output = "";
    for(let i = 0;i<String.length; i++){
        output += String[String.length-i-1];
    }
    return output;
}