import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Footer.css";

export default function Footer() {
  function backToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <footer>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "primary.main", padding: 1, visibility: "hidden" }}
        >
          Go back to top
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "primary.main", textAlign: "center", padding: 1 }}
        >
          Made by Rakivaea Kvitting
        </Typography>
        <Link
          onClick={backToTop}
          sx={{ cursor: "pointer", textAlign: "center" }}
        >
          <Typography
            href="#"
            variant="subtitle1"
            sx={{ color: "primary.main", padding: 0.5 }}
          >
            Go back to top
          </Typography>
        </Link>
      </Container>
    </footer>
  );
}
