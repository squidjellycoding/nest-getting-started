import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {

    products: Product[] = [
        { id: 1, name: 'Laundry Detergent' },
        { id: 2, name: 'Coffee' },
        { id: 3, name: 'Teddy Bear' }
    ]

    getAll() {
        return this.products;
    }

    getOne(id: number) {
        return this.products.find(p => p.id === id);
    }

    create(name: string) {
        const newId = this.products[this.products.length - 1].id + 1;
        const newProduct = { id: newId, name } as Product;
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, updatedName: string) {
        const foundProductIndex = this.products.findIndex(p => p.id === id);

        const updatedProduct = {id, name: updatedName } as Product;

        this.products[foundProductIndex] = updatedProduct;

        return updatedProduct;
    }

    delete(id: number) {
        const foundProductIndex = this.products.findIndex(p => p.id === id);

        this.products.splice(foundProductIndex, 1);

        return;
    }

}