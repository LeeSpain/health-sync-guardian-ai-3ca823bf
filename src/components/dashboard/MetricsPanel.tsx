
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
  unit?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, subtext, trend, unit }) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className={`rounded-full p-1.5 bg-${color}-100 text-${color}-500`}>
            {icon}
          </div>
          <div className="text-xs text-gray-600 font-medium">{title}</div>
          {trend && (
            <span className={`text-xs px-1.5 py-0.5 rounded-full inline-flex items-center ${
              trend === 'up' ? 'bg-green-100 text-green-700' : 
              trend === 'down' ? 'bg-red-100 text-red-700' : 
              'bg-gray-100 text-gray-700'
            }`}>
              {trend === 'up' && <TrendingUp className="h-2.5 w-2.5 mr-0.5" />}
              {trend === 'down' && <TrendingUp className="h-2.5 w-2.5 mr-0.5 transform rotate-180" />}
              {trend === 'stable' && <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mr-0.5"></span>}
              <span className="text-[10px]">{trend}</span>
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-2 flex items-baseline">
        <span className="text-xl font-bold text-gray-800">{value}</span>
        {unit && <span className="text-xs text-gray-500 ml-1">{unit}</span>}
      </div>
      
      {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
    </Card>
  );
};

const MetricsPanel: React.FC = () => {
  const metrics = [
    { 
      title: 'Heart Rate', 
      value: '72', 
      unit: 'bpm',
      icon: <Heart className="h-4 w-4" />, 
      color: 'red',
      subtext: 'Normal range',
      trend: 'stable' as const
    },
    { 
      title: 'Glucose', 
      value: '98', 
      unit: 'mg/dL',
      icon: <Droplet className="h-4 w-4" />, 
      color: 'blue',
      subtext: 'Last updated 25m ago',
      trend: 'up' as const
    },
    { 
      title: 'Sleep', 
      value: '7.5', 
      unit: 'hrs',
      icon: <Moon className="h-4 w-4" />, 
      color: 'indigo',
      subtext: '92% efficiency',
      trend: 'up' as const
    },
    { 
      title: 'Steps', 
      value: '5,280', 
      unit: '',
      icon: <Activity className="h-4 w-4" />, 
      color: 'green',
      subtext: '52% of daily goal',
      trend: 'down' as const
    },
    { 
      title: 'Temperature', 
      value: '98.6', 
      unit: '°F',
      icon: <Thermometer className="h-4 w-4" />, 
      color: 'amber',
      subtext: 'Normal',
      trend: 'stable' as const
    },
    { 
      title: 'Weight', 
      value: '165', 
      unit: 'lbs',
      icon: <Scale className="h-4 w-4" />, 
      color: 'purple',
      subtext: 'Stable for 2 weeks',
      trend: 'stable' as const
    },
    { 
      title: 'Mood', 
      value: 'Good', 
      unit: '',
      icon: <Smile className="h-4 w-4" />, 
      color: 'yellow',
      subtext: 'Better than yesterday',
      trend: 'up' as const
    },
    { 
      title: 'Medication', 
      value: '2 of 3', 
      unit: 'taken',
      icon: <Pill className="h-4 w-4" />, 
      color: 'cyan',
      subtext: 'Next dose: 8:00 PM',
      trend: 'stable' as const
    },
    { 
      title: 'Devices', 
      value: '4', 
      unit: 'Connected',
      icon: <Smartphone className="h-4 w-4" />, 
      color: 'gray',
      subtext: 'All synced',
      trend: 'stable' as const
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-brand-teal">Health Metrics & Overview</h2>
        <button className="text-xs text-brand-teal hover:text-brand-teal/80 font-medium flex items-center">
          View all metrics
          <ChevronRight className="h-3 w-3 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            title={metric.title}
            value={metric.value}
            unit={metric.unit}
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
