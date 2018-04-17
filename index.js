const http = require('http');

function connect() {
    http.get('http://stream.meetup.com/2/open_events', res => {
        res.on('data', data => {
            console.log(data.toString());
        });
    }).on('error', (err) => {
        console.log(`APP: There has been a problem with the data stream, ${err}`);
    })
};

connect();
