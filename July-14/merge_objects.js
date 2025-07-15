function mergeObjects(obj1, obj2) {
   return {...obj1, ...obj2}
   
}

const obj1 = {
    name: 'Mike'
}

const obj2 = {
    age: 20
}

console.log(mergeObjects(obj1, obj2))