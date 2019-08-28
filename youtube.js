const
    config = require('./config'),
    _get = require('simple-get'),
    youtubelib = {
        getVideoData: function (video_id) {
            const opts = {
                url: `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet%2C+contentDetails&id=${video_id}&key=${config.YOUTUBE_KEY}`,
                json: true
            };
            return _get.concat(
                opts,
                (err, res, data) => {
                    if (err) throw err;
                    console.log(res.statusCode);
                    console.log(data);
                    console.log(data.items[0].snippet);
                    console.log(data.items[0].contentDetails);
                })
        }
    };

module.exports = youtubelib;