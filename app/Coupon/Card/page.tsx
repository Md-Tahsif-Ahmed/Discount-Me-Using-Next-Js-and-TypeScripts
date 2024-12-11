import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CouponCard = () => {
    return (
      <>
        <Navbar></Navbar>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-xl font-bold mb-4 flex justify-start">Coupon Cards</h1>
        <div className="w-full max-w-md space-y-4">
          {/* Single Discount Card */}
          <div className="bg-white rounded-lg shadow-md flex items-center justify-between p-10 relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 w-6 h-6 bg-gray-100 rounded-full" />
            <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 w-6 h-6 bg-gray-100 rounded-full" />
            <div>
              <p className="text-green-500 font-bold text-lg">Price</p>
              <p className="text-orange-500 text-3xl font-bold">$10.99</p>
            </div>
            <div className="border-l border-gray-300 pl-4">
              <p className="text-lg font-semibold">Single Discount</p>
              <p className="text-gray-500 text-sm">Customer takes 6 discounts</p>
            </div>
          </div>
          {/* Unlimited Discount Card */}
          <div className="bg-white rounded-lg shadow-md flex items-center justify-between p-10 relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 w-6 h-6 bg-gray-100 rounded-full" />
            <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 w-6 h-6 bg-gray-100 rounded-full" />
            <div>
              <p className="text-green-500 font-bold text-lg">Price</p>
              <p className="text-orange-500 text-3xl font-bold">$34.99</p>
            </div>
            <div className="border-l border-gray-300 pl-4">
              <p className="text-lg font-semibold">Unlimited Discount</p>
              <p className="text-gray-500 text-sm">Customer gets unlimited discounts in one month</p>
            </div>
          </div>
        </div>
      </div>
        <Footer></Footer>
      </>
    );
  };
  
  export default CouponCard;
  