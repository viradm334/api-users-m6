require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const Queue = require('bull');
const nodemailer = require('nodemailer');

const emailQueue = new Queue('emailQueue', {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

emailQueue.process(async (job) => {
    const { name, email } = job.data;
  
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  
    const info = await transporter.sendMail({
      from: `You <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Sign Up Notification Email",
      html: `
        <h1>Hello, ${name}</h1>
        <p>Welcome to API Users App! Your registration was successful. We hope you're having a great time here!</p>
      `
    });
  
    console.log('Email sent:', info.messageId);
  });

module.exports = emailQueue;