
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, ShoppingCart, User, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="w-full mx-auto flex justify-center">
        <div className="w-full max-w-6xl px-4 flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Navigation in the center */}
          <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            <a href="#features" className="text-gray-700 hover:text-brand-teal transition-colors whitespace-nowrap">Features</a>
            <a href="#products" className="text-gray-700 hover:text-brand-teal transition-colors whitespace-nowrap">Products</a>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1 whitespace-nowrap">
              <ShoppingCart className="h-4 w-4" />
              Pricing
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1 whitespace-nowrap">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <a href="#about" className="text-gray-700 hover:text-brand-teal transition-colors whitespace-nowrap">About Us</a>
          </nav>
          
          {/* Action buttons on the right */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="outline" 
              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 whitespace-nowrap"
            >
              <User className="h-4 w-4 mr-1" />
              Login
            </Button>
            <Button 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-8 bg-white">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <Link
              to="/pricing" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              Pricing
            </Link>
            <Link
              to="/dashboard" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                variant="outline" 
                className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 w-full flex items-center justify-center gap-1"
              >
                <User className="h-4 w-4" />
                Login
              </Button>
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
