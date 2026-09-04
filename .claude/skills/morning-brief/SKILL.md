---
name: morning-brief
description: Neyton's personal morning brief — his chief-of-staff routine covering calendar, inbox, priorities, and one key signal for the day. Trigger ONLY when Neyton explicitly asks for it, using phrases like "run my morning brief", "brief me", "what's on my plate", "morning brief", or a clear variant. Do not trigger on a generic question about his calendar or inbox alone — only on an explicit request for the brief itself.
---

# Neyton's Morning Brief

This skill has no memory of any prior conversation. Everything it needs is
below or in `CLAUDE.md` at the repo root. Read `CLAUDE.md` first, every run
— it carries Neyton's identity, current projects, ranked priorities, and
tone, and it may have changed since this skill was last edited.

## Standing rules (never break these)

- **You draft, he approves.** Never send an email, never post, never
  delete, never take any irreversible action. Email replies go to Gmail
  Drafts only.
- **Only pull from connected apps.** Before using a source, confirm it's
  actually connected in this session (the tool is present / callable).
  Do not invent data from an app that isn't connected.
- **Never fill a gap with a plausible guess.** If a source is empty,
  unreachable, or not connected, say so plainly in the brief and mark it
  `offline` on the dashboard. Do not fabricate events, emails, numbers, or
  "one thing to know" — every claim in the brief must trace back to a
  real read this run.
- **Privacy discretion on sensitive personal threads.** If an inbox item
  touches therapy/counselling, marital, health, or other deeply personal
  matters: it's fine to note that a reply is needed and draft a
  logistics-only reply (confirming/scheduling, not making decisions on
  Neyton's behalf or restating the emotional content). Do NOT quote or
  summarize the sensitive substance into `brief.txt`, the Notion page, or
  `jarvis_data.js` — those are saved/committed artifacts. Keep the written
  brief to something like "reply needed — Samuel, scheduling" rather than
  restating what was discussed.
- **Today means today, computed at run time**, in the timezone of
  Neyton's primary Google Calendar (`neyton@gmail.com` — check
  `list_calendars` if unsure; it has been `Asia/Singapore`). Never reuse a
  date from a previous run.

## Sources — exactly what to pull, and from where

Check each source is actually connected/callable before using it. If not,
skip it and mark it offline — don't ask the user to wait, don't retry
endlessly.

1. **Calendar — Google Calendar connector.**
   List events on the primary calendar (`neyton@gmail.com`) for today
   (00:00–23:59 in the calendar's timezone). For each event note: time,
   title, and whether it needs prep (a booking with a time cutoff, travel
   time, something to bring, an unanswered RSVP). Check for time overlaps
   between events (conflicts) and unusually large empty stretches during
   normal waking hours if that seems worth flagging — don't force a
   "conflict" or "gap" callout if there genuinely isn't one.

2. **Inbox — Gmail connector.**
   Search `newer_than:1d in:inbox` (first page, ~30 threads is enough —
   don't try to paginate through the entire estimate; if the result count
   estimate is far larger than what you fetched, say "first page" rather
   than implying full coverage).
   For any thread that looks like an active, unanswered personal/work
   conversation (not a newsletter, receipt, or broadcast), open it with
   `get_thread` to check whether the *most recent* message is from someone
   else and still unanswered — thread search previews only show the
   oldest messages, so this step is required to catch real needs-a-reply
   items.
   Sort every thread into exactly one bucket:
   - **Needs-a-reply**: an unanswered message from a real person/thread
     directed at Neyton that calls for a written response. For each one,
     draft a short reply in his tone (see CLAUDE.md — warm, direct, no
     corporate filler) via Gmail's draft tool (reply-to the actual last
     message id), and leave it in Drafts. Never send. Follow the privacy
     rule above for sensitive threads.
   - **FYI**: informational but no reply needed (confirmations, alerts,
     acceptances, invoices, something worth a glance or an errand).
   - **Ignore**: newsletters, marketing, routine automated receipts with
     no action.
   Don't force precision you don't have — if you didn't fully classify
   every one of ~200 estimated matches, say "reviewed the first N" rather
   than implying total inbox coverage.

3. **Priorities + tasks.**
   Preferred source: Notion (if connected — check before using). Fallback,
   always available: the "My priorities, ranked" and "What I'm working on
   this month" sections of `CLAUDE.md`. Combine the standing priorities
   with what actually surfaced from Calendar/Inbox this run to pick the 3
   things that matter most **today** specifically, ranked, one line of
   "why" each. If a standing priority (e.g. house, job) has no real signal
   today, it's fine to leave it out rather than inventing a task for it.

4. **One thing to know.**
   A single genuine signal from what you actually found this run — a
   deadline, a real time-cutoff, a number that moved, something dropped.
   Not a summary restatement of the whole brief. If nothing stands out,
   say that plainly instead of manufacturing one.

5. **Voice — Fish Audio.**
   Not currently a connected app in this environment (no MCP connector
   for it exists in the directory as of this writing). Do not attempt a
   substitute (no placeholder tone, no other TTS). Mark it offline and say
   in the brief that it wasn't read aloud.

6. **Notion (save destination).**
   Not currently connected. If it becomes connected in a future run, save
   the brief there too (short page, same content as `brief.txt`). Until
   then, mark it offline and skip — don't create a substitute doc
   elsewhere without being asked.

## Output — exact format

Write the spoken brief as **6 to 8 short lines**, second person, in
Neyton's tone (warm, direct, no filler), covering in order: calendar
headline + any prep/conflict flag, inbox headline (numbers + the
needs-a-reply item named at a logistics level only), 1-2 FYI highlights
worth knowing, the top 3 priorities for today (condensed), the one thing
to know, and a plain note of anything offline (Notion/Fish Audio/etc. —
only mention sources actually skipped this run). End with exactly this
question as the final line:

> What should I handle first?

### Save the brief

- Write the lines verbatim to `brief.txt` at the repo root (overwrite).
- Save to the Notion page too, if Notion is connected this run.

### Update the dashboard

Rewrite `jarvis_data.js`'s `connectors` array to list exactly the sources
this run actually touched (Google Calendar, Gmail, Priorities Note,
Notion, Fish Audio — add/remove entries if the actual source set changes
in a future run), each marked `online: true/false` based on whether the
call genuinely succeeded this run — never based on what's "supposed to"
work.

Rewrite `activityLog` with one short line per source read this run (what
was actually done — e.g. "MAIL :: scanned 30 threads, 1 needs reply,
drafted"), oldest-run entries can be dropped.

Update the real-number entries in `bigFigures` that come from this run
(events today, emails reviewed, needs-reply count, drafts created). Leave
unrelated decorative dashboard content (weather, world clock, etc.) alone
— this skill only owns the fields tied to brief sources.

### Speak it

If Fish Audio (or any connected TTS) is available this run, read the
brief aloud through it. If not, don't fake it — say so in the brief and
in your reply to Neyton.

## After running

Tell Neyton, in chat: a one-line summary of what ran, what's offline and
why, and where the outputs landed (brief.txt, dashboard, Notion, Drafts
created). Don't repeat the whole brief text back if it's already visible
in `brief.txt`/dashboard — just confirm it ran and flag anything that
needs his attention (like an offline source blocking part of the routine).
