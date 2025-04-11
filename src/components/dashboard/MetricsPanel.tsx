
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
  Smartphone 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  subtext?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, subtext }) => {
  return (
    <Card className={`border-${color}-200 shadow-sm hover:shadow transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className={`rounded-full bg-${color}-100 p-2 mr-3`}>
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-xl font-bold text-gray-800">{value}</p>
            {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
          </div>
        </div>
      </CardContent>
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
      subtext: 'Normal range'
    },
    { 
      title: 'Glucose', 
      value: '98 mg/dL', 
      icon: <Droplet className="h-5 w-5 text-blue-500" />, 
      color: 'blue',
      subtext: 'Last updated 25m ago'
    },
    { 
      title: 'Sleep', 
      value: '7.5 hrs', 
      icon: <Moon className="h-5 w-5 text-indigo-500" />, 
      color: 'indigo',
      subtext: '92% efficiency'
    },
    { 
      title: 'Steps', 
      value: '5,280', 
      icon: <Activity className="h-5 w-5 text-green-500" />, 
      color: 'green',
      subtext: '52% of daily goal'
    },
    { 
      title: 'Temperature', 
      value: '98.6°F', 
      icon: <Thermometer className="h-5 w-5 text-amber-500" />, 
      color: 'amber',
      subtext: 'Normal'
    },
    { 
      title: 'Weight', 
      value: '165 lbs', 
      icon: <Scale className="h-5 w-5 text-purple-500" />, 
      color: 'purple',
      subtext: 'Stable for 2 weeks'
    },
    { 
      title: 'Mood', 
      value: 'Good', 
      icon: <Smile className="h-5 w-5 text-yellow-500" />, 
      color: 'yellow',
      subtext: 'Better than yesterday'
    },
    { 
      title: 'Medication', 
      value: '2 of 3 taken', 
      icon: <Pill className="h-5 w-5 text-cyan-500" />, 
      color: 'cyan',
      subtext: 'Next dose: 8:00 PM'
    },
    { 
      title: 'Devices', 
      value: '4 Connected', 
      icon: <Smartphone className="h-5 w-5 text-gray-500" />, 
      color: 'gray',
      subtext: 'All synced'
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-brand-teal mb-4">Health Metrics & Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            color={metric.color}
            subtext={metric.subtext}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsPanel;
