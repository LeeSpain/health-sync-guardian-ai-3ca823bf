import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Heart, Activity, Scale, HeartPulse, Battery, Bluetooth, Wifi } from 'lucide-react';

interface ProductTabsProps {
  productName: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ productName }) => {
  // Render different content based on the product
  const renderProductContent = () => {
    switch (productName) {
      case "Heart Rate Monitor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Heart Rate Monitor offers continuous heart rate tracking with automatic alerts for irregularities. 
              This medical-grade device provides accurate, real-time monitoring of your heart rate and rhythm, 
              giving you and your caregivers peace of mind.
            </p>
            <p className="mb-4">
              Designed for 24/7 use, the monitor is comfortable to wear and features a long-lasting battery. 
              The device automatically detects irregular heartbeats and immediately alerts both the wearer 
              and designated emergency contacts when concerning patterns are detected.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Advanced Heart Monitoring Features</h4>
            <p>
              The monitor tracks heart rate variability, resting heart rate, and active heart rate zones. 
              All data is securely transmitted to the iHealth Dashboard where it can be reviewed by the user, 
              family members, or healthcare professionals. Historical data is stored and analyzed to identify 
              trends and potential concerns before they become serious.
            </p>
          </div>
        );
      case "Smart Scales":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Smart Scales provide precise weight measurements with comprehensive body composition metrics 
              and automatic trend tracking. These scales go beyond basic weight measurements to give you a complete 
              picture of your physical health.
            </p>
            <p className="mb-4">
              With support for multiple user profiles, the entire household can track their individual metrics. 
              The scales automatically recognize who is standing on them and record data to the correct profile. 
              All measurements sync automatically with the iHealth Dashboard.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Comprehensive Body Measurements</h4>
            <p>
              In addition to weight, the Smart Scales measure BMI, body fat percentage, muscle mass, bone density, 
              and hydration levels. These measurements provide a more complete understanding of overall health status 
              and can help track the effectiveness of nutrition and exercise programs over time.
            </p>
          </div>
        );
      case "Thermometer":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Thermometer provides contactless temperature readings with fever detection and historical 
              tracking. This state-of-the-art device allows for quick and accurate temperature measurements 
              without physical contact, making it ideal for all family members.
            </p>
            <p className="mb-4">
              With its intuitive design, the thermometer can be used by anyone in the household. It stores 
              historical temperature readings, making it easy to track changes over time and share this 
              information with healthcare providers when needed.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Advanced Temperature Monitoring</h4>
            <p>
              The thermometer features a color-coded display that instantly indicates normal, elevated, 
              and fever temperatures. It can store readings for multiple family members and automatically 
              synchronizes data with the iHealth Dashboard. The device also includes customizable fever 
              alerts that can notify caregivers or family members when temperatures rise above set thresholds.
            </p>
          </div>
        );
      case "Bed Sensor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Bed Sensor is a non-invasive device that monitors sleep patterns, bed exits, and 
              nighttime activity without requiring the user to wear any devices. This innovative 
              sensor is placed under the mattress where it accurately tracks movement, breathing 
              rate, and sleep quality.
            </p>
            <p className="mb-4">
              Designed for comfort and privacy, the Bed Sensor works silently in the background to 
              provide detailed insights into sleep health. It automatically detects when someone gets 
              into or out of bed and can send alerts to caregivers if unusual patterns are detected.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Comprehensive Sleep Monitoring</h4>
            <p>
              The sensor tracks a wide range of sleep metrics including total sleep time, sleep efficiency, 
              sleep latency (time to fall asleep), and the number of bed exits during the night. The 
              accompanying app provides detailed sleep reports and trends over time, helping users identify 
              factors that may be affecting their sleep quality. For caregivers, the system can provide 
              peace of mind by alerting them to potential concerns such as excessive restlessness or 
              prolonged periods out of bed.
            </p>
          </div>
        );
      case "SOS Call Centre":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The SOS Call Centre provides professional emergency response services available 24/7 at the touch 
              of a button. Our dedicated team of trained emergency professionals is ready to respond 
              immediately to any crisis situation, providing peace of mind for both users and their families.
            </p>
            <p className="mb-4">
              When an emergency alert is triggered, our response team quickly assesses the situation, 
              contacts the user, and dispatches appropriate emergency services if needed. The service 
              also notifies designated family members or caregivers about the emergency.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Comprehensive Emergency Support</h4>
            <p>
              Our emergency response professionals are trained to handle a wide range of situations, 
              from medical emergencies to safety concerns. They stay on the line with the user until 
              help arrives, providing guidance and reassurance throughout the emergency. The service 
              works seamlessly with all iHealth emergency devices, including the Guardian Button, 
              providing an additional layer of safety and security.
            </p>
          </div>
        );
      case "Medication Dispenser":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Medication Dispenser offers automated medication management with timely reminders 
              and verification. This smart device ensures that medications are taken on schedule, 
              in the correct dosages, and with proper tracking for caregivers and healthcare providers.
            </p>
            <p className="mb-4">
              The dispenser can be programmed to release medications at specific times and will provide 
              audible and visual reminders when it's time to take medication. It also tracks when medications 
              are dispensed and alerts caregivers if doses are missed.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Advanced Medication Management</h4>
            <p>
              The system can handle multiple medication schedules and different types of pills or capsules. 
              It includes security features to prevent unauthorized access and double-dosing protection to 
              prevent medication errors. The dispenser connects to the iHealth Dashboard, allowing caregivers 
              to remotely monitor medication adherence and receive alerts about any issues or when refills 
              are needed.
            </p>
          </div>
        );
      case "Glucose Monitor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The Glucose Monitor provides continuous glucose tracking with automatic alerts and comprehensive 
              trend analysis. This advanced monitoring system helps users maintain optimal glucose levels 
              by providing real-time information and insights about their blood sugar patterns.
            </p>
            <p className="mb-4">
              The monitor uses a small sensor placed under the skin to continuously measure glucose levels 
              in interstitial fluid. Readings are automatically sent to the iHealth Dashboard, where they 
              can be viewed by the user and shared with caregivers or healthcare providers.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Comprehensive Glucose Management</h4>
            <p>
              The system provides customizable alerts for high or low glucose levels, allowing for quick 
              intervention before serious issues develop. The historical data tracking and trend analysis 
              helps users and healthcare providers identify patterns and make informed decisions about 
              diet, exercise, and medication. The monitor is designed for comfort and convenience, with 
              a sensor that can be worn for up to 14 days before replacement.
            </p>
          </div>
        );
      default: // iHealth Dashboard Tablet and others
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
            <p className="mb-4">
              The iHealth Dashboard Tablet is a simple, large-format tablet pre-configured for easy health tracking. 
              Designed specifically for users who want a dedicated health monitoring device, it provides a straightforward 
              interface for viewing and managing health data from all integrated iHealth devices.
            </p>
            <p className="mb-4">
              The tablet comes pre-loaded with all necessary applications and is ready to use out of the box. 
              The large touchscreen makes it easy to see and interact with health data, even for those with 
              vision impairments. The simplified interface is designed for users of all technical abilities.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Integration with iHealth Ecosystem</h4>
            <p>
              The tablet automatically connects to all iHealth devices within range and displays real-time data. 
              It can be set up to show customized dashboards based on the specific health metrics that are most 
              important to each user. Family members or caregivers can also be granted access to view health data 
              remotely.
            </p>
          </div>
        );
    }
  };

  // Render different specs based on the product
  const renderProductSpecs = () => {
    switch (productName) {
      case "Heart Rate Monitor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sensor</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Medical-grade ECG sensor</li>
                  <li>Optical heart rate monitor</li>
                  <li>Motion-compensated technology</li>
                  <li>Sampling rate: 100Hz</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Bluetooth 5.0 LE</li>
                  <li>Wi-Fi direct connection</li>
                  <li>Automatic sync with iHealth Dashboard</li>
                  <li>Emergency alert broadcasting</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Battery</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>5-day continuous monitoring</li>
                  <li>Quick charge (2 hours to full)</li>
                  <li>Wireless charging compatible</li>
                  <li>Battery level alerts</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Water-resistant (IP67)</li>
                  <li>Weight: 28g</li>
                  <li>Comfortable silicone strap</li>
                  <li>Available in 3 sizes</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Smart Scales":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Measurement</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Weight: up to 180kg (397lbs)</li>
                  <li>Precision: 0.1kg (0.2lbs)</li>
                  <li>Bio-impedance analysis</li>
                  <li>Multiple measurement sensors</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Bluetooth 5.0</li>
                  <li>Wi-Fi connection</li>
                  <li>Automatic user recognition</li>
                  <li>Instant sync with iHealth Dashboard</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Power</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>4 AAA batteries included</li>
                  <li>1-year battery life</li>
                  <li>Low battery indicator</li>
                  <li>Auto power-off</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Tempered glass platform</li>
                  <li>Non-slip surface</li>
                  <li>Dimensions: 30cm x 30cm x 2.5cm</li>
                  <li>LCD display with backlight</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Thermometer":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Measurement</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Temperature range: 32°C - 43°C (89.6°F - 109.4°F)</li>
                  <li>Accuracy: ±0.2°C (±0.4°F)</li>
                  <li>Infrared contactless sensor</li>
                  <li>Memory stores last 30 readings</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Bluetooth 5.0</li>
                  <li>Automatic sync with iHealth Dashboard</li>
                  <li>Temperature trend tracking</li>
                  <li>Fever alerts to connected devices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Power</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>2 AAA batteries (included)</li>
                  <li>Up to 3,000 measurements per set</li>
                  <li>Auto power-off after 30 seconds</li>
                  <li>Low battery indicator</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Dimensions: 15cm x 4cm x 3cm</li>
                  <li>Weight: 90g (with batteries)</li>
                  <li>LCD backlit display</li>
                  <li>Color-coded temperature indicators</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Bed Sensor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sensor</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Ultra-thin pressure sensors</li>
                  <li>No direct skin contact required</li>
                  <li>Detects micro-movements and vibrations</li>
                  <li>Compatible with all mattress types</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Wi-Fi connection</li>
                  <li>Bluetooth backup</li>
                  <li>Real-time monitoring</li>
                  <li>Customizable alert settings</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Power</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>AC powered with battery backup</li>
                  <li>48-hour battery operation</li>
                  <li>Power outage detection</li>
                  <li>Energy efficient design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Dimensions: 78cm x 28cm x 0.2cm</li>
                  <li>Weight: 350g</li>
                  <li>Water-resistant design</li>
                  <li>Hypoallergenic materials</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "SOS Call Centre":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Response Service</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>24/7 emergency response coverage</li>
                  <li>Multilingual support staff</li>
                  <li>Average response time: < 30 seconds</li>
                  <li>Medical emergency protocols</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Works with all iHealth emergency devices</li>
                  <li>Cellular and landline compatibility</li>
                  <li>GPS location tracking</li>
                  <li>Multiple contact options</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Communication</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Two-way voice communication</li>
                  <li>Text message notifications</li>
                  <li>Email status updates</li>
                  <li>Family notification system</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Additional Features</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Emergency service coordination</li>
                  <li>Monthly wellness checks</li>
                  <li>Detailed activity reporting</li>
                  <li>Fall detection response</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Medication Dispenser":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Capacity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>28 individual medication compartments</li>
                  <li>Up to 4 dispensing times per day</li>
                  <li>Multiple medication types support</li>
                  <li>7-day capacity for most regimens</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Wi-Fi enabled</li>
                  <li>Bluetooth connectivity</li>
                  <li>Automatic sync with iHealth Dashboard</li>
                  <li>Remote management capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Power</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>AC power with 48-hour battery backup</li>
                  <li>Low battery alerts</li>
                  <li>Power outage notification</li>
                  <li>Energy-efficient design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Dimensions: 22cm x 18cm x 8cm</li>
                  <li>Weight: 1.2kg</li>
                  <li>Tamper-resistant locking mechanism</li>
                  <li>High-contrast LCD display</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Glucose Monitor":
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Measurement</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Continuous glucose monitoring</li>
                  <li>Reading range: 40-400 mg/dL</li>
                  <li>Accuracy: ±10% MARD</li>
                  <li>Readings every 5 minutes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Bluetooth 5.0</li>
                  <li>NFC enabled for scanning</li>
                  <li>Automatic sync with iHealth Dashboard</li>
                  <li>Data sharing with healthcare providers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sensor</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Wear time: up to 14 days</li>
                  <li>Water-resistant (IP27)</li>
                  <li>Factory calibrated</li>
                  <li>Filament: 5mm flexible</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Reader/App</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Customizable glucose target ranges</li>
                  <li>Trend arrow indicators</li>
                  <li>Comprehensive reporting</li>
                  <li>Multi-user data access</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Display</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>10.1" HD touchscreen display</li>
                  <li>1920 x 1200 resolution</li>
                  <li>Anti-glare coating</li>
                  <li>High brightness for daytime visibility</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Connectivity</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Wi-Fi 6 (802.11ax)</li>
                  <li>Bluetooth 5.2</li>
                  <li>USB-C port</li>
                  <li>Automatic device pairing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Battery</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>10,000 mAh capacity</li>
                  <li>Up to 12 hours of active use</li>
                  <li>Wireless charging compatible</li>
                  <li>Fast charging support</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Physical</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Dimensions: 9.8" x 6.7" x 0.4"</li>
                  <li>Weight: 1.2 lbs</li>
                  <li>Adjustable stand included</li>
                  <li>Wall-mount compatible</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-8">
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="specs">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      
      <TabsContent value="details" className="bg-white p-6 rounded-xl shadow-sm">
        {renderProductContent()}
      </TabsContent>
      
      <TabsContent value="specs" className="bg-white p-6 rounded-xl shadow-sm">
        {renderProductSpecs()}
      </TabsContent>
      
      <TabsContent value="reviews" className="bg-white p-6 rounded-xl shadow-sm">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-gray-800">4.8</span>
              <div className="flex my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${star <= 4.5 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={star <= 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">Based on 124 reviews</span>
            </div>
            <div className="flex-1 space-y-2">
              {[
                { stars: 5, percentage: 85 },
                { stars: 4, percentage: 10 },
                { stars: 3, percentage: 3 },
                { stars: 2, percentage: 1 },
                { stars: 1, percentage: 1 }
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <div className="flex items-center min-w-[60px]">
                    <span className="mr-1">{item.stars}</span>
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 min-w-[40px]">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sample reviews */}
          <div className="space-y-6">
            {[
              {
                name: "John D.",
                rating: 5,
                date: "March 15, 2025",
                comment: "This tablet has made it so much easier for my elderly mother to track her health. The large screen and simple interface are perfect for her needs."
              },
              {
                name: "Sarah M.",
                rating: 4,
                date: "February 28, 2025",
                comment: "Great device that works seamlessly with all my other iHealth devices. The only reason for 4 stars instead of 5 is that I wish the battery lasted a bit longer."
              },
              {
                name: "Robert T.",
                rating: 5,
                date: "January 20, 2025",
                comment: "As a healthcare professional, I recommend this tablet to many of my patients. It's the perfect solution for those who struggle with technology but need to monitor health metrics."
              }
            ].map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={star <= review.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
