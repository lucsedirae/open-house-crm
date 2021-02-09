import React from "react";
import Accordion from "@material-ui/core/Accordion";
import Badge from "@material-ui/core/Badge";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from "@material-ui/icons/Comment";
import ReplyItem from "./ReplyItem";

const Replies = ({ postReplies }) => {
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
            <ReplyItem reply={reply} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Replies;
