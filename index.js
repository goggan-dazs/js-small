let names = ["Serena", "Rebecca", "Demario", "Nick" ];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

function sumOf(x, y) {
    const sumNum = x + y;
    if (sumNum >= 50 && sumNum <= 80) {
        return 65;
    }
    else {
        return 80;
    }
}

console.log(sumOf(30,20));
console.log(sumOf(90, 80));