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
  },
  submitInfo: (req, res) => {
    db.query(`INSERT INTO checkout_info (names, email, passwords, line1, line2, city, states, zip, ccn, expiration, cvv) VALUES ("${req.names}", "${req.email}", "${req.passwords}", "${req.line1}", "${req.line2}", "${req.city}", "${req.states}", "${req.zip}", "${req.ccn}", "${req.expiration}", "${req.cvv}")`, (err, data) => {
      if(err) {
        res.status(404).send(err)
      } else {
        res.send(data)
      }
    })
    console.log(req)
  }


}