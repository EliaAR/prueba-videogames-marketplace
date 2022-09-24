import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";

function ProfileBio() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
    >
      <Avatar
        component="article"
        alt="Avatar perrete"
        src="/avatar.png"
        sx={{ width: 164, height: 164 }}
      />
      <Typography variant="h1" sx={{ fontSize: 38, color: "primary.main" }}>
        diderotto
      </Typography>
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& p": {
            fontSize: 14,
            textAlign: "center",
            color: "text.primary",
          },
        }}
      >
        <Typography variant="body1">Joined June 2022</Typography>
        <Typography variant="body1">Barcelona, Spain</Typography>
      </Box>
      {/* <Button
        variant="outlined"
        sx={{ fontSize: 16, textTransform: "none", color: "primary.main" }}
      >
        Profile private settings
      </Button> */}
    </Box>
  );
}

export { ProfileBio };
