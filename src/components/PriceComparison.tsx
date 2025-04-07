
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const PriceComparison: React.FC = () => {
  const plans = [
    { name: "Free App", basePrice: "€0.00", tax: "€0.00", total: "€0.00" },
    { name: "Subscribers App", basePrice: "€9.99", tax: "€1.00", total: "€10.99" }
  ];

  // Reordered with iHealth Dashboard Tablet first
  const deviceAddons = [
    { 
      name: "iHealth Dashboard Tablet", 
      oneTimeBase: "€99.99", 
      oneTimeTax: "€21.00", 
      oneTimeTotal: "€120.99", 
      monthlyBase: "—", 
      monthlyTax: "—", 
      monthlyTotal: "—",
      isEssential: true
    },
    { 
      name: "Guardian Button", 
      oneTimeBase: "€49.99", 
      oneTimeTax: "€10.50", 
      oneTimeTotal: "€60.49", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    },
    { 
      name: "Heart Rate Monitor", 
      oneTimeBase: "€79.99", 
      oneTimeTax: "€16.80", 
      oneTimeTotal: "€96.79", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    },
    { 
      name: "Smart Scales", 
      oneTimeBase: "€89.99", 
      oneTimeTax: "€18.90", 
      oneTimeTotal: "€108.89", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    },
    { 
      name: "Thermometer", 
      oneTimeBase: "€39.99", 
      oneTimeTax: "€8.40", 
      oneTimeTotal: "€48.39", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    },
    { 
      name: "Bed Sensor", 
      oneTimeBase: "€129.99", 
      oneTimeTax: "€27.30", 
      oneTimeTotal: "€157.29", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    },
    { 
      name: "Family Dashboard Access", 
      oneTimeBase: "—", 
      oneTimeTax: "—", 
      oneTimeTotal: "—", 
      monthlyBase: "€4.99", 
      monthlyTax: "€0.50", 
      monthlyTotal: "€5.49" 
    }
  ];

  const professionalServices = [
    { 
      name: "SOS Pendant & Call Centre", 
      oneTimeBase: "€89.99", 
      oneTimeTax: "€18.90", 
      oneTimeTotal: "€108.89", 
      monthlyBase: "€24.99", 
      monthlyTax: "€2.50", 
      monthlyTotal: "€27.49" 
    },
    { 
      name: "Medication Dispenser", 
      oneTimeBase: "€199.99", 
      oneTimeTax: "€42.00", 
      oneTimeTotal: "€241.99", 
      monthlyBase: "€24.99", 
      monthlyTax: "€2.50", 
      monthlyTotal: "€27.49" 
    },
    { 
      name: "Glucose Monitor", 
      oneTimeBase: "€199.99", 
      oneTimeTax: "€42.00", 
      oneTimeTotal: "€241.99", 
      monthlyBase: "€24.99", 
      monthlyTax: "€2.50", 
      monthlyTotal: "€27.49" 
    }
  ];

  return (
    <section id="price-comparison" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-teal">iHealth-Sync – Price Breakdown</h2>
          <p className="text-gray-600 mt-2">All prices include applicable taxes</p>
        </div>

        <Tabs defaultValue="plans" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="plans" className="text-sm">
              <span className="mr-2">🟢</span> Plans
            </TabsTrigger>
            <TabsTrigger value="devices" className="text-sm">
              <span className="mr-2">📱</span> Device Add-Ons
            </TabsTrigger>
            <TabsTrigger value="services" className="text-sm">
              <span className="mr-2">🧑‍⚕️</span> Professional Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="mt-4">
            <div className="rounded-lg border shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Plan</TableHead>
                    <TableHead className="font-medium">Base Price</TableHead>
                    <TableHead className="font-medium">Tax (10%)</TableHead>
                    <TableHead className="font-medium">Total (Monthly)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <TableCell className="font-medium">
                        {plan.name}
                        {plan.name === "Free App" && (
                          <Badge variant="outline" className="ml-2 text-xs border-brand-accent-teal text-brand-accent-teal">
                            Free
                          </Badge>
                        )}
                        {plan.name === "Subscribers App" && (
                          <Badge variant="outline" className="ml-2 text-xs border-brand-orange text-brand-orange">
                            Popular
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{plan.basePrice}</TableCell>
                      <TableCell>{plan.tax}</TableCell>
                      <TableCell className="font-medium">{plan.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="devices" className="mt-4">
            <div className="rounded-lg border shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Product</TableHead>
                    <TableHead className="font-medium" colSpan={3}>One-Time Purchase</TableHead>
                    <TableHead className="font-medium" colSpan={3}>Monthly Subscription</TableHead>
                  </TableRow>
                  <TableRow className="bg-gray-100">
                    <TableHead></TableHead>
                    <TableHead className="text-sm font-normal">Base</TableHead>
                    <TableHead className="text-sm font-normal">21% IVA</TableHead>
                    <TableHead className="text-sm font-normal">Total</TableHead>
                    <TableHead className="text-sm font-normal">Base</TableHead>
                    <TableHead className="text-sm font-normal">10% IVA</TableHead>
                    <TableHead className="text-sm font-normal">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* First render the essential item with special styling */}
                  {deviceAddons
                    .filter(device => device.isEssential)
                    .map((device, index) => (
                      <TableRow key={`essential-${index}`} className="bg-blue-50 border-b-2 border-blue-200">
                        <TableCell className="font-medium">
                          {device.name}
                          <Badge variant="outline" className="ml-2 text-xs border-blue-500 text-blue-700">
                            Essential
                          </Badge>
                        </TableCell>
                        <TableCell>{device.oneTimeBase}</TableCell>
                        <TableCell>{device.oneTimeTax}</TableCell>
                        <TableCell className="font-medium">{device.oneTimeTotal}</TableCell>
                        <TableCell>{device.monthlyBase}</TableCell>
                        <TableCell>{device.monthlyTax}</TableCell>
                        <TableCell className="font-medium">{device.monthlyTotal}</TableCell>
                      </TableRow>
                    ))}
                  
                  {/* Then render all non-essential items */}
                  {deviceAddons
                    .filter(device => !device.isEssential)
                    .map((device, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <TableCell className="font-medium">{device.name}</TableCell>
                        <TableCell>{device.oneTimeBase}</TableCell>
                        <TableCell>{device.oneTimeTax}</TableCell>
                        <TableCell className="font-medium">{device.oneTimeTotal}</TableCell>
                        <TableCell>{device.monthlyBase}</TableCell>
                        <TableCell>{device.monthlyTax}</TableCell>
                        <TableCell className="font-medium">{device.monthlyTotal}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-4">
            <div className="rounded-lg border shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Service</TableHead>
                    <TableHead className="font-medium" colSpan={3}>One-Time Purchase</TableHead>
                    <TableHead className="font-medium" colSpan={3}>Monthly Subscription</TableHead>
                  </TableRow>
                  <TableRow className="bg-gray-100">
                    <TableHead></TableHead>
                    <TableHead className="text-sm font-normal">Base</TableHead>
                    <TableHead className="text-sm font-normal">21% IVA</TableHead>
                    <TableHead className="text-sm font-normal">Total</TableHead>
                    <TableHead className="text-sm font-normal">Base</TableHead>
                    <TableHead className="text-sm font-normal">10% IVA</TableHead>
                    <TableHead className="text-sm font-normal">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {professionalServices.map((service, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell>{service.oneTimeBase}</TableCell>
                      <TableCell>{service.oneTimeTax}</TableCell>
                      <TableCell className="font-medium">{service.oneTimeTotal}</TableCell>
                      <TableCell>{service.monthlyBase}</TableCell>
                      <TableCell>{service.monthlyTax}</TableCell>
                      <TableCell className="font-medium">{service.monthlyTotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>* All prices are inclusive of applicable taxes. Monthly subscriptions are subject to 10% VAT, while one-time purchases include 21% IVA (Spanish VAT).</p>
          <p className="mt-2">* Service contracts require minimum 12-month commitment. Early termination fees may apply.</p>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
