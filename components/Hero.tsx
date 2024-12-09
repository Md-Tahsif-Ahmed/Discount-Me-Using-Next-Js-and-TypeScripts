import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Good <span className="text-orange-400">food</span>, great memories
          </h1>
          <p className="mt-4 text-gray-600">
            Enable diners to customize their booking by requesting a specific table location or view.
          </p>
          <div className="mt-6">
            <button className="btn btn-success">Location</button>
          </div>
        </div>
        <img src="/images/hero-illustration.png" alt="Hero" className="w-1/2" />
      </div>
    </section>
  );
};

export default Hero;
