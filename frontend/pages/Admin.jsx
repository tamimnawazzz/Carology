
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, ShoppingCart, Car, MessageSquare, Bell, Settings, Search } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auto-blue text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="opacity-90">
              Manage users, listings, jobs, and system settings
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  +123 from last month
                </p>
                <Progress value={68} className="mt-2 h-1" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">
                  +42 from last month
                </p>
                <Progress value={45} className="mt-2 h-1" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Driver Jobs</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86</div>
                <p className="text-xs text-muted-foreground">
                  +12 from last week
                </p>
                <Progress value={30} className="mt-2 h-1" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">
                  5 unresolved tickets
                </p>
                <Progress value={18} className="mt-2 h-1" />
              </CardContent>
            </Card>
          </div>
          
          {/* Admin Tabs */}
          <Tabs defaultValue="users">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="listings">Listings</TabsTrigger>
                <TabsTrigger value="jobs">Driver Jobs</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-1" /> Search
                </Button>
                <Button size="sm" className="bg-auto-blue hover:bg-auto-blue/90">
                  Action
                </Button>
              </div>
            </div>
            
            <TabsContent value="users" className="mt-0 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage user accounts, permissions, and activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="User" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Smith</div>
                          <div className="text-sm text-muted-foreground">john@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="User" />
                          <AvatarFallback>MG</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Maria Garcia</div>
                          <div className="text-sm text-muted-foreground">maria@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="" alt="User" />
                          <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Alex Johnson</div>
                          <div className="text-sm text-muted-foreground">alex@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="listings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Marketplace Listings</CardTitle>
                  <CardDescription>
                    Manage all vehicle and parts listings in the marketplace
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12">
                    Listing management interface would be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Jobs</CardTitle>
                  <CardDescription>
                    Manage job postings, applications, and employment history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12">
                    Driver job management interface would be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Notification System</CardTitle>
                    <CardDescription>
                      Configure and send system notifications to users
                    </CardDescription>
                  </div>
                  <Bell className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12">
                    Notification management interface would be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>System Settings</CardTitle>
                    <CardDescription>
                      Configure global settings for the platform
                    </CardDescription>
                  </div>
                  <Settings className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12">
                    System settings interface would be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
