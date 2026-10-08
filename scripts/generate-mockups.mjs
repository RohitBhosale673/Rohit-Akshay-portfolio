import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createBrowserChrome(title, url, contentSvg, accentColor = '#3B82F6') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750" fill="none">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F1218"/>
        <stop offset="100%" stop-color="#08090C"/>
      </linearGradient>
      <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${accentColor}"/>
        <stop offset="100%" stop-color="#6366F1"/>
      </linearGradient>
      <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#ffffff" fill-opacity="0.04" />
      </pattern>
    </defs>
    
    <!-- Outer window border and container -->
    <rect width="1200" height="750" rx="16" fill="url(#bgGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
    <rect width="1200" height="750" rx="16" fill="url(#dotPattern)"/>
    
    <!-- Browser Top Bar -->
    <rect x="0" y="0" width="1200" height="56" rx="16" fill="#141822" fill-opacity="0.9"/>
    <rect x="0" y="44" width="1200" height="12" fill="#141822"/>
    <line x1="0" y1="56" x2="1200" y2="56" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    
    <!-- Window controls -->
    <circle cx="28" cy="28" r="6" fill="#EF4444" fill-opacity="0.8"/>
    <circle cx="48" cy="28" r="6" fill="#F59E0B" fill-opacity="0.8"/>
    <circle cx="68" cy="28" r="6" fill="#10B981" fill-opacity="0.8"/>
    
    <!-- URL Address pill -->
    <rect x="180" y="14" width="840" height="28" rx="6" fill="#0B0D12" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <circle cx="202" cy="28" r="4" fill="${accentColor}"/>
    <text x="218" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94A3B8" font-weight="500">${url}</text>
    
    <!-- Action icons placeholder -->
    <rect x="1040" y="18" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="1075" y="18" width="20" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="1110" y="18" width="60" height="20" rx="4" fill="${accentColor}" fill-opacity="0.2"/>
    <text x="1122" y="32" font-family="system-ui, sans-serif" font-size="10" fill="${accentColor}" font-weight="700">LIVE</text>
    
    <!-- Main Content Area -->
    <g transform="translate(0, 56)">
      ${contentSvg}
    </g>
  </svg>`;
}

// 1. Jagdamba Hotel
const jagdamba1 = createBrowserChrome('Jagdamba Hotel', 'https://jagdamba-hotel-website.vercel.app', `
  <rect width="1200" height="694" fill="#0B0D13"/>
  <!-- Nav -->
  <rect x="60" y="24" width="1080" height="60" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
  <text x="90" y="60" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#F8FAFC">HOTEL JAGDAMBA</text>
  <text x="650" y="58" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">ACCOMMODATION</text>
  <text x="820" y="58" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">DINING &amp; EVENTS</text>
  <rect x="980" y="36" width="130" height="36" rx="6" fill="#D97706"/>
  <text x="1008" y="59" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">BOOK A ROOM</text>
  
  <!-- Hero Section -->
  <rect x="60" y="110" width="1080" height="340" rx="16" fill="#151A24" stroke="rgba(217,119,6,0.2)"/>
  <circle cx="950" cy="270" r="180" fill="#D97706" fill-opacity="0.08"/>
  <rect x="110" y="150" width="180" height="26" rx="4" fill="rgba(217,119,6,0.15)"/>
  <text x="122" y="167" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#F59E0B">LUXURY &amp; HOSPITALITY</text>
  <text x="110" y="230" font-family="Georgia, serif" font-size="38" font-weight="700" fill="#FFFFFF">Exquisite Comfort &amp;</text>
  <text x="110" y="275" font-family="Georgia, serif" font-size="38" font-weight="700" fill="#FCD34D">Authentic Dining</text>
  <text x="110" y="320" font-family="system-ui, sans-serif" font-size="15" fill="#94A3B8">Experience authentic cuisine, premier stay accommodations and banquet hosting.</text>
  
  <rect x="110" y="355" width="160" height="44" rx="8" fill="#F59E0B"/>
  <text x="138" y="382" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0B0D13">EXPLORE SUITES</text>
  <rect x="290" y="355" width="160" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
  <text x="328" y="382" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">VIEW MENU</text>

  <!-- 3 Feature Cards -->
  <g transform="translate(60, 480)">
    <rect x="0" y="0" width="340" height="180" rx="12" fill="#121620" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="44" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF">Deluxe Suites</text>
    <text x="24" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Fully air-conditioned luxury rooms with premium amenities and 24/7 service.</text>
    <text x="24" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#F59E0B">View Details →</text>

    <rect x="370" y="0" width="340" height="180" rx="12" fill="#121620" stroke="rgba(255,255,255,0.06)"/>
    <text x="394" y="44" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF">Specialty Restaurant</text>
    <text x="394" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Traditional Maharashtrian dishes, tandoor delicacies, and family dining hall.</text>
    <text x="394" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#F59E0B">Menu &amp; Specials →</text>

    <rect x="740" y="0" width="340" height="180" rx="12" fill="#121620" stroke="rgba(255,255,255,0.06)"/>
    <text x="764" y="44" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF">Banquet &amp; Events</text>
    <text x="764" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Spacious celebration halls for family gatherings, weddings and corporate meetings.</text>
    <text x="764" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#F59E0B">Inquire Venue →</text>
  </g>
