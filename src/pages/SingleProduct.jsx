import { useContext, useState } from "react";
import { Context } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
const SingleProduct = () => {
  const { data, setData } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  const product = data.find((prod) => prod.id === params.id);

  // ---------------- FORM ----------------
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm(


  );


  // ---------------- UPDATE ----------------
  const Updatehandler = (formData) => {
    const index = data.findIndex((prod) => prod.id === params.id);

    const newData = [...data];
    newData[index] = { ...newData[index], ...formData }; // merge updates

    setData(newData);
    localStorage.setItem("product", JSON.stringify(newData));

    toast.success("Product updated successfully");
    navigate("/product");
  };

  // ---------------- DELETE ----------------
  const DeleteHandeler = () => {
    const filtered = data.filter((product) => product.id !== params.id);

    setData(filtered);
    localStorage.setItem("product", JSON.stringify(filtered));

    toast.success("Product deleted successfully");
    navigate("/product");
  };

  // ---------------- FAVORITES ----------------
  const [favrite, setfavrite] = useState(()=>{ 
  const stored=  JSON.parse(localStorage.getItem("fav")) 
  return Array.isArray(stored)?stored:[];
  }
  );

  // const isFav = favrite.some((f) => f.id === product?.id);

  const FavHandeler = () => {
    const updated = [...favrite, product];
    setfavrite(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
    toast.success("Added to favorite");
  };

  const UnFavHandeler = () => {
    const filtered = favrite.filter((f) => f.id !== product?.id);
    setfavrite(filtered);
    localStorage.setItem("fav", JSON.stringify(filtered));
    toast.success("Removed from favorites");
  };

    useEffect(() => {
  console.log("single recipe loaded ");
  return () => {
    console.log("single recipe unmounted ");  
  }
  },[favrite])


  // ---------------- RETURN ----------------
 return product ? (
  <div className="w-full flex">
    {/* LEFT - product preview */}
    <div className="relative left w-1/2 p-10">
      {favrite.find((f) => f.id == product?.id) ? (
        <i
          onClick={UnFavHandeler}
          className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill cursor-pointer"
        />
      ) : (
        <i
          onClick={FavHandeler}
          className="right-[5%] absolute text-3xl text-red-400 ri-heart-line cursor-pointer"
        />
      )}

      <h1 className="text-5xl font-black">{product.productName}</h1>

      <img
        className="h-[20vh] w-full object-cover mt-4"
        src={product.imageUrl}
        alt={product.productName}
      />

      <h2 className="mt-2">{product.category?.replace('_', ' ')}</h2>
      <p className="mt-1 text-lg text-gray-700">{product.shortDescription}</p>

      <p className="mt-3 text-2xl font-semibold text-[#354F2C]">
        ₹{Number(product.price).toFixed(2)}
      </p>

      <p className="mt-2 text-sm text-gray-500">{product.longDescription}</p>
    </div>

    {/* RIGHT - edit form */}
    <div className="right w-1/2 p-2">
      <form
        className="w-1/2 p-4 max-w-md mx-auto"
        onSubmit={handleSubmit(Updatehandler)}
      >
        {/* Image URL */}
        <input
          className="border-b outline-0 p-2 block w-full"
          type="url"
          {...register("imageUrl", { required: "Image is required" })}
        />
        {errors.imageUrl && (
          <small className="text-red-400">{errors.imageUrl.message}</small>
        )}

        {/* Product Name */}
        <input
          className="border-b outline-0 p-2 block w-full mt-4"
          type="text"
          placeholder="Product Name"
          {...register("productName", { required: "Product name is required" })}
        />
        {errors.productName && (
          <small className="text-red-400">{errors.productName.message}</small>
        )}

        {/* Short Description */}
        <textarea
          className="border-b outline-0 p-2 block w-full mt-4"
          placeholder="Short description"
          rows={2}
          {...register("shortDescription", {
            required: "Short description is required",
          })}
        />
        {errors.shortDescription && (
          <small className="text-red-400">{errors.shortDescription.message}</small>
        )}

        {/* Long Description */}
        <textarea
          className="border-b outline-0 p-2 block w-full mt-4"
          placeholder="Detailed product description"
          rows={4}
          {...register("longDescription", {
            required: "Detailed description is required",
          })}
        />
        {errors.longDescription && (
          <small className="text-red-400">{errors.longDescription.message}</small>
        )}

        {/* Price */}
        <input
          className="border-b outline-0 p-2 block w-full mt-4"
          type="number"
          step="0.01"
          placeholder="Price (₹)"
          {...register("price", {
            required: "Price is required",
            min: { value: 0.01, message: "Price must be greater than 0" },
          })}
        />
        {errors.price && (
          <small className="text-red-400">{errors.price.message}</small>
        )}

        {/* Category */}
        <select
          className="border-b outline-0 p-2 block w-full mt-4"
          {...register("category", { required: "Please select a category" })}
        >
          <option value="">Select Product Category</option>
          <option value="apparel">Apparel</option>
          <option value="home_living">Home & Living</option>
          <option value="wellness">Wellness</option>
          <option value="accessories">Accessories</option>
          <option value="limited">Limited Edition</option>
        </select>
        {errors.category && (
          <small className="text-red-400">{errors.category.message}</small>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="flex-1 bg-[#304F2F] text-white px-4 py-2 rounded"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={DeleteHandeler}
            className="flex-1 bg-red-900 text-white px-4 py-2 rounded"
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  </div>
) : (
  "Loading..."
);

};

export default SingleProduct;
