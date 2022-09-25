import Box from "@mui/material/Box";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Typography from "@mui/material/Typography";

interface GameCardProps {
  src: string;
  nameGame: string;
  textGame?: string;
}

function GameCard({ src, nameGame, textGame }: GameCardProps) {
  return (
    <Box component="article">
      <Box
        component="img"
        src={src}
        alt={nameGame}
        title={nameGame}
        sx={{ width: 80, height: 105 }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          color: "primary.main",
        }}
      >
        {!textGame ? (
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              "& .MuiSvgIcon-root": { fontSize: 20 },
            }}
          >
            <CheckCircleRoundedIcon />
            <CancelRoundedIcon />
          </Box>
        ) : (
          <Typography variant="body1">{textGame}</Typography>
        )}
      </Box>
    </Box>
  );
}

export { GameCard };
