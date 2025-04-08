
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Activity, 
  Thermometer, 
  Bell, 
  Tablet, 
  Check, 
  Star,
  Stethoscope,
  UserRound
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  name: string;
  image: string;
  description: string;
  category: 'featured' | 'device' | 'service' | 'healthcare';
  type: string;
  icon: React.ReactNode;
  benefits?: string[];
}

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      name: "iHealth Dashboard Tablet",
      image: "/lovable-uploads/30a5eb40-c8db-4c13-ba65-2af816834fb8.png", // Updated image path
      description: "Simple, large-format tablet pre-configured for easy health tracking.",
      category: "featured",
      type: "Featured Device",
      icon: <Tablet className="h-6 w-6" />,
      benefits: [
        "Large format touchscreen for easy visibility",
        "Simple interface designed for all ages",
        "Integrates with all iHealth devices"
      ]
    },
    {
      name: "Guardian Button",
      image: "/placeholder.svg",
      description: "One-press emergency button that works anywhere in your home, no phone needed.",
      category: "device",
      type: "Health Monitoring",
      icon: <Shield className="h-6 w-6" />,
      benefits: [
        "Waterproof design for bathroom safety",
        "Long-lasting battery life",
        "Instant emergency alerts"
      ]
    },
    {
      name: "Heart Rate Monitor",
      image: "/placeholder.svg",
      description: "Continuous heart rate tracking with automatic alerts for irregularities.",
      category: "device",
      type: "Health Monitoring",
      icon: <Heart className="h-6 w-6" />,
      benefits: [
        "24/7 continuous monitoring",
        "Medical-grade accuracy",
        "Automatic irregular heartbeat detection"
      ]
    },
    {
      name: "Smart Scales",
      image: "/placeholder.svg",
      description: "Precise weight measurements with trend tracking and automatic syncing.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />,
      benefits: [
        "Multi-user profiles",
        "Tracks weight, BMI, and body composition",
        "Seamless data synchronization"
      ]
    },
    {
      name: "Thermometer",
      image: "/placeholder.svg",
      description: "Contactless temperature readings with fever detection and history.",
      category: "device",
      type: "Health Monitoring",
      icon: <Thermometer className="h-6 w-6" />,
      benefits: [
        "Contactless measurement",
        "Historical temperature tracking",
        "Fever alerts and notifications"
      ]
    },
    {
      name: "Bed Sensor",
      image: "/placeholder.svg",
      description: "Monitor sleep patterns, bed exits, and nighttime activity without wearables.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />,
      benefits: [
        "Non-invasive sleep tracking",
        "Detects sleep quality and disturbances",
        "Sends alerts for unusual nighttime activity"
      ]
    },
    {
      name: "SOS Call Centre",
      image: "/placeholder.svg", 
      description: "Professional emergency response team available 24/7 at the touch of a button.",
      category: "service",
      type: "Professional Services",
      icon: <Bell className="h-6 w-6" />,
      benefits: [
        "24/7 professional monitoring",
        "Rapid emergency response",
        "Family notification system"
      ]
    },
    {
      name: "Medication Dispenser",
      image: "/placeholder.svg",
      description: "Automated medication management with reminders and verification.",
      category: "service",
      type: "Professional Services",
      icon: <Activity className="h-6 w-6" />,
      benefits: [
        "Scheduled medication reminders",
        "Missed dose alerts",
        "Medication compliance tracking"
      ]
    },
    {
      name: "Glucose Monitor",
      image: "/placeholder.svg",
      description: "Continuous glucose tracking with alerts and trend analysis.",
      category: "service",
      type: "Professional Services",
      icon: <Activity className="h-6 w-6" />,
      benefits: [
        "Real-time glucose monitoring",
        "Customizable alert thresholds",
        "Comprehensive trend analysis"
      ]
    },
    {
      name: "Nurse-Sync",
      image: "/placeholder.svg",
      description: "Direct connection to qualified nurses for health advice and consultation.",
      category: "healthcare",
      type: "Healthcare Professionals",
      icon: <UserRound className="h-6 w-6" />,
      benefits: [
        "On-demand nurse consultations",
        "Medication review services",
        "Regular health check-ins"
      ]
    },
    {
      name: "Medic-Sync",
      image: "/placeholder.svg",
      description: "24/7 access to medical professionals for urgent health concerns.",
      category: "healthcare",
      type: "Healthcare Professionals",
      icon: <Stethoscope className="h-6 w-6" />,
      benefits: [
        "Virtual doctor appointments",
        "Prescription management",
        "Medical history access"
      ]
    }
  ];

  // Filter products by category
  const featuredDevice = products.find(product => product.category === "featured");
  const healthMonitoringDevices = products.filter(product => product.category === "device");
  const professionalServices = products.filter(product => product.category === "service");
  const healthcareProfessionals = products.filter(product => product.category === "healthcare");

  
  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-grey/20 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl z-0"></div>
      
      {/* Curved lines */}
      <svg className="absolute top-1/3 left-0 w-full h-64 z-0 text-brand-teal/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,100 C300,0 600,200 1200,100 L1200,200 L0,200 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-20 left-0 w-full h-64 z-0 text-brand-orange/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" fill="currentColor" />
      </svg>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            Our Products
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent mb-4">
            Complete Care Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our integrated solutions work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        {/* All Products in One View */}
        <div className="space-y-16">
          {/* Featured Product Section */}
          {featuredDevice && (
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center mr-3 shadow-md">
                    <Tablet className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl text-brand-orange font-bold">Featured Device</h3>
                </div>
                <Badge variant="outline" className="mt-3 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-3 py-1 font-semibold shadow-sm">
                  Flagship Product
                </Badge>
              </div>
              
              <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Product Image with cleaner presentation */}
                  <div className="md:w-2/5 bg-gradient-to-br from-orange-50 to-orange-100/30">
                    <div className="flex items-center justify-center h-full p-6">
                      <div className="relative w-full max-w-xs mx-auto">
                        <div className="relative aspect-square flex items-center justify-center">
                          <div className="absolute inset-0 bg-white/60 rounded-xl shadow-sm"></div>
                          <img 
                            src={featuredDevice.image} 
                            alt={featuredDevice.name} 
                            className="relative w-[85%] h-[85%] object-contain mx-auto"
                          />
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent blur-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side content - More compact and focused */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="mb-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-500 ml-2">Top Rated</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-xl md:text-2xl text-brand-orange font-bold">
                        {featuredDevice.name}
                      </h4>
                      <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-2 py-0.5 text-xs font-semibold">
                        NEW
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{featuredDevice.description}</p>
                    
                    <div className="bg-brand-orange/5 p-3 rounded-lg border border-brand-orange/10 mb-4">
                      <h5 className="font-semibold text-sm text-brand-orange/90 mb-2">Key Benefits</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {featuredDevice.benefits?.map((benefit, index) => (
                          <div key={index} className="flex items-start text-gray-700 group">
                            <div className="mt-0.5 mr-2 flex-shrink-0">
                              <div className="w-4 h-4 rounded-full bg-brand-orange/10 flex items-center justify-center">
                                <Check className="h-2.5 w-2.5 text-brand-orange" />
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center transition-colors hover:bg-brand-teal/20 cursor-pointer">
                              <Heart className="h-4 w-4 text-brand-teal" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Health monitoring features</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center transition-colors hover:bg-brand-orange/20 cursor-pointer ml-2">
                              <Shield className="h-4 w-4 text-brand-orange" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Medical-grade security</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <Button className="ml-auto bg-gradient-to-r from-brand-orange to-brand-orange/90 hover:from-brand-orange/90 hover:to-brand-orange shadow-sm group rounded-full px-4 py-2 text-sm">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Health Monitoring Devices Section */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal to-brand-teal/70 flex items-center justify-center mr-4 shadow-md">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-brand-teal font-bold">Health Monitoring Devices</h3>
              </div>
              <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-teal/10 text-brand-teal border-brand-teal/30 px-4 py-1.5 font-semibold shadow-sm">
                Seamless Integration
              </Badge>
            </div>
            
            {/* Grid display for devices instead of carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthMonitoringDevices.map((product, index) => (
                <Card key={index} className="group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 z-0"></div>
                      <div className="h-full w-full flex items-center justify-center p-6 relative z-10">
                        <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-16 w-16 object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Accent corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-10 h-10 bg-brand-teal rounded-bl-xl transform rotate-0 origin-top-right group-hover:rotate-90 transition-transform duration-300"></div>
                        <div className="absolute top-2 right-2 text-white z-10">
                          {product.icon}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl text-brand-teal font-bold mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    {product.benefits && (
                      <ul className="mt-3 space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-600 text-sm">
                            <Check className="h-3 w-3 text-brand-teal mt-1 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-0 px-6 pb-6">
                    <Button className="w-full bg-brand-accent-teal hover:bg-brand-accent-teal/90 group shadow">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Services Section */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center mr-4 shadow-md">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-brand-orange font-bold">Professional Services</h3>
              </div>
              <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-4 py-1.5 font-semibold shadow-sm">
                Premium Care
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {professionalServices.map((product, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row bg-white h-full">
                    {/* Left side visual */}
                    <div className="md:w-2/5 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/70 z-0"></div>
                      <div className="h-48 md:h-full w-full flex items-center justify-center relative z-10 p-6">
                        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-12 w-12 object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Decorative element */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-orange/20 rounded-tl-2xl md:rounded-tr-none transform translate-y-8 md:translate-y-0 md:-translate-x-8 group-hover:translate-y-0 md:group-hover:translate-x-0 transition-transform duration-500"></div>
                    </div>
                    
                    {/* Right side content */}
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                      <h4 className="text-xl text-brand-orange font-bold mb-3">{product.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      
                      {product.benefits && (
                        <ul className="mt-2 space-y-2 mb-5">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                              <Check className="h-3 w-3 text-brand-orange mt-1 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <Button className="mt-auto w-full bg-gradient-to-r from-brand-orange/90 to-brand-orange hover:from-brand-orange hover:to-brand-orange/90 shadow-md group">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Healthcare Professionals Section - New Section */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600/70 flex items-center justify-center mr-4 shadow-md">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-blue-500 font-bold">Healthcare Professionals</h3>
              </div>
              <Badge variant="outline" className="mt-4 md:mt-0 bg-blue-500/10 text-blue-500 border-blue-500/30 px-4 py-1.5 font-semibold shadow-sm">
                Expert Medical Team
              </Badge>
            </div>
            
            {/* Different layout for healthcare professionals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {healthcareProfessionals.map((professional, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white group">
                  <div className="relative pb-1">
                    {/* Top decorative bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Professional Icon/Image Section */}
                        <div className="relative flex-shrink-0">
                          {/* Background Circle */}
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-md mb-4 mx-auto md:mx-0 group-hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              {professional.icon}
                            </div>
                          </div>
                          
                          {/* Animated Pulse */}
                          <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                              {professional.name}
                            </h4>
                            <Badge className="ml-3 bg-blue-100 text-blue-600 border-blue-200 px-2 py-0.5">
                              Available 24/7
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-6">{professional.description}</p>
                          
                          {/* Benefits section with improved styling */}
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                            <h5 className="text-sm font-semibold text-blue-700 mb-3">Service Benefits</h5>
                            <div className="grid grid-cols-1 gap-3">
                              {professional.benefits?.map((benefit, i) => (
                                <div key={i} className="flex items-start group">
                                  <div className="rounded-full bg-blue-100 p-1 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                                    <Check className="h-3 w-3 text-blue-700" />
                                  </div>
                                  <span className="text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex flex-wrap gap-3">
                            <Button className="bg-blue-500 hover:bg-blue-600 group">
                              <span>Connect Now</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              View Qualifications
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom decorative elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to action for healthcare section */}
            <div className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h4 className="text-xl font-bold text-blue-700 mb-2">Need Medical Advice?</h4>
                  <p className="text-blue-600/80">Our healthcare professionals are ready to assist you anytime.</p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 border border-blue-200 shadow-sm">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
