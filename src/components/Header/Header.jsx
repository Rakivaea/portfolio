import {
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";

import "./Header.css";
import { listContent } from "../../data/data";

export default function Header() {
  const linkElements = listContent.map((item, index) => {
    const Icon = item.icon;
    return (
      <ListItem
        key={index}
        sx={{
          paddingLeft: 0,
          paddingBottom: 0,
        }}
      >
        <Link
          href={item.link}
          underline="none"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
            "&:hover": {
              fontWeight: "600",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 23 }}>
            <Icon
              sx={{
                fontSize: "large",
                color: "white",
              }}
            />
          </ListItemIcon>
          {item.text}
        </Link>
      </ListItem>
    );
  });
  return (
    <header>
      <Container
        sx={{
          color: "white",
          paddingTop: "2em",
          paddingBottom: "2em",
          height: { md: "50vh" },
          position: "relative",
        }}
      >
        <Stack paddingTop="2em" spacing={1}>
          <Typography variant="h1" sx={{ fontSize: 40, fontWeight: 500 }}>
            Rakivaea Kvitting
          </Typography>

          <Typography variant="h2" sx={{ fontSize: 27, fontWeight: 400 }}>
            Engineer focusing on web development using React and Node/Express
          </Typography>
        </Stack>
        <List
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "100%", sm: "50%" },
          }}
        >
          {linkElements}
        </List>
      </Container>
    </header>
  );
}
