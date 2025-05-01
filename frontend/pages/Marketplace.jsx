
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CarListing from '@/components/marketplace/CarListing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Car, ShoppingBag, CircleDollarSign } from 'lucide-react';

const Marketplace = () => {
  // Sample car listing data
  const carListings = [
    {
      id: "1",
      title: "2020 Tesla Model 3",
      price: 39500,
      year: 2020,
      mileage: 25000,
      condition: "Excellent",
      location: "New York, NY",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      sellerName: "John Smith",
      featured: true
    },
    {
      id: "2",
      title: "2018 BMW 5 Series",
      price: 32000,
      year: 2018,
      mileage: 42000,
      condition: "Good",
      location: "Los Angeles, CA",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      sellerName: "Maria Garcia"
    },
    {
      id: "3",
      title: "2019 Audi Q5",
      price: 35800,
      year: 2019,
      mileage: 30500,
      condition: "Excellent",
      location: "Chicago, IL",
      imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      sellerName: "Alex Johnson"
    },
    {
      id: "4",
      title: "2017 Lexus RX 350",
      price: 29500,
      year: 2017,
      mileage: 48000,
      condition: "Good",
      location: "Miami, FL",
      imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      sellerName: "Sarah Wilson",
      featured: true
    },
    {
      id: "5",
      title: "2021 Honda Accord",
      price: 26800,
      year: 2021,
      mileage: 18000,
      condition: "Like New",
      location: "Seattle, WA",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      sellerName: "Michael Brown"
    },
    {
      id: "6",
      title: "2016 Toyota Highlander",
      price: 24500,
      year: 2016,
      mileage: 62000,
      condition: "Good",
      location: "Boston, MA",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      sellerName: "Jennifer Lee"
    }
  ];

  const [maxPrice, setMaxPrice] = useState<number>(50000);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auto-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Automotive Marketplace</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Find your next car, parts, or accessories from trusted sellers in our comprehensive marketplace.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search cars, parts, or accessories" 
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vehicles">Vehicles</SelectItem>
                    <SelectItem value="parts">Parts</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-auto-blue hover:bg-auto-blue/90">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </Button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price-range" className="text-sm font-medium mb-2 block">
                  Max Price: ${maxPrice.toLocaleString()}
                </Label>
                <Slider
                  id="price-range"
                  defaultValue={[50000]}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setMaxPrice(value[0])}
                  className="py-4"
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Condition
                </Label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">All</Button>
                  <Button variant="outline" size="sm" className="rounded-full">New</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Like New</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Used</Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Year
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Min Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i} value={(new Date().getFullYear() - 10 + i).toString()}>
                          {new Date().getFullYear() - 10 + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Max Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i} value={(new Date().getFullYear() - 9 + i).toString()}>
                          {new Date().getFullYear() - 9 + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <Tabs defaultValue="vehicles">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="vehicles" className="flex items-center gap-1">
                  <Car className="h-4 w-4" /> Vehicles
                </TabsTrigger>
                <TabsTrigger value="parts" className="flex items-center gap-1">
                  <ShoppingBag className="h-4 w-4" /> Parts
                </TabsTrigger>
                <TabsTrigger value="sell" className="flex items-center gap-1">
                  <CircleDollarSign className="h-4 w-4" /> Sell
                </TabsTrigger>
              </TabsList>
              <div className="text-muted-foreground text-sm">
                Showing {carListings.length} listings
              </div>
            </div>
            
            <TabsContent value="vehicles" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {carListings.map((listing) => (
                  <CarListing 
                    key={listing.id} 
                    {...listing} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="parts" className="mt-0">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Auto Parts & Accessories</h2>
                <p className="mb-6 text-muted-foreground">
                  Browse our selection of parts and accessories for your vehicle.
                </p>
                
                <Button className="bg-auto-blue hover:bg-auto-blue/90">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="sell" className="mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">List Your Vehicle</h2>
                <p className="mb-6 text-muted-foreground">
                  Complete the form below to create a listing for your vehicle. Include as many details as possible to attract potential buyers.
                </p>
                
                <form className="space-y-4">
                  {/* This would be expanded in a real implementation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input id="make" placeholder="e.g., Toyota" />
                    </div>
                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input id="model" placeholder="e.g., Camry" />
                    </div>
                  </div>
                  
                  <Button className="bg-auto-blue hover:bg-auto-blue/90">
                    Create Listing
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
