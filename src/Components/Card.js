import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const BasicCard = (props) => {
  const { time, panel, link, title } = props.Info;
  return (
    <Card style={{ minWidth: "250px", width: "40%", margin: "2rem" }}>
      <Paper elevation={3}>
        <CardContent>
          <Typography
            variant="h6"
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "left" }}
            component="span"
          >
            Time:
          </Typography>
          <Typography variant="p">{time}</Typography>
          <hr />
          <Typography
            variant="body1"
            component="span"
            style={{ textAlign: "left" }}
          >
            Panel:
            <a
              href="https://mui.com/material-ui/material-icons/"
              style={{ textDecoration: "none" }}
            >
              {panel}
            </a>
          </Typography>
          <hr />
          <Typography
            variant="body1"
            component="span"
            style={{ textAlign: "left" }}
          >
            Video conference link :{" "}
            <a style={{ textDecoration: "none" }} href={link}>
              Click to join
            </a>
          </Typography>
        </CardContent>
      </Paper>
    </Card>
  );
};

export default BasicCard;
