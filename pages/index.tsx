import {
  BottomNavigation,
  Container,
  Link,
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
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h1">Chris Stevenson</Typography>
        <Typography variant="h6">Welcome to my website!</Typography>
      </Stack>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginY: 4,
        }}
      >
        <GitHubMark />
        <DiscordMark />
      </BottomNavigation>
    </Container>
  );
}
