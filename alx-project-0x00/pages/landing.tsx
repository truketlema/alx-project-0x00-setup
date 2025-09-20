import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Cards */}
      <div className="flex gap-4 mb-6">
        <Card />
        <Card />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button
          title="Small Rounded"
          size="small"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Medium Rounded"
          size="medium"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Large Rounded"
          size="large"
          shape="rounded-full"
          styles=""
        />
        <Button title="Extra Large" size="large" shape="rounded-lg" styles="" />
      </div>
    </div>
  );
};

export default Landing;
