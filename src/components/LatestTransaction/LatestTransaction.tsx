import Box from "@mui/material/Box";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface LatestTransactionProps {
  nameOrder: string;
  numberOrder: string;
  dateOrder: string;
  purchased?: boolean;
}

function LatestTransaction({
  nameOrder,
  numberOrder,
  dateOrder,
  purchased,
}: LatestTransactionProps) {
  return (
    <Box component="article">
      {purchased ? (
        <Box
          component="article"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <CreditCardRoundedIcon sx={{ color: "rgba(153, 205, 0, 1)" }} />
          <Box component="article">
            <Typography variant="body1" sx={{ fontSize: 13 }}>
              Purchased{" "}
              <Link href="#" underline="none">
                {nameOrder}{" "}
              </Link>
              - Order{" "}
              <Link href="#" underline="none">
                {numberOrder}
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 11 }}>
              {dateOrder}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          component="article"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <SellRoundedIcon sx={{ color: "rgba(249, 74, 79, 1)" }} />
          <Box component="article">
            <Typography variant="body1" sx={{ fontSize: 13 }}>
              Sold{" "}
              <Link href="#" underline="none">
                {nameOrder}{" "}
              </Link>
              - Order{" "}
              <Link href="#" underline="none">
                {numberOrder}
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 11 }}>
              {dateOrder}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export { LatestTransaction };
