import "../css/Links.scss";

function Links() {
  return (
    <div className="link">
      <a href="https://github.com/ariemad/rubik-cube">
        <img className="link-svg" src="/github.svg" alt="github link" />
      </a>
      <a href="https://www.linkedin.com/in/daniel-bray-365014276/">
        <img className="link-svg" src="/linkedin.svg" alt="linkedin link" />
      </a>
      <a href="mailto:daniel.bray.dev@hotmail.com">
        <img className="link-svg" src="/mail.svg" alt="mail link" />
      </a>
    </div>
  );
}

export default Links;
