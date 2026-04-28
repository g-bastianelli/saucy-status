# saucy-status

![saucy-status](./banner.jpeg)

> *Claude gooning on your context... it's beautiful*

Claude Code used to show fun thinking labels while processing — `* Gooning... (thought for 4s)`, `* Topsy-turvying...`, `* Brewing...`. Random, chaotic, perfect.

Those labels are gone (or at least, "Gooning" is). This plugin brings the vibe back via the statusline — suggestive messages rotating at the bottom while Claude thinks.

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
