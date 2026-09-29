import React, { useState } from 'react';
import { Eye, X, ZoomIn, CheckCircle } from 'lucide-react';

interface ProjectItem {
  id: string;
  category: 'conveyor' | 'filtration' | 'sparepart';
  categoryLabel: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specs: string[];
}

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'conveyor' | 'filtration' | 'sparepart'>('all');
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    // Conveyor
    {
      id: 'conveyor-1',
      category: 'conveyor',
      categoryLabel: 'Chain Conveyor',
      title: 'Automated Industrial Conveyor Line',
      subtitle: 'Sistem Konveyor Pabrik dengan Panel Kontrol Terintegrasi',
      image: '/assets/products/conveyor-1.jpg',
      description: 'Lini konveyor otomatis untuk transfer komponen dengan kecepatan variabel dan sistem kontrol elektrik terintegrasi untuk efisiensi produksi manufaktur.',
      specs: ['Heavy-duty chain drive', 'Variable speed inverter panel', 'Emergency stop mechanism', 'Pemasangan on-site di pabrik klien'],
    },
    {
      id: 'conveyor-2',
      category: 'conveyor',
      categoryLabel: 'Chain Conveyor',
      title: 'Overhead Assembly Chain System',
      subtitle: 'Sistem Konveyor Struktur Gantung untuk Fasilitas Perakitan',
      image: '/assets/products/conveyor-2.jpg',
      description: 'Sistem transfer gantung berkapasitas beban tinggi yang menghemat ruang lantai pabrik, cocok untuk perakitan komponen bertahap.',
      specs: ['Struktur baja profil kokoh', 'Precision roller chain', 'Anti-sway safety guides', 'Standar operasional keselamatan tinggi'],
    },
    {
      id: 'conveyor-3',
      category: 'conveyor',
      categoryLabel: 'Chain Conveyor',
      title: 'Inclined Hopper & Feeder Conveyor',
      subtitle: 'Unit Konveyor Kemiringan Tinggi dengan Hopper Masukan',
      image: '/assets/products/conveyor-3.jpg',
      description: 'Mesin pengangkut material curah dan komponen kecil ke mesin pemrosesan tingkat lebih tinggi dengan desain anti-tumpah.',
      specs: ['Custom feed hopper', 'Gear motor torsi tinggi', 'Perawatan mudah & suku cadang lokal', 'Cat tahan korosi industri'],
    },
    {
      id: 'conveyor-4',
      category: 'conveyor',
      categoryLabel: 'Chain Conveyor',
      title: 'Long Stainless Steel Slat Table Conveyor',
      subtitle: 'Meja Konveyor Slat Stainless Steel Panjang',
      image: '/assets/products/conveyor-4.jpg',
      description: 'Konveyor meja datar berbahan stainless steel higienis dan tahan karat untuk inspeksi, penyortiran, dan pengemasan batch.',
      specs: ['Food-grade / chemical grade SS plate', 'Rangka profil presisi', 'Kecepatan aliran stabil', 'Penyangga dapat diatur ketinggiannya'],
    },

    // Filtration
    {
      id: 'filtration-1',
      category: 'filtration',
      categoryLabel: 'Filtration System',
      title: 'Dual Vessel Biodiesel Filter Skid',
      subtitle: 'Unit Skid Filtrasi Cairan Ganda untuk Industri Biodiesel',
      image: '/assets/products/filtration-1.jpg',
      description: 'Unit penyaring presisi tinggi dengan sistem duplex vessel yang memungkinkan penggantian filter cartridge tanpa menghentikan aliran proses produksi.',
      specs: ['Duplex vessel continuous filtration', 'Pressure differential indicator', 'Skid mounting kokoh', 'Standar fabrikasi bejana tekan'],
    },
    {
      id: 'filtration-2',
      category: 'filtration',
      categoryLabel: 'Filtration System',
      title: 'Flammable Liquid Filtration Station',
      subtitle: 'Stasiun Filtrasi Cairan Mudah Terbakar dengan Standar Keamanan',
      image: '/assets/products/filtration-2.jpg',
      description: 'Sistem bejana filtrasi vertikal dengan sensor tekanan, katup pengaman, dan sertifikasi penanganan fluida mudah terbakar (flammable liquid).',
      specs: ['High-pressure rating', 'Danger flammable compliant', 'Grounding & anti-static safe', 'Pipa koneksi flange ASME/JIS'],
    },
    {
      id: 'filtration-3',
      category: 'filtration',
      categoryLabel: 'Filtration System',
      title: 'High-Pressure Hydraulic Filter Unit',
      subtitle: 'Bejana Filtrasi Tekanan Tinggi dengan Manifold',
      image: '/assets/products/filtration-3.jpg',
      description: 'Bejana filtrasi bertekanan tinggi dengan perpipaan manifold khusus, dirancang untuk menyaring kotoran mikro pada sistem hidrolik dan pelumas industri.',
      specs: ['Micron rating filtration mesh', 'Quick-opening cover mechanism', 'Telah lulus uji Hydrostatic Test', 'Koneksi pipa fleksibel tekanan tinggi'],
    },
    {
      id: 'filtration-4',
      category: 'filtration',
      categoryLabel: 'Filtration System',
      title: 'Mobile Industrial Filter Cart',
      subtitle: 'Troli Filtrasi Portabel dengan Pompa Listrik Terpadu',
      image: '/assets/products/filtration-4.jpg',
      description: 'Unit filtrasi mobile beroda dengan pompa motor terintegrasi untuk pembersihan oli/solar dan transfer fluida antar tangki di lapangan.',
      specs: ['Mobile cart dengan roda heavy-duty', 'Integrated electric suction pump', 'Bisa dipindah ke berbagai titik workshop', 'Operasional plug & play'],
    },

    // Spare Parts
    {
      id: 'sparepart-1',
      category: 'sparepart',
      categoryLabel: 'Precision Spare Parts',
      title: 'Precision Machined Threaded Shafts & Pins',
      subtitle: 'Poros & Pin Ulir Presisi CNC dengan Lapisan Pelindung',
      image: '/assets/products/sparepart-1.jpg',
      description: 'Komponen poros mekanikal dengan toleransi dimensi sangat ketat (micron tolerance), diolah dengan mesin bubut CNC dan proses finishing anti-korosi.',
      specs: ['Bahan baja paduan berkualitas tinggi', 'Proses bubut & grinding CNC', 'Toleransi presisi tinggi', 'Finishing pelapisan permukaan'],
    },
    {
      id: 'sparepart-2',
      category: 'sparepart',
      categoryLabel: 'Precision Spare Parts',
      title: 'Heavy-Duty Rubber Cushioned Mounting Clamps',
      subtitle: 'Klem Penjepit Pipa & Kabel dengan Bantalan Karet Keras',
      image: '/assets/products/sparepart-2.jpg',
      description: 'Klem penjepit getaran untuk pipa oli, bahan bakar, dan instalasi kabel elektrik berat pada rangka mesin dan alat berat.',
      specs: ['Tahan getaran & suhu tinggi', 'Bantalan karet peredam keausan', 'Baut pengunci anti-lepas', 'Cocok untuk aplikasi industri berat'],
    },
    {
      id: 'sparepart-3',
      category: 'sparepart',
      categoryLabel: 'Precision Spare Parts',
      title: 'CNC Machined Hydraulic Manifold Blocks',
      subtitle: 'Blok Manifold Hidrolik dengan Lubang Presisi Bertingkat',
      image: '/assets/products/sparepart-3.jpg',
      description: 'Blok distribusi aliran hidrolik/pneumatik hasil milling CNC berkecepatan tinggi dengan saluran internal tanpa kebocoran.',
      specs: ['CNC multi-axis milling', 'Bore porting standar industri', 'Zero burr & clean internal passages', 'Uji uji tekanan hidrolik'],
    },
    {
      id: 'sparepart-4',
      category: 'sparepart',
      categoryLabel: 'Precision Spare Parts',
      title: 'Precision Step Bushing & Collar Flange',
      subtitle: 'Bushing dan Flensa Bertingkat Toleransi Halus',
      image: '/assets/products/sparepart-4.jpg',
      description: 'Komponen dudukan bearing dan pengunci poros mesin berputar dengan kebulatan dan konsentrisitas tinggi.',
      specs: ['High-grade carbon / alloy steel', 'Kekerasan material sesuai standar', 'Finishing permukaan halus', 'Tahan gesekan putaran tinggi'],
    },
    {
      id: 'sparepart-5',
      category: 'sparepart',
      categoryLabel: 'Precision Spare Parts',
      title: 'Heavy Machining Rotary Perforated Disc',
      subtitle: 'Piringan Berlubang Roda Pemotong untuk Mesin Industri',
      image: '/assets/products/sparepart-5.jpg',
      description: 'Cakram baja tebal hasil pemesinan vertikal dengan lubang ventilasi/pemotongan khusus untuk mesin pencacah dan penggiling pabrik.',
      specs: ['Pemesinan lathe vertikal berkapasitas besar', 'Keseimbangan rotasi dinamis', 'Bahan baja tebal tahan benturan', 'Diuji keselarasan permukaan'],
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter((item) => item.category === activeTab);

  return (
    <section id="produk" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Portofolio &amp; Pengalaman Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Produk &amp; Hasil Fabrikasi Kami
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Berikut adalah dokumentasi langsung produk dan unit mesin yang telah dirancang, difabrikasi, dan diserahterimakan kepada klien industri kami.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Semua Kategori' },
            { id: 'conveyor', label: 'Chain Conveyor' },
            { id: 'filtration', label: 'Filtration System' },
            { id: 'sparepart', label: 'Precision Spare Parts' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="p-2.5 rounded-full bg-white/90 text-slate-900 hover:bg-white transition-colors shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                  <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                    Detail Spesifikasi
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-orange-700 shadow-sm uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-orange-600 font-semibold mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Rincian</span>
                  </button>

                  <a
                    href={`https://wa.me/6282250580331?text=Halo%20PT%20JMA%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.title)}%20dan%20ingin%20minta%20info%20spesifikasi%20serta%20harga.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    Tanya Produk Ini →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail / Zoom Preview */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {selectedImage.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
                <div className="rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] max-h-80 flex items-center justify-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Keunggulan &amp; Spesifikasi Teknis:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedImage.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  PT Jeruk Manis Abadi • Custom Engineering Solutions
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors flex-1 sm:flex-none"
                  >
                    Tutup
                  </button>
                  <a
                    href={`https://wa.me/6282250580331?text=Halo%20PT%20JMA%2C%20saya%20ingin%20minta%20penawaran%20harga%20untuk%20unit%20${encodeURIComponent(selectedImage.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-md transition-colors flex-1 sm:flex-none text-center"
                  >
                    Minta Penawaran Unit Ini
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
