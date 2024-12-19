function add(numbers) {
    if (numbers === "") return 0;

    //updated to handle different delimiters as well
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);
    
    //to handle negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }

    return nums.reduce((sum, num) => num <= 1000 ? sum + num : sum, 0);
}

module.exports = add;