`, '#F59E0B');

const jagdamba2 = createBrowserChrome('Jagdamba Hotel - Suites Showcase', 'https://jagdamba-hotel-website.vercel.app/rooms', `
  <rect width="1200" height="694" fill="#0B0D13"/>
  <text x="60" y="70" font-family="Georgia, serif" font-size="32" font-weight="700" fill="#FFFFFF">Accommodation &amp; Premium Suites</text>
  <text x="60" y="105" font-family="system-ui, sans-serif" font-size="15" fill="#94A3B8">Clean, peaceful, and fully appointed living spaces for business and leisure travellers.</text>
  <g transform="translate(60, 140)">
    <rect x="0" y="0" width="520" height="490" rx="16" fill="#131722" stroke="rgba(255,255,255,0.08)"/>
    <rect x="0" y="0" width="520" height="260" rx="16" fill="#1E2538"/>
    <text x="30" y="310" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">Executive Master Suite</text>
    <text x="30" y="345" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">King-size luxury bed, high-speed WiFi, smart TV, climate control, and en-suite bath.</text>
    <rect x="30" y="410" width="140" height="40" rx="6" fill="#F59E0B"/>
    <text x="56" y="435" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0B0D13">RESERVE NOW</text>

    <rect x="560" y="0" width="520" height="490" rx="16" fill="#131722" stroke="rgba(255,255,255,0.08)"/>
    <rect x="560" y="0" width="520" height="260" rx="16" fill="#1A2130"/>
    <text x="590" y="310" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">Family Deluxe Stay</text>
    <text x="590" y="345" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Spacious dual-bed setup ideal for families, attached balcony view and dining service.</text>
    <rect x="590" y="410" width="140" height="40" rx="6" fill="#F59E0B"/>
    <text x="616" y="435" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0B0D13">RESERVE NOW</text>
  </g>
