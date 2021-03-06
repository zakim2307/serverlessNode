import pool from '../model/database';

class pgController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM Inventory";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();
            console.log(todos);
            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default pgController;