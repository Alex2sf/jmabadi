import React, { useState, useEffect } from 'react';
import { Menu, X, Download, MessageSquare, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#produk' },
    { name: 'Sertifikasi', href: '#sertifikasi' },
    { name: 'Klien', href: '#klien' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <img
              src="/assets/logo/logo-flame.png"
              alt="PT Jeruk Manis Abadi Flame Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                PT. JERUK MANIS ABADI
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-orange-600 tracking-wider uppercase">
                Fabrication & Engineering Solution
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/assets/Company-Profile-PT-Jeruk-Manis-Abadi.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300"
              title="Download Company Profile (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Katalog PDF</span>
            </a>

            <a
              href="https://wa.me/6282250580331?text=Halo%20PT%20Jeruk%20Manis%20Abadi%2C%20saya%20ingin%20konsultasi%20dan%20meminta%20penawaran%20harga%20(RFQ)%20untuk%20kebutuhan%20industri."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:scale-95 shadow-md shadow-orange-500/20 rounded-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Minta Penawaran</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:text-orange-600 hover:bg-orange-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="/assets/Company-Profile-PT-Jeruk-Manis-Abadi.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <Download className="w-4 h-4" />
              Download Company Profile (PDF)
            </a>
            <a
              href="https://wa.me/6282250580331?text=Halo%20PT%20Jeruk%20Manis%20Abadi%2C%20saya%20ingin%20meminta%20penawaran%20harga%20(RFQ)."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              Hubungi Sales WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
