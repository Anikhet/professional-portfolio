# Open Engineering Problems in AI Agents and Agent Infrastructure (Nov 2026): Candidates for a 4-6 Week Individual Project

Method note: this is based on about 16 web searches and fetches. arxiv.org was **not reachable** from this research session (DNS blocked), so every arXiv paper below is cited from search-result snippets and abstracts only, not from the full text. Several arXiv IDs are in the 26xx range (2026 submissions). One snippet flagged a submission date that looked inconsistent with its ID (CompAct-Bench). Check paper details before citing them publicly. Many sources are vendor blogs, and that is marked where it matters.

Crowdedness scale used below: **Low** = few or no open tools and mostly blog-level discussion; **Medium** = some tools or papers but clear unfilled sub-gaps; **High** = many tools or benchmarks, so an individual needs a sharp niche.

---

## 1. Side-effect-safe replay and retry: idempotency, outbox and "world state" sandboxing (beyond LLM-call record/replay)

### Takeaway
Generic record/replay of LLM calls is crowded, but **making tool side effects safe under replay, retry and checkpoint-resume** is still mostly practitioner patterns and blog posts. Real framework issue threads show duplicate emails and DB writes on resume. A small library-plus-benchmark that is SDK-agnostic (Vercel AI SDK / OpenAI Agents SDK / LangGraph) has room. **Crowdedness: Medium-Low** for the effect-layer specifically.

