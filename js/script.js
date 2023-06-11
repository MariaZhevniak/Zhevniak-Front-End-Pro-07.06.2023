//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array  = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) => {
 const elemIndex =  array.indexOf(item);

 if(elemIndex === -1) {
 return array;
 } 

array.splice(elemIndex, 1);
return array;

}
removeElement(array, 5);
console.log(array);