import "./contact-me.css";
import { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    formData.append("access_key", "2a93561f-7ff9-4a0e-a8d6-273a24ea2ff7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message sent succesfully" : "Something went wrong, try again later");
    if (data.success) {
      form.reset();
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form__small-fields">
        <div>
          <label htmlFor="email">Your E-mail</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required />
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
      <p>{result}</p>
    </form>
  );
}

export default function ContactMe() {
  return (
    <section className="contact-me">
      <div className="contact-me__content">
        <div className="contact-me__left">
          <h1>Contact Me</h1>
          <p>You can leave a message through this neat form</p>
        </div>
        <div className="contact-me__right">
          <ContactForm />
          <div className="contacts">
            <div>
              <h2>Or...</h2>
              <p>Just contact me through other methods</p>
            </div>
            <ul className="contacts-list">
              <li className="contacts-list__element">
                <a href="">
                  <img src="/src/assets/icons/telegram.svg" alt="" />
                  <div role="tooltip" className="contacts-list__popup">
                    Telegram
                  </div>
                </a>
              </li>
              <li className="contacts-list__element">
                <a href="">
                  <img src="/src/assets/icons/whatsapp.svg" alt="" />
                  <div role="tooltip" className="contacts-list__popup">
                    WhatsApp
                  </div>
                </a>
              </li>
              <li className="contacts-list__element">
                <a href="">
                  <img src="/src/assets/icons/mail.svg" alt="" />
                  <div role="tooltip" className="contacts-list__popup">
                    E-Mail
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
