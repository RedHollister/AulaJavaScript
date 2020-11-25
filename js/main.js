function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;

}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
//alert(soma(5, 10));


/*

var d = new Date();
alert(d.getMonth()+1);

*/
/*

var count;
for (count = 0;count<=5; count++){
    alert(count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}

if (idade >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de Idade");
}
*/
//var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
//console.log(frutas);
//alert(frutas[1].cor);

//var fruta = {nome:"Maçã", cor:"Vermelha"}
//console.log(fruta.nome);

//var lista = ["Maçã", "Toguro", "Hogh"];
//console.log(lista[1]);
//lista.push("Uva");
//console.log(lista);
//lista.pop();
//console.log(lista.join(" e "));
//alert(lista[0]
