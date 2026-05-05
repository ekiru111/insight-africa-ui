import { ArrowRight } from "lucide-react";
import caseStudyImg from "@/assets/case-study.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import malariaRiskMap from "@/assets/malaria-risk-hotspots.png";

const metrics = [
  { value: "340%", label: "ROI Achieved" },
  { value: "18 mo", label: "Project Duration" },
  { value: "12", label: "Countries Covered" },
  { value: "$4.2M", label: "Cost Savings Identified" },
];

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto section-padding">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-body">
            Case Study
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            Real Impact,{" "}
            <span className="text-gradient-gold">Proven Results</span>
          </h2>
        </div>

        {/* Featured Case Study */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={caseStudyImg}
              alt="Data analyst presenting strategic findings"
              className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="glass-dark text-primary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                Featured Project
              </span>
            </div>
          </div>

          <div>
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Public Health Analytics
            </span>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug">
              Optimizing Health Supply Chains Across East Africa
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              We developed a predictive analytics framework for a multilateral health
              organization, enabling real-time supply chain optimization across 12 countries.
              The result: a 340% return on investment and $4.2M in identified cost savings
              within 18 months.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center glass-card rounded-xl p-4">
                  <p className="font-heading text-2xl font-bold text-accent">{metric.value}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
            >
              Read Full Case Study
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Uganda Malaria ML Case Study */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
            <div>
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Disease Modelling & Surveillance
              </span>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug">
                Uganda Malaria Spatio-Temporal Machine Learning
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                A machine-learning study integrating UDHS survey, household, geographic and Google Earth
                Engine environmental data to map malaria risk across Uganda. We combined an SEIR
                outbreak model with regional risk stratification to forecast hotspots and quantify the
                impact of LLIN bed-net distribution interventions.
              </p>
              <ul className="text-muted-foreground font-body text-sm space-y-2 mb-6 list-disc pl-5">
                <li>Identified Karamoja (32.1%) and Busoga (21.4%) as very-high-risk regions.</li>
                <li>SEIR model: peak of 2,978 sick children at day 40, R₀ ≈ 10.09.</li>
                <li>Mass LLIN distribution scenario: 16% reduction in peak cases, peak delayed by 10 days.</li>
              </ul>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "7,787", label: "Children Tested" },
                  { value: "13", label: "Regions Mapped" },
                  { value: "16%", label: "Peak Case Reduction" },
                  { value: "R₀ 10", label: "Transmission Index" },
                ].map((m) => (
                  <div key={m.label} className="text-center bg-secondary rounded-xl p-4">
                    <p className="font-heading text-xl font-bold text-accent">{m.value}</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/ekiru111/Uganda-Malaria-Spatio-temporal-ML"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
              >
                View Project on GitHub
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
            <figure className="rounded-xl overflow-hidden bg-gradient-to-br from-primary to-navy-light border border-accent/20 shadow-lg">
              <div className="bg-background/95 p-3">
                <img
                  src={malariaRiskMap}
                  alt="Choropleth map of malaria risk hotspots by region in Uganda 2018-19, with Karamoja at 32.1% and Busoga at 21.4%"
                  className="w-full h-auto object-contain rounded-md"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-5 py-4 border-t border-accent/20">
                <p className="text-primary-foreground font-body text-sm leading-relaxed">
                  <span className="text-accent font-semibold">Fig 1.</span> Regional malaria
                  prevalence across Uganda — Karamoja and Busoga emerge as primary hotspots.
                </p>
                <p className="text-primary-foreground/60 font-body text-xs mt-1">
                  Source: UDHS / MIS 2018–19
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Secondary Case Study */}
        <div className="glass-card rounded-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src={teamImg}
              alt="African business professionals in a strategy meeting"
              className="w-full h-64 lg:h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 w-fit">
              Financial Services
            </span>
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-3">
              Credit Risk Modelling for Pan-African Banking Group
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Built bespoke statistical models that reduced non-performing loans by 23%,
              enabling a leading bank to confidently expand into three new markets.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
