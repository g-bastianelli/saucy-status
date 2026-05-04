# saucy-status

This standalone repository is archived. `saucy-status` now lives in the
[`nuthouse`](https://github.com/g-bastianelli/nuthouse/tree/main/saucy-status)
plugin marketplace.

## Install

Use the `nuthouse` marketplace for new installs:

```sh
/plugin marketplace add g-bastianelli/nuthouse
/plugin install nuthouse@saucy-status
```

Restart Claude Code after installing.

## Existing Installs

Existing installs from `g-bastianelli/saucy-status` can keep working from this
archived repository, but future updates happen in `nuthouse`.

To move to the new marketplace:

```sh
/plugin marketplace remove g-bastianelli/saucy-status
/plugin marketplace add g-bastianelli/nuthouse
/plugin install nuthouse@saucy-status
```

## Links

- New source: https://github.com/g-bastianelli/nuthouse/tree/main/saucy-status
- Marketplace: https://github.com/g-bastianelli/nuthouse

---

<p align="center"><img src="./banner.jpeg" width="400" /></p>

> *Claude gooning on your context... it's beautiful*

Claude Code used to show fun thinking labels while processing — `* Gooning... (thought for 4s)`, `* Topsy-turvying...`, `* Brewing...`. Random, chaotic, perfect.

Those labels are gone (or at least, "Gooning" is). This plugin brings the vibe back — two ways:

- **Statusline** — message rotates at the bottom while Claude thinks
- **Conversation** — random message surfaces in the transcript on every prompt

## Commands

| Command | Effect |
|---------|--------|
| `/saucy on` | Activate saucy mode |
| `/saucy off` | Deactivate |
| `/saucy gooning` | Switch to gooning mode |
| `/saucy status` | Report current mode |
| `/saucy` | Toggle off ↔ saucy |

## Modes

**off** — silent (default)

**saucy** — double entendres, suggestive tech metaphors. Claude is "allocating full RAM for this very special request."

**gooning** — full brainrot. Claude is "lost in your embeddings." Duration unknown.

---

State persists across sessions in `~/.claude/.saucy-status`.

## Uninstall

```sh
/plugin uninstall nuthouse@saucy-status
rm ~/.claude/.saucy-status
```
