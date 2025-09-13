interface Iproduct {
    id: number;
    name: string;
    price?: number;
}

const products = (product: Iproduct) => {
    console.log(product)
}

let product: Iproduct
product = {
    id: 1,
    name: "Banana"
}

products(product)