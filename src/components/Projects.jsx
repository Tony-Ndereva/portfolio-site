import GAEventsTracker from "./GAEventsTracker";
import { Button, createTheme,makeStyles } from "@mui/material";
import {makeStyles} from "@material-ui"

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2), // Add padding
    backgroundColor: "red", // Change background color
    color: "white", // Change text color
  },
}));

const Projects = (props) => {
  const classes= useStyles();
  const EventsTracker = GAEventsTracker("External Project Links");
  return (
    <>
      <div className="project-card">
        <img src={props.projectImage} className="project-image" alt="" />
        <h3 className="project-title">{props.projectName}</h3>
        <p className="project-description">{props.projectDescription}</p>
        {/* <a
          className="project-link"
          href={props.projectLink}
          onClick={() => EventsTracker(props.projectName, props.projectLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-link"></i> View Project
        </a> */}
        <Button
          variant="contained"
          href={props.projectLink}
          onClick={() => EventsTracker(props.projectName, props.projectLink)}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >View project</Button>
      </div>
    </>
  );
};

export default Projects;
