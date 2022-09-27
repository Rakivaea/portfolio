import { Paper, Typography, Grid, Stack, Link, Box } from "@mui/material";

export function ProjectItem(props) {
  let isEven = props.index % 2 === 0 ? true : false;
  const tagElements = props.tags.map((tag, index) => {
    return (
      <Paper
        key={index}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: 0.5,
          marginLeft: 0,
          padding: 0.5,
        }}
      >
        <Typography variant={"subtitle2"}>{tag}</Typography>
      </Paper>
    );
  });
  return (
    <Paper elevation={3} sx={{ marginBottom: 3 }}>
      <Grid
        container
        sx={{
          padding: 3,
          flexDirection: isEven ? "row" : "row-reverse",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ marginBottom: 1.5, textAlign: "center" }}
          >
            {props.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {props.description}
          </Typography>
          <Stack sx={{ flexWrap: "wrap", flexDirection: "row" }}>
            {tagElements}
          </Stack>
          <Stack sx={{ flexWrap: "wrap", flexDirection: "row" }}>
            {props.link ? (
              <Link
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ m: 1 }}
              >
                Website
              </Link>
            ) : (
              <></>
            )}
            {props.repo ? (
              <Link
                href={props.repo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ m: 1 }}
              >
                Repository
              </Link>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.link ? (
              <Link
                href={props.link}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ m: 0, p: 0, display: "flex" }}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: 233,
                    maxWidth: 350,
                    height: "auto",
                    width: "100%",
                    backgroundColor: "primary.main",
                    borderRadius: 1,
                    padding: 0.5,
                  }}
                  alt={props.alt}
                  src={props.imageDesktop}
                />
              </Link>
            ) : (
              <Box
                component="img"
                sx={{
                  maxHeight: 233,
                  maxWidth: 350,
                  height: "auto",
                  width: "100%",
                  backgroundColor: "primary.main",
                  borderRadius: 1,
                  padding: 0.5,
                }}
                alt={props.alt}
                src={props.imageDesktop}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
