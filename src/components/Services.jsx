import { ShieldCheck, Bug, Network, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bug,
    title: 'Penetration Testing',
    desc: 'Full-stack, cloud and mobile assessments to uncover and prioritize exploitable risks.',
  },
  {
    icon: Network,
    title: 'Red Team Operations',
    desc: 'Adversary emulation, purple teaming and assumed breach to test detection and response.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Hardening',
    desc: 'Configuration reviews, attack surface reduction and continuous validation.',
  },
  {
    icon: GraduationCap,
    title: 'Awareness Training',
    desc: 'Interactive workshops, phishing simulations and executive tabletop exercises.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          What we do
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-emerald-500/20 blur-xl" />
              <div className="relative">
                <s.icon className="text-cyan-300" />
                <h3 className="mt-3 text-white font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
