// post created 
const postCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "post Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// post read 
const postRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "post Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// post upadate 
const postUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "post Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// post delete 
const postDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "post Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postCreate,
    postRead,
    postUpdate,
    postDelete
} 