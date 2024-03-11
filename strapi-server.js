"use strict";

module.exports =
  process.env.NODE_ENV === "local"
    ? require("./dist/server").default
    : require("./server").default;
