
import React from 'react';
import { 
  Heart, 
  Droplet, 
  Moon, 
  Activity, 
  Thermometer, 
  Scale, 
  Smile, 
  Pill, 
  Smartphone,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  subtext?: string;
  trend?: 'up' | 'down' | 'stable';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, subtext, trend }) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className={`rounded-full p-2 bg-${color}-100 mr-3`}>
              {icon}
            </div>
            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
          </div>
          {trend && (
            <span className={`text-xs px-2 py-1 rounded-full flex items-center ${
              trend === 'up' ? 'bg-green-100 text-green-700' : 
              trend === 'down' ? 'bg-red-100 text-red-700' : 
              'bg-gray-100 text-gray-700'
            }`}>
              {trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
              {trend === 'down' && <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />}
              {trend === 'stable' && <span className="h-2 w-2 rounded-full bg-gray-500 mr-1"></span>}
              <span>{trend}</span>
            </span>
          )}
        </div>
        <div className="flex justify-between items-baseline">
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
        </div>
      </div>
    </Card>
  );
};

const MetricsPanel: React.FC = () => {
  const metrics = [
    { 
      title: 'Heart Rate', 
      value: '72 bpm', 
      icon: <Heart className="h-5 w-5 text-red-500" />, 
      color: 'red',
      subtext: 'Normal range',
      trend: 'stable' as const
    },
    { 
      title: 'Glucose', 
      value: '98 mg/dL', 
      icon: <Droplet className="h-5 w-5 text-blue-500" />, 
      color: 'blue',
      subtext: 'Last updated 25m ago',
      trend: 'up' as const
    },
    { 
      title: 'Sleep', 
      value: '7.5 hrs', 
      icon: <Moon className="h-5 w-5 text-indigo-500" />, 
      color: 'indigo',
      subtext: '92% efficiency',
      trend: 'up' as const
    },
    { 
      title: 'Steps', 
      value: '5,280', 
      icon: <Activity className="h-5 w-5 text-green-500" />, 
      color: 'green',
      subtext: '52% of daily goal',
      trend: 'down' as const
    },
    { 
      title: 'Temperature', 
      value: '98.6°F', 
      icon: <Thermometer className="h-5 w-5 text-amber-500" />, 
      color: 'amber',
      subtext: 'Normal',
      trend: 'stable' as const
    },
    { 
      title: 'Weight', 
      value: '165 lbs', 
      icon: <Scale className="h-5 w-5 text-purple-500" />, 
      color: 'purple',
      subtext: 'Stable for 2 weeks',
      trend: 'stable' as const
    },
    { 
      title: 'Mood', 
      value: 'Good', 
      icon: <Smile className="h-5 w-5 text-yellow-500" />, 
      color: 'yellow',
      subtext: 'Better than yesterday',
      trend: 'up' as const
    },
    { 
      title: 'Medication', 
      value: '2 of 3 taken', 
      icon: <Pill className="h-5 w-5 text-cyan-500" />, 
      color: 'cyan',
      subtext: 'Next dose: 8:00 PM',
      trend: 'stable' as const
    },
    { 
      title: 'Devices', 
      value: '4 Connected', 
      icon: <Smartphone className="h-5 w-5 text-gray-500" />, 
      color: 'gray',
      subtext: 'All synced',
      trend: 'stable' as const
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-brand-teal">Health Metrics & Overview</h2>
        <button className="text-sm text-brand-teal hover:text-brand-teal/80 font-medium flex items-center">
          View all metrics
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            color={metric.color}
            subtext={metric.subtext}
            trend={metric.trend}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsPanel;
