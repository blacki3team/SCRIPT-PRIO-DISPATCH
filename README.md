DISCORD : https://github.com/blacki3team/SCRIPT-PRIO-DISPATCH

# Fox Cooldown


Lightweight QBCore police priority controller with a simple NUI panel. Police on duty can set the current server priority (CoolDown, On Hold, In Progress, Meeting, City Safe, Inactive) and broadcast it to everyone with a persistent banner.

## Requirements
- QBCore (exports `${Config.Core}` default `qb-core`)

## Install
1) Add `ensure fox-cooldown` to your `server.cfg`.
2) If your core resource name differs, update `Config.Core` in `config.lua`.

## How it works
- Command `/prio` (police on duty only) opens the panel.
- Pick a status tile, it broadcasts to all clients and shows on-screen.
- `CoolDown` starts a timer (default 30 minutes, set in `Config.DefaultCooldown`).
- ESC closes the panel.

## Customizing statuses
- Rename or add status labels in `Config.Types` inside `config.lua`.
- If you add a new status key, also give it a color in `ui/app.js` under `statusColors` so the banner and button use the right tint.

## Using the Tayeb color
If you have a specific “Tayeb” brand color you want the UI to use:
1) Open `ui/app.js`.
2) In `const statusColors`, replace any hex values with your Tayeb hex (for example `#123456`).
3) Save and `ensure fox-cooldown` again. The tiles and banner will now render in that color.

## Creating a Team Fox status
To add a dedicated Team Fox state to the panel:
1) In `config.lua`, add a new entry:
   - `["teamfox"] = { label = "Team Fox" }` under `Config.Types`.
2) In `ui/app.js`, add a matching color:
   - `teamfox: '#ff7b00',` (pick any hex you like) inside `statusColors`.
3) Restart/ensure the resource, then use `/prio` and select “Team Fox”.

## Files to know
- `config.lua` — QBCore export name, default cooldown minutes, status list.
- `client/main.lua` — UI open logic and cooldown countdown on the client.
- `server/main.lua` — status propagation and cooldown timer.
- `ui/app.js` & `ui/css/style.css` — NUI behavior and styling.


