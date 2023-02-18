"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsController {
    index(req, res) {
        res.send('Products');
    }
}
const productsController = new ProductsController();
exports.default = productsController;
