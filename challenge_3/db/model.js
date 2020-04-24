const db = require('./index.js')

module.exports = {
  findAll: (res) => {
    db.query('SELECT * FROM checkout_info', (err, data)=>{
      if(err) {
        res.status(404).send(err)
      } else {
        res.send(data)
      }
    } );
  }
}