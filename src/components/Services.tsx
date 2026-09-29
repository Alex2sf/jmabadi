import React from 'react';
import { Hammer, Truck, Cog, Wrench, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'mechanical-fabrication',
      title: 'Mechanical Fabrication',
      category: 'Fabrikasi Mesin & Struktur',
      icon: <Hammer className="w-6 h-6 text-white" />,
      description: 'Layanan fabrikasi mekanikal custom presisi tinggi meliputi pekerjaan struktur baja, pembuatan storage/pressure tank, sistem perpipaan industri (piping), dan unit modular skid.',
      features: [
        'Structural steel engineering & erection',
        'Storage tanks & pressure vessel fabrication',
        'Process piping (Carbon & Stainless Steel)',
        'Custom skid systems & automated chassis',
      ],
    },
    {
      id: 'equipment-supply',
      title: 'Industrial Equipment Supply',
      category: 'Pengadaan Alat Pabrik',
      icon: <Truck className="w-6 h-6 text-white" />,
      description: 'Pengadaan dan distribusi mesin serta instrumen penunjang operasional pabrik terintegrasi dari manufaktur berkualitas standar internasional.',
      features: [
        'Industrial pumps & centrifugal units',
        'Control valves & pneumatic actuators',
        'Filtration vessels & separation systems',
        'Electrical components, motor & control panels',
      ],
    },
    {
      id: 'spare-parts',
      title: 'Spare Parts & Precision Machining',
      category: 'Komponen & Suku Cadang',
      icon: <Cog className="w-6 h-6 text-white" />,
      description: 'Penyediaan dan manufaktur suku cadang mesin industri bermutu tinggi dengan toleransi dimensi mikro, material tahan gesek, dan perlakuan panas (heat treatment).',
      features: [
        'Precision bearings & bush sleeves',
        'Mechanical seals, O-rings & high-temp gaskets',
        'Mesh filters, cartridge & filter elements',
        'Custom flanges, shafts, gears & sprockets',
      ],
    },
    {
      id: 'installation-maintenance',
      title: 'Installation & Maintenance',
      category: 'Pemasangan & Servis Berkala',
      icon: <Wrench className="w-6 h-6 text-white" />,
      description: 'Jasa pemasangan di lokasi (on-site installation), overhaul mesin, pemeliharaan preventif berkala, perbaikan darurat, serta penanganan troubleshooting.',
      features: [
        'On-site machinery installation & commissioning',
        'Preventive maintenance contracts',
        'Vibration analysis & alignment service',
        'Rapid response troubleshooting & overhaul',
      ],
    },
    {
      id: 'testing-qc',
      title: 'Testing & Quality Control',
      category: 'Inspeksi & Sertifikasi Kelayakan',
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      description: 'Rangkaian pengujian ketat dan inspeksi kualitas untuk memastikan keandalan, integritas sambungan las, dan keselamatan kerja sebelum serah terima.',
      features: [
        'Hydrostatic & pneumatic pressure testing',
        'Weld visual inspection & NDT support',
        'Dimensional inspection & reporting',
        'Quality Assurance (QA) certification document',
      ],
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Layanan Unggulan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services Offered &amp; Kapabilitas Teknis
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            PT JMA menyediakan layanan fabrikasi dan engineering menyeluruh didukung tenaga profesional berpengalaman dan standar mutu yang ketat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white to-orange-50/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Feature List */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={`#kontak?service=${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-orange-600 group-hover:text-orange-700"
                >
                  <span>Minta Penawaran Spesifik</span>
                  <div className="w-7 h-7 rounded-full bg-orange-50 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          ))}

          {/* Quick Banner / Additional Service Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-7 text-white flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Kebutuhan Khusus</span>
              <h3 className="text-xl font-bold mt-2 text-white">Butuh Solusi Custom Engineering?</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Kami siap mendiskusikan gambar teknik (CAD/DWG), toleransi material, dan spesifikasi khusus sesuai alur pabrik Anda.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/6282250580331?text=Halo%20Engineering%20PT%20JMA%2C%20saya%20punya%20kebutuhan%20custom%20fabrication%20khusus%20dan%20ingin%20berkonsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white text-sm shadow-md transition-colors"
              >
                Konsultasi dengan Engineer Kami
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
