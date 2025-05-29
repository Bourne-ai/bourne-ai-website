import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface StripePaymentFormProps {
  packageName: string;
  selectedDate: string;
  selectedTime: string;
  onPaymentSuccess: () => void;
}

export default function StripePaymentForm({ 
  packageName, 
  selectedDate, 
  selectedTime, 
  onPaymentSuccess 
}: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?package=${encodeURIComponent(packageName)}&date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(selectedTime)}`,
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message || "An error occurred during payment processing.",
        variant: "destructive",
      });
    } else {
      onPaymentSuccess();
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button 
        type="submit" 
        disabled={!stripe || isLoading}
        className="w-full bg-[#ff7b47] text-white hover:bg-[#ff7b47]/90 transition-all duration-300 py-3 text-lg font-semibold"
      >
        {isLoading ? "Processing..." : "Complete Payment"}
      </Button>
    </form>
  );
}