import { motion } from 'framer-motion';

const methodologySteps = [
  {
    step: '01',
    title: 'Data Collection',
    description: 'Gathered three primary datasets from UIDAI: Demographic (2.07M records), Enrolment (1M records), and Biometric (1.86M records) data covering states and districts across India.',
    details: ['Demographic dataset with age-wise breakdowns', 'Enrolment data segmented by age groups', 'Biometric update records']
  },
  {
    step: '02',
    title: 'Data Cleaning',
    description: 'Performed strategic cleaning including handling missing values, removing duplicates, and formatting corrections.',
    details: ['Removed duplicate records from all datasets', 'Handled missing critical geographic data', 'Unified geographic identifiers across all data silos']
  },
  {
    step: '03',
    title: 'Data Transformation',
    description: 'Advanced preprocessing including state name corrections and data aggregation for analysis.',
    details: ['Corrected state name variations', 'Removed invalid entries', 'Standardized date formats']
  },
  {
    step: '04',
    title: 'Exploratory Data Analysis',
    description: 'Comprehensive statistical analysis including summary statistics, distribution analysis, and correlation studies.',
    details: ['Descriptive statistics for all numeric columns', 'Distribution analysis across states', 'Outlier detection']
  },
  {
    step: '05',
    title: 'Visualization & Interpretation',
    description: 'Created interactive visualizations including heatmaps, time-series charts, and decomposition matrices.',
    details: ['ISI Decomposition Matrix', 'Month-of-Year Distribution', 'Infrastructure Stress Heatmaps']
  }
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
            Systematic approach to data processing, analysis, and visualization
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary font-mono">{step.step}</span>
                  </div>
                  {index < methodologySteps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mx-auto mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="stat-card p-6 flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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

        {/* Data Processing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="stat-card p-6 bg-primary/5 border-primary/30">
            <h4 className="text-lg font-bold text-primary mb-4">Data Processing Summary</h4>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-green-400">✓ STRATEGIC CLEANING: Geographic identifiers unified across all data silos.</p>
              <p className="text-green-400">✓ DATA QUALITY: Duplicates removed from all datasets.</p>
              <p className="text-green-400">✓ DATA QUALITY: Rows with missing critical geographic data removed.</p>
              <p className="text-green-400">✓ ADVANCED CLEANING: State name variations corrected and invalid entries removed.</p>
              <p className="text-green-400">✓ PREPROCESSING COMPLETE: Datasets sanitized for analysis.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
