import { useState } from 'react';
import { BookingModal } from '@/components/common/BookingModal';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { FooterSection } from '@/components/layout/FooterSection';
import { Header } from '@/components/layout/Header';
import { TopTrustBar } from '@/components/layout/TopTrustBar';
import { DiveSitesSection } from '@/components/sections/DiveSitesSection';
import { ExperiencesSection } from '@/components/sections/ExperiencesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import type { BookingSelection } from '@/types/booking';

export function App() {
  const [selectedBooking, setSelectedBooking] = useState<BookingSelection | null>(null);

  return (
    <>
      <TopTrustBar />
      <Header />

      <main>
        <HeroSection />
        <ExperiencesSection onSelectExperience={setSelectedBooking} />
        <WhyUsSection />
        <DiveSitesSection />
        <FaqSection />
      </main>

      <FooterSection />
      <FloatingWhatsApp />

      <BookingModal
        selection={selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
    </>
  );
}

export default App;
