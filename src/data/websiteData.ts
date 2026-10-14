export interface WorkflowCard {
  step: number;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  imageSrc?: string;
  badge: string;
  isPendingImage?: boolean;
  statusBadge?: string;
  isVerified?: boolean;
  imageAlt?: string;
}

export interface ManagementModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  verifiedSource: string;
  highlights: string[];
  icon: string;
  isVerified: boolean;
  imageSrc?: string;
  isPendingImage?: boolean;
  imageAlt?: string;
  metrics?: { label: string; value: string }[];
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

/* =========================================================================
   PART A — TABLO SELF-ORDERING: CUSTOMER WORKFLOW (8 STEPS)
   ========================================================================= */
export const SELF_ORDERING_CUSTOMER_WORKFLOW: WorkflowCard[] = [
  {
    step: 1,
    title: 'Scan Restaurant Menu QR',
    tagline: 'Entrance or ordering counter touchpoint',
    description: 'A customer scans the restaurant’s common menu QR code at the entrance or counter and opens the interactive digital menu on their smartphone browser.',
    details: [
      'Accessible on any standard smartphone camera (iOS & Android)',
      'Zero app downloads, logins or account registrations required',
      'Loads restaurant-branded digital menu instantly in mobile web browser'
    ],
    imageSrc: '/images/ai/self-ordering/customer/01-scan-menu-qr.jpg',
    imageAlt: 'Customer scanning a common restaurant menu QR code placard with their smartphone',
    badge: 'Step 1 • Menu QR Scan',
    isVerified: true
  },
  {
    step: 2,
    title: 'Browse the Menu & Customize',
    tagline: 'Visual digital catalog with modifiers & dietary tags',
    description: 'The customer explores categorized food items, reviews transparent pricing, dish descriptions, food images, and available modifier customizations.',
    details: [
      'Crisp food imagery and category-based navigation (Starters, Mains, Drinks)',
      'Selectable item modifiers and preparation notes',
      'Live stock status tags showing real-time dish availability'
    ],
    imageSrc: '/images/ai/self-ordering/customer/02-browse-digital-menu.jpg',
    imageAlt: 'Customer browsing a rich digital food menu catalog with prices and categories on a smartphone',
    badge: 'Step 2 • Menu Exploration',
    isVerified: true
  },
  {
    step: 3,
    title: 'Checkout & 5-Minute Stock Reservation',
    tagline: 'Temporary inventory reservation guard',
    description: 'The customer reviews their cart. TABLO validates availability and temporarily holds eligible stock for five minutes during checkout to prevent double-ordering.',
    details: [
      'Interactive cart with dynamic quantity adjustments and tax summary',
      'Clear 5-minute countdown timer visible on checkout screen',
      'Automatic inventory release if payment is cancelled or abandoned'
    ],
    imageSrc: '/images/ai/self-ordering/customer/03-cart-reservation.jpg',
    imageAlt: 'Customer reviewing cart with temporary 5-minute stock reservation countdown',
    badge: 'Step 3 • Stock Hold',
    isVerified: true
  },
  {
    step: 4,
    title: 'Secure Online Payment',
    tagline: 'Fast digital checkout with UPI & cards',
    description: 'The customer completes payment online via UPI, credit/debit cards or netbanking. Payments are securely verified before confirming the order.',
    details: [
      'Supports popular UPI apps (GPay, PhonePe, Paytm), cards and netbanking',
      'Secure payment verification protects against fraudulent attempts',
      'Instant digital payment confirmation on customer screen'
    ],
    imageSrc: '/images/ai/self-ordering/customer/04-razorpay-payment.jpg',
    imageAlt: 'Customer completing secure online payment on smartphone via digital checkout',
    badge: 'Step 4 • Online Payment',
    isVerified: true
  },
  {
    step: 5,
    title: 'Receive Separate Order QR',
    tagline: 'Digital pickup token issued after payment',
    description: 'After payment is completed, TABLO generates a distinct Order QR and order token on the customer’s screen, completely separate from the menu QR.',
    details: [
      'Dedicated Order QR issued only after successful payment',
      'Displays order number and pickup ticket details',
      'Clearly distinct from the public restaurant menu QR code'
    ],
    imageSrc: '/images/ai/self-ordering/customer/05-order-qr-token.jpg',
    imageAlt: 'Customer smartphone displaying verified post-payment Order QR ticket',
    badge: 'Step 5 • Order QR Token',
    isVerified: true
  },
  {
    step: 6,
    title: 'Present Order QR at the Counter',
    tagline: 'Fast hands-free counter validation',
    description: 'The customer walks to the collection desk and presents their digital Order QR to the hands-free 2D scanner connected to the counter terminal.',
    details: [
      'High-speed hands-free scanner reads screen in milliseconds',
      'Counter terminal validates the order immediately',
      'Instant screen retrieval of order items and payment status'
    ],
    imageSrc: '/images/ai/self-ordering/customer/06-counter-scanner.jpg',
    imageAlt: 'Customer presenting their phone screen with Order QR to the countertop 2D optical scanner',
    badge: 'Step 6 • Counter Scan',
    isVerified: true
  },
  {
    step: 7,
    title: 'Terminal Validates & Prints Receipt',
    tagline: 'Automatic receipt print & duplicate protection',
    description: 'The counter terminal validates the order, ensures each order is processed exactly once, and triggers an automatic printed receipt from the thermal printer.',
    details: [
      'Single-billing lock: validates order and prevents duplicate billing',
      'Counter terminal immediately prints the official receipt slip',
      'Customer receives printed receipt and kitchen pickup slip'
    ],
    imageSrc: '/images/ai/self-ordering/customer/07-thermal-printer.jpg',
    imageAlt: 'Counter terminal validating order token and printing thermal receipt',
    badge: 'Step 7 • Receipt Printing',
    isVerified: true
  },
  {
    step: 8,
    title: 'Collect the Prepared Food Order',
    tagline: 'Smooth, organized counter fulfillment',
    description: 'The customer receives the printed receipt and collects the freshly prepared meal from the pickup station when their order number is ready.',
    details: [
      'Customer presents printed slip or awaits order number call',
      'Order numbers keep pickup organized and eliminate line congestion',
      'Smooth, complete self-service dining journey'
    ],
    imageSrc: '/images/ai/self-ordering/customer/08-order-handover.jpg',
    imageAlt: 'Restaurant staff handing prepared food order to the customer at the pickup counter',
    badge: 'Step 8 • Order Handover',
    isVerified: true
  }
];

