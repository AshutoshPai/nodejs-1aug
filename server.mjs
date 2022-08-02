import http from "http";
import url from "url";
import util from "util";
import os from "os";
import chalk, { chalkStderr } from "chalk";

import { getDateTime, applicationName } from "./time/index.mjs";

const port = 5000;

http
    .createServer((req, res) => {

        const requestPath = req.url;
        const parse = url.parse(requestPath);

        const response = util.format("The path is: %s and query: %s, on a OS: %s with current time: %s and Name: %s", parse.pathname, parse.query, os.platform, getDateTime(), applicationName);

        res.end(response);
    })
    .listen(port, ()=>{
        console.log(chalk.bgGreen(chalk.yellow("Server started...")) + chalk.bold(port));
    });