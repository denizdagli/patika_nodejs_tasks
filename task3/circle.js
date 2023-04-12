const PI=3.14;


//daire alanı
function circleArea(r) { 
    let result = PI*r*r;
    console.log(`Daire alanı: ${result}`);
}
//daire çevresi
function circleCirfumference(r) { 
    let result = 2* PI*r;
    console.log(`Daire çevresi: ${result}`);
}

module.exports={
    circleArea,
    circleCirfumference
}