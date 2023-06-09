// import { readFileSync } from "fs";
import fs from "fs";

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");