`, '#F59E0B');

// 2. Mini CRM Mobile Application
const miniCrm1 = createBrowserChrome('Mini CRM Mobile App', 'https://github.com/RohitBhosale673/-Mini-CRM-Mobile-Application', `
  <rect width="1200" height="694" fill="#090B10"/>
  <!-- CRM App Header -->
  <g transform="translate(60, 40)">
    <text x="0" y="32" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">Mini CRM Dashboard</text>
    <text x="0" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Mobile-first client relationship &amp; pipeline management system</text>
    <rect x="880" y="10" width="200" height="38" rx="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)"/>
    <text x="906" y="34" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#60A5FA">🐙 SOURCE ON GITHUB</text>
  </g>

  <!-- Metric row -->
  <g transform="translate(60, 130)">
    <rect x="0" y="0" width="250" height="100" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">ACTIVE CLIENTS</text>
    <text x="24" y="74" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">128</text>

    <rect x="275" y="0" width="250" height="100" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="299" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">OPEN DEALS</text>
    <text x="299" y="74" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#3B82F6">34</text>

    <rect x="550" y="0" width="250" height="100" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="574" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">PIPELINE VALUE</text>
    <text x="574" y="74" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#10B981">$48,200</text>

    <rect x="825" y="0" width="255" height="100" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="849" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">WIN RATE</text>
    <text x="849" y="74" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#A855F7">68.4%</text>
  </g>

  <!-- Pipeline Kanban Columns -->
  <g transform="translate(60, 260)">
    <!-- Column 1: Leads -->
    <rect x="0" y="0" width="340" height="390" rx="12" fill="#10141E" stroke="rgba(255,255,255,0.05)"/>
    <text x="20" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#94A3B8">PROSPECT LEADS (3)</text>
    <rect x="16" y="55" width="308" height="90" rx="8" fill="#161C2C" stroke="rgba(255,255,255,0.08)"/>
    <text x="32" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Acme Corp Logistics</text>
    <text x="32" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#60A5FA">Deal: $12,500 • High Priority</text>

    <rect x="16" y="160" width="308" height="90" rx="8" fill="#161C2C" stroke="rgba(255,255,255,0.08)"/>
    <text x="32" y="190" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Vertex Global Systems</text>
    <text x="32" y="215" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Deal: $8,000 • In Review</text>

    <!-- Column 2: In Discussion -->
    <rect x="370" y="0" width="340" height="390" rx="12" fill="#10141E" stroke="rgba(255,255,255,0.05)"/>
    <text x="390" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#60A5FA">IN DISCUSSION (2)</text>
    <rect x="386" y="55" width="308" height="90" rx="8" fill="#161C2C" stroke="rgba(59,130,246,0.2)"/>
    <text x="402" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Apex Engineering Lab</text>
    <text x="402" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#34D399">Contract sent • $18,000</text>

    <!-- Column 3: Won / Closed -->
    <rect x="740" y="0" width="340" height="390" rx="12" fill="#10141E" stroke="rgba(255,255,255,0.05)"/>
    <text x="760" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#34D399">WON &amp; ONBOARDED (4)</text>
    <rect x="756" y="55" width="308" height="90" rx="8" fill="#14231E" stroke="rgba(16,185,129,0.3)"/>
    <text x="772" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Pulse Health Solutions</text>
    <text x="772" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#10B981">Completed • $9,700</text>
  </g>
`, '#3B82F6');

const miniCrm2 = createBrowserChrome('Mini CRM Mobile View', 'https://github.com/RohitBhosale673/-Mini-CRM-Mobile-Application', `
  <rect width="1200" height="694" fill="#090B10"/>
  <!-- Centered Mobile Frame -->
  <g transform="translate(420, 30)">
    <rect x="0" y="0" width="360" height="630" rx="36" fill="#0F1219" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
    <rect x="130" y="10" width="100" height="18" rx="9" fill="#000000"/>
    <text x="24" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Mini CRM</text>
    
    <rect x="20" y="85" width="320" height="70" rx="12" fill="#171C28"/>
    <text x="36" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Total Pipeline</text>
    <text x="36" y="138" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#3B82F6">$48,200</text>
    
    <text x="24" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#94A3B8">RECENT LEADS</text>
    
    <rect x="20" y="200" width="320" height="65" rx="10" fill="#151A24"/>
    <text x="36" y="228" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Dr. Shinde Clinic</text>
    <text x="36" y="248" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Medical Management • Active</text>

    <rect x="20" y="280" width="320" height="65" rx="10" fill="#151A24"/>
    <text x="36" y="308" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Zenith Logistics</text>
    <text x="36" y="328" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Fleet Dispatch • Contract Sent</text>
  </g>
