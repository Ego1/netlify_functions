exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 301,
        headers: {
            "Location": "/assets/videos/v"  + Math.floor(Math.random() * Math.floor(6)) +  ".mp4"
        },
        body: null
    })
}