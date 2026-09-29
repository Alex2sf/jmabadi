import React from 'react';
import { ArrowUp, Globe, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/logo-flame.png"
                alt="PT Jeruk Manis Abadi Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  PT. JERUK MANIS ABADI
                </span>
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider block">
                  Fabrication &amp; Engineering Solution
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Perusahaan spesialis fabrikasi mekanikal, rekayasa mesin industri, perakitan sistem conveyor, bejana filtrasi fluida, serta pengadaan suku cadang mesin presisi berstandar ISO 9001 &amp; ISO 45001.
            </p>

            <div className="pt-2">
              <span className="text-xs text-orange-400 font-semibold italic">
                "Growing Kindness Together With Purpose"
              </span>
            </div>

            {/* Social links with crisp SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/jerukmanisabadi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:border-transparent transition-all"
                title="Instagram @jerukmanisabadi"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/jeruk-manis-abadi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
                title="LinkedIn Jeruk Manis Abadi"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Website */}
              <a
                href="https://jmabadi.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-700 transition-colors"
                title="Website Resmi jmabadi.id"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-orange-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-orange-400 transition-colors">Tentang Perusahaan</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">Layanan Fabrikasi</a>
              </li>
              <li>
                <a href="#produk" className="hover:text-orange-400 transition-colors">Katalog &amp; Portofolio</a>
              </li>
              <li>
                <a href="#sertifikasi" className="hover:text-orange-400 transition-colors">Sertifikasi ISO</a>
              </li>
              <li>
                <a href="#klien" className="hover:text-orange-400 transition-colors">Klien Industri</a>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Kapabilitas Teknis
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Mechanical &amp; Skid Fabrication</li>
              <li>Chain Conveyor System</li>
              <li>Industrial Filtration Unit</li>
              <li>Spare Parts &amp; CNC Machining</li>
              <li>Equipment &amp; Pump Supply</li>
              <li>Testing &amp; Hydrostatic QC</li>
            </ul>
          </div>

          {/* Kontak Cepat */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Informasi Kontak
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Setu, Kab. Bekasi &amp; TB Simatupang, Jakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+62 8225-0580-331</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>sales@JMabadi.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/assets/Company-Profile-PT-Jeruk-Manis-Abadi.pdf"
                download
                className="inline-block text-xs font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-4"
              >
                Unduh Profil Perusahaan (PDF)
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PT. JERUK MANIS ABADI. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 &amp; ISO 45001:2018 Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-orange-600 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Kembali ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
