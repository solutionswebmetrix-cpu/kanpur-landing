
// Copy of config/site.php data as JS constants
export const COMPANY = {
  name: "Kanpur Services",
  phone: "8090444479",
  phone_intl: "918090444479",
  email: "kanpurservicescare@gmail.com",
  address: "4/1011 Awas Vikas-3, Ambedkar Puram, Kalyanpur, Kanpur, Uttar Pradesh - 208017",
  rating: "4.6",
  reviews: "230+",
  hours: "Open Daily 9:00 AM - 9:00 PM"
};

// Placeholder for the image URLs since we moved them to public/
export const IMG_SOLAR_HOME = "/banner.png";
export const IMG_HERO_SOLAR = "/Residential Rooftop Solar.png";
export const IMG_SOLAR_COMMERCIAL = "/Commercial Solar.png";
export const IMG_SOLAR_INDUSTRIAL = "/Industrial Solar.png";
export const IMG_SOLAR_STORAGE = "/Solar Inverter.png";
export const IMG_SOLAR_OFFGRID = "/Off Grid Solar System.png";
export const IMG_SOLAR_HYBRID = "/Hybrid Solar System.png";
export const IMG_APPLIANCE_SERVICE = "/banner.png";

export const SOLAR_SERVICES = [
  ["Residential Rooftop Solar", "residential-rooftop-solar", "Complete rooftop solar system design, installation & commissioning for homes.", ["25 Years Warranty", "Government Subsidy", "Net Metering", "MNRE Approved", "Free Maintenance"], "fa-solar-panel", "/Residential Rooftop Solar.png"],
  ["Commercial Solar", "commercial-solar", "Custom solar solutions for shops, offices, hotels, restaurants, commercial buildings.", ["High ROI", "Custom Design", "Fast Installation", "Energy Storage"], "fa-building", "/Commercial Solar.png"],
  ["Industrial Solar", "industrial-solar", "Large-scale solar power plants for factories, industries and manufacturing units.", ["High Capacity", "Industrial Grade", "24/7 Power", "Grid Integration"], "fa-industry", "/Industrial Solar.png"],
  ["On Grid Solar System", "on-grid-solar", "Grid-tied solar systems that feed excess energy to the grid.", ["Net Metering", "Lower Bills", "No Battery", "Government Subsidy"], "fa-plug", "/On Grid Solar System.png"],
  ["Off Grid Solar System", "off-grid-solar", "Standalone solar systems with battery backup for remote areas.", ["Power Backup", "No Grid", "Energy Independence", "Rural Friendly"], "fa-battery-full", "/Off Grid Solar System.png"],
  ["Hybrid Solar System", "hybrid-solar", "Combination of on-grid and off-grid for maximum efficiency.", ["Both Grid + Battery", "24/7 Power", "Smart Management", "Backup Option"], "fa-sync", "/Hybrid Solar System.png"],
  ["PM Surya Ghar Solar", "pm-surya-ghar", "Avail up to ₹1,08,000 government subsidy on rooftop solar for 3 kW and above systems.", ["Up to ₹1,08,000 Subsidy", "MNRE Approved Components", "Authorized Installation Partner", "Complete Documentation & Net Metering Support"], "fa-sun", "/Residential Rooftop Solar.png"],
  ["Solar Panel Installation", "solar-panel-installation", "Professional solar panel installation with precision.", ["Expert Installation", "Safety Standards", "Quality Panels", "After Service"], "fa-solar-panel", "/Solar Panel Installation.png"],
  ["Solar Water Pump", "solar-water-pump", "Solar-powered water pumps for irrigation and domestic use.", ["Low Running Cost", "Govt Subsidy", "Rural Friendly", "Low Maintenance"], "fa-water", "/Solar Water Pump.png"],
  ["Solar Atta Chakki", "solar-atta-chakki", "Solar-powered flour mills for villages and homes.", ["Cost Effective", "Rural Friendly", "Low Maintenance", "Govt Subsidy"], "fa-bread-slice", "/Solar Atta Chakki.png"],
  ["Solar Street Light", "solar-street-light", "Standalone solar street lights with auto-on/off.", ["No Grid", "Low Maintenance", "Durable", "Energy Saving"], "fa-lightbulb", "/Solar Street Light.png"],
  ["Solar Water Heater", "solar-water-heater", "Solar-powered water heaters for homes and commercial use.", ["Hot Water 24/7", "Energy Saving", "Low Maintenance", "Durable"], "fa-shower", "/Solar Water Heater.png"],
  ["Solar Battery", "solar-battery", "High-capacity lithium-ion and tubular solar batteries.", ["Long Life", "Fast Charging", "Low Maintenance", "Warranty"], "fa-battery-three-quarters", "/Solar Battery.png"],
  ["Solar Inverter", "solar-inverter", "Premium solar hybrid and PCU with MPPT and PCU.", ["Pure Sine Wave", "MPPT Technology", "High Efficiency", "Smart Display"], "fa-bolt", "/Solar Inverter.png"],
  ["Solar Panel Cleaning", "solar-panel-cleaning", "Professional solar panel cleaning service.", ["Soft Brush", "RO Water", "Eco Safe", "Boost Efficiency"], "fa-spray-can-sparkles", "/Solar Panel Cleaning.png"],
  ["Solar Maintenance", "solar-maintenance", "Annual maintenance for solar systems.", ["Regular Checkups", "Performance Boost", "Warranty Support", "Priority Service"], "fa-shield-halved", "/Solar Maintenance.png"],
  ["Solar AMC", "solar-amc", "Annual Maintenance Contract for solar systems.", ["Yearly Cover", "Free Checkups", "Priority Service", "Discount Parts"], "fa-file-contract", "/Solar AMC.png"],
  ["Solar Structure", "solar-structure", "Strong and durable solar panel mounting structures.", ["Custom Design", "Weather Resistant", "Wind Proof", "Corrosion Free"], "fa-screwdriver-wrench", "/Solar Structure.png"],
  ["Net Metering", "net-metering", "Net metering setup and documentation.", ["Full Documentation", "DISCOM Approval", "Quick Installation", "After-Sales Support"], "fa-route", "/Net Metering.png"],
  ["Solar Subsidy Assistance", "solar-subsidy-assistance", "Complete help with solar subsidy application.", ["Paperwork Handling", "Govt Liaison", "Quick Approval", "Authorized Partner"], "fa-hand-holding-dollar", "/Solar Subsidy Assistance.png"],
];

