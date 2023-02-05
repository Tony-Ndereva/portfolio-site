import logo from "../assets/pictures/ictalogo.jpg";
const Projects = (props) => {
  return (
    <div className="projects-wrapper">
      <div className="projects-wrapper">
        <div className="project-intro">
          <h2>
            My Recent <span className="orange">Works</span>
          </h2>
          <h4>Here are a few projects I've worked on recently.</h4>
        </div>
        <div className="project-container">
          <div className="project">
            <img src="../assets/pictures/ictalogo.jpg" galt="" />
            <h3>ICT Authority</h3>
            <p>
              A sub branch of an ERP system from KwikBasket Solutions Nairobi
              Kenya that helps internal teams improve their work output. Most of
              he systems that have been developed here are utility
              apps.Kwikbasket solutions is an agrucltural firm that consists of
              a team of passionate agriculture enthusiasts and techies committed
              to changing farmers' lives by improving their access to fair
              markets and providing high quality fresh produce to our customers
            </p>
            <button>View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
