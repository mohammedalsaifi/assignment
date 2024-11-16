// Define the Product interface
interface Product {
    name: string;
    price: number;
}

// Function to calculate the total price
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Example usage
const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.25 }
];

/*
Explanation of the Code
Interface Definition (Product):

The Product interface defines the structure of the objects in the array, ensuring they have:
name: A string representing the product's name.
price: A number representing the product's price.
Function (calculateTotalPrice):

This function accepts an array of Product objects and calculates the total price.
It uses the reduce method, which iterates over the array and accumulates the sum of the price property from each object.
Example Usage:

An array of Product objects is created.
The calculateTotalPrice function is called with the array as an argument.
The total price is logged to the console.
*/

const totalPrice = calculateTotalPrice(products);
console.log(`Total Price: $${totalPrice}`);

function isValidEmail(email: string): boolean {
    // Regular expression to validate basic email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage
const testEmails = [
    "user@example.com",
    "invalid-email",
    "another.user@domain.co",
    "bad@domain@com",
    "username@.com"
];

testEmails.forEach(email => {
    console.log(`Is "${email}" a valid email? ${isValidEmail(email)}`);
});
