
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  onClick
}: FeatureCardProps) => {
  return (
    <Card 
      className={cn(
        "transition-all hover:shadow-md cursor-pointer border-2 hover:border-auto-blue/20", 
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="feature-icon">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[2px] w-full bg-gradient-to-r from-auto-blue/10 via-auto-blue/30 to-auto-blue/10 my-2" />
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
