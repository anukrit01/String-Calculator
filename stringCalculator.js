function add(numbers) {
    if (numbers === "") return 0;

    //to add two numbers
    const nums = numbers.split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;