#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { readFlagFile, pickMessage } = require('./loading-message-lib');

const mode = readFlagFile();

if (mode === 'off') process.exit(0);

const messagesPath = path.join(__dirname, '..', 'data', 'messages.json');
const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
const pool = messages[mode] || messages['saucy'];
const message = pickMessage(pool);

process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "UserPromptSubmit",
    additionalContext: message
  }
}));
