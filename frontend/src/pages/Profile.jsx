import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { backendUrl, token, navigate } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = token || localStorage.getItem("token");

    if (!authToken) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          backendUrl + "/api/user/profile",
          {},
          { headers: { token: authToken } },
        );

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [backendUrl, navigate, token]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>
      <div className="max-w-xs mx-auto my-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium">{user?.name || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{user?.email || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cart items</p>
            <p className="text-lg font-medium">
              {user?.cartData ? Object.keys(user.cartData).length : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
