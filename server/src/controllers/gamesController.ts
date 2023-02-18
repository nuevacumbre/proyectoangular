import { Request, Response } from 'express';
//import pool from '../database';
////import consulta from '../database';
const pool = require('../database');
//const consulta = require('../database');

class GamesController {

    public index (req: Request, res: Response) {
        ///res.send('Games')
        pool.query('DESCRIBE games');
        ////////consulta('DESCRIBE games');
        res.json('games');
       // res.json(response);
    }

    ////public /*async*/ list_old (req: Request, res: Response) {
        //res.json({text: 'listing a game'});
    //////    const games = /*await*/ pool.query('SELECT * FROM games');
    ////////    res.json(games);
       // res.send(games);
    ////////}

    public async list (req: Request, res: Response) {
        ////////const response = consulta('SELECT * FROM games');
        const response = await pool.query('SELECT * FROM games');        ///agrego await
        res.json(response);
        console.log(response);
        
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        //res.json({text: 'This is a game' + req.params.id});
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        /////const response = await consulta('SELECT * FROM games WHERE id = ' + id + '');
        //////res.json(response);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        //console.log(games);
        //res.json({text: 'Game founded'});
        res.status(404).json({text: "The Game doesnt exits"});
    }

   // public async create (req: Request, res: Response): Promise<void> {
   //     await pool.query('INSERT INTO games set ?', [req.body]);
   public async create (req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO games set ?', [req.body]);
    //////////const response = await consulta('INSERT INTO games set ' + req.body + '');
    //console.log(req.body);        
        res.json({message: 'Game Saved'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        //res.json({text: 'updating a game' + req.params.id });
        const { id } = req.params;
        console.log("antes de la queryyyyyyyyy");
        console.log("el reqqqq ",req.body);
        
        
       // await pool.query(`UPDATE FROM games set ${req.body} WHERE id = ${id}`);
       await pool.query(`UPDATE games set title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}'  WHERE id = ${id}`);
        ////////////await consulta('UPDATE FROM games set ? WHERE id = ' + req.body + '' + id + '');
        res.json({message: 'The game was updated'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        //res.json({text: 'deleting a game' + req.params.id });
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        //////////await consulta('DELETE FROM games WHERE id = ' + id + '');
        res.json({message: 'The game was deleted'});
    }
}

const gamesController = new GamesController();
export default gamesController;