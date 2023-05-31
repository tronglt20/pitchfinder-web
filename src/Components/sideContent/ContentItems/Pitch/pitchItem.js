import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PitchItem() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="100px"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        sx={{ padding: "20px", bgcolor: "#cccccc" }}
      />
      <CardContent>
        <Typography>
          <h2>Sân A</h2>
          <p>Description</p>
          <hr />
        </Typography>
      </CardContent>
    </Card>
  );
}
