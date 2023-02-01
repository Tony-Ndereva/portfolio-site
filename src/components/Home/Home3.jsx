const Home3 = () => {
  return (
    <section className="contacts">
      <div className="text-wrapper">
        <h2>CONTACT ME ON</h2>
        <h4>
          Feel free to <span className="orange">connect</span> with me
        </h4>
      </div>
      <div className="contacts-icons">
        <a href="https://github.com/G-69westside" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tony-maluki-9b9611173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/life.astony/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/asap_toni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="mailto:tonymaluki@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Home3;
