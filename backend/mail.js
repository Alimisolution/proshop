import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alimirosheed5000@gmail.com',
    pass: 'afib hsnu oezb euby',
  },
});

const sendmails = (email) => {
  const mailOptions = {
    to: email,
    from: 'alimirosheed5000@gmail.com',
    subject: 'ProShop',
    text: 'Thanks for choosing proShop',
  };

  transport.sendMail(mailOptions);
};

export default sendmails;
