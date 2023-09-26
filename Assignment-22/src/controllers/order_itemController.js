// order_item created 
const order_itemCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order_item Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order_item read 
const order_itemRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order_item Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order_item upadate 
const order_itemUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order_item Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order_item delete 
const order_itemDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order_item Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    order_itemCreate,
    order_itemRead,
    order_itemUpdate,
    order_itemDelete
} 