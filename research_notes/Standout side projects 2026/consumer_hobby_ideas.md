# Consumer / Hobby Project Opportunities: Astronomy, Video Games, Music Production (FL Studio)

> Method note: in this session hn.algolia.com, docs.rs and other direct page fetches were blocked by the network sandbox, so everything below comes from web-search result snippets, not full-page reads. HN point and comment counts could not be retrieved. Several items are dated late 2026 and could not be checked against primary sources; those are flagged.

## Astronomy: Is there a fast, fully in-browser/offline plate solver (WASM)? Status of incumbents, and other ideas (seeing forecasts, satellite trails, browser stacking)

### Takeaway
In-browser plate solving is no longer a gap. At least three web tools (SkySolver, alokm.com/solve, rotating.earth) already identify stars in a photo, and at least one says nothing is uploaded. The space is crowded at the "upload a photo, get a labeled image" level. What is still open: a polished, offline, open-source WASM solver library others can embed, phone-camera-native solving with AR overlays (which extends AstroAgent), browser deep-sky stacking, and consumer satellite-trail cleanup. Seeing/transparency forecasting has strong incumbents in North America but patchy coverage elsewhere.

### Cited Findings
**Plate solving in the browser (prior art):**
- SkySolver (skysolver.app) is a free online plate solver for star and Moon photos. "Stars are extracted in your browser with WebAssembly, then a blind solver finds where in the sky it was taken." It also offers an API and a PixInsight version — [SkySolver](https://skysolver.app/); [SkySolver solver page](https://skysolver.app/solver)
- alokm.com "Plate Solver" says it runs in your browser and nothing is uploaded. It labels constellations, named stars, Messier/NGC objects and Moon craters — [alokm.com/solve](https://alokm.com/solve/)
- rotating.earth's solver is a hybrid: usually only star positions are sent to its servers, which run Astrometry.net and ASTAP. If the browser cannot measure the stars, the photo is uploaded and then deleted — [rotating.earth solver](https://rotating.earth/solver/)
- hoan.uk solver uses 4-star geometric quad hashing against Tycho-2 and Gaia DR2 — [hoan.uk plate solving](https://hoan.uk/astronomy/plate-solving)
- astrometry.js is an Emscripten port of astrometry.net's image2xy, which does star extraction only, not the full solve — [npm astrometry.js](https://www.npmjs.com/package/astrometry.js)
- Zodiacal is a Rust blind plate-solving library inspired by astrometry.net. Search snippets did not confirm a WASM target, and docs.rs was unreachable — [docs.rs zodiacal](https://docs.rs/crate/zodiacal/latest/source/README.md)
- A widefield plate solver exists on PyPI, and an AstroBin thread mentions "Skyshot" claiming sub-20 ms solves with open-sourced code and research manuscripts. Browser support was not confirmed — [PyPI widefield-plate-solver](https://pypi.org/project/widefield-plate-solver); [AstroBin forum](https://app.astrobin.com/forum/topic/259219)
- ASTAP remains the standard free desktop solver for deep-sky images — [ASTAP](https://www.hnsky.org/astap.htm). A GitHub wrapper (Coffymonk/PlateSolver) uses ASTAP for telescope, Milky Way and phone photos — [GitHub Coffymonk/PlateSolver](https://github.com/Coffymonk/PlateSolver)
- nova.astrometry.net reliability: an October 2025 thread reports a long outage of its image storage at NERSC. Another post blames an outage on a full disk. There are also rate-limit and queue complaints — [AAVSO thread](https://archive.aavso.org/node/81633); [astrometry Google Group: rate limits](https://groups.google.com/g/astrometry/c/XYGKO17jyz0); [AstroBin: platesolving failing](https://ssr.app.astrobin.com/forum/topic/213547/astrobin/platesolving-failing)

**Planetarium / sky-map incumbents:**
- Stellarium Web Engine is an open-source (AGPL-3.0) WebGL planetarium built with Emscripten, and Stellarium Web runs on it — [Gitee mirror](https://gitee.com/jansonshen2016/stellarium-web-engine); [Stellarium Labs](https://stellarium-labs.com/stellarium-web)
- Stellarium Mobile: about 10M+ Google Play installs and a 4.78 rating from about 310K ratings, per AppBrain — [AppBrain](https://www.appbrain.com/app/stellarium-star-map/com.noctuasoftware.stellarium_free)
- Star Walk 2: about 41M Android downloads and a 4.55 rating from about 566K ratings (chrome-stats). Gizmodo lists 4.6 on Play from about 553K votes and 4.7 on iOS from about 66K — [chrome-stats](https://chrome-stats.com/d/com.vitotechnology.StarWalk2Free); [Gizmodo](https://gizmodo.com/download/starwalk-2)
- No SkySafari download figures were found.

**Seeing / transparency forecasts:**
- Astrospheric forecasts transparency and seeing, updates four times a day with a 48-hour horizon, and includes smoke. It covers the continental US and Canada; users outside that area may see missing data — [Astrospheric App Store](https://apps.apple.com/us/app/astrospheric/id1166046863); [AstroBackyard](https://astrobackyard.com/best-weather-app-astronomy/)
- Clear Outside forecasts cloud cover but not seeing. Its developer says no seeing model is "accurate and reliable enough to use" — [High Point Scientific](https://www.highpointscientific.com/astronomy-hub/post/top-5-weather-apps-for-astronomy)
- Other seeing/transparency sources: Xasteria, meteoblue's 7-day astronomical seeing, and 7Timer — [Xasteria](https://apps.apple.com/app/id985030722); [meteoblue](https://www.meteoblue.com/en/blog/article/show/35991_Astrophotography+using+meteoblue+Astronomical+seeing)
- Light-pollution maps (VIIRS + World Atlas, Bortle/SQM) already exist as web apps — [DEV: light pollution map](https://dev.to/ax_xu_d02033382e593a09faf/a-stargazers-guide-to-new-light-pollution-map2025-2l41)

**Satellite-trail detection/removal:**
- StarlinkSweeper (MIT) is a PixInsight script with a Python version. It masks trail pixels inside WBPP stacking instead of discarding whole frames, and it is not ML-based — [AstroBin StarlinkSweeper thread](https://app.astrobin.com/forum/topic/260440/pleiades-astrophoto-pixinsight/starlinksweeper-pixinsight-script-that-finds-the-subframes-crossed-by-satellite-trails)
- ASTA uses U-Net plus a Hough transform, with about 0.94 precision and 0.94 recall. Code release is unconfirmed — [A&A paper](https://www.aanda.org/10.1051/0004-6361/202451663)
- STARLINC (arXiv, 2026) claims the first ML trail-removal method that needs no pixel-level annotation, using synthetic trails and inter-frame differences — [arXiv STARLINC](https://arxiv.org/pdf/2608.29145)

**Browser / phone stacking:**
- eise.app is a free browser planetary/lunar/solar lucky-imaging stacker using WebAssembly and WebWorkers. It has launched on Product Hunt — [Product Hunt eise.app](https://www.producthunt.com/products/eise-app); [lavx news](https://news.lavx.hu/article/eise-app-brings-planetary-image-stacking-to-the-browser-with-webassembly)
- Star Trail Stacker claims a browser workspace for star trails, nightscapes, deep-sky and comet stacks. No independent reviews were found — [AlternativeTo](https://alternativeto.net/software/star-trail-stacker/about/)
- Native iOS stackers exist: AstroShader (live align/stack), SharpStacker, and Astro Stacker — [AstroShader](https://apps.apple.com/se/app/astroshader/id6444631986); [SharpStacker](https://apps.apple.com/us/app/sharpstacker/id6783673108); [Astro Stacker](https://apps.apple.com/us/app/-/id6753679598)
- The search found no mature browser deep-sky stacker; Siril and DeepSkyStacker remain the free desktop standards — [AstroBackyard stacking software](https://astrobackyard.com/astrophotography-image-stacking-software/)

**Community/launch signal:**
- Small astronomy Show HNs exist, such as StellarSnap (APOD explorer and orbit simulator) — [HN StellarSnap](https://hn.svelte.dev/item/44270247)
- AstroBin's forum has many indie planner launches (Skywarden/Astro Planner, NIELS, Astrolytics, The Quiet Sky, Smart Astro Planner). Session planning is crowded — [AstroBin Astro Planner](https://app.astrobin.com/forum/topic/216286/introducing-astro-planner-web-tool-for-astrophotography-planning-and-recommendations)
- Picastro, an ad-free astrophotography social platform, got PetaPixel coverage in June 2025 — [PetaPixel](https://petapixel.com/2025/06/29/picastro-is-social-media-for-astrophotographers/)

### Inferences
- **Candidate A1: Open-source, offline WASM plate-solver library and PWA.** Prior art: SkySolver, alokm, rotating.earth, ASTAP, astrometry.net, Zodiacal. Gap: none of the browser tools found is clearly an open-source, embeddable, fully offline library with a quad index small enough to cache. nova.astrometry.net's outages and queues show that users depend on a fragile central service. Difficulty: high, because star extraction, quad hashing, index-size and FOV tradeoffs, and verification are all real astrometry work. Viral potential: moderate. It would appeal to HN as a "runs entirely in your browser, X MB index, <1 s solve" engineering story, but consumer apps already exist.
- **Candidate A2: AstroAgent v2, phone-camera live solving plus AR labels plus an LLM explainer.** This would use on-device solving instead of compass/gyro guessing. Star Walk 2 (about 41M downloads) and Stellarium (10M+) show the size of the consumer market, but they rely on sensors, not image solving. Difficulty: medium-high. Broad appeal is highest here, but the incumbents are very strong.
- **Candidate A3: Browser deep-sky / smartphone stacking with satellite-trail cleanup.** eise.app covers planetary stacking only. Trail removal exists only as PixInsight scripts or academic papers. A "drop 50 phone frames and get a stacked, trail-free Milky Way" WASM/WebGPU tool looks like the clearest underserved gap. Difficulty: medium-high (registration, calibration, RAW decoding in the browser).
- **Candidate A4: Global seeing/transparency forecast.** Astrospheric is limited to North America, and Clear Outside's developer doubts seeing models. A global, ML-calibrated forecast is a real gap but data-science heavy, and accuracy is hard to prove. Viral potential is low to moderate; retention could be strong.

### Gaps
- HN points and comments for any astronomy or plate-solver launch could not be retrieved because hn.algolia.com was blocked.
- I could not confirm whether SkySolver's blind solve runs client-side or server-side; the snippet says only that extraction runs in WASM.
- Zodiacal and Skyshot WASM support is unverified.
- SkySafari user numbers were not found.
- Reddit r/astrophotography sentiment was not retrieved.

## Video games: AI agents playing/benchmarking games, browser game AI demos, neuroevolution visualizers — what has gone viral?

### Takeaway
"AI plays game" streams are the most proven viral format in this space. Claude Plays Pokémon, Gemini beating Pokémon Blue and the Vals AI Minecraft stream all got mainstream press. Agent-arena benchmarks (RTS, poker, roguelikes) are now a steady stream of Show HNs, so the concept alone is crowded. The differentiator is spectacle plus a fair, reproducible harness.

### Cited Findings
- Anthropic launched a "Claude Plays Pokémon" Twitch stream to showcase extended thinking and agent training — [TechCrunch](https://techcrunch.com/?p=2971187); [Engadget](https://www.engadget.com/ai/claude-isnt-a-great-pokemon-player-and-thats-okay-151522448.html)
- Gemini 2.5 Pro beat Pokémon Blue in May 2025. The stream was run by an unaffiliated engineer (Joel Z), and Sundar Pichai promoted it. Joel Z cautioned, "Please don't consider this a benchmark," because the harnesses differ — [TechCrunch](https://techcrunch.com/2025/05/03/googles-gemini-has-beaten-pokemon-blue-with-a-little-help); [Benzinga](https://www.benzinga.com/tech/25/04/44892617/sundar-pichai-jokes-about-artificial-pokemon-intelligence-after-gemini-pro-beats-claude-at-classic-gameboy-t); [LessWrong](https://lesswrong.com/posts/7mqp8uRnnPdbBzJZE/is-gemini-now-better-than-claude-at-pokemon)
- LessWrong community posts report that a later Claude finally beat Pokémon Red ("a year late"). These are not verified against a primary source — [LessWrong](https://www.lesswrong.com/posts/sehJYg5Yny9fvpbpt/a-year-late-claude-finally-beats-pokemon)
- In September 2026, Vals AI streamed "GPT-6 Astra" playing Minecraft on Twitch. After a Creeper destroyed its base, it farmed potatoes for hours, and the clip spread as a meme. Reported run length conflicts: 141 hours vs 21 hours — [Dexerto](https://dexerto.com/minecraft/gpt-6-astra-forced-to-play-minecraft-gets-depressed-by-creeper-and-farms-potatoes-for-hours-3409634); [Beebom](https://beebom.com/gpt-6-astra-spent-hours-farming-potatoes-in-minecraft-after-blown-up-by-creeper/); [GamePro](https://www.gamepro.de/artikel/chatgpt-frustriert-in-minecraft,3461320)
- Neuro-sama, an AI VTuber, set a Twitch Hype Train record around January 2025 — [Tubefilter](https://www.tubefilter.com/2025/01/02/neurosama-ai-vtuber-twitch/amp/)
- Recent agent-arena Show HNs:
  - a browser 3D RTS where you command local agents, with an SDK and benchmarking — [HN Showcase](https://hnshowcase.com/post/50498487/a-browser-rts-where-you-play-alongside-your-local-agents)
  - "Grid," a no-limit Hold'em AI poker arena — [HN Showcase](https://hnshowcase.com/post/50392347/grid-a-hold-em-arena-where-your-ai-agent-plays-your-strategy)
  - "A real-time strategy game that AI agents can play" / LLM Skirmish (Feb 2026, Screeps-based; one commenter: "LLMs can code bots but can't strategize") — [HN Showcase](https://hnshowcase.com/post/47149586/a-real-time-strategy-game-that-ai-agents-can-play)
- Academic benchmarks: SpeedrunBench (2026), LMGame-Bench, VideoGameBench (2025), grid-game LLM leaderboards, and PlaytestArena — [SpeedrunBench arXiv](https://arxiv.org/pdf/2610.08076); [Grid-game benchmark arXiv](https://arxiv.org/pdf/2407.07796); [GUI agents for game generation](https://arxiv.org/html/2605.28258v1)
- "Compiled Agency" studies coding agents as game-AI researchers (roguelike to StarCraft II/Civ). Another paper reports frontier coding agents building an AlphaZero pipeline for Connect Four — [arXiv Compiled Agency](https://arxiv.org/pdf/2609.18996); [arXiv AlphaZero Connect Four](https://arxiv.org/pdf/2604.25067)
- Neuroevolution: EvoLab is a browser neuroevolution sandbox for physics creatures (GitHub, not found on HN) — [GitHub EvoLab](https://github.com/Jason2Brownlee/EvoLab)

### Inferences
- **Candidate G1: "Model Arena Plays," a public live stream and leaderboard where several frontier and local models play the same game in a fair, open-source harness.** Prior art: the Pokémon streams, Vals AI Minecraft, VideoGameBench and LMGame-Bench. Gap: consumer-facing, side-by-side and fair. The Gemini/Claude controversy shows that harness differences undermine comparisons, and those arguments are themselves what gets attention. Difficulty: medium (emulator, agent loop, streaming), plus ongoing API cost. Viral potential is high when a new model launches; it is a bad fit for a portfolio if API costs are unmanaged.
- **Candidate G2: In-browser "train your own agent" game.** Neuroevolution or RL runs in WebGPU, and users watch it learn and share replays. EvoLab shows the format exists but is niche. Difficulty: medium. Viral potential is moderate; similar "watch AI learn" visualizers have historically spread on YouTube and HN, though I found no current figures.
- **Candidate G3: Agent-SDK game designed for bots** (bring your own agent and a prompt-written strategy). This is crowded (RTS, poker and Screeps-style arenas are all recent Show HNs), so it is not recommended unless the angle is strongly differentiated.
- The builder's agent expertise is the strongest fit for G1. Making the reasoning visible ("watch the model think") seems to be the shared hook behind the viral cases.

### Gaps
- HN points for Claude Plays Pokémon and the agent-arena launches could not be retrieved.
- Claims about "GPT-6 Astra," a Claude Pokémon Red completion and "Fable" FireRed runs come from press and community posts; I did not verify them against primary sources.
- I found no Reddit r/gamedev data.

## Music: in-browser stem separation, AI tools for producers, FL Studio-adjacent tools — what exists and where are the gaps?

### Takeaway
In-browser Demucs stem separation is now commodity open source, with multiple ONNX/WebGPU builds, a Rust/WASM port and a Microsoft WebNN demo, so a "stem splitter in the browser" is no longer novel. FL Studio has its own AI assistant (Gopher), and a community MCP server already lets Claude control FL Studio. The remaining gaps are workflow tools that build on stems and MIDI, not separation itself.

### Cited Findings
**In-browser stem separation (prior art):**
- Show HN "Demucs music stem separator rewritten in Rust" (demucs-rs): the browser build runs the full pipeline in WASM with WebGPU via Burn/wgpu, with no uploads — [HN item 47234566](https://news.ycombinator.com/item?id=47234566); [GitHub demucs-rs](https://github.com/nikhilunni/demucs-rs); [Korben](https://korben.info/en/demucs-rs-separate-tracks-stems-browser.html)
- Other Show HNs: "Disband," a stem splitter with an API, and an AI song creator with stem separation — [HN 50458246](https://news.ycombinator.com/item?id=50458246); [HN 46255178](https://news.ycombinator.com/item?id=46255178)
- HTDemucs ONNX builds for the browser: YouStem build; a mixed-precision chained-split build that holds 30 fps on an RX 7600; and an htdemucs_ft WebGPU build. One notes that many exports NaN on WebGPU unless legacy opset 17 is used — [HF Ghilda](https://huggingface.co/Ghilda/htdemucs-onnx); [HF monteslu web](https://huggingface.co/monteslu/htdemucs-web-onnx); [HF monteslu ft WebGPU](https://huggingface.co/monteslu/htdemucs-ft-webgpu)
- The demucs-onnx PyPI package exports 4-stem, ft and 6-stem (guitar/piano) models with onnxruntime-web scaffolding — [PyPI demucs-onnx](https://pypi.org/project/demucs-onnx/)
- Microsoft's WebNN stem-separator demo (NPU/GPU, falling back to WebGPU/WASM) — [Microsoft WebNN demo](https://microsoft.github.io/webnn-developer-preview/demos/stem-separator/?devicetype=gpu); [HF webnn/stem-separator](https://huggingface.co/webnn/stem-separator)
- demucs-js reports about 3x realtime with WebGPU — [GitHub demucs-js](https://github.com/bakkot/demucs-js). Other examples: demucs-web, stemsplit demucs-onnx, and openDAW's AI demuxer — [GitHub demucs-web](https://github.com/timcsy/demucs-web); [openDAW newsletter](https://buttondown.com/opendaw/archive/ai-demuxer-stem-separation/)
- There are also many free web stem splitters (soundtools.io, Kitmul, and a stem-splitter tools directory) — [stemsplitter.github.io](https://stemsplitter.github.io/tools/); [soundtools.io](https://soundtools.io/stem-splitter/)

**Commercial incumbents:**
- Moises: free tier of 5 separations per month; premium about $3.99/month per one blog, with other sources giving different prices — [stemsplit Moises review](https://stemsplit.io/blog/moises-ai-review); [Moises](https://moises.ai/beat-friday)
- LALAL.AI moved to subscriptions plus top-ups; G2 lists Lite at $9.99/month — [LALAL.AI pricing](https://lalal.ai/pricing); [LALAL llms.txt](https://www.lalal.ai/llms.txt); [G2](https://g2.com/products/lalal-ai/pricing)

**FL Studio-adjacent AI:**
- FL Studio's built-in AI assistant Gopher (introduced 2025) can act on a limited set of FL controls and write Piano Roll/VFX scripts in 2026. It does not build full songs from a description — [note.com 2026 Gopher](https://note.com/ko_uncloud/n/na3c4896ffb7d?hl=en); [Veena](https://www.veena.studio/help/does-fl-studio-have-ai); [LIA plugin blog](https://liaplugin.com/blog/best-ai-tools-fl-studio-2026/)
- flstudio-mcp (community) lets Claude/Cursor/Codex control FL Studio. It lists 90 tools, including "Mix Doctor" gain staging and EQ/compression, piano roll, drum patterns and MIDI arrangement export — [GitHub flstudio-mcp](https://github.com/rosasynthesiz/flstudio-mcp)
- MIDI Agent is a VST3 AI MIDI generator that works in FL; Scaler 2 provides chord/MIDI tooling. These are vendor claims — [MIDI Agent](https://www.midiagent.com/blog/ai-midi-plugin-for-ableton-fl-studio-logic-pro-how-midi-agent-works-in-2026)
- Browser music-creation Show HNs: Voice Composer (hum to MIDI or Strudel code) and a BeepBox-style sequencer with Strudel and AI arrangement — [HN Voice Composer](https://news.ycombinator.com/item?id=46581431); [HN Showcase sequencer](https://hnshowcase.com/post/47252650/a-browser-based-sequencer-for-rapid-music-prototyping); [Strudel](https://strudel.cc/)

### Inferences
- **Candidate M1: Avoid a plain browser stem splitter.** It is fully commoditized: at least five open-source WebGPU builds, plus Moises, LALAL and DAW-native features.
- **Candidate M2: "Sample-to-project" tool.** Drop a song or loop and get stems, MIDI transcription of each stem, key/BPM detection and chord chart, then export an FL Studio-ready project or MIDI. It would run client-side with WASM/WebGPU, so privacy and zero cost are selling points. Gap: separation is common, but stem-to-MIDI-to-DAW workflows run client-side seemed rare in this search. Difficulty: medium-high (transcription quality). Appeal: broad among beatmakers.
- **Candidate M3: Voice-to-instrument / hum-to-beat on mobile.** This extends Snoozy's voice-cloning experience: hum or beatbox into the phone, get a quantized drum pattern and melody, and export MIDI to FL. Voice Composer shows interest but is a weekend project. Difficulty: medium. Viral potential: good for short-form video demos.
- **Candidate M4: AI "mix feedback" / reference-track coach.** Upload a bounce and get specific mix notes against a reference track. flstudio-mcp's "Mix Doctor" shows demand among power users, but a consumer-facing, DAW-agnostic web version may be open. Difficulty: medium. This is less crowded than separation, but it is hard to give advice that producers trust.
- Logic Pro (Stem Splitter, 2024) and FL Studio (stem separation, FL 2024) reportedly ship native separation. This is from prior knowledge and was not confirmed in this search, but if true it further reduces the value of standalone separation.

### Gaps
- I could not confirm DAW-native stem separation in FL Studio or Logic from search results.
- I found no Reddit r/WeAreTheMusicMakers sentiment data.
- HN point counts for the demucs-rs Show HN and the other music launches were unavailable.

## Which past launches in these niches hit the HN front page or went viral, and why?

### Takeaway
I could not get front-page status or points because HN Algolia was blocked. The verifiable virality is in mainstream press: the Pokémon and Minecraft AI streams were covered by TechCrunch, TechRadar, Dexerto and others. Show HNs in all three niches are frequent, which shows creator interest, but their reach is unverified.

### Cited Findings
- AI Pokémon streams drew mainstream coverage (TechCrunch, TechRadar, Engadget) and a CEO tweet from Sundar Pichai. The hooks were a nostalgic game, transparent reasoning and a model rivalry — [TechRadar](https://techradar.com/computing/artificial-intelligence/im-a-massive-pokemon-fan-and-now-im-obsessed-with-ai-models-like-gemini-and-claude-trying-to-complete-pokemon-red-and-blue); [Benzinga](https://www.benzinga.com/tech/25/04/44892617/sundar-pichai-jokes-about-artificial-pokemon-intelligence-after-gemini-pro-beats-claude-at-classic-gameboy-t)
- The Vals AI Minecraft "potato farming" moment spread as a meme because the model's behavior looked human and emotional — [Dexerto](https://dexerto.com/minecraft/gpt-6-astra-forced-to-play-minecraft-gets-depressed-by-creeper-and-farms-potatoes-for-hours-3409634)
- Show HN posts exist for demucs-rs (Rust/WASM/WebGPU stem separation), StellarSnap, Voice Composer, LLM Skirmish and the browser RTS/poker arenas. Their points are unknown — [HN 47234566](https://news.ycombinator.com/item?id=47234566); [HN StellarSnap](https://hn.svelte.dev/item/44270247); [HN 46581431](https://news.ycombinator.com/item?id=46581431)
- eise.app (browser WASM planetary stacking) launched on Product Hunt and got tech-news coverage — [Product Hunt](https://www.producthunt.com/products/eise-app); [lavx news](https://news.lavx.hu/article/eise-app-brings-planetary-image-stacking-to-the-browser-with-webassembly)

### Inferences
- Recurring hooks across these launches: (1) "runs entirely in your browser / nothing uploaded," a privacy and engineering flex that HN responds to (demucs-rs, eise.app, alokm solver); (2) visible AI reasoning plus a narrative (Pokémon, Minecraft); (3) model-vs-model rivalry; (4) a nostalgic or beloved IP.
- For this builder, the highest expected-virality combination is a G1-style live AI-plays-game arena (agent skills plus spectacle). The best "HN engineering story" options are A1 (offline WASM plate solver library) or A3 (browser stacking with trail removal). M2 or M3 offers broad appeal to producers but less novelty.

### Gaps
- HN front-page status, points and comment counts for every launch listed are unknown. Allowing hn.algolia.com in the network settings would let a follow-up fill this in.
- I found no app-store revenue or download data for the indie astronomy or music tools.
