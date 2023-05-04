//generics 

// function concatArray (...itens: any []): any[]{
function concatArray <T>(...itens: T []): T[]{
return new Array().concat(...itens);
}

// const numArray = concatArray ([1,5], [3]);
const numArray = concatArray <number[]> ([1,5], [3]);
// const stgArray =  concatArray(["Monique"],["Guilherme","Ada"]);
const stgArray =  concatArray<string[]> (["Monique"],["Guilherme","Ada"]);
console.log(numArray);
console.log(stgArray);