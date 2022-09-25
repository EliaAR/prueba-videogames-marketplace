import { MouseEventHandler } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

interface ProfileBioProps {
  handleNotImplementedSection: MouseEventHandler<HTMLElement>;
}

function ProfileBio({ handleNotImplementedSection }: ProfileBioProps) {
  const matches = useMediaQuery("(min-width: 667px)");

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        gap: 2.5,
      }}
    >
      <Avatar
        component="article"
        alt="Avatar doggy"
        src="/avatar.png"
        sx={{ width: 164, height: 164 }}
      />
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& p": {
            fontSize: 14,
            textAlign: matches ? "start" : "center",
            color: "text.secondary",
          },
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 38, color: "primary.main" }}>
          diderotto
        </Typography>
        <Box>
          <Typography variant="body1">Joined June 2022</Typography>
          <Typography variant="body1">Barcelona, Spain</Typography>
        </Box>
        {matches ? (
          <Button
            variant="outlined"
            onClick={handleNotImplementedSection}
            sx={{ fontSize: 16, textTransform: "none", color: "primary.main" }}
          >
            Profile private settings
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}

export { ProfileBio };
