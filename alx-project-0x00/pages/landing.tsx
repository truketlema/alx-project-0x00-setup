// pages/landing.tsx
import React from "react";
import Card from "../components/Card";
// use named import to fix the error

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Listings</h1>

      {/* Render cards */}
      <div className="flex flex-wrap gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
