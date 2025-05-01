
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/dashboard/FeatureCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, ShoppingCart, Car, Settings } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-auto-blue to-auto-teal text-white py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Complete Platform for Car Owners
              </h1>
              <p className="text-lg mb-8 opacity-90 max-w-xl">
                Manage your vehicles, hire drivers, buy and sell cars, and access a marketplace of auto parts all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-auto-orange hover:bg-auto-orange/90 text-white" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
                  <Link to="/marketplace">Browse Marketplace</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Car dashboard" 
                className="rounded-lg shadow-2xl max-w-full md:max-w-md object-cover" 
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Auto Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform offers everything car owners need to manage their vehicles, hire drivers, and buy or sell automotive products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                title="User & Driver Management" 
                description="Hire drivers, post job offers, and manage profiles with ease."
                icon={<Users className="h-6 w-6" />}
                onClick={() => navigate("/drivers")}
              />
              <FeatureCard 
                title="Marketplace & E-Commerce" 
                description="Buy and sell cars, parts, and accessories in our marketplace."
                icon={<ShoppingCart className="h-6 w-6" />}
                onClick={() => navigate("/marketplace")}
              />
              <FeatureCard 
                title="Vehicle Management" 
                description="Track documents, maintenance, and find nearby service centers."
                icon={<Car className="h-6 w-6" />}
                onClick={() => navigate("/vehicles")}
              />
              <FeatureCard 
                title="Admin Dashboard" 
                description="Manage users, listings, and platform settings from one interface."
                icon={<Settings className="h-6 w-6" />}
                onClick={() => navigate("/admin")}
              />
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started with AutoManage in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-auto-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-auto-blue">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create an Account</h3>
                <p className="text-muted-foreground">
                  Sign up as a car owner or driver and complete your profile.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-auto-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-auto-blue">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Add Your Vehicles</h3>
                <p className="text-muted-foreground">
                  Register your cars and upload important documents.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-auto-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-auto-blue">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Explore Features</h3>
                <p className="text-muted-foreground">
                  Browse marketplace, hire drivers, or manage your fleet.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-auto-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of car owners and drivers on our platform and experience the future of automotive management.
            </p>
            <Button size="lg" className="bg-auto-orange hover:bg-auto-orange/90" asChild>
              <Link to="/register">Create Your Account</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
