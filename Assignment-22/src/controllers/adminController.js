// admin created 
const adminCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "admin Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// admin read 
const adminRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "admin Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// admin upadate 
const adminUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "admin Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// admin delete 
const adminDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "admin Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    adminCreate,
    adminRead,
    adminUpdate,
    adminDelete
}

