# Leon Strakoš — DICE Portfolio v12

Based on the provided portfolio v12 archive, with its original HTML, CSS, JavaScript and website media, served by Express on `127.0.0.1:8005`.

## Start locally

```bash
npm install
npm start
```

Open http://127.0.0.1:8005.

## Clouding VM (Ubuntu/Debian)

```bash
cd ~
git clone https://github.com/leonstrakos/Dice.git leonstrakos
cd ~/leonstrakos
npm install --omit=dev
pm2 start ecosystem.config.cjs
pm2 save
curl -I http://127.0.0.1:8005
```

If `~/leonstrakos` already exists, inspect it first; don't overwrite it.

## Nginx

Use a separate site/server block for `leonstrakos.work www.leonstrakos.work` proxying to `http://127.0.0.1:8005`. Check existing enabled sites before editing Nginx; never overwrite the other domains. Validate with `sudo nginx -t` before reload. Once HTTP is working and DNS resolves, run Certbot for both names.

## Update

```bash
cd ~/leonstrakos
git pull --ff-only
npm install --omit=dev
pm2 restart leonstrakos
```

Note: the original v12 archive includes one extra unreferenced image (`ljingle-zapisi.jpg`) that is not needed for the currently rendered page. It is preserved in the separately provided deployment ZIP but not in this repository.
