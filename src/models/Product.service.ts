import Errors, { HttpCode, Message } from "../libs/Erorrs";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService{
    private readonly productModule;

    constructor() {
        this.productModule = ProductModel;
    }

     /*  SPA */

      /*  BSSR */

      public async createNewProduct(input: ProductInput): Promise<Product> {
        try{
           return await this.productModule.create(input);
        }catch(err) {
            console.log("Errors: model:createNewProduct: ", err);
          throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
      }
}

export default ProductService;