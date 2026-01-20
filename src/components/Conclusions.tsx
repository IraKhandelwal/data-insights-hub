import { motion } from 'framer-motion';

const conclusions = [
  {
    number: '01',
    title: 'Critical Infrastructure Stress',
    description: '16% of Indian districts (120+ out of 750) face critical or high infrastructure stress driven by migration patterns.',
    highlight: '120+ Districts at Risk'
  },
  {
    number: '02',
    title: 'Migration Load Dominance',
    description: 'Migration-driven load contributes 65–78% of observed infrastructure utilization in high-stress zones.',
    highlight: '65-78% Load Contribution'
  },
  {
    number: '03',
    title: 'Investment Imperative',
    description: '23 metropolitan districts require immediate capacity interventions with estimated investment need of ₹2.8 trillion.',
    highlight: '₹2.8T Investment Required'
  },
  {
    number: '04',
    title: 'Real-Time Governance',
    description: 'Aadhaar-driven monitoring enables proactive governance aligned with SDG 9 resilience objectives.',
    highlight: '48-Hour Decision Cycle'
  },
  {
    number: '05',
    title: 'Scalable Framework',
    description: 'Methodology validated across 750 districts; ready for integration into national smart city and infrastructure planning.',
    highlight: 'Pan-India Scalability'
  },
];

const futureEnhancements = [
  {
    title: 'AI-Driven Forecasting',
    items: [
      '12-month migration prediction using ML models',
      'Seasonal pattern recognition & anomaly detection',
      'Infrastructure demand nowcasting (1-3 month horizon)'
    ]
  },
  {
    title: 'Real-Time DPI Integration',
    items: [
      'Live Aadhaar-to-dashboard data pipeline (24-hour latency)',
      'Integration with utilities (water, energy, transport)',
      'IoT sensor fusion for ground-truth validation'
    ]
  },
  {
    title: 'Smart City Alignment (SDG 9)',
    items: [
      'National Smart Cities Mission integration',
      'Automated resource allocation based on stress indicators',
      'Cross-border migration tracking for regional coordination'
    ]
  },
];

const Conclusions = () => {
  return (
    <section id="conclusions" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-steady mb-4 inline-block">POLICY IMPLICATIONS</span>
          <h2 className="section-title text-4xl md:text-5xl">Conclusions & Recommendations</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Policy-ready evidence for resilient infrastructure planning
          </p>
        </motion.div>

        {/* Key Conclusions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {conclusions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card group hover:border-primary/50 transition-colors"
            >
              <div className="text-6xl font-bold text-secondary/50 mb-4 group-hover:text-primary/30 transition-colors">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
              <span className="badge-high">{item.highlight}</span>
            </motion.div>
          ))}
        </div>

        {/* Governance Implication */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="stat-card max-w-4xl mx-auto mb-20 glow-effect"
        >
          <span className="badge-critical mb-4 inline-block">GOVERNANCE IMPLICATION</span>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Immediate prioritization of capital allocation to critical districts, with 
            <span className="gradient-text font-bold"> 6-month monitoring windows</span> for escalation protocols.
          </p>
        </motion.div>

        {/* Future Enhancements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-steady mb-4 inline-block">INNOVATION ROADMAP</span>
          <h3 className="section-title text-3xl">Future Enhancements</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {futureEnhancements.map((enhancement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card"
            >
              <h4 className="text-lg font-semibold mb-4 gradient-text">{enhancement.title}</h4>
              <ul className="space-y-3">
                {enhancement.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Limitations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <span className="badge-steady mb-4 inline-block">TRANSPARENCY</span>
            <h3 className="section-title text-3xl">Limitations</h3>
          </div>
          <div className="stat-card p-6 max-w-4xl mx-auto">
            <ul className="space-y-3">
              {[
                'Data coverage limited to available UIDAI records',
                'Temporal scope restricted to the dataset time period',
                'Infrastructure stress indicators are proxy measures',
                'Real-time integration not yet implemented'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-yellow-500 mt-1">⚠</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Interactive Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="stat-card p-8 max-w-2xl mx-auto glow-effect">
            <p className="text-lg text-muted-foreground mb-4">For better visualization and interactive exploration:</p>
            <a 
              href="https://urban-pulsee.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <span>Visit Interactive Dashboard</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground mt-4">https://urban-pulsee.netlify.app/</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusions;
