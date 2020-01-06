const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose
    .connect(
        `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`,
        {useNewUrlParser: true,useUnifiedTopology: true}
    )
    .then( () => {
        app.listen(process.env.SERVERPORT, process.env.SERVERHOST, () => {
            console.log(`Listening on port ${process.env.SERVERPORT} on host ${process.env.SERVERHOST}`);
        });
    } )
    .catch( (error) => {
        console.error(error);
        process.exit(1);
    } );
};
