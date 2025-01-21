const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, phone, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhilashvarshney3@gmail.com',
      pass: 'jjfc seem lryu cztc' // Use an app password if 2FA is enabled
    }
  });

  const mailOptions = {
    from: 'abhilashvarshney3@gmail.com',
    to: 'rahulca.agarwal@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' })
    };
  }
};
