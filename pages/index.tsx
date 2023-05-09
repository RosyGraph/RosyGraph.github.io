"use client";
import {
  BottomNavigation,
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

function GitHubMark() {
  return (
    <Link href="https://github.com/RosyGraph">
      <Image
        src="/github-mark/github-mark.png"
        alt="Github Mark"
        width={32}
        height={32}
      />
    </Link>
  );
}

function DiscordMark() {
  return (
    <Link href="https://discordapp.com/users/RosyGraph#1240">
      <Image
        src="/discord-mark-black.png"
        alt="Discord Mark"
        width={32}
        height={24}
      />
    </Link>
  );
}

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Box paddingBottom={4}>
        <Stack spacing={2}>
          <Typography variant="h1">Chris Stevenson</Typography>
          <Stack spacing={1}>
            <Typography variant="h6">Welcome to my website!</Typography>
            <Typography variant="body1">
              I aim to further my technical knowledge and experience by actively
              seeking projects which create value by leveraging data. I am
              determined to learn new technologies and tools which will allow me
              to make a difference. Additionally, I want to work in a
              collaborative environment so that I can share my knowledge and
              learn from others.
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">Experience</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Software Engineer, Velvet Financial Services, 2021 — Present"
                  secondary={
                    <ul>
                      <li>
                        Developed the initial version of the web applications as
                        part of a small team of engineers, resulting in a base
                        of over 500 active users
                      </li>
                      <li>
                        Led the development of integrations with third-party
                        services to facilitate on-platform KYB and investment
                        processes
                      </li>
                      <li>
                        Trained new employees on the company's React and Django
                        development stack
                      </li>
                      <li>
                        Currently involved in creating solutions to private
                        finance issues by utilizing novel machine learning
                        methods in Python
                      </li>
                    </ul>
                  }
                />
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Typography variant="h6">Education</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="B.S. Data Science, University of Utah, 2019 — Present"
                  secondary={
                    <ul>
                      <li>Expected graduation: December 2023</li>
                      <li>Relevant coursework: </li>
                      <ul>
                        <li>Machine Learning</li>
                        <li>Artificial Intelligence</li>
                        <li>Data Mining</li>
                        <li>Visualization for Data Science</li>
                        <li>Database Systems</li>
                        <li>Software Development</li>
                        <li>Probability Theory</li>
                        <li>Applied Statistics</li>
                        <li>Linear Algebra</li>
                        <li>Calculus</li>
                      </ul>
                    </ul>
                  }
                />
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Typography variant="h6">Skills</Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "100%",
              }}
            >
              <List
                sx={{
                  width: "50%",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Programming Languages"
                    secondary={
                      <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Go</li>
                        <li>Julia</li>
                        <li>SQL</li>
                        <li>Markdown</li>
                        <li>LaTeX</li>
                      </ul>
                    }
                  />
                </ListItem>
              </List>
              <List
                sx={{
                  width: "50%",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Tools and frameworks"
                    secondary={
                      <ul>
                        <li>Git</li>
                        <li>Unix</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>D3</li>
                        <li>visx</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>Django</li>
                      </ul>
                    }
                  />
                </ListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: 2,
          height: 32,
          width: "100%",
        }}
      >
        <GitHubMark />
        <DiscordMark />
      </BottomNavigation>
    </Container>
  );
}
