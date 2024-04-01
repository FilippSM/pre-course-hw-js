let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newObj = JSON.parse(JSON.stringify(passport));
newObj.name = "Ivan";

console.log(passport.name);
console.log(newObj.name);