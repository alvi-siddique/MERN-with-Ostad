// payment created 
const paymentCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "payment Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// payment read 
const paymentRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "payment Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// payment upadate 
const paymentUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "payment Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// payment delete 
const paymentDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "payment Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    paymentCreate,
    paymentRead,
    paymentUpdate,
    paymentDelete
} 