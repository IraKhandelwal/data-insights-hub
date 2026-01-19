const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-foreground">Urban</span>
              <span className="gradient-text">Pulse</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Aadhaar-Driven Migration Infrastructure Stress Analytics for SDG 9 Infrastructure Planning
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Project Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Python ETL Pipeline</li>
              <li>ISI Calculation Scripts</li>
              <li>Validation Routines</li>
              <li>Statistical Tables</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">References</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>UN SDG 9 Framework</li>
              <li>World Bank Infrastructure Guidelines</li>
              <li>OECD Resilience Metrics</li>
              <li>UIDAI Data Quality Standards</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            UIDAI Data Hackathon 2026 | Urban Pulse Analytics Team
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            Complete dataset and analysis pipeline available under government data-sharing protocols
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
