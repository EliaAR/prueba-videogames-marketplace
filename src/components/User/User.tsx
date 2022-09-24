import Box from "@mui/material/Box";
import { ProfileBio } from "../ProfileBio/ProfileBio";
import { MarketRating } from "../MarketRating/MarketRating";

function User() {
  return (
    <Box>
      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingInline: 2,
          paddingBlock: 2,
          backgroundColor: "background.default",
        }}
      >
        <ProfileBio />
      </Box>
      <Box component="main" sx={{ paddingInline: 4, paddingBlock: 2 }}>
        <MarketRating />
      </Box>
    </Box>
  );
}
export { User };
