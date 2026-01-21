import { motion } from 'framer-motion';

const methodologySteps = [
  {
    step: '01',
    title: 'Step 1: Data Collection',
    description: 'Gathered three primary datasets from UIDAI: Demographic (2.07M records), Enrolment (1M records), and Biometric (1.86M records) data covering states and districts across India.',
  },
  {
    step: '02',
    title: 'Step 2: Data Cleaning',
    description: 'Performed strategic cleaning including handling missing values, removing duplicates, and formatting corrections. Geographic identifiers unified across all data silos.',
  },
  {
    step: '03',
    title: 'Step 3: Data Transformation',
    description: 'Advanced preprocessing including state name corrections and data aggregation for analysis. Standardized date formats and removed invalid entries.',
  },
  {
    step: '04',
    title: 'Step 4: Exploratory Data Analysis',
    description: 'Comprehensive statistical analysis including summary statistics, distribution analysis, and correlation studies across all datasets.',
  },
  {
    step: '05',
    title: 'Step 5: Visualization & Interpretation',
    description: 'Created interactive visualizations including heatmaps, time-series charts, ISI decomposition matrices, and monthly distribution analyses.',
  }
];

const isiComponents = [
  {
    name: 'Structural Load',
    description: 'Baseline population pressure on infrastructure'
  },
  {
    name: 'Growth Shock',
    description: 'Recent acceleration in enrolment-driven demand'
  },
  {
    name: 'Momentum',
    description: 'Persistence and direction of stress over time'
  }
];

const decisionEnablement = [
  'Identification of high-pressure districts',
  'Cross-state stress comparison',
  'Prioritization of infrastructure and service planning'
];

const tools = [
  { category: 'Language', items: ['Python'] },
  { category: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { category: 'Visualization', items: ['Plotly', 'Python Visualizations'] },
  { category: 'Environment', items: ['Jupyter Notebook'] },
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Methodology</h2>
          <p className="section-subtitle">
            Analytical Pipeline
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-muted-foreground text-center">
            The project processes large-scale UIDAI (Aadhaar) demographic and enrolment data through systematic cleaning, standardization, and district-level aggregation to ensure reliable cross-regional comparison.
          </p>
        </motion.div>

        {/* ISI Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="stat-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">Infrastructure Stress Index (ISI)</h3>
            <p className="text-muted-foreground mb-6 text-center">
              A composite Infrastructure Stress Index (ISI) is designed to convert Aadhaar enrolment dynamics into a single, interpretable measure of relative infrastructure pressure. The ISI integrates three analytically distinct components:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {isiComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center"
                >
                  <h4 className="text-primary font-bold mb-2">{component.name}</h4>
                  <p className="text-muted-foreground text-sm">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decision Enablement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="stat-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Decision Enablement</h3>
            <p className="text-muted-foreground mb-4">By consolidating multiple stress signals into a unified metric, ISI enables:</p>
            <ul className="space-y-2">
              {decisionEnablement.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">
              Outputs are delivered through interactive visual dashboards to support evidence-based decision-making aligned with SDG 9.
            </p>
          </div>
        </motion.div>

        {/* Methodology Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Steps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="stat-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold text-primary/50">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Tools & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool.category} className="stat-card p-4 text-center">
                <h4 className="text-primary font-semibold mb-3">{tool.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tool.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-primary/10 text-foreground text-sm rounded-full border border-primary/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
