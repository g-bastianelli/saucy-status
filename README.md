# saucy-status

Claude Code plugin — suggestive loading messages while Claude thinks.

## Installation

```
/plugin marketplace add g-bastianelli/saucy-status
/plugin install saucy-status@saucy-status
```

Restart Claude Code. The statusline badge is auto-configured on first session start.

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
| **gooning** | Gooning-themed messages |

State persists in `~/.claude/.saucy-status`. Messages rotate in the statusline while active.

## How it works

- `SessionStart` hook → auto-configures the statusline on first run
- `statusline.sh` → displays a random message from `data/messages.json` based on active mode
- Skills (`toggle`, `gooning`) → switch state via slash commands

## Uninstall

```
/plugin uninstall saucy-status@saucy-status
rm ~/.claude/.saucy-status
```
