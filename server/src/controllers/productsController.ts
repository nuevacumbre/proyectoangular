import { Request, Response } from 'express';

class ProductsController {

    public index (req: Request, res: Response) {
        res.send('Products')
    }
}

const productsController = new ProductsController();
export default productsController;