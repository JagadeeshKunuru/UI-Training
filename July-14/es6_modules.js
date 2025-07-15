//why do we need modules ?

//for not repeating the code, separating logics
//there are two types of exports - default, named export
//each file will have only one default export , but can have multiple named exports
import { otherName } from './utils.js'

console.log(otherName)