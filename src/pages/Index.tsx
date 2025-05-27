
import React from 'react';
import Header from '@/components/Header';
import SearchTabs from '@/components/SearchTabs';
import DestinationCard from '@/components/DestinationCard';
import OfferCard from '@/components/OfferCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Destinations data
  const destinations = [
    {
      title: "Goa",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Beach Paradise",
      price: "₹12,999"
    },
    {
      title: "Kashmir",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "Heaven on Earth",
      price: "₹15,999"
    },
    {
      title: "Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace028483c3",
      description: "Royal Experience",
      price: "₹9,999"
    },
    {
      title: "Himachal",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Mountain Retreat",
      price: "₹11,999"
    }
  ];

  // Offers data
  const offers = [
    {
      title: "Domestic Flights",
      code: "FLYHOME",
      description: "Get up to ₹2,000 off on domestic flights",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      discount: "25% OFF",
      expires: "30 Jun"
    },
    {
      title: "Hotel Stays",
      code: "MMTLUXE",
      description: "Enjoy luxury stays with 30% discount",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      discount: "30% OFF",
      expires: "15 Jul"
    },
    {
      title: "Holiday Packages",
      code: "VACATION",
      description: "Family packages starting at ₹20,000",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      discount: "15% OFF",
      expires: "31 Jul"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Search */}
      <section className="booking-container py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Perfect Trip
            </h1>
            <p className="text-white text-lg opacity-90 max-w-2xl mx-auto">
              Find and book flights, hotels, trains and buses at the best prices
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <SearchTabs />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-mmt-blue">
              Offers & Deals
            </h2>
            <Button variant="ghost" className="text-mmt-blue">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-mmt-blue">
              Popular Destinations
            </h2>
            <Button variant="ghost" className="text-mmt-blue">
              View All Destinations
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-12 md:py-16 bg-mmt-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Download our Mobile App
              </h2>
              <p className="text-white/80 mb-6">
                Get exclusive mobile-only deals and manage your trips on the go with our user-friendly travel app.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Google Play
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  App Store
                </Button>
              </div>
            </div>
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Mobile App"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-mmt-blue text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mmt-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a5071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Booking</h3>
              <p className="text-gray-600">
                Quick and easy booking process to save your time and energy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mmt-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a5071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                We offer the best prices and exclusive deals you won't find elsewhere.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mmt-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a5071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support to assist you whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
