// import Image from 'next/image';
import image from '@/public/image/image.png';  // Adjust path accordingly
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
       <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100">
        {/* Breadcrumb Section with Background Image */}
        <div
        className="py-8 px-4 bg-cover bg-center mb-10 w-full"
        style={{
            backgroundImage: `url(${image.src})`, // Corrected template literal syntax
        }}
        >
        </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-[#758888] mb-4">
          Welcome to [Your Company Name]. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and [Your Company Name] (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.
        </p>

        {/* Scope of Service */}
        <h2 className="text-4xl font-semibold text-gray-800 my-6">→ Scope of Service</h2>
        <p className="text-lg text-[#758888] mb-4">
          a. [Your Company Name] will provide custom logo design services to the Client based on the specifications provided by the Client.
        </p>
        <p className="text-lg text-[#758888] mb-4">
          b. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.
        </p>

        {/* Copyright and Ownership */}
        <h2 className="text-4xl font-semibold text-gray-800 my-6">→ Copyright and Ownership</h2>
        <p className="text-lg text-[#758888] mb-4">
          a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.
        </p>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AboutPage;
