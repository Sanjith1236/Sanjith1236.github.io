# Sanjith S — Cybersecurity Portfolio

Static, terminal-inspired cybersecurity portfolio built with **HTML5, CSS3, and vanilla JavaScript**. No dependencies, build steps, framework overhead, or paid APIs. Fully responsive and ready for deployment on GitHub Pages.

## Role Title
**SOC Analyst | Security Operations | Threat Detection**

## Focus Areas
Network Intrusion Detection (Snort 3), Endpoint Protection (ClamAV), Threat Deception & Cloud Monitoring (AWS EC2), Vulnerability Assessment (OWASP Top 10), and CVE Exploit Analysis.

---

## Directory Structure

```
sanjith-cybersecurity-portfolio/
├── index.html                     Home, About, Featured Projects, Technical Skills, Experience, Credentials, Learning, Contact
├── css/
│   └── style.css                  Terminal dark-theme styles, responsive layouts, evidence cards, and lightbox modal
├── js/
│   └── script.js                  Interactive hero terminal, mobile nav, copy-email helper, scroll spy, and screenshot lightbox
├── projects/
│   ├── honeypot.html              Case Study 01: AI-Assisted-Cyber-Deception-Security-Monitoring-Threat-Intelligence-Platform (AWS EC2, Sentinel, Decoys)
│   ├── snort-ids.html             Case Study 02: Intrusion Detection Using Snort 3 IDS (Custom Rules, Hydra)
│   ├── clamav.html                Case Study 03: Malware Analysis and Detection Using ClamAV (Linux, systemd)
│   ├── vulnerability-assessment.html Case Study 04: Web Vulnerability Assessment & Penetration Testing (SQLi, XSS, Hijacking)
│   └── cve-analysis.html          Case Study 05: CVE-2026-8206 Analysis & Demonstration (Kirki REST API, Mailpit)
├── assets/
│   ├── screenshots/               Genuine project evidence screenshots
│   │   ├── honeypot-sentinel-overview.png
│   │   ├── honeypot-threat-intelligence-reports.png
│   │   ├── honeypot-attacker-fingerprinting.png
│   │   ├── honeypot-service-control.png
│   │   ├── snort-ftp-brute-force-detection.png
│   │   ├── snort-ssh-brute-force-detection.png
│   │   ├── vapt-sql-injection-dump.png
│   │   ├── vapt-reflected-xss.png
│   │   ├── vapt-session-cookie-inspection.png
│   │   ├── vapt-session-hijacking-poc.png
│   │   ├── cve-2026-8206-rest-api-poc.png
│   │   ├── cve-2026-8206-mailpit-reset-token.png
│   │   └── cve-2026-8206-account-takeover.png
│   └── images/                    Additional media assets
├── EVIDENCE-CHECKLIST.md          Checklist of integrated evidence and remaining manual steps
├── .nojekyll                      Prevents GitHub Pages Jekyll processing
└── README.md
```

---

## Local Preview

You can preview the website locally by opening `index.html` in any modern web browser, or by running a local web server:

```bash
# Using Python
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g. `portfolio` or `Sanjith1236.github.io`).
2. Push the contents of the `sanjith-cybersecurity-portfolio` folder to your main branch.
3. In your GitHub repository, navigate to **Settings → Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your portfolio will be live in ~1-2 minutes!


## Public evidence handling

Screenshots containing target identifiers, account details, session material, reset tokens, source IPs or browser fingerprint identifiers have been blurred in the public portfolio copy. Keep original unredacted evidence private and do not commit it to a public repository.
