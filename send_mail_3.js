const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'abdelrazek.n4@gmail.com'
  },
  // uncomment below to send emails in development/test env:
  // send: true
  transport: {
    jsonTransport: true
  }
});

email
  .send({
    template: 'mars',
    message: {
      to: 'abdelrazek.n3@gmail.com'
    },
    locals: {
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);