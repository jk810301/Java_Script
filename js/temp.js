
const PI = 3.1415926;
//let radius = prompt("請輸入半徑");
let radius = 10;

let area = radius ** 2 * PI;
document.write("<h2 style='color:red'>面積為:" + area + "</h2>");
console.log(radius, typeof (radius));
//alert("面積為:" + area)

//let x = Number(prompt("Number One:"));
//let y = Number(prompt("Number Two:"));
let x = Number(10);
let y = Number(20);
document.write("<h3>" + x + "+" + y + "=" + (x + y) + "</h3>");
document.write(`<h3>${x}+${y}=${x + y}</h3>`);

let email = "jk810301@gmail.com"
console.log(email, typeof (email));
console.log(email.length);
console.log(email[0]);
console.log(email[email.length - 1]);
console.log(email.indexOf("m"));
console.log(email.lastIndexOf("m"));
console.log(email.substring(0, 8));
console.log(email.replace("jk810301", "adam810301"));
console.log(email.includes("jk"));
console.log(email.substring(2, 8) == "810301");
console.log(email.substring(2, 8) == 810301);
console.log(email.substring(2, 8) === 810301);

for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}

console.log("一" > "二");

x = Math.random();
console.log(x);
console.log(String(x)[2]);

let start = 0
let end = 10
let count = 0;
while (true) {
    let x = math.floor(math.random() * (end - start + 1)) + start;
    console.log(x);
    count++
}
console.log(`次數:${count}`);
