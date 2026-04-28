# saucy-status

Claude Code plugin — suggestive loading messages while Claude thinks.

## Installation

```
/plugin marketplace add g-bastianelli/saucy-status
/plugin install saucy-status@saucy-status
```

On first session start, the plugin detects if the statusline badge is configured. If not, it prints the exact JSON snippet to paste into `~/.claude/settings.json`. Manual setup:

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash \"${CLAUDE_PLUGIN_ROOT}/hooks/statusline.sh\""
  }
}
```

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

State persists in `~/.claude/.saucy-status`.

## How it works

- `UserPromptSubmit` hook → injects a random loading message from `data/messages.json` based on active mode
- `SessionStart` hook → detects missing statusline config and prints setup snippet
- Skills (`toggle`, `gooning`) → switch state file via slash commands

## Uninstall

```
/plugin uninstall saucy-status@saucy-status
rm ~/.claude/.saucy-status
```
