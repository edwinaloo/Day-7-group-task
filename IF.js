let num = parseInt(prompt("enter a number: "));
let count = 1 ;

while (count <= num) {
    if (count % 2 == 0) {
        console.log(`${count} is an even number`);
    } else {
        console.log(`${count} is an odd number`);
    }
    count++;
}