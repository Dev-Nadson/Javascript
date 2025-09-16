interface Iproduct {
    id: number;
    name: string;
    price?: number;
}

const createProduct = (product: Iproduct) => {
    console.log(product)
}
const updateProduct = (product: Pick<Iproduct, "name">) => {
    product = {
        name: "Pera"
    }
    console.log(product)
}

let product: Iproduct
product = {
    id: 1,
    name: "Banana"
}

createProduct(product)
updateProduct(product)