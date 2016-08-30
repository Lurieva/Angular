import angular                  from 'angular';
import productsComponent        from './products.component';
//import ProductService           from '../../services/product.service';


let productsModule = angular.module('products', [])

    .component('products', productsComponent)
   // .factory('products', ProductService);

export default productsModule;
