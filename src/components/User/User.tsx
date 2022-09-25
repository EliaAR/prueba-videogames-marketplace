import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  mockDataGroup1,
  mockDataGroup2,
  mockDataTransactions,
} from "../../config/data";
import { ProfileBio } from "../ProfileBio/ProfileBio";
import { MarketRating } from "../MarketRating/MarketRating";
import { DesktopHeaderTabs } from "../DesktopHeaderTabs/DesktopHeaderTabs";
import { DesktopCardSelector } from "../DesktopCardSelector/DesktopCardSelector";
import { MobileCardSelector } from "../MobileCardSelector/MobileCardSelector";
import { MobileBottomBar } from "../MobileBottomBar/MobileBottomBar";
import { GameCard } from "../GameCard/GameCard";
import { LatestTransaction } from "../LatestTransaction/LatestTransaction";

function User() {
  const [notImplementedSection, setNotImplementedSection] =
    useState<boolean>(false);

  const matches = useMediaQuery("(min-width: 667px)");

  return (
    <Box>
      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: matches ? 5 : 1,
          minHeight: matches ? "339px" : "326px",
          paddingInline: 2,
          paddingTop: matches ? 10 : 5,
          paddingBottom: matches ? 0 : 2,
          backgroundColor: "secondary.main",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <ProfileBio
            handleNotImplementedSection={() => setNotImplementedSection(true)}
          />
          {matches ? <MarketRating /> : null}
        </Box>
        {matches ? (
          <DesktopHeaderTabs
            handleSimulatedRoute={(newValue) =>
              setNotImplementedSection(newValue)
            }
          />
        ) : null}
      </Box>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: matches ? "space-between" : "center",
          gap: 2,
          minHeight: matches ? "calc(100vh - 339px)" : "calc(100vh - 382px)",
          paddingBlock: 2,
          backgroundColor: "background.default",
        }}
      >
        {notImplementedSection ? (
          <Typography
            variant="body1"
            sx={{
              paddingTop: matches ? 30 : 0,
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Aquí irá la sección correspondiente
          </Typography>
        ) : matches ? (
          <Box
            component="section"
            sx={{
              flexGrow: matches ? 0.2 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <DesktopCardSelector
              nameCard="Currently playing"
              handleNotImplementedSection={() =>
                setNotImplementedSection(!notImplementedSection)
              }
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2.5,
                paddingBlock: 1,
              }}
            >
              {mockDataGroup1.map((game) => (
                <GameCard key={game.id} nameGame={game.name} src={game.image} />
              ))}
            </DesktopCardSelector>
            <DesktopCardSelector
              nameCard="Completed"
              handleNotImplementedSection={() =>
                setNotImplementedSection(!notImplementedSection)
              }
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2.5,
                paddingBlock: 1,
                "& .MuiTypography-root": {
                  fontSize: 12,
                  color: "text.secondary",
                },
              }}
            >
              {mockDataGroup2.map((game) => (
                <GameCard key={game.id} nameGame={game.name} src={game.image} />
              ))}
            </DesktopCardSelector>
            <DesktopCardSelector
              nameCard="Latest transactions"
              handleNotImplementedSection={() =>
                setNotImplementedSection(!notImplementedSection)
              }
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                paddingInline: 2,
                paddingBlock: 1,
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
            </DesktopCardSelector>
          </Box>
        ) : (
          <Box
            component="section"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <MarketRating />
            <MobileCardSelector
              handleNotImplementedSection={() =>
                setNotImplementedSection(!notImplementedSection)
              }
            />
          </Box>
        )}
      </Box>
      {matches ? null : (
        <MobileBottomBar
          handleSimulatedRoute={(newValue) =>
            setNotImplementedSection(newValue)
          }
        />
      )}
    </Box>
  );
}
export { User };