`, '#3B82F6');

// 3. QA Projects Portfolio
const qa1 = createBrowserChrome('QA Projects Portfolio', 'https://qa-portfolio-rohits-projects-84cb3046.vercel.app/', `
  <rect width="1200" height="694" fill="#0A0D14"/>
  <!-- Header -->
  <g transform="translate(60, 40)">
    <rect x="0" y="0" width="130" height="26" rx="4" fill="rgba(16,185,129,0.15)"/>
    <text x="14" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#10B981">TEST AUTOMATION &amp; QA</text>
    <text x="0" y="70" font-family="system-ui, sans-serif" font-size="32" font-weight="700" fill="#FFFFFF">Software Quality Engineering Portfolio</text>
    <text x="0" y="100" font-family="system-ui, sans-serif" font-size="15" fill="#94A3B8">Automated test frameworks, Selenium WebDriver, TestNG suites, and Postman API validation.</text>
  </g>

  <!-- Metric Badges -->
  <g transform="translate(60, 160)">
    <rect x="0" y="0" width="250" height="90" rx="10" fill="#121722" stroke="rgba(16,185,129,0.2)"/>
    <text x="24" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">TEST SUITES PASSED</text>
    <text x="24" y="68" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#10B981">100%</text>

    <rect x="275" y="0" width="250" height="90" rx="10" fill="#121722" stroke="rgba(255,255,255,0.06)"/>
    <text x="299" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">API ENDPOINTS VERIFIED</text>
    <text x="299" y="68" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#38BDF8">48+ Endpoints</text>

    <rect x="550" y="0" width="250" height="90" rx="10" fill="#121722" stroke="rgba(255,255,255,0.06)"/>
    <text x="574" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">AUTOMATION TOOLING</text>
    <text x="574" y="68" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#FBBF24">Selenium + TestNG</text>

    <rect x="825" y="0" width="255" height="90" rx="10" fill="#121722" stroke="rgba(255,255,255,0.06)"/>
    <text x="849" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">DEFECT TRACKING</text>
    <text x="849" y="68" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#A78BFA">Jira Workflows</text>
  </g>

  <!-- Live Test Suite Terminal View -->
  <g transform="translate(60, 280)">
    <rect x="0" y="0" width="1080" height="370" rx="12" fill="#0C101A" stroke="rgba(255,255,255,0.08)"/>
    <rect x="0" y="0" width="1080" height="36" rx="12" fill="#141B2B"/>
    <text x="24" y="24" font-family="monospace" font-size="12" fill="#94A3B8">terminal@test-runner: ~/automation-suite $ mvn test</text>
    
    <text x="24" y="70" font-family="monospace" font-size="13" fill="#38BDF8">[INFO] Running TestSuite: Regression &amp; Cross-Browser Matrix</text>
    <text x="24" y="100" font-family="monospace" font-size="13" fill="#10B981">✔ [PASS] AuthenticationFlowTest: validLoginCredentials() - 412ms</text>
    <text x="24" y="130" font-family="monospace" font-size="13" fill="#10B981">✔ [PASS] CartOperationsTest: addMultipleItemsAndValidateSubtotal() - 680ms</text>
    <text x="24" y="160" font-family="monospace" font-size="13" fill="#10B981">✔ [PASS] CheckoutPipelineTest: paymentGatewayCallbackHandling() - 530ms</text>
    <text x="24" y="190" font-family="monospace" font-size="13" fill="#10B981">✔ [PASS] RestApiEndpointsTest: verifyStatusCodeAndJsonPayload() - 210ms</text>
    <text x="24" y="220" font-family="monospace" font-size="13" fill="#10B981">✔ [PASS] ResponsiveViewportTest: validateLayoutOnMobileBreakpoints() - 890ms</text>
    <line x1="24" y1="250" x2="1056" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <text x="24" y="285" font-family="monospace" font-size="14" font-weight="700" fill="#10B981">[SUCCESS] Total tests run: 32, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 4.82 s</text>
    <text x="24" y="320" font-family="monospace" font-size="12" fill="#64748B">[INFO] BUILD SUCCESS - Quality gate verified for production staging.</text>
  </g>
`, '#10B981');

const qa2 = createBrowserChrome('QA API Automation Matrix', 'https://qa-portfolio-rohits-projects-84cb3046.vercel.app/api-tests', `
  <rect width="1200" height="694" fill="#0A0D14"/>
  <text x="60" y="60" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">Postman API Collections &amp; Validation Matrix</text>
  <g transform="translate(60, 100)">
    <rect x="0" y="0" width="1080" height="100" rx="10" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <rect x="24" y="35" width="70" height="30" rx="4" fill="#10B981"/>
    <text x="44" y="55" font-family="monospace" font-size="13" font-weight="700" fill="#0A0D14">GET</text>
    <text x="110" y="55" font-family="monospace" font-size="14" fill="#FFFFFF">/api/v1/auth/session • Status: 200 OK • Response Time: 34ms</text>

    <rect x="0" y="120" width="1080" height="100" rx="10" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <rect x="24" y="155" width="70" height="30" rx="4" fill="#3B82F6"/>
    <text x="38" y="175" font-family="monospace" font-size="13" font-weight="700" fill="#FFFFFF">POST</text>
    <text x="110" y="175" font-family="monospace" font-size="14" fill="#FFFFFF">/api/v1/orders/create • Status: 201 Created • Response Time: 112ms</text>

    <rect x="0" y="240" width="1080" height="100" rx="10" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <rect x="24" y="275" width="70" height="30" rx="4" fill="#F59E0B"/>
    <text x="42" y="295" font-family="monospace" font-size="13" font-weight="700" fill="#0A0D14">PUT</text>
    <text x="110" y="295" font-family="monospace" font-size="14" fill="#FFFFFF">/api/v1/users/profile • Status: 200 OK • Token Auth Validated</text>
  </g>
