---
name: saucy-toggle
description: Toggle saucy-status on/off. Use when user types /saucy-toggle
---

Toggle the saucy-status plugin. Read the flag file at `~/.claude/.saucy-status`:

- If file does not exist or contains `off`: write `saucy` to the flag file (activate)
- If file contains `saucy` or `gooning`: write `off` to the flag file (deactivate)

Use this exact Node.js snippet to perform the write:

```javascript
const fs = require('fs');
const os = require('os');
const path = require('path');
const flagPath = path.join(os.homedir(), '.claude', '.saucy-status');
let current = 'off';
try { current = fs.readFileSync(flagPath, 'utf8').trim(); } catch(e) {}
const next = (current === 'off' || !current) ? 'saucy' : 'off';
fs.writeFileSync(flagPath, next, { flag: 'w' });
console.log(`saucy-status: ${next}`);
```

After executing, report the new state to the user:
- `saucy` → "saucy-status activated 🌶️ — suggestive messages enabled"
- `off` → "saucy-status deactivated — back to normal"
