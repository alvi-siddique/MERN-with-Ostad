// category created 
const categoryCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "category Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// category read 
const categoryRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "category Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// category upadate 
const categoryUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "category Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// category delete 
const categoryDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "category Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    categoryCreate,
    categoryRead,
    categoryUpdate,
    categoryDelete
} 