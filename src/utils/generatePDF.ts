import jsPDF from 'jspdf';

// Import images
import migrationStressNational from '@/assets/migration-stress-national.jpeg';
import isiComponentBreakdown from '@/assets/isi-component-breakdown.jpeg';
import infrastructureReadiness from '@/assets/infrastructure-readiness.jpeg';
import regionalOperations from '@/assets/regional-operations.jpeg';
import momentumDeployment from '@/assets/momentum-deployment.jpeg';
import structuralLoadHeatmap from '@/assets/structural-load-heatmap.jpeg';
import growthShockHeatmap from '@/assets/growth-shock-heatmap.jpeg';
import structuralLoadHeatmap2 from '@/assets/structural-load-heatmap-2.jpeg';
import isiInequalityStates from '@/assets/isi-inequality-states.jpeg';
import isiInequalityAP from '@/assets/isi-inequality-ap.jpeg';
import isiDecompositionNational from '@/assets/isi-decomposition-national.jpeg';
import isiDecompositionAP from '@/assets/isi-decomposition-ap.jpeg';
import monthlyDistributionNational from '@/assets/monthly-distribution-national.jpeg';
import monthlyDistributionAP from '@/assets/monthly-distribution-ap.jpeg';
import monthlyDistributionAnnamayya from '@/assets/monthly-distribution-annamayya.jpeg';

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const addWrappedText = (doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number => {
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line: string, index: number) => {
    doc.text(line, x, y + (index * lineHeight));
  });
  return y + (lines.length * lineHeight);
};

