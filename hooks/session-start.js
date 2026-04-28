#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');

const PLUGIN_ROOT = process.env.CLAUDE_PLUGIN_ROOT || __dirname.replace('/hooks', '');
const SETTINGS_PATH = path.join(os.homedir(), '.claude', 'settings.json');

function isStatuslineConfigured() {
  try {
    const settings = JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8'));
    const cmd = settings?.statusLine?.command || '';
    return cmd.includes('saucy-status');
  } catch (e) {
    return false;
  }
}

if (!isStatuslineConfigured()) {
  const snippet = JSON.stringify({
    statusLine: {
      type: 'command',
      command: `bash "${PLUGIN_ROOT}/hooks/statusline.sh"`
    }
  }, null, 2);

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext: `SAUCY-STATUS SETUP: Statusline badge not configured. Add this to ~/.claude/settings.json:\n${snippet}`
    }
  }));
}
