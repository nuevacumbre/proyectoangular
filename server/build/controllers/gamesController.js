"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import pool from '../database';
////import consulta from '../database';
const pool = require('../database');
//const consulta = require('../database');
class GamesController {
    index(req, res) {
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
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ////////const response = consulta('SELECT * FROM games');
            const response = yield pool.query('SELECT * FROM games'); ///agrego await
            res.json(response);
            console.log(response);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'This is a game' + req.params.id});
            const { id } = req.params;
            const games = yield pool.query('SELECT * FROM games WHERE id = ?', [id]);
            /////const response = await consulta('SELECT * FROM games WHERE id = ' + id + '');
            //////res.json(response);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            //console.log(games);
            //res.json({text: 'Game founded'});
            res.status(404).json({ text: "The Game doesnt exits" });
        });
    }
    // public async create (req: Request, res: Response): Promise<void> {
    //     await pool.query('INSERT INTO games set ?', [req.body]);
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO games set ?', [req.body]);
            //////////const response = await consulta('INSERT INTO games set ' + req.body + '');
            //console.log(req.body);        
            res.json({ message: 'Game Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'updating a game' + req.params.id });
            const { id } = req.params;
            console.log("antes de la queryyyyyyyyy");
            console.log("el reqqqq ", req.body);
            // await pool.query(`UPDATE FROM games set ${req.body} WHERE id = ${id}`);
            yield pool.query(`UPDATE games set title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}'  WHERE id = ${id}`);
            ////////////await consulta('UPDATE FROM games set ? WHERE id = ' + req.body + '' + id + '');
            res.json({ message: 'The game was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'deleting a game' + req.params.id });
            const { id } = req.params;
            yield pool.query('DELETE FROM games WHERE id = ?', [id]);
            //////////await consulta('DELETE FROM games WHERE id = ' + id + '');
            res.json({ message: 'The game was deleted' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
