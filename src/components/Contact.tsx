import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -right-20 top-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Drop me a message and let's discuss how I can help bring your digital vision to life.
          </p>
        </div>

        <div className="max-w-xl mx-auto flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhantsinha999@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-5 group p-5 glass-card rounded-2xl hover:border-violet-500/30 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold mb-1">Email directly</p>
                  <p className="font-semibold text-slate-900 dark:text-white">siddhantsinha999@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 glass-card rounded-2xl transition-all shadow-sm">
                <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold mb-1">Call me</p>
                  <p className="font-semibold text-slate-900 dark:text-white">+91 7979098902</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 glass-card rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold mb-1">Location</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Patna, Bihar, India</p>
                </div>
              </div>

               <a 
                href="https://wa.me/917979098902" 
                target="_blank" 
                rel="noreferrer"
                className="w-full mt-8 py-5 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
