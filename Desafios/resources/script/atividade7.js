let notas = [8, 7, 10, 6, 9];

alert(notas);

let i = 0;
while (i < notas.length) {
    i++;
}

notas.forEach(function(nota) {
    console.log(nota);
});

alert(notas.includes(10));

alert(notas.indexOf(8));

notas.splice(3, 1);

notas.sort((a, b) => a - b);

alert(notas);