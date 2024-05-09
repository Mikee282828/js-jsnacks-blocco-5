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