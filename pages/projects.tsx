import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Github,
  Menu,
  X,
  MessageCircle,
  Camera,
  Home,
  Layers,
  Download,
  ArrowLeft,
} from "lucide-react";
import { config } from "../lib/config";

export default function ProjectsPage() {
  const [english, setEnglish] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lang: "es" | "en" = english ? "en" : "es";

  const handleDownloadCV = (href: string) => {
    const filename = href.split("/").pop() || "download.pdf";
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-10 border-b border-[#1d4d63]" style={{ backgroundColor: "#0a2433" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-white">ALE</span>
            <span style={{ color: "#3CA6C0" }}>OSSA</span>
          </Link>

          <div className="flex items-center gap-3 md:hidden">
            <button onClick={() => setEnglish(!english)} className="text-xs font-bold text-white px-2 py-1 rounded border border-[#3CA6C0]">
              {english ? "ES" : "EN"}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white hover:opacity-80 text-sm font-medium">
              {english ? "Home" : "Inicio"}
            </Link>
            <Link href="/projects" className="text-sm font-medium" style={{ color: "#3CA6C0" }}>
              {english ? "Projects" : "Proyectos"}
            </Link>
            <Link href="/#contacto" className="text-white hover:opacity-80 text-sm font-medium">
              {english ? "Contact" : "Contacto"}
            </Link>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[#1d4d63]">
              <a href={config.contacto.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#3CA6C0" }} className="hover:opacity-80 transition-opacity">
                <Linkedin size={18} />
              </a>
              <a href={config.contacto.github} target="_blank" rel="noopener noreferrer" style={{ color: "#3CA6C0" }} className="hover:opacity-80 transition-opacity">
                <Github size={18} />
              </a>
              <button onClick={() => setEnglish(!english)} className="text-xs font-bold text-white px-2 py-1 rounded border border-[#3CA6C0]">
                {english ? "ES" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="md:hidden border-b border-[#1d4d63]" style={{ backgroundColor: "#0a2433" }}>
          <div className="px-4 flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]">
              <Home size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Home" : "Inicio"}
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm border-b border-[#1d4d63]" style={{ color: "#3CA6C0" }}>
              <Layers size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Projects" : "Proyectos"}
            </Link>
            <Link href="/#contacto" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]">
              <MessageCircle size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Contact" : "Contacto"}
            </Link>
            <a href={config.contacto.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]">
              <Linkedin size={16} style={{ color: "#3CA6C0" }} />
              LinkedIn
            </a>
            <a href={config.contacto.github} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]">
              <Github size={16} style={{ color: "#3CA6C0" }} />
              GitHub
            </a>
            <button onClick={() => { handleDownloadCV(config.contacto.hdv_es); setMenuOpen(false); }} className="flex items-center gap-3 py-3 text-white text-sm w-full">
              <Download size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Download CV" : "Descargar HdV"}
            </button>
          </div>
        </div>
      )}

      {/* ── PAGE HEADER ── */}
      <section className="py-8 px-4" style={{ backgroundColor: "#0f2e3d" }}>
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs mb-4 hover:opacity-80 transition-opacity" style={{ color: "#3CA6C0" }}>
            <ArrowLeft size={14} />
            {english ? "Back to home" : "Volver al inicio"}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
            {english ? "All Projects" : "Todos los proyectos"}
          </h1>
          <p className="text-sm text-slate-400">
            {config.proyectos.length} {english ? "projects" : "proyectos"}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-10 px-4 flex-1" style={{ backgroundColor: "#f0f4f5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
            {config.proyectos.map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm flex flex-col${p.estado === "live" ? " border-l-2" : ""}`}
                style={p.estado === "live" ? { borderLeftColor: "#3CA6C0" } : {}}
              >
                {p.preview ? (
                  <div className="h-40 relative">
                    <Image src={p.preview} alt={p.titulo[lang]} fill className="object-cover object-top" />
                  </div>
                ) : (
                  <div className="h-40 flex flex-col items-center justify-center gap-1 bg-slate-100">
                    <Camera size={18} className="text-slate-400" />
                    <span className="text-xs text-slate-400">preview asignable</span>
                  </div>
                )}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{p.titulo[lang]}</h3>
                  <p className="text-xs text-slate-600 mb-3 flex-1">{p.desc[lang]}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">{s}</span>
                    ))}
                  </div>
                  {(p.demo || p.repo) && (
                    <div className="flex gap-2">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1.5 rounded text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#3CA6C0" }}>
                          Demo
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-300 text-slate-600 hover:opacity-80 transition-opacity">
                          Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="py-5 px-4" style={{ backgroundColor: "#0f2e3d" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <a
            href={config.contacto.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-[#1a3a1a] hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <span className="text-xs text-slate-400">© 2026 Alejandro Moscoso Deossa</span>
        </div>
      </div>

    </div>
  );
}
