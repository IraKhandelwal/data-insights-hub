import { motion } from 'framer-motion';

// Import new dashboard images from PDF
import dashboardNational from '@/assets/dashboard-national.jpg';
import dashboardDistrictStress from '@/assets/dashboard-district-stress.jpg';
import dashboardIsiComponents from '@/assets/dashboard-isi-components.jpg';
import dashboardIsiOverview from '@/assets/dashboard-isi-overview.jpg';
import structuralLoadAnalysis from '@/assets/structural-load-analysis.jpg';
import growthMomentum from '@/assets/growth-momentum.jpg';
import districtLevelIsi from '@/assets/district-level-isi.jpg';
import nationalHeatmap from '@/assets/national-heatmap.jpg';
import seasonalPattern from '@/assets/seasonal-pattern.jpg';
import isiDecompositionMatrix from '@/assets/isi-decomposition-matrix.jpg';
import isiInequalityBoxplot from '@/assets/isi-inequality-boxplot.jpg';

const visualizations = [
  {
    id: 1,
    image: dashboardNational,
    title: 'National Context: Average Infrastructure Stress by State',
    description: 'This dashboard presents an integrated, multi-level view of infrastructure stress derived from UIDAI demographic, enrolment, and biometric datasets. It is designed to support evidence-based prioritization and monitoring aligned with SDG 9: Industry, Innovation, and Infrastructure.',
    observation: 'At the national level, states are ranked based on their average Infrastructure Stress Index (ISI), providing a comparative overview of relative pressure across regions.',
    insight: 'The dashboard is interactive—users can dynamically change the selected state to explore regional patterns and district-level variations. All outputs are intentionally framed as decision-support indicators, enabling planners and administrators to identify high-pressure areas for further assessment.',
    category: 'Dashboard'
  },
  {
    id: 2,
    image: dashboardDistrictStress,
    title: 'District-Level Infrastructure Stress and Growth Trends: Andhra Pradesh',
    description: 'At the regional level, district-wise drill-down highlights areas experiencing elevated infrastructure stress and migration momentum within the selected state (shown here: Andhra Pradesh).',
    observation: 'Districts are classified by growth status (Stable vs. Accelerating), based on recent month-over-month migration momentum, allowing planners to distinguish between structural pressure and emerging growth-driven stress.',
    insight: 'This view demonstrates how UIDAI administrative data can be transformed into actionable decision-support insights for infrastructure planning under SDG 9, while explicitly avoiding operational or policy prescriptions.',
    category: 'State Analysis'
  },
  {
    id: 3,
    image: dashboardIsiComponents,
    title: 'ISI Component Breakdown — District Drivers in Andhra Pradesh',
    description: 'The component breakdown further improves interpretability by explaining how structural load (population pressure) and growth dynamics contribute to the overall ISI score.',
    observation: 'Components include Young_Migrants, Adult_Population, and GrowthRate_Impact, showing their relative contribution to each district\'s ISI.',
    insight: 'Understanding component weights helps target specific infrastructure aspects for improvement and enables differentiated intervention strategies based on the primary stress driver.',
    category: 'ISI Analysis'
  },
  {
    id: 4,
    image: dashboardIsiOverview,
    title: 'District-Level ISI Overview: Andhra Pradesh',
    description: 'This visualization presents a district-level analysis of the Infrastructure Stress Index (ISI) for Andhra Pradesh, derived from integrated UIDAI demographic, enrolment, and biometric datasets. The chart ranks districts by relative infrastructure stress.',
    observation: 'Cuddapah exhibits the highest relative ISI, indicating sustained infrastructure pressure driven primarily by population load rather than rapid acceleration. Districts highlighted as Accelerating (e.g., Hyderabad, East Godavari) reflect elevated growth dynamics.',
    insight: 'Each bar represents a district\'s capped ISI value, ensuring that extreme outliers do not distort comparative interpretation. The dashboard is fully interactive—users can dynamically change the state and analytical metric.',
    category: 'State Analysis'
  },
  {
    id: 5,
    image: structuralLoadAnalysis,
    title: 'Structural Load Analysis (Youth-to-Adult Pressure): Andhra Pradesh',
    description: 'This view isolates structural load, defined as the youth-to-adult population ratio, to highlight districts experiencing sustained baseline pressure on infrastructure, independent of short-term growth effects.',
    observation: 'In Andhra Pradesh, Cuddapah exhibits the highest structural load despite stable growth, indicating long-term demand on services driven by population composition rather than recent acceleration.',
    insight: 'Districts marked as Accelerating combine structural pressure with growth momentum, signaling areas where baseline stress may intensify if trends persist. This separation of structural pressure from growth dynamics improves interpretability.',
    category: 'Structural Analysis'
  },
  {
    id: 6,
    image: growthMomentum,
    title: 'Growth Momentum Analysis (Emerging Pressure Signals)',
    description: 'This view highlights district-level growth momentum, measured as the month-over-month percentage change in enrolment activity, to identify areas experiencing rapid acceleration.',
    observation: 'In Andhra Pradesh, Anakapalli exhibits the highest growth momentum, indicating a sharp recent increase in activity relative to other districts. Districts shown here are classified as Accelerating.',
    insight: 'Unlike structural load, this metric captures short-term dynamics that may signal emerging infrastructure pressure. This analysis complements structural and ISI views by surfacing early-stage growth signals.',
    category: 'Momentum Analysis'
  },
  {
    id: 7,
    image: districtLevelIsi,
    title: 'District-Level Infrastructure Stress Overview (State View)',
    description: 'This chart presents a district-wise comparison of infrastructure stress for Andhra Pradesh, using the Infrastructure Stress Index (ISI) derived from UIDAI demographic and enrolment signals. Values are capped at the 99th percentile.',
    observation: 'Cuddapah emerges as the district with the highest relative stress, driven primarily by sustained population pressure rather than rapid short-term acceleration. Districts highlighted as Accelerating reflect elevated growth momentum.',
    insight: 'This view enables intra-state prioritization and comparative assessment, supporting evidence-based discussions on infrastructure readiness without implying operational, budgetary, or policy actions.',
    category: 'State Analysis'
  },
  {
    id: 8,
    image: nationalHeatmap,
    title: 'National Infrastructure Stress & Growth Patterns (Interactive Heatmap)',
    description: 'This visualization presents a national-level overview of infrastructure stress and growth dynamics across Indian states, derived from UIDAI administrative data. The heatmap encodes relative intensity of the selected metric.',
    observation: 'Darker shades indicate higher relative values, highlighting states experiencing comparatively greater pressure or faster change. The interactive design enables state-level drill-down into district-wise distributions.',
    insight: 'This dual-level view helps distinguish systemic regional pressure from state-specific or district-level dynamics, improving interpretability and enabling comparative assessment, monitoring, and prioritization aligned with SDG 9.',
    category: 'National Overview'
  },
  {
    id: 9,
    image: seasonalPattern,
    title: 'Seasonal Pattern of Migration Activity',
    description: 'This visualization highlights seasonal variation in migration-related demographic activity across the calendar year at the national level.',
    observation: 'Months such as March, September, November, and December show relatively higher activity compared to the annual average, indicating periods of seasonal concentration. April through July and October reflect comparatively lower activity.',
    insight: 'These patterns complement structural and growth-based indicators by adding a temporal dimension to the analysis. The insights support comparative monitoring of seasonal dynamics without implying forecasts or policy decisions.',
    category: 'Temporal Analysis'
  },
  {
    id: 10,
    image: isiDecompositionMatrix,
    title: 'Infrastructure Stress Driver Matrix (ISI Decomposition): National',
    description: 'This scatter matrix decomposes the Infrastructure Stress Index (ISI) into two dimensions: Structural Load (baseline population pressure) and Growth Shock (short-term acceleration). Median reference lines divide regions into four comparative quadrants.',
    observation: 'Stress Driver Quadrants include: High Load + High Growth, Low Load + Low Growth, Low Load + High Growth, and High Load + Low Growth. This enables interpretation of whether stress is driven by sustained load, recent growth, or a combination.',
    insight: 'The visualization improves explainability of ISI scores by distinguishing long-term structural pressure from emerging growth dynamics, supporting comparative assessment and prioritization without implying operational or policy actions.',
    category: 'Risk Matrix'
  },
  {
    id: 11,
    image: isiInequalityBoxplot,
    title: 'Within-State ISI Inequality: Distribution of District-Level Stress',
    description: 'This box plot illustrates the distribution of district-level Infrastructure Stress Index (ISI) scores within states, highlighting the degree of concentration versus dispersion of infrastructure pressure. Log scale applied to improve readability.',
    observation: 'Wider distributions and prominent outliers indicate states where stress is unevenly concentrated in specific districts rather than uniformly distributed. For example, Janjgir-Champa in Chhattisgarh shows ISI of 29.9332M.',
    insight: 'By revealing intra-state variation, this view complements national and district-level analyses and supports comparative assessment of localized pressure patterns under SDG 9, without implying operational or policy actions.',
    category: 'ISI Distribution'
  }
];

