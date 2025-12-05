import React, { useState } from "react";

function ManageProducts() {
  const foodItems = JSON.parse(localStorage.getItem("foodItems"));

  const [inputs, setInputs] = useState({
    productName: "",
    restaurantName: "",
    price: "",
    category: "",
    isFeatured: "",
    image: "",
  });

  const [open, setOpen] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleDelete = (id) => {
    const finalFood = foodItems.filter((item) => item.featuredId !== id);
    localStorage.setItem("foodItems", JSON.stringify(finalFood));
    window.location.reload();
  };

  const [editingItem, setEditingItem] = useState({
    featuredName: "",
    featuredRestrnt: "",
    featuredPrice: "",
    category: "",
    isFeatured: "",
    featuredImg: "",
  });

  const handleEdit = (food) => {
    setEditingItem(food);
    setOpen(true);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let updatedValue;
    if (name === "isFeatured") {
      updatedValue = value === "yes" ? true : false;
    } else {
      updatedValue = value;
    }

    setEditingItem({ ...editingItem, [name]: updatedValue });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedFood = foodItems.map((item) =>
      item.featuredId === editingItem.featuredId ? editingItem : item
    );

    localStorage.setItem("foodItems", JSON.stringify(updatedFood));

    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      featuredId: Date.now(),
      featuredImg: inputs.image,
      featuredName: inputs.productName,
      featuredRestrnt: inputs.restaurantName,
      featuredPrice: inputs.price,
      category: inputs.category,
      isFeatured: inputs.isFeatured === "yes" ? true : false,
    };

    foodItems.push(newProduct);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));

    window.location.reload();
  };

  return (
    <>
      <div className="pt-8 relative bg-[oklch(98.4%_0.019_200.873)] min-h-screen">
        <h2 className="text-center text-4xl font-bold">Manage Products</h2>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="bg-white flex flex-col p-5 gap-3 w-[500px]">
            <h2 className="text-2xl font-semibold">Add Product</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Food Name"
                className="border p-2"
                onChange={handleInput}
                name="productName"
                required
              />

              <input
                type="text"
                placeholder="Restaurant Name"
                name="restaurantName"
                className="border p-2"
                onChange={handleInput}
                required
              />

              <input
                type="text"
                placeholder="Price"
                className="border p-2"
                onChange={handleInput}
                required
                name="price"
              />

              <select
                className="p-2 border"
                onChange={handleInput}
                required
                name="category"
              >
                <option value="">Select Category</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="American">American</option>
              </select>

              <input
                type="file"
                className="border p-2"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setInputs({ ...inputs, image: reader.result });
                  };
                  reader.readAsDataURL(file);
                }}
                required
                name="image"
              />

              {inputs.image && (
                <img
                  src={inputs.image}
                  alt="Food Image"
                  className="rounded-lg"
                />
              )}

              <div className="flex gap-3">
                <label>Is Featured?</label>
                <label htmlFor="yes">
                  <input
                    type="radio"
                    name="isFeatured"
                    id="yes"
                    value="yes"
                    onChange={handleInput}
                    required
                  />
                  Yes
                </label>

                <label htmlFor="no">
                  <input
                    type="radio"
                    name="isFeatured"
                    id="no"
                    value="no"
                    onChange={handleInput}
                  />
                  No
                </label>
              </div>

              <button className="text-white p-2 bg-[oklch(58.8%_0.158_241.966)] cursor-pointer">
                Add Food
              </button>
            </form>
          </div>

          <table className="w-[900px] bg-white my-6 rounded-xl overflow-hidden">
            <thead className="bg-[oklch(80.9%_0.105_251.813)] border">
              <tr className="border">
                <th className="border p-2">Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Restaurant Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Is Featured?</th>
                <th className="p-2 border"></th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((foodItem) => (
                <tr key={foodItem.featuredId} className="border">
                  <td className="border p-2">
                    <img
                      src={foodItem.featuredImg || null}
                      alt=""
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="border p-2">{foodItem.featuredName}</td>
                  <td className="border p-2">{foodItem.featuredRestrnt}</td>
                  <td className="border p-2">₹{foodItem.featuredPrice}</td>
                  <td className="border p-2">{foodItem.category}</td>
                  <td className="border p-2">
                    {foodItem.isFeatured ? "Yes" : "No"}
                  </td>
                  <td className="flex gap-4 p-2">
                    <button
                      className="text-sm text-white px-3 py-1 rounded-md bg-[oklch(76.9%_0.188_70.08)] cursor-pointer"
                      onClick={() => handleEdit(foodItem)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-sm text-white px-3 py-1 rounded-md bg-[oklch(63.7%_0.237_25.331)] cursor-pointer"
                      onClick={() => handleDelete(foodItem.featuredId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 absolute flex items-center justify-center">
          <div className="w-[500px] flex flex-col gap-3 bg-white p-5 my-5">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Edit Food</h2>
              <button
                className="bg-red-500 p-2 text-white rounded-lg cursor-pointer hover:bg-red-800 transition"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Food Name"
                className="border p-2"
                required
                name="featuredName"
                value={editingItem.featuredName}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Restaurant Name"
                className="border p-2"
                required
                name="featuredRestrnt"
                value={editingItem.featuredRestrnt}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Price"
                className="border p-2"
                required
                name="featuredPrice"
                value={editingItem.featuredPrice}
                onChange={handleChange}
              />

              <select
                className="p-2 border"
                required
                name="category"
                value={editingItem.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="American">American</option>
              </select>

              <div className="flex gap-3 items-center">
                <input
                  type="file"
                  className="border p-2"
                  accept="image/*"
                  name="featuredImg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditingItem({
                        ...editingItem,
                        featuredImg: reader.result,
                      });
                    };
                    reader.readAsDataURL(file);
                  }}
                />

                <img
                  src={editingItem.featuredImg}
                  alt="Food Image for editing"
                  className="w-32 h-24 rounded-lg object-cover"
                />
              </div>

              <div className="flex gap-3">
                <label>Is Featured?</label>
                <label htmlFor="yesEdit">
                  <input
                    type="radio"
                    id="yesEdit"
                    required
                    name="isFeatured"
                    onChange={handleChange}
                    value="yes"
                    checked={editingItem.isFeatured === true}
                  />
                  Yes
                </label>

                <label htmlFor="noEdit">
                  <input
                    type="radio"
                    id="noEdit"
                    onChange={handleChange}
                    value="no"
                    name="isFeatured"
                    checked={editingItem.isFeatured === false}
                  />
                  No
                </label>
              </div>

              <button className="text-white p-2 bg-[oklch(58.8%_0.158_241.966)] cursor-pointer">
                Update Food
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageProducts;
