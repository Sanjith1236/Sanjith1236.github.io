/* Sanjith S — Cybersecurity Portfolio
   Vanilla JS. No dependencies. Everything degrades gracefully without JS. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active section highlighting (nav + case-study TOC) ---------- */
  function spy(linkSelector, attr) {
    var anchors = Array.prototype.slice.call(document.querySelectorAll(linkSelector))
      .filter(function (a) { return a.getAttribute('href') && a.getAttribute('href').charAt(0) === '#'; });
    if (!anchors.length || !('IntersectionObserver' in window)) return;
    var map = {};
    anchors.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          anchors.forEach(function (a) { a.removeAttribute('aria-current'); a.classList.remove('active'); });
          if (attr) map[en.target.id].setAttribute('aria-current', 'true');
          else map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) obs.observe(s); });
  }
  spy('.nav-links a', true);
  spy('.toc a', false);

  /* ---------- Copy email ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () { var o = btn.textContent; btn.textContent = 'copied'; setTimeout(function () { btn.textContent = o; }, 1500); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });

  /* ---------- Lightbox Modal for Evidence ---------- */
  var modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Image preview');
  modal.innerHTML = '<div class="lightbox-dialog"><button class="lightbox-close" type="button" aria-label="Close image preview">&times;</button><img src="" alt=""><div class="lightbox-caption"></div></div>';
  document.body.appendChild(modal);

  var modalImg = modal.querySelector('img');
  var modalCap = modal.querySelector('.lightbox-caption');
  var closeBtn = modal.querySelector('.lightbox-close');

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(function () { modalImg.src = ''; modalCap.textContent = ''; }, 200);
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  document.querySelectorAll('.evidence-card img, .evidence-img-wrap').forEach(function (el) {
    el.addEventListener('click', function () {
      var img = el.tagName === 'IMG' ? el : el.querySelector('img');
      if (!img) return;
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Screenshot evidence';
      var figcaption = img.closest('figure') ? img.closest('figure').querySelector('figcaption') : null;
      var title = figcaption ? (figcaption.querySelector('.evidence-title') || figcaption.querySelector('b')) : null;
      modalCap.textContent = title ? title.textContent : img.alt;
      modal.classList.add('active');
    });
  });

  /* ---------- Hero terminal ---------- */
  var body = document.getElementById('term-body');
  var form = document.getElementById('term-form');
  var input = document.getElementById('term-input');
  if (!body || !form || !input) return;

  function line(text, cls) {
    var d = document.createElement('div'); d.className = 'ln' + (cls ? ' ' + cls : ''); d.textContent = text;
    body.appendChild(d); body.scrollTop = body.scrollHeight; return d;
  }
  function linkLine(prefix, label, href) {
    var d = document.createElement('div'); d.className = 'ln';
    d.appendChild(document.createTextNode(prefix));
    var a = document.createElement('a'); a.href = href; a.textContent = label;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    d.appendChild(a); body.appendChild(d); body.scrollTop = body.scrollHeight;
  }
  function prompt(cmd) {
    var d = document.createElement('div'); d.className = 'ln';
    var p = document.createElement('span'); p.className = 'p'; p.textContent = 'sanjith@portfolio';
    var c = document.createElement('span'); c.className = 'dim'; c.textContent = ':';
    var pa = document.createElement('span'); pa.className = 'path'; pa.textContent = '~$ ';
    d.appendChild(p); d.appendChild(c); d.appendChild(pa); d.appendChild(document.createTextNode(cmd));
    body.appendChild(d); body.scrollTop = body.scrollHeight;
  }

  var commands = {
    help: function () {
      line('Available commands:', 'dim');
      ['whoami', 'projects', 'skills', 'certs', 'learning', 'contact', 'clear'].forEach(function (c) { line('  ' + c); });
    },
    whoami: function () {
      line('Sanjith S');
      line('SOC Analyst | Security Operations | Threat Detection');
      line('Target role: SOC Analyst / SOC L1', 'dim');
      line('Location: Kollam, Kerala, India', 'dim');
    },
    projects: function () {
      linkLine('[1] ', 'AI-Assisted-Cyber-Deception-Security-Monitoring-Threat-Intelligence-Platform', 'projects/honeypot.html');
      linkLine('[2] ', 'Intrusion Detection Using Snort 3 IDS', 'projects/snort-ids.html');
      linkLine('[3] ', 'Malware Analysis and Detection Using ClamAV', 'projects/clamav.html');
      linkLine('[4] ', 'Vulnerability Assessment and Penetration Testing', 'projects/vulnerability-assessment.html');
      linkLine('[5] ', 'CVE-2026-8206 Analysis and Demonstration', 'projects/cve-analysis.html');
    },
    skills: function () {
      line('network-security : Snort 3, custom rules, SSH/FTP security, traffic analysis');
      line('endpoint         : ClamAV, FreshClam, clamd, quarantine workflows');
      line('monitoring       : log analysis, alert triage, IOC mgmt, MITRE ATT&CK');
      line('vuln-assessment  : recon, enumeration, SQLi testing, CVE analysis');
      line('linux            : Bash, systemd, Hydra');
      line('cloud/deploy     : AWS EC2, Docker Compose, Cowrie, FastAPI (honeypot)');
    },
    certs: function () {
      line('CSA   - Certified SOC Analyst (EC-Council)');
      line('CICSA - Certified IT Infrastructure and Cyber SOC Analyst (Red Team Hacker Academy)');
      line('Diploma in Computer Hardware Engineering, Government Polytechnic College, 2022-2025');
    },
    learning: function () {
      line('TryHackMe Advent of Cyber 2025: 24 blue-team challenges in 30 days');
      line('Wazuh Threat Intelligence Integration workshop');
    },
    contact: function () {
      linkLine('email    : ', 'sanjiths.kollam@gmail.com', 'mailto:sanjiths.kollam@gmail.com');
      linkLine('github   : ', 'github.com/Sanjith1236', 'https://github.com/Sanjith1236');
      linkLine('linkedin : ', 'linkedin.com/in/sanjith-s-soc-', 'https://www.linkedin.com/in/sanjith-s-soc-/');
    },
    clear: function () { body.textContent = ''; }
  };

  function run(raw) {
    var cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    prompt(raw.trim());
    if (cmd === 'ls') cmd = 'projects';
    if (commands[cmd]) commands[cmd]();
    else line('command not found: ' + raw.trim() + '  (type "help")', 'warn');
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); run(input.value); input.value = ''; });
  document.querySelectorAll('[data-cmd]').forEach(function (b) {
    b.addEventListener('click', function () { run(b.getAttribute('data-cmd')); });
  });

  // Intro: type "whoami" then print output
  function intro() {
    var cmd = 'whoami';
    if (reduceMotion) { prompt(cmd); commands.whoami(); line(''); line('Type "help" for commands.', 'dim'); return; }
    var d = document.createElement('div'); d.className = 'ln'; body.appendChild(d);
    var p = document.createElement('span'); p.className = 'p'; p.textContent = 'sanjith@portfolio';
    var c = document.createElement('span'); c.className = 'dim'; c.textContent = ':';
    var pa = document.createElement('span'); pa.className = 'path'; pa.textContent = '~$ ';
    var t = document.createElement('span');
    d.appendChild(p); d.appendChild(c); d.appendChild(pa); d.appendChild(t);
    var i = 0;
    (function tick() {
      if (i <= cmd.length) { t.textContent = cmd.slice(0, i++); setTimeout(tick, 90); }
      else { setTimeout(function () { commands.whoami(); line(''); line('Type "help" for commands.', 'dim'); }, 250); }
    })();
  }
  intro();
})();