// Preserved alias for backwards compatibility
export const SELF_ORDERING_WORKFLOW = SELF_ORDERING_CUSTOMER_WORKFLOW;

/* =========================================================================
   PART A.4 — TABLO SELF-ORDERING: RESTAURANT MANAGEMENT (8 MODULES)
   ========================================================================= */
export const SELF_ORDERING_MANAGEMENT_MODULES: ManagementModule[] = [
  {
    id: 'so-mgmt-01',
    moduleNumber: 1,
    title: 'Menu & Category Management',
    subtitle: 'Organize dishes, categories & display sequence',
    description: 'Restaurant managers create, organize, and update menu categories with custom display ordering for smooth digital menu navigation.',
    badge: 'Menu Management',
    verifiedSource: 'Menu Management',
    imageSrc: '/images/ai/self-ordering/management/01-menu-management.jpg',
    isPendingImage: false,
    imageAlt: 'Restaurant administrator managing menu categories and display order on desktop terminal',
    highlights: [
      'Category hierarchy creation with custom display ordering',
      'Category names, descriptions, and activation controls',
      'Instant synchronization across customer digital menus'
    ],
    icon: 'Utensils',
    isVerified: true
  },
  {
    id: 'so-mgmt-02',
    moduleNumber: 2,
    title: 'Food Pricing, Photos & Options',
    subtitle: 'Dish pricing, customization options & food images',
    description: 'Configure item pricing, descriptions, modifier options (sizes, add-ons), and upload high-quality food photography.',
    badge: 'Pricing & Photos',
    verifiedSource: 'Dish Customization',
    imageSrc: '/images/ai/self-ordering/management/02-pricing-modifiers-images.jpg',
    isPendingImage: false,
    imageAlt: 'Management interface configuring food pricing, modifier groups, and images',
    highlights: [
      'Flexible dish pricing and custom modifier options',
      'Upload and manage high-resolution food photography',
      'Dietary tags, spice levels, and preparation notes'
    ],
    icon: 'PackageCheck',
    isVerified: true
  },
  {
    id: 'so-mgmt-03',
    moduleNumber: 3,
    title: 'Stock Availability & Inventory',
    subtitle: 'One-tap item availability & stock controls',
    description: 'Manage dish availability with a single tap, set low-stock thresholds, and manage automatic stock releases.',
    badge: 'Stock Management',
    verifiedSource: 'Inventory Control',
    imageSrc: '/images/ai/self-ordering/management/03-inventory-reservations.jpg',
    isPendingImage: false,
    imageAlt: 'Inventory dashboard displaying item stock toggles, thresholds, and reservation hold status',
    highlights: [
      'Instant one-tap In-Stock / Out-of-Stock status toggles',
      'Stock quantity tracking with low-stock warnings',
      'Real-time updates directly to customer menus',
      '5-minute temporary reservation hold during customer checkout'
    ],
    icon: 'Clock',
    isVerified: true
  },
  {
    id: 'so-mgmt-04',
    moduleNumber: 4,
    title: 'Live Order Monitoring',
    subtitle: 'Real-time order tracking from payment to completion',
    description: 'Centralized live orders monitor tracking all customer orders across key stages: Pending Payment, Paid, and Completed.',
    badge: 'Live Orders',
    verifiedSource: 'Order Queue',
    imageSrc: '/images/ai/self-ordering/management/04-live-order-monitor.jpg',
    isPendingImage: false,
    imageAlt: 'Operational monitor displaying incoming customer orders filtered by order stages',
    highlights: [
      'Real-time status filters: All, Pending, Paid, and Completed',
      'Quick search by order number, customer name, or phone',
      'Itemized order details with modifiers and timestamps',
      'Linked transaction records for verified payments'
    ],
    icon: 'Monitor',
    isVerified: true
  },
  {
    id: 'so-mgmt-05',
    moduleNumber: 5,
    title: 'Counter Scanning & Receipts',
    subtitle: 'Fast 2D scanner validation & printed receipts',
    description: 'Counter pickup screen that pairs with desktop barcode scanners, validating customer orders and triggering immediate receipt printing.',
    badge: 'Counter Billing',
    verifiedSource: 'Counter Station',
    imageSrc: '/images/ai/self-ordering/management/05-counter-scanner-billing.jpg',
    isPendingImage: false,
    imageAlt: 'Counter billing portal connected to physical 2D optical scanner and thermal printer',
    highlights: [
      'Hands-free desktop scanner integration via USB',
      'Single-billing lock prevents accidental duplicate billing',
      'Automatic printed thermal receipts and kitchen tokens',
      'Clear on-screen scanner status and validation alerts'
    ],
    icon: 'ScanLine',
    isVerified: true
  },
  {
    id: 'so-mgmt-06',
    moduleNumber: 6,
    title: 'Daily & Monthly Sales Overview',
    subtitle: 'Revenue metrics, sales trends & order volume',
    description: 'Comprehensive business analytics showing gross sales, total order count, average order value, and daily revenue charts.',
    badge: 'Sales Overview',
    verifiedSource: 'Sales Analytics',
    imageSrc: '/images/ai/self-ordering/management/06-sales-analytics.jpg',
    isPendingImage: false,
    imageAlt: 'Financial dashboard displaying gross sales, order count, AOV, and daily revenue timeline',
    highlights: [
      'Gross sales, total orders, and average order value',
      'Date filters: Today, Yesterday, Last 7 Days, Month, and Custom Ranges',
      'Interactive daily sales revenue trend charts',
      'Clear breakdown of completed orders'
    ],
    icon: 'BarChart3',
    isVerified: true
  },
  {
    id: 'so-mgmt-07',
    moduleNumber: 7,
    title: 'Best-Selling Dishes & Trends',
    subtitle: 'Top-performing items & popular dish velocity',
    description: 'Track your top revenue-generating menu items and volume sold to optimize kitchen prep and menu planning.',
    badge: 'Menu Insights',
    verifiedSource: 'Item Popularity',
    imageSrc: '/images/ai/self-ordering/management/07-best-selling-items.jpg',
    isPendingImage: false,
    imageAlt: 'Analytics widget showing top 5 best-selling menu items by revenue and volume',
    highlights: [
      'Top 5 best-selling dishes ranked by revenue and units sold',
      'Identifies popular dishes during peak dining hours',
      'Helpful insights for inventory planning and prep scheduling'
    ],
    icon: 'TrendingUp',
    isVerified: true
  },
  {
    id: 'so-mgmt-08',
    moduleNumber: 8,
    title: 'Sales Reports & Excel Export',
    subtitle: 'Downloadable spreadsheets for easy accounting',
    description: 'Export itemized sales records directly to Microsoft Excel (.xlsx) across custom date intervals for accounting and bookkeeping.',
    badge: 'Reports Export',
    verifiedSource: 'Financial Export',
    imageSrc: '/images/ai/self-ordering/management/08-sales-reports.jpg',
    isPendingImage: false,
    imageAlt: 'Export utility generating itemized Excel spreadsheets for restaurant accounting',
    highlights: [
      'One-click export to Microsoft Excel (.xlsx)',
      'Custom date range selection for flexible reporting',
      'Clean transaction records for tax reconciliation'
    ],
    icon: 'Download',
    isVerified: true
  }
];

