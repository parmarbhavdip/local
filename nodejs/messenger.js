//create template 
const nodemailer = require('nodemailer');

function Mail(receiver, subject, message) {
    //create instance variable
    this.receiver = receiver,
        this.subject = subject,
        this.message = message,
        this.sendEmail = async function () {
            // Create transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'karan.bhatt.bhavnagar@gmail.com',        // Your Gmail address (Sender)
                    pass: 'ezbs oglv nwot thnb'            // ← IMPORTANT: Use App Password (see below)
                }
            });

            // Email options
            const mailOptions = {
                from: '"My App" <karan.bhatt.bhavnagar@gmail.com>',   // Sender name + email
                to: this.receiver,               // Receiver email
                subject: this.subject,
                text: this.message,
                html: this.message
            };

            // Send email
            console.log('trying to send email');
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('✅ Email sent successfully!');
                //console.log('Message ID:', info.messageId);
            } catch (error) {
                console.error('❌ Error sending email:', error);
            }
        }
}
module.exports.Mail = Mail;