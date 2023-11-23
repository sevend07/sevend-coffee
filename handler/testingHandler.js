exports.uploadImg = async (req, res) => {
    res.json({
        message: 'image uploaded',
        data: req.file
    }).status(200)
}