const VisualAnalysis = () => {
  return (
    <section id="visual-analysis" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Visual Analysis (Charts & Graphs)</h2>
          <p className="section-subtitle">
            Comprehensive visual analysis with detailed descriptions, observations, and insights
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            📌 Each visualization is followed by description, observation, and actionable insight
          </p>
        </motion.div>

        <div className="space-y-16">
          {visualizations.map((viz, index) => (
            <motion.div
              key={viz.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="stat-card overflow-hidden"
            >
              {/* Figure Header */}
              <div className="p-4 border-b border-border bg-primary/5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    Figure {index + 1}: {viz.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {viz.category}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="p-4 bg-background/30">
                <img
                  src={viz.image}
                  alt={viz.title}
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Analysis Content */}
              <div className="p-6 space-y-4">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Description</h4>
                  <p className="text-muted-foreground">{viz.description}</p>
                </div>

                {/* Observation */}
                <div className="pl-4 border-l-2 border-yellow-500/50 bg-yellow-500/5 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-yellow-500 mb-2 uppercase tracking-wide">🔍 Observation</h4>
                  <p className="text-muted-foreground">{viz.observation}</p>
                </div>

                {/* Insight */}
                <div className="pl-4 border-l-2 border-green-500/50 bg-green-500/5 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-green-500 mb-2 uppercase tracking-wide">💡 Insight</h4>
                  <p className="text-muted-foreground">{viz.insight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualAnalysis;
