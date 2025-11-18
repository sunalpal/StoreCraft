import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify"; // Uncomment if using toast notifications
import {Context} from "../context/ProductContext";
import { useContext } from "react";
const CreateProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Custom theme colors for easy reference
  const PRIMARY_BG = "bg-[#ECE6B4]";
  const ACCENT_COLOR = "text-[#304F2F]";
  const BUTTON_COLOR = "bg-[#304F2F]";

  const { data, setData } = useContext(Context);

  

  const onSubmit = (prod) => {
    prod.id = nanoid();

    prod.price = parseFloat(prod.price);

    const copydata = [...data];
    copydata.push(prod);
    setData(copydata);

    console.log("New Product Data:", prod);

    toast.success("Successfully Product Created");
    reset();

    navigate("/product");
  };

  return (
    <div
      className={`max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-xl ${PRIMARY_BG}`}
    >
      <h2 className={`text-3xl font-bold mb-6 text-center ${ACCENT_COLOR}`}>
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <input
            type="text"
            placeholder="Product Name (e.g., Artisan Ceramic Mug)"
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
            {...register("productName", {
              required: "Product name is required",
            })}
          />
          {errors.productName && (
            <small className="text-red-600 font-medium">
              {errors.productName.message}
            </small>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="url"
            placeholder="Main Image URL (High Resolution)"
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
            {...register("imageUrl", { required: "Image URL is required" })}
          />
          {errors.imageUrl && (
            <small className="text-red-600 font-medium">
              {errors.imageUrl.message}
            </small>
          )}
        </div>

        {/* Short Description */}
        <div>
          <textarea
            placeholder="Short Summary (1-2 sentences for product card)"
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
            rows="2"
            {...register("shortDescription", {
              required: "Short description is required",
              maxLength: {
                value: 150,
                message: "Maximum 150 characters allowed",
              },
            })}
          ></textarea>
          {errors.shortDescription && (
            <small className="text-red-600 font-medium">
              {errors.shortDescription.message}
            </small>
          )}
        </div>

        {/* Detailed Description */}
        <div>
          <textarea
            placeholder="Detailed Product Description (materials, origin, care instructions)"
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
            rows="4"
            {...register("longDescription", {
              required: "Detailed description is required",
            })}
          ></textarea>
          {errors.longDescription && (
            <small className="text-red-600 font-medium">
              {errors.longDescription.message}
            </small>
          )}
        </div>

        {/* Price Field - Now single column */}
        <div>
          <input
            type="number"
            step="0.01" // Allows for decimal values
            placeholder="Price (₹)"
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be greater than 0" },
            })}
          />
          {errors.price && (
            <small className="text-red-600 font-medium">
              {errors.price.message}
            </small>
          )}
        </div>
        {/* Inventory field removed */}

        {/* Category */}
        <div>
          <select
            className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-[#304F2F]"
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
            <small className="text-red-600 font-medium">
              {errors.category.message}
            </small>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full ${BUTTON_COLOR} text-white font-bold py-3 rounded-lg hover:bg-[#2a4028] transition duration-200`}
        >
          Publish Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
