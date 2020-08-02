let arar = [20, 30, 45];

let obj = {
    name: "saeed", family: "alavi",
    start: function () {
        console.log("test func in obj");
    }
}

let arrayobj = [
    { name: "saeed", family: "hatamikai" }


]

//bedone mghdare avvaliye meghadr undefind ast
var name;
// if prin now you see undefind 
console.log(name);
name = "saeed";
//if now print saeed value
//2 hite dar javasacript (global scope) and  (function scope)

function getDate() {
    var date = new Date()
    return date
}
getDate()
console.log(date)  //❌ Reference Error

var mm = 21;  //  tabei
let nn = 42;    // blocki
const kk = 54; // read only


var araye =[1,2,3]
var obj ={key:"value"}
var arrayobj=[{key:'value'},{key:"value"}]



