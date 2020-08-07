export function sum(a,b) {
    return a + b 
}

export function fullname(name,family) {
    return `my fullname is ${name}   ${family}`
}

export default () => {
    console.log("im test default func export");
}