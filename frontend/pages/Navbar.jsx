
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Car,
  ShoppingCart,
  Users,
  Settings,
  Menu,
  X,
  Bell,
  User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-auto-blue" />
            <span className="font-bold text-xl text-auto-blue">AutoManage</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex space-x-6">
              <NavLinks />
            </div>
          )}

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-auto-gray cursor-pointer" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                3
              </Badge>
            </div>
            <Link to="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-auto-gray cursor-pointer" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                  2
                </Badge>
              </div>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-auto-blue hover:bg-auto-blue/90" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <NavLinks mobile />
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex space-x-4">
                <div className="relative">
                  <Bell className="h-5 w-5 text-auto-gray" />
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                    3
                  </Badge>
                </div>
                <Link to="/cart">
                  <div className="relative">
                    <ShoppingCart className="h-5 w-5 text-auto-gray" />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                      2
                    </Badge>
                  </div>
                </Link>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button size="sm" className="bg-auto-blue hover:bg-auto-blue/90" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const linkClass = mobile 
    ? "block py-2 hover:text-auto-blue transition-colors" 
    : "hover:text-auto-blue transition-colors";

  return (
    <div className={mobile ? "flex flex-col space-y-2" : "flex items-center space-x-6"}>
      <Link to="/drivers" className={linkClass}>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" /> 
          <span>Drivers</span>
        </div>
      </Link>
      <Link to="/marketplace" className={linkClass}>
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" /> 
          <span>Marketplace</span>
        </div>
      </Link>
      <Link to="/vehicles" className={linkClass}>
        <div className="flex items-center gap-2">
          <Car className="h-4 w-4" /> 
          <span>My Vehicles</span>
        </div>
      </Link>
      <Link to="/admin" className={linkClass}>
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4" /> 
          <span>Admin</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
