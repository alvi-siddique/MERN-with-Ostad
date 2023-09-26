// customer created 
const customerCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "customer Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// customer read 
const customerRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "customer Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// customer upadate 
const customerUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "customer Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// customer delete 
const customerDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "customer Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    customerCreate,
    customerRead,
    customerUpdate,
    customerDelete
} 