import React from 'react'
import { useForm } from 'react-hook-form';
// import {toast} from "react-toastify"
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {nanoid} from "nanoid"
const Create = () => {
    const navigate=useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // reset

  
  const onSubmit = data => {
    console.log(data);

    data.id=nanoid();
    navigate(-1)

  }

  return (
<div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-[#ECE6B4]">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#304F2F]">
        Add New Recipe
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Chef Name */}
        <input
          type="text"
          placeholder="Chef Name"
          className="w-full border p-2 rounded outline-0"
          {...register("chefName", { required: "Chef name is required" })}
        />
        {errors.chefName && (
          <small className="text-red-400">{errors.chefName.message}</small>
        )}

        {/* Food Name */}
        <input
          type="text"
          placeholder="Food Name"
          className="w-full border p-2 rounded outline-0"
          {...register("foodName", { required: "Food name is required" })}
        />
        {errors.foodName && (
          <small className="text-red-400">{errors.foodName.message}</small>
        )}

        {/* Image URL */}
        <input
          type="url"
          placeholder="Image URL"
          className="w-full border p-2 rounded outline-0"
          {...register("imageUrl", { required: "Image URL is required" })}
        />
        {errors.imageUrl && (
          <small className="text-red-400">{errors.imageUrl.message}</small>
        )}

        {/* Recipe Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full border p-2 rounded outline-0"
          {...register("recipeTitle", { required: "Recipe title is required" })}
        />
        {errors.recipeTitle && (
          <small className="text-red-400">{errors.recipeTitle.message}</small>
        )}

        {/* Short Description */}
        <textarea
          placeholder="Short Description"
          className="w-full border p-2 rounded outline-0"
          rows="2"
          {...register("shortDescription", {
            required: "Description is required",
          })}
        ></textarea>
        {errors.shortDescription && (
          <small className="text-red-400">
            {errors.shortDescription.message}
          </small>
        )}

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full border p-2 rounded outline-0"
          rows="3"
          {...register("ingredients", {
            required: "Ingredients are required",
          })}
        ></textarea>
        {errors.ingredients && (
          <small className="text-red-400">{errors.ingredients.message}</small>
        )}

        {/* Instructions */}
        <textarea
          placeholder="Instructions (step by step)"
          className="w-full border p-2 rounded outline-0"
          rows="4"
          {...register("instructions", {
            required: "Instructions are required",
          })}
        ></textarea>
        {errors.instructions && (
          <small className="text-red-400">{errors.instructions.message}</small>
        )}

        {/* Category */}
        <select
          className="w-full border p-2 rounded outline-0"
          {...register("category", { required: "Please select a category" })}
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="supper">Supper</option>
        </select>
        {errors.category && (
          <small className="text-red-400">{errors.category.message}</small>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#304F2F] text-white py-2 rounded hover:bg-[#2a4028]"
        >
          Save Recipe
        </button>
      </form>
    </div>

  )
}

export default Create