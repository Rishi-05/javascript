//Primitive data types
let account = "0"
var accountId = 1
accountEmail = "2"
console.log(account)
console.table([account,accountId,accountEmail])
console.log(typeof accountId)

/* integer and bigint data type example */
let accountvalue = Number(account)
console.log(accountvalue)
let accounts = 123221233n
console.log(typeof accounts);

/* boolean data type example */
let value = 0
let value2 = Boolean(value)
console.log(value2)

/* string data type example */
let value3 = String(value)
console.log(value3)
console.log(typeof value3)

/* Symbol data type example */
const variable = Symbol('1,2,3')
const variable1 = Symbol('1,2,3')
console.log(variable,variable1)
console.log(typeof variable);

