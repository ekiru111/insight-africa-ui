import caseStudyImg from "@/assets/case-study.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import malariaRiskMap from "@/assets/malaria-risk-hotspots.png";
import malariaSeirModel from "@/assets/malaria-seir-model.png";

export type CaseStudyFigure = {
  src: string;
  caption: string;
  alt: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  studyArea: string;
  studyPopulation: string;
  duration: string;
  partners: string;
  metrics: { value: string; label: string }[];
  sections: CaseStudySection[];
  figures?: CaseStudyFigure[];
  downloadUrl?: string;
  externalUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "health-supply-chain-east-africa",
    category: "Public Health Analytics",
    title: "Optimizing Health Supply Chains Across East Africa",
    subtitle:
      "A predictive analytics framework that delivered 340% ROI and surfaced $4.2M in cost savings across 12 countries.",
    heroImage: caseStudyImg,
    heroAlt: "Data analyst presenting strategic findings",
    studyArea: "12 countries across East and Southern Africa",
    studyPopulation: "Public health facilities, regional medical stores, and last-mile distribution networks",
    duration: "18 months",
    partners: "Multilateral health organization (anonymised at partner request)",
    metrics: [
      { value: "340%", label: "ROI Achieved" },
      { value: "$4.2M", label: "Cost Savings" },
      { value: "12", label: "Countries" },
      { value: "18 mo", label: "Duration" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Public health supply chains across East Africa face chronic stock-outs of essential medicines, vaccines, and diagnostics — driven by fragmented data systems, demand volatility, and limited forecasting capability at regional medical stores.",
          "Our partner, a multilateral health organization operating across 12 countries, commissioned us to build a predictive analytics framework that could unify disparate facility-level data and surface optimization opportunities in near real time.",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "We integrated 36 months of consumption, shipment, and stock-on-hand data from national LMIS systems with weather, conflict, and demographic indicators. A gradient-boosted forecasting model was trained per product–facility pair, with hierarchical reconciliation at district and national level.",
          "An optimization layer combined the forecasts with shelf-life, lead-time, and transport cost constraints to recommend re-allocation moves between facilities — reducing both stock-outs and expiries simultaneously.",
          "We delivered the framework as a country-deployable dashboard with a fortnightly action queue for supply chain officers, and ran capacity-building workshops in each country office.",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "Across the 18-month engagement, the framework identified $4.2M in addressable cost savings (avoided expiries, reduced emergency shipments, and freight consolidation), and the partner reported a 340% ROI on the program investment.",
          "Stock-out rates for tracer commodities fell by an average of 31% in pilot districts, and forecast accuracy (MAPE) improved from 48% to 22% over baseline statistical methods.",
          "The framework is now embedded in routine quarterly supply planning cycles in 9 of the 12 countries.",
        ],
      },
    ],
  },
  {
    slug: "uganda-malaria-spatio-temporal-ml",
    category: "Disease Modelling & Surveillance",
    title: "Uganda Malaria Spatio-Temporal Machine Learning",
    subtitle:
      "Combining UDHS survey data, Google Earth Engine climate features, and a hybrid ML–SEIR model to forecast malaria hotspots and quantify LLIN intervention impact.",
    heroImage: malariaRiskMap,
    heroAlt: "Choropleth map of malaria risk hotspots across Uganda regions",
    studyArea: "13 regions of Uganda",
    studyPopulation: "7,787 children aged 0–59 months tested in the Uganda Demographic and Health Survey (UDHS)",
    duration: "9 months",
    partners: "Independent academic research output",
    metrics: [
      { value: "7,787", label: "Children Tested" },
      { value: "13", label: "Regions Mapped" },
      { value: "16%", label: "Peak Case Reduction" },
      { value: "R₀ 10", label: "Transmission Index" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Malaria remains the leading cause of morbidity and mortality among children under five in Uganda, with regional risk varying widely as a function of climate, altitude, housing, and bed-net coverage.",
          "Routine surveillance struggles to anticipate outbreaks ahead of seasonal rainfall peaks, limiting the impact of pre-positioning interventions such as long-lasting insecticidal nets (LLINs).",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "We integrated household and geographic modules from the UDHS / MIS 2018–19 with environmental features extracted from Google Earth Engine — including rainfall, land surface temperature, NDVI, and elevation — at the cluster level.",
          "Machine-learning classifiers (random forest, gradient boosting) were trained to predict cluster-level malaria positivity, and a regional risk stratification was produced via choropleth mapping.",
          "A compartmental SEIR (Susceptible–Exposed–Infectious–Recovered) outbreak model was then fitted to the high-risk regions and used to simulate counterfactual LLIN distribution scenarios.",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "Karamoja (32.1% prevalence) and Busoga (21.4%) emerged as very-high-risk regions, while Kigezi and Kampala showed the lowest burden.",
          "The fitted SEIR model projected a peak of 2,978 symptomatic children at day 40 post-rainfall trigger, with a basic reproduction number R₀ ≈ 10.09.",
          "A simulated mass LLIN distribution scenario reduced peak cases by 16% and delayed the peak by 10 days — providing a quantitative basis for pre-rainfall net distribution timing.",
        ],
      },
    ],
    figures: [
      {
        src: malariaRiskMap,
        caption:
          "Fig 1. Regional risk stratification — malaria prevalence by region, with Karamoja (32.1%) and Busoga (21.4%) as primary hotspots. Source: UDHS / MIS 2018–19.",
        alt: "Choropleth map of malaria risk hotspots across Uganda regions",
      },
      {
        src: malariaSeirModel,
        caption:
          "Fig 2. Hybrid ML–SEIR outbreak dynamics — peak of 2,978 symptomatic children at day 40 post-rainfall trigger (R₀ ≈ 10.09).",
        alt: "SEIR compartmental model curve over 200 days",
      },
    ],
    externalUrl: "https://github.com/ekiru111/Uganda-Malaria-Spatio-temporal-ML",
  },
  {
    slug: "credit-risk-pan-african-banking",
    category: "Financial Services",
    title: "Credit Risk Modelling for Pan-African Banking Group",
    subtitle:
      "Bespoke statistical models that reduced non-performing loans by 23% and unlocked confident expansion into three new markets.",
    heroImage: teamImg,
    heroAlt: "African business professionals in a strategy meeting",
    studyArea: "Retail and SME loan portfolios across 7 African markets",
    studyPopulation: "1.2M active loan accounts and 4 years of repayment history",
    duration: "12 months",
    partners: "Pan-African banking group (anonymised)",
    metrics: [
      { value: "23%", label: "NPL Reduction" },
      { value: "3", label: "New Markets" },
      { value: "1.2M", label: "Accounts Modelled" },
      { value: "12 mo", label: "Duration" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "The client's existing scorecards were built on a single-market dataset and over-rejected thin-file applicants — constraining growth in newer markets where alternative data signals are more predictive than traditional bureau scores.",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "We built market-specific PD (probability of default) models using a combination of logistic regression for regulatory transparency and gradient boosting for challenger benchmarking.",
          "Alternative features — mobile money velocity, airtime top-up cadence, and merchant transaction patterns — were engineered alongside traditional bureau attributes.",
          "Models were validated on out-of-time holdouts and stress-tested against macroeconomic shock scenarios before staged production rollout.",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "Non-performing loan rates fell by 23% in the first 12 months post-deployment, while approval rates for thin-file applicants increased by 18%.",
          "The validated framework gave the bank's risk committee the confidence to enter three new markets, with portfolio quality remaining within target tolerances through the first year of operation.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
