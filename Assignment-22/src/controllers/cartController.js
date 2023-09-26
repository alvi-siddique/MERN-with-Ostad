// cart created 
const cartCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "cart Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// cart read 
const cartRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "cart Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// cart upadate 
const cartUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "cart Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// cart delete 
const cartDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "cart Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    cartCreate,
    cartRead,
    cartUpdate,
    cartDelete
} 