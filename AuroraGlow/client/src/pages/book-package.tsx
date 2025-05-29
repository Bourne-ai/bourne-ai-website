import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Calendar, CreditCard, Clock, CheckCircle } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { apiRequest } from "@/lib/queryClient";
import StripePaymentForm from "@/components/StripePaymentForm";

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function BookPackage() {
  const searchParams = new URLSearchParams(window.location.search);
  const packageName = searchParams.get('package') || 'AI Kickstart';
  
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const packageDetails = {
    'AI Kickstart': { price: '£195', amount: 195, duration: '2-3 hours', description: 'Explore your biggest opportunities and get clear direction' },
    'Workflow Booster': { price: '£395', amount: 395, duration: '4-6 hours', description: 'Set up tools and workflows to reduce admin and free up time' },
    'Confidence Builder': { price: '£295', amount: 295, duration: '3-4 hours', description: 'Build habits and embed AI into your weekly routine' },
    'Strategy & Scale': { price: '£175', amount: 175, duration: '2 hours', description: 'Review, optimise, and explore what\'s next' },
    'Starter Pack': { price: '£545', amount: 545, duration: '6-9 hours', description: 'AI Kickstart + Workflow Booster bundle' },
    'Full Transformation': { price: '£995', amount: 995, duration: '11-15 hours', description: 'All 4 training phases included' }
  };

  const currentPackage = packageDetails[packageName as keyof typeof packageDetails] || packageDetails['AI Kickstart'];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Start from next Monday if today is not Monday, otherwise start from today
    const startDate = new Date(today);
    const daysUntilMonday = currentDay === 0 ? 1 : (8 - currentDay);
    if (currentDay !== 1) { // If not Monday
      startDate.setDate(today.getDate() + daysUntilMonday);
    }
    
    // Generate next 10 weekdays
    let dateCounter = new Date(startDate);
    while (dates.length < 10) {
      const dayOfWeek = dateCounter.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        const month = dateCounter.toLocaleDateString('en-US', { month: 'short' });
        const day = dateCounter.getDate();
        const weekday = dateCounter.toLocaleDateString('en-US', { weekday: 'short' });
        dates.push(`${weekday}, ${month} ${day}`);
      }
      dateCounter.setDate(dateCounter.getDate() + 1);
    }
    return dates;
  };

  const dates = generateDates();

  useEffect(() => {
    if (step === 3 && selectedDate && selectedTime) {
      // Create payment intent when user reaches payment step
      const createPaymentIntent = async () => {
        try {
          const response = await apiRequest("POST", "/api/create-payment-intent", {
            packageName,
            amount: currentPackage.amount
          });
          const data = await response.json();
          if (data.success) {
            setClientSecret(data.clientSecret);
          }
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      };
      
      createPaymentIntent();
    }
  }, [step, packageName, currentPackage.amount, selectedDate, selectedTime]);

  const handlePaymentSuccess = () => {
    setStep(4); // Move to success step
  };

  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="text-[#ff7b47] text-xl font-bold">Bourne-ai</div>
            </Link>
            <Link href="/training-packages">
              <Button variant="ghost" size="sm" className="text-white hover:text-[#ff7b47]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Packages
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book <span className="text-[#ff7b47]">{packageName}</span>
            </h1>
            <p className="text-xl text-gray-300">
              {currentPackage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Package Summary */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-gray-800">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-[#ff7b47] mb-2">Package</h3>
                  <p className="text-xl font-bold">{packageName}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ff7b47] mb-2">Duration</h3>
                  <p className="text-xl">{currentPackage.duration}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ff7b47] mb-2">Price</h3>
                  <p className="text-2xl font-bold text-[#ff7b47]">{currentPackage.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}>
                {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}>
                {step > 2 ? <CheckCircle className="w-5 h-5" /> : '2'}
              </div>
              <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}>
                {step > 3 ? <CheckCircle className="w-5 h-5" /> : '3'}
              </div>
              <div className={`w-12 h-0.5 ${step >= 4 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 4 ? 'bg-[#ff7b47]' : 'bg-gray-600'}`}>
                4
              </div>
            </div>
          </div>

          {/* Step 1: Select Date */}
          {step === 1 && (
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3 text-[#ff7b47]" />
                  Select Your Preferred Date
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {dates.map((date) => (
                    <Button
                      key={date}
                      variant={selectedDate === date ? "default" : "outline"}
                      className={`p-4 h-auto ${selectedDate === date ? 'bg-[#ff7b47] text-white' : 'border-gray-600 text-gray-300'}`}
                      onClick={() => setSelectedDate(date)}
                    >
                      {date}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className="bg-[#ff7b47] text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Time Selection
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Select Time */}
          {step === 2 && (
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3 text-[#ff7b47]" />
                  Select Your Preferred Time
                </h2>
                <p className="text-center text-gray-300 mb-6">Available times for {selectedDate}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`p-4 h-auto ${selectedTime === time ? 'bg-[#ff7b47] text-white' : 'border-gray-600 text-gray-300'}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-center space-x-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-gray-600 text-gray-300 px-6 py-3"
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!selectedTime}
                    onClick={() => setStep(3)}
                    className="bg-[#ff7b47] text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                  <CreditCard className="w-6 h-6 mr-3 text-[#ff7b47]" />
                  Complete Your Booking
                </h2>
                
                {/* Booking Summary */}
                <div className="bg-[#1a2332]/50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#ff7b47]">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span>{packageName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{currentPackage.duration}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2 mt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total:</span>
                        <span className="text-[#ff7b47]">{currentPackage.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Ben */}
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Please contact Ben directly to complete your booking and arrange payment.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="border-gray-600 text-gray-300 px-6 py-3"
                    >
                      Back
                    </Button>
                    <Button className="bg-[#ff7b47] text-white px-8 py-3">
                      <a href={`mailto:ben@bourne-ai.com?subject=Booking Request - ${packageName}&body=Hi Ben,%0A%0AI would like to book the ${packageName} package for ${selectedDate} at ${selectedTime}.%0A%0APlease let me know the next steps for payment and confirmation.%0A%0AThanks!`}>
                        Contact Ben to Complete Booking
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <Card className="glass-card border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for booking {packageName}. Ben will contact you within 24 hours to confirm your session details and provide any preparation materials.
                </p>
                <div className="bg-[#1a2332]/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-[#ff7b47]">Your Booking Details</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span>{packageName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{currentPackage.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    You'll receive a confirmation email shortly with session details and any preparation materials.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button className="bg-[#ff7b47] text-white px-8 py-3">
                        Return to Home
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-600 text-gray-300 px-6 py-3">
                      <a href="mailto:ben@bourne-ai.com">Contact Ben</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}