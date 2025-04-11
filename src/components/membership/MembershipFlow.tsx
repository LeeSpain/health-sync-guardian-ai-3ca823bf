
import React from 'react';
import { ArrowRight, CheckCircle, Calendar, Brain, FileText, GraduationCap, Activity, Users, MessageSquare, Pill, PhoneCall, ShoppingBag, User, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StepCard from './StepCard';
import DashboardModuleCard from './DashboardModuleCard';
import ProfessionalServiceCard from './ProfessionalServiceCard';

const MembershipFlow: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <section className="py-16 bg-gradient-to-b from-brand-grey/10 via-white to-brand-grey/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-3 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            Membership Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">iHealth-Sync Membership Flow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your complete journey from signup to fully personalized health monitoring
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-3xl grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="steps">Journey Steps</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-teal mb-4">Your Complete Health Ecosystem</h3>
                <p className="text-gray-600 mb-4">
                  The iHealth-Sync membership transforms how you monitor and manage your health with an intuitive, 
                  personalized experience guided by our AI Guardian. From initial signup to your fully customized 
                  dashboard, we've designed a seamless journey.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  {[
                    "Personalized onboarding with AI Guardian support",
                    "Secure setup of emergency contacts and health preferences",
                    "Automatic integration of all health devices",
                    "Customizable alerts and notification preferences",
                    "Family access sharing with privacy controls"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 bg-brand-teal hover:bg-brand-teal/90">
                  Explore Membership Benefits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-brand-teal/5 to-brand-orange/5 rounded-xl border border-brand-teal/10 overflow-hidden p-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-tr-full -z-10" />
                
                <h3 className="text-xl font-bold text-brand-teal mb-4">Your Membership Journey</h3>
                
                <ol className="relative border-l border-brand-teal/30 ml-3 space-y-6">
                  {[
                    { title: "Purchase & Registration", desc: "Select your plan and complete secure checkout" },
                    { title: "Email Verification", desc: "Activate your account via welcome email" },
                    { title: "AI Guardian Onboarding", desc: "Complete your profile with guided assistance" },
                    { title: "Dashboard Access", desc: "Enter your personalized health command center" }
                  ].map((step, index) => (
                    <li key={index} className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-teal text-white rounded-full -left-4">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-brand-teal">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </li>
                  ))}
                </ol>
                
                <div className="mt-6 pt-6 border-t border-brand-teal/20">
                  <p className="text-gray-700 font-medium">Ready to start your health journey?</p>
                  <Link to="/pricing">
                    <Button className="mt-3 bg-brand-orange hover:bg-brand-orange/90">
                      View Plans & Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 max-w-3xl mx-auto mb-6 text-center">
              <h3 className="text-xl font-bold text-brand-teal">Why Members Love iHealth-Sync</h3>
              <p className="text-gray-600">
                Join thousands who have transformed their approach to health monitoring
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Streamlined Setup",
                  description: "From purchase to full dashboard access in under 15 minutes"
                },
                {
                  title: "Personalized Support",
                  description: "AI Guardian adapts to your unique health profile and needs"
                },
                {
                  title: "Seamless Integration",
                  description: "All devices and services work together in one unified platform"
                }
              ].map((feature, index) => (
                <Card key={index} className="border border-brand-teal/20 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-brand-teal text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Journey Steps Tab */}
          <TabsContent value="steps">
            <div className="max-w-4xl mx-auto">
              <StepCard 
                number="1"
                title="Pricing Page to Purchase Flow"
                emoji="🛒"
                description="Browse plans, select products, and complete checkout in one seamless experience."
                details={[
                  "Review all available plans and features",
                  "Select products or bundles with 'Buy Now' button",
                  "Complete purchase form with personal details",
                  "Securely process payment and receive confirmation",
                  "Get automatic welcome email with account activation link"
                ]}
                notes={[
                  { title: "Delivery", content: "Physical products take up to 14 days to arrive" },
                  { title: "Dashboard", content: "Default dashboard available immediately after registration" }
                ]}
              />
              
              <div className="flex justify-center my-8">
                <ArrowRight className="h-8 w-8 text-brand-teal/50" />
              </div>
              
              <StepCard 
                number="2"
                title="Email Verification & Welcome"
                emoji="📩"
                description="Activate your account and prepare for personalized onboarding."
                details={[
                  "Receive 'Welcome to iHealth-Sync' email",
                  "Review benefits and quick start checklist",
                  "Click verification link to secure account",
                  "Get introduced to your AI Guardian",
                  "Access onboarding system with single click"
                ]}
                buttonText="View Sample Email"
              />
              
              <div className="flex justify-center my-8">
                <ArrowRight className="h-8 w-8 text-brand-teal/50" />
              </div>
              
              <StepCard 
                number="3"
                title="AI Guardian Onboarding"
                emoji="🤖"
                description="Complete your profile with personalized guidance from your AI Guardian."
                details={[
                  "Personal Details: Name, gender, birth date, address, language",
                  "Emergency Contacts: Add next of kin and alert preferences",
                  "Health Setup: Medical conditions, medications, allergies",
                  "Product Setup: Configure devices and notification rules"
                ]}
                dialogues={[
                  {
                    title: "Welcome", 
                    content: "Welcome to your iHealth-Sync journey! I'll be with you every step of the way. Let's build your health profile together so I can keep you safe and informed."
                  },
                  {
                    title: "Personal Details", 
                    content: "Let's start with who you are. I'll use this to personalize alerts, support, and reports."
                  },
                  {
                    title: "Emergency Contacts", 
                    content: "Your safety is top priority. Who should I alert if you need urgent help?"
                  }
                ]}
                notes={[
                  { title: "Security", content: "All data is encrypted and securely stored" }
                ]}
              />
              
              <div className="flex justify-center my-8">
                <ArrowRight className="h-8 w-8 text-brand-teal/50" />
              </div>
              
              <StepCard 
                number="4"
                title="Member Dashboard Access"
                emoji="🧭"
                description="Enter your personalized health command center with all tools and services."
                details={[
                  "Access AI Guardian Console and health overview",
                  "View pending devices with delivery status",
                  "See real-time personalized health data",
                  "Explore upgrade options and additional services",
                  "Access via mobile with responsive design"
                ]}
                buttonText="Preview Dashboard"
              />
            </div>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-teal">Complete Dashboard Experience</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Your personal health command center with powerful modules
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-brand-teal/20 p-6 mb-8 shadow-sm">
                <h4 className="text-xl font-bold text-brand-teal mb-4">Dashboard Navigation</h4>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { name: "Dashboard", icon: <Activity className="h-4 w-4" /> },
                    { name: "Health Summary", icon: <Activity className="h-4 w-4" /> },
                    { name: "My Devices", icon: <Activity className="h-4 w-4" /> },
                    { name: "My Plan & Upgrades", icon: <ShoppingBag className="h-4 w-4" /> },
                    { name: "Messaging", icon: <MessageSquare className="h-4 w-4" /> },
                    { name: "Support", icon: <Activity className="h-4 w-4" /> },
                    { name: "Invoices", icon: <FileText className="h-4 w-4" /> },
                    { name: "Settings", icon: <Settings className="h-4 w-4" /> }
                  ].map((item, index) => (
                    <div key={index} className="py-2 px-4 rounded-lg border border-brand-teal/20 flex items-center gap-2 bg-gray-50 text-sm">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <DashboardModuleCard
                  title="Calendar & Wellness"
                  icon={<Calendar className="h-5 w-5 text-white" />}
                  features={[
                    "Medication schedules",
                    "AI reminders for check-ins and goals",
                    "Upcoming nurse/doctor appointments",
                    "Event notifications with smart links"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Mental Wellness Tracker"
                  icon={<Brain className="h-5 w-5 text-white" />}
                  features={[
                    "Daily mood check-in with emoji scale",
                    "Journaling with stress/progress tags",
                    "AI-assisted mood pattern insights",
                    "Wellness recommendations"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Care Plan Summary"
                  icon={<FileText className="h-5 w-5 text-white" />}
                  features={[
                    "Auto-generated summaries from sessions",
                    "PDF download options for records",
                    "Personal notes for each care plan",
                    "Progress tracking and milestones"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Health Learning Hub"
                  icon={<GraduationCap className="h-5 w-5 text-white" />}
                  features={[
                    "Curated content based on your profile",
                    "AI-suggested resources and articles",
                    "Completion tracking and bookmarks",
                    "Personal notes on health resources"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Health Monitoring Center"
                  icon={<Activity className="h-5 w-5 text-white" />}
                  features={[
                    "Live vitals feed with auto-refresh",
                    "AI trend predictions and insights",
                    "Export to PDF for medical visits",
                    "Customizable metric displays"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Family Dashboard"
                  icon={<Users className="h-5 w-5 text-white" />}
                  features={[
                    "Add up to 4 family members",
                    "Control access levels per member",
                    "Family alerts and notifications",
                    "Group messaging for coordination"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Messaging Hub"
                  icon={<MessageSquare className="h-5 w-5 text-white" />}
                  features={[
                    "Product support chat",
                    "Professional services messaging",
                    "Family chat coordination",
                    "Voice-to-text and file sharing"
                  ]}
                />
                
                <DashboardModuleCard
                  title="Medication Module"
                  icon={<Pill className="h-5 w-5 text-white" />}
                  features={[
                    "Visual medication schedule",
                    "Missed dose alerts and notifications",
                    "Manual or device confirmation",
                    "Medication history tracking"
                  ]}
                />
                
                <div className="md:col-span-2">
                  <DashboardModuleCard
                    title="Emergency Section"
                    icon={<PhoneCall className="h-5 w-5 text-white" />}
                    features={[
                      "One-touch emergency alert button",
                      "AI confirmation to prevent false alarms",
                      "Automatic notification to emergency contacts",
                      "SOS history and response logging",
                      "Direct connections to professional services"
                    ]}
                    special={true}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-teal mb-2">Professional Healthcare Services</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Premium add-ons to enhance your health monitoring experience
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8">
                <ProfessionalServiceCard 
                  title="NurseSync"
                  description="Connect with qualified nursing professionals for remote monitoring and support."
                  iconColor="bg-gradient-to-br from-purple-500 to-indigo-600"
                  plans={[
                    {
                      name: "Standard",
                      price: "€50/month",
                      features: [
                        "Smart nurse matching algorithm",
                        "4 HD video calls per month",
                        "Unlimited secure messaging",
                        "Health summaries and dashboard integration"
                      ]
                    },
                    {
                      name: "Family",
                      price: "€100/month",
                      features: [
                        "Up to 4 profiles linked",
                        "16 HD video calls total per month",
                        "Emergency access for all members",
                        "Shared family health dashboard"
                      ]
                    }
                  ]}
                  promotion={{
                    title: "Launch Deal",
                    details: [
                      "Free introductory calls for each care seeker",
                      "20% off first 3 months of service"
                    ]
                  }}
                />
                
                <ProfessionalServiceCard 
                  title="MedicSync"
                  description="On-demand access to licensed physicians for consultations and medical needs."
                  iconColor="bg-gradient-to-br from-teal-500 to-emerald-600"
                  features={[
                    "Doctor video consultations",
                    "Electronic prescriptions when appropriate",
                    "Secure health records access and sharing",
                    "Referral service to specialists",
                    "Integration with your health monitoring dashboard"
                  ]}
                  ctaText="See Pricing Options"
                />
              </div>
              
              <div className="mt-12 bg-white rounded-xl border border-brand-teal/20 p-6 shadow-sm">
                <h4 className="text-xl font-bold text-brand-teal mb-4">Additional Services</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Device Integration",
                      description: "Add new devices to your health ecosystem with automatic dashboard integration."
                    },
                    {
                      title: "Premium Analytics",
                      description: "Advanced health data analysis with predictive insights and detailed reporting."
                    },
                    {
                      title: "Family Expansion",
                      description: "Add more family members beyond the standard limit with enhanced sharing controls."
                    },
                    {
                      title: "Health Records Import",
                      description: "Professional digitization and integration of existing medical records."
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-semibold text-brand-teal">{service.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/pricing">
                    <Button className="bg-brand-orange hover:bg-brand-orange/90">
                      Explore All Add-On Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-16" />
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-teal mb-4">Ready to Begin Your Health Journey?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of members who have transformed their approach to health monitoring and wellness
          </p>
          <Link to="/pricing">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
              View Plans & Start Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembershipFlow;
