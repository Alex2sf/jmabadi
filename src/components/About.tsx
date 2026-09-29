import React from 'react';
import { Target, Compass, MapPin, Building, Wrench, Shield, Users, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const missions = [
    'Providing reliable and high-quality fabrication services (Layanan fabrikasi terpercaya & bermutu tinggi).',
    'Continuously improving technical capabilities (Peningkatan kapabilitas teknis secara berkelanjutan).',
    'Building a solid and professional team (Membangun tim yang solid, kompeten, dan profesional).',
    'Supporting the industrial sector with long-lasting solutions (Mendukung sektor industri dengan solusi tahan lama).',
    'Ensuring quality, efficiency, and punctuality in every job (Menjamin kualitas, efisiensi biaya, dan ketepatan waktu).',
  ];

  return (
    <section id="tentang" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Profil Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tentang <span className="text-orange-600">PT. Jeruk Manis Abadi</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Didirikan pada 30 Oktober 2018, kami berkembang pesat menjadi mitra fabrikasi manufaktur dan rekayasa permesinan modern yang mengedepankan presisi tinggi dan komitmen mutu.
          </p>
        </div>

        {/* Story & Background Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Image & Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group">
              <img
                src="/assets/hero/factory-structure.png"
                alt="Fasilitas Pabrik PT Jeruk Manis Abadi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Nilai Perusahaan</span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    "Growing Kindness Together With Purpose"
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tag Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1">
                  <Shield className="w-4 h-4" />
                  <span>K3 &amp; Safety</span>
                </div>
                <p className="text-xs text-slate-600">Penerapan standar keselamatan kerja ketat ISO 45001.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1">
                  <Users className="w-4 h-4" />
                  <span>Tim Ahli</span>
                </div>
                <p className="text-xs text-slate-600">Didukung insinyur dan teknisi berpengalaman.</p>
              </div>
            </div>
          </div>

          {/* Narrative & Locations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                <strong>PT Jeruk Manis Abadi (PT JMA)</strong> didirikan sebagai respons atas tingginya kebutuhan sektor industri manufaktur di Indonesia terhadap peralatan produksi yang berdaya tahan tinggi, presisi, dan efisien.
              </p>
              <p>
                Berbekal workshop mandiri berkapasitas memadai dan jajaran tenaga ahli fabrikasi mekanikal, kami melayani proyek dari tahap perancangan teknis (engineering design), fabrikasi skid &amp; perpipaan, perakitan mesin, pengujian kualitas (QC &amp; hydrostatic test), hingga instalasi dan perawatan purnajual.
              </p>
            </div>

            {/* Dua Lokasi Strategis */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Head Office */}
              <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-200/80 relative hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700">Head Office</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">18 Office Park, Jakarta Selatan</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      10th Floor Unit A, Jl. TB Simatupang No. 18, Pasar Minggu, Jakarta Selatan, DKI Jakarta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Workshop */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 relative hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Main Workshop</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">Setu, Kabupaten Bekasi</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      KP. Cinyosog RT 001 RW 005, Ds. Burangkeng, Kec. Setu, Kab. Bekasi, Jawa Barat 17320.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group"
              >
                <span>Kunjungi workshop kami atau jadwalkan meeting teknis</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          {/* Vision */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-600/30 border border-orange-500/40 text-orange-400 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Visi Perusahaan</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white leading-snug">
                Menjadi Perusahaan Fabrikasi Paling Terpercaya di Indonesia
              </h3>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                "To become the most trusted fabrication company in Indonesia by providing high-quality machine components, industrial equipment, conveyor systems, and biodiesel filtration units through reliable processes and skilled human resources."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
              <span>PT Jeruk Manis Abadi</span>
              <span>Vision 2026 &amp; Beyond</span>
            </div>
          </div>

          {/* Mission */}
          <div className="md:col-span-7 bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Misi Perusahaan</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-slate-900 leading-snug">
                Komitmen Mutu &amp; Layanan Berkelanjutan
              </h3>
              <div className="mt-5 space-y-3.5">
                {missions.map((mission, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{mission}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Standar Operasional mengacu pada ISO 9001:2015 &amp; ISO 45001:2018
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
