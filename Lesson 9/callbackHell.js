function get(print) {
    return setTimeout(() => print("secret"), 100);
}
    
function process(value, execute) {
    return setTimeout(() => execute(`${value}-code`), 100);
}
    
function main() {
    get(value => process(value, result => console.log(result)));
}

main();