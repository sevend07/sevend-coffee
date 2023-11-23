const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/assets/img')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

module.exports = upload