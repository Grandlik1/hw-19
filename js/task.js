function mainFunction(callback) {
    let num = +prompt()
    let deg = +prompt()
    callback(num , deg)

}
function exponentiation(number , degree){
    let result = number**degree
    alert(result)
}
mainFunction(exponentiation)