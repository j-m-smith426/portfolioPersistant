import { Grid, Link, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

import ProjectData from "../../Static/Data/projects.json"
import BaseCarousel from "../../util/BaseCarousel/BaseCarousel";
import classes from "./Projects.module.css";

const Projects: FC = (props) =>
{
    const projectList = ProjectData.Projects;
    
    const resolveListItems = () =>
    {
        return projectList.map(project =>
        {
            return (
                <ListItem>
                    <Grid container className={classes.container}>
                        <Grid container item xs={12} sm={6} className={classes.description}>
                            <h3>{project.Title}</h3>
                            <ListItemText primary={project.Description} />
                            <List >
                                {resolveList()}
                            </List>
                            <ListItem>
                            {project.GitHub && <Link href={project.GitHub}>GitHub Link</Link>}
                            </ListItem>
                        </Grid>
                        <Grid container justifyContent="center" item xs={12} sm={6} className={classes.carouselItem}>
                            <BaseCarousel images={project.Images}/>
                            </Grid>
                    </Grid>
                </ListItem>
            )

            function resolveList()
            {
                return project.Technology.map(type =>
                {
                    return (
                        <>
                        <h3>{type.Type}</h3>
                            {type.tech.map(tech => (<ListItemText primary={tech} className={classes.techList} key={tech} />))}
                            </>
                    )
                })
            }
        })
    }
    return (
        <>
            <h3 id="projects">Projects</h3>
            <List>
                {resolveListItems()}
            </List>
        </>
    );
}

export default Projects;