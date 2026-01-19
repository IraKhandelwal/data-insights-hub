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
  { number: '11', title: 'Limitations' },
  { number: '12', title: 'Future Scope' },
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
                This project focuses on analyzing <span className="text-primary font-semibold">demographic, enrolment, and biometric data</span> from UIDAI (Aadhaar) using structured data analytics techniques. The analysis includes comprehensive data cleaning, exploratory data analysis, and visualization to identify meaningful trends and patterns related to migration and infrastructure stress across Indian states and districts. Various charts and graphs are used to support insights and improve interpretability. The findings aim to assist <span className="text-primary font-semibold">policymakers and urban planners</span> in evidence-based, data-driven decision-making for SDG 9 infrastructure planning.
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
                Data analytics enables organizations to convert raw data into actionable insights. This project analyzes <span className="text-primary font-semibold">UIDAI demographic, enrolment, and biometric datasets</span> to understand trends, distributions, and relationships using statistical and visual methods. The analysis covers migration patterns, infrastructure stress indicators, and regional disparities across India's states and districts.
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
              <p className="text-muted-foreground leading-relaxed">
                The challenge addressed in this project is understanding <span className="text-primary font-semibold">infrastructure stress patterns</span> arising from migration and demographic changes across Indian districts. Existing approaches lack structured visual interpretation of Aadhaar data for urban planning, which this analysis aims to provide through comprehensive data processing and visualization.
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
                  'To preprocess and clean raw UIDAI datasets',
                  'To perform exploratory data analysis on demographic, enrolment, and biometric data',
                  'To visualize trends using charts and graphs',
                  'To extract actionable insights for infrastructure planning',
                  'To identify high-stress districts requiring immediate intervention'
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
