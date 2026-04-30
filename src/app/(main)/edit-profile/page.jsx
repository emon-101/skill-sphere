"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo } = data;

    try {
      const { data: res, error } = await authClient.updateUser({
        name,
        image: photo,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Profile updated 🎉");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-50 to-purple-50 px-4">
      
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        
        <h2 className="text-xl font-bold text-center mb-4">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          
          <input
            type="text"
            {...register("name", { required: "Name required" })}
            className="w-full p-2 border rounded"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="text"
            {...register("photo", { required: "Photo URL required" })}
            className="w-full p-2 border rounded"
            placeholder="Photo URL"
          />
          {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

          <button className="w-full bg-indigo-600 text-white py-2 rounded">
            Update
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;