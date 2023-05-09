"use client";
import DiscordMark from "@/components/discord-mark";
import GitHubMark from "@/components/github-mark";
import {
  BottomNavigation,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

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
                  primary="Software Engineer"
                  secondary="Velvet Financial Services, 2021 — Present"
                />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Developed the initial version of the web applications
                          as part of a small team of engineers, resulting in a
                          base of over 500 active users"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Led the development of integrations with third-party services to facilitate on-platform KYB and investment processes" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Trained new employees on the company's React and Django development stack" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Currently involved in creating solutions to private finance issues by utilizing novel machine learning methods in Python" />
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Typography variant="h6">Education</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="B.S. Data Science"
                  secondary="University of Utah, 2019 — Present"
                />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Expected graduation: "
                      secondary="December 2023"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="GPA: " secondary="3.5" />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Relevant coursework: "
                      secondary="Machine Learning, Artificial Intelligence, Data Mining, Visualization for Data Science, Database Systems, Software Development, Probability Theory, Applied Statistics, Linear Algebra"
                    />
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <Typography variant="h6">Skills</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Programming Languages" />
                <List>
                  <ListItem>
                    <ListItemText primary="Python" secondary="Advanced" />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="JavaScript/TypeScript"
                      secondary="Proficient"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Go" secondary="Intermediate" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Julia" secondary="Beginner" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="SQL" secondary="Intermediate" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Markdown" secondary="Advanced" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="LaTeX" secondary="Advanced" />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="Tools" />
                <List>
                  <ListItem>
                    <ListItemText primary="Git" secondary="Advanced" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Unix" secondary="Advanced" />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="Frameworks" />
                <List>
                  <ListItem>
                    <ListItemText primary="React" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Next.js" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="D3" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="visx" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Pandas" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="NumPy" secondary="Proficient" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Django" secondary="Proficient" />
                  </ListItem>
                </List>
              </ListItem>
            </List>
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
