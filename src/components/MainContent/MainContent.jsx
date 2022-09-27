import "./MainContent.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ProjectItem } from "./ProjectItem/ProjectItem";

import { Check, ChevronRight, Send } from "@mui/icons-material";
import {
  qualificationsData,
  experienceData,
  projectData,
} from "../../data/data";

export default function MainContent() {
  const qualificationsElements = qualificationsData.map((qualification) => {
    return (
      <ListItem sx={{ width: "auto" }}>
        <ChevronRight sx={{ color: "primary.main" }} />
        <ListItemText>{qualification}</ListItemText>
      </ListItem>
    );
  });

  const experienceElements = experienceData.map((experience) => {
    return (
      <ListItem sx={{ width: "auto" }}>
        <Check sx={{ color: "primary.main" }} />
        <ListItemText>{experience}</ListItemText>
      </ListItem>
    );
  });
  const projectElements = projectData.map((project, index) => {
    return (
      <Grid key={index} item xs={12}>
        <ProjectItem
          title={project.title}
          description={project.description}
          imageDesktop={project.imageDesktop}
          alt={project.alt}
          tags={project.tags}
          link={project.link}
          repo={project.repo}
          index={index}
        />
      </Grid>
    );
  });

  return (
    <Container maxWidth="md">
      <Container>
        <Typography variant="h3" paddingTop={6} paddingBottom={3}>
          About Me
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={6}
            paddingBottom={{ xs: 1 }}
            paddingRight={{ md: 3 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                marginBottom: 1,
              }}
            >
              Currently, I'm an Engineer working at Spectronix, where I help
              deploy and develop progressive software/hardware. I graduated with
              a BS in Computer Science in 2020.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                marginBottom: 1,
              }}
            >
              On my free time, I enjoy running, hiking, and learning new
              technologies to increase my skillset. Recently, I've been learning
              Material UI and getting more experience with React and
              Node/Express.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                marginBottom: 1,
              }}
            >
              Check out my{" "}
              <Link
                href="https://www.github.com/rakivaea"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>{" "}
              for my latest projects.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={8} md={6}>
            <Paper elevation={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: 2,
                    marginLeft: 2,
                    color: "primary.main",
                  }}
                >
                  Qualifications:
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <List dense="true">{qualificationsElements}</List>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: 2,
                    color: "primary.main",
                  }}
                >
                  Experience with:
                </Typography>
                <Container>
                  <List
                    dense="true"
                    sx={{
                      display: "flex",
                      height: 150,
                      flexFlow: "column wrap",
                      overflow: "auto",
                    }}
                  >
                    {experienceElements}
                  </List>
                </Container>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Typography
        variant="h3"
        align="center"
        sx={{
          "&::after": {
            margin: "0 auto",
            marginTop: 0.5,
            marginBottom: 4,
            borderColor: "primary.main",
          },
          marginTop: 8,
          color: "primary.main",
        }}
      >
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          margin: 1,
          color: "primary.main",
        }}
      >
        Below are some projects I've been working on to highlight my skills and
        get a greater understanding of React and Node.js.
      </Typography>
      <Grid container spacing={1}>
        {projectElements}
      </Grid>
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginTop: 8,
            "&::after": {
              margin: "0 auto",
              marginBottom: 4,
              borderColor: "primary.main",
            },
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            margin: 1,
            marginBottom: 4,
            color: "primary.main",
          }}
        >
          If you have any opportunities to discuss or any other questions,
          contact me at my email below.
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ marginBottom: 4 }}
            size="large"
            variant="contained"
            href="mailto:rakivaeaw@gmail.com"
            endIcon={<Send />}
          >
            Email
          </Button>
        </Container>
      </Container>
      <Divider sx={{ marginTop: 4 }} />
    </Container>
  );
}
