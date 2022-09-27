// Header Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Main Content - Project Images
import twitterTrendsDesktop from "../assets/images/TwitterTrends-Desktop.png";
import cryptoTrackerDesktop from "../assets/images/CryptoTracker-Desktop.png";
import portfolioWebsiteDesktop from "../assets/images/PortfolioWebsite-Desktop.png";

// Header
export const listContent = [
  {
    text: "Resume",
    link: "./RakivaeaKvitting_Resume.pdf",
    icon: ArticleIcon,
  },
  {
    text: "GitHub",
    link: "https://www.github.com/rakivaea",
    icon: GitHubIcon,
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/rakivaea",
    icon: LinkedInIcon,
  },
  {
    text: "Contact",
    link: "mailto:rakivaeaw@gmail.com",
    icon: MailIcon,
  },
];

// Main Content
export const projectData = [
  {
    title: "Twitter Trends",
    description:
      "Press any point on the Google Map, and get the trending topics around that area via the Twitter API.",
    imageDesktop: twitterTrendsDesktop,
    alt: "Image of Twitter Trends website",
    tags: [
      "React",
      "NodeJS",
      "JavaScript",
      "CSS",
      "Express",
      "Google Maps API",
      "Twitter API",
    ],
    link: "https://trending-world-tweets.netlify.app/",
    repo: "https://github.com/Rakivaea/trending-tweets-frontend",
  },
  {
    title: "Crypto Tracker",
    description:
      "View the top cryptocurrencies, and view data such as historical price, volume data, and more. Graph created using ChartJS.",
    imageDesktop: cryptoTrackerDesktop,
    alt: "Image of Crypto Tracker website",
    tags: [
      "React",
      "NodeJS",
      "JavaScript",
      "CSS",
      "Express",
      "Crypto API",
      "ChartJS",
    ],
    link: "https://crypto-tracker-rk.netlify.app/",
    repo: "https://github.com/Rakivaea/crypto-tracker",
  },
  {
    title: "My Portfolio Website",
    description:
      "A website to view information about me, as well as my projects. To design the website, I decided to try out Material UI.",
    imageDesktop: portfolioWebsiteDesktop,
    alt: "Image of My Portfolio website",
    tags: ["React", "JavaScript", "CSS", "Material UI"],
    link: "",
    repo: "https://github.com/Rakivaea/portfolio",
  },
];

export const qualificationsData = ["BS in Computer Science"];

export const experienceData = [
  "HTML/CSS",
  "JavaScript",
  "Python",
  "React",
  "Node/Express",
  "C#",
];
