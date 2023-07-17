import Socials from "./Socials";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="row">
        <div className="footer-copyright">
          <h4>
            Designed and Developed by{" "}
            <span className="orange">{props.name}</span>
          </h4>
        </div>
        <div className="footer-copyright">
          <h4>Copyright &copy; {new Date().getFullYear()} </h4>
        </div>
        <div className="footer-socials">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
