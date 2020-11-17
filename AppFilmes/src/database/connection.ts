const sql = require('sql').verbose();

const db = new sql.Database("./src/database/dboFilmes.sql", sql.OPEN_READWRITE , (err: { message: any; }) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to database');
    console.log(db)
    });

    export default db;