/* =========================================================================
   PART B — TABLO TABLE QR: CUSTOMER WORKFLOW (10 STEPS)
   Steps 1–5 Available Now, Steps 6–10 Planned Capabilities.
   ========================================================================= */
export const TABLE_QR_CUSTOMER_WORKFLOW: WorkflowCard[] = [
  {
    step: 1,
    title: 'Scan Table QR Placard',
    tagline: 'Table-associated dining session',
    description: 'The guest sits down and scans the QR code placard on their dining table (e.g. Table 04, Table 12).',
    details: [
      'Automatically connects the mobile session to the dining table',
      'Zero app downloads or guest accounts required',
      'Opens restaurant dine-in menu directly in standard mobile browser'
    ],
    imageSrc: '/images/ai/table-qr/customer/01-scan-table-qr.jpg',
    imageAlt: 'Dine-in customer scanning a table-specific QR placard at Table 04 with smartphone',
    badge: 'Step 1 • Table QR Scan',
    isVerified: true,
    statusBadge: 'Available'
  },
  {
    step: 2,
    title: 'Browse the Digital Menu',
    tagline: 'Dine-in menu browsing from seats',
    description: 'Guests explore dishes, chef specials, portion sizes, prices, and allergen notes comfortably from their seats.',
    details: [
      'Clear categorized browsing (Starters, Mains, Drinks)',
      'Item customization notes and preparation instructions',
      'Real-time unavailable item indicators'
    ],
    imageSrc: '/images/ai/table-qr/customer/02-browse-menu.jpg',
    imageAlt: 'Guests browsing the digital menu comfortably seated at their dining table',
    badge: 'Step 2 • Menu Browsing',
    isVerified: true,
    statusBadge: 'Available'
  },
  {
    step: 3,
    title: 'Submit Order with Table Number',
    tagline: 'Direct mobile ordering with automatic table tagging',
    description: 'Guests assemble their table order and submit directly from their mobile phone, automatically tagged with their table number.',
    details: [
      'Orders automatically tagged with the guest table number',
      'Instant submission without waiting for server availability',
      'Clear on-screen order placement confirmation'
    ],
    imageSrc: '/images/ai/table-qr/customer/03-submit-table-order.jpg',
    imageAlt: 'Customer confirming and submitting food order tagged with their table identifier',
    badge: 'Step 3 • Order Submission',
    isVerified: true,
    statusBadge: 'Available'
  },
  {
    step: 4,
    title: 'Kitchen Receives & Prepares Order',
    tagline: 'Instant order routing to kitchen displays',
    description: 'Kitchen and floor staff receive incoming table orders in real time on the restaurant operational display.',
    details: [
      'Orders clearly visible with table number and dish selections',
      'Eliminates misread handwriting and lost paper order slips',
      'Immediate overview across active dining tables'
    ],
    imageSrc: '/images/ai/table-qr/customer/04-kitchen-order-screen.jpg',
    imageAlt: 'Kitchen and floor staff operational display showing incoming table orders',
    badge: 'Step 4 • Kitchen Routing',
    isVerified: true,
    statusBadge: 'Available'
  },
  {
    step: 5,
    title: 'Staff Serve Food to Table',
    tagline: 'Accurate meal delivery to designated table',
    description: 'Kitchen prepares dishes and service staff deliver hot meals directly to the designated dining table.',
    details: [
      'Staff deliver food accurately to the correct table',
      'Reduces front-of-house confusion during peak hours',
      'Floor staff focus on guest hospitality and table care'
    ],
    imageSrc: '/images/ai/table-qr/customer/05-serve-food-table.jpg',
    imageAlt: 'Restaurant waiter serving freshly prepared dishes directly to guests at Table 04',
    badge: 'Step 5 • Table Service',
    isVerified: true,
    statusBadge: 'Available'
  },
  {
    step: 6,
    title: 'Add Extra Items During Dining',
    tagline: 'Order additional drinks, sides or desserts',
    description: 'Guests can add extra items, such as drinks, sides or desserts, during the meal from their table.',
    details: [
      'Allows incremental ordering throughout the dining visit',
      'Supports secondary drink and dessert rounds',
      'Guests order at their own pace from their table'
    ],
    imageSrc: '/images/ai/table-qr/customer/06-additional-items.jpg',
    isPendingImage: false,
    imageAlt: 'Customer adding secondary drinks and desserts from their phone at the table',
    badge: 'Step 6 • Extra Items',
    isVerified: false,
    statusBadge: 'Planned'
  },
  {
    step: 7,
    title: 'Combine Orders into One Open Bill',
    tagline: 'Combined dining tab per table session',
    description: 'Additional orders will be linked to the same table and combined into one unified bill.',
    details: [
      'Single consolidated bill per dining table session',
      'Combines multiple order rounds into one final invoice',
      'Planned feature currently in development'
    ],
    imageSrc: '/images/ai/table-qr/customer/07-open-bill-aggregation.jpg',
    isPendingImage: false,
    imageAlt: 'Intended open bill combining multiple ordering rounds into a unified table tab',
    badge: 'Step 7 • Open Bill',
    isVerified: false,
    statusBadge: 'Planned'
  },
  {
    step: 8,
    title: 'Customer Requests the Bill',
    tagline: 'Hospitality signal at meal completion',
    description: 'Guests signal service staff or request the bill at the end of the meal to initiate settlement.',
    details: [
      'Informs floor staff that the dining session has concluded',
      'Staff prepare the table bill summary',
      'Planned feature for smooth table turnover'
    ],
    imageSrc: '/images/ai/table-qr/customer/08-request-bill.jpg',
    isPendingImage: false,
    imageAlt: 'Customer signaling waiter for bill settlement at table conclusion',
    badge: 'Step 8 • Request Bill',
    isVerified: false,
    statusBadge: 'Planned'
  },
  {
    step: 9,
    title: 'Provide Table Number at Counter',
    tagline: 'Flexible counter payment or table checkout',
    description: 'Guests provide their table number at the billing counter for fast payment and checkout.',
    details: [
      'Counter staff retrieve table tab quickly by number',
      'Supports flexible counter or table-side settlement',
      'Reduces waiter trips during busy dining shifts'
    ],
    imageSrc: '/images/ai/table-qr/customer/09-counter-table-number.jpg',
    isPendingImage: false,
    imageAlt: 'Customer providing table number at restaurant billing desk',
    badge: 'Step 9 • Table Lookup',
    isVerified: false,
    statusBadge: 'Planned'
  },
  {
    step: 10,
    title: 'Cashier Settles & Closes Table',
    tagline: 'Final bill payment & table reset',
    description: 'Cashier reviews the bill, accepts payment (cash, card or UPI), and releases the table for new guests.',
    details: [
      'Bill settlement with cash, card or UPI payment',
      'Table status resets to available for next diners',
      'Planned capability currently in development'
    ],
    imageSrc: '/images/ai/table-qr/customer/10-settle-and-close-bill.jpg',
    isPendingImage: false,
    imageAlt: 'Cashier settling itemized table bill and closing table session on POS terminal',
    badge: 'Step 10 • Bill Settlement',
    isVerified: false,
    statusBadge: 'Planned'
  }
];

