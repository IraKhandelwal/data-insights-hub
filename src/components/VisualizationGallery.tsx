import { motion } from 'framer-motion';
import migrationStressNational from '@/assets/migration-stress-national.jpeg';
import isiComponentBreakdown from '@/assets/isi-component-breakdown.jpeg';
import infrastructureReadiness from '@/assets/infrastructure-readiness.jpeg';
import regionalOperations from '@/assets/regional-operations.jpeg';
import momentumDeployment from '@/assets/momentum-deployment.jpeg';
import structuralLoadHeatmap from '@/assets/structural-load-heatmap.jpeg';
import growthShockHeatmap from '@/assets/growth-shock-heatmap.jpeg';
import structuralLoadHeatmap2 from '@/assets/structural-load-heatmap-2.jpeg';

const visualizations = [
  {
    image: migrationStressNational,
    title: 'National Strategy: Migration Stress Across India',
    description: 'This visualization displays the average migration pressure (log scale) across Indian states. Chhattisgarh leads with nearly 5M average pressure, followed by Telangana (3.6M), Tamil Nadu, Haryana, and Odisha. The chart helps identify states requiring immediate infrastructure intervention based on migration-induced stress levels. The highlighted state shows detailed metrics including focus area and precise pressure values.',
    category: 'National Analysis'
  },
  {
    image: isiComponentBreakdown,
    title: 'ISI Component Breakdown: Andhra Pradesh Stress Analysis',
    description: 'Stacked bar chart decomposing the Infrastructure Stress Index (ISI) into three key components: Young Migrants (blue), Adult Population (green), and Growth Rate Impact (red). Cuddapah and Nellore districts show the highest ISI scores (12-14M), with Young Migrants contributing the majority of stress. This breakdown enables targeted policy interventions based on the primary driver of infrastructure demand in each district.',
    category: 'Regional Deep-Dive'
  },
  {
    image: infrastructureReadiness,
    title: 'Operational Pulse: District Infrastructure Readiness',
    description: 'Infrastructure Stress Index mapped against district readiness in Andhra Pradesh. Districts are color-coded by Migration Velocity: Steady (blue) indicates stable growth patterns, while Accelerating (red) signals rapidly increasing migration pressure. Nellore shows the highest stress at 12M with "Steady" classification, requiring 1807% server capacity increase. The tooltip reveals comprehensive metrics including Resource Gap, Momentum Score, and recommended Policy Action.',
    category: 'Operational Analytics'
  },
  {
    image: regionalOperations,
    title: 'Regional Operations Dashboard',
    description: 'Interactive dashboard with state and metric selectors showing the District Infrastructure Pulse for Andhra Pradesh. Users can filter by state and choose different metrics (ISI, Growth Rate, Capacity) for customized analysis. The visualization demonstrates the scalable, user-friendly interface designed for policy makers and regional administrators to monitor and respond to infrastructure stress in real-time.',
    category: 'Dashboard Interface'
  },
  {
    image: momentumDeployment,
    title: 'Momentum-Aware Resource Deployment Strategy',
    description: 'Advanced visualization incorporating trend arrows to indicate momentum direction for each district. Districts are labeled with arrows (→ for steady, ↑ for accelerating) to help prioritize resource allocation. Cuddapah leads with 12M stress index and 2147% resource gap requirement. This momentum-aware approach enables proactive infrastructure planning rather than reactive responses.',
    category: 'Strategic Planning'
  },
  {
    image: structuralLoadHeatmap,
    title: 'National Risk Profile: Structural Load Heatmap',
    description: 'Geographic choropleth map of India showing Structural Load (Baseline Pressure) distribution. Chhattisgarh displays critical risk (ISI Score: 4.78M, Structural Load: 5,973) with Growth Shock factor of 0.41. The color gradient from light (low pressure) to dark red (high pressure) provides immediate visual assessment of infrastructure stress concentration across states. This map serves as the primary national-level risk assessment tool.',
    category: 'Geographic Analysis'
  },
  {
    image: growthShockHeatmap,
    title: 'Growth Shock (Acceleration Factor) Heatmap',
    description: 'National heatmap visualizing the Growth Shock acceleration factor across states. Andhra Pradesh shows critical risk with ISI Score of 3.1M and acceleration factor of 0.27. States with higher acceleration factors (darker red) indicate rapidly changing migration patterns requiring immediate attention. This metric helps identify emerging hotspots before they reach critical infrastructure stress levels.',
    category: 'Predictive Analytics'
  },
  {
    image: structuralLoadHeatmap2,
    title: 'Structural Load Analysis: Critical State Focus',
    description: 'Detailed view of the Structural Load heatmap highlighting Chhattisgarh as a critical concern with the highest baseline pressure (5,973.44) in the country. The visualization confirms the ISI Score of 4.78M with a Growth Shock of 0.41, marking it as Critical. This focused analysis enables state-specific infrastructure investment prioritization and capacity planning.',
    category: 'State Analysis'
  },
];

const VisualizationGallery = () => {
  return (
    <section id="visualizations" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-steady mb-4 inline-block">OUTPUT VISUALIZATIONS</span>
          <h2 className="section-title text-4xl md:text-5xl">Analytics Dashboard Outputs</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive visual outputs from the Urban Pulse analytics engine
          </p>
        </motion.div>

        <div className="space-y-16">
          {visualizations.map((viz, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="image-card overflow-hidden group">
                  <img 
                    src={viz.image} 
                    alt={viz.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="badge-high mb-4 inline-block">{viz.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{viz.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{viz.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualizationGallery;
