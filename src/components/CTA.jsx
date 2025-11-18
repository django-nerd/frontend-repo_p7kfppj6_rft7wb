import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Ready to see your real risk exposure?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-zinc-300"
        >
          Book a free scoping call. We’ll map objectives, pick an approach, and share a clear plan with timelines and price options.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-3 sm:grid-cols-3 bg-white/5 border border-white/10 rounded-xl p-3"
        >
          <input type="text" placeholder="Name" className="sm:col-span-1 col-span-3 rounded-md bg-black/40 text-white placeholder-zinc-400 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input type="email" placeholder="Work email" className="sm:col-span-1 col-span-3 rounded-md bg-black/40 text-white placeholder-zinc-400 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input type="text" placeholder="Company" className="sm:col-span-1 col-span-3 rounded-md bg-black/40 text-white placeholder-zinc-400 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button className="sm:col-span-3 rounded-md bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 px-4 py-2 font-semibold text-white shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
            Request scoping call
          </button>
        </motion.form>
      </div>
    </section>
  )
}
