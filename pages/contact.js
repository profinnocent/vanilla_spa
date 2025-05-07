export function Contact() {
  return `
    <section>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Reach out using the details below or the contact form.</p>
      <p><strong>Email:</strong> contact@example.com</p>
      <p><strong>Phone:</strong> +1 234 567 890</p>
      <h2>Send us a message</h2>
      <form onsubmit="event.preventDefault(); alert('Form submitted!');">
        <label>Name:<br/><input type="text" required></label><br/>
        <label>Email:<br/><input type="email" required></label><br/>
        <label>Message:<br/><textarea required></textarea></label><br/>
        <button type="submit">Send</button>
      </form>
    </section>
  `;
}
