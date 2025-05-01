
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VehicleCard from '@/components/vehicles/VehicleCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, FileUp, Calendar, Car, Bell, FileCheck } from 'lucide-react';

const Vehicles = () => {
  // Sample vehicle data
  const vehicles = [
    {
      id: "1",
      make: "Tesla",
      model: "Model 3",
      year: 2020,
      licensePlate: "XYZ-123",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      documentStatus: "valid" as const,
      maintenanceStatus: "good" as const,
      insuranceExpiry: "Apr 15, 2025",
      lastService: "Jan 10, 2025"
    },
    {
      id: "2",
      make: "BMW",
      model: "5 Series",
      year: 2019,
      licensePlate: "ABC-789",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      documentStatus: "expiring" as const,
      maintenanceStatus: "due" as const,
      insuranceExpiry: "May 30, 2025",
      lastService: "Aug 22, 2024"
    },
    {
      id: "3",
      make: "Audi",
      model: "Q5",
      year: 2018,
      licensePlate: "DEF-456",
      imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      documentStatus: "expired" as const,
      maintenanceStatus: "overdue" as const,
      insuranceExpiry: "Feb 12, 2025",
      lastService: "May 5, 2024"
    }
  ];

  const reminders = [
    {
      id: "1",
      title: "Insurance Renewal",
      vehicle: "BMW 5 Series",
      date: "May 30, 2025",
      priority: "high"
    },
    {
      id: "2",
      title: "Oil Change Due",
      vehicle: "Audi Q5",
      date: "Next Week",
      priority: "medium"
    },
    {
      id: "3",
      title: "Annual Inspection",
      vehicle: "Tesla Model 3",
      date: "Jun 15, 2025",
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auto-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vehicle Management</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Keep track of all your vehicles, documents, and maintenance in one place.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Button className="bg-white text-auto-blue hover:bg-white/90 border border-auto-blue/20 h-auto py-4 flex-col">
              <PlusCircle className="h-6 w-6 mb-2" />
              <span>Add Vehicle</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col">
              <FileUp className="h-6 w-6 mb-2" />
              <span>Upload Document</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Schedule Service</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col">
              <Bell className="h-6 w-6 mb-2" />
              <span>Set Reminder</span>
            </Button>
          </div>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{vehicles.length}</div>
                <p className="text-xs text-muted-foreground">
                  All registered vehicles in your account
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Documents</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Registration, insurance, and other documents
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Reminders</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reminders.length}</div>
                <p className="text-xs text-muted-foreground">
                  Maintenance and document renewal reminders
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <Tabs defaultValue="vehicles">
            <TabsList>
              <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="reminders">Reminders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vehicles" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <VehicleCard 
                    key={vehicle.id} 
                    {...vehicle} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Vehicle Documents</h2>
                  <Button className="bg-auto-blue hover:bg-auto-blue/90">
                    <FileUp className="h-4 w-4 mr-2" /> Upload
                  </Button>
                </div>
                <p className="text-muted-foreground mb-6">
                  Manage all your vehicle-related documents in one place. Upload and organize registrations, insurance policies, maintenance records, and more.
                </p>
                
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <FileUp className="h-12 w-12 mx-auto text-muted-foreground/60 mb-3" />
                  <p className="text-muted-foreground">
                    Drop files here or click to upload
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reminders" className="mt-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Upcoming Reminders</h2>
                    <Button className="bg-auto-blue hover:bg-auto-blue/90">
                      <PlusCircle className="h-4 w-4 mr-2" /> Add Reminder
                    </Button>
                  </div>
                  <p className="text-muted-foreground">
                    Never miss important dates for your vehicles. Set reminders for maintenance, insurance renewals, inspections, and other important events.
                  </p>
                </div>
                
                <div className="divide-y">
                  {reminders.map((reminder) => (
                    <div 
                      key={reminder.id} 
                      className={`p-4 flex justify-between items-center ${
                        reminder.priority === 'high' ? 'bg-red-50' : 
                        reminder.priority === 'medium' ? 'bg-yellow-50' : 'bg-blue-50'
                      }`}
                    >
                      <div>
                        <h3 className="font-medium">{reminder.title}</h3>
                        <p className="text-sm text-muted-foreground">{reminder.vehicle}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          reminder.priority === 'high' ? 'text-red-600' : 
                          reminder.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                        }`}>
                          {reminder.date}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {reminder.priority === 'high' ? 'High Priority' : 
                           reminder.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vehicles;
