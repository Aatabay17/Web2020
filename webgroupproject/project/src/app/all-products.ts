import { Product } from "./product";
import { Clothing } from "./clothing";
import { Collection } from "./collection";
import { Shoes } from "./shoes";
import { Accessories } from "./accessories";

export const products: Product[] = [
]
Shoes.forEach(addProduct);
Clothing.forEach(addProduct);
Collection.forEach(addProduct);
Accessories.forEach(addProduct);

function addProduct(product:Product):void {
    products.push(product);
}