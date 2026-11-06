# Portfolio Evidence & Remaining Manual Steps Checklist

## Integrated project evidence

### AI-Assisted-Cyber-Deception-Security-Monitoring-Threat-Intelligence-Platform (`projects/honeypot.html`)
- [x] Sentinel monitoring overview dashboard
- [x] Aggregate threat-intelligence report (individual source IP list blurred)
- [x] Attacker network classification and browser fingerprinting (source IPs and fingerprint identifiers blurred)
- [x] Service control center and state audit logging
- [x] Architecture illustration retained and labeled conceptual

### Snort 3 IDS (`projects/snort-ids.html`)
- [x] FTP brute-force detection alert
- [x] SSH brute-force detection alert
- [x] Architecture illustration retained

### ClamAV (`projects/clamav.html`)
- [ ] No screenshots currently available; repository and project description remain available
- [x] Architecture illustration retained

### VAPT (`projects/vulnerability-assessment.html`)
- [x] SQL injection evidence retained; target details and extracted database records blurred
- [x] Reflected XSS evidence retained; target URL and session value blurred
- [x] Browser session inspection evidence retained; target hostname and token-bearing developer-tools panel blurred
- [x] Session replay evidence retained; account identifier and browser storage panel blurred
- [x] Assessment methodology illustration retained

### CVE-2026-8206 (`projects/cve-analysis.html`)
- [x] REST API proof-of-concept screenshot retained; local lab IP blurred
- [x] Mailpit reset-email screenshot retained; local lab IP and reset key blurred
- [x] Password-reset interface screenshot retained; local lab IP blurred
- [x] NVD, CVE.org, Wordfence and WordPress references retained
- [x] Architecture illustration retained

## Remaining manual confirmations (not deployment blockers unless relevant)
1. Confirm the authorized scope for every VAPT target before describing the work as an authorized engagement.
2. Confirm where Ollama / Qwen2.5 3B actually runs before publishing a detailed deployment diagram or host claim.
3. Add CSA and CICSA verification links only if official URLs are available.
4. Add the public TryHackMe profile URL if desired.
5. Add Wazuh workshop attendance proof if available.
6. Add ClamAV screenshots if you later capture genuine evidence.
7. Add the honeypot repository URL only after reviewing it for secrets, sensitive logs and deployment details.
8. Confirm final EC2 host hardening before changing the current “Hardening Pending” status.
9. Add a downloadable resume only after placing the final PDF in the site assets folder.
