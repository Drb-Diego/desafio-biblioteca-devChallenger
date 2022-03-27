import { Pool, RowDataPacket } from 'mysql2/promise';
import { v4 } from 'uuid';

export default class PublisherModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(publisher: string) {
    const sql = 'INSERT publisher(id, name) VALUES(?, ?)';
    await this.connection.execute(sql, [v4(), publisher]);
  }

  async getByName(name: string) {
    const sql = 'SELECT * FROM publisher WHERE name = ?';
    const [data] = await this.connection.execute<RowDataPacket[]>(sql, [name]);
    return data;
  }
}