`, '#10B981');

// 4. Royal Portfolio
const royal1 = createBrowserChrome('Royal Portfolio', 'https://royal-portfolio-iota.vercel.app/', `
  <rect width="1200" height="694" fill="#08090C"/>
  <circle cx="600" cy="240" r="280" fill="#818CF8" fill-opacity="0.06"/>
  <g transform="translate(60, 40)">
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" letter-spacing="3">ROYAL STUDIO</text>
    <text x="0" y="140" font-family="system-ui, sans-serif" font-size="52" font-weight="800" fill="#FFFFFF" letter-spacing="-1">Engineering Digital</text>
    <text x="0" y="200" font-family="system-ui, sans-serif" font-size="52" font-weight="800" fill="#818CF8" letter-spacing="-1">Experiences With Elegance.</text>
    <text x="0" y="250" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8">Showcasing high-end interactive websites, creative code, and bespoke client projects.</text>
    <rect x="0" y="285" width="170" height="46" rx="8" fill="#FFFFFF"/>
    <text x="32" y="314" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#000000">VIEW ARCHIVE</text>
  </g>
  <g transform="translate(60, 420)">
    <rect x="0" y="0" width="520" height="230" rx="14" fill="#11141D" stroke="rgba(255,255,255,0.08)"/>
    <text x="30" y="50" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">Fluid Motion Interfaces</text>
    <text x="30" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Micro-animations built using Framer Motion and modern CSS transitions.</text>

    <rect x="560" y="0" width="520" height="230" rx="14" fill="#11141D" stroke="rgba(255,255,255,0.08)"/>
    <text x="590" y="50" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">Precision Layout Systems</text>
    <text x="590" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Minimalist dark visual hierarchy designed for modern agencies and creative founders.</text>
  </g>
`, '#818CF8');

const royal2 = royal1;

// 5. Home Expense Tracker
const expense1 = createBrowserChrome('Home Expense Tracker', 'https://homeexpencetracker.vercel.app/dashboard', `
  <rect width="1200" height="694" fill="#090C12"/>
  <g transform="translate(60, 36)">
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF">Household Expense Dashboard</text>
    <text x="0" y="56" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Real-time budget management, category spending, and monthly financial balance.</text>
  </g>
  <!-- Balance Metrics -->
  <g transform="translate(60, 110)">
    <rect x="0" y="0" width="340" height="110" rx="12" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">TOTAL MONTHLY INCOME</text>
    <text x="24" y="78" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#10B981">₹85,000</text>

    <rect x="370" y="0" width="340" height="110" rx="12" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <text x="394" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">TOTAL EXPENSES (OCT)</text>
    <text x="394" y="78" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#EF4444">₹32,450</text>

    <rect x="740" y="0" width="340" height="110" rx="12" fill="#121724" stroke="rgba(255,255,255,0.06)"/>
    <text x="764" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">NET REMAINING BALANCE</text>
    <text x="764" y="78" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#3B82F6">₹52,550</text>
  </g>
  <!-- Category chart & transactions -->
  <g transform="translate(60, 250)">
    <rect x="0" y="0" width="600" height="400" rx="14" fill="#101520" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Category Spending Overview</text>
    <rect x="24" y="70" width="550" height="34" rx="6" fill="#161D2C"/>
    <text x="40" y="92" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF">Groceries &amp; Provisions</text>
    <text x="480" y="92" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F59E0B">₹12,200</text>

    <rect x="24" y="120" width="550" height="34" rx="6" fill="#161D2C"/>
    <text x="40" y="142" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF">Rent &amp; Housing</text>
    <text x="480" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#3B82F6">₹14,000</text>

    <rect x="24" y="170" width="550" height="34" rx="6" fill="#161D2C"/>
    <text x="40" y="192" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF">Electricity &amp; Utilities</text>
    <text x="480" y="192" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#10B981">₹3,450</text>

    <rect x="24" y="220" width="550" height="34" rx="6" fill="#161D2C"/>
    <text x="40" y="242" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF">Travel &amp; Fuel</text>
    <text x="480" y="242" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#EC4899">₹2,800</text>

    <!-- Transaction Table -->
    <rect x="630" y="0" width="450" height="400" rx="14" fill="#101520" stroke="rgba(255,255,255,0.06)"/>
    <text x="654" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Recent Logs</text>
    <text x="654" y="80" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Oct 08 - Supermarket • ₹2,100</text>
    <text x="654" y="120" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Oct 06 - Fuel Station • ₹800</text>
    <text x="654" y="160" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Oct 04 - Fiber Internet • ₹799</text>
  </g>
