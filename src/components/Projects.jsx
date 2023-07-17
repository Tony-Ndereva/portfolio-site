import GAEventsTracker from "./GAEventsTracker";
const Projects = ({
  projectImage,
  projectName,
  projectDescription,
  projectLink,
}) => {
  const EventsTracker = GAEventsTracker("External Project Links");
  return (
    <>
      <div className="project-card">
        <img src={projectImage} className="project-image" alt="" />
        <h3 className="project-title">{projectName}</h3>
        <p className="project-description">{projectDescription}</p>
        <a
          className="project-link"
          href={projectLink}
          onClick={() => EventsTracker(projectName, projectLink)}
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
