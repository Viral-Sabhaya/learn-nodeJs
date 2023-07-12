const os = require("os");
const freeMem = os.freemem();
console.log(freeMem);
const homeDir = os.homedir();
console.log(homeDir);
const osMachine = os.machine();
console.log(osMachine);
