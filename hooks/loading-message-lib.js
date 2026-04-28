#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');

const FLAG_PATH = path.join(os.homedir(), '.claude', '.saucy-status');
const VALID_MODES = new Set(['off', 'saucy', 'gooning']);

function readFlagFile() {
  try {
    const content = fs.readFileSync(FLAG_PATH, 'utf8').trim();
    return VALID_MODES.has(content) ? content : 'off';
  } catch (e) {
    return 'off';
  }
}

function pickMessage(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

module.exports = { readFlagFile, pickMessage };
