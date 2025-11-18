import { motion } from 'framer-motion'

const phases = [
  {
    title: 'Recon & Intelligence',
    points: ['OSINT collection', 'Attack surface mapping', 'Threat modeling'],
  },
  {
    title: 'Initial Access',
    points: ['Phishing & pretexting', 'Exploiting weak links', 'Payload delivery'],
  },
  {
    title: 'Post-Exploitation',
    points: ['Privilege escalation', 'Lateral movement', 'Persistence'],
  },
  {
    title: 'Reporting & Hardening',
    points: ['Risk-ranked findings', 'Fix validation', 'Executive briefing'],
  },
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          How we operate
        </motion.h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
          {phases.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent" />
              <div className="relative">
                <h3 className="text-white font-medium">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
