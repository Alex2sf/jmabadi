import React from 'react';
import { Building2, Handshake } from 'lucide-react';

export const Clients: React.FC = () => {
  const clients = [
    {
      name: 'PLN (Perusahaan Listrik Negara)',
      logo: '/assets/clients/client-2.jpg',
      category: 'BUMN Energi',
    },
    {
      name: 'PT INTECS TEKNIKATAMA INDUSTRI',
      logo: '/assets/clients/client-5.png',
      category: 'Industrial Engineering',
    },
    {
      name: 'APM',
      logo: '/assets/clients/client-6.png',
      category: 'Automotive & Manufacturing',
    },
    {
      name: 'FSCM Mfg Indonesia',
      logo: '/assets/clients/client-3.jpg',
      category: 'Automotive Component',
    },
    {
      name: 'Railink (Kereta Api Bandara)',
      logo: '/assets/clients/client-8.png',
      category: 'Transportasi & Infrastruktur',
    },
    {
      name: 'PT Wirausaha Daya Optima (MEDO)',
      logo: '/assets/clients/client-4.jpg',
      category: 'Industrial Engineering',
    },
    {
      name: 'UeL',
      logo: '/assets/clients/client-7.png',
      category: 'Engineering & Supply',
    },
  ];

  return (
    <section id="klien" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Klien &amp; Rekanan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dipercaya Perusahaan Terkemuka di Indonesia
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Komitmen kami terhadap mutu dan ketepatan waktu telah terbukti melalui kerja sama dengan berbagai badan usaha milik negara maupun swasta nasional.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] group"
            >
              <div className="w-full h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-[150px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors block">
                  {client.name}
                </span>
                <span className="text-[10px] text-orange-600 font-medium">
                  {client.category}
                </span>
              </div>
            </div>
          ))}

          {/* Call to join */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center min-h-[140px] shadow-md">
            <Building2 className="w-7 h-7 text-white/90 mb-2" />
            <h4 className="font-bold text-sm text-white">Ingin Menjadi Rekanan?</h4>
            <p className="text-[11px] text-orange-100 mt-1">
              Daftarkan vendor list atau hubungi procurement kami
            </p>
            <a
              href="#kontak"
              className="mt-3 px-3.5 py-1.5 bg-white text-orange-600 text-xs font-bold rounded-lg shadow-sm hover:bg-orange-50 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Partnership Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">Siap melayani tender B2B &amp; Pengadaan Berkala:</span> Kami menyediakan kelengkapan dokumen legalitas perusahaan (NIB, SIUP, NPWP, PKP), sertifikat ISO terakreditasi, dan garansi purnajual untuk setiap pengerjaan kontrak fabrikasi.
          </p>
        </div>

      </div>
    </section>
  );
};