export const SECONDARY_SERVICES = [
  ["Air Conditioner", "ac-service", "Complete AC solutions including installation, repair, and maintenance.", ["Split AC Installation", "Window AC Installation", "AC Repair", "AC Gas Filling", "AC Maintenance", "Inverter AC Service", "Annual Maintenance Contract"], "fa-snowflake", IMG_APPLIANCE_SERVICE],
  ["Refrigerator", "refrigerator-service", "Refrigerator and deep freezer repair services.", ["Refrigerator Repair", "Deep Freezer Repair", "Cooling Problem", "Gas Charging", "Compressor Repair"], "fa-snowflake", IMG_APPLIANCE_SERVICE],
  ["Washing Machine", "washing-machine-service", "Repair and maintenance for all types of washing machines.", ["Front Load Repair", "Top Load Repair", "Semi Automatic Repair", "Fully Automatic Repair", "Drum Cleaning", "Installation"], "fa-soap", IMG_APPLIANCE_SERVICE],
  ["Dishwasher", "dishwasher-service", "Dishwasher installation, repair, and maintenance services.", ["Dishwasher Installation", "Dishwasher Repair", "Dishwasher Maintenance", "Water Leakage Repair"], "fa-utensils", IMG_APPLIANCE_SERVICE],
  ["Kitchen Appliances", "kitchen-appliances-service", "Chimney and hob repair, installation, and AMC services.", ["Chimney Installation", "Chimney Repair", "Chimney Cleaning", "Chimney AMC", "Hob Repair", "Hob Installation"], "fa-fire-burner", IMG_APPLIANCE_SERVICE],
  ["Geyser", "geyser-service", "Water geyser repair, installation, and maintenance.", ["Same Day", "All Brands", "Genuine Parts", "Warranty"], "fa-droplet", IMG_APPLIANCE_SERVICE],
  ["CCTV", "cctv-service", "CCTV camera installation and service.", ["HD Cameras", "Mobile App", "Remote View", "Warranty"], "fa-video", IMG_APPLIANCE_SERVICE],
];

