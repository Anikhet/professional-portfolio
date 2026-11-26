# Case Studies: Engineers Whose Side Projects Got Them Hired, Funded, Acquired, or Noticed (2022-2026 focus)

Research note: web fetches to some primary sites (steipete.me, kellerjordan.github.io) were blocked by this session's network policy, so several claims rest on news coverage and search-result snippets rather than the author's own post. Confidence is flagged per item. Items marked [OLDER] fall before 2022.

## Which individuals got hired, funded, or acquired because of a side project or public write-up?

### Takeaway
Twelve cases are documented below. The strongest 2022-2026 pattern is a single engineer shipping a small, runnable, open artifact that hits a moment (new model weights, a new capability). The artifact spreads on GitHub, X and Hacker News, and within months it turns into a lab hire (Steinberger to OpenAI, Keller Jordan to OpenAI), a pre-seed or seed round (ggml.ai, tldraw, tiny corp, Unsloth to YC), or an acquisition (ggml.ai to Hugging Face).

### Cited Findings

**1. Georgi Gerganov: whisper.cpp / llama.cpp to ggml.ai, then Hugging Face (2023-2026). Outcome: funded, then acquired.**
- llama.cpp's "Initial release" commit is dated March 10, 2023, shortly after Meta's LLaMA weights leaked or were released. It is pure C/C++ LLaMA inference with no dependencies — [Wikipedia: Llama.cpp](https://en.wikipedia.org/wiki/Llama.cpp)
- It came after his earlier whisper.cpp, a C/C++ port of OpenAI's Whisper speech model — [Wikipedia: Llama.cpp](https://en.wikipedia.org/wiki/Llama.cpp)
- ggml.ai was formed in 2023 with pre-seed money from Nat Friedman and Daniel Gross; announced on HN — [ggml.ai](https://ggml.ai/); [HN thread](https://news.ycombinator.com/item?id=36215651)
- Round size is unclear. Dealroom lists $250k (unverified), and CB Insights shows a convertible note dated 9/6/2023 — [Dealroom](https://app.dealroom.co/companies/ggml_ai); [CB Insights](https://www.cbinsights.com/company/ggml/financials)
- ggml.ai joined Hugging Face on Feb 20, 2026; terms undisclosed — [Simon Willison](https://simonwillison.net/2026/Feb/20/ggmlai-joins-hugging-face/)
- Technical difficulty: high (hand-written quantization and CPU/Metal kernels). Main metric that spread it: "runs LLaMA on a MacBook," shown in a demo.
- Uncertain: the claim that it was "hacked in an evening" is folklore. I found no source for it, although the commit history shows a working first release and fixes all on March 10.

**2. Peter Steinberger: Clawdbot, then Moltbot, then OpenClaw (Nov 2025 to Feb 2026). Outcome: hired by OpenAI.**
- Started as a weekend project; the repo was created Nov 24, 2025 (earlier a "WhatsApp relay") — [Morph](https://www.morphllm.com/clawdbot); [AIML API blog](https://aimlapi.com/blog/openclaw-how-a-weekend-experiment-turned-into-an-open-source-ai-phenomenon)
- Went viral in late January 2026. Secondary sources put it at about 100k stars within days to weeks and about 250k by early March, which passed React — [Star History](https://www.star-history.com/blog/clawflare); [Analytics India Mag](https://analyticsindiamag.com/ai-news/openclaw-overtakes-react-in-total-github-stars); [Trending Topics: 2M visitors in a week](https://www.trendingtopics.eu/openclaw-2-million-visitors-in-a-week/)
- Renamed twice after a trademark dispute with Anthropic — [Fortune](https://fortune.com/2026/02/15/openai-openclaw-ai-agent-developer-peter-steinberg-moltbot-clawdbot-moltbook)
- Sam Altman announced on Feb 15, 2026 that Steinberger was joining OpenAI "to drive the next generation of personal agents." OpenClaw moves to a foundation that OpenAI supports — [Bloomberg](https://www.bloomberg.com/news/articles/2026-02-15/openai-hires-openclaw-ai-agent-developer-peter-steinberg); [The Register](https://www.theregister.com/2026/02/16/open_ai_grabs_openclaw); [Tom's Hardware](https://www.tomshardware.com/tech-industry/openai-hires-genius-openclaw-creator-but-popular-ai-assistant-will-remain-open-source-sam-altman-says-creator-will-work-on-smart-agents-in-new-role)
- Caveat: he was not early-career. He had founded PSPDFKit before this (from my own background knowledge; not re-verified here). Security concerns were widely reported — [InfoWorld](https://www.infoworld.com/article/4132731/openai-hires-openclaw-founder-as-ai-agent-race-intensifies-2.html)
- Time from first commit to hire: about 12 weeks.

**3. Keller Jordan: NanoGPT speedrun and the Muon optimizer blog post (Oct-Dec 2024). Outcome: hired at OpenAI (pretraining).**
- Muon was introduced through NanoGPT-speedrun record tweets (around Oct 2024) and a blog post (Dec 2024), not through a paper — [GreaterWrong comment](https://www.greaterwrong.com/posts/j3gp8tebQiFJqzBgg/how-the-nanogpt-speedrun-wr-dropped-by-20-in-3-months/comment/uYKcbCx9kddipamrY); [Tencent Cloud](https://cloud.tencent.com/developer/news/2680222)
- His profile lists pretraining at OpenAI, and reports say he joined in December 2024 — [Digg profile](https://digg.com/rankings/kellerjordan0); [Teahose](https://www.teahose.com/people/318)
- The claim that the blog post alone got him hired comes from an X post by Hyperbolic CTO Yuchen Jin, relayed in secondary coverage. Neither Jordan nor OpenAI has confirmed it — [AIbase](https://news.aibase.com/news/18953); [TechBang](https://www.techbang.com/posts/123808-muon-optimizer-gpt5-key-tech)
- Main metric: a public, reproducible leaderboard ("time to reach X val loss on 8xH100"). Each record was a self-contained, checkable result. Flatiron Institute later did mathematical work on Muon — [Simons Foundation](https://simonsfoundation.org/2026/08/17/how-flatiron-institute-mathematicians-helped-make-ai-more-efficient/)
- Confidence: MEDIUM on the causal link, HIGH that a public benchmark plus a blog post preceded the hire.

**4. Steve Ruiz: tldraw (2021 to 2025). Outcome: VC-funded company instead of an Adobe job.**
- Began in 2021 as an open-source side project that grew out of digital-ink experiments. He built it in public through Twitter GIFs — [Latent Space](https://www.latent.space/p/tldraw?open=false); [tldraw seed post](https://tldraw.substack.com/p/tiny-little-seed-round)
- Raised a $2.7M seed led by Lux on Nov 30, 2022, a $2M insider extension in Nov 2023, and a $10M Series A in Apr 2025 — [tldraw blog](https://tldraw.dev/blog/announcing-tldraws-seed-round); [extension](https://tldraw.dev/blog/tldraw-raised-another-2m); [Series A](https://tldraw.dev/blog/announcing-tldraw-series-a)
- A second viral moment came in Nov 2023 with "Make Real" (sketch a UI, get working code via GPT-4V), which he called "accidental" — [GitNation talk](https://gitnation.com/contents/make-real-tldraws-accidental-ai-play)
- Unverified (single podcast summary): he was about to start at Adobe when sponsorships and corporate interest changed his plans — [Scaling DevTools podcast](https://share.transistor.fm/s/a2fdfb8a)

**5. George Hotz: tinygrad to tiny corp (2020 to 2023). Outcome: $5.1M raise.**
- tiny corp was incorporated in Nov 2022 and raised $5.1M, announced May 24, 2023 on his own blog, to build ML computers around tinygrad — [geohot blog](https://geohot.github.io/blog/jekyll/update/2023/05/24/the-tiny-corp-raised-5M.html); [W&B summary](https://wandb.ai/byyoung3/ml-news/reports/George-Hotz-Raises-5-Million-For-Tiny-Corp---Vmlldzo0NDY4NTgy)
- tinygrad itself began about 2020 as a deliberately tiny educational framework (see "Five Years of Tinygrad") — [HN mirror](https://hn.nuxt.dev/item/46422757)
- Caveat: Hotz is an outlier with huge prior fame (iPhone jailbreak, comma.ai), so this case is weak evidence for typical engineers.

**6. Andrej Karpathy: nano* educational repos (nanoGPT 2023, llm.c 2024, nanochat 2025). Outcome: Eureka Labs, then Anthropic (May 2026).**
- nanoGPT, nanochat and micrograd together had more than 120k GitHub stars by July 2026 — [StartupHub](https://www.startuphub.ai/news/figure-andrej-karpathy-nano-series-technical-contribution-2026-07-16)
- llm.c: GPT-2 training in raw C/CUDA, "no need for 245MB of PyTorch" — [llm.c README](https://raw.githubusercontent.com/karpathy/llm.c/master/README.md)
- He founded Eureka Labs in July 2024 (about $20M seed reported) and joined Anthropic's pretraining team on May 19, 2026; Eureka is paused — [TechCrunch](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/); [VentureBeat](https://venturebeat.com/technology/andrej-karpathy-announces-hes-joining-anthropic)
- Caveat: he is a celebrity; the repos are mainly evidence of the "minimal, readable reimplementation" format, which others (Keller Jordan's speedrun forked nanoGPT) built on.

**7. Daniel & Michael Han: Unsloth (2023 to 2024). Outcome: YC S24, relocation from Sydney to SF, VC.**
- Two brothers in Sydney built an open-source library that makes LoRA fine-tuning about 2x faster with less memory, after an earlier library, HyperLearn — [YC page](https://www.ycombinator.com/companies/unsloth-ai); [aiwiki](https://www.aiwiki.ai/wiki/unsloth)
- Joined YC Summer 2024, announced by Daniel on X — [YC](https://www.ycombinator.com/companies/unsloth-ai); seed in Oct 2024 per [Seedtable](https://seedtable.com/companies/unsloth-ai/funding-rounds/seed-2024-10)
- Stars: the YC page cites about 40k; secondary sources cite about 65-75k by mid-2026 (not checked live) — [AI Engineer](https://www.ai.engineer/orgs/unsloth)
- What spread it: concrete benchmark claims (x-times faster, y% less VRAM), free Colab notebooks, and fast same-day support for new open models.
- A good early-career, non-celebrity example.

**8. Jeffrey Morgan & Michael Chiang: Ollama (2023 to 2026). Outcome: about 9M users, $65M Series B.**
- YC W21 company that pivoted. Ollama ("docker for LLMs," built on llama.cpp) launched in 2023 — [YC](https://www.ycombinator.com/companies/ollama)
- Raised a $65M Series B led by Theory Ventures in July 2026 ($88M total), with nearly 9M users — [TechCrunch](https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/); [Tomasz Tunguz](https://tomtunguz.com/ollama-series-b/)
- Prior exit: Kitematic was acquired by Docker in 2015 — [BetaKit](https://betakit.com/kitematic-founders-nab-65-million-usd-to-help-devs-run-ai-models-locally-with-ollama/)
- Caveat: a startup pivot, not a pure side project. It shows a UX wrapper on someone else's hard core (llama.cpp) can win distribution. Some in the community criticize it on attribution grounds — [Sleeping Robots](https://sleepingrobots.com/dreams/stop-using-ollama/)

**9. Riley Goodside: prompt-engineering screenshots on Twitter (2022). Outcome: hired as Scale AI "Staff Prompt Engineer," later Google DeepMind.**
- Became known for posting GPT-3 prompt experiments and screenshots on Twitter in 2022 (including early prompt-injection demos). He was a data scientist (OkCupid, Grindr, CopyAI) before that — [PromptLayer glossary](https://www.promptlayer.com/glossary/riley-goodside); [Semafor](https://semafor.com/article/07/21/2023/what-does-an-ai-prompt-engineer-actually-do)
- Listed as Scale's Staff Prompt Engineer in 2023 — [Scale event](https://exchange.scale.com/public/events/the-past-and-future-of-prompt-engineering-2023-08-23)
- A pure "experiments posted in public" case with no repo needed. The causal hiring story is widely implied but I did not find a primary quote.

**10. Luke Farritor (and Youssef Nader): Vesuvius Challenge (2023). Outcome: global press, $40k plus a share of $700k.**
- A 21-year-old University of Nebraska-Lincoln CS undergrad trained an ML ink-detection model in his spare time and read the first word ("porphyras," purple) from an unopened Herculaneum scroll. He won the $40k First Letters Prize; Youssef Nader got $10k — [Vesuvius Challenge](https://scrollprize.org/firstletters); [UNL News](https://news.unl.edu/article/undergrad-s-scroll-decoding-discovery-grabs-worldwide-headlines); [Smithsonian](https://www.smithsonianmag.com/smart-news/this-21-year-old-used-ai-to-decipher-text-from-a-scroll-that-hasnt-been-read-in-2000-years-180983084/)
- Co-won the $700k grand prize in Feb 2024 — [UNL News](https://news.unl.edu/article-2)
- An early-career example: an open, sponsored challenge (backed by Nat Friedman) gave a student a single, instantly understandable artifact, an image of a decoded word.

**11. Boris Cherny: Claude Code (Sept-Nov 2024, inside Anthropic). Outcome: became a flagship product.**
- He built prototypes after joining Anthropic in Sept 2024. A terminal tool given filesystem and bash access surprised him by navigating codebases on its own, and colleagues joined as adoption grew internally — [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built); [Every transcript](https://every.to/podcast/transcript-how-to-use-claude-code-like-the-people-who-built-it); [AI Engineer Guide](https://aiengineerguide.com/til/claude-code-started-as-side-project/)
- He says he values weekend projects in hiring — [Entrepreneur](https://www.entrepreneur.com/business-news/anthropic-engineers-can-make-up-to-560000-heres-the-unusual-trait-an-exec-looks-for-in-new-hires)
- A variant of the pattern: an internal side project (dogfooding spread) rather than a public one. One source frames the origin differently — [Digg](https://digg.com/ai/yfvidqof)

**12. Pieter Levels: Photo AI and others (2022 to 2026). Outcome: bootstrapped solo revenue, no hire or VC.**
- Photo AI passed about $100k per month in revenue by Aug 2024 by his own report; his portfolio peaked at about $420k/month (Sept 2024 tweet, self-reported) — [Indie Hackers](https://www.indiehackers.com/post/tech/pieter-levels-just-passed-100-000-a-month-in-revenue-with-photoai-NToMGI3ZjwSBOfTywZnG); [Indie Hackers deep dive](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-132k-mrr-in-18-months-3a9a2b1579)
- His 2025 browser flight sim, reportedly built with AI tools in hours, hit about $1M ARR in 17 days, then declined — [DEV](https://dev.to/promptway/he-built-a-flight-simulator-in-three-hours-and-hit-1m-a-year-in-17-days-then-it-went-to-zero-1b1l) (secondary, LOW-MEDIUM confidence)
- His main channel is public revenue numbers on X. All revenue figures are self-reported.

**Supporting [OLDER] references**
- Excalidraw by Christopher Chedeau (vjeux): launched Jan 1, 2020 as a personal project while he was at Facebook. It became Excalidraw+ (company in Brno, May 2021). Funding is disputed: one listing says $5M raised, another says revenue-funded — [Wikipedia](https://en.wikipedia.org/wiki/Excalidraw); [Excalidraw+ intro](https://plus.excalidraw.com/blog/introducing-excalidraw-plus)
- Val Town (Steve Krouse): a $1.5M pre-seed (Aug 2022) and $5.5M seed (Apr 2024) led by Accel. This is a startup, not a side project; Krouse's public "future of coding" community work preceded it — [Val Town seed](https://blog.val.town/blog/seed); [Accel](https://accel.com/news/our-seed-investment-in-val-town-making-programming-accessible-collaborative-and-fun)

### Inferences
- The "hired by a lab" outcome in 2024-2026 tends to follow work that either shows frontier-relevant skill on a public scoreboard (Jordan) or creates a new product category the lab wants to own (Steinberger). Popular apps alone rarely lead to a lab hire.
- Funding outcomes cluster around "infrastructure everyone suddenly needs" right after a model release (llama.cpp after LLaMA, Unsloth and Ollama after open-weight models).
- Most famous examples involve people with prior reputation (Hotz, Karpathy, Steinberger, vjeux). The clearest early-career, low-reputation cases are Farritor, Unsloth's founders, Keller Jordan and Goodside.

### Gaps
- I could not fetch Steinberger's or Keller Jordan's own posts (network-blocked), so their own statements about causation are not cited.
- I found no primary-source quote confirming that Goodside's or Jordan's hire was caused by their public work.
- Exact ggml.ai round size is unverified.

## What patterns recur across these cases?

### Takeaway
The recurring formula is: (a) a narrow, technically real artifact, (b) timed to a new capability or model release, (c) packaged with a single headline metric or a 10-second demo, (d) shipped openly and iterated in public. Deep write-ups matter most for research-lab hires; star counts and user numbers matter most for funding.

### Cited Findings
- **A single headline metric:** "LLaMA on a MacBook" (llama.cpp), "2x faster, less VRAM" (Unsloth), speedrun wall-clock records (Muon), stars passing React (OpenClaw), $X/month revenue (Levels) — sources as in cases 1, 3, 7, 2, 12 above.
- **Public benchmark plus blog post instead of a paper:** Muon was shared via tweets and a blog post; the speedrun dropped the record by about 20% in 3 months, all in public — [GreaterWrong](https://www.greaterwrong.com/posts/j3gp8tebQiFJqzBgg/how-the-nanogpt-speedrun-wr-dropped-by-20-in-3-months/comment/uYKcbCx9kddipamrY)
- **Deep, step-by-step technical worklog:** Simon Boehm's Dec 2022 "How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance" goes from about 309 GFLOPs/s naive to about 94% of cuBLAS on an A6000 and spawned follow-ups (e.g., an H100 version reaching 107% of cuBLAS) — [mirror of the post](https://gwern.net/doc/www/siboehm.com/d4b3e9d6de0655f490fe6369f4d004936248a833.html); [H100 follow-up](https://cudaforfun.substack.com/p/outperforming-cublas-on-h100-a-worklog). He reportedly later joined Anthropic, but I could NOT verify that in this session, so treat it as unconfirmed.
- **Instantly understandable visual demo:** tldraw's Twitter GIFs and "Make Real"; the Vesuvius decoded-word image — [Latent Space](https://www.latent.space/p/tldraw?open=false); [Smithsonian](https://www.smithsonianmag.com/smart-news/this-21-year-old-used-ai-to-decipher-text-from-a-scroll-that-hasnt-been-read-in-2000-years-180983084/)
- **Minimal, readable reimplementation:** the nano* repos, tinygrad, llama.cpp's "no dependencies" approach — [llm.c README](https://raw.githubusercontent.com/karpathy/llm.c/master/README.md); [geohot](https://geohot.github.io/blog/jekyll/update/2023/05/24/the-tiny-corp-raised-5M.html)
- **Learning and experimenting in public:** Goodside's prompt screenshots; Simon Willison's steady blog and LLM CLI, with recurring tests like the "pelican riding a bicycle" SVG used as an informal benchmark for new models — [Simon Willison LLM tag](https://simonwillison.net/tags/llm/?page=1)
- **Sponsor or investor networks:** Nat Friedman and Daniel Gross appear repeatedly as early backers (ggml.ai pre-seed; Friedman also sponsored the Vesuvius Challenge) — [ggml.ai](https://ggml.ai/); [scrollprize.org](https://scrollprize.org/firstletters)

### Inferences
- Lab hiring managers look for evidence that can't be faked, such as a reproducible leaderboard, a kernel benchmark, or a repo people depend on. Write-ups that show the process (worklogs) appear to count as much as the end result.
- The "two-sided proof" pattern: the artifact proves skill, and community traction (stars, users, revenue) proves judgment about what matters.
- Timing is a multiplier. Several projects took off within days or weeks of an external release (LLaMA in Mar 2023; strong agentic coding models in late 2025 for OpenClaw).

### Gaps
- No systematic data (only anecdotes) on what share of lab hires come from public side projects.
- I did not collect counter-examples (viral projects that led nowhere), apart from Levels' flight sim decline.

## Viral technical blog posts and experiments, and what they led to

### Takeaway
The best-documented "viral post leads to outcome" cases in this period are Keller Jordan's Muon post (OpenAI hire, causation reported but not confirmed), Simon Boehm's CUDA matmul worklog (became a canonical reference; employment link unverified), Riley Goodside's prompt threads (Scale AI role), and Hotz's "tiny corp raised $5.1M" post (company launch). I could not reliably pull HN point totals in this session.

### Cited Findings
- Muon blog post (Dec 2024) followed by an OpenAI pretraining role — see case 3 sources.
- CUDA matmul worklog (Dec 2022) became a canonical reference and was extended by others — [mirror](https://gwern.net/doc/www/siboehm.com/d4b3e9d6de0655f490fe6369f4d004936248a833.html); [GEMM notes 2026](https://monishver11.github.io/blog/2026/simons-gemm-notes/)
- ggml.ai launch announcement on HN (June 2023) — [HN 36215651](https://news.ycombinator.com/item?id=36215651)
- "the tiny corp raised $5.1M" blog post (May 2023) — [geohot blog](https://geohot.github.io/blog/jekyll/update/2023/05/24/the-tiny-corp-raised-5M.html)
- Simon Willison's ggml.ai/Hugging Face post shows how his blog acts as an amplifier for others' projects — [simonwillison.net](https://simonwillison.net/2026/Feb/20/ggmlai-joins-hugging-face/)

### Inferences
- Viral posts by individuals tend to be either worklogs (here is every step, with numbers) or surprising experiment results. Opinion essays did not show up as hire or funding triggers in this sample.

### Gaps
- HN point counts and front-page rank for each post were not retrieved. Algolia HN search was not tried, because two other primary-source fetches failed on network policy.
- The Simon Boehm employment link is unverified.

## How long did projects take, and how were they distributed?

### Takeaway
The time from first public artifact to outcome ranges from about 3 months (OpenClaw to OpenAI, llama.cpp to ggml.ai funding, Muon to OpenAI) to about 1.5 years (tldraw to seed). The main channels are GitHub plus X/Twitter, with HN as the amplifier. Product Hunt plays little role for dev and AI tools in this sample.

### Cited Findings
- llama.cpp: first commit Mar 10, 2023; ggml.ai funding about June 2023 (about 3 months); acquired Feb 2026 (about 3 years) — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp); [HN](https://news.ycombinator.com/item?id=36215651); [Simon Willison](https://simonwillison.net/2026/Feb/20/ggmlai-joins-hugging-face/)
- OpenClaw: repo Nov 24, 2025; viral late Jan 2026; OpenAI Feb 15, 2026 (about 12 weeks). Spread via GitHub trending, X and press; 2M site visitors in a week — [Trending Topics](https://www.trendingtopics.eu/openclaw-2-million-visitors-in-a-week/); [Bloomberg](https://www.bloomberg.com/news/articles/2026-02-15/openai-hires-openclaw-ai-agent-developer-peter-steinberg)
- Muon: about Oct 2024 tweets, Dec 2024 blog post and OpenAI (about 2-3 months); spread via X and the public speedrun repo — case 3 sources.
- tldraw: 2021 side project, built in public with Twitter GIFs; seed Nov 2022 (about 1-1.5 years) — [tldraw](https://tldraw.dev/blog/announcing-tldraws-seed-round)
- Unsloth: started 2023, YC S24 (about 1 year); spread via X, Reddit r/LocalLLaMA (not separately sourced) and Colab notebooks — [YC](https://www.ycombinator.com/companies/unsloth-ai)
- Vesuvius: First Letters prize Oct 2023, a few months into the contest; mainstream press — [UNL](https://news.unl.edu/article/undergrad-s-scroll-decoding-discovery-grabs-worldwide-headlines)
- Levels: X-first distribution with public revenue dashboards — [Indie Hackers](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-132k-mrr-in-18-months-3a9a2b1579)

### Inferences
- Fast outcomes (about 3 months) happen when the project rides a sudden capability shift. Slower ones (more than a year) come from steady build-in-public momentum (tldraw, Unsloth).
- Distribution is X/GitHub-native; HN acts as a validation spike rather than the origin in most 2024-2026 cases.

### Gaps
- No reliable per-channel attribution data (for example, the share of traffic from HN vs X) for any case.
- r/LocalLLaMA's role (likely significant for llama.cpp, Unsloth and Ollama) is not sourced here.
