import React, { useState } from "react";

const ProductTabs = ({ productData }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-5 py-3 text-sm border-t border-l border-r ${
            activeTab === "description"
              ? "bg-white font-semibold"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-5 py-3 text-sm border-t border-r ${
            activeTab === "reviews"
              ? "bg-white font-semibold"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Reviews (122)
        </button>
      </div>

      {/* Tab Content */}
      <div className="border px-6 py-6 text-sm text-gray-600">
        {activeTab === "description" && (
          <div className="flex flex-col gap-4">
            <p>
              {productData.description ||
                "This product is crafted with attention to detail and built for comfort, durability, and modern style. Whether you're dressing up or down, it's a versatile addition to any wardrobe."}
            </p>
            <ul className="list-disc pl-6">
              <li>Material: Premium blend fabric</li>
              <li>Fit: True to size for all-day comfort</li>
              <li>Care: Machine wash cold, tumble dry low</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-semibold">Aarav S. ★★★★★</p>
              <p>
                The quality is top-notch and the fabric feels great on the skin.
                Delivery was fast too!
              </p>
            </div>
            <div>
              <p className="font-semibold">Nikita M. ★★★★☆</p>
              <p>
                Love the fit and design. Slightly snug on the shoulders, but
                overall very satisfied.
              </p>
            </div>
            <div>
              <p className="font-semibold">Zoya A. ★★★★★</p>
              <p>
                I bought this as a gift and it was a hit! Looks exactly like the
                photos and fits true to size.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
