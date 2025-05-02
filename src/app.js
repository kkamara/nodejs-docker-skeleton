"use strict";
const { version } = require("../package.json");
const cli = require("cli" );

const appName = "NodeJS Docker Skeleton";

const options = {
  foo: [ "f", "Some description", "string", "apples"],
  bar: [ "w", "What kind of work to do", "string", "oranges" ],
};

const run = () => {
  cli.enable('version');
  cli.setApp(appName, version);
  const cliRes = cli.parse(options);
  
  console.log(cliRes);
};

run();