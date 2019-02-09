var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'rkeiz7lkmuaveutc@ethereal.email',
        pass: 'VUjTDEadPspaskZMZp'
    }
});

var mailOptions = {
  from: 'goo@gmail.com',
  to: 'andamandayan@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

module.exports.sendMail = function() {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
