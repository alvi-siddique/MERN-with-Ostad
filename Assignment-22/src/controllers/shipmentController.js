// shipment created 
const shipmentCreate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "shipment Created Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// shipment read 
const shipmentRead = async  (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "shipment Read Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// shipment upadate 
const shipmentUpdate = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "shipment Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

// shipment delete 
const shipmentDelete = async (req, res, next) => {
    try {
        res.status(200).json({
            status : "Success",
            data : "shipment Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    shipmentCreate,
    shipmentRead,
    shipmentUpdate,
    shipmentDelete
} 