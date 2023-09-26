// product created 
const productCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "Product Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// product read 
const productRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "product Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// product upadate 
const productUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "product Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// product delete 
const productDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "product Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    productCreate,
    productRead,
    productUpdate,
    productDelete
} 