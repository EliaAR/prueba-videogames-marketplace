import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface DesktopHeaderTabsProps {
  handleSimulatedRoute: (value: boolean) => void;
}

function DesktopHeaderTabs({ handleSimulatedRoute }: DesktopHeaderTabsProps) {
  const [selectedTab, setSelectedTab] = useState("activity");

  const currentSection = useRef("activity");

  // @ts-ignore
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
    currentSection.current = newValue;
  };

  const handleClickSection = () => {
    if (currentSection.current === "activity") {
      handleSimulatedRoute(false);
    } else {
      handleSimulatedRoute(true);
    }
  };

  return (
    <Box component="section" onClick={handleClickSection}>
      <Tabs
        onChange={handleChange}
        value={selectedTab}
        sx={{
          "& .MuiTab-root": {
            fontSize: 25,
          },
        }}
      >
        <Tab label="Activity" value="activity" />
        <Tab label="Store" value="store" sx={{ marginLeft: 6.5 }} />
        <Tab label="Collection" value="collection" sx={{ marginLeft: 6.5 }} />
        <Tab label="Reviews" value="reviews" sx={{ marginLeft: 6.5 }} />
        <Tab label="Friends" value="friends" sx={{ marginLeft: 6.5 }} />
      </Tabs>
    </Box>
  );
}

export { DesktopHeaderTabs };
