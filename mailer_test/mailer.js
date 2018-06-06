const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const conf = fs.readFileSync('./conf.json', 'utf8')
const config = JSON.parse(conf)

let transporter = nodemailer.createTransport({
  service: config.service_mail,
  auth: {
    user: config.sys_mail,
    pass: config.sys_mdp
  }
})

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/send', (req, res) => {

  let mailOptions = {
    from: config.name,
    to: req.body.dest,
    subject: req.body.title,
    text: req.body.message,
    html: req.body.message
  };

  transporter.sendMail(mailOptions, function(err, response) {
    !!err ? console.error(err) : res.redirect('/');
  });

  res.redirect('/')
})

app.listen(8080, (err) => {
  console.log('listen on 8080');
})
