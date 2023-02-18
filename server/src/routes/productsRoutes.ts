import { Router } from 'express';

class ProductRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Products'));
    }
}

const productsRoutes = new ProductRoutes();
export default productsRoutes.router;