# Claude Fable 5 Build Day Participant Guide

Welcome to the Claude Fable 5 Build Day! 👋 This guide collects schedule, rules, resources, judging info, and submission instructions — everything participants need for the event.

---

## 1️⃣ Your Goal – Hackathon Problem Statement

### Problem Statement
Fable 5 is the first Mythos-class model made safe for general use. Its capabilities exceed those of earlier models, especially for long-horizon, autonomous work: planning, building, and validating its own work for a day or more.

The challenge: build something new (a full working app from a standing start, or point Fable 5 at a major problem in your product). Brief the model well, set up verification loops, then interact minimally and let the model run.

High-level process:

- Start with a clear brief: problem, audience, done criteria.
- Kick it off: point the model at your repo, answer initial questions, set goals and rubric.
- Ship: deploy to a live URL and submit with your brief, rubric, and session log.

Suggested design patterns:

- Self-correction loops: use /goal in Claude Code for hillclimbing targets.
- Verifier sub-agents: use an independent agent to grade outputs against the rubric.
- Dynamic workflows: create JS orchestration scripts to manage long loops.
- Memory as the outer loop: file-based persistent memory helps the model learn from failures.

Scoring criteria:

- Impact — 35%
- Demo — 35%
- Autonomy — 15%
- Orchestration — 15%

---

## 2️⃣ Getting Ready – Location & Arrival

- Location: Shack15, Ferry Building, 1, Suite 201, San Francisco, CA 94111
- Doors open: 9:00 AM. Bring ID for check-in.
- Wi‑Fi: SSID: `Fable 5`  Password: `problemsolvers`

Parking: limited; public transit recommended (BART / Muni to Embarcadero).

---

## 3️⃣ Connect with the Community - Discord

- Join the Claude Discord server and introduce yourself in `#intros`.
- Key channels: `#general`, `#rules`, `#announcements`, `#intros`, `#team-search`, `#questions`, `#social`, `#credit-questions`.
- Team size limit: 4 members.

---

## 4️⃣ Share Your Builds - Media Guide

- Use the provided post templates for X (Twitter) and LinkedIn.
- Tag @claudeai, @claudedevs, and @cerebral_valley.
- Attach the "Fable 5 Build Day" graphic to posts.

---

## 5️⃣ Schedule Overview

- 9:00 AM — Doors Open & Breakfast
- 10:00 AM — Welcome & Kick-Off
- 10:30 AM — Hackathon Begins
- 1:00 PM — Lunch
- 5:00 PM — Submissions Due
- 5:30 PM — Evening Remarks
- 5:50 PM — EAP Customer Panel
- 6:15 PM — Finalists Announced
- 7:45 PM — Winners Announced
- 7:45–10:00 PM — Closing Celebration

---

## 6️⃣ Hackathon Rules

- Open source: submission repos must be public.
- Team size: maximum 4 members (solo allowed).
- Demo must highlight only features built during the hackathon.
- Bring prior projects optionally, but final submission must be extractable into a standalone repo containing all presented code.

Prohibited project types — STRICTLY NO:

- AI Mental Health Advisor
- Basic RAG Applications
- Streamlit Applications
- Image Analyzers
- “AI for Education” Chatbot
- AI Job Application Screener
- AI Nutrition Coach
- Personality Analyzers
- Medical advice bots
- Any project where a dashboard is the main feature
- Sports analyzers or coaches

---

## 7️⃣ Claude-Provided Resources

- $500 in credits (24hr expiry) provided day-of.
- Useful links:
  - A harness for every task: dynamic workflows in Claude Code
  - Designing loops with Fable

---

## 8️⃣ Submission Process

- Submit at: https://cerebralvalley.ai/e/claude-startups-build-day/hackathon/submit
- Deadline: 5:00 PM sharp.
- Required: public GitHub repo and a 1-minute demo video showcasing only the hackathon work.
- Make sure the demo link is accessible and all team members are listed.

Founder note: final submission must be a public repo containing any and all code you present. Judges will review repos internally.

---

## 9️⃣ Judging Process

- Round 1: asynchronous review from Anthropic team using your materials.
- Round 2: top 6 teams present live (3 minutes demo + 1–2 minutes Q&A).
- Round 2 format: begin with the provided team graphic and then demo code & product.

---

## 🔟 Prizes

- First Place: $100,000 API credits
- Second Place: $40,000 API credits
- Third Place: $10,000 API credits

---

## Media & Graphic

Attach the event graphic available from the organizers when posting to social platforms.

---

## Checklist Before Submission

- [ ] Public GitHub repository with presented code
- [ ] 1-minute demo video (shows only hackathon work)
- [ ] Team members listed on submission
- [ ] Rubric, brief, and session log (if using Fable 5) included in repo
- [ ] Live URL (if applicable) is accessible

---

If you'd like, I can also commit this file to a new branch, create a short README referencing it, and open a PR for you.
