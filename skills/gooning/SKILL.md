---
name: gooning
description: Switch to gooning mode or back to saucy. Use when user types /saucy-status:gooning
---

Switch saucy-status gooning mode. Read the flag file at `~/.claude/.saucy-status`:

- If file contains `gooning`: write `saucy` (return to normal saucy mode)
- Otherwise (off, saucy, absent): write `gooning`

Use this exact Node.js snippet:

```javascript
const fs = require('fs');
const os = require('os');
const path = require('path');
const flagPath = path.join(os.homedir(), '.claude', '.saucy-status');
let current = 'off';
try { current = fs.readFileSync(flagPath, 'utf8').trim(); } catch(e) {}
const next = current === 'gooning' ? 'saucy' : 'gooning';
fs.writeFileSync(flagPath, next, { flag: 'w' });
console.log(`saucy-status: ${next}`);
```

After executing, report the new state:
- `gooning` → "GOONING mode activated 🫠 — Claude is gooning on your requests"
- `saucy` → "Back to saucy mode 🌶️"
