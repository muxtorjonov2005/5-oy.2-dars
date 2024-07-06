// 1-masala
// function barchaKalitlar(obj){
//     let kalit = Object.keys(obj)
//     kalit.forEach(key => console.log(key))
// }
// let obj = {
//     name: 'john',
//     age: 45,
//     phone: "+998916585160"
// }
// barchaKalitlar(obj)

// 2-masala
// function barchaQiymatlar(obj){
//     let qiymat = Object.values(obj)
//     qiymat.forEach(value => console.log(value))
// }
// let obj = {
//     name: 'john',
//     age: 45,
//     phone: "+998916585160"
// }
// barchaQiymatlar(obj)

// 3-masala
// function barchasi(obj){
//     let barcha = Object.entries(obj)
//     barcha.forEach(all => console.log(all))
// }
// let obj = {
//     name: 'john',
//     age: 45,
//     phone: "+998916585160"
// }
// barchasi(obj)

// 4-masala
// function barchasinMuzlatish(obj){
//     console.log(Object.freeze(obj));
// }
// let obj = {
//     name: 'john',
//     age: 45,
//     phone: "+998916585160"
// }
// barchasinMuzlatish(obj)

// 1-masala
// function slice(arr){
//     if(arr.length < 3){
//         return []
//     }
//     let middel = Math.floor(arr.length / 2)
//     return arr.slice(middel - 1, middel + 2)
// }
// console.log(slice([2, 5, 4, 8, 1]));

// 2-masala
// function

// 3-masala
// function concatArray(arr1, arr2, arr3){
//     return arr2.concat(arr3,arr1)
// }
// console.log(concatArray([1, 2],[6, 5],[4, 3]));

// 4-masala
// function indexOf(arr,value){
//     let res = arr.indexOf(value) 
//     if(res){
//         console.log(value ** 3);
//     } else{
//         console.log(false);
//     }
//     return value
// }
// console.log(indexOf([10, 11, 12,], 11));\

// 5-masala
// function lastIndexOf(arr,value){
//     return arr.lastIndexOf(value)
// }
// console.log(lastIndexOf([1, 2, 4, 6, 1, 5], 1));

// 6-masala
// function

// 7-masala
// function includes(arr,element){
//     return arr.includes(element)
// }
// console.log(includes([12, 5, 8, 7], 5));

// 8-masala
// function forEach(arr){
//     let uchXonali = []
//     arr.forEach(value => {
//         if(value >= 100 && value < 1000 && value % 2 == 1){
//             return uchXonali.push(value)
//         }
//     })
//     let sum = 0
//     uchXonali.forEach(value => sum += value)    
//     return sum / uchXonali.length
// }
// console.log(forEach([123, 148, 121, 147, 129, 98]));

// 9-masala
// function ikkigaBolish(arr){
//     return arr.map(value => value % 2 == 0 ? value ** 2 : value ** 3)
// }
// console.log(ikkigaBolish([1, 2, 3, 4, 5, 6, 7]));

// 10-masala
// function oxirgiXarfi(arr){
//     return arr.map(str => str.charAt(str.length - 1))
// }
// console.log(oxirgiXarfi(['olma', 'anor', 'behi']));

// 11-masala
// function filter(arr){
//     return arr.filter(str => str.length <= 4)
// }
// console.log(filter(['bolalar', 'anor', 'behi', 'shaftoli']));

// 12-masala
// function kattaYoshBormi(arr){
//     return arr.some(obj => obj.age >= 18)
// }
// let obj = [
//     {name: 'John', age: 5},
//     {name: 'Ali', age: 19},
//     {name: 'Vali', age: 17}
// ]
// console.log(kattaYoshBormi(obj));

// 13-masala
// function jonBolsa(arr){
//     return arr.every(ism => ism.endsWith('jon'))
// }
// console.log(jonBolsa(['Alijon', 'vali', 'ganijon']));

// 14-masala
// function find(arr){
//     return arr.find(num => num % 5 == 0 && num > 99 && num < 1000)
// }
// console.log(find([125, 123, 142, 99, 1100]));

// 15-masala
function bekFind(arr){
    return arr.findIndex(ism => ism.includes('bek'))
}
console.log(bekFind(['alibek', 'asadbek']));