exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 301,
        headers: {
            "Location": "/assets/videos/v1.mp4"
        },
        body: null
    })
}