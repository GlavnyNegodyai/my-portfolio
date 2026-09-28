import "./contact-me.css";

function handleSubmit(event: any) {
  event.preventDefault();
  const email = "pawel.dubowick@yandex.ru";
  const topic = "topic";
}

function contactForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default function ContactMe() {
  return (
    <section className="contact-me">
      <div className="contact-me__content">
        <div>
          <h1>Contact Me</h1>
          <p>Contact me through the methods below or via this form</p>
        </div>
        {/* <contactForm/> */}
      </div>
    </section>
  );
}
