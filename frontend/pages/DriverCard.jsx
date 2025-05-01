
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Star, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface DriverCardProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  hourlyRate: number;
  dailyRate: number;
  location: string;
  experience: number;
  specialties: string[];
  available: boolean;
  featured?: boolean;
}

const DriverCard = ({
  id,
  name,
  avatar,
  rating,
  hourlyRate,
  dailyRate,
  location,
  experience,
  specialties,
  available,
  featured = false
}: DriverCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-md",
      featured && "border-auto-orange",
      !available && "opacity-75"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-start gap-3">
          <div className="relative">
            {avatar ? (
              <img 
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-muted" 
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
            {featured && (
              <Badge className="absolute -top-1 -right-1 bg-auto-orange">Top</Badge>
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <CardTitle className="text-lg">{name}</CardTitle>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{rating.toFixed(1)}</span>
              </div>
            </div>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" /> {location}
            </CardDescription>
            <div className="flex items-center gap-1 mt-1 text-sm">
              <Calendar className="h-3 w-3" /> {experience} years experience
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-muted/40 p-2 rounded text-center">
            <div className="text-sm text-muted-foreground">Hourly Rate</div>
            <div className="font-bold text-auto-blue">${hourlyRate}/hr</div>
          </div>
          <div className="bg-muted/40 p-2 rounded text-center">
            <div className="text-sm text-muted-foreground">Daily Rate</div>
            <div className="font-bold text-auto-blue">${dailyRate}/day</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <Badge 
          variant={available ? "default" : "outline"}
          className={available ? "bg-green-500 mt-3" : "text-gray-500 mt-3"}
        >
          {available ? "Available Now" : "Currently Booked"}
        </Badge>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" className="w-[48%]">
          View Profile
        </Button>
        <Button 
          size="sm" 
          className={cn(
            "w-[48%]",
            available 
              ? "bg-auto-blue hover:bg-auto-blue/90" 
              : "bg-gray-400 hover:bg-gray-400/90 cursor-not-allowed"
          )}
          disabled={!available}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DriverCard;
