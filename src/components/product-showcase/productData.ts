
import { 
  Heart, 
  Shield, 
  Activity, 
  Thermometer, 
  Bell, 
  Tablet, 
  Stethoscope,
  UserRound
} from 'lucide-react';
import { Product } from './types';
import React from 'react';

export const getProductsData = (): Product[] => [
  {
    name: "iHealth Dashboard Tablet",
    image: "/lovable-uploads/30a5eb40-c8db-4c13-ba65-2af816834fb8.png",
    description: "Simple, large-format tablet pre-configured for easy health tracking.",
    category: "featured",
    type: "Featured Device",
    icon: React.createElement(Tablet, { className: "h-6 w-6" }),
    benefits: [
      "Large format touchscreen for easy visibility",
      "Simple interface designed for all ages",
      "Integrates with all iHealth devices"
    ]
  },
  {
    name: "Guardian Button",
    image: "/lovable-uploads/c38f7f2c-ac88-45a4-be0e-6ca22e7498f1.png", 
    description: "One-press emergency button that works anywhere in your home, no phone needed.",
    category: "device",
    type: "Health Monitoring",
    icon: React.createElement(Shield, { className: "h-6 w-6" }),
    benefits: [
      "Waterproof design for bathroom safety",
      "Long-lasting battery life",
      "Instant emergency alerts"
    ]
  },
  {
    name: "Heart Rate Monitor",
    image: "/lovable-uploads/2372f3d6-0624-4858-96b0-44839b74bce5.png",
    description: "Continuous heart rate tracking with automatic alerts for irregularities.",
    category: "device",
    type: "Health Monitoring",
    icon: React.createElement(Heart, { className: "h-6 w-6" }),
    benefits: [
      "24/7 continuous monitoring",
      "Medical-grade accuracy",
      "Automatic irregular heartbeat detection"
    ]
  },
  {
    name: "Smart Scales",
    image: "/lovable-uploads/8d6cc63b-a2fa-4688-9ba8-2a6c0e3a327a.png",
    description: "Precise weight measurements with trend tracking and automatic syncing.",
    category: "device",
    type: "Health Monitoring",
    icon: React.createElement(Activity, { className: "h-6 w-6" }),
    benefits: [
      "Multi-user profiles",
      "Tracks weight, BMI, and body composition",
      "Seamless data synchronization"
    ]
  },
  {
    name: "Thermometer",
    image: "/lovable-uploads/ec15308f-f7c7-4558-8c68-3a3c04deac25.png",
    description: "Contactless temperature readings with fever detection and history.",
    category: "device",
    type: "Health Monitoring",
    icon: React.createElement(Thermometer, { className: "h-6 w-6" }),
    benefits: [
      "Contactless measurement",
      "Historical temperature tracking",
      "Fever alerts and notifications"
    ]
  },
  {
    name: "Bed Sensor",
    image: "/lovable-uploads/bc5cfcc2-3468-4e5f-a99f-111609b5d011.png",
    description: "Monitor sleep patterns, bed exits, and nighttime activity without wearables.",
    category: "device",
    type: "Health Monitoring",
    icon: React.createElement(Activity, { className: "h-6 w-6" }),
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
    icon: React.createElement(Bell, { className: "h-6 w-6" }),
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
    icon: React.createElement(Activity, { className: "h-6 w-6" }),
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
    icon: React.createElement(Activity, { className: "h-6 w-6" }),
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
    icon: React.createElement(UserRound, { className: "h-6 w-6" }),
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
    icon: React.createElement(Stethoscope, { className: "h-6 w-6" }),
    benefits: [
      "Virtual doctor appointments",
      "Prescription management",
      "Medical history access"
    ]
  }
];
