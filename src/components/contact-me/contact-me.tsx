import "./contact-me.css";
import { useState } from "react";
import type { ContactMeContent } from "../../i18n/content-types";

type ContactMeProps = {
  content: ContactMeContent;
};

export default function ContactMe({ content }: ContactMeProps) {
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

    setResult(
      data.success ? content.form.successMessage : content.form.errorMessage,
    );

    if (data.success) {
      form.reset();
    }
  };
  return (
    <section className="contact-me">
      <div className="contact-me__content">
        <div className="contact-me__left">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>

        <div className="contact-me__right">
          <form onSubmit={onSubmit}>
            <div className="form__small-fields">
              <div>
                <label htmlFor="email">{content.form.emailLabel}</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div>
                <label htmlFor="subject">{content.form.subjectLabel}</label>
                <input type="text" name="subject" id="subject" required />
              </div>
            </div>

            <div>
              <label htmlFor="message">{content.form.messageLabel}</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">{content.form.buttonText}</button>
            <p>{result}</p>
          </form>

          <div className="contacts">
            <div>
              <h2>{content.contacts.title}</h2>
              <p>{content.contacts.description}</p>
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
                    E-mail
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