`, '#10B981');

const expense2 = expense1;

// 6. Cart Website
const cart1 = createBrowserChrome('Cart Website', 'https://cart-website-iota.vercel.app/', `
  <rect width="1200" height="694" fill="#0C0E14"/>
  <g transform="translate(60, 30)">
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">COMMERCE PRO</text>
    <rect x="900" y="10" width="180" height="40" rx="8" fill="#3B82F6"/>
    <text x="930" y="35" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">CART (3 ITEMS)</text>
  </g>
  <!-- Product Grid -->
  <g transform="translate(60, 100)">
    <rect x="0" y="0" width="700" height="550" rx="12" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="30" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Product Catalog</text>
    
    <rect x="30" y="70" width="300" height="200" rx="8" fill="#181E2E"/>
    <text x="44" y="210" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Minimalist Smart Watch</text>
    <text x="44" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#3B82F6">$189.00</text>

    <rect x="360" y="70" width="300" height="200" rx="8" fill="#181E2E"/>
    <text x="374" y="210" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Wireless Noise-Cancel Pods</text>
    <text x="374" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#3B82F6">$129.00</text>

    <!-- Side Cart Drawer -->
    <rect x="730" y="0" width="350" height="550" rx="12" fill="#151A26" stroke="rgba(59,130,246,0.3)"/>
    <text x="760" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Order Summary</text>
    <text x="760" y="90" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Subtotal: $318.00</text>
    <text x="760" y="120" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Shipping: Free</text>
    <text x="760" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#10B981">Total: $318.00</text>
    <rect x="760" y="200" width="290" height="46" rx="8" fill="#10B981"/>
    <text x="830" y="228" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0C0E14">PROCEED TO PAY</text>
  </g>
`, '#3B82F6');

const cart2 = cart1;

// 7. Bhavani Shankar Math
const math1 = createBrowserChrome('Bhavani Shankar Math Daund', 'https://bhavani-shankar-math-daund.vercel.app/', `
  <rect width="1200" height="694" fill="#0D0A08"/>
  <circle cx="600" cy="180" r="220" fill="#D97706" fill-opacity="0.08"/>
  <g transform="translate(60, 40)">
    <text x="0" y="30" font-family="Georgia, serif" font-size="24" font-weight="700" fill="#F59E0B">श्री भवानी शंकर मठ — दौंड</text>
    <text x="0" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#A8A29E">Official Spiritual Portal &amp; Cultural Heritage Center</text>
  </g>
  <g transform="translate(60, 110)">
    <rect x="0" y="0" width="1080" height="260" rx="14" fill="#18130E" stroke="rgba(245,158,11,0.2)"/>
    <text x="50" y="70" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#FFFFFF">Spiritual Heritage &amp; Daily Darshan</text>
    <text x="50" y="110" font-family="system-ui, sans-serif" font-size="16" fill="#D6D3D1">Providing a dedicated digital presence for temple history, rituals, and community seva.</text>
    <rect x="50" y="150" width="180" height="44" rx="8" fill="#D97706"/>
    <text x="76" y="177" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">DAILY SCHEDULE</text>
  </g>
  <g transform="translate(60, 400)">
    <rect x="0" y="0" width="340" height="240" rx="12" fill="#14100C" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="44" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#F59E0B">Morning Pooja &amp; Aarti</text>
    <text x="24" y="80" font-family="system-ui, sans-serif" font-size="13" fill="#A8A29E">Daily morning devotional rituals beginning at 6:00 AM with sacred recitations.</text>

    <rect x="370" y="0" width="340" height="240" rx="12" fill="#14100C" stroke="rgba(255,255,255,0.06)"/>
    <text x="394" y="44" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#F59E0B">Annual Utsav Calendar</text>
    <text x="394" y="80" font-family="system-ui, sans-serif" font-size="13" fill="#A8A29E">Detailed schedule of festivals, community gatherings, and cultural celebrations.</text>

    <rect x="740" y="0" width="340" height="240" rx="12" fill="#14100C" stroke="rgba(255,255,255,0.06)"/>
    <text x="764" y="44" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#F59E0B">Seva &amp; Trust Activities</text>
    <text x="764" y="80" font-family="system-ui, sans-serif" font-size="13" fill="#A8A29E">Charitable meal programs, student support, and social welfare projects.</text>
  </g>
