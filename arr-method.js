const products = [
    { name: 'redmi note 100', brand: 'xiaomi', price: 10000, color: 'blue' },
    { name: 'redmi note 200', brand: 'xiaomi', price: 18000, color: 'red' },
    { name: 'nokia 220', brand: 'nokia', price: 9500, color: 'green' },
    { name: 'realme x86', brand: 'realme', price: 7890, color: 'gray' },
    { name: 'redmi tab 20', brand: 'xiaomi', price: 11000, color: 'blue' },
    { name: 'iphone 70', brand: 'apple', price: 10000, color: 'cyan' },
];

// map
const productNames = products.map(product => product.name);
// console.log(productNames);
const productColors = products.map(product => product.color);
// console.log(productColors);

// forEach
products.forEach(product => {
    // console.log(product);
});

// filter
const flagshipProducts = products.filter(product => product.price >= 10000);
// console.log(flagshipProducts);
const xiaomiProducts = products.filter(product => product.brand === "xiaomi");
// console.log(xiaomiProducts);

// find
const firstBlueProduct = products.find(product => product.color === "blue");
// console.log(firstBlueProduct);