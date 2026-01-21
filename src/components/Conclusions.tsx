import { motion } from 'framer-motion';

const keyInsights = [
  {
    title: 'Critical Infrastructure Stress',
    description: 'Analysis reveals significant variation in infrastructure stress across districts and states, with stress concentration clustering around high-migration and high-enrolment regions. The Infrastructure Stress Index (ISI) enables clear differentiation between low-pressure, moderate-pressure, and high-pressure districts, supporting targeted prioritization rather than uniform planning.'
  },
  {
    title: 'Migration Load Dominance',
    description: 'Migration-driven load contributes 65–78% of observed infrastructure utilization in high-stress zones.'
  },
  {
    title: 'Migration-Driven Stress Dynamics',
    description: 'Temporal enrolment trends indicate that recent growth shocks and sustained momentum play a critical role in amplifying infrastructure pressure. Districts exhibiting persistent upward momentum show early signs of future service overload, even when current population levels appear moderate.'
  },
  {
    title: 'Real-Time Governance',
    description: 'Aadhaar-driven monitoring enables proactive governance aligned with SDG 9 resilience objectives. 48-Hour Decision Cycle possible.'
  },
  {
    title: 'Decision Implications',
    description: 'These insights enable proactive planning for public infrastructure and service delivery, including urban utilities, administrative capacity, and Aadhaar Seva Kendra provisioning, reducing reliance on reactive congestion management.'
  }
];

const districtPrioritization = [
  'Immediate intervention zones',
  'Emerging stress hotspots',
  'Regions suitable for phased infrastructure expansion'
];

const policyPlanningImpact = [
  'Identify high-priority districts requiring immediate attention',
  'Anticipate emerging stress hotspots before service congestion escalates',
  'Support evidence-based planning for urban utilities, administrative capacity, and Aadhaar Seva Kendra provisioning'
];

const Conclusions = () => {
  return (
    <section id="conclusions" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Key Insights & Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl">Key Insights & Findings</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          {keyInsights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card p-6"
            >
              <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-4xl md:text-5xl">Conclusion</h2>
        </motion.div>

        {/* District-Level Prioritization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="stat-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">District-Level Prioritization</h3>
            <p className="text-muted-foreground mb-4">
              ISI-based ranking highlights districts where infrastructure demand is accelerating faster than baseline capacity, allowing planners to identify:
            </p>
            <ul className="space-y-2">
              {districtPrioritization.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Main Conclusion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="stat-card max-w-4xl mx-auto mb-12 p-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            This project demonstrates how large-scale UIDAI (Aadhaar) administrative data can be transformed into actionable infrastructure intelligence through structured analytics and visualization. By introducing the <span className="text-primary font-semibold">Infrastructure Stress Index (ISI)</span>, complex migration and enrolment dynamics are consolidated into a clear, comparable measure of regional infrastructure pressure.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The analysis reveals that infrastructure stress is unevenly distributed across districts and evolves dynamically over time, reinforcing the need for granular, data-driven planning rather than uniform, aggregate-based approaches. This framework helps planners decide <span className="text-primary font-semibold">where to act first</span>, not just where stress exists.
          </p>
        </motion.div>

        {/* Policy & Planning Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="stat-card p-8">
            <h3 className="text-xl font-bold text-primary mb-4">Policy & Planning Impact</h3>
            <p className="text-muted-foreground mb-4">The proposed framework enables policymakers and planners to:</p>
            <ul className="space-y-2">
              {policyPlanningImpact.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Way Forward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="stat-card p-8 border-primary/30">
            <h3 className="text-xl font-bold text-primary mb-4">Way Forward</h3>
            <p className="text-muted-foreground">
              The ISI framework and dashboards can be extended to incorporate additional public datasets and updated periodically, enabling continuous infrastructure monitoring and supporting resilient, inclusive, and sustainable infrastructure development aligned with SDG 9.
            </p>
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Thank You</h3>
            <p className="text-lg text-muted-foreground mb-4">For Interactive Visualizations:</p>
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
