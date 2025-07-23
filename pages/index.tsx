import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Linkedin, Github, Mail, Phone, MapPin, FileText, User } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [english, setEnglish] = useState(false);
  const router = useRouter();

  // Paleta azul petróleo
  const petrolColors = {
    dark: '#123546',
    accent: '#3CA6C0',
    light: '#E1F0F5'
  };

  const handleDownloadCV = () => {
    const filename = english ? "CV_AMD.pdf" : "HdV_AMD.pdf";
    const link = document.createElement("a");
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Superior con redes sociales */}
      <nav 
        className="border-b sticky top-0 z-10 shadow-sm"
        style={{ backgroundColor: petrolColors.dark }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
              <Image
                src="/profile.png"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div> */}
            <Link href="/">
              <h1 className="text-lg font-medium text-white">
                Alejandro Moscoso Deossa
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Redes sociales en el navbar */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/alejomd17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: petrolColors.accent }}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/alejomd17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: petrolColors.accent }}
              >
                <Github size={20} />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-white hover:text-slate-300 font-medium"
              >
                {english ? "Home" : "Inicio"}
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-slate-300 font-medium"
              >
                {english ? "About" : "Acerca de mí"}
              </Link>
              {/* <Link 
                href="/projects" 
                className="text-white hover:text-slate-300 font-medium"
              >
                {english ? "Projects" : "Proyectos"}
              </Link> */}
              <div className="relative group">
                <span className="text-white hover:text-slate-300 font-medium cursor-pointer">
                  {english ? "Projects" : "Proyectos"}
                </span>

                {/* Submenú visible al hacer hover en el grupo */}
                <div className="absolute hidden group-hover:block bg-slate-800 text-white mt-2 rounded shadow-lg z-50 min-w-[200px]">
                  <ul className="py-2 px-4 space-y-2 text-sm">
                    <li>
                      <a 
                        href="/amortization" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:text-slate-300"
                      >
                        {english ? "Amortization Calculator" : "Amortización de Crédito"}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/properties" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:text-slate-300"
                      >
                        {english ? "Properties Analyzer" : "Analizador de Propiedades"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <button 
                onClick={() => setEnglish(!english)}
                className="p-1.5 text-white hover:bg-slate-700 rounded-full"
                aria-label={english ? "Switch to Spanish" : "Cambiar a español"}
              >
                {english ? "ES" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Primera sección (fondo claro) */}
      <div className="bg-slate-50 flex-grow">
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Foto de perfil */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-slate-200 shadow-md">
              <Image
                src="/profile.png"
                alt={english ? "Profile photo" : "Foto de perfil"}
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Texto de presentación */}
            <div className="flex-1">
              <div className="prose text-slate-700 space-y-4 mb-6">
                {english ? (
                  <>
                    <p>
                      <strong>Data Scientist</strong> specializing in <strong>Machine Learning</strong>, <strong>AI solutions</strong>, and <strong>data-driven decision making</strong>. I transform complex datasets into actionable insights through advanced analytics, predictive modeling, and innovative data visualization techniques.
                    </p>
                    <p>
                      With expertise spanning <strong>data engineering</strong>, <strong>generative AI</strong>, and <strong>statistical analysis</strong>, I architect intelligent systems that bridge business challenges with technical solutions. Passionate about building scalable models that drive innovation and measurable business impact.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Científico de Datos</strong> especializado en <strong>Machine Learning</strong>, <strong>soluciones de IA</strong> y <strong>toma de decisiones basada en datos</strong>. Transformo conjuntos de datos complejos en información accionable mediante análisis avanzados, modelos predictivos y técnicas innovadoras de visualización.
                    </p>
                    <p>
                      Con experiencia en <strong>ingeniería de datos</strong>, <strong>IA generativa</strong> y <strong>análisis estadístico</strong>, diseño sistemas inteligentes que conectan desafíos empresariales con soluciones técnicas. Apasionado por construir modelos escalables que impulsen innovación e impacto empresarial medible.
                    </p>
                  </>
                )}
              </div>
              
              {/* Botones */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link 
                  href="/about" 
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <User size={16} />
                  {english ? "About Me" : "Acerca de mí"}
                </Link>
                
                <button 
                  onClick={handleDownloadCV}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <FileText size={16} />
                  {english ? "Download CV" : "Descargar HdV"}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Segunda sección (fondo oscuro) */}
      <div 
        className="py-12"
        style={{ backgroundColor: petrolColors.dark }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-medium text-white mb-6">
            {english ? "Let's Connect" : "Conectemos"}
          </h3>
          
          <p className="text-slate-300 mb-8">
            {english ? 
              "Ready to discuss data science opportunities or collaborate on exciting projects?" : 
              "¿Listo para hablar sobre oportunidades en ciencia de datos o colaborar en proyectos interesantes?"}
          </p>
          
          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-white">
              <Mail size={20} style={{ color: petrolColors.accent }} />
              <a href="mailto:alejo-mdm@hotmail.com" className="hover:underline">alejo-mdm@hotmail.com</a>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <Phone size={20} style={{ color: petrolColors.accent }} />
              <a href="https://wa.me/573122396942" target="_blank" rel="noopener" className="hover:underline">
                +57 312 2396942
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <MapPin size={20} style={{ color: petrolColors.accent }} />
              <span>Medellín, Colombia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer simple */}
      <footer 
        className="py-4"
        style={{ backgroundColor: petrolColors.dark }}
      >
        <div className="container mx-auto px-4 text-center text-slate-300 text-sm">
          © {new Date().getFullYear()} Alejandro Moscoso Deossa
        </div>
      </footer>
    </div>
  );
}