import Particle from "./Particle";
const Projects = (props) => {
  return (
    <>
    
      <div className="project-card">
        <img src={props.projectImage} className="project-image" alt="" />
        <h3 className="project-title">{props.projectName}</h3>
        <p className="project-description">{props.projectDescription}</p>
        <a
          className="project-link"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-link"></i> View Project
        </a>
      </div>
      
    </>
  );
};

export default Projects;