export const REVIEWS = [
  ["Amit Sharma", "Kalyanpur, Kanpur", 5, "Got my rooftop solar installed by Kanpur Services. The team was professional and handled the PM Surya Ghar subsidy paperwork smoothly. Highly recommended!"],
  ["Priya Verma", "Swaroop Nagar, Kanpur", 5, "PM Surya Ghar subsidy was processed perfectly. My electricity bill is now almost zero!"],
  ["Rajesh Singh", "Kakadeo, Kanpur", 5, "Excellent service for solar installation at my factory. Great ROI and professional team."],
  ["Sneha Gupta", "Kidwai Nagar, Kanpur", 5, "Installed solar panels on my house roof. Best decision ever! Bills reduced by 90%."],
];

export const SOLAR_FAQS = [
  ["How much can I save with rooftop solar?", "A typical 3 kW rooftop solar system can save ₹3,000-₹4,500 per month on electricity bills. With PM Surya Ghar subsidy, payback is usually 3-5 years."],
  ["What is PM Surya Ghar Muft Bijli Yojana?", "It is a central government scheme providing up to ₹78,000 subsidy on rooftop solar for homes. You get 300 units of free electricity per month. We help with full application and installation."],
  ["How much subsidy will I get under PM Surya Ghar?", "For 1-2 kW system: ₹30,000 to ₹60,000. For 3 kW and above: ₹78,000. Subsidy is credited directly to your bank account after installation and inspection."],
  ["Do you help with solar subsidy paperwork?", "Yes, we are an authorized vendor and handle the complete application, DISCOM approval, net metering and subsidy claim process for you."],
  ["Do you provide warranty on solar installations?", "Yes, solar panels come with 25-year performance warranty, inverter with 5-10 year warranty and our installation workmanship with 2-year service warranty."],
  ["What is the difference between on-grid, off-grid and hybrid solar?", "On-grid: Connected to grid, no battery, net metering. Off-grid: Standalone with battery backup. Hybrid: Combination of both with backup."],
  ["How long does solar installation take?", "Typically 2-3 days for residential systems, 1-2 weeks for commercial, after all approvals are received."],
  ["Do you service all brands of solar panels and inverters?", "Yes, we service all major brands including Waaree, Adani, Tata, Luminous, UTL, Microtek, Havells, Growatt, Sungrow, Solis, Livguard."],
];

export const SOLAR_BRANDS = [
  ["Waaree", "fa-solar-panel"],
  ["Adani Solar", "fa-solar-panel"],
  ["Tata Power Solar", "fa-solar-panel"],
  ["Luminous", "fa-battery-three-quarters"],
  ["Microtek", "fa-bolt"],
  ["Growatt", "fa-bolt"],
  ["Solis", "fa-bolt"],
  ["Sungrow", "fa-bolt"],
  ["Livguard", "fa-battery-three-quarters"],
  ["Havells", "fa-lightbulb"],
];

export const GALLERY_IMAGES = [
  ["Residential Projects", IMG_SOLAR_HOME],
  ["Commercial Projects", IMG_SOLAR_COMMERCIAL],
  ["Industrial Projects", IMG_SOLAR_INDUSTRIAL],
  ["Farm Houses", IMG_SOLAR_OFFGRID],
  ["Schools", IMG_SOLAR_HYBRID],
  ["Hospitals", IMG_SOLAR_STORAGE],
];

export const WHY_SOLAR = [
  ["Save up to 90% Electricity Bills", "fa-dollar-sign", "Cut your monthly electricity costs by generating your own power"],
  ["Government Subsidy Available", "fa-hand-holding-dollar", "Get up to ₹78,000 subsidy from the central government"],
  ["25+ Years Panel Life", "fa-trophy", "Solar panels last for 25+ years with warranty"],
  ["Environment Friendly", "fa-leaf", "Reduce your carbon footprint and save the planet"],
  ["Increase Property Value", "fa-house", "Solar installation increases your property value"],
  ["Fast ROI", "fa-bolt", "Recover your investment in just 3-5 years"],
];