// Preserved alias for backwards compatibility
export const TABLE_QR_WORKFLOW = TABLE_QR_CUSTOMER_WORKFLOW;

/* =========================================================================
   PART C — TABLO TABLE QR: RESTAURANT MANAGEMENT (6 MODULES)
   ========================================================================= */
export const TABLE_QR_MANAGEMENT_MODULES: ManagementModule[] = [
  {
    id: 'tqr-mgmt-01',
    moduleNumber: 1,
    title: 'Billing by Table Number',
    subtitle: 'Table tab retrieval, itemized review & checkout',
    description: 'Select a table number, review the itemized dining bill, and settle it upon meal completion.',
    badge: 'Table Billing',
    verifiedSource: 'Table Billing',
    imageSrc: '/images/ai/table-qr/management/01-table-number-billing.jpg',
    isPendingImage: false,
    imageAlt: 'Cashier selecting a table number and retrieving an itemized bill on terminal',
    highlights: [
      'Retrieve active dining session by table number (e.g. Table 04)',
      'Itemized review of food items, modifiers and dining rounds',
      'Planned feature currently in development'
    ],
    icon: 'Layers',
    isVerified: false
  },
  {
    id: 'tqr-mgmt-02',
    moduleNumber: 2,
    title: 'Order Monitoring',
    subtitle: 'Table-associated orders & live kitchen queue',
    description: 'View incoming table orders, table numbers, and kitchen preparation statuses in real time.',
    badge: 'Order Tracking',
    verifiedSource: 'Order Queue',
    imageSrc: '/images/ai/table-qr/management/02-order-monitoring.jpg',
    isPendingImage: false,
    imageAlt: 'Restaurant manager monitoring incoming table-tagged orders and statuses on dashboard',
    highlights: [
      'Orders clearly tagged with table numbers (e.g. Table 04)',
      'Visible across kitchen and staff displays in real time',
      'Clear order statuses: Pending, In Progress, and Completed'
    ],
    icon: 'Monitor',
    isVerified: true
  },
  {
    id: 'tqr-mgmt-03',
    moduleNumber: 3,
    title: 'Menu Management',
    subtitle: 'Categories, items, prices, photos & availability',
    description: 'Manage categories, dishes, prices, photos, and live availability toggles for your dining room.',
    badge: 'Menu Management',
    verifiedSource: 'Menu Management',
    imageSrc: '/images/ai/table-qr/management/03-menu-management.jpg',
    isPendingImage: false,
    imageAlt: 'Administrator editing menu categories, item prices, images and availability on desktop',
    highlights: [
      'Organize menu categories and dish ordering for table menus',
      'Update food pricing, modifiers, and food photography',
      'Instant item availability toggles for ingredients in short supply'
    ],
    icon: 'Utensils',
    isVerified: true
  },
  {
    id: 'tqr-mgmt-04',
    moduleNumber: 4,
    title: 'Sales Tracking',
    subtitle: 'Dine-in revenue summaries & order totals',
    description: 'Review dine-in revenue summaries, order volume, and settled sales records.',
    badge: 'Sales Tracking',
    verifiedSource: 'Sales Overview',
    imageSrc: '/images/ai/table-qr/management/04-sales-analytics.jpg',
    isPendingImage: false,
    imageAlt: 'Restaurant owner reviewing revenue KPIs and sales graphs on operational screen',
    highlights: [
      'Total dine-in revenue and sales volume calculations',
      'Average order value and total items sold',
      'Order records linking table numbers and transaction amounts'
    ],
    icon: 'TrendingUp',
    isVerified: true
  },
  {
    id: 'tqr-mgmt-05',
    moduleNumber: 5,
    title: 'Sales Trends & Charts',
    subtitle: 'Daily revenue timelines & performance curves',
    description: 'Track revenue patterns and peak dining trends through interactive daily revenue charts.',
    badge: 'Sales Charts',
    verifiedSource: 'Trend Charts',
    imageSrc: '/images/ai/table-qr/management/05-period-reports.jpg',
    isPendingImage: false,
    imageAlt: 'Daily, weekly and monthly reporting interface showing revenue trends',
    highlights: [
      'Interactive daily sales revenue trend charts',
      'Visual performance tracking across active dining days',
      'Clean overview of peak dining periods'
    ],
    icon: 'BarChart3',
    isVerified: true
  },
  {
    id: 'tqr-mgmt-06',
    moduleNumber: 6,
    title: 'Reports & Bill Settlement',
    subtitle: 'Date filters, Excel export & billing records',
    description: 'Filter sales by date, export records to Excel (.xlsx), and review itemized billing ledgers.',
    badge: 'Financial Reports',
    verifiedSource: 'Reports & Ledger',
    imageSrc: '/images/ai/table-qr/management/06-bill-settlement.jpg',
    isPendingImage: false,
    imageAlt: 'Cashier reviewing an itemized bill and completing settlement on terminal',
    highlights: [
      'Date filters: Today, Yesterday, Week, Month, and Custom Ranges',
      'One-click export to Microsoft Excel (.xlsx)',
      'Itemized billing ledger for clean accounting records'
    ],
    icon: 'Download',
    isVerified: true
  }
];

