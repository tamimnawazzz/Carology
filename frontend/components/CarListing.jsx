
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface CarListingProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  condition: string;
  location: string;
  imageUrl: string;
  sellerName: string;
  featured?: boolean;
}

const CarListing = ({
  id,
  title,
  price,
  year,
  mileage,
  condition,
  location,
  imageUrl,
  sellerName,
  featured = false
}: CarListingProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all car-card-shadow",
      featured && "border-auto-orange"
    )}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover" 
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-auto-orange">Featured</Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="text-lg font-bold text-auto-blue">
            ${price.toLocaleString()}
          </div>
        </div>
        <CardDescription className="flex items-center gap-1">
          <span>Seller:</span> {sellerName}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm">
            <span className="text-muted-foreground">Year:</span> {year}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Mileage:</span> {mileage.toLocaleString()} mi
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Condition:</span> {condition}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Location:</span> {location}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" className="w-[48%]">
          Details
        </Button>
        <Button 
          size="sm" 
          className="w-[48%] bg-auto-blue hover:bg-auto-blue/90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Buy
        </Button>
      </CardFooter>
    </Card>
  );
};

import { cn } from "@/lib/utils";

export default CarListing;
