const products = [
    { name: 'redmi note 100', brand: 'xiaomi', price: 10000, color: 'blue' },
    { name: 'redmi note 200', brand: 'xiaomi', price: 18000, color: 'red' },
    { name: 'nokia 220', brand: 'nokia', price: 9500, color: 'green' },
    { name: 'realme x86', brand: 'realme', price: 7890, color: 'gray' },
    { name: 'redmi tab 20', brand: 'xiaomi', price: 11000, color: 'blue' },
    { name: 'iphone 70', brand: 'apple', price: 10000, color: 'cyan' },
];

const newProduct = {
    name: 'walton phone', brand: 'walton', price: 14000, color: 'blue'
}

// // copy all product without previous reference and add new item
// const newProducts = [...products, newProduct];
// console.log(newProducts);

// // copy specific product without previous reference and add new item
// const selectedProducts = products.filter(product => product.brand !== 'xiaomi');
// const newProducts2 = [...selectedProducts, newProduct];
// console.log(newProducts2);