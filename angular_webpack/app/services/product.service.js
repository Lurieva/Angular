function ProductService() {
    "ngInject";

    const products = [
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
          name: 'Product',
          price: '3435'
        }
    ];

    return {
        getProducts () {
            return products;
        },
    }
}

export default UserService;
