'use strict';

class ProductsController {
    constructor() {
        "ngInject"
        //this.ProductService = ProductService;
        this.name = 'products';
        //this.products = [];
        this.products = [
            {
                id: '001',
                name: 'Product1',
                price: '220'
            },
            {
              id: '002',
              name: 'Product2',
              price: '22230'
            },
            {
              id: '003',
              name: 'Product3',
              price: '3435'
            }
        ];
    }

    $onInit(){
      //  this.products = this.ProductService.getProducts();
        console.log(this.products);
    }
}

export default ProductsController;
