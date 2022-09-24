import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function MarketRating() {
  return (
    <Card
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.7,
        paddingBlock: 1.5,
      }}
    >
      <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
        Marketplace Rating
      </Typography>
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 0.7,
        }}
      >
        <Rating
          name="size-medium"
          defaultValue={3}
          sx={{ "& .MuiRating-iconFilled": { color: "primary.main" } }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: 11, color: "primary.main" }}
        >
          276 ratings
        </Typography>
      </Box>
      <Box
        component="article"
        sx={{
          display: "flex",
          gap: 2,
          "& p": {
            fontSize: 14,
            color: "primary.main",
          },
          "& button": {
            display: "flex",
            gap: 0.7,
          },
          "& .MuiSvgIcon-root": {
            width: 18,
            height: 18,
          },
        }}
      >
        <Button variant="outlined">
          <FavoriteIcon />
          38 wanted
        </Button>
        <Button variant="outlined">
          <ShoppingCartIcon />
          17 for sale
        </Button>
      </Box>
    </Card>
  );
}

export { MarketRating };