export const SELF_ORDERING_FEATURES: ProductFeature[] = [
  {
    id: 'so-qr',
    title: 'Common Restaurant Menu QR',
    description: 'Customers scan a shared placard at the counter or dining room to load the interactive digital menu on any smartphone browser.',
    icon: 'QrCode',
    tag: 'Frictionless'
  },
  {
    id: 'so-menu',
    title: 'Digital Catalog & Cart',
    description: 'Rich categorized catalog with item pictures, prices, diet flags, modifier options, and interactive cart management.',
    icon: 'Utensils',
    tag: 'Dynamic'
  },
  {
    id: 'so-hold',
    title: 'Five-Minute Inventory Reservation',
    description: 'Synchronized temporary stock lock prevents simultaneous double-orders while a patron is completing payment.',
    icon: 'Clock',
    tag: 'Real-time'
  },
  {
    id: 'so-razorpay',
    title: 'Secure Online Payments',
    description: 'Online checkout accepting UPI, Google Pay, PhonePe, and cards with instant payment verification before confirming orders.',
    icon: 'CreditCard',
    tag: 'Secure Gateway'
  },
  {
    id: 'so-order-qr',
    title: 'Dedicated Order QR Token',
    description: 'Issues a clear, unique digital order barcode on the guest screen right after payment, completely distinct from the menu QR.',
    icon: 'Ticket',
    tag: 'Clear Identity'
  },
  {
    id: 'so-scanner',
    title: 'Self-Service Counter Scanner',
    description: 'Omnidirectional desktop optical scanner reads order tickets hands-free at the billing counter with zero cashier entry.',
    icon: 'ScanLine',
    tag: 'Hands-Free'
  },
  {
    id: 'so-printer',
    title: 'Instant Receipt Printing',
    description: 'Thermal receipt printer integration automatically prints customer receipts and kitchen tokens upon counter scanning.',
    icon: 'Printer',
    tag: 'Counter Printing'
  },
  {
    id: 'so-single-bill',
    title: 'Single-Bill Processing Lock',
    description: 'Strict state validation ensures an order is billed exactly once, eliminating duplicate receipts and reconciliation errors.',
    icon: 'CheckCircle2',
    tag: 'Anti-Duplicate'
  }
];

