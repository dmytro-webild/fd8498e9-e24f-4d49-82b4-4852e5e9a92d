"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { BarChart2, MousePointer, PenTool, Search, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="The Digi Advert"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="Scale Your Presence with The Digi Advert"
      description="We craft performance-driven marketing strategies that turn clicks into loyal customers for modern, growing businesses."
      kpis={[
        {
          value: "500+",
          label: "Campaigns Launched",
        },
        {
          value: "10M+",
          label: "Reach Generated",
        },
        {
          value: "200%",
          label: "Avg Growth Rate",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Scaling",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/businesswoman-looking-company-charts_482257-124401.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",
          alt: "Desktop PC on the wooden desk showcases infographics and client reach data",
        },
        {
          src: "http://img.b2bpic.net/free-photo/network-analyst-studying-digital-commerce-progression-reports-computer_482257-126389.jpg",
          alt: "Network analyst studying digital commerce progression reports on computer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/laptop-computer-with-company-profit-progress-screen_482257-77678.jpg",
          alt: "Laptop computer with company profit progress on screen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shoulder-view-african-american-startup-employee-looking-laptop-screen-with-business-analytics-charts-sitting-desk-close-focus-portable-computer-display-with-sales-results_482257-38698.jpg",
          alt: "Over shoulder view of african american startup employee looking at laptop screen with business analytics charts sitting at desk. Close focus on portable computer display with sales results.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
          alt: "professional portrait corporate leader",
        },
      ]}
      avatarText="Trusted by 500+ global brands"
      marqueeItems={[
        {
          type: "text-icon",
          text: "SEO Optimization",
          icon: Search,
        },
        {
          type: "text-icon",
          text: "Content Marketing",
          icon: PenTool,
        },
        {
          type: "text-icon",
          text: "PPC Management",
          icon: MousePointer,
        },
        {
          type: "text-icon",
          text: "Data Analytics",
          icon: BarChart2,
        },
        {
          type: "text-icon",
          text: "Brand Strategy",
          icon: Target,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Partners in Digital Growth"
      description="The Digi Advert is more than a marketing agency; we are your strategic partners. We leverage cutting-edge analytics to ensure your brand resonates, engages, and converts consistently in a crowded digital marketplace."
      buttons={[
        {
          text: "Our Approach",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/employees-preparing-business-presentation_482257-124560.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "SEO Domination",
          description: "Rank higher, get seen, and own your market category.",
          imageSrc: "http://img.b2bpic.net/free-photo/strategy-analysis-planning-vision-business-success-concept_53876-121236.jpg",
        },
        {
          title: "Content Strategy",
          description: "Compelling narratives that engage and inspire your audience.",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-light-prisms-reflection_23-2148898148.jpg",
        },
        {
          title: "PPC Performance",
          description: "Optimized paid campaigns maximizing your ROI daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-manager-doing-accounting-work-pc-with-chroma-key-screen_482257-126417.jpg",
        },
      ]}
      title="Digital Services Designed to Win"
      description="Comprehensive strategies to cover every angle of your digital growth."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Performance at a Glance"
      tag="Trusted By Industry Leaders"
      metrics={[
        {
          id: "m1",
          value: "98%",
          description: "Client Retention",
        },
        {
          id: "m2",
          value: "$5M+",
          description: "Ad Spend Optimized",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Strategic Support",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "CEO",
          company: "TechInnovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Founder",
          company: "DesignCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-working-her-office-making-plans-filling-her-schedule-notebook_1258-194720.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Marketing Dir",
          company: "GrowFast",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-engineer-solar-panels-plant-reading-documentation_482257-120499.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Product Mgr",
          company: "StartupX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-desk-table-business-company-office_482257-16773.jpg",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Director",
          company: "OmniSales",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Real success stories from brands we have helped scale."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateTech",
        "GrowthInc",
        "GlobalBrands",
        "ScaleHub",
        "DigitalWave",
        "MarketPro",
        "StrategyCo",
      ]}
      title="Partnering with Visionary Brands"
      description="We are proud to collaborate with industry-leading companies."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How do you measure success?",
          content: "We focus on data-driven KPIs that align with your business goals.",
        },
        {
          id: "f2",
          title: "Can you handle big budgets?",
          content: "Yes, we scale campaigns to match your business size and objectives.",
        },
        {
          id: "f3",
          title: "Is there a minimum contract?",
          content: "We offer flexible terms to ensure we can prove our value to you.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Get quick answers to common questions about our agency."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to scale your digital presence? Let's get started."
      buttons={[
        {
          text: "Contact Us Now",
          href: "mailto:hello@thedigiadvert.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="The Digi Advert"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
