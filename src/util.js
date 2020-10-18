import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEnrollmentEmail = ({ firstName, lastName, registrationNumber, email, cohort }) => {
  const msg = {
    to: email, 
    from: 'evajohnson714@gmail.com',
    subject: 'Succesfull enrollment',
    html: `<h2>Welcome to Programming school</h2>
          <p>Hi ${lastName}, ${firstName}</p>

          <p>Student Number: ${registrationNumber}</p>
          <p>You have succesfully enrolled for the ${cohort} cohort in our school.</p>

          <p>Congratulations!!</p>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}