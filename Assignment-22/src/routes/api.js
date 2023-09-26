const express = require('express');
const router = express.Router();

// user routes end poing import 
const { 
    userCreate, 
    userRead, 
    userUpdate, 
    userDelete 
} = require('../controllers/userController');

// admin routes end poing import 
const { 
    adminCreate, 
    adminRead, 
    adminUpdate, 
    adminDelete 
} = require('../controllers/adminController');

// subAdmin routes end poing import 
const { 
    subAdminCreate, 
    subAdminRead, 
    subAdminUpdate, 
    subAdminDelete 
} = require('../controllers/subAdminController');

// post routes end poing import 
const { 
    postCreate, 
    postRead, 
    postUpdate, 
    postDelete 
} = require('../controllers/postController');

// customer routes end poing import 
const { 
    customerCreate, 
    customerRead, 
    customerUpdate, 
    customerDelete 
} = require('../controllers/customerController');

// category routes end poing import 
const { 
    categoryCreate, 
    categoryRead, 
    categoryUpdate, 
    categoryDelete 
} = require('../controllers/categoryController');

// order routes end poing import 
const { 
    orderCreate, 
    orderRead, 
    orderUpdate, 
    orderDelete 
} = require('../controllers/orderController');

// product routes end poing import 
const { 
    productCreate, 
    productRead, 
    productUpdate, 
    productDelete 
} = require('../controllers/productController');

// order_item routes end poing import 
const { 
    order_itemCreate, 
    order_itemRead, 
    order_itemUpdate, 
    order_itemDelete 
} = require('../controllers/order_itemController');

// payment routes end poing import 
const { 
    paymentCreate, 
    paymentRead, 
    paymentUpdate, 
    paymentDelete 
} = require('../controllers/paymentController');

// shipment routes end poing import 
const { 
    shipmentCreate, 
    shipmentRead, 
    shipmentUpdate, 
    shipmentDelete 
} = require('../controllers/shipmentController');

// cart routes end poing import 
const { 
    cartCreate, 
    cartRead, 
    cartUpdate, 
    cartDelete 
} = require('../controllers/cartController');

// wishList routes end poing import 
const { 
    wishListCreate, 
    wishListRead, 
    wishListUpdate, 
    wishListDelete 
} = require('../controllers/wishListController');


// user routes endpoint 
router.get('/userCreate', userCreate);
router.get('/userRead', userRead);
router.get('/userUpdate', userUpdate);
router.get('/userDelete', userDelete);

// admin routes endpoint 
router.get('/adminCreate', adminCreate);
router.get('/adminRead', adminRead);
router.get('/adminUpdate', adminUpdate);
router.get('/adminDelete', adminDelete);

// subAdmin routes endpoint 
router.get('/subAdminCreate', subAdminCreate);
router.get('/subAdminRead', subAdminRead);
router.get('/subAdminUpdate', subAdminUpdate);
router.get('/subAdminDelete', subAdminDelete);

// post routes endpoint 
router.get('/postCreate', postCreate);
router.get('/postRead', postRead);
router.get('/postUpdate', postUpdate);
router.get('/postDelete', postDelete);

// customer routes endpoint 
router.get('/customerCreate', customerCreate);
router.get('/customerRead', customerRead);
router.get('/customerUpdate', customerUpdate);
router.get('/customerDelete', customerDelete);

// category routes endpoint 
router.get('/categoryCreate', categoryCreate);
router.get('/categoryRead', categoryRead);
router.get('/categoryUpdate', categoryUpdate);
router.get('/categoryDelete', categoryDelete);

// order routes endpoint 
router.get('/orderCreate', orderCreate);
router.get('/orderRead', orderRead);
router.get('/orderUpdate', orderUpdate);
router.get('/orderDelete', orderDelete);

// product routes endpoint 
router.get('/productCreate', productCreate);
router.get('/productRead', productRead);
router.get('/productUpdate', productUpdate);
router.get('/productDelete', productDelete);

// order_item routes endpoint 
router.get('/order_itemCreate', order_itemCreate);
router.get('/order_itemRead', order_itemRead);
router.get('/order_itemUpdate', order_itemUpdate);
router.get('/order_itemDelete', order_itemDelete);

// payment routes endpoint 
router.get('/paymentCreate', paymentCreate);
router.get('/paymentRead', paymentRead);
router.get('/paymentUpdate', paymentUpdate);
router.get('/paymentDelete', paymentDelete);

// shipment routes endpoint 
router.get('/shipmentCreate', shipmentCreate);
router.get('/shipmentRead', shipmentRead);
router.get('/shipmentUpdate', shipmentUpdate);
router.get('/shipmentDelete', shipmentDelete);

// cart routes endpoint 
router.get('/cartCreate', cartCreate);
router.get('/cartRead', cartRead);
router.get('/cartUpdate', cartUpdate);
router.get('/cartDelete', cartDelete);

// wishList routes endpoint 
router.get('/wishListCreate', wishListCreate);
router.get('/wishListRead', wishListRead);
router.get('/wishListUpdate', wishListUpdate);
router.get('/wishListDelete', wishListDelete);

module.exports = {
    router
}