import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = () => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(savedWishlist);
    };

    loadWishlist();
    window.addEventListener("wishlistUpdated", loadWishlist);

    return () => window.removeEventListener("wishlistUpdated", loadWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.error("Project removed from wishlist");
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="lg:py-[3%] lg:px-[12%] py-6 my-2">
      <h2 className="mt-16 text-center text-4xl mb-6 font-bold text-gray-800">
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-lg mb-4">You haven't saved any projects yet.</p>
          <Link
            to="/projects"
            className="inline-block py-2 px-6 rounded-xl bg-[#ff823a] text-white font-semibold hover:bg-[#e5722c] transition"
          >
            Browse Projects
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-5 transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.productname}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h5 className="text-xl font-bold mb-2 text-gray-800">
                {item.productname}
              </h5>
              <p className="text-gray-600 mb-1">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Type:</strong> {item.type}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Status:</strong> {item.status}
              </p>
              <p className="text-[#ff823a] font-bold text-lg mb-4">
                Estimated Cost: {item.price}
              </p>

              <div className="flex flex-col gap-2">
                <button
                  className="w-full py-2 px-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Wishlist;
