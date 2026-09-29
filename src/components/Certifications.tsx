import React from 'react';
import { Award, ShieldCheck, CheckCircle2, QrCode } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="sertifikasi" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Komitmen Standar Internasional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sertifikasi Manajemen Mutu &amp; K3
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            PT Jeruk Manis Abadi mengoperasikan seluruh proses perancangan, fabrikasi, dan pengujian dengan sertifikasi sistem manajemen bertaraf internasional.
          </p>
        </div>

        {/* Dual ISO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* ISO 9001:2015 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-2">
                  <img
                    src="/assets/certifications/iso-badge-1.jpg"
                    alt="ISO 9001 Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Quality Management
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                ISO 9001:2015
              </h3>
              <p className="text-orange-600 font-bold text-sm mt-1">
                Quality Management System (Sistem Manajemen Mutu)
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Menjamin seluruh alur fabrikasi mesin, pengadaan suku cadang, dan layanan perbaikan berjalan melalui prosedur kendali mutu (Quality Assurance) yang konsisten, terukur, dan terdokumentasi.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inspeksi dimensi dan uji toleransi bertingkat</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pengujian integritas struktur &amp; hydrostatic test</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sertifikat kelayakan resmi untuk setiap pesanan</span>
                </div>
              </div>
            </div>

            {/* QR Code Verification Box */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="w-16 h-16 bg-white p-1 rounded-xl border border-slate-200 shrink-0 shadow-xs">
                <img
                  src="/assets/certifications/iso-qr-1.jpg"
                  alt="QR Code ISO 9001:2015"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <QrCode className="w-3.5 h-3.5 text-blue-600" />
                  <span>Verifikasi Resmi Sertifikat</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Pindai QR code untuk mengecek keaslian dan status akreditasi ISO 9001 PT JMA.
                </p>
              </div>
            </div>
          </div>

          {/* ISO 45001:2018 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center p-2">
                  <img
                    src="/assets/certifications/iso-badge-2.jpg"
                    alt="ISO 45001 Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider">
                  Health &amp; Safety
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                ISO 45001:2018
              </h3>
              <p className="text-orange-600 font-bold text-sm mt-1">
                Occupational Health &amp; Safety Management System (K3)
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Menerapkan standar keselamatan dan kesehatan kerja menyeluruh di area workshop maupun saat proses instalasi on-site pada fasilitas pabrik mitra untuk mencegah risiko insiden.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protokol APD &amp; SOP penanganan alat berat</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sertifikasi penanganan flammable &amp; hazardous area</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Audit K3 berkala bagi seluruh teknisi &amp; welder</span>
                </div>
              </div>
            </div>

            {/* QR Code Verification Box */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="w-16 h-16 bg-white p-1 rounded-xl border border-slate-200 shrink-0 shadow-xs">
                <img
                  src="/assets/certifications/iso-qr-2.jpg"
                  alt="QR Code ISO 45001:2018"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <QrCode className="w-3.5 h-3.5 text-orange-600" />
                  <span>Verifikasi Resmi Sertifikat</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Pindai QR code untuk mengecek keaslian dan status akreditasi ISO 45001 PT JMA.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
