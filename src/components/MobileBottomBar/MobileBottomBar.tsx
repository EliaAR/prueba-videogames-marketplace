import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WebStoriesRoundedIcon from "@mui/icons-material/WebStoriesRounded";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";

interface MobileBottomBarProps {
  handleSimulatedRoute: (value: boolean) => void;
}

function MobileBottomBar({ handleSimulatedRoute }: MobileBottomBarProps) {
  const [selectedBottomNavigation, setSelectedBottomNavigation] =
    useState("activity");

  // @ts-ignore
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    if (newValue === "activity") {
      handleSimulatedRoute(false);
    } else {
      handleSimulatedRoute(true);
    }
    setSelectedBottomNavigation(newValue);
  };

  return (
    <Box component="footer">
      <BottomNavigation
        value={selectedBottomNavigation}
        onChange={handleChange}
        sx={{
          position: "fixed",
          bottom: 0,
          "& .MuiBottomNavigationAction-label": {
            fontWeight: 700,
          },
        }}
      >
        <BottomNavigationAction
          label="Activity"
          value="activity"
          showLabel={true}
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          label="Collection"
          value="collection"
          showLabel={true}
          icon={<WebStoriesRoundedIcon sx={{ transform: "rotate(-90deg)" }} />}
        />
        <BottomNavigationAction
          label="Store"
          value="store"
          showLabel={true}
          icon={<ShoppingBagIcon />}
        />
        <BottomNavigationAction
          label="Reviews"
          value="reviews"
          showLabel={true}
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          label="Friends"
          value="friends"
          showLabel={true}
          icon={<GroupsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
export { MobileBottomBar };
