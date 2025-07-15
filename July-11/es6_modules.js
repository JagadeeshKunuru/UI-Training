//what is a module ?
//why do we need a module ? 
//Answer - modules are used for reusability,separation of logic 

//React, Angular - components, UI blocks

import { userAddress as anyAddress } from "./userAddress.js"
import { userName } from "./username.js"
//import  anyName, { personAge }  from "./default_export.js"
import * as utils from "./default_export.js"

 console.log('address', anyAddress)
// console.log('name', userName)
console.log('anyName', anyName)
console.log('personAge', utils.personAge)


//export, import 

//two types of exports - default, named
//default export 
//can be imported with any name
//only one default export per file but can have multiple named exports
// alis - can be written with 'as'
//syntax - export default const someName = 'Tom'
// import anyName from "../path-to-file.js"

//named 
//can have multiple named exports per file
// can be imported only with that name using {}

//Modules 
    //export, import
    //default export, named export
    //alias
    //script type should be module