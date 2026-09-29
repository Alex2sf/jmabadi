import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Wrench, Clock, CheckCircle } from 'lucide-react';

export const ContactRFQ: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Mechanical Fabrication',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
    }

    const text = `*REQUEST FOR QUOTATION (RFQ) - PT JERUK MANIS ABADI*
----------------------------------------
*Nama PIC:* ${formData.name}
*Perusahaan:* ${formData.company || '-'}
*No. WhatsApp/Telp:* ${formData.phone}
*Email:* ${formData.email || '-'}
*Kategori Layanan:* ${formData.service}
*Kebutuhan/Spesifikasi:*
${formData.message || 'Mohon informasi penawaran harga dan katalog teknis.'}
----------------------------------------
Dikirim melalui website resmi jmabadi.id`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6282250580331?text=${encodedText}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`RFQ Penawaran - ${formData.company || formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Yth. Sales & Estimating Team PT Jeruk Manis Abadi,\n\nSaya ingin meminta penawaran harga untuk:\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nNo Kontak: ${formData.phone}\nLayanan: ${formData.service}\n\nDetail Kebutuhan:\n${formData.message}\n\nTerima kasih.`
    );
    window.location.href = `mailto:sales@JMabadi.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
            Hubungi Sales &amp; Estimator Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Minta Penawaran Harga (Request For Quotation)
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Kirimkan rincian kebutuhan fabrikasi atau spesifikasi teknis mesin Anda. Tim estimator kami siap memberikan kalkulasi biaya kompetitif dan jadwal pengerjaan yang akurat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* RFQ Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Formulir Penawaran Cepat</h3>
                <p className="text-xs text-slate-500 mt-0.5">Terkoneksi langsung ke WhatsApp Tim Sales PT JMA</p>
              </div>
              <span className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                <Send className="w-5 h-5" />
              </span>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pesan RFQ telah dibuka di WhatsApp. Tim sales kami akan segera memproses penawaran Anda!</span>
              </div>
            )}

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap / PIC <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Perusahaan / Pabrik
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Contoh: PT Manufaktur Mandiri"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    No. WhatsApp / HP <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 08123456789"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Kantor
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="budi@perusahaan.co.id"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Kategori Layanan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition bg-white"
                >
                  <option value="Mechanical Fabrication (Skid/Tank/Piping)">Mechanical Fabrication (Skid / Tank / Piping / Structure)</option>
                  <option value="Chain Conveyor System">Chain Conveyor &amp; Material Handling System</option>
                  <option value="Industrial Filtration System">Industrial Filtration System &amp; Biodiesel Vessel</option>
                  <option value="Spare Parts & Precision Machining">Spare Parts &amp; Precision Machining (CNC/Lathe)</option>
                  <option value="Equipment Supply (Pumps/Valves)">Industrial Equipment Supply (Pumps, Valves, Motors)</option>
                  <option value="Installation & Maintenance">Installation, Troubleshooting &amp; Preventive Maintenance</option>
                  <option value="Testing & Hydrostatic QC">Testing, Hydrostatic Inspection &amp; QC</option>
                  <option value="Lainnya / Custom Engineering">Lainnya / Solusi Khusus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Spesifikasi &amp; Detail Kebutuhan
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Jelaskan kebutuhan Anda (dimensi mesin, kapasitas, gambar teknik, material SS/Carbon steel, tenggat waktu pengiriman, dll)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm outline-none transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-600/25 transition-all text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim RFQ via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailDirect}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Kirim via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                🔒 Data dan informasi teknis proyek Anda dijamin kerahasiaannya (NDA Ready).
              </p>
            </form>
          </div>

          {/* Contact Details & Addresses */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Direct Contacts Card */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/80 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>Saluran Komunikasi Resmi</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6282250580331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Hotline WhatsApp Sales</span>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">+62 8225-0580-331</p>
                    <span className="text-[10px] text-slate-400">Respon cepat jam kerja (08.00 - 17.00 WIB)</span>
                  </div>
                </a>

                <a
                  href="tel:+622180674900"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Telepon Kantor</span>
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">+62 21-8067-4900</p>
                    <span className="text-[10px] text-slate-400">Head Office Hunting Line</span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="mailto:sales@JMabadi.com"
                    className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">Sales &amp; RFQ</span>
                    </div>
                    <span className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors break-all">
                      sales@JMabadi.com
                    </span>
                  </a>

                  <a
                    href="mailto:office@JMabadi.com"
                    className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">Corporate Office</span>
                    </div>
                    <span className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors break-all">
                      office@JMabadi.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address Cards */}
            <div className="space-y-4">
              {/* Head Office */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Kantor Pusat</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">18 Office Park, Jakarta Selatan</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    10th Floor Unit A, Jl. TB Simatupang No. 18, RT 002/001, Kebagusan, Kec. Pasar Minggu, Kota Jakarta Selatan, DKI Jakarta.
                  </p>
                </div>
              </div>

              {/* Main Workshop */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Workshop Fabrikasi Utama</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">Setu, Kabupaten Bekasi</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    KP. Cinyosog RT 001 RW 005, Desa Burangkeng, Kec. Setu, Kab. Bekasi, Jawa Barat 17320.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Burangkeng+Setu+Bekasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 hover:text-orange-300 mt-2"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Petunjuk Arah Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/30 flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">Jam Operasional: </span> 
                Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 12.00 WIB
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