export const TABLE_QR_FEATURES: ProductFeature[] = [
  {
    id: 'tqr-table-binding',
    title: 'Table-Aware Ordering',
    description: 'Every QR placard is uniquely mapped to a specific table number, guaranteeing orders are automatically routed to the right seat.',
    icon: 'Layers',
    tag: 'Table Identity'
  },
  {
    id: 'tqr-menu-access',
    title: 'Frictionless QR Menu Access',
    description: 'Diners scan with any standard smartphone camera. Digital menu loads instantaneously on mobile web with zero app installs.',
    icon: 'Smartphone',
    tag: 'Zero App'
  },
  {
    id: 'tqr-order-submission',
    title: 'Direct Customer Submission',
    description: 'Guests assemble their own orders and submit directly from their table, reducing order-taking delays during peak rushes.',
    icon: 'CheckCircle2',
    tag: 'Self-Directed'
  },
  {
    id: 'tqr-staff-management',
    title: 'Restaurant Order Management',
    description: 'Centralized web dashboard allows floor managers and hosts to view incoming orders organized by table in real time.',
    icon: 'Monitor',
    tag: 'Central Dashboard'
  },
  {
    id: 'tqr-service-workflow',
    title: 'Connected Service Workflow',
    description: 'Bridges floor staff and food prep with clear table-tagged line items, eliminating misread handwriting and missed tickets.',
    icon: 'Users',
    tag: 'Team Coordination'
  },
  {
    id: 'tqr-billing-reports',
    title: 'Platform Billing & Reports',
    description: 'Integrated order records, itemized bill generation, and daily reporting for clean restaurant accounting.',
    icon: 'FileText',
    tag: 'Audited Billing'
  }
];

