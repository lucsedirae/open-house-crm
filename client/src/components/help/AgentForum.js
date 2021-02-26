//* Dependencies
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const AgentForum = () => {
    //* Returns JSX to DOM
  return (
    <div id="forum">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Agent Forum
        </Typography>
        <img
          src="/img/forum.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The Agent Forum is a public space where real estate professionals
            can network to share referrals for vendors and tradespeople, refer
            business out of service area, share marketing ideas, and more. This
            is a social space and terms of service/code of conduct is
            forthcoming. Click the comment button to leave a comment on a post.
            Click the like button to let your peers know you enjoyed their
            content.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentForum;
