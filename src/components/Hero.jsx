import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300"
          >
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Offensive Security • Red Teaming • Pentesting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            Break in before they do.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-xl text-zinc-300"
          >
            We simulate real-world adversaries to expose critical weaknesses, harden your defenses, and train your team to respond with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
              Get a free scoping call
            </a>
            <a href="#services" className="inline-flex justify-center items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400/50 hover:bg-cyan-400/10">
              Explore services
            </a>
          </motion.div>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[560px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        </div>
      </div>
    </section>
  )
}
