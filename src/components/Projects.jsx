const Projects = (props) => {
  return (
    
      <div className="project-card">
        <img src={props.projectImage} className="project-image" alt="" />
        <h3>{props.projectName}</h3>
        <p>{props.projectDescription}</p>
      </div>
   
  );
};

export default Projects;
