import React from "react";
import Accordion from "@material-ui/core/Accordion";
import Badge from "@material-ui/core/Badge";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from "@material-ui/icons/Comment";
import ReplyItem from "./ReplyItem";

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            align="center"
          >
            <Badge
              badgeContent={replies.length}
              color="secondary"
              style={{ marginRight: "1rem" }}
            >
              <CommentIcon style={{ color: "orange" }} />
            </Badge>
            View Comments
          </AccordionSummary>

          {replies.map((reply) => (
            <ReplyItem reply={reply} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Replies;
