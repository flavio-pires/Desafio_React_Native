import express, { request, response } from 'express';
import db from './database/connection';

const routes = express.Router();

routes.get('/filmes', async (request, response) => {
    const database = await db;

    database.serialize(() => {
        database.each('SELECT * FROM Filmes', function(err: { message: any; }, row: any){
            if (err){
                console.error(err.message);
            }
            console.log(row)
        });
        return response.send(200)
    });
});

routes.post('/novofilme', async (request, response) => {
    const database = await db;

    database.run(`INSERT INTO Filmes	(Titulo, IdGenero)` , [`${request.body.Titulo}`,`${request.body.IdGenero}`], function(err: {message: any;}, row: any){
        if (err){
            console.error(err.message);
        }
        console.log(row);
        return response.send(200)
    });
});

routes.delete('/deletefilme/:id', async (request, response)=> {
    const dataBase = await db;
    dataBase.run(`DELETE FROM Filmes WHERE rowid=?`, [`${request.params.id}`], function(err: { message: any}) {
            if (err) {
                return console.error(err.message);
            }
            return response.send('Ok')
    });
});

routes.put('/editfilme/titulo', async (request, response) => {
    const dataBase = await db;

    let sql = `UPDATE Filmes 
                SET Titulo = ? 
                WHERE Id = ?`;

dataBase.run(sql, [`${request.body.name}`, `${request.body.id}`], function(err: { message: any; }) {
    if (err){
        return console.error(err.message);
    }
    return response.send(200)
});
});

export default routes;