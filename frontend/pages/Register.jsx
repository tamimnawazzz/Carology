
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [userType, setUserType] = useState<"owner" | "driver">("owner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic would go here
    console.log({ name, email, password, confirmPassword, acceptTerms, userType });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 px-4 py-10">
      <div className="mb-6 flex flex-col items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-auto-blue" />
          <span className="font-bold text-2xl text-auto-blue">AutoManage</span>
        </Link>
        <h2 className="mt-2 text-2xl font-semibold">Create an Account</h2>
        <p className="text-muted-foreground">Join our platform to manage your vehicles</p>
      </div>
      
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your account to get started
            </CardDescription>
            <Tabs defaultValue="owner" className="mt-4" onValueChange={(value) => setUserType(value as "owner" | "driver")}>
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="owner">Car Owner</TabsTrigger>
                <TabsTrigger value="driver">Driver</TabsTrigger>
              </TabsList>
              <TabsContent value="owner" className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Sign up as a car owner to list vehicles, hire drivers, and manage your fleet.
                </p>
              </TabsContent>
              <TabsContent value="driver" className="pt-3">
                <p className="text-sm text-muted-foreground">
                  Sign up as a driver to offer your services and find driving jobs.
                </p>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="acceptTerms" 
                checked={acceptTerms} 
                onCheckedChange={(checked) => {
                  setAcceptTerms(checked === true);
                }} 
                required
              />
              <Label htmlFor="acceptTerms" className="text-sm cursor-pointer">
                I accept the{" "}
                <Link to="/terms" className="text-auto-blue hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-auto-blue hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-auto-blue hover:bg-auto-blue/90" 
              disabled={!acceptTerms}
            >
              Create Account
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-auto-blue hover:underline">
                Sign In
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
