let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
newPassportWithAddress.name = "Bobryisk";

console.log(passportWithAddress.name);
console.log(newPassportWithAddress.name);
