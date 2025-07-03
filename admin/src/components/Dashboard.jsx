import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Welcome to the Admin Dashboard!
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Use the sidebar to navigate and manage your store's products and orders.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">📦 Products</h2>
          <p className="text-gray-600 mt-2">Add or view your products.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">📋 Orders</h2>
          <p className="text-gray-600 mt-2">
            Track and manage customer orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
