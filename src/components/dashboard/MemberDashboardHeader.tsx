
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, Bell, HelpCircle } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const MemberDashboardHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="w-full px-4">
        <div className="w-full flex h-16 items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo on the left - completely flush */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="ml-2 text-lg font-semibold text-brand-teal hidden md:inline-block">Member Portal</span>
            </Link>
          </div>
          
          {/* Navigation in the center */}
          <nav className="hidden md:flex items-center mx-4">
            <Link to="/dashboard/help" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1 whitespace-nowrap">
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
          </nav>

          {/* Action buttons on the right */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="text-gray-700 hover:text-brand-teal relative whitespace-nowrap"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button 
              variant="outline" 
              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 flex items-center gap-1 whitespace-nowrap"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
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
            <Link
              to="/dashboard/help" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
            <Button 
              variant="outline" 
              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 w-full flex items-center justify-center gap-1"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MemberDashboardHeader;
