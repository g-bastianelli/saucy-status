# saucy-status

Claude Code plugin — suggestive loading messages while Claude thinks.

## Installation

```bash
claude plugin install https://github.com/g-bastianelli/saucy-status
```

Or locally:
```bash
claude --plugin-dir ./saucy-status
```

Enable the statusline badge in `~/.claude/settings.json`:
```json
{
  "statusLine": {
    "type": "command",
    "command": "bash \"PATH_TO_PLUGIN/hooks/statusline.sh\""
  }
}
```
Replace `PATH_TO_PLUGIN` with the actual installation path (e.g. `~/.claude/plugins/cache/saucy-status/hooks/statusline.sh`).

## Usage

| Command | Effect |
|---------|--------|
| `/saucy-status:toggle` | Enable/disable the plugin |
| `/saucy-status:gooning` | Switch to gooning mode (or back to saucy) |

## Modes

| Mode | Description |
|------|-------------|
| **off** | No messages (default) |
| **saucy** | Suggestive tech humor + double entendres |
| **gooning** | Gooning-themed jokes only |

## Uninstall

```bash
claude plugin uninstall saucy-status
rm ~/.claude/.saucy-status
```
