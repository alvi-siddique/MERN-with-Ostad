// user created 
const userCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "User Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// user read 
const userRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "User Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// user upadate 
const userUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "User Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// user delete 
const userDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "User Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userCreate,
    userRead,
    userUpdate,
    userDelete
}