### Cited Findings
- Re-running a tool-call log re-sends emails and re-fires webhooks unless every external call goes through a gateway that recognizes replays. Database rollback needs explicitly coded compensating transactions, a transactional outbox, or event-sourced replay, not a simple undo. — [Digital Applied, Agent Rollback and Checkpoint Patterns (2026)](https://www.digitalapplied.com/blog/agent-rollback-checkpoint-patterns-2026-engineering-reference)
- A Microsoft Agent Framework GitHub issue (#3938, "Workaround for tool call side-effect replay on checkpoint-based retry after executor failure") reports that resuming from a checkpoint re-ran a whole agent turn, causing a duplicate email and a duplicate DB write. (The search snippet confirms this; a direct fetch later returned 404, so the issue may have been moved or deleted.) — [microsoft/agent-framework #3938](https://github.com/microsoft/agent-framework/issues/3938)
- Practitioner recommendation: derive an idempotency key per side-effecting tool call from the session and tool-call IDs, and store it before the effect fires. — [Edge of Context, Long-Running AI Agent Runtime in 2026](https://slavadubrov.github.io/blog/2026/05/26/ai-agent-runtime/)
- Event-sourced agent runtimes log the intent before and the result after each side effect. — [Zylos Research, Replayable Agent Runtimes (Apr 2026)](https://zylos.ai/research/2026-04-24-replayable-agent-runtimes-event-sourced-execution/)
- A post titled "Your AI agent re-sends the email on retry: an outbox for side effects" shows practitioners hitting the problem directly. — [DEV Community](https://dev.to/bzdvdn/your-ai-agent-re-sends-the-email-on-retry-an-outbox-for-side-effects-13id)
- One author argues the sandbox should keep the agent's interface intact while side effects land in disposable copies outside it ("programmable sandbox"). — [johnsonlee.io (Oct 29 2026)](https://johnsonlee.io/2026/10/29/what-agent-workflow-needs-is-a-programmable-sandbox.en/)
- Another recommends routing emails, payments, tickets and DB writes to deterministic mocks with fixed responses during production-replay testing. — [DEV Community, Production Replay Testing](https://dev.to/imversion_tech/production-replay-testing-validate-ai-agent-changes-without-risks-2gm8)
- Voice-agent testing vendor Hamming describes a two-tier approach: mocks for fast CI, plus a sandbox with fixture data to confirm the right record was created. — [Hamming](https://hamming.ai/resources/voice-agent-sandbox-testing-tool-calls-side-effects)
- Prior art for stateful "digital twins" of SaaS APIs:
  - Pome (open source; local stateful twins of GitHub, Slack, Stripe, Gmail and Linear; records every request and state change on a tape; claims daily fidelity checks against the real APIs) — [pome-sh/digital-twins](https://github.com/pome-sh/digital-twins)
  - Ancha (hosted; 35+ tool twins; rebuilds production traces into test suites) — [ancha.io](https://ancha.io/)
  - Mock Anything (builds a stateful twin from an OpenAPI spec) — [mockanything](https://github.com/shreyassaw5394/mockanything)
  - StrongDM's internal "Digital Twin Universe" — [StrongDM factory](https://factory.strongdm.ai/techniques/dtu)
  - Salesforce has a business-ops digital twin for agent testing — [TechRadar](https://www.techradar.com/pro/salesforce-reveals-digital-twin-for-business-ops-so-your-business-can-test-ai-agents-before-deployment)
- Browser state: Browserbase offers Contexts (persisted Chromium user data reused across sessions) and session replay/recording for debugging. Searches found **no fork or snapshot-restore of live browser state** in Browserbase or AWS Bedrock AgentCore. — [Browserbase Session Replay](https://browserbase.com/blog/session-replay); [Browserbase automated tests docs](https://docs.browserbase.com/use-cases/building-automated-tests); [AWS AgentCore session replay](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/session-replay-how-to-use.html)

### Inferences
- What existing record/replay and eval tools mostly leave out: (a) **exactly-once semantics for tool side effects across retries and resumes**, (b) **assertions on final world state** ("exactly one email to X, one row in table Y") rather than on the transcript, and (c) **fork and rewind of browser state** mid-trajectory.
- Digital-twin SaaS mocks now have several entrants (Pome, Ancha, Drizz, Mock Anything), so building another twin farm is crowded. The gap is the **effect-ledger / idempotency middleware layer** and a **"duplicate side-effect" chaos benchmark**.
- Credible 4-6 week contribution: `effect-ledger`, a TS + Python middleware that wraps tool definitions for the Vercel AI SDK, OpenAI Agents SDK and LangGraph. It would assign deterministic idempotency keys, write an outbox, and switch between real, twin and dry-run modes. Pair it with a chaos test suite that kills the process mid-turn and counts duplicate effects for each framework's built-in checkpointing. Publish a table such as "framework X duplicates N% of side effects on resume." The comparison write-up would likely draw more attention than the library.
- Smaller variant: a Postgres "savepoint per agent step" harness (transaction or branch per step, using something like Neon or a local Postgres template DB) that lets you rewind DB state together with the conversation.

### Gaps
- Could not verify the current status of microsoft/agent-framework #3938 (404 on fetch).
- Did not check LangGraph or OpenAI Agents SDK issue trackers for equivalent duplicate-side-effect reports. Worth a quick `gh search issues` before committing.
- Did not check Temporal's or other durable-execution vendors' agent-specific offerings, which are likely the strongest adjacent prior art.

---

## 2. Statistical regression testing for agents across model and version upgrades (pass^k, CIs, paired tests)

### Takeaway
The statistics are well understood: pass^k, Wilson CIs, paired McNemar or bootstrap tests, and resampling by task. In practice, the eval frameworks people use day to day rarely make these the default, and model-upgrade "is it really better?" decisions are still made on noisy single runs. **Crowdedness: Medium.** Academic frameworks and at least one small OSS tool exist, so the opening is a well-packaged integration plus a public empirical study.

### Cited Findings
- τ-bench defines pass^k as the probability that all k i.i.d. trials of a task succeed, averaged over tasks. — [τ-bench, arXiv 2406.12045](https://arxiv.org/pdf/2406.12045)
- LaunchDarkly's write-up cites τ-bench: GPT-4o with function calling fell from 61.2% (k=1) to under 25% (k=8) on the retail domain. It also recommends row-level diffing on upgrades: list the rows that were stable-correct in the baseline and are not anymore, and keep that list even if headline metrics improve. — [LaunchDarkly, Measuring agent consistency with pass^k](https://launchdarkly.com/blog/measuring-agent-consistency-with-passk)
- Vendor guidance distinguishes flaky tasks (pass/fail on an unchanged scenario) from regressions (consistently passed before, fails after). — [TestMu, pass@k vs pass^k](https://www.testmuai.com/blog/pass-at-k-vs-pass-hat-k/)
- With n=100 binary trials, the 95% Wilson half-width is about 7-9.5 points for success rates between 0.3 and 0.8, so differences under about 8-10 points should be read cautiously. Repeated attempts on the same task are not independent, so CIs should be computed over tasks. Paired bootstrap over tasks (10k resamples) and McNemar's exact test are in use. — Synthesized in search results from [A Hierarchical Statistical Framework for Evaluating Agent Reliability, arXiv 2611.19614](https://arxiv.org/html/2611.19614) and [General Agent Evaluation, arXiv 2602.22953](https://arxiv.org/pdf/2602.22953) (snippet-level; full text not fetched)
- Arize warns that benchmark releases revise tasks and grading, so scores from different releases must not be compared. Pin benchmark versions and the settings that affect scores, and evaluate at the temperature you ship. — [Arize, What is tau-bench?](https://arize.com/?p=33410)
- Existing OSS: `agent-eval` runs version A and B repeatedly and reports a p-value, effect size and bootstrap 95% CI on the delta (small community project). — [RudrenduPaul/agent-eval](https://github.com/RudrenduPaul/agent-eval)
- A proposed "Evaluation Context Protocol (ECP)" aims to be a portable contract for agent evaluation, a sign that eval portability is also unsettled. — [arXiv 2608.19263](https://arxiv.org/pdf/2608.19263)

### Inferences
- The gap is less about new statistics and more about **defaults and ergonomics**: a drop-in "significance gate" for promptfoo, Inspect or Braintrust outputs (or a standalone CLI). It would compute pass^k with CIs, run paired tests between baseline and candidate, do sequential testing so you stop running trials once the result is decided (saving money), and produce a row-level "newly broken" list.
- A more notable output is an **empirical study**: take 3-4 public agent tasks (τ-bench-style or your own), run them across successive model versions from 2-3 providers with k≥10, and publish how often single-run evals would have reached the wrong upgrade decision. That makes a citable blog post plus a dataset.
- **Sequential / adaptive trial allocation** (spend trials on tasks whose outcome is uncertain) appeared in none of the sources found. That is a possible differentiator.

### Gaps
- Could not read arXiv 2611.19614 in full. Its exact contributions and any released tooling are unknown.
- Did not verify whether promptfoo, DeepEval, Inspect or Braintrust have since added built-in pass^k or paired-significance reporting. Check their docs and changelogs before claiming the gap.

---

## 3. Browser and computer-use agent reliability on the live web (drift, reproducibility)

### Takeaway
Live-web benchmarks exist (Online-Mind2Web, ClawBench, BrowserBench), but scores are self-reported with inconsistent judges, and **no rigorous study of score drift over time on live sites** turned up. A longitudinal drift and reproducibility study is a credible individual project. **Crowdedness: High** for benchmarks, **Low** for drift and reproducibility measurement.

### Cited Findings
- Online-Mind2Web: 300 tasks across 136 live websites. Leaderboard scores are self-reported with differing judges (e.g., OpenAI used a different screenshot-based judge than Browser Use). The original study's best agent scored 61.3%, with most near 30%, while a later leaderboard shows Browser Use Cloud at 97.0%, a gap probably due to different setups and judges. — [Steel.dev Online-Mind2Web leaderboard](https://leaderboard.steel.dev/leaderboards/online-mind2web/); [serp.fast field guide](https://serp.fast/guides/ai-web-agent-benchmarks)
- WebArena uses self-hosted apps, so pages don't drift between runs: reproducible but less representative. — [benchmarkingagents.com/webarena](https://benchmarkingagents.com/webarena/)
- BrowserBench (from the Wuying-Browser-Agent paper): 350 bilingual real-web tasks, built because existing benchmarks are too short to expose long-horizon failures. — [arXiv 2608.17319](https://arxiv.org/abs/2608.17319)
- ClawBench: 130 tasks on 63 live platforms. It scores by intercepting the agent's final HTTP request and checking it with an LLM judge. — [claw-bench.com](https://claw-bench.com/)
- A 2026 review: long multi-step tasks on live sites still fail often due to compounding errors, and reliability is much higher on narrow sandboxed benchmarks. — [TestMu, State of AI Browser Agents 2026](https://www.testmuai.com/blog/state-of-ai-browser-agents-2026/)
- Vendor leaderboards (browser-use, fastbrowse) are self-published. — [browser-use benchmarks](https://browser-use.com/benchmarks/agents); [fastbrowse benchmarks](https://www.fastbrowse.ai/benchmarks/)

### Inferences
- Individual-scale contribution: **"Web Drift Watch"**, a scheduled job (e.g., daily for 4 weeks) that re-runs a fixed 30-50 task subset of Online-Mind2Web or your own tasks with 2-3 agent stacks (Browser Use, Stagehand, a computer-use model). Log site DOM and visual changes along with pass/fail, and report (a) how much score variance comes from the site versus the agent, and (b) judge disagreement (rerun the same trajectories through 2-3 judges). Both are under-measured according to the sources above.
- An alternative with tighter scope: **judge-agreement audit**. Take public trajectories and measure how often different LLM judges disagree on success, since the leaderboard numbers depend on the judge.
- Cost: live-web runs plus model calls for several stacks over weeks is the main budget risk.

### Gaps
- Found no dedicated drift study. A narrower search on arXiv or OpenReview might still turn one up.
- Did not verify the dates or model names on vendor leaderboards (one search summary flagged unverifiable model names).

---

## 4. Real-time voice agent latency, turn-taking and interruption handling

### Takeaway
Latency benchmarking of hosted voice platforms now has an open, independent harness (OpenBenchmarks), and academic full-duplex benchmarks exist. The open gap is **turn-taking quality** (false barge-ins, cut-offs, end-of-turn accuracy) as an open, reproducible, framework-level benchmark for pipeline stacks like Pipecat and LiveKit. **Crowdedness: Medium.**

### Cited Findings
- OpenBenchmarks' voice-agent latency benchmark measures time-to-first-audio-byte from real PSTN call recordings (not platform timestamps), using the same prompt, scripted caller and carrier for Telnyx, Retell, Vapi, ElevenLabs and Bland. The repo includes the caller harness, an offline analyzer and per-turn recordings. — [OB-Voice-Latency](https://github.com/openbenchmarks-labs/OB-Voice-Latency); [voice-agent-latency](https://github.com/openbenchmarks-labs/voice-agent-latency)
- Reported results (leaderboard dated about Aug 1 2026): Telnyx lowest median (1,296 ms), ElevenLabs tightest tail (p95 ≈ 1.24× median), Bland highest p95 (2,248 ms), and Bland, Retell and Vapi all above 2 s at p95. The repo itself notes that **matching endpointing settings does not mean matching turn-taking**. — [OB-Voice-Latency](https://github.com/openbenchmarks-labs/OB-Voice-Latency); comparison also in [Telnyx (vendor)](https://telnyx.com/resources/voice-ai-agents-compared-latency)
- Daily/Pipecat published an STT benchmark for voice agents and an LLM benchmark (aiewf-eval) that covers latency, tool calling and instruction following over multi-turn conversations. — [Daily STT benchmark](https://www.daily.co/blog/benchmarking-stt-for-voice-agents/); [Daily LLM benchmark](https://www.daily.co/blog/benchmarking-llms-for-voice-agent-use-cases/)
- Full-Duplex-Bench-v3 measures turn-taking, interruptions, filler rate, latency and tool use for full-duplex voice models under real disfluency. — [arXiv 2604.04847](https://arxiv.org/pdf/2604.04847)
- "Heartbeat Thinking" proposes speculative reasoning and tool execution while the user is still speaking. — [arXiv 2610.26233](https://arxiv.org/pdf/2610.26233)
- A 2026 survey covers real-time voice-agent evaluation from component quality to grounded outcomes. A separate "Inquesto Score" proposes a reliability protocol. — [arXiv 2609.30798](https://arxiv.org/pdf/2609.30798); [arXiv 2609.30514](https://arxiv.org/pdf/2609.30514)

### Inferences
- Credible contribution: an **open turn-taking test suite for cascaded pipelines** (Pipecat / LiveKit Agents / OpenAI Realtime). It would be a library of scripted caller audio with mid-sentence pauses, "um"s, backchannels ("uh-huh") and genuine interruptions, labeled with ground truth for "should the agent take the turn here?" Report false-barge-in rate, premature-cutoff rate, and the latency vs. accuracy curve per VAD / semantic end-of-turn model. This fills the gap the OpenBenchmarks repo names itself.
- Alternative: implement and measure **speculative tool execution while listening** (Heartbeat-Thinking-style) in Pipecat and publish latency savings against wasted-call cost.

### Gaps
- Did not check whether Pipecat or LiveKit already ship a turn-detection eval set. LiveKit's turn-detector model and Pipecat's smart-turn may have their own evals, so verify this before claiming the gap.

---

## 5. On-device / in-browser inference for agents (WebGPU, small models, tool calling)

### Takeaway
In-browser runtimes (WebLLM, Transformers.js, wllama) are mature enough to run 1-4B models. Searches found **no benchmark of small models doing tool calling or agent loops in the browser**, and open in-browser perf benchmarking is just starting (single-author efforts). **Crowdedness: Low** for agent-specific browser evaluation.

### Cited Findings
- Transformers.js issue #1750 (Aug 2026, open): on one device, WASM beat WebGPU by about 9.6× on embedding time (about 3.5× on init) for all-MiniLM-L6-v2 (~22M params). The hypothesis is that WebGPU's fixed per-call overhead doesn't amortize at small sizes. The author is building "WebAI Bench," a client-side benchmark across WebLLM, Transformers.js and wllama (6 cells; only the WebLLM path validated end to end; N=3 median, 1 warmup). There is no backend or aggregation yet, and no maintainer has replied. — [huggingface/transformers.js #1750](https://github.com/huggingface/transformers.js/issues/1750)
- A May 2026 comparison names WebLLM and Transformers.js as the leading runtimes. It reports roughly 15-40 tok/s on consumer GPUs for Phi-4-mini Q4 (~2.3 GB) and Gemma 3n E4B (~1.5 GB) and says server models are still better for high-quality reasoning (vendor blog). — [CallSphere](https://callsphere.ai/blog/llm-comparison-browser-side-llm-webgpu-self-hosted-privacy-may-2026)
- Local (not browser) tool-calling tests of 27-30B models report well-formed call rates of about 91-97%, but those need 16 GB+ VRAM. — [PromptQuorum](https://www.promptquorum.com/power-local-llm/best-local-models-tool-calling-2026)
- A March 2026 post describes a WebGPU small-model tool-calling loop with no measured results. — [martinuke0](https://martinuke0.github.io/posts/2026-03-16-beyond-the-chatbox-implementing-local-agentic-workflows-with-small-language-models-and-webgpu/)
- An unverified claim that Transformers.js v4 runs 20B models at 60 tok/s has no methodology. — [evey.cc](https://evey.cc/blog/browser-ai-2026)

### Inferences
- Credible contribution: **"BrowserToolBench"**, a static web page anyone can open that runs a fixed tool-calling suite (BFCL-style single and parallel calls, plus a few multi-step tasks) on 3-5 small models across WebLLM, Transformers.js and wllama. It would measure call validity, task success, TTFT, tok/s and memory, and optionally crowd-source device results. This combines the missing agent-quality axis with the perf axis that #1750 is starting on. A strong demo for a TS engineer.
- Secondary angle: **hybrid routing**, deciding locally vs. in the cloud per step (a small local model for routing and simple tools, escalating to the cloud), with measured cost and latency savings.

### Gaps
- Did not search for WebLLM's own function-calling evals or BFCL entries for sub-4B models; one may exist.

---

## 6. MCP and tool-layer security: tool poisoning, indirect prompt injection, delegated authorization

### Takeaway
Tool poisoning is now well studied academically (MCPTox at AAAI 2026, several 2026 follow-ups). Benchmarking attack success is **crowded**. Less crowded: **practical defenses that developers can drop into an SDK and measure**, and **agent identity and delegated authorization across multi-hop MCP chains**, which the spec reportedly does not fully address. **Crowdedness: High** (attack benchmarks), **Medium** (developer-facing defenses and authz).

### Cited Findings
- MCPTox (AAAI 2026) tests agents against malicious instructions embedded in tool metadata at registration. Across 20 LLM agents, o1-mini reached a 72.8% attack success rate. — [MCPTox arXiv 2508.14925](https://arxiv.org/pdf/2508.14925); [AAAI proceedings](https://ojs.aaai.org/index.php/AAAI/article/view/40895)
- **Conflict:** a CSA research note reports Claude 3.7 Sonnet complied with poisoned descriptions in about 34% of cases (36.5% average ASR across models), while the MCPTox abstract says Claude-3.7-Sonnet had the highest *refusal* rate at under 3%. These are not necessarily contradictory (refusal ≠ non-compliance), but don't quote either without reading the paper. — [CSA research note (Jul 2026)](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-tool-poisoning-auto-execution-20260701/); [AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/40895)
- 2026 follow-ups found:
  - a cross-framework measurement study of MCP tool poisoning — [arXiv 2611.03555](https://arxiv.org/pdf/2611.03555)
  - MCP Pitfall Lab (developer pitfalls under multi-vector attacks) — [arXiv 2604.21477](https://arxiv.org/pdf/2604.21477)
  - BARBICAN (a layered prompt-injection gateway for MCP, with component attribution) — [arXiv 2610.33198](https://arxiv.org/pdf/2610.33198)
  - AEGIS (cross-domain resource abuse in MCP) — [arXiv 2608.20481](https://arxiv.org/pdf/2608.20481)
  - a large-scale analysis of MCP ecosystem attacks — [arXiv 2509.06572](https://arxiv.org/pdf/2509.06572)
- Authorization: MCP uses OAuth 2.1 with the MCP server as resource server. Several sources say OAuth alone doesn't enforce per-action authorization. WSO2 states the MCP auth spec doesn't currently mandate identifying the MCP host (agent) with its own credentials. AAIF frames the delegation chain as developer → primary agent → delegated agent → MCP server → downstream service, with different identities at each hop. GitGuardian calls the flow inherently multi-hop. — [WSO2 docs](https://is.docs.wso2.com/en/next/guides/agentic-ai/mcp/); [AAIF](https://aaif.io/blog/agent-identity-and-delegated-access-in-mcp-systems); [GitGuardian](https://blog.gitguardian.com/oauth-for-mcp-emerging-enterprise-patterns-for-agent-authorization); [WorkOS per-tool scopes](https://workos.com/blog/mcp-authorization-patterns-per-tool-scopes)
- Descope and WorkOS describe a 2026-07-28 spec revision deprecating Dynamic Client Registration (not verified against the official spec). — [Descope](https://www.descope.com/blog/post/mcp-auth-spec)
- Coalfire asks "how do permissions carry forward as agents invoke other agents or tools?" as an open practitioner question. — [Coalfire](https://coalfire.com/the-coalfire-blog/securing-ai-agents-in-2026-what-practitioners-need-to-know)

### Inferences
- Avoid building yet another attack benchmark. Better individual-scale options:
  - (a) **"MCP lockfile / tool-description pinning"**: a CLI and SDK middleware that hashes tool descriptions and schemas at approval time and blocks or alerts on drift ("rug pull") at runtime, measured against MCPTox-style cases for the Vercel AI SDK and OpenAI Agents SDK MCP clients.
  - (b) A **defense ablation study**: run published poisoning cases through 4-5 cheap defenses (description sanitization, spotlighting, a separate classifier, capability scoping, dual-LLM) on 3 current models, and report ASR versus false-positive rate and added latency.
  - (c) A **per-call authorization policy layer** (OPA/Cedar-style) that binds "user X via agent Y may call tool Z with args matching P" and demonstrates multi-hop delegation.
- (a) is the most shippable in 4-6 weeks. (b) is the most write-up-friendly.

### Gaps
- Did not verify the official MCP spec text on host identity or DCR deprecation.
- Did not survey existing MCP scanners (e.g., invariant-labs mcp-scan) in this session. They likely overlap with option (a), so check before building.

---

## 7. Long-horizon agents: context compaction and execution stability

### Takeaway
Context compaction for long-running agents is an active 2026 research area. New benchmarks (CompactionBench from Microsoft Research, CompAct-Bench) report that compaction is still very lossy. Benchmarks now exist, so an individual's contribution would be **evaluating the compaction strategies built into the SDKs people actually use**. **Crowdedness: Medium-High** academically, **Low-Medium** for SDK-level comparisons.

### Cited Findings
- CompactionBench (Microsoft Research preprint, Oct 2026) turns software evolution into persistent multi-turn coding sessions to test repeated compaction end to end. It includes a production characterization from 13.5M GitHub Copilot coding-agent sessions and proposes asynchronous compaction. — [MSR preprint PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2026/10/CompactionBench_preprint.pdf); [Preprints.org](https://www.preprints.org/manuscript/202611.0780)
- CompAct-Bench inserts compaction boundaries into successful trajectories, has the model under test compress the prior context, then lets the same executor continue. It reports that working-context compaction "remains highly lossy even for frontier models." (The listing date looked inconsistent with the ID; verify it.) — [arXiv 2611.25673](https://arxiv.org/abs/2611.25673)
- An empirical study on AppWorld measures both single-run pass rate and multi-run *stability* under context compression (preliminary). — [arXiv 2608.06503](https://arxiv.org/pdf/2608.06503)
- Method papers: ACM (agentic context management; BrowseComp-Plus, DeepSearchQA, SWE-Bench Verified), ReFold (reversible context folding), CTXAgent, and CarryOn (object-oriented context). — [arXiv 2607.23809](https://arxiv.org/pdf/2607.23809); [arXiv 2610.07863](https://arxiv.org/pdf/2610.07863); [arXiv 2610.34425](https://arxiv.org/pdf/2610.34425); [arXiv 2610.18784](https://arxiv.org/pdf/2610.18784)

### Inferences
- Credible contribution: a **"compaction shoot-out"** applying the CompAct-Bench methodology (insert a boundary, compress, continue) to the compaction and memory mechanisms built into popular SDKs and harnesses, plus simple baselines (truncation, rolling summary, structured scratchpad or file-based memory). Report task success and multi-run stability. The research benchmarks exist; practitioner-facing results on the tools people actually use appear not to.
- Risk: frontier labs and Microsoft are active here, so a novel *method* is unlikely to stand out. A *measurement* can.

### Gaps
- Did not identify which SDKs ship built-in compaction as of Nov 2026, or how; that needs a docs check.

---

## 8. Agent cost and latency optimization: prompt caching, tool-result caching, model routing

### Takeaway
There is solid evidence that caching strategy for agents is non-obvious (it can *increase* latency), and per-tool caching policies are an emerging research topic. A practitioner tool that **audits an agent's traces for cache-breaking patterns** looks under-served. **Crowdedness: Medium.**

### Cited Findings
- "Don't Break the Cache" (Lumer et al., arXiv 2601.06007, Jan 2026), over 500+ DeepResearchBench sessions with 10k-token system prompts:
  - prompt caching cut cost by 41-80% (v2; v1 said 45-80%) and improved TTFT by 13-31% depending on provider;
  - full-context caching can *raise* latency because dynamic tool results trigger cache writes that are never reused;
  - system-prompt-only caching was the most consistent;
  - the cheapest strategy was not always the fastest. — [arXiv 2601.06007](https://arxiv.org/html/2601.06007v2); [alphaXiv](https://www.alphaxiv.org/abs/2601.06007)
- ToolCacheAgent (an ICLR 2026 submission under review) generates per-tool caching plans (cacheability, TTL, invalidation) and reports up to 1.69× latency speedup (unverified). — [OpenReview PDF](https://openreview.net/pdf/05f7fe080121ee4044c4899cf9b69ac21b7738ba.pdf)
- OpenAI's cookbook describes a measure-change-verify loop for agent cost and quality (p50/p95 latency, cost, quality checks), with mock data only. — [OpenAI cookbook](https://developers.openai.com/cookbook/examples/agent_optimization/optimizing_agents_for_cost_and_quality)

### Inferences
- Credible contribution: a **"cache-lint" for agent traces**. Ingest OpenTelemetry or SDK traces and flag cache-breaking patterns: timestamps or IDs early in the prompt, tool lists reordered between turns, dynamic content placed before static content, and cache writes that are never read. Estimate the dollars lost per pattern. It is useful, demo-able in TS or Python, and grounded in the 2601.06007 findings.
- Pair it with a small study measuring cache-hit rates of the default prompt layouts in the Vercel AI SDK, OpenAI Agents SDK and LangGraph.

### Gaps
- Did not check whether observability vendors (Langfuse, Helicone, Braintrust) already surface cache-efficiency diagnostics.

---

## 9. Tool-call correctness under real-world API drift and schema complexity (candidate, thinly researched)

### Takeaway
Evidence on this was mostly indirect in this session. Local-model tool-call validity is reported at 91-97% for 27-30B models, and voice benchmarks now include tool use under disfluency. No dedicated study of **agent robustness to tool-schema or API changes** (renamed params, new required fields, changed enums) turned up. **Crowdedness: Unknown**; treat as a hypothesis to validate.

### Cited Findings
- Well-formed tool-call rates of about 91-97% for Gemma 4 27B / Qwen3-Coder 30B on MCP workflows (vendor test). — [PromptQuorum](https://www.promptquorum.com/power-local-llm/best-local-models-tool-calling-2026)
- Full-Duplex-Bench-v3 evaluates tool use under real-world speech disfluency. — [arXiv 2604.04847](https://arxiv.org/pdf/2604.04847)
- Pome's twins are checked daily against real vendor APIs, which implies drift between mocks and real APIs is a recognized problem. — [pome-sh/digital-twins](https://github.com/pome-sh/digital-twins)

### Inferences
- Possible project: a "schema mutation" fuzzer that takes an agent's tool definitions, applies realistic API-evolution mutations, and measures how often the agent fails silently versus loudly. This pairs well with project 1 or 2.

### Gaps
- Did not search BFCL, ToolSandbox or API-Bank follow-ups for schema-drift robustness work. Likely prior art exists, so validate before choosing this.

---

## 10. Cross-cutting "open problems" signals from 2026 reports

### Takeaway
High-level 2026 reports agree that reliability, security (prompt injection), evaluation of composite systems, permissions and identity across agent hops, memory, and observability are unresolved. That supports areas 1, 2, 6 and 7 above. No lab-published "open engineering problems" list specific to agent infrastructure was found.

### Cited Findings
- The 2026 Singapore Consensus on Global AI Safety Research Priorities says no single actor can ensure the reliability, security and trustworthiness of AI agents, and covers agentic risk management. — [arXiv 2608.14611](https://arxiv.org/pdf/2608.14611)
- A study of how developers perceive and prioritize risks in agentic AI products. — [arXiv 2606.15485](https://arxiv.org/pdf/2606.15485)
- Coalfire on the "semantic gap between what our detection tools expect and what agents actually do" (monitoring), and memory and context engineering as the "main battlegrounds." — [Coalfire](https://coalfire.com/the-coalfire-blog/securing-ai-agents-in-2026-what-practitioners-need-to-know)
- The Conversation's 2025 retrospective / 2026 outlook names reliability and prompt injection as ongoing challenges. — [The Conversation](https://theconversation.com/ai-agents-arrived-in-2025-heres-what-happened-and-the-challenges-ahead-in-2026-272325)
- Gartner is widely cited as projecting that 40%+ of agentic AI projects will be cancelled by 2027 (secondary citation via Kanerika; the original Gartner release was not checked). — [Kanerika](https://kanerika.com/blogs/ai-agent-challenges/)

### Inferences
- A summary ranking for a TS/Python agent-product engineer, weighing notability, feasibility in 4-6 weeks and crowdedness:
  1. **Side-effect exactly-once / effect ledger + chaos study** (area 1): strong practitioner pain, low tooling, fits the SDK stack.
  2. **Statistical upgrade-gating + "how often single runs mislead" study** (area 2): very write-up-friendly and reusable.
  3. **In-browser small-model tool-calling benchmark** (area 5): low crowding, very demo-able in TS.
  4. **MCP tool-description pinning / defense ablation** (area 6): high interest, but check existing scanners.
  5. **Voice turn-taking test suite** (area 4) and **cache-lint** (area 8): solid niches.
  6. **Live-web drift study** (area 3) and **compaction shoot-out** (area 7): notable, but costlier to run and closer to well-resourced researchers.

### Gaps
- Did not find an Anthropic, OpenAI, Vercel, LangChain or Modal "open problems" engineering post from 2026 in these searches. A targeted search of those blogs could add first-party evidence.
- Hacker News threads were not searched directly. Practitioner complaint evidence here is mostly DEV Community, GitHub issues and vendor blogs.
