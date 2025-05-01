
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DriverCard from '@/components/drivers/DriverCard';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, MapPin } from 'lucide-react';

const Drivers = () => {
  // Sample driver data
  const driverData = [
    {
      id: "1",
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      rating: 4.8,
      hourlyRate: 25,
      dailyRate: 200,
      location: "New York, NY",
      experience: 5,
      specialties: ["Luxury", "Long Distance", "Airport"],
      available: true,
      featured: true
    },
    {
      id: "2",
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 4.6,
      hourlyRate: 22,
      dailyRate: 180,
      location: "Los Angeles, CA",
      experience: 3,
      specialties: ["SUVs", "Family", "Events"],
      available: true,
      featured: false
    },
    {
      id: "3",
      name: "Alex Johnson",
      avatar: "",
      rating: 4.9,
      hourlyRate: 30,
      dailyRate: 240,
      location: "Chicago, IL",
      experience: 7,
      specialties: ["Executive", "Security", "Corporate"],
      available: false,
      featured: false
    },
    {
      id: "4",
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 4.7,
      hourlyRate: 28,
      dailyRate: 220,
      location: "Miami, FL",
      experience: 4,
      specialties: ["Luxury", "Tourism", "Events"],
      available: true,
      featured: false
    },
    {
      id: "5",
      name: "Michael Brown",
      avatar: "",
      rating: 4.5,
      hourlyRate: 24,
      dailyRate: 190,
      location: "Seattle, WA",
      experience: 2,
      specialties: ["Airport", "Local", "Weekends"],
      available: true,
      featured: false
    },
    {
      id: "6",
      name: "Jennifer Lee",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 4.9,
      hourlyRate: 32,
      dailyRate: 250,
      location: "Boston, MA",
      experience: 6,
      specialties: ["Executive", "Corporate", "Long Distance"],
      available: false,
      featured: true
    }
  ];

  const [maxRate, setMaxRate] = useState<number>(50);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auto-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Professional Drivers</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Connect with skilled drivers for your transportation needs, whether it's a one-time trip or regular services.
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
                    placeholder="Search drivers by name, specialty, or location" 
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Any location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-york">New York, NY</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="chicago">Chicago, IL</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="boston">Boston, MA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-auto-blue hover:bg-auto-blue/90">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </Button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="rate-range" className="text-sm font-medium mb-2 block">
                  Max Hourly Rate: ${maxRate}
                </Label>
                <Slider
                  id="rate-range"
                  defaultValue={[50]}
                  max={100}
                  step={5}
                  onValueChange={(value) => setMaxRate(value[0])}
                  className="py-4"
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Driver Type
                </Label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">All</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Luxury</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Corporate</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Airport</Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Availability
                </Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">Any Time</Button>
                  <Button variant="outline" size="sm" className="rounded-full bg-green-50 border-green-200">Available Now</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <Tabs defaultValue="browse">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="browse">Browse Drivers</TabsTrigger>
                <TabsTrigger value="post">Post a Job</TabsTrigger>
              </TabsList>
              <div className="text-muted-foreground text-sm">
                Showing {driverData.length} drivers
              </div>
            </div>
            
            <TabsContent value="browse" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {driverData.map((driver) => (
                  <DriverCard 
                    key={driver.id} 
                    {...driver} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="post" className="mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Post a Driver Job</h2>
                <p className="mb-6 text-muted-foreground">
                  Fill out the form below to post a job for drivers to apply. You'll be able to review applications and select the best fit for your needs.
                </p>
                
                <form className="space-y-4">
                  {/* This would be expanded in a real implementation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" placeholder="e.g., Personal Driver for Weekend Trip" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, State" />
                    </div>
                  </div>
                  
                  <Button className="bg-auto-blue hover:bg-auto-blue/90">
                    Post Job
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

export default Drivers;
