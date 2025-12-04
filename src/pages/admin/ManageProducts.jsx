import React from "react";

function ManageProducts() {
  return (
    <div className="pt-8 bg-[oklch(98.4%_0.019_200.873)] min-h-screen">
      <h2 className="text-center text-4xl font-bold">Manage Products</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="bg-white flex flex-col p-5 gap-3 w-[500px]">
          <h2 className="text-2xl font-semibold">Add Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2"
          />
          <input
            type="text"
            placeholder="Restaurant Name"
            className="border p-2"
          />
          <input type="text" placeholder="Price" className="border p-2" />
          <select className="p-2 border">
            <option value="">Select Category</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="french">French</option>
            <option value="chinese">Chinese</option>
            <option value="american">American</option>
          </select>
          <input type="text" placeholder="Image URL" className="border p-2" />

          <div className="flex gap-3">
            <label htmlFor="">Is Featured?</label>
            <label htmlFor="yes">
              <input type="radio" name="isFeatured" id="yes" value="yes" />
              Yes
            </label>

            <label htmlFor="no">
              <input type="radio" name="isFeatured" id="no" value="no" /> No
            </label>
          </div>

          <button className="text-white p-2 bg-[oklch(58.8%_0.158_241.966)]">
            Add Product
          </button>
        </div>

        <table className="w-[800px] p-5 border mt-6">
          <thead className="bg-[oklch(80.9%_0.105_251.813)] border">
            <tr className="border">
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Restaurant Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Is Featured?</th>
              <th className="border p-2"></th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td className="border p-2">drfsr</td>
              <td className="border p-2">rkgnker</td>
              <td className="border p-2">kglr</td>
              <td className="border p-2">kgrjl</td>
              <td className="border p-2">rkgjle</td>
              <td className="border p-2">rkgjl</td>
              <td className="flex gap-4">
                <button className="text-white p-1 rounded-sm bg-[oklch(76.9%_0.188_70.08)]">Edit</button>
                <button className="text-white p-1 rounded-sm bg-[oklch(63.7%_0.237_25.331)]">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageProducts;