/* =========================================================================
   PRODUCT COMPARISON MATRIX
   ========================================================================= */
export interface ComparisonItem {
  feature: string;
  selfOrdering: string;
  tableQr: string;
  highlight?: boolean;
}

export const PRODUCT_COMPARISON: ComparisonItem[] = [
  {
    feature: 'Primary Venue Focus',
    selfOrdering: 'QSRs, food courts, high-traffic counters & express cafés',
    tableQr: 'Full-service dine-in, casual dining, bistro & table-service cafés'
  },
  {
    feature: 'QR Code Placement',
    selfOrdering: 'Common menu QR placard (counter or dining entrance)',
    tableQr: 'Unique table QR code placed on each dining table'
  },
  {
    feature: 'Guest Ordering Experience',
    selfOrdering: 'Order & pay on mobile, then collect from counter station',
    tableQr: 'Order from seat; food served directly to your table by staff'
  },
  {
    feature: 'Inventory Stock Hold',
    selfOrdering: '5-minute temporary hold while customer pays',
    tableQr: 'Real-time catalog availability managed by restaurant'
  },
  {
    feature: 'Payment Processing',
    selfOrdering: 'Online checkout before order confirmation',
    tableQr: 'Flexible settlement via cash, card or UPI upon bill request'
  },
  {
    feature: 'Pickup Order QR',
    selfOrdering: 'Yes — Dedicated Order QR scanned at counter station',
    tableQr: 'No — Table number routes the order directly to kitchen/staff'
  },
  {
    feature: 'Counter Scanner Station',
    selfOrdering: 'Hands-free desktop scanner at pickup desk',
    tableQr: 'Not required — Handled through floor service and table delivery'
  },
  {
    feature: 'Printed Receipts',
    selfOrdering: 'Automatic receipt print triggered instantly upon QR scan',
    tableQr: 'Printed from restaurant terminal upon bill settlement'
  },
  {
    feature: 'Duplicate Scan Protection',
    selfOrdering: 'Automatic single-billing lock prevents double charges',
    tableQr: 'Order records and settled billing ledger management'
  }
];

/* =========================================================================
   HARDWARE SPECIFICATIONS (Truthful & Separated by Product)
   ========================================================================= */
