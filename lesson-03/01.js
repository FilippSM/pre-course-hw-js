const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const result = colors.filter((color) => color === "черный" || color === "красный" || color === "желтый");
    return result.join('-');
}

console.log(createColorString());
