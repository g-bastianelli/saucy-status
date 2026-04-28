const fs = require('fs');
const path = require('path');

const VALID_MODES = ['off', 'saucy', 'gooning'];
const FLAG_PATH = path.join(process.env.HOME, '.claude', '.saucy-status');
const MAX_FLAG_SIZE = 10;

function readFlagFile(flagPath) {
  flagPath = flagPath || FLAG_PATH;
  try {
    // symlink check
    const stat = fs.lstatSync(flagPath);
    if (stat.isSymbolicLink()) return 'off';
    if (stat.size > MAX_FLAG_SIZE) return 'off';
    const value = fs.readFileSync(flagPath, 'utf8').trim();
    return VALID_MODES.includes(value) ? value : 'off';
  } catch (e) {
    return 'off';
  }
}

function pickMessage(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

module.exports = { readFlagFile, pickMessage, FLAG_PATH };
