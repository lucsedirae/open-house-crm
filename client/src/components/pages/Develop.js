import React, { useState, useEffect } from "react";
import API from "../../utils/GH_API";

const Develop = () => {
  const repo = API.getRepo();
  console.log(repo);

  return <div></div>;
};

export default Develop;
