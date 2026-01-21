import { motion } from 'framer-motion';

const tableOfContents = [
  { number: '1', title: 'Introduction' },
  { number: '2', title: 'Problem Statement' },
  { number: '3', title: 'Objectives' },
  { number: '4', title: 'Dataset Description' },
  { number: '5', title: 'Methodology' },
  { number: '6', title: 'Tools & Technologies' },
  { number: '7', title: 'Exploratory Data Analysis (EDA)' },
  { number: '8', title: 'Visual Analysis (Charts & Graphs)' },
  { number: '9', title: 'Key Insights & Findings' },
  { number: '10', title: 'Conclusion' },
];

const Abstract = () => {
  return (
    <section id="abstract" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Abstract */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-8">Abstract</h2>
            <div className="stat-card p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Urban Pulse presents a data-driven analytical framework to identify and quantify migration-induced infrastructure stress across Indian states and districts using large-scale UIDAI (Aadhaar) demographic, enrolment, and biometric datasets. The project applies structured data cleaning, exploratory data analysis, and visualization techniques to uncover spatial and temporal population movement patterns that directly influence urban infrastructure demand.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                A composite <span className="text-primary font-semibold">Infrastructure Stress Index (ISI)</span> is introduced to integrate multiple indicators into a unified, interpretable metric, enabling comparative assessment of regional pressure levels. Interactive dashboards and visual analytics translate complex datasets into actionable insights, allowing policymakers and urban planners to prioritize high-stress districts and design targeted infrastructure interventions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                By leveraging national-scale identity data and analytics-driven decision support, this study demonstrates how evidence-based planning can strengthen resilient, inclusive, and sustainable infrastructure development in alignment with <span className="text-primary font-semibold">SDG 9 (Industry, Innovation, and Infrastructure)</span>.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {tableOfContents.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer border border-border/50"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-sm">
                    {item.number}
                  </span>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-mono">1</span>
              Introduction
            </h3>
            <div className="stat-card p-6 ml-13">
              <p className="text-muted-foreground leading-relaxed">
                Rapid internal migration and urban expansion in India are placing increasing pressure on public infrastructure across states and districts. Effective infrastructure planning requires timely, granular, and reliable population movement insights, which are often unavailable or fragmented across traditional data sources. National-scale digital identity data offers a unique opportunity to bridge this gap by providing consistent and high-coverage demographic and enrolment signals.
              </p>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-mono">2</span>
              Problem Statement
            </h3>
            <div className="stat-card p-6 ml-13">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite the availability of large-scale administrative datasets, infrastructure planning decisions are frequently made without a unified, data-driven view of migration-induced regional stress. The absence of integrated analytical frameworks limits the ability of policymakers to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Identify high-pressure districts in advance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Compare infrastructure stress levels across regions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Prioritize investments based on evidence rather than aggregates
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This gap directly affects the planning and allocation of essential public infrastructure, including water supply, electricity distribution, urban services, and identity delivery facilities such as Aadhaar Seva Kendras. As a result, infrastructure development often responds to congestion and service overload after it occurs, rather than enabling proactive, demand-aware planning.
              </p>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-mono">3</span>
              Objectives
            </h3>
            <div className="stat-card p-6 ml-13">
              <ul className="space-y-3">
                {[
                  'Quantify and compare migration-driven infrastructure stress across Indian states and districts using UIDAI (Aadhaar) demographic and enrolment data.',
                  'Develop a composite Infrastructure Stress Index (ISI) to consolidate multiple indicators into a single, interpretable metric for regional prioritization.',
                  'Identify high-pressure districts and emerging stress hotspots to support proactive infrastructure and service planning.',
                  'Enable evidence-based decision-making through interactive visual analytics and dashboards designed for policymakers and urban planners.',
                  'Support sustainable and resilient infrastructure development in alignment with SDG 9 (Industry, Innovation, and Infrastructure).'
                ].map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abstract;
