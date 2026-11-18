# Turkey Bowl

Draft board, player cards, sportsbook and live box score for the Thanksgiving game.
Static page plus one Netlify Function; data is saved in Netlify Blobs. Free tier is plenty.

## Deploy (one time, about 10 minutes)

1. **GitHub:** sign in at github.com, click **New repository**, name it `turkey-bowl`, keep it Public or Private, and create it.
2. On the new repo page click **uploading an existing file**, drag in everything in this folder
   (`public`, `netlify`, `core.mjs`, `package.json`, `netlify.toml`, `README.md`), then **Commit changes**.
3. **Netlify:** sign in at app.netlify.com with your GitHub account → **Add new project** →
   **Import an existing project** → **GitHub** → pick `turkey-bowl` → **Deploy**. Leave the build settings as they are.
4. When it finishes, open the site URL, click **Set commish PIN** in the top right and pick a 4-digit PIN.
   Whoever does this first is the commissioner, so do it right away.
5. Optional: in Netlify **Project configuration → General → Change project name** to get a URL like `turkeybowl26.netlify.app`.

## Updating later

Edit or re-upload files in the GitHub repo. Netlify redeploys automatically in about a minute.
Saved data (players, draft, bets, stats) lives in Netlify Blobs, so redeploying doesn't wipe it.

## Commissioner tools (after signing in with the PIN)

- **Players:** set captains, edit positions, numbers, ratings, OVR overrides and NFL comps.
- **Draft:** enter the group-text draft pick by pick. One QB per team is enforced.
- **Sportsbook:** "Suggest lines from ratings", edit them, then **Post lines**. **Lock bets** when you're ready.
- **Scoreboard:** log plays by quarter, live or after the fact. **Final** settles every bet;
  switching back to **Live** lets you fix a stat and bets re-settle.

## Rules built in

- Everyone gets $100 in fake money; joining takes a name and a 4-digit PIN.
- Spreads, totals and props pay even money; moneyline and first TD scorer use the posted odds.
- No betting the under on your own props. Bets lock when the commish clicks Lock bets.
