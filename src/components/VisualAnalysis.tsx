import { motion } from 'framer-motion';

// Import existing images
import migrationStressNational from '@/assets/migration-stress-national.jpeg';
import isiComponentBreakdown from '@/assets/isi-component-breakdown.jpeg';
import infrastructureReadiness from '@/assets/infrastructure-readiness.jpeg';
import regionalOperations from '@/assets/regional-operations.jpeg';
import momentumDeployment from '@/assets/momentum-deployment.jpeg';
import structuralLoadHeatmap from '@/assets/structural-load-heatmap.jpeg';
import growthShockHeatmap from '@/assets/growth-shock-heatmap.jpeg';
import structuralLoadHeatmap2 from '@/assets/structural-load-heatmap-2.jpeg';

// Import new images
import isiInequalityStates from '@/assets/isi-inequality-states.jpeg';
import isiInequalityAP from '@/assets/isi-inequality-ap.jpeg';
import isiDecompositionNational from '@/assets/isi-decomposition-national.jpeg';
import isiDecompositionAP from '@/assets/isi-decomposition-ap.jpeg';
import monthlyDistributionNational from '@/assets/monthly-distribution-national.jpeg';
import monthlyDistributionAP from '@/assets/monthly-distribution-ap.jpeg';
import monthlyDistributionAnnamayya from '@/assets/monthly-distribution-annamayya.jpeg';

