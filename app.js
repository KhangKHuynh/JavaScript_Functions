
// Exercise 1 Section
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 !=0) {
            console.log(i);
        }
    }
}

printOdds(50);

// Exercise 2 Section
function checkAge({ userName, age } = {}) {
    if (!userName  || age === undefined) {
        console.log(`What is your name and age?`);
        return;
    }
    
    if (age >= 16) {
        console.log(`Congrats ${userName}, you can drive!`);
    } else {
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
}
}
checkAge({ userName: "Bob", age: 14 });

// Exercise 3 Section
function Coord2(x, y) {
    if(x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }

}
console.log(Coord2(11, 1));
console.log(Coord2(-11, 1));
console.log(Coord2(-1, -11));
console.log(Coord2(1, -11));
console.log(Coord2(0, -11));
console.log(Coord2(11, 0));
console.log(Coord2(0, 0));

// Exercise 4 Section 
function checkTriangle(a, b, c) {
    if (!(a + b > c && b + c > a && a + c > b)) {
    return "invalid";
} else if (a === b && b === c) {
    return "equilateral triangle";
} else if (a === b || b === c || a === c) {
    return "isosceles triangle"; 
} else {
    return "scalene triangle";
}

}
console.log(checkTriangle(3, 3, 3)); // equilateral
console.log(checkTriangle(3, 4, 4)); // isosceles
console.log(checkTriangle(3, 4, 5)); // scalene
console.log(checkTriangle(1, 2, 3)); // invalid

