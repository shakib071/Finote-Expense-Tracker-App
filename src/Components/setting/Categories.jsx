import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import useCategories from "@/Hooks/useCategories";
import useAuth from "@/Hooks/useAuth";

const Categories = () => {
    const {user,loading} = useAuth();
    

    const {data:categories,isLoading} = useCategories(user?.uid);
    console.log('data',categories);

    if(loading || isLoading){
        return 'loading';
    }

    return (
        <div className="p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Categories</h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600">
            <tr>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left">SL</th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-left">Category Name</th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-center">Edit</th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-center">Delete</th>
            </tr>
            </thead>

            <tbody>
            {categories.map((cat, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-2 px-2 md:py-3 md:px-4">{index + 1}</td>
                <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-800">{cat}</td>

                <td className="py-2 px-2 md:py-3 md:px-4 text-center">
                    <button className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition">
                    <Pencil className="w-4 h-4" />
                    </button>
                </td>

                <td className="py-2 px-2 md:py-3 md:px-4 text-center">
                    <button className="p-2 rounded-md text-red-600 hover:bg-red-100 transition">
                    <Trash2 className="w-4 h-4" />
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Categories;
