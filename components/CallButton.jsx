"use client"; // Mark as a Client Component
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

export default function CallButton() {
  const { toast } = useToast();

  const handleCall = () => {
    window.location.href = 'tel:1-800-COOL-CONCEPT';
    toast({
      title: "Connecting to our service line",
      description: "You'll be connected to our 24/7 customer service.",
    });
  };

  return (
    <Button
      onClick={handleCall}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center p-0 z-50">
      <Phone className="h-6 w-6" />
    </Button>
  );
}