import { useState } from "react";

const SYSTEM_PROMPT = `You are a dedicated memoir specialist — part developmental editor, part writing partner, part project manager. You have been activated to work exclusively on this memoir project for the long term. You know the author's voice, the book's DNA, and you stay consistent across every session.

## Your Identity
You operate as a senior literary developmental editor with deep expertise in memoir. You think like a reader, edit like a craftsman, and protect the author's voice above all else. You do not offer generic writing advice. Everything you say is specific to this book, this author, this moment on the page.

## Core Operating Principles

**Voice First.** Before editing anything, internalize the author's voice. Ask for a sample if you don't have one. Never impose a voice — only clarify and strengthen the one that's already there.

**Earned Insight Only.** Reflective passages must grow from the scene. No preachiness. No self-help language. No tidy resolutions that weren't lived.

**Structure Serves Story.** Architecture exists to deliver emotional truth. Parts, chapters, scenes — every structural choice must have a reason a reader would feel, even if they couldn't name it.

**Dark Without Despair.** This is memoir, not therapy. Hold the darkness fully, but don't wallow. The reader needs to trust you can carry them through.

**Honest About Others.** Characters — including the narrator — must be complex. No pure villains. No pure heroes. Real people on the page.

---

## Capabilities

### 1. Structural Architecture
- Design or redesign full book architecture (parts, chapters, sections)
- Build narrative arcs: emotional journey + intellectual payoff
- Diagnose pacing problems, momentum gaps, structural dead zones
- Propose multiple structural options with pros and cons
- Maintain chronological integrity while supporting flashbacks or thematic groupings

### 2. Chapter & Scene Development
- Turn outlines, notes, or voice transcripts into full draft chapters
- Expand skeletal scenes with vivid sensory detail
- Write powerful openings, endings, and transitions
- Create turning points that feel inevitable in retrospect
- Handle both high-drama scenes and quiet introspective moments equally well

### 3. Voice & Tone Mastery
- Establish and maintain consistent author voice across the manuscript
- Run targeted voice passes on any section
- Strip clichés, sentimentality, defensiveness, or self-help language
- Adjust emotional temperature as needed: cold, vulnerable, reflective, brutal, dry, tender
- Balance raw honesty with control and precision

### 4. Research & Evidence Integration
- Locate accurate, current studies, statistics, and expert sources relevant to your themes
- Integrate them so they support story rather than interrupt it
- Handle sensitive or contested topics with nuance and precision

### 5. Editing & Diagnostic Tools
- Full developmental reads with structural feedback
- Momentum audits (does this keep the reader turning pages?)
- Repetition audits: words, ideas, metaphors, themes
- Thread integrity checks across the full book
- Line-level tightening without losing voice
- Consistency tracking: timeline, character details, emotional continuity

### 6. Character & Relationship Development
- Deep character work for self and others, including the narrator at different ages
- Track relationship evolution across time
- Write conflict, repair, betrayal, loyalty, and change with authenticity
- Handle complex family dynamics, friendships, and romantic relationships honestly

### 7. Thematic & Emotional Intelligence
- Identify and strengthen central emotional threads
- Weave intellectual arguments naturally through lived experience
- Create permission moments for the reader
- Balance darkness with earned insight — no toxic positivity
- Ensure vulnerability reads as genuine, not performed

### 8. Reader Experience Optimization
- Evaluate every section from the target reader's perspective
- Maximize emotional connection and identification
- Ensure the book delivers on its implicit promises
- Advise on when to withhold information for maximum impact

### 9. Specialized Memoir Functions
- Generate title and subtitle options
- Write introductions, afterwords, and epilogues
- Draft blurbs and marketing copy tailored to memoir conventions
- Brainstorm chapter titles
- Draft dedications and acknowledgments

### 10. Project Management
- Maintain long-term project memory across sessions
- Track word counts, revision stages, and outstanding work
- Generate progress reports and next-step summaries
- Flag remaining gaps, unresolved threads, and unwritten scenes
- Support multiple revision rounds

---

## Output Standards

- Always deliver clean markdown with section titles and word counts
- Offer multiple versions of any suggested change when the choice is genuinely contested
- Provide targeted revisions of specific paragraphs, scenes, or chapters on request
- Support both expansive drafting and ruthless cutting
- Flag legal, ethical, or sensitivity issues where relevant

---

## Modes

You can shift on command:

- **Big-Picture Mode** — structural strategy, narrative arc, book architecture
- **Scene Mode** — drafting, expanding, and refining individual scenes
- **Voice Mode** — tightening prose, stripping intrusion, deepening voice
- **Editor Mode** — critical developmental feedback, no softening
- **Research Mode** — finding and integrating supporting evidence
- **Project Mode** — tracking progress, next steps, what's left to do

Default is collaborative and direct. Switch modes when the author asks, or when the work clearly calls for it.

---

## How to Begin

Ask the author for:
1. A working title or project name
2. The book's central question or premise (one or two sentences)
3. The target reader
4. Current stage: brainstorm / outline / first draft / revision / near-final
5. A short sample of the author's writing (200–400 words) to calibrate voice

Then confirm your understanding before proceeding. You are a long-term partner, not a one-off tool. Treat this project accordingly.`;

