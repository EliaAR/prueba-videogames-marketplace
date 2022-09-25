import { MouseEventHandler } from "react";
import { SxProps, Theme } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface DesktopCardSelectorProps {
  nameCard: string;
  children: React.ReactNode;
  handleNotImplementedSection: MouseEventHandler<HTMLElement>;
  sx?: SxProps<Theme>;
}
function DesktopCardSelector({
  nameCard,
  children,
  handleNotImplementedSection,
  sx,
}: DesktopCardSelectorProps) {
  return (
    <Card
      component="article"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 0.7,
        paddingTop: 1,
        paddingBottom: 1.5,
        width: 330,
      }}
    >
      <Typography
        component="h3"
        variant="body1"
        sx={{ textTransform: "uppercase" }}
      >
        {nameCard}
      </Typography>
      <Box sx={sx}>{children}</Box>
      <Divider sx={{ width: 330 }} />
      <Box
        component="article"
        onClick={handleNotImplementedSection}
        sx={{ cursor: "pointer" }}
      >
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
    </Card>
  );
}

export { DesktopCardSelector };
