// order created 
const orderCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order read 
const orderRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order upadate 
const orderUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// order delete 
const orderDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "order Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    orderCreate,
    orderRead,
    orderUpdate,
    orderDelete
} 