# NOIZ — Guía de Deploy

## Stack

- **Next.js 16.2.4** (App Router, TypeScript)
- **Node.js 22** en Ubuntu 24.04
- **PM2** — process manager (`app name: noiz`)
- **Nginx 1.24** — reverse proxy con SSL
- **Let's Encrypt** — cert expira 2026-08-01

---

## Servidor VPS

| Campo      | Valor                        |
|------------|------------------------------|
| IP         | `2.24.67.248`                |
| Usuario    | `root`                       |
| Contraseña | `NoizNoiz2026?`              |
| Ruta app   | `/var/www/noiz`              |
| Puerto app | `3000` (interno, Nginx hace proxy) |

```bash
ssh root@2.24.67.248
# password: NoizNoiz2026?
```

---

## Dominios y DNS

| Registro | Nombre | Valor           | Para qué              |
|----------|--------|------------------|-----------------------|
| A        | @      | `2.24.67.248`    | noiz.com.mx → VPS     |
| A        | www    | `2.24.67.248`    | www.noiz.com.mx → VPS |
| A        | mail   | `65.99.225.24`   | correo → cPanel       |
| MX       | @      | `mail.noiz.com.mx` | recibir correos     |

**SSL:** Let's Encrypt en `/etc/letsencrypt/live/noiz.com.mx/`

---

## Variables de entorno

Archivo en el VPS: `/var/www/noiz/.env.local`

```env
RESEND_API_KEY=re_2PLev57M_3qcpmDF5yH6HKR8EJ54eCVkc
```

> El dominio `noiz.com.mx` está verificado en Resend. Los correos salen de `hola@noiz.com.mx` y llegan a `hola@noiz.com.mx`.

---

## Deploy completo (desde tu Mac)

```bash
cd /Users/bener/GitHub/noiz

# 1. Hacer cambios locales
# 2. Commit y push a GitHub
git add -A
git commit -m "descripción del cambio"
git push

# 3. Conectarse al VPS y deployear
sshpass -p 'NoizNoiz2026?' ssh -o StrictHostKeyChecking=no root@2.24.67.248 \
  "cd /var/www/noiz && git pull && npm run build && pm2 restart noiz && echo 'OK'"
```

Si no tienes `sshpass`:
```bash
brew install sshpass
```

---

## Deploy manual (desde el VPS)

```bash
ssh root@2.24.67.248
cd /var/www/noiz
git pull
npm run build
pm2 restart noiz
```

---

## PM2 — comandos útiles

```bash
pm2 status          # ver estado
pm2 logs noiz       # ver logs en tiempo real
pm2 restart noiz    # reiniciar app
pm2 stop noiz       # parar app
pm2 start noiz      # iniciar app
pm2 save            # guardar para que arranque al reboot
```

---

## Nginx

Config en: `/etc/nginx/sites-available/noiz`

```bash
# Editar config
nano /etc/nginx/sites-available/noiz

# Verificar que no hay errores
nginx -t

# Aplicar cambios
systemctl reload nginx
```

La config redirige:
- HTTP → HTTPS
- www.noiz.com.mx → noiz.com.mx
- noiz.com.mx → localhost:3000

---

## Renovar SSL (automático, pero manual si falla)

```bash
certbot renew --nginx
```

---

## Repositorio GitHub

- **Repo:** https://github.com/ElBeDev/noiz
- **Branch:** `main`

---

## Correo corporativo

- **Proveedor:** cPanel en `65.99.225.24`
- **Dirección:** `hola@noiz.com.mx`
- **IMAP:** `mail.noiz.com.mx` puerto 993 (SSL)
- **SMTP:** `mail.noiz.com.mx` puerto 465 (SSL)
