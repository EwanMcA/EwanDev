import React from "react";

import { createRoot } from "react-dom/client";

import Landing from "./landing";

const index = document.getElementById("index");
if (index) {
  const root = createRoot(index);
  root.render(<Landing />);
}
