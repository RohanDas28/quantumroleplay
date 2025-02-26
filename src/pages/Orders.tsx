
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Eye, Calendar, Clock } from "lucide-react";

// Sample orders data
const orders = [
  {
    id: "ORD-1234",
    date: "2024-03-15",
    product: "Premium Membership",
    duration: "Monthly",
    status: "Active",
    price: "$10.00",
    nextBilling: "2024-04-15"
  },
  {
    id: "ORD-1189",
    date: "2024-02-10",
    product: "Basic Membership",
    duration: "Monthly",
    status: "Expired",
    price: "$5.00",
    nextBilling: "N/A"
  },
  {
    id: "ORD-1022",
    date: "2024-01-05",
    product: "Elite Membership",
    duration: "Monthly",
    status: "Cancelled",
    price: "$20.00",
    nextBilling: "N/A"
  }
];

const Orders = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-cyberpunk neon-text-blue mb-4">YOUR ORDERS</h1>
          <p className="text-gray-300 font-tech max-w-2xl mx-auto text-lg">
            View and manage your purchase history
          </p>
        </div>
        
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="cyberpunk-card overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-cyberpunk text-xl text-white mr-3">{order.product}</h3>
                          <Badge 
                            variant={order.status === "Active" ? "default" : "secondary"}
                            className={`${
                              order.status === "Active" 
                                ? "bg-green-500" 
                                : order.status === "Expired" 
                                  ? "bg-red-500" 
                                  : "bg-gray-500"
                            }`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <span className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            Order date: {order.date}
                          </span>
                          <span>Order ID: {order.id}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="font-cyberpunk text-[#00F0FF] text-xl">{order.price}</div>
                        <div className="text-gray-400 text-sm">{order.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t border-[#00F0FF]/20">
                      <div className="text-sm text-gray-300">
                        {order.status === "Active" ? (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-green-400" />
                            <span>Next billing: {order.nextBilling}</span>
                          </div>
                        ) : (
                          <span>No active subscription</span>
                        )}
                      </div>
                      
                      <button className="mt-3 md:mt-0 text-[#00F0FF] hover:text-[#00F0FF]/80 flex items-center text-sm">
                        View Details <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Eye className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h2 className="text-2xl font-cyberpunk text-white mb-2">No orders found</h2>
            <p className="text-gray-400 font-tech">You haven't made any purchases yet</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Orders;
