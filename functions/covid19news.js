exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 301,
        headers: {
            "Location": getNewsArticle()
        },
        body: null
    })
}

function getNewsArticle () {
    let newsArticles = new Array();
    newsArticles.push("https://www.newsweek.com/government-wants-give-americans-checksheres-what-know-who-might-get-them-1493031");
    newsArticles.push("https://www.nih.gov/news-events/news-releases/nih-clinical-trial-investigational-vaccine-covid-19-begins");
    newsArticles.push("https://www.bloomberg.com/news/articles/2020-03-16/sanofi-and-regeneron-to-begin-initial-covid-19-treatment-trials");

    return newsArticles[Math.floor(Math.random() * Math.floor(newsArticles.length))]
}