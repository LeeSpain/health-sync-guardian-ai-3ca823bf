
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, HelpCircle, LogOut, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const MemberDashboardHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="ml-2 text-lg font-semibold text-brand-teal hidden md:inline-block">Member Portal</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/dashboard/family" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1">
              <Users className="h-4 w-4" />
              Family
            </Link>
            <Link to="/dashboard/settings" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link to="/dashboard/help" className="text-gray-700 hover:text-brand-teal transition-colors flex items-center gap-1">
              <HelpCircle className="h-4 w-4" />
              Help
            </Link>
            <Button 
              variant="outline" 
              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 flex items-center gap-1"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
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
            <Link
              to="/dashboard" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="/dashboard/family" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-4 w-4" />
              Family
            </Link>
            <Link
              to="/dashboard/settings" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              to="/dashboard/help" 
              className="text-gray-700 hover:text-brand-teal transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-4 w-4" />
              Help
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
