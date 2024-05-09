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

//snack 4
let firstArray = ["a","b","c"];
let secondArray = [1,2,4,5];

function arrayMixer(array1,array2){
    let arrayMixed = [];

    let i = 0;
    let j = 0;
    while(array1.length + array2.length > i+j){
        //primo array
        if(((i+j)%2 == 0 && array1[i] != undefined)|| array2[j] == undefined){
            arrayMixed.push(array1[i]);
            i++;
        }
        //secondo array
        else if(((i+j)%2 != 0 && array2[j]!= undefined)|| array1[i] == undefined){
            arrayMixed.push(array2[j]);
            j++;
        }
    }
    return arrayMixed;
}

let ciao = arrayMixer(firstArray,secondArray);
console.log(ciao);