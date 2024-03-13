import ProductModel from "../schema/Product.model";

class ProductService{
    private readonly productModule;

    constructor() {
        this.productModule = ProductModel;
    }
}

export default ProductService;