
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
