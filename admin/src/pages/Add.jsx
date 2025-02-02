import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Mens");
  const [subCategory, setSubCategory] = useState("Apparel");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // State for dynamically changing subcategories and sizes
  const [subCategoryOptions, setSubCategoryOptions] = useState(["Apparel", "Accessories", "Shoes"]);
  const [sizeOptions, setSizeOptions] = useState(["XS", "S", "M", "L", "XL"]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);

    if (["Mens", "Womens", "Kids"].includes(selectedCategory)) {
      setSubCategoryOptions(["Apparel", "Accessories", "Shoes"]);
      setSubCategory("Apparel");
      updateSizeOptions("Apparel");
    } else if (selectedCategory === "Beauty") {
      setSubCategoryOptions(["Hair", "Skin"]);
      setSubCategory("Hair");
      setSizeOptions([]);
    }
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
    updateSizeOptions(selectedSubCategory);
  };

  const updateSizeOptions = (selectedSubCategory) => {
    if (selectedSubCategory === "Apparel") {
      setSizeOptions(["XS", "S", "M", "L", "XL"]);
    } else if (selectedSubCategory === "Accessories") {
      setSizeOptions(["One Size", "S", "M", "L"]);
    } else if (selectedSubCategory === "Shoes") {
      setSizeOptions(["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]);
    } else {
      setSizeOptions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Mens");
        setSubCategory("Apparel");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      className="flex flex-col w-full items-start gap-3 text-slate-800"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
      <p className="mb-2 text-slate-800 text-lg">Add a Product</p>
      <hr className="border-[#6D4C3D]"/>
        <p className="mb-2 mt-4 text-sm font-bold text-slate-600">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload : URL.createObjectURL(image1)}
              alt="upload"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload : URL.createObjectURL(image2)}
              alt="upload"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload : URL.createObjectURL(image3)}
              alt="upload"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-bold text-slate-600">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-bold text-slate-600">Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 text-sm font-bold text-slate-600">Category</p>
          <select
            className="w-full px-3 py-2"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
            <option value="Kids">Kids</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-slate-600">Sub Category</p>
          <select
            className="w-full px-3 py-2"
            value={subCategory}
            onChange={(e) => handleSubCategoryChange(e.target.value)}
          >
            {subCategoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-slate-600">Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      
      <div className="w-full">
        <p className="mb-2 text-sm font-bold text-slate-600">Sizes</p>
        <div className="flex flex-wrap gap-3">
          {sizeOptions.map((size) => (
            <div
              key={size}
              className={`px-4 py-2 border rounded cursor-pointer ${
                sizes.includes(size) ? "border-[#727D71] bg-white" : "bg-slate-100"
              }`}
              onClick={() => {
                setSizes((prevSizes) =>
                  prevSizes.includes(size)
                    ? prevSizes.filter((S) => S !== size)
                    : [...prevSizes, size]
                );
              }}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2 text-sm font-bold text-slate-600">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller((prev) => !prev)}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-35 mt-4 px-6 py-2 bg-[#727D71] text-white hover:bg-slate-800 rounded"
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default Add;
