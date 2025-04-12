
import React from 'react';
import { ArrowLeft, Check, ShoppingCart, Star, Heart, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product } from '@/components/product-showcase/types';
import { getProductsData } from '@/components/product-showcase/productData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from '@/pages/NotFound';
import { useToast } from '@/hooks/use-toast';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  
  // Get all products data
  const products = getProductsData();
  
  // Find the product by ID (slug)
  const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === productId);
  
  // Handle case when product is not found
  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleSaveForLater = () => {
    toast({
      title: "Saved for later",
      description: `${product.name} has been saved to your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Breadcrumb navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#products" className="hover:text-brand-teal transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-teal">{product.name}</span>
          </div>
        </div>
        
        {/* Product detail section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
            
            {/* Product info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <Badge className="mb-3 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
                  {product.type}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
                
                {/* Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-5 w-5 ${star <= 4.5 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={star <= 4 ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.8 (124 reviews)</span>
                </div>
                
                <p className="text-xl font-semibold text-brand-teal mb-4">$499.99</p>
                <p className="text-gray-600 mb-8">{product.description}</p>
                
                {/* Benefits list */}
                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold text-gray-800">Key Benefits:</h3>
                  {product.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="rounded-full bg-brand-teal/10 p-1 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-brand-teal" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-brand-teal hover:bg-brand-teal/90 flex items-center gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-brand-teal text-brand-teal hover:bg-brand-teal/10 flex items-center gap-2"
                    onClick={handleSaveForLater}
                  >
                    <Heart className="h-5 w-5" />
                    Save for Later
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="text-gray-600 hover:text-brand-teal hover:bg-brand-teal/5"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Extra info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold block text-gray-700">Availability:</span>
                    <span className="text-green-600">In Stock</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-700">Warranty:</span>
                    <span>2-year limited warranty</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-700">Shipping:</span>
                    <span>Free shipping</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-700">SKU:</span>
                    <span>IH-TABLET-001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product details tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="bg-white p-6 rounded-xl shadow-sm">
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
              </TabsContent>
              
              <TabsContent value="specs" className="bg-white p-6 rounded-xl shadow-sm">
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
          </div>
          
          {/* Back to products */}
          <div className="mt-16">
            <Link 
              to="/#products" 
              className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to all products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