`, '#D97706');

const math2 = math1;

// 8. Portfolio LREK
const lrek1 = createBrowserChrome('Portfolio LREK', 'https://portfolio-lrek.vercel.app/', `
  <rect width="1200" height="694" fill="#0A0C10"/>
  <g transform="translate(60, 40)">
    <text x="0" y="32" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#FFFFFF">PORTFOLIO LREK</text>
    <text x="0" y="110" font-family="system-ui, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">Full Stack Developer</text>
    <text x="0" y="150" font-family="system-ui, sans-serif" font-size="15" fill="#64748B">Building performant web applications with contemporary tooling.</text>
  </g>
  <g transform="translate(60, 220)">
    <rect x="0" y="0" width="520" height="200" rx="12" fill="#121620" stroke="rgba(255,255,255,0.06)"/>
    <text x="30" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Technical Competencies</text>
    <text x="30" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">React • Next.js • TypeScript • Tailwind CSS • Node.js • Git</text>

    <rect x="560" y="0" width="520" height="200" rx="12" fill="#121620" stroke="rgba(255,255,255,0.06)"/>
    <text x="590" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Selected Builds</text>
    <text x="590" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Client web deliverables with clean UI and responsive architecture.</text>
  </g>
`, '#64748B');

const lrek2 = lrek1;

// 9. Fertiliser
const fertiliser1 = createBrowserChrome('Fertiliser Business Portal', 'https://fertiliser.vercel.app/', `
  <rect width="1200" height="694" fill="#0A100D"/>
  <g transform="translate(60, 40)">
    <rect x="0" y="0" width="140" height="26" rx="4" fill="rgba(34,197,94,0.15)"/>
    <text x="14" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#22C55E">AGRI BUSINESS SOLUTIONS</text>
    <text x="0" y="80" font-family="system-ui, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF">Agricultural Fertiliser &amp; Crop Nutrition</text>
    <text x="0" y="112" font-family="system-ui, sans-serif" font-size="15" fill="#86EFAC">High-yield bio-fertilisers and tailored soil nutrition formulations.</text>
  </g>
  <g transform="translate(60, 170)">
    <rect x="0" y="0" width="340" height="420" rx="12" fill="#111B15" stroke="rgba(34,197,94,0.2)"/>
    <text x="24" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Organic Compost Mix</text>
    <text x="24" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#86EFAC">Rich in nitrogen and beneficial microbial cultures.</text>

    <rect x="370" y="0" width="340" height="420" rx="12" fill="#111B15" stroke="rgba(34,197,94,0.2)"/>
    <text x="394" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">NPK Water-Soluble Granules</text>
    <text x="394" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#86EFAC">Rapid uptake nutrition for drip irrigation systems.</text>

    <rect x="740" y="0" width="340" height="420" rx="12" fill="#111B15" stroke="rgba(34,197,94,0.2)"/>
    <text x="764" y="44" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Micro-Nutrient Sprays</text>
    <text x="764" y="74" font-family="system-ui, sans-serif" font-size="13" fill="#86EFAC">Targeted zinc, iron and boron foliar boosters.</text>
  </g>
