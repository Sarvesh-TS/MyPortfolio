"use client"
import { projects } from "@/lib/portfolio-data"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { ExplorerIcon } from "@/components/win/WinIcons"


const colors = ["#6366f1", "#818cf8", "#a78bfa", "#f472b6", "#10b981", "#f59e0b", "#14b8a6", "#ec4899", "#8b5cf6", "#3b82f6", "#06b6d4"]

const PROJECTS = projects.map((p, i) => ({
  id: p.id,
  name: p.title,
  type: p?.tags?.[0] || "Website",
  url: p.url || `https://${p.slug}.com`,
  desc: p.description,
  stack: p.tech,
  color: colors[i % colors.length],
  size: (Math.random() * 5 + 1).toFixed(1) + " MB",
  modified: p.year || "2024"
}))


export function FileExplorer() {
  const [selected, setSelected] = useState(PROJECTS[0])
  const [view, setView] = useState<"icons"|"list">("icons")

  return (
    <div style={{ display:"flex", height:"100%", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      {/* Sidebar */}
      <div style={{ width:200, borderRight:"1px solid rgba(255,255,255,0.06)", padding:"12px 8px", display:"flex", flexDirection:"column", gap:2, flexShrink:0 }}>
        {["Quick access","Desktop","Downloads","Documents"].map(l => (
          <div key={l} style={{ padding:"6px 12px", borderRadius:4, fontSize:13, color:"var(--win-text-2)", cursor:"default" }}>{l}</div>
        ))}
        <div style={{ padding:"6px 12px", borderRadius:4, fontSize:13, color:"var(--win-accent)", background:"rgba(0,103,192,0.15)", fontWeight:600 }}>📁 My Projects</div>
        <div style={{ height:1, background:"rgba(255,255,255,0.06)", margin:"8px 0" }} />
        {PROJECTS.map(p => (
          <div style={{ padding:"6px 12px", borderRadius:4, fontSize:12, color:"var(--win-text-2)", cursor:"default", display:"flex", alignItems:"center", gap:6 }}><ExplorerIcon size={14} /> {p.name}</div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        {/* Toolbar */}
        <div style={{ padding:"8px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ flex:1, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:4, padding:"4px 12px", fontSize:12, color:"var(--win-text-2)" }}>
            📁 C:\Users\Sarvesh\Projects
          </div>
          <button onClick={()=>setView("icons")} className="btn-subtle" style={{ padding:"4px 10px", fontSize:12, background: view==="icons" ? "rgba(255,255,255,0.1)" : undefined }}>⊞</button>
          <button onClick={()=>setView("list")}  className="btn-subtle" style={{ padding:"4px 10px", fontSize:12, background: view==="list"  ? "rgba(255,255,255,0.1)" : undefined }}>☰</button>
        </div>

        <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
          {/* Files area */}
          <div style={{ flex:1, padding:16, overflowY:"auto" }}>
            {view==="icons" ? (
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {PROJECTS.map(p => (
                  <div
                    key={p.id}
                    onClick={()=>setSelected(p)}
                    style={{
                      width:90, padding:"10px 6px", borderRadius:6, cursor:"pointer", textAlign:"center",
                      background: selected.id===p.id ? "rgba(0,103,192,0.2)" : "transparent",
                      border: selected.id===p.id ? "1px solid rgba(96,205,255,0.4)" : "1px solid transparent",
                      transition:"all 120ms"
                    }}
                  >
                    <div style={{ fontSize:36, marginBottom:4 }}><ExplorerIcon size={40} /></div>
                    <div style={{ fontSize:11, color:"var(--win-text)", lineHeight:1.3, wordBreak:"break-word" }}>{p.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                <thead>
                  <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                    {["Name","Type","Modified","Size"].map(h => (
                      <th key={h} style={{ padding:"6px 12px", textAlign:"left", color:"var(--win-text-2)", fontWeight:400 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROJECTS.map(p => (
                    <tr
                      key={p.id}
                      onClick={()=>setSelected(p)}
                      style={{
                        background: selected.id===p.id ? "rgba(0,103,192,0.15)" : "transparent",
                        cursor:"pointer",
                      }}
                    >
                      <td style={{ padding:"7px 12px", color:"var(--win-text)" }}><span style={{display:'inline-flex',alignItems:'center',gap:6}}><ExplorerIcon size={16} /> {p.name}</span></td>
                      <td style={{ padding:"7px 12px", color:"var(--win-text-2)" }}>{p.type}</td>
                      <td style={{ padding:"7px 12px", color:"var(--win-text-2)" }}>{p.modified}</td>
                      <td style={{ padding:"7px 12px", color:"var(--win-text-2)" }}>{p.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Detail panel */}
          <div style={{ width:240, borderLeft:"1px solid rgba(255,255,255,0.06)", padding:16, overflowY:"auto" }}>
            <div style={{ fontSize:32, marginBottom:12 }}><ExplorerIcon size={44} /></div>
            <div style={{ fontSize:14, fontWeight:600, color:"var(--win-text)", marginBottom:6 }}>{selected.name}</div>
            <div style={{ fontSize:11, padding:"2px 8px", borderRadius:99, background:`${selected.color}20`, color:selected.color, display:"inline-block", marginBottom:12 }}>{selected.type}</div>
            <div style={{ fontSize:12, color:"var(--win-text-2)", lineHeight:1.7, marginBottom:16 }}>{selected.desc}</div>
            <div style={{ marginBottom:12 }}>
              {selected.stack.map(s => (
                <span key={s} style={{ fontSize:11, padding:"2px 8px", marginRight:4, marginBottom:4, display:"inline-block", borderRadius:4, background:"rgba(255,255,255,0.06)", color:"var(--win-text-2)" }}>{s}</span>
              ))}
            </div>
            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ display:"flex", alignItems:"center", gap:6, textDecoration:"none", width:"100%", justifyContent:"center" }}
            >
              View Live <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Status bar */}
        <div style={{ padding:"4px 16px", borderTop:"1px solid rgba(255,255,255,0.06)", fontSize:11, color:"var(--win-text-muted)", display:"flex", gap:16 }}>
          <span>{PROJECTS.length} items</span>
          <span>1 item selected · {selected.size}</span>
        </div>
      </div>
    </div>
  )
}
