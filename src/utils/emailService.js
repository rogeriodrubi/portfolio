import emailjs from '@emailjs/browser'

// Configuração do EmailJS
// Você precisará criar uma conta em https://www.emailjs.com/
// e configurar as credenciais abaixo
const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}
