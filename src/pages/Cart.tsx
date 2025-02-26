
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Premium Membership",
    type: "Monthly",
    price: 10.00,
    quantity: 1
  }
];

const Cart = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
      variant: "default",
    });
  };
  
  const checkout = () => {
    toast({
      title: "Checkout initiated",
      description: "Redirecting to payment gateway...",
      variant: "default",
    });
    // In a real app, we would redirect to a payment gateway
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-cyberpunk neon-text-blue mb-4">YOUR CART</h1>
          <p className="text-gray-300 font-tech max-w-2xl mx-auto text-lg">
            Review and complete your purchases
          </p>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="cyberpunk-card p-6">
                <h2 className="text-2xl font-cyberpunk neon-text-purple mb-6">Cart Items</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border-b border-[#00F0FF]/20">
                      <div>
                        <h3 className="font-cyberpunk text-xl text-white">{item.name}</h3>
                        <p className="text-gray-400 font-tech text-sm">{item.type}</p>
                      </div>
                      
                      <div className="flex items-center space-x-8">
                        <span className="font-tech text-[#00F0FF]">${item.price.toFixed(2)}</span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="cyberpunk-card p-6 sticky top-24">
                <h2 className="text-2xl font-cyberpunk neon-text-blue mb-6">Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-tech">Subtotal</span>
                    <span className="font-tech text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-tech">Tax (7%)</span>
                    <span className="font-tech text-white">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-[#00F0FF]/20 pt-4 flex justify-between">
                    <span className="text-white font-cyberpunk">Total</span>
                    <span className="font-cyberpunk text-[#00F0FF]">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={checkout}
                  className="w-full mt-8 py-3 px-6 bg-[#00F0FF] text-black font-cyberpunk rounded hover:bg-[#00F0FF]/80 transition-colors flex items-center justify-center"
                >
                  Checkout <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h2 className="text-2xl font-cyberpunk text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 font-tech mb-8">Add items to get started</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="font-tech text-[#00F0FF] border-[#00F0FF] hover:bg-[#00F0FF]/10"
                onClick={() => window.location.href = '/memberships'}
              >
                Browse Memberships
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
