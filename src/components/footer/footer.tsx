import "./footer.css";

export default function Footer() {
  return (
    <footer className="status-bar">
      <p className="status-bar-field">
        <a href="https://github.com/GlavnyNegodyai" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p className="status-bar-field">
        <a href="https://t.me/wannabegood" target="_blank" rel="noopener noreferrer">Telegram</a>
      </p>
      <p className="status-bar-field">
        <a href="https://wa.me/79833044506" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </p>
      <p className="status-bar-field">
        <a href="mailto:pawel.dubowick@yandex.ru" target="_blank" rel="noopener noreferrer">E-mail</a>
      </p>
    </footer>
  );
}
