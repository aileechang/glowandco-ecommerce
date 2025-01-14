import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";

const Add = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Mens");
  const [subcategory, setSubcategory] = useState("Apparel");
  const [subcategories, setSubcategories] = useState(["Apparel", "Accessories", "Shoes"]);
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "One-Size"]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isBeautyCategory, setIsBeautyCategory] = useState(false);

  const categoryOptions = {
    Mens: ["Apparel", "Accessories", "Shoes"],
    Womens: ["Apparel", "Accessories", "Shoes"],
    Kids: ["Apparel", "Accessories", "Shoes"],
    Beauty: ["Skin", "Hair"],
  };

  const sizeOptions = {
    Apparel: ["XS", "S", "M", "L", "One-Size"],
    Accessories: ["One-Size"],
    MensShoes: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
    WomensShoes: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
    KidsShoes: ["3", "4", "5", "6", "7"],
  };

  const beautyUnits = ["gm", "ml", "oz"];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCategory(category);
    setSubcategories(categoryOptions[category]);
    setSubcategory(categoryOptions[category][0]);

    // Check if the selected category is "Beauty" to handle size input differently
    setIsBeautyCategory(category === "Beauty");

    // Update sizes based on initial subcategory for non-beauty categories
    if (category !== "Beauty") {
      updateSizes(category, categoryOptions[category][0]);
    }
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSubcategory(subcategory);

    if (category !== "Beauty") {
      updateSizes(category, subcategory);
    }
  };

  const updateSizes = (category, subcategory) => {
    if (category === "Mens" || category === "Womens") {
      setSizes(
        subcategory === "Shoes"
          ? sizeOptions[`${category}Shoes`] || []
          : sizeOptions[subcategory] || sizes // Use current sizes if available
      );
    } else if (category === "Kids") {
      setSizes(
        subcategory === "Shoes"
          ? sizeOptions.KidsShoes || []
          : sizeOptions[subcategory] || sizes
      );
    }
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new formData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subcategory', subcategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(isBeautyCategory ? sizes.join(" ") : selectedSizes));
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);

      const response = await axios.post(backendUrl + '/api/product/add', formData);
      console.log(response.data);
    } catch (error) {
      
    }
  };  

  return (
    <form className="flex flex-col w-full items-start gap-3" onSubmit={handleSubmit}>
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[...Array(3)].map((_, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="w-20"
                src={
                  [image1, image2, image3][index]
                    ? URL.createObjectURL([image1, image2, image3][index])
                    : assets.upload
                }                
                alt="Upload"
              />
              <input
                type="file"
                id={`image${index + 1}`}
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (index === 0) setImage1(file);
                  if (index === 1) setImage2(file);
                  if (index === 2) setImage3(file);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Description</p>
        <textarea
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Category</p>
          <select
            className="w-full px-3 py-2"
            value={category}
            onChange={handleCategoryChange}
          >
            {Object.keys(categoryOptions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Subcategory</p>
          <select
            className="w-full px-3 py-2"
            value={subcategory}
            onChange={handleSubcategoryChange}
          >
            {subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Price</p>
          <input
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Size</p>
        {!isBeautyCategory ? (
          <div className="flex gap-3">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => {
                  setSelectedSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((item) => item !== size)
                      : [...prev, size]
                  );
                }}
                className={`px-3 py-1 cursor-pointer ${
                  selectedSizes.includes(size) ? "bg-orange-100" : "bg-slate-200"
                }`}
              >
                <p>{size}</p>
              </div>
            ))}
          </div>               
        ) : (
          <div className="flex gap-2 items-center">
            <input
              className="px-3 py-2 w-[120px]"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Amount"
            />
            <select
              className="px-3 py-2"
              onChange={(e) => setSizes([e.target.value])}
            >
              {beautyUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
          
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(prev => !prev)}
        />
        <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  );
};

export default Add;

