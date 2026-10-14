import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { SelfOrderingWorkflow } from './components/SelfOrderingWorkflow';
import { TableQrWorkflow } from './components/TableQrWorkflow';
import { Features } from './components/Features';
import { HardwareSetup } from './components/HardwareSetup';
import { BusinessBenefits } from './components/BusinessBenefits';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<'self-ordering' | 'table-qr' | 'both'>('both');

  const handleOpenEnquiry = (product: 'self-ordering' | 'table-qr' | 'both' = 'both') => {
    setSelectedEnquiryProduct(product);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFB] flex flex-col font-sans selection:bg-emerald-500/20 selection:text-[#064E3B]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* Hero Section: Introduces TABLO and Both Products with Distinct Cards */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Product Comparison Matrix (helps owners select right solution) */}
        <Comparison onOpenEnquiry={handleOpenEnquiry} />

        {/* Dedicated Visual Workflow Section: TABLO Self-Ordering (8 Steps with AI-generated visual cards) */}
        <SelfOrderingWorkflow />

        {/* Dedicated Visual Workflow Section: TABLO Table QR (6 Steps with AI-generated visual cards) */}
        <TableQrWorkflow />

        {/* Verified Product Features (Clearly separated into Self-Ordering & Table QR) */}
        <Features />

        {/* Physical Hardware Setup & Peripherals Breakdown */}
        <HardwareSetup />

        {/* Practical Venue Benefits */}
        <BusinessBenefits />

        {/* Frequently Asked Questions */}
        <FAQ onOpenEnquiry={handleOpenEnquiry} />

        {/* High-Contrast Final CTA */}
        <FinalCTA onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Direct Restaurant Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={handleCloseEnquiry} 
        defaultProduct={selectedEnquiryProduct}
      />
    </div>
  );
}
