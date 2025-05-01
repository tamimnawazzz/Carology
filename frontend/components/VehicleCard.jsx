
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FileText, 
  AlertTriangle, 
  Check, 
  Activity 
} from "lucide-react";
import { cn } from "@/lib/utils";

type DocumentStatus = "valid" | "expiring" | "expired";
type MaintenanceStatus = "good" | "due" | "overdue";

interface VehicleCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  imageUrl: string;
  documentStatus: DocumentStatus;
  maintenanceStatus: MaintenanceStatus;
  insuranceExpiry: string;
  lastService: string;
}

const VehicleCard = ({
  id,
  make,
  model,
  year,
  licensePlate,
  imageUrl,
  documentStatus,
  maintenanceStatus,
  insuranceExpiry,
  lastService
}: VehicleCardProps) => {
  const getDocumentBadge = () => {
    switch (documentStatus) {
      case "valid":
        return <Badge className="bg-green-500"><Check className="h-3 w-3 mr-1" /> Valid</Badge>;
      case "expiring":
        return <Badge className="bg-yellow-500"><AlertTriangle className="h-3 w-3 mr-1" /> Expiring</Badge>;
      case "expired":
        return <Badge className="bg-red-500"><AlertTriangle className="h-3 w-3 mr-1" /> Expired</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  
  const getMaintenanceBadge = () => {
    switch (maintenanceStatus) {
      case "good":
        return <Badge className="bg-green-500"><Check className="h-3 w-3 mr-1" /> Good</Badge>;
      case "due":
        return <Badge className="bg-yellow-500"><AlertTriangle className="h-3 w-3 mr-1" /> Due</Badge>;
      case "overdue":
        return <Badge className="bg-red-500"><AlertTriangle className="h-3 w-3 mr-1" /> Overdue</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card className="overflow-hidden transition-all car-card-shadow">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={`${make} ${model}`}
          className="w-full h-48 object-cover" 
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {licensePlate}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{make} {model} ({year})</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pb-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Documents</span>
            <div className="flex items-center mt-1">
              {getDocumentBadge()}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Maintenance</span>
            <div className="flex items-center mt-1">
              {getMaintenanceBadge()}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm">
            <div className="text-muted-foreground flex items-center">
              <Calendar className="h-3 w-3 mr-1" /> Insurance Expires
            </div>
            <div>{insuranceExpiry}</div>
          </div>
          <div className="text-sm">
            <div className="text-muted-foreground flex items-center">
              <Activity className="h-3 w-3 mr-1" /> Last Service
            </div>
            <div>{lastService}</div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="grid grid-cols-2 gap-2 pt-0">
        <Button variant="outline" size="sm" className="flex items-center">
          <FileText className="h-4 w-4 mr-2" /> Documents
        </Button>
        <Button 
          className="bg-auto-blue hover:bg-auto-blue/90"
          size="sm"
        >
          <Activity className="h-4 w-4 mr-2" /> Maintenance
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