export const generatePDF = async (setProgress: (progress: number) => void) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let currentY = margin;

  const checkPageBreak = (neededSpace: number) => {
    if (currentY + neededSpace > pageHeight - margin) {
      doc.addPage();
      currentY = margin;
    }
  };

  const addSectionTitle = (title: string, number?: string) => {
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setTextColor(0, 102, 204);
    const displayTitle = number ? `${number}. ${title}` : title;
    doc.text(displayTitle, margin, currentY);
    currentY += 10;
    doc.setTextColor(0, 0, 0);
  };

  const addSubTitle = (title: string) => {
    checkPageBreak(15);
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, currentY);
    currentY += 7;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
  };

  const addParagraph = (text: string) => {
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    currentY = addWrappedText(doc, text, margin, currentY, contentWidth, 5);
    currentY += 5;
  };

  const addBulletPoint = (text: string) => {
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const bulletText = `• ${text}`;
    currentY = addWrappedText(doc, bulletText, margin + 5, currentY, contentWidth - 10, 5);
    currentY += 2;
  };

  try {
    setProgress(5);

    // ===== COVER PAGE =====
    doc.setFillColor(10, 15, 30);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(100, 150, 255);
    doc.text('UIDAI DATA HACKATHON 2026', pageWidth / 2, 50, { align: 'center' });
    
    doc.setFontSize(42);
    doc.setTextColor(255, 255, 255);
    doc.text('Urban Pulse', pageWidth / 2, 80, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(200, 200, 200);
    doc.text('Data Analytics Project Report', pageWidth / 2, 95, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setTextColor(150, 150, 150);
    const subtitle = 'Aadhaar-Driven Migration & Infrastructure Stress Analytics';
    doc.text(subtitle, pageWidth / 2, 110, { align: 'center' });
    doc.text('for Evidence-Based SDG 9 Planning', pageWidth / 2, 118, { align: 'center' });
    
    // Stats on cover
    doc.setFontSize(24);
    doc.setTextColor(100, 200, 255);
    const stats = [
      { value: '4.9M+', label: 'Total Records' },
      { value: '3', label: 'Datasets' },
      { value: '961', label: 'Districts' },
      { value: '38', label: 'States/UTs' }
    ];
    
    let statX = 30;
    stats.forEach((stat) => {
      doc.setFontSize(20);
      doc.setTextColor(100, 200, 255);
      doc.text(stat.value, statX, 160, { align: 'center' });
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(stat.label, statX, 168, { align: 'center' });
      statX += 45;
    });
    
    // Interactive Link
    doc.setFontSize(10);
    doc.setTextColor(100, 200, 255);
    doc.text('For better visualization, visit:', pageWidth / 2, 200, { align: 'center' });
    doc.setTextColor(100, 150, 255);
    doc.textWithLink('https://urban-pulsee.netlify.app/', pageWidth / 2, 210, { align: 'center', url: 'https://urban-pulsee.netlify.app/' });
    
    setProgress(10);

    // ===== NEW PAGE - TABLE OF CONTENTS =====
    doc.addPage();
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    currentY = margin;

    addSectionTitle('Table of Contents');
    currentY += 5;

    const tocItems = [
      '1. Introduction',
      '2. Problem Statement',
      '3. Objectives',
      '4. Dataset Description',
      '5. Methodology',
      '6. Tools & Technologies',
      '7. Exploratory Data Analysis (EDA)',
      '8. Visual Analysis (Charts & Graphs)',
      '9. Key Insights & Findings',
      '10. Conclusion',
      '11. Limitations',
      '12. Future Scope'
    ];

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    tocItems.forEach((item) => {
      doc.text(item, margin + 10, currentY);
      currentY += 8;
    });

    setProgress(15);

    // ===== ABSTRACT =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Abstract');
    addParagraph('This project focuses on analyzing demographic, enrolment, and biometric data from UIDAI (Aadhaar) using structured data analytics techniques. The analysis includes comprehensive data cleaning, exploratory data analysis, and visualization to identify meaningful trends and patterns related to migration and infrastructure stress across Indian states and districts. Various charts and graphs are used to support insights and improve interpretability. The findings aim to assist policymakers and urban planners in evidence-based, data-driven decision-making for SDG 9 infrastructure planning.');
    currentY += 10;

    // ===== INTRODUCTION =====
    addSectionTitle('Introduction', '1');
    addParagraph('Data analytics enables organizations to convert raw data into actionable insights. This project analyzes UIDAI demographic, enrolment, and biometric datasets to understand trends, distributions, and relationships using statistical and visual methods. The analysis covers migration patterns, infrastructure stress indicators, and regional disparities across India\'s states and districts.');
    currentY += 10;

    // ===== PROBLEM STATEMENT =====
    addSectionTitle('Problem Statement', '2');
    addParagraph('The challenge addressed in this project is understanding infrastructure stress patterns arising from migration and demographic changes across Indian districts. Existing approaches lack structured visual interpretation of Aadhaar data for urban planning, which this analysis aims to provide through comprehensive data processing and visualization.');
    currentY += 10;

    // ===== OBJECTIVES =====
    addSectionTitle('Objectives', '3');
    addBulletPoint('To preprocess and clean raw UIDAI datasets');
    addBulletPoint('To perform exploratory data analysis on demographic, enrolment, and biometric data');
    addBulletPoint('To visualize trends using charts and graphs');
    addBulletPoint('To extract actionable insights for infrastructure planning');
    addBulletPoint('To identify high-stress districts requiring immediate intervention');
    currentY += 10;

    setProgress(20);

    // ===== DATASET DESCRIPTION =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Dataset Description', '4');
    addParagraph('Three primary datasets from UIDAI covering demographic, enrolment, and biometric records across Indian states and districts.');
    currentY += 5;

    // Demographic Dataset
    addSubTitle('4.1 Demographic Dataset');
    addBulletPoint('Records: 2,071,700');
    addBulletPoint('Columns: 6 (date, state, district, pincode, demo_age_5_17, demo_age_17_)');
    addBulletPoint('Unique States: 58 | Unique Districts: 961');
    addBulletPoint('Memory Usage: 94.8+ MB');
    addParagraph('Contains date-wise demographic data including age groups 5-17 and 17+ across states and districts.');
    currentY += 5;

    // Enrolment Dataset
    addSubTitle('4.2 Enrolment Dataset');
    addBulletPoint('Records: 1,006,029');
    addBulletPoint('Columns: 7 (date, state, district, pincode, age_0_5, age_5_17, age_18_greater)');
    addBulletPoint('Unique States: 49 | Unique Districts: 964');
    addBulletPoint('Memory Usage: 53.7+ MB');
    addParagraph('Contains enrolment data segmented by age groups: 0-5, 5-17, and 18+.');
    currentY += 5;

    // Biometric Dataset
    addSubTitle('4.3 Biometric Dataset');
    addBulletPoint('Records: 1,861,108');
    addBulletPoint('Columns: 6 (date, state, district, pincode, bio_age_5_17, bio_age_17_)');
    addBulletPoint('Unique States: 50 | Unique Districts: 949');
    addBulletPoint('Memory Usage: 85.2+ MB');
    addParagraph('Contains biometric update data for age groups 5-17 and 17+.');

    setProgress(25);

    // ===== METHODOLOGY =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Methodology', '5');

    const methodSteps = [
      { title: 'Step 1: Data Collection', desc: 'Gathered three primary datasets from UIDAI: Demographic (2.07M records), Enrolment (1M records), and Biometric (1.86M records) data covering states and districts across India.' },
      { title: 'Step 2: Data Cleaning', desc: 'Performed strategic cleaning including handling missing values, removing duplicates, and formatting corrections. Geographic identifiers unified across all data silos.' },
      { title: 'Step 3: Data Transformation', desc: 'Advanced preprocessing including state name corrections and data aggregation for analysis. Standardized date formats and removed invalid entries.' },
      { title: 'Step 4: Exploratory Data Analysis', desc: 'Comprehensive statistical analysis including summary statistics, distribution analysis, and correlation studies across all datasets.' },
      { title: 'Step 5: Visualization & Interpretation', desc: 'Created interactive visualizations including heatmaps, time-series charts, ISI decomposition matrices, and monthly distribution analyses.' }
    ];

    methodSteps.forEach((step) => {
      addSubTitle(step.title);
      addParagraph(step.desc);
    });

    // ===== TOOLS & TECHNOLOGIES =====
    currentY += 5;
    addSectionTitle('Tools & Technologies', '6');
    addBulletPoint('Language: Python');
    addBulletPoint('Libraries: Pandas, NumPy, Matplotlib, Seaborn');
    addBulletPoint('Visualization: Plotly, Python Visualizations');
    addBulletPoint('Environment: Jupyter Notebook');

    setProgress(30);

    // ===== EDA SECTION =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Exploratory Data Analysis', '7');
    addParagraph('Summary statistics, distribution analysis, and key findings from the preprocessed datasets.');
    currentY += 5;

    // Demographic Stats
    addSubTitle('7.1 Demographic Dataset - Descriptive Statistics');
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    
    const demoStats = [
      ['Statistic', 'pincode', 'demo_age_5_17', 'demo_age_17_'],
      ['count', '2,071,700', '2,071,700', '2,071,700'],
      ['mean', '527,831.8', '2.35', '21.45'],
      ['std', '197,293.3', '14.90', '125.25'],
      ['min', '100,000', '0', '0'],
      ['max', '855,456', '2,690', '16,166']
    ];

    let tableY = currentY;
    demoStats.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const cellX = margin + (cellIndex * 40);
        if (rowIndex === 0) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 102, 204);
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(60, 60, 60);
        }
        doc.text(cell, cellX, tableY);
      });
      tableY += 6;
    });
    currentY = tableY + 5;

    addParagraph('Interpretation: The demographic dataset shows a mean of 2.35 for age group 5-17 and 21.45 for age 17+, with significant variance indicating regional disparities.');

    // Enrolment Stats
    checkPageBreak(50);
    addSubTitle('7.2 Enrolment Dataset - Descriptive Statistics');
    
    const enrolStats = [
      ['Statistic', 'pincode', 'age_0_5', 'age_5_17', 'age_18+'],
      ['count', '1,006,029', '1,006,029', '1,006,029', '1,006,029'],
      ['mean', '518,641.5', '3.53', '1.71', '0.17'],
      ['max', '855,456', '2,688', '1,812', '855']
    ];

    tableY = currentY;
    enrolStats.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const cellX = margin + (cellIndex * 32);
        if (rowIndex === 0) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 102, 204);
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(60, 60, 60);
        }
        doc.text(cell, cellX, tableY);
      });
      tableY += 6;
    });
    currentY = tableY + 5;

    addParagraph('Interpretation: Enrolment data shows highest activity in the 0-5 age group (mean: 3.53), indicating consistent new enrolments across districts.');

    // Biometric Stats
    checkPageBreak(50);
    addSubTitle('7.3 Biometric Dataset - Descriptive Statistics');
    
    const bioStats = [
      ['Statistic', 'pincode', 'bio_age_5_17', 'bio_age_17_'],
      ['count', '1,861,108', '1,861,108', '1,861,108'],
      ['mean', '521,761.2', '18.39', '19.09'],
      ['max', '855,456', '8,002', '7,625']
    ];

    tableY = currentY;
    bioStats.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const cellX = margin + (cellIndex * 40);
        if (rowIndex === 0) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 102, 204);
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(60, 60, 60);
        }
        doc.text(cell, cellX, tableY);
      });
      tableY += 6;
    });
    currentY = tableY + 5;

    addParagraph('Interpretation: Biometric updates show similar patterns across age groups with mean values around 18-19, with maximum values reaching 8,002 in high-activity districts.');

    // States After Preprocessing
    checkPageBreak(60);
    addSubTitle('7.4 States/UTs After Preprocessing (38 Total)');
    
    const states = [
      'ANDAMAN AND NICOBAR ISLANDS', 'ANDHRA PRADESH', 'ARUNACHAL PRADESH', 'ASSAM',
      'BIHAR', 'CHANDIGARH', 'CHHATTISGARH', 'DADRA AND NAGAR HAVELI',
      'GOA', 'GUJARAT', 'HARYANA', 'HIMACHAL PRADESH', 'JAMMU AND KASHMIR',
      'JHARKHAND', 'KARNATAKA', 'KERALA', 'LADAKH', 'LAKSHADWEEP',
      'MADHYA PRADESH', 'MAHARASHTRA', 'MANIPUR', 'MEGHALAYA', 'MIZORAM',
      'NAGALAND', 'NCT OF DELHI', 'ODISHA', 'PUDUCHERRY', 'PUNJAB',
      'RAJASTHAN', 'SIKKIM', 'TAMIL NADU', 'TELANGANA', 'TRIPURA',
      'UTTAR PRADESH', 'UTTARAKHAND', 'WEST BENGAL'
    ];

    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    let stateX = margin;
    let stateY = currentY;
    states.forEach((state, i) => {
      if (stateX + 50 > pageWidth - margin) {
        stateX = margin;
        stateY += 5;
      }
      doc.text(state, stateX, stateY);
      stateX += 55;
    });
    currentY = stateY + 10;

    // Key EDA Findings
    checkPageBreak(40);
    addSubTitle('7.5 Key EDA Findings');
    addParagraph('Data Quality:');
    addBulletPoint('No null values in critical columns after cleaning');
    addBulletPoint('All duplicates removed from datasets');
    addBulletPoint('Geographic identifiers unified across all data silos');
    addParagraph('Processing Outcomes:');
    addBulletPoint('806 regional clusters identified for predictive momentum');
    addBulletPoint('480 accelerating districts categorized');
    addBulletPoint('Policy interventions mapped to high-pressure districts');

    setProgress(40);

    // ===== VISUAL ANALYSIS SECTION =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Visual Analysis (Charts & Graphs)', '8');
    addParagraph('Each visualization is followed by description, observation, and actionable insight. For interactive versions, visit: https://urban-pulsee.netlify.app/');
    currentY += 5;

    const visualizations = [
      {
        title: 'Within-State ISI Inequality: Concentration of Infrastructure Stress',
        image: isiInequalityStates,
        description: 'Box plot showing the distribution of Infrastructure Stress Index (ISI) across multiple states using logarithmic scale.',
        observation: 'Tamil Nadu shows the highest ISI values with max reaching 13.35M, while Chhattisgarh displays the widest variance. States like Haryana and Maharashtra show more concentrated distributions.',
        insight: 'The log scale reveals significant within-state inequality in infrastructure stress. States with high variance require district-level targeted interventions rather than uniform state-wide policies.',
        category: 'ISI Distribution'
      },
      {
        title: 'Within-State ISI Inequality: Andhra Pradesh Focus',
        image: isiInequalityAP,
        description: 'Detailed box plot analysis of Andhra Pradesh highlighting outlier districts with extreme ISI values.',
        observation: 'Nellore district stands out as a significant outlier with ISI of 12.02M, while the median ISI for the state is around 1-3M range.',
        insight: 'Nellore requires immediate infrastructure attention as an outlier district. The presence of such extreme outliers indicates localized stress points.',
        category: 'State Deep Dive'
      },
      {
        title: 'ISI Decomposition Matrix: National (State Level)',
        image: isiDecompositionNational,
        description: 'Scatter plot showing the relationship between Growth Shock (Acceleration Factor) and Structural Load (Baseline Pressure) with risk categorization.',
        observation: 'Critical (red) districts cluster in the upper half with high structural load. Most states fall below the median shock line.',
        insight: 'States with high structural load AND high growth shock (upper right quadrant) require priority intervention.',
        category: 'Risk Matrix'
      },
      {
        title: 'ISI Decomposition Matrix: Andhra Pradesh (District Level)',
        image: isiDecompositionAP,
        description: 'District-level decomposition matrix for Andhra Pradesh showing Structural Load vs Growth Shock distribution.',
        observation: 'Several districts show structural loads exceeding 15k, with most clustering around the median shock value of 0.25.',
        insight: 'Districts with high load but low shock need maintenance, while those with high shock need capacity expansion.',
        category: 'State Deep Dive'
      },
      {
        title: 'Month-of-Year Distribution: National',
        image: monthlyDistributionNational,
        description: 'Time series showing migration volume patterns across months at the national level with average reference line.',
        observation: 'March shows highest migration volume (~7M), followed by a sharp drop in April-July. September shows a significant spike to 5.34M.',
        insight: 'Seasonal patterns correlate with agricultural cycles and academic sessions. Infrastructure planning should account for March peaks.',
        category: 'Temporal Analysis'
      },
      {
        title: 'Month-of-Year Distribution: Andhra Pradesh',
        image: monthlyDistributionAP,
        description: 'State-level monthly migration pattern for Andhra Pradesh showing similar seasonal trends.',
        observation: 'March peaks at ~350k followed by lowest in April (~50k). December trends highest at ~280k, deviating from national pattern.',
        insight: 'Andhra Pradesh\'s December spike differs from national trends, possibly due to regional festivals or harvest patterns.',
        category: 'Temporal Analysis'
      },
      {
        title: 'Month-of-Year Distribution: Annamayya District',
        image: monthlyDistributionAnnamayya,
        description: 'District-level monthly distribution showing micro-level migration patterns for Annamayya.',
        observation: 'May shows peak at 3,220, with April at lowest (~900). Pattern shows high volatility.',
        insight: 'District-level patterns reveal local dynamics invisible at state/national level.',
        category: 'District Focus'
      },
      {
        title: 'Migration Stress Dashboard: National View',
        image: migrationStressNational,
        description: 'Comprehensive dashboard showing migration patterns and stress indicators across all states.',
        observation: 'Dashboard provides holistic view of migration stress with multiple metrics and geographic distribution patterns.',
        insight: 'Multi-dimensional view enables policymakers to identify correlations between different stress factors.',
        category: 'Dashboard'
      },
      {
        title: 'ISI Component Breakdown Analysis',
        image: isiComponentBreakdown,
        description: 'Decomposition of the Infrastructure Stress Index into its constituent components.',
        observation: 'Visualization shows how different factors contribute to overall ISI scores across regions.',
        insight: 'Understanding component weights helps target specific infrastructure aspects for improvement.',
        category: 'ISI Analysis'
      },
      {
        title: 'Infrastructure Readiness Assessment',
        image: infrastructureReadiness,
        description: 'Assessment of infrastructure capacity and readiness across different regions.',
        observation: 'Readiness levels vary significantly across regions, with some showing critical gaps.',
        insight: 'Readiness scores help prioritize capacity building investments.',
        category: 'Assessment'
      },
      {
        title: 'Structural Load Heatmap',
        image: structuralLoadHeatmap,
        description: 'Geographic heatmap showing structural load distribution across districts.',
        observation: 'Concentrated high-load areas visible in specific geographic clusters.',
        insight: 'Spatial patterns reveal infrastructure corridors and urban agglomeration effects.',
        category: 'Heatmap'
      },
      {
        title: 'Growth Shock Heatmap',
        image: growthShockHeatmap,
        description: 'Heatmap visualization of growth shock factors across regions.',
        observation: 'Growth shock patterns differ from structural load, indicating dynamic change areas.',
        insight: 'Areas with high growth shock but low current load are emerging stress points.',
        category: 'Heatmap'
      },
      {
        title: 'Structural Load Analysis - Extended View',
        image: structuralLoadHeatmap2,
        description: 'Extended analysis of structural load with additional metrics and breakdowns.',
        observation: 'Detailed view reveals sub-regional patterns within high-stress areas.',
        insight: 'Granular analysis enables micro-targeting of infrastructure investments.',
        category: 'Heatmap'
      },
      {
        title: 'Regional Operations Dashboard',
        image: regionalOperations,
        description: 'Operational metrics and service delivery indicators across regions.',
        observation: 'Service delivery efficiency varies with infrastructure stress levels.',
        insight: 'Correlating operational data with stress indices helps optimize resource deployment.',
        category: 'Operations'
      },
      {
        title: 'Momentum Deployment Analysis',
        image: momentumDeployment,
        description: 'Analysis of deployment momentum and acceleration patterns across districts.',
        observation: 'Certain districts show accelerating momentum indicating rising demand.',
        insight: 'Early identification of accelerating districts enables proactive capacity planning.',
        category: 'Momentum'
      }
    ];

    // Add each visualization
    for (let i = 0; i < visualizations.length; i++) {
      const viz = visualizations[i];
      setProgress(40 + Math.floor((i / visualizations.length) * 45));

      doc.addPage();
      currentY = margin;

      // Figure header
      doc.setFontSize(12);
      doc.setTextColor(0, 102, 204);
      doc.setFont('helvetica', 'bold');
      doc.text(`Figure ${i + 1}: ${viz.title}`, margin, currentY);
      currentY += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text(`Category: ${viz.category}`, margin, currentY);
      currentY += 8;

      // Add image
      try {
        const img = await loadImage(viz.image);
        const imgWidth = contentWidth;
        const imgHeight = (img.height / img.width) * imgWidth;
        const maxHeight = 100;
        const finalHeight = Math.min(imgHeight, maxHeight);
        const finalWidth = (finalHeight / imgHeight) * imgWidth;
        
        doc.addImage(img, 'JPEG', margin, currentY, finalWidth, finalHeight);
        currentY += finalHeight + 8;
      } catch (e) {
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text('[Image could not be loaded]', margin, currentY + 30);
        currentY += 70;
      }

      // Description
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(51, 51, 51);
      doc.text('Description:', margin, currentY);
      currentY += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      currentY = addWrappedText(doc, viz.description, margin, currentY, contentWidth, 5);
      currentY += 5;

      // Observation
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(180, 130, 0);
      doc.text('🔍 Observation:', margin, currentY);
      currentY += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      currentY = addWrappedText(doc, viz.observation, margin, currentY, contentWidth, 5);
      currentY += 5;

      // Insight
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 150, 80);
      doc.text('💡 Insight:', margin, currentY);
      currentY += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      currentY = addWrappedText(doc, viz.insight, margin, currentY, contentWidth, 5);
    }

    setProgress(88);

    // ===== CONCLUSIONS =====
    doc.addPage();
    currentY = margin;
    addSectionTitle('Key Insights & Findings', '9');

    const conclusions = [
      { title: 'Critical Infrastructure Stress', desc: '16% of Indian districts (120+ out of 750) face critical or high infrastructure stress driven by migration patterns. 120+ Districts at Risk.' },
      { title: 'Migration Load Dominance', desc: 'Migration-driven load contributes 65–78% of observed infrastructure utilization in high-stress zones.' },
      { title: 'Investment Imperative', desc: '23 metropolitan districts require immediate capacity interventions with estimated investment need of ₹2.8 trillion.' },
      { title: 'Real-Time Governance', desc: 'Aadhaar-driven monitoring enables proactive governance aligned with SDG 9 resilience objectives. 48-Hour Decision Cycle possible.' },
      { title: 'Scalable Framework', desc: 'Methodology validated across 750 districts; ready for integration into national smart city and infrastructure planning.' }
    ];

    conclusions.forEach((item, index) => {
      addSubTitle(`${index + 1}. ${item.title}`);
      addParagraph(item.desc);
    });

    // ===== CONCLUSION =====
    checkPageBreak(40);
    addSectionTitle('Conclusion', '10');
    addParagraph('This comprehensive analysis of UIDAI data reveals significant insights into migration patterns and infrastructure stress across India. The Infrastructure Stress Index (ISI) framework provides a data-driven approach to identify districts requiring immediate intervention. The findings support evidence-based policymaking for SDG 9 infrastructure resilience planning.');
    addParagraph('Governance Implication: Immediate prioritization of capital allocation to critical districts, with 6-month monitoring windows for escalation protocols.');

    // ===== LIMITATIONS =====
    checkPageBreak(40);
    addSectionTitle('Limitations', '11');
    addBulletPoint('Data coverage limited to available UIDAI records');
    addBulletPoint('Temporal scope restricted to the dataset time period');
    addBulletPoint('Infrastructure stress indicators are proxy measures');
    addBulletPoint('Real-time integration not yet implemented');

    // ===== FUTURE SCOPE =====
    checkPageBreak(60);
    addSectionTitle('Future Scope', '12');
    addSubTitle('AI-Driven Forecasting');
    addBulletPoint('12-month migration prediction using ML models');
    addBulletPoint('Seasonal pattern recognition & anomaly detection');
    addBulletPoint('Infrastructure demand nowcasting (1-3 month horizon)');

    addSubTitle('Real-Time DPI Integration');
    addBulletPoint('Live Aadhaar-to-dashboard data pipeline (24-hour latency)');
    addBulletPoint('Integration with utilities (water, energy, transport)');
    addBulletPoint('IoT sensor fusion for ground-truth validation');

    addSubTitle('Smart City Alignment (SDG 9)');
    addBulletPoint('National Smart Cities Mission integration');
    addBulletPoint('Automated resource allocation based on stress indicators');
    addBulletPoint('Cross-border migration tracking for regional coordination');

    setProgress(95);

    // ===== FINAL PAGE - LINK =====
    doc.addPage();
    doc.setFillColor(10, 15, 30);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('Thank You', pageWidth / 2, 80, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(200, 200, 200);
    doc.text('UIDAI Data Hackathon 2026', pageWidth / 2, 95, { align: 'center' });
    doc.text('Urban Pulse Analytics Report', pageWidth / 2, 105, { align: 'center' });

    doc.setFontSize(11);
    doc.setTextColor(100, 200, 255);
    doc.text('For Interactive Visualizations:', pageWidth / 2, 140, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 150, 255);
    doc.textWithLink('https://urban-pulsee.netlify.app/', pageWidth / 2, 155, { 
      align: 'center', 
      url: 'https://urban-pulsee.netlify.app/' 
    });

    setProgress(100);

    // Save the PDF
    doc.save('Urban_Pulse_Analytics_Report_UIDAI_Hackathon_2026.pdf');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
