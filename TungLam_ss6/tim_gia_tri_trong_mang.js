let value = prompt("enter a number: ");
let x = [-3,5,1,3,2,10];
for (let i = 0; i < x.length; i++) {
    if (value == x[i]) {
        alert(" value " + x[i] + " found at " + i);
    }
}