"use strict";
/**
 * sale service
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductStock = void 0;
const strapi_1 = require("@strapi/strapi");
/**
 * Validate available stock for a product and calculate the new stock value.
 * Throws when the product is missing, stock is unset, or the sale would create negative stock.
 */
const validateProductStock = (product, productId, quantity) => {
    if (!product) {
        throw new Error(`Product with ID ${productId} not found`);
    }
    if (product.stock == null) {
        throw new Error(`Stock is not set for product with ID ${productId}`);
    }
    const updatedStock = product.stock - quantity;
    if (updatedStock < 0) {
        throw new Error(`Insufficient stock for product with ID ${productId}`);
    }
    return updatedStock;
};
exports.validateProductStock = validateProductStock;
exports.default = strapi_1.factories.createCoreService('api::sale.sale');
