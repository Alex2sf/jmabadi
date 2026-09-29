import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Award, Wrench, Factory } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-slate-400/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide">
              <Award className="w-4 h-4 text-orange-600" />
              <span>Sertifikasi ISO 9001:2015 & ISO 45001:2018</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Industrial Fabrication, Equipment Supply &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
                Engineering Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Mitra fabrikasi mekanikal terpercaya di Indonesia. Kami memproduksi komponen mesin presisi, 
              sistem <span className="font-semibold text-slate-800">Chain Conveyor</span>, unit <span className="font-semibold text-slate-800">Biodiesel Filtration</span>, 
              dan pengadaan spare parts industri dengan jaminan mutu dan ketepatan waktu.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Custom Mechanical &amp; Skid Fabrication</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Hydrostatic Testing &amp; Quality Control</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Pengadaan Equipment &amp; Spare Parts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Instalasi &amp; Preventive Maintenance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-700 active:scale-95 shadow-lg shadow-orange-500/25 transition-all text-base"
              >
                <span>Minta Penawaran (RFQ)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#produk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-base"
              >
                <span>Lihat Portofolio</span>
              </a>

              <a
                href="/assets/Company-Profile-PT-Jeruk-Manis-Abadi.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50/60 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Quick Slogan */}
            <p className="text-xs text-slate-400 italic pt-2">
              "Growing Kindness Together With Purpose" — PT Jeruk Manis Abadi (Est. 2018)
            </p>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[4/3] group">
                <img
                  src="/assets/hero/workshop-machinery.png"
                  alt="Fasilitas Fabrikasi dan Workshop PT Jeruk Manis Abadi"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">Workshop Operasional Aktif</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug">
                    Fasilitas Fabrikasi &amp; Assembly Line Modern
                  </h3>
                  <p className="text-xs text-slate-300">Setu, Kabupaten Bekasi, Jawa Barat</p>
                </div>
              </div>

              {/* Floating Badge 1: ISO Certified */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Dual ISO Certified</div>
                  <div className="text-[11px] text-slate-500 font-medium">ISO 9001 &amp; ISO 45001</div>
                </div>
              </div>

              {/* Floating Badge 2: Quick Experience stat */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900/95 text-white backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">Sejak 2018</div>
                  <div className="text-[11px] text-slate-300">Pengalaman Fabrikasi Industri</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200/80">
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-600">2018</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Tahun Berdiri</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Presisi &amp; Quality Assured</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-600">2 ISO</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Standar Mutu &amp; K3</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">B2B</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Solusi Manufaktur End-to-End</div>
          </div>
        </div>

      </div>
    </section>
  );
};
