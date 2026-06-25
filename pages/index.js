import { useState } from "react";

const SYSTEM_PROMPT = `You are a dedicated memoir specialist — part developmental editor, part writing partner, part project manager. You have been activated to work exclusively on this memoir project for the long term.

## Your Identity
You operate as a senior literary developmental editor with deep expertise in memoir. You think like a reader, edit like a craftsman, and protect the author's voice above all else.

## Core Principles
- Voice First: Never impose a voice — only clarify and strengthen the one already there
- Earned Insight Only: No preachiness, no self-help language
- Structure Serves Story: Every structural choice must have a reason a reader would feel
- Dark Without Despair: Hold the darkness fully, but don't wallow
- Honest About Others: No pure villains, no pure heroes

## Capabilities
1. Structural Architecture
2. Chapter and Scene Development  
3. Voice and Tone Mastery
4. Research Integration
5. Editing and Diagnostics
6. Character Development
7. Thematic Intelligence
8. Reader Experience Optimization
9. Titles and Marketing Copy
10. Project Management

## Modes
- Big-Picture Mode: architecture and arc strategy
- Scene Mode: drafting, expanding, refining
- Voice Mode: prose and tone refinement
- Editor Mode: critical developmental feedback
- Research Mode: evidence integration
- Project Mode: progress and next steps

## How to Begin
Ask the author for:
1. A working title or project name
2. The book's central question or premise
3. The target reader
4. Current stage: brainstorm, outline, first draft, revision, or near-final
5. A short writing sample (200-400 words) to calibrate voice`;

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
    <div style={{ minHeight: "100vh", background: "#0f0e0d", color: "#e8e4dc", fontFamily: "Georgia, serif" }}>
      <div style={{ borderBottom: "1px solid #2a2520", padding: "48px 40px 36px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#8c7355", textTransform: "uppercase", marginBottom: "18px", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
          AI PLUGIN · MEMOIR EDITION
        </div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "400", lineHeight: "1.15", margin: "0 0 20px", color: "#f0ece3", letterSpacing: "-0.02em" }}>
          The Memoir Writing<br />
          <span style={{ color: "#c4935a", fontStyle: "italic" }}>Specialist</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#9e9080", maxWidth: "560px", margin: "0", fontFamily: "Arial, sans-serif", fontWeight: "300" }}>
          A complete system prompt that turns any Claude conversation into a dedicated developmental editor, writing partner, and project manager for your memoir.
        </p>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", borderBottom: "1px solid #2a2520", marginTop: "32px", overflowX: "auto" }}>
          {["overview", "capabilities", "modes", "prompt"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: "none", border: "none", borderBottom: activeTab === tab ? "2px solid #c4935a" : "2px solid transparent", color: activeTab === tab ? "#f0ece3" : "#6b5f50", padding: "14px 20px", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "Arial, sans-serif", fontWeight: activeTab === tab ? "600" : "400", marginBottom: "-1px", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div style={{ padding: "40px 0 60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginBottom: "48px" }}>
              {features.map((f, i) => (
                <div key={i} style={{ background: "#161410", border: "1px solid #2a2520", borderRadius: "4px", padding: "20px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "22px" }}>{f.icon}</span>
                  <span style={{ fontSize: "13px", color: "#ccc4b0", fontFamily: "Arial, sans-serif", fontWeight: "500" }}>{f.label}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#161410", border: "1px solid #2a2520", borderLeft: "3px solid #c4935a", borderRadius: "4px", padding: "28px 32px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#9e9080", margin: "0", fontFamily: "Arial, sans-serif" }}>
                Designed as a <strong style={{ color: "#ccc4b0" }}>long-term creative partner</strong> — not a one-off tool. It learns your voice, remembers the book's DNA, and stays consistent across months of work.
              </p>
            </div>
          </div>
        )}

        {activeTab === "capabilities" && (
          <div style={{ padding: "40px 0 60px" }}>
            {[
              { title: "Structural Architecture", body: "Design and revise full book architecture. Build narrative arcs tuned for memoir: emotional journey plus intellectual payoff. Diagnose pacing problems and structural weaknesses." },
              { title: "Chapter & Scene Development", body: "Turn outlines, notes, or voice transcripts into full draft chapters. Expand skeletal scenes with vivid sensory detail. Write powerful openings, endings, and transitions." },
              { title: "Voice & Tone Mastery", body: "Establish and maintain consistent author voice across the manuscript. Strip clichés, sentimentality, and self-help language. Adjust emotional temperature on command." },
              { title: "Research & Evidence Integration", body: "Pull accurate, current studies relevant to your themes. Integrate them so they support story rather than interrupt it. Handle sensitive topics with nuance." },
              { title: "Editing & Diagnostic Tools", body: "Full developmental reads with structural feedback. Momentum audits. Repetition audits. Thread integrity checks across the full book." },
              { title: "Project Management", body: "Track word counts, revision stages, and outstanding work. Generate progress reports and next-step summaries. Flag remaining gaps and unwritten scenes." },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #1e1c19", padding: "28px 0" }}>
                <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#f0ece3", margin: "0 0 12px", fontFamily: "Arial, sans-serif" }}>
                  <span style={{ color: "#c4935a", marginRight: "12px", fontStyle: "italic" }}>{String(i + 1).padStart(2, "0")}</span>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#8c8070", margin: "0", fontFamily: "Arial, sans-serif", paddingLeft: "36px" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "modes" && (
          <div style={{ padding: "40px 0 60px" }}>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#8c8070", fontFamily: "Arial, sans-serif", marginBottom: "36px" }}>
              Tell the plugin which mode you need. Default is collaborative and direct.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {modes.map((m, i) => (
                <div key={i} style={{ background: "#161410", border: "1px solid #2a2520", borderRadius: "4px", padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "600", color: "#f0ece3", fontFamily: "Arial, sans-serif", marginBottom: "4px" }}>{m.name} Mode</div>
                    <div style={{ fontSize: "13px", color: "#6b5f50", fontFamily: "Arial, sans-serif" }}>{m.desc}</div>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8c7355", background: "#1e1a15", border: "1px solid #2e2820", borderRadius: "3px", padding: "6px 14px", fontFamily: "Arial, sans-serif", whiteSpace: "nowrap" }}>
                    Say: "{m.name} Mode"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "prompt" && (
          <div style={{ padding: "40px 0 60px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", gap: "20px", flexWrap: "wrap" }}>
              <p style={{ fontSize: "14px", color: "#8c8070", fontFamily: "Arial, sans-serif", margin: "0", lineHeight: "1.6" }}>
                Copy this prompt and paste it into any new Claude conversation to activate the plugin.
              </p>
              <button onClick={handleCopy} style={{ background: copied ? "#2a4a2a" : "#1e1a15", border: `1px solid ${copied ? "#4a8a4a" : "#c4935a"}`, color: copied ? "#6aaa6a" : "#c4935a", padding: "10px 24px", borderRadius: "3px", cursor: "pointer", fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {copied ? "✓ Copied" : "Copy Prompt"}
              </button>
            </div>
            <div style={{ background: "#0a0908", border: "1px solid #2a2520", borderRadius: "4px", padding: "28px 32px", maxHeight: "520px", overflowY: "auto" }}>
              <pre style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.8", color: "#9e9080", fontFamily: "Courier New, monospace", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {SYSTEM_PROMPT}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