export const HARDWARE_ITEMS = [
  {
    name: 'Common Menu QR Placards',
    product: 'TABLO Self-Ordering',
    specs: 'High-contrast acrylic stands or wall stickers with anti-glare finish.',
    role: 'Common restaurant entry point for customer menu browsing.',
    status: 'Required'
  },
  {
    name: 'Table-Specific QR Placards',
    product: 'TABLO Table QR',
    specs: 'Table-numbered acrylic stands, wooden blocks, or durable table vinyls.',
    role: 'Binds the customer session to specific dining table numbers.',
    status: 'Required'
  },
  {
    name: 'Customer Smartphone Browsers',
    product: 'Both Products',
    specs: 'Standard mobile browser (Safari, Chrome, Firefox) on iOS or Android.',
    role: 'Hosts menu exploration, cart choices, and order submissions without app installs.',
    status: 'Customer Device'
  },
  {
    name: 'Hands-Free 2D Desktop Scanner',
    product: 'TABLO Self-Ordering',
    specs: 'Standard omnidirectional desktop 2D USB/Serial optical barcode scanner.',
    role: 'Reads the paid Order QR from guest phone screens in milliseconds.',
    status: 'Counter Station'
  },
  {
    name: 'Station Controller / Host PC',
    product: 'Both Products',
    specs: 'Standard Windows, Linux, or browser-capable terminal running TABLO.',
    role: 'Processes scan events, manages live orders, and coordinates print jobs.',
    status: 'Station Hub'
  },
  {
    name: '80mm Thermal Receipt Printer',
    product: 'TABLO Self-Ordering (Direct) / Table QR (Platform)',
    specs: 'Standard 80mm or 58mm thermal receipt printer (USB/Ethernet).',
    role: 'Prints itemized receipts and kitchen tokens upon billing or counter confirmation.',
    status: 'Receipt Station'
  }
];

/* =========================================================================
   FREQUENTLY ASKED QUESTIONS
   ========================================================================= */
export const FAQ_DATA = [
  {
    question: 'What is the main difference between TABLO Self-Ordering and TABLO Table QR?',
    answer: 'TABLO Self-Ordering is built for quick-service restaurants, cafés, and counter operations where customers order on their phone, pay online, and scan a unique Order QR at a counter scanner to get an instant printed receipt. TABLO Table QR is designed for dine-in venues where guests scan a table-specific QR code from their seat, order food to that table, and wait for staff to deliver the meal.'
  },
  {
    question: 'Does TABLO Table QR require an omnidirectional counter scanner or thermal printer?',
    answer: 'No. The self-service counter scanner and automated print station belong specifically to the TABLO Self-Ordering module. TABLO Table QR orders are routed directly to the restaurant’s operational dashboard with table numbers, allowing floor and kitchen staff to manage preparation and table delivery without counter scanning hardware.'
  },
  {
    question: 'Is the restaurant Menu QR the same as the Order QR in TABLO Self-Ordering?',
    answer: 'No, they are completely different. The Menu QR is a public placard displayed for all customers to browse the digital catalog. The Order QR is a unique digital token generated on the customer’s phone only after payment is verified. It represents that specific paid order at the billing counter.'
  },
  {
    question: 'Do customers need to download an application from the App Store or Google Play?',
    answer: 'No. Both TABLO Self-Ordering and TABLO Table QR operate 100% on standard mobile browsers (Safari, Chrome, Firefox). Diners simply scan the QR code with their regular smartphone camera to access the menu and place orders immediately.'
  },
  {
    question: 'How does online payment work across both products?',
    answer: 'In TABLO Self-Ordering, payment is processed online via secure payment integration before the order is finalized. TABLO securely verifies the payment transaction before confirming the order and issuing the Order QR. In TABLO Table QR, orders can be submitted to kitchen operations and settled through the restaurant platform according to your venue’s payment workflow.'
  },
  {
    question: 'What happens during the five-minute inventory reservation in Self-Ordering?',
    answer: 'When a customer checks out in TABLO Self-Ordering, the selected dishes are temporarily reserved for exactly five minutes to prevent concurrent diners from ordering out-of-stock items. If payment completes, the reservation converts into a confirmed sale; if abandoned or expired, the stock is automatically released back to the menu.'
  },
  {
    question: 'Which POS hardware is compatible with TABLO Self-Ordering?',
    answer: 'TABLO Self-Ordering supports standard omnidirectional 2D desktop barcode scanners and standard 80mm/58mm thermal receipt printers connected to a host counter terminal. Compatibility is verified during onboarding.'
  },
  {
    question: 'How can restaurant owners enquire about TABLO solutions?',
    answer: 'You can click any “Get in Touch” or “Discuss Your Restaurant’s Needs” button on this page to initiate an enquiry, or contact Neoriz Solutions directly via WhatsApp at +91 9447261739 or email at hello@neorizsolutions.com. Our team will review your dining layout, table count, and counter flow to recommend the right solution.'
  }
];
