import About from '@/components/About'
import Ayurveda from '@/components/Ayurveda'
import Banquet from '@/components/Banquet'
import ContactPage from '@/components/Contact'
import Dining from '@/components/Dining'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Location from '@/components/Location'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import AmenitiesRibbon from '@/components/Ribon'
import Rooms from '@/components/Rooms'
import VirtualTour from '@/components/VirtualTour'
import React from 'react'

function page() {
  return (
    <div>
<Navbar />
      <Hero />
      <AmenitiesRibbon />
      <About />
      <Rooms />
      <Dining />
      <Ayurveda />
      <Banquet />
      {/* <VirtualTour /> */}
      <Gallery />
      <Reviews />
      {/* <Location /> */}
      <ContactPage />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default page