import Socials from "./Socials";
const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="footer">
      <div className="row">
        <div className="footer-copyright">
          <h4>
            Designed and developed by{" "}
            <span className="orange">Tony Ndereva Maluki</span>
          </h4>
        </div>
        <div className="footer-copyright">
          <h4>
            Copyright &copy;{" "}2017 - {getYear()} TM
          </h4>
        </div>
        <div className="footer-socials">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