export const WHY_CHOOSE_US = [
  ["Experienced Engineers", "fa-user-tie", "Our team has years of experience in solar installations"],
  ["MNRE Approved Components", "fa-certificate", "We use only MNRE certified solar products"],
  ["Latest Technology", "fa-microchip", "Latest solar technology for maximum efficiency"],
  ["Premium Brands", "fa-star", "Partnerships with all top solar brands"],
  ["Affordable Pricing", "fa-money-bill", "Competitive prices with no hidden charges"],
  ["Fast Installation", "fa-truck-fast", "Quick installation with minimal disruption"],
  ["Doorstep Support", "fa-location-dot", "Doorstep service for all your needs"],
  ["After Sales Service", "fa-headset", "Dedicated after-sales support team"],
  ["Warranty Support", "fa-shield", "Complete warranty handling for all products"],
];

export const SOLAR_TYPES = [
  ["On Grid", "On-grid solar systems are connected to the electricity grid. Excess energy is sent to grid and you get credit via net metering.", "Best for: Homes & businesses with regular grid supply", ["Net metering", "Lower electricity bills", "No battery required", "Low maintenance"], "₹60,000 to ₹65,000", "fa-plug"],
  ["Off Grid", "Off-grid solar systems are standalone with battery backup. Perfect for remote areas with no grid.", "Best for: Remote areas & farms", ["24/7 backup", "Energy independence", "No grid dependency", "Battery storage"], "₹45,000 to ₹55,000", "fa-battery-full"],
  ["Hybrid", "Hybrid solar systems combine the best of both on-grid and off-grid with battery backup.", "Best for: Homes & businesses wanting backup", ["Grid + battery", "24/7 power", "Smart management", "Backup option"], "₹90,000 to ₹1,00,000", "fa-sync"],
  ["Commercial Solar", "Commercial solar systems are specially designed for offices, factories, schools, hospitals, warehouses and commercial buildings to significantly reduce electricity costs while ensuring long-term energy savings.", "Best for: Factories, Commercial Buildings, Schools, Hospitals, Offices, Warehouses", ["High Power Generation", "Lower Electricity Bills", "Net Metering Support", "Scalable System", "Low Maintenance", "25–30 Years Warranty"], "₹2,50,000 onwards", "fa-building"],
];

export const PM_SURYA_GHAR = {
  eligibility: [
    "Residential house owners in urban and rural areas",
    "Valid electricity connection",
    "Aadhaar card",
    "Bank account details",
  ],
  benefits: [
    "Up to ₹1,08,000 Subsidy",
    "MNRE Approved Components",
    "Authorized Installation Partner",
    "Complete Documentation & Net Metering Support",
  ],
  subsidy: [
    "1 kW – 2 kW: ₹45,000 – ₹90,000",
    "3 kW and above: ₹1,08,000",
  ],
  process: [
    "Site survey by our team",
    "Application submission",
    "Government approval",
    "Installation",
    "Net metering setup",
    "Subsidy disbursement",
  ],
  documents: [
    "Electricity Bill",
    "Aadhaar Card",
    "PAN Card",
    "Bank Passbook",
    "House Tax Receipt",
    "Email ID",
    "Mobile Number",
  ],
};

export const INSTALLATION_PROCESS = [
  ["Free Site Survey", "Our expert team visits your site to assess roof condition, shading, load requirements and design the system.", "fa-ruler-combined"],
  ["System Design", "Custom solar system design based on your needs and site conditions.", "fa-palette"],
  ["Quotation", "We provide you with a detailed quotation including system design, equipment, cost and subsidy details.", "fa-file-invoice-dollar"],
  ["Government Approval", "We handle the complete application and approval process from DISCOM and MNRE.", "fa-stamp"],
  ["Professional Installation", "Our trained technicians install the solar system with quality and safety standards.", "fa-screwdriver-wrench"],
  ["Net Metering", "We setup net metering and get approval from DISCOM.", "fa-route"],
  ["Electricity Savings", "Start saving on your electricity bills from day one!", "fa-bolt-lightning"],
];

export function whatsappLink(message = "") {
  const text = message !== "" ? message : "Hello Kanpur Services,\n\nName:\nPhone:\nCity:\nService:\n\nI want to book a solar service.\n\nPlease contact me.";
  return `https://wa.me/${COMPANY.phone_intl}?text=${encodeURIComponent(text)}`;
}