`, '#22C55E');

const fertiliser2 = fertiliser1;

// 10. Darbar Seva Flow
const darbar1 = createBrowserChrome('Darbar Seva Flow', 'https://darbar-seva-flow.base44.app', `
  <rect width="1200" height="694" fill="#0A0B10"/>
  <g transform="translate(60, 40)">
    <text x="0" y="32" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF">Darbar Seva Workflow System</text>
    <text x="0" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Centralized task allocation and service workflow management platform</text>
  </g>
  <g transform="translate(60, 110)">
    <rect x="0" y="0" width="250" height="90" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="20" y="34" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">ACTIVE QUEUE</text>
    <text x="20" y="70" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#3B82F6">18 Requests</text>

    <rect x="275" y="0" width="250" height="90" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="295" y="34" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">IN PROGRESS</text>
    <text x="295" y="70" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#F59E0B">7 In Flow</text>

    <rect x="550" y="0" width="250" height="90" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="570" y="34" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">VOLUNTEERS DEPLOYED</text>
    <text x="570" y="70" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#10B981">42 Sevadars</text>

    <rect x="825" y="0" width="255" height="90" rx="10" fill="#121622" stroke="rgba(255,255,255,0.06)"/>
    <text x="845" y="34" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">COMPLETED TODAY</text>
    <text x="845" y="70" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#A855F7">89 Tasks</text>
  </g>
  <g transform="translate(60, 230)">
    <rect x="0" y="0" width="1080" height="420" rx="12" fill="#10141F" stroke="rgba(255,255,255,0.06)"/>
    <text x="30" y="40" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Live Workflow Pipeline</text>
    
    <rect x="30" y="70" width="1020" height="70" rx="8" fill="#161C2A"/>
    <text x="50" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">#SF-104: Main Hall Seva Registration</text>
    <text x="750" y="110" font-family="system-ui, sans-serif" font-size="13" fill="#10B981">STATUS: COMPLETED</text>

    <rect x="30" y="155" width="1020" height="70" rx="8" fill="#161C2A"/>
    <text x="50" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">#SF-105: Prasad Distribution Coordination</text>
    <text x="750" y="195" font-family="system-ui, sans-serif" font-size="13" fill="#F59E0B">STATUS: IN PROGRESS</text>

    <rect x="30" y="240" width="1020" height="70" rx="8" fill="#161C2A"/>
    <text x="50" y="280" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">#SF-106: Audio &amp; Seva Volunteer Allocation</text>
    <text x="750" y="280" font-family="system-ui, sans-serif" font-size="13" fill="#3B82F6">STATUS: QUEUED</text>
  </g>
`, '#3B82F6');

const darbar2 = darbar1;

const mockups = [
  { name: 'jagdamba-hotel.svg', content: jagdamba1 },
  { name: 'jagdamba-hotel-2.svg', content: jagdamba2 },
  { name: 'mini-crm.svg', content: miniCrm1 },
  { name: 'mini-crm-2.svg', content: miniCrm2 },
  { name: 'qa-portfolio.svg', content: qa1 },
  { name: 'qa-portfolio-2.svg', content: qa2 },
  { name: 'royal-portfolio.svg', content: royal1 },
  { name: 'royal-portfolio-2.svg', content: royal2 },
  { name: 'expense-tracker.svg', content: expense1 },
  { name: 'expense-tracker-2.svg', content: expense2 },
  { name: 'cart-website.svg', content: cart1 },
  { name: 'cart-website-2.svg', content: cart2 },
  { name: 'bhavani-shankar-math.svg', content: math1 },
  { name: 'bhavani-shankar-math-2.svg', content: math2 },
  { name: 'portfolio-lrek.svg', content: lrek1 },
  { name: 'portfolio-lrek-2.svg', content: lrek2 },
  { name: 'fertiliser.svg', content: fertiliser1 },
  { name: 'fertiliser-2.svg', content: fertiliser2 },
  { name: 'darbar-seva.svg', content: darbar1 },
  { name: 'darbar-seva-2.svg', content: darbar2 },
];

for (const m of mockups) {
  fs.writeFileSync(path.join(outDir, m.name), m.content, 'utf8');
}

console.log(`Generated ${mockups.length} project mockups successfully!`);
