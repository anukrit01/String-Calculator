function add(numbers) {
    if (numbers === "") return 0;

    //updated to handle new line delimiters as well
    const nums = numbers.split(/[\n,]/).map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;