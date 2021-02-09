import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FaceIcon from "@material-ui/icons/Face";
import Moment from "react-moment";

const ReplyItem = ({ reply }) => {
  const { date, name, body } = reply;
  return (
    <AccordionDetails style={{ display: "block" }}>
      <div style={{ color: "#606060" }}>
        <FaceIcon style={{ margin: "0", padding: "0" }} fontSize="small" />{" "}
        {name}
      </div>
      <div style={{ color: "#606060" }}>
        <Moment format="MM/DD/YYYY">{date}</Moment> at {""}
        <Moment format="h:mm A">{date}</Moment>
      </div>

      <p style={{ lineHeight: "1.9" }}>{body}</p>
    </AccordionDetails>
  );
};

export default ReplyItem;
