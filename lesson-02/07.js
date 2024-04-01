let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newPassportWithAddress = JSON.parse(JSON.stringify(passportMarried));

newPassportWithAddress.married = true;

console.log(passportMarried);
console.log(newPassportWithAddress);
