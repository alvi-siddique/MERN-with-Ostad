// wishList created 
const wishListCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "wishList Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// wishList read 
const wishListRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "wishList Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// wishList upadate 
const wishListUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "wishList Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// wishList delete 
const wishListDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "wishList Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    wishListCreate,
    wishListRead,
    wishListUpdate,
    wishListDelete
} 