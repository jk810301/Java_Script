

const persons = [
    {
        name: "adam", height: 175, weight: 80
    },
    {
        name: "babo", height: 168, weight: 62
    },
    {
        name: "adam", height: 182, weight: 95
    }
]

console.log(persons);
console.log(persons[0].name);
console.log(persons[0]["height"]);

let tempStr = "<ul>";
// for ...
for (i = 0; i < persons.length; i++) {
    let name = persons[i].name;
    let bmi = getBMI(persons[i]["height"], persons[i]["weight"]);

    console.log(`${name} BMI:${bmi}`);
    tempStr += `<li>${name} BMI:${bmi}</li>`;
}

tempStr += "</ul>";

tempStr = "<ul>";
// forEach ...
persons.forEach(person => {
    let name = person.name;
    let bmi = getBMI(person["height"], person["weight"]);

    console.log(`${name} BMI:${bmi}`);
    tempStr += `<li>${name} BMI:${bmi}</li>`;
});

tempStr += "</ul>";

document.write(tempStr);


//計算BMI

//函示正規寫法(先後宣告都可以被呼叫)
function getBMI(height, weight, point = 2) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "參數錯誤!";
    }
    return bmi.toFixed(point);
}


// 函式表達式(需先宣告才能使用)
const getBMI2 = (height, weight, point = 2) => {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "參數錯誤!";
    }
    return bmi.toFixed(point);
}

// 函式表達式(需先宣告才能使用)
const getBMI3 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point)

console.log(getBMI(175, 76));
console.log(getBMI2(175, 76));
console.log(getBMI3(175, 76));