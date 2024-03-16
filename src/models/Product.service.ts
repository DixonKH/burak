import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Erorrs";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
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

      public async updateChosenProduct(id: string, input: ProductUpdateInput): Promise<Product> {
         id = shapeIntoMongooseObjectId(id);
         const result = await this.productModule.findOneAndUpdate({_id: id}, input, {new: true}).exec();
         if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
         return result;
         
      }
}

export default ProductService;