//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//* Exported component
const NavPanelHelp = () => {
  return (
    <div id="navpanel">
      <IconButton href="#">
        <ExpandLessIcon />
      </IconButton>

      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Navigation Panel
        </Typography>
        <img
          src="/img/navpanel.gif"
          alt="Gif of navigation panel in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
        <CardContent>
          <Typography variant="body1">
            The navigation panel is located at the top of every module allowing
            consistent and easy access to the entire app at the click of a
            button. Each icon is equipped with a tooltip that displays the name
            of the module when the user hovers their mouse over the icon.
          </Typography>
          <br />
          <Typography variant="body1">
            <em>
              Developer's note: in addition to the nav panel a navigation drawer
              is also in development. The drawer will be able to be accessed on
              desktop via a clickable button and will be accessible on mobile
              with a swipe. When the navigation drawer is released the
              navigation panel will receive a toggle option in the{" "}
              <a href="#myacct">user settings</a> so that users can opt to hide
              the nav panel and further minimize the amount of user interface elements.
            </em>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavPanelHelp;
