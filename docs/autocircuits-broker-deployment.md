# AutoCircuits Broker Deployment

The broker is a small Python HTTP server that generates AutoCircuits PDFs, parses the answers, renders page 1 to PNG, and returns both files as base64 JSON.

## Docker

From the repo root:

```bash
docker compose -f docker-compose.autocircuits.yml up -d --build
docker compose -f docker-compose.autocircuits.yml logs -f
```

Health check:

```bash
curl http://127.0.0.1:8787/health
```

If the Linux host is on Tailscale, use the host's Tailscale IP or MagicDNS name as the app Broker URL:

```text
http://<tailscale-ip-or-name>:8787
```

## systemd With Docker Compose

Copy or symlink the repo to `/opt/digital-break-app`, then install the unit:

```bash
sudo cp deploy/autocircuits-broker-docker.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now autocircuits-broker-docker.service
sudo journalctl -u autocircuits-broker-docker.service -f
```

## systemd With Direct Python

Create a service user and app venv:

```bash
sudo useradd --system --home /opt/digital-break-app --shell /usr/sbin/nologin digitalbreak
sudo chown -R digitalbreak:digitalbreak /opt/digital-break-app
sudo -u digitalbreak python3 -m venv /opt/digital-break-app/.venv
sudo -u digitalbreak /opt/digital-break-app/.venv/bin/pip install -r /opt/digital-break-app/requirements-autocircuits-broker.txt
```

Install and start:

```bash
sudo cp deploy/autocircuits-broker.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now autocircuits-broker.service
sudo journalctl -u autocircuits-broker.service -f
```

## Firewall

If using Tailscale, prefer allowing the port only on the Tailscale interface. For UFW:

```bash
sudo ufw allow in on tailscale0 to any port 8787 proto tcp
```

The broker logs every request with client IP, host, user agent, and an iPhone/iOS hint, so `journalctl` or `docker compose logs -f` will show when the phone connects.
