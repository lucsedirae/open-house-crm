//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Badge from "@material-ui/core/Badge";
import CommentIcon from "@material-ui/icons/Comment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//* Custom components
import ReplyItem from "./ReplyItem";

//* Exported component
const Replies = ({ postReplies }) => {
  //* Returns JSX to DOM
  return (
    <div>
      {postReplies.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            align="center"
          >
            <Badge
              badgeContent={postReplies.length}
              color="secondary"
              style={{ marginRight: "1rem" }}
            >
              <CommentIcon style={{ color: "grey" }} />
            </Badge>
            <span style={{ fontWeight: "600" }}>View Comments</span>
          </AccordionSummary>

          {postReplies.map((reply) => (
            <ReplyItem key={reply._id} reply={reply} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Replies;