const visualizations = [
  {
    id: 1,
    image: isiInequalityStates,
    title: 'Within-State ISI Inequality: Concentration of Infrastructure Stress',
    description: 'Box plot showing the distribution of Infrastructure Stress Index (ISI) across multiple states using logarithmic scale.',
    observation: 'Tamil Nadu shows the highest ISI values with max reaching 13.35M, while Chhattisgarh displays the widest variance. States like Haryana and Maharashtra show more concentrated distributions.',
    insight: 'The log scale reveals significant within-state inequality in infrastructure stress. States with high variance require district-level targeted interventions rather than uniform state-wide policies.',
    category: 'ISI Distribution'
  },
  {
    id: 2,
    image: isiInequalityAP,
    title: 'Within-State ISI Inequality: Andhra Pradesh Focus',
    description: 'Detailed box plot analysis of Andhra Pradesh highlighting outlier districts with extreme ISI values.',
    observation: 'Nellore district stands out as a significant outlier with ISI of 12.02M, while the median ISI for the state is around 1-3M range.',
    insight: 'Nellore requires immediate infrastructure attention as an outlier district. The presence of such extreme outliers indicates localized stress points that aggregate state-level metrics would miss.',
    category: 'State Deep Dive'
  },
  {
    id: 3,
    image: isiDecompositionNational,
    title: 'ISI Decomposition Matrix: National (State Level)',
    description: 'Scatter plot showing the relationship between Growth Shock (Acceleration Factor) and Structural Load (Baseline Pressure) with risk categorization.',
    observation: 'Critical (red) districts cluster in the upper half with high structural load. Most states fall below the median shock line, but several show concerning combinations of both factors.',
    insight: 'States with high structural load AND high growth shock (upper right quadrant) require priority intervention. The visualization enables risk-based resource allocation for infrastructure planning.',
    category: 'Risk Matrix'
  },
  {
    id: 4,
    image: isiDecompositionAP,
    title: 'ISI Decomposition Matrix: Andhra Pradesh (District Level)',
    description: 'District-level decomposition matrix for Andhra Pradesh showing Structural Load vs Growth Shock distribution.',
    observation: 'Several districts show structural loads exceeding 15k, with most clustering around the median shock value of 0.25. Critical districts are spread across both high and low shock regions.',
    insight: 'Andhra Pradesh has multiple high-stress districts requiring differentiated interventions. Districts with high load but low shock need maintenance, while those with high shock need capacity expansion.',
    category: 'State Deep Dive'
  },
  {
    id: 5,
    image: monthlyDistributionNational,
    title: 'Month-of-Year Distribution: National',
    description: 'Time series showing migration volume patterns across months at the national level with average reference line.',
    observation: 'March shows highest migration volume (~7M), followed by a sharp drop in April-July. September shows a significant spike to 5.34M before October dips. Nov-Dec show recovery.',
    insight: 'Seasonal patterns correlate with agricultural cycles and academic sessions. Infrastructure planning should account for March peaks and prepare resources accordingly.',
    category: 'Temporal Analysis'
  },
  {
    id: 6,
    image: monthlyDistributionAP,
    title: 'Month-of-Year Distribution: Andhra Pradesh',
    description: 'State-level monthly migration pattern for Andhra Pradesh showing similar seasonal trends.',
    observation: 'March peaks at ~350k followed by lowest in April (~50k). September shows 194.26k. December trends highest at ~280k, deviating from national pattern.',
    insight: 'Andhra Pradesh\'s December spike differs from national trends, possibly due to regional festivals or harvest patterns. State-specific planning is needed.',
    category: 'Temporal Analysis'
  },
  {
    id: 7,
    image: monthlyDistributionAnnamayya,
    title: 'Month-of-Year Distribution: Annamayya District',
    description: 'District-level monthly distribution showing micro-level migration patterns for Annamayya.',
    observation: 'May shows peak at 3,220, with April at lowest (~900). October dip followed by December peak at ~3,000. Pattern shows high volatility.',
    insight: 'District-level patterns reveal local dynamics invisible at state/national level. Annamayya\'s May peak may relate to local economic activities requiring targeted service capacity.',
    category: 'District Focus'
  },
  {
    id: 8,
    image: migrationStressNational,
    title: 'Migration Stress Dashboard: National View',
    description: 'Comprehensive dashboard showing migration patterns and stress indicators across all states.',
    observation: 'Dashboard provides holistic view of migration stress with multiple metrics and geographic distribution patterns.',
    insight: 'Multi-dimensional view enables policymakers to identify correlations between different stress factors and prioritize interventions.',
    category: 'Dashboard'
  },
  {
    id: 9,
    image: isiComponentBreakdown,
    title: 'ISI Component Breakdown Analysis',
    description: 'Decomposition of the Infrastructure Stress Index into its constituent components.',
    observation: 'Visualization shows how different factors contribute to overall ISI scores across regions.',
    insight: 'Understanding component weights helps target specific infrastructure aspects (healthcare, transport, utilities) for improvement.',
    category: 'ISI Analysis'
  },
  {
    id: 10,
    image: infrastructureReadiness,
    title: 'Infrastructure Readiness Assessment',
    description: 'Assessment of infrastructure capacity and readiness across different regions.',
    observation: 'Readiness levels vary significantly across regions, with some showing critical gaps.',
    insight: 'Readiness scores help prioritize capacity building investments and identify regions needing immediate support.',
    category: 'Assessment'
  },
  {
    id: 11,
    image: structuralLoadHeatmap,
    title: 'Structural Load Heatmap',
    description: 'Geographic heatmap showing structural load distribution across districts.',
    observation: 'Concentrated high-load areas visible in specific geographic clusters.',
    insight: 'Spatial patterns reveal infrastructure corridors and urban agglomeration effects on stress distribution.',
    category: 'Heatmap'
  },
  {
    id: 12,
    image: growthShockHeatmap,
    title: 'Growth Shock Heatmap',
    description: 'Heatmap visualization of growth shock factors across regions.',
    observation: 'Growth shock patterns differ from structural load, indicating dynamic change areas.',
    insight: 'Areas with high growth shock but low current load are emerging stress points requiring proactive planning.',
    category: 'Heatmap'
  },
  {
    id: 13,
    image: structuralLoadHeatmap2,
    title: 'Structural Load Analysis - Extended View',
    description: 'Extended analysis of structural load with additional metrics and breakdowns.',
    observation: 'Detailed view reveals sub-regional patterns within high-stress areas.',
    insight: 'Granular analysis enables micro-targeting of infrastructure investments at block/tehsil level.',
    category: 'Heatmap'
  },
  {
    id: 14,
    image: regionalOperations,
    title: 'Regional Operations Dashboard',
    description: 'Operational metrics and service delivery indicators across regions.',
    observation: 'Service delivery efficiency varies with infrastructure stress levels.',
    insight: 'Correlating operational data with stress indices helps optimize resource deployment and service delivery.',
    category: 'Operations'
  },
  {
    id: 15,
    image: momentumDeployment,
    title: 'Momentum Deployment Analysis',
    description: 'Analysis of deployment momentum and acceleration patterns across districts.',
    observation: 'Certain districts show accelerating momentum indicating rising demand.',
    insight: 'Early identification of accelerating districts enables proactive capacity planning before stress becomes critical.',
    category: 'Momentum'
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
          <h2 className="section-title">Visual Analysis</h2>
          <p className="section-subtitle">
            Charts & Graphs with detailed descriptions, observations, and insights
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
