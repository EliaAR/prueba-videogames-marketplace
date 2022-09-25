import { useState, MouseEventHandler } from "react";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  mockDataGroup1,
  mockDataGroup2,
  mockDataTransactions,
} from "../../config/data";
import { GameCard } from "../GameCard/GameCard";
import { LatestTransaction } from "../LatestTransaction/LatestTransaction";

interface MobileCardSelectorProps {
  handleNotImplementedSection: MouseEventHandler<HTMLElement>;
}

function MobileCardSelector({
  handleNotImplementedSection,
}: MobileCardSelectorProps) {
  const [selectTabPanel, setSelectTabPanel] = useState("playing");

  // @ts-ignore
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setSelectTabPanel(newValue);
  };

  return (
    <Card
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.7,
        paddingBottom: 1.5,
        maxWidth: 330,
      }}
    >
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.7,
          "& .MuiTab-root": {
            fontSize: 12,
          },
        }}
      >
        <TabContext value={selectTabPanel}>
          <TabList
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
              "& button.Mui-selected": {
                backgroundColor: "primary.light",
                color: "text.secondary",
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: "space-between",
              },
            }}
          >
            <Tab label="Playing" value="playing" />
            <Tab label="Completed" value="completed" />
            <Tab label="Transaction" value="transaction" />
          </TabList>
          <Box
            component="article"
            sx={{
              "& .MuiTabPanel-root": {
                paddingBottom: 0,
                paddingTop: 1,
              },
            }}
          >
            <TabPanel value="playing">
              <Box
                component="article"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2.5,
                }}
              >
                {mockDataGroup1.map((game) => (
                  <GameCard
                    key={game.id}
                    nameGame={game.name}
                    src={game.image}
                  />
                ))}
              </Box>
            </TabPanel>
            <TabPanel value="completed">
              <Box
                component="article"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2.5,
                  "& .MuiTypography-root": {
                    fontSize: 12,
                    color: "text.secondary",
                  },
                }}
              >
                {mockDataGroup2.map((game) => (
                  <GameCard
                    key={game.id}
                    nameGame={game.name}
                    src={game.image}
                  />
                ))}
              </Box>
            </TabPanel>
            <TabPanel
              value="transaction"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                paddingInline: 2,
              }}
            >
              {mockDataTransactions.map((transaction) => (
                <LatestTransaction
                  key={transaction.id}
                  nameOrder={transaction.nameOrder}
                  numberOrder={transaction.numberOrder}
                  dateOrder={transaction.dateOrder}
                  purchased={transaction.purchased}
                />
              ))}
            </TabPanel>
          </Box>
        </TabContext>
        <Divider />
        <Box component="article" onClick={handleNotImplementedSection}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "primary.main",
            }}
          >
            see full list
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export { MobileCardSelector };
