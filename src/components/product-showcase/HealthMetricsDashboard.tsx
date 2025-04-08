
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Thermometer, Activity } from 'lucide-react';

export const HealthMetricsDashboard: React.FC = () => {
  return (
    <div className="mt-16 px-6 py-8 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl border border-brand-teal/10 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-left md:max-w-xs">
          <h4 className="text-xl font-bold text-brand-teal mb-3">Complete Health Dashboard</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            All devices seamlessly connect to provide a comprehensive view of your health metrics in one place.
          </p>
          <Button variant="ghost" className="mt-4 bg-white hover:bg-white/90 text-brand-teal group px-4 py-2 h-auto shadow-sm">
            View All Metrics
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Simplified metrics visualization for better performance */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
            {[
              { name: "Heart Rate", icon: <Heart className="h-4 w-4" />, value: "72 bpm", color: "rose" },
              { name: "Temperature", icon: <Thermometer className="h-4 w-4" />, value: "98.6°F", color: "amber" },
              { name: "Steps", icon: <Activity className="h-4 w-4" />, value: "5,280 steps", color: "emerald" },
              { name: "Sleep", icon: <Activity className="h-4 w-4" />, value: "7.5 hours", color: "indigo" },
            ].map((metric, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 bg-white py-4 px-3 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                  {metric.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">{metric.name}</div>
                  <div className="font-medium text-brand-teal text-lg">{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
