import { useState } from "react";
import Image from "next/image";
import {
  Linkedin,
  Github,
  Menu,
  X,
  FileText,
  MessageCircle,
  Camera,
  MapPin,
  Home,
  Layers,
  Download,
} from "lucide-react";

import Link from "next/link";
import { config, badgeColors } from "../lib/config";

export default function HomePage() {
  const [english, setEnglish] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

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

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="min-h-screen flex flex-col">

      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-10 border-b border-[#1d4d63]"
        style={{ backgroundColor: "#0a2433" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-white">ALE</span>
            <span style={{ color: "#3CA6C0" }}>OSSA</span>
          </Link>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setEnglish(!english)}
              className="text-xs font-bold text-white px-2 py-1 rounded border border-[#3CA6C0]"
              aria-label={english ? "Cambiar a español" : "Switch to English"}
            >
              {english ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop: links + icons + lang toggle */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-white hover:opacity-80 text-sm font-medium"
            >
              {english ? "Home" : "Inicio"}
            </a>
            <a
              href="#proyectos"
              onClick={(e) => { e.preventDefault(); scrollToId("proyectos"); }}
              className="text-white hover:opacity-80 text-sm font-medium"
            >
              {english ? "Projects" : "Proyectos"}
            </a>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollToId("contacto"); }}
              className="text-white hover:opacity-80 text-sm font-medium"
            >
              {english ? "Contact" : "Contacto"}
            </a>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[#1d4d63]">
              <a
                href={config.contacto.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3CA6C0" }}
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={config.contacto.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3CA6C0" }}
                className="hover:opacity-80 transition-opacity"
              >
                <Github size={18} />
              </a>
              <button
                onClick={() => setEnglish(!english)}
                className="text-xs font-bold text-white px-2 py-1 rounded border border-[#3CA6C0]"
                aria-label={english ? "Cambiar a español" : "Switch to English"}
              >
                {english ? "ES" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div
          className="md:hidden border-b border-[#1d4d63]"
          style={{ backgroundColor: "#0a2433" }}
        >
          <div className="px-4 flex flex-col">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]"
            >
              <Home size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Home" : "Inicio"}
            </a>
            <a
              href="#proyectos"
              onClick={(e) => { e.preventDefault(); scrollToId("proyectos"); }}
              className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]"
            >
              <Layers size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Projects" : "Proyectos"}
            </a>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollToId("contacto"); }}
              className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]"
            >
              <MessageCircle size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Contact" : "Contacto"}
            </a>
            <a
              href={config.contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]"
            >
              <Linkedin size={16} style={{ color: "#3CA6C0" }} />
              LinkedIn
            </a>
            <a
              href={config.contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-white text-sm border-b border-[#1d4d63]"
            >
              <Github size={16} style={{ color: "#3CA6C0" }} />
              GitHub
            </a>
            <button
              onClick={() => { handleDownloadCV(config.contacto.hdv_es); setMenuOpen(false); }}
              className="flex items-center gap-3 py-3 text-white text-sm w-full"
            >
              <Download size={16} style={{ color: "#3CA6C0" }} />
              {english ? "Download CV" : "Descargar HdV"}
            </button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="py-10 px-4" style={{ backgroundColor: "#0f2e3d" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Photo */}
          <div className="flex-shrink-0">
            {imgError ? (
              <div
                className="w-16 h-16 md:w-40 md:h-40 rounded-full flex items-center justify-center text-white font-bold text-lg border-2"
                style={{ borderColor: "#3CA6C0", backgroundColor: "#123546" }}
              >
                AM
              </div>
            ) : (
              <div
                className="w-16 h-16 md:w-40 md:h-40 rounded-full overflow-hidden border-2"
                style={{ borderColor: "#3CA6C0" }}
              >
                <Image
                  src="/profile.png"
                  alt="Alejandro Moscoso Deossa"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
              style={{ backgroundColor: "#1d4d63", color: "#3CA6C0" }}
            >
              {config.cargo}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Alejandro Moscoso Deossa
            </h1>
            <p className="text-sm text-slate-300 mb-5 text-justify">
              {config.bio[lang]}
            </p>
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <a
                href="#proyectos"
                onClick={(e) => { e.preventDefault(); scrollToId("proyectos"); }}
                className="w-full md:w-auto text-center px-5 py-2.5 rounded-lg font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#3CA6C0" }}
              >
                {english ? "View Projects" : "Ver proyectos"}
              </a>
              <button
                onClick={() => handleDownloadCV(english ? config.contacto.cv_en : config.contacto.hdv_es)}
                className="w-full md:w-auto px-5 py-2.5 rounded-lg font-semibold text-sm border hover:opacity-90 transition-opacity"
                style={{ borderColor: "#3CA6C0", color: "#3CA6C0" }}
              >
                {english ? "Download CV" : "Descargar HdV"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK STRIP ── */}
      <section className="py-5 px-4" style={{ backgroundColor: "#0a2433" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-semibold mr-2" style={{ color: "#3CA6C0" }}>
            Stack
          </span>
          {config.stack.map((sk) => (
            <span
              key={sk.label}
              className={`text-xs px-2 py-1 rounded font-medium ${badgeColors[sk.color]}`}
            >
                {sk.label}
              </span>
            ))}
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="py-10 px-4" style={{ backgroundColor: "#f0f4f5" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold mb-6 text-slate-500">
            {english ? "Projects" : "Proyectos"}
          </p>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
            {config.proyectos.filter((p) => p.destacado).map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm flex flex-col${
                  p.estado === "live" ? " border-l-2" : ""
                }`}
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
                      <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                  {(p.demo || p.repo) && (
                    <div className="flex gap-2">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: "#3CA6C0" }}
                        >
                          Demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-300 text-slate-600 hover:opacity-80 transition-opacity"
                        >
                          Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border hover:opacity-90 transition-opacity"
              style={{ borderColor: "#3CA6C0", color: "#3CA6C0" }}
            >
              {english ? "View all projects →" : "Ver todos los proyectos →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contacto" className="py-10 px-4" style={{ backgroundColor: "#0f2e3d" }}>
        <div className="max-w-5xl mx-auto">

          <h3 className="text-xl font-medium text-white mb-3">
            {english ? "Let's Connect" : "Conectemos"}
          </h3>

          {/* Mobile: 2×2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <a
              href={config.contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-medium text-white bg-[#1a3a1a] hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={config.contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-medium text-white bg-[#0a1e38] hover:opacity-90 transition-opacity"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <button
              onClick={() => handleDownloadCV(config.contacto.hdv_es)}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-medium text-white bg-[#1e1038] hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              HdV Español
            </button>
            <button
              onClick={() => handleDownloadCV(config.contacto.cv_en)}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-medium text-white bg-[#2a1a08] hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              CV English
            </button>
          </div>

          {/* Desktop: single row + location */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={config.contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#1a3a1a] hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={config.contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#0a1e38] hover:opacity-90 transition-opacity"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <button
              onClick={() => handleDownloadCV(config.contacto.hdv_es)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#1e1038] hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              HdV Español
            </button>
            <button
              onClick={() => handleDownloadCV(config.contacto.cv_en)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#2a1a08] hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              CV English
            </button>
            <div className="ml-auto flex items-center gap-2 text-slate-400 text-xs">
              <MapPin size={14} />
              Medellín, Colombia
            </div>
          </div>
        </div>
      </footer>

      {/* ── MINI FOOTER ── */}
      <div
        className="py-3 text-center text-xs text-slate-400"
        style={{ backgroundColor: "#0a2433" }}
      >
        © 2026 Alejandro Moscoso Deossa
      </div>

    </div>
  );
}