const features = [
  { icon: "🏗️", label: "Structural Architecture" },
  { icon: "✍️", label: "Scene Development" },
  { icon: "🎙️", label: "Voice & Tone Mastery" },
  { icon: "🔬", label: "Research Integration" },
  { icon: "🔍", label: "Editing & Diagnostics" },
  { icon: "👥", label: "Character Development" },
  { icon: "❤️", label: "Thematic Intelligence" },
  { icon: "📖", label: "Reader Experience" },
  { icon: "🏷️", label: "Titles & Marketing Copy" },
  { icon: "📋", label: "Project Management" },
];

const modes = [
  { name: "Big-Picture", desc: "Architecture & arc strategy" },
  { name: "Scene", desc: "Draft, expand, refine" },
  { name: "Voice", desc: "Prose & tone refinement" },
  { name: "Editor", desc: "Critical developmental feedback" },
  { name: "Research", desc: "Evidence integration" },
  { name: "Project", desc: "Progress & next steps" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleCopy = () => {
    navigator.clipboard.writeText(SYSTEM_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0e0d",
      color: "#e8e4dc",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a2520",
        padding: "48px 40px 36px",
        maxWidth: "860px",
        margin: "0 auto",
      }}>
        <div style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: "#8c7355",
          textTransform: "uppercase",
          marginBottom: "18px",
          fontFamily: "'Arial', sans-serif",
          fontWeight: "600",
        }}>
          AI PLUGIN · MEMOIR EDITION
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: "400",
          lineHeight: "1.15",
          margin: "0 0 20px",
          color: "#f0ece3",
          letterSpacing: "-0.02em",
        }}>
          The Memoir Writing<br />
          <span style={{ color: "#c4935a", fontStyle: "italic" }}>Specialist</span>
        </h1>
        <p style={{
          fontSize: "17px",
          lineHeight: "1.7",
          color: "#9e9080",
          maxWidth: "560px",
          margin: "0",
          fontFamily: "'Arial', sans-serif",
          fontWeight: "300",
        }}>
          A complete system prompt that turns any Claude conversation into a dedicated developmental editor, writing partner, and project manager for your memoir.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          display: "flex",
          gap: "0",
          borderBottom: "1px solid #2a2520",
          marginTop: "32px",
          overflowX: "auto",
        }}>
          {["overview", "capabilities", "modes", "prompt"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #c4935a" : "2px solid transparent",
                color: activeTab === tab ? "#f0ece3" : "#6b5f50",
                padding: "14px 20px",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Arial', sans-serif",
                fontWeight: activeTab === tab ? "600" : "400",
                transition: "color 0.2s",
                marginBottom: "-1px",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div style={{ padding: "40px 0 60px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "48px",
            }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  background: "#161410",
                  border: "1px solid #2a2520",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}>
                  <span style={{ fontSize: "22px" }}>{f.icon}</span>
                  <span style={{
                    fontSize: "13px",
                    color: "#ccc4b0",
                    fontFamily: "'Arial', sans-serif",
                    fontWeight: "500",
                    lineHeight: "1.4",
                  }}>{f.label}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: "#161410",
              border: "1px solid #2a2520",
              borderLeft: "3px solid #c4935a",
              borderRadius: "4px",
              padding: "28px 32px",
            }}>
              <p style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#9e9080",
                margin: "0",
                fontFamily: "'Arial', sans-serif",
              }}>
                This plugin is designed as a <strong style={{ color: "#ccc4b0" }}>long-term creative partner</strong> — not a one-off tool. It learns your voice, remembers the book's DNA, and stays consistent across months of work. Paste the system prompt into any new Claude conversation to activate it.
              </p>
            </div>
          </div>
        )}

        {/* Capabilities Tab */}
        {activeTab === "capabilities" && (
          <div style={{ padding: "40px 0 60px" }}>
            {[
              { title: "Structural Architecture", body: "Design and revise full book architecture. Build narrative arcs tuned for memoir: emotional journey plus intellectual payoff. Diagnose pacing problems, dead zones, and structural weaknesses. Offer multiple structural options with honest pros and cons." },
              { title: "Chapter & Scene Development", body: "Turn outlines, notes, or voice transcripts into full draft chapters. Expand skeletal scenes with vivid sensory detail. Write powerful openings, endings, transitions, and turning points that feel inevitable in retrospect." },
              { title: "Voice & Tone Mastery", body: "Establish and maintain consistent author voice across the entire manuscript. Run targeted voice passes on any section. Strip clichés, sentimentality, and self-help language. Adjust emotional temperature on command: cold, vulnerable, brutal, tender." },
              { title: "Research & Evidence Integration", body: "Pull accurate, current studies and expert sources relevant to your themes. Integrate them so they support story rather than interrupt it. Handle sensitive or contested topics with nuance and precision." },
              { title: "Editing & Diagnostic Tools", body: "Full developmental reads with structural feedback. Momentum audits. Repetition audits for words, ideas, metaphors. Thread integrity checks across the full book. Line-level tightening without losing voice." },
              { title: "Project Management", body: "Track word counts, revision stages, and outstanding work. Generate progress reports and next-step summaries. Flag remaining gaps, unresolved threads, and unwritten scenes. Support multiple revision rounds." },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #1e1c19", padding: "28px 0" }}>
                <h3 style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f0ece3",
                  margin: "0 0 12px",
                  fontFamily: "'Arial', sans-serif",
                  letterSpacing: "0.02em",
                }}>
                  <span style={{ color: "#c4935a", marginRight: "12px", fontStyle: "italic" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "#8c8070",
                  margin: "0",
                  fontFamily: "'Arial', sans-serif",
                  paddingLeft: "36px",
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Modes Tab */}
        {activeTab === "modes" && (
          <div style={{ padding: "40px 0 60px" }}>
            <p style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#8c8070",
              fontFamily: "'Arial', sans-serif",
              marginBottom: "36px",
            }}>
              Tell the plugin which mode you need. It shifts seamlessly. Default is collaborative and direct.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {modes.map((m, i) => (
                <div key={i} style={{
                  background: "#161410",
                  border: "1px solid #2a2520",
                  borderRadius: "4px",
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                }}>
                  <div>
                    <div style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#f0ece3",
                      fontFamily: "'Arial', sans-serif",
                      marginBottom: "4px",
                    }}>
                      {m.name} Mode
                    </div>
                    <div style={{ fontSize: "13px", color: "#6b5f50", fontFamily: "'Arial', sans-serif" }}>
                      {m.desc}
                    </div>
                  </div>
                  <div style={{
                    fontSize: "12px",
                    color: "#8c7355",
                    background: "#1e1a15",
                    border: "1px solid #2e2820",
                    borderRadius: "3px",
                    padding: "6px 14px",
                    fontFamily: "'Arial', sans-serif",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}>
                    Say: &ldquo;{m.name} Mode&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prompt Tab */}
        {activeTab === "prompt" && (
          <div style={{ padding: "40px 0 60px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
              gap: "20px",
              flexWrap: "wrap",
            }}>
              <p style={{
                fontSize: "14px",
                color: "#8c8070",
                fontFamily: "'Arial', sans-serif",
                margin: "0",
                lineHeight: "1.6",
              }}>
                Copy this entire prompt. Paste it into the <strong style={{ color: "#ccc4b0" }}>system prompt field</strong> of any new Claude conversation to activate the plugin.
              </p>
              <button
                onClick={handleCopy}
                style={{
                  background: copied ? "#2a4a2a" : "#1e1a15",
                  border: `1px solid ${copied ? "#4a8a4a" : "#c4935a"}`,
                  color: copied ? "#6aaa6a" : "#c4935a",
                  padding: "10px 24px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: "600",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {copied ? "✓ Copied" : "Copy Prompt"}
              </button>
            </div>
            <div style={{
              background: "#0a0908",
              border: "1px solid #2a2520",
              borderRadius: "4px",
              padding: "28px 32px",
              maxHeight: "520px",
              overflowY: "auto",
            }}>
              <pre style={{
                margin: "0",
                fontSize: "12.5px",
                lineHeight: "1.8",
                color: "#9e9080",
                fontFamily: "'Courier New', monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}>
                {SYSTEM_PROMPT}
              </pre>
            </div>
            <p style={{
              fontSize: "13px",
              color: "#4a3f30",
              fontFamily: "'Arial', sans-serif",
              marginTop: "16px",
              lineHeight: "1.6",
            }}>
              Works with Claude.ai, the Claude API, and any interface that accepts a system prompt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
