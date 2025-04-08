
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-brand-teal transition-colors">Features</a>
            <a href="#products" className="text-gray-700 hover:text-brand-teal transition-colors">Products</a>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1">
              <ShoppingCart className="h-4 w-4" />
              Pricing
            </Link>
            <a href="#about" className="text-gray-700 hover:text-brand-teal transition-colors">About Us</a>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                className="text-brand-teal border-brand-teal hover:bg-brand-teal/10"
              >
                Login
              </Button>
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
              >
                Get Started
              </Button>
            </div>
          </nav>

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
                className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 w-full"
              >
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
