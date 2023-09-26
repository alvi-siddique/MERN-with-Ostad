// subAdmin created 
const subAdminCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "subAdmin Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// subAdmin read 
const subAdminRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "subAdmin Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// subAdmin upadate 
const subAdminUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "subAdmin Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// subAdmin delete 
const subAdminDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "subAdmin Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    subAdminCreate,
    subAdminRead,
    subAdminUpdate,
    subAdminDelete
}

