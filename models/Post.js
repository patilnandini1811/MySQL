const db = require("../config/db");
class post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  async save() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dd = date.getDate();

    let createdAtDate = `${year}-${month}-${dd}`;

    let sql = `INSERT INTO posts(
      title,
      body,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    )`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }
  static findAll() {}
  static findById(id) {
    let sql = `SELECT * FROM posts WHERE Id = ${id};`;
    return db.execute(sql);
  }
}
module.exports = post;
