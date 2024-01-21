import { useForm } from "react-hook-form";
import { deleteUser, updateUser } from "../../../utils/apis/users/api";
import { IUserType, userSchema } from "../../../utils/apis/users/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Loader2 } from "lucide-react";
import { useEffect } from "react";

interface ProfileDetailProps {
  data: IUserType;
}
const ProfileDetail = ({ data }: ProfileDetailProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      user_name: "",
      email: "",
      password: "",
      photo_profile: new File([], ""),
    },
  });

  useEffect(() => {
    setValue("name", data?.name);
    setValue("user_name", data?.user_name);
    setValue("email", data?.email);
    setValue("photo_profile", data?.photo_profile);
  }, [data]);

  const handleUpdateUser = async (body: IUserType) => {
    try {
      const result = await updateUser(body);
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = async () => {
    try {
      const result = await deleteUser();
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative">
        <img
          src={data?.photo_profile ?? "https://source.unsplash.com/300x300?person"}
          alt="profile-user"
          className="rounded-full size-48"
        />
        <label htmlFor="upload-image" className="cursor-pointer">
          <Camera className="absolute bottom-3 right-4 bg-zinc-100 rounded-full h-8 w-8" />
        </label>
      </div>
      <p className="text-sm text-red-500 ">
        {errors.photo_profile && errors.photo_profile.message}
      </p>
      <button
        className="px-6 py-2 text-xs font-semibold rounded-md border bg-red-500 text-white"
        onClick={handleDeleteUser}
      >
        Remove Account
      </button>
      <form
        onSubmit={handleSubmit(handleUpdateUser)}
        className=" p-10 rounded-lg max-w-6xl w-full space-y-4"
      >
        <h1 className="text-2xl font-semibold -mt-6">Profile</h1>
        <input type="file" id="upload-image" hidden {...register("photo_profile")} />

        <div className="flex flex-col gap-y-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className=" w-full px-4 py-2 rounded-md border outline-none"
            defaultValue={data?.name}
          />
          <p className="text-sm text-red-500 ">{errors.name && errors.name.message}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("user_name")}
            className=" w-full px-4 py-2 rounded-md border outline-none"
            defaultValue={data?.user_name}
          />
          <p className="text-sm text-red-500 ">{errors.user_name && errors.user_name.message}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className=" w-full px-4 py-2 rounded-md border outline-none"
            defaultValue={data?.email}
          />
          <p className="text-sm text-red-500 ">{errors.email && errors.email.message}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            {...register("password")}
            className=" w-full px-4 py-2 rounded-md border outline-none"
          />
          <p className="text-sm text-red-500 ">{errors.password && errors.password.message}</p>
        </div>
        <button
          className="px-5 py-1 rounded-md border bg-sky-500 text-white "
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <p className="flex items-center gap-x-3 text-sm">
              <Loader2 className={"animate-spin text-xl "} /> Please wait
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

export default ProfileDetail;
