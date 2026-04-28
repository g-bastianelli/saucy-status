# saucy-status

> *Claude gooning on your context... it's beautiful*

Claude Code plugin that shows suggestive loading messages while Claude thinks. Because staring at a blank spinner is boring, and watching Claude "goon on your embeddings" is not.

**Why does this exist?** Claude used to show little status messages while thinking. They're gone now. This plugin brings them back — but hornier and more brainrot.

---

## Install

```
/plugin marketplace add g-bastianelli/saucy-status
/plugin install saucy-status@saucy-status
```

Restart Claude Code. Statusline auto-configures. Done.

## Commands

| Command | Effect |
|---------|--------|
| `/saucy-status:toggle` | Turn on/off |
| `/saucy-status:gooning` | Switch to gooning mode (or back to saucy) |

## Modes

**off** — nothing (default)

**saucy** — double entendres, suggestive tech metaphors. Claude is "allocating full RAM for this very special request."

**gooning** — full brainrot. Claude is "lost in your embeddings." Duration unknown.

---

Messages rotate in the statusline. State persists across sessions in `~/.claude/.saucy-status`.

## Uninstall

```
/plugin uninstall saucy-status@saucy-status
rm ~/.claude/.saucy-status
```
