import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { IUserType, userSchema } from "../../utils/apis/users/types";
import { deleteUser, updateUser } from "../../utils/apis/users/api";
import Sidebar from "../../components/Sidebar";
import Layout from "../../components/Layout";
import { useAuth } from "../../utils/contexts/auth";
import Alert from "../../components/Alert";
import { useToast } from "../../components/ui/use-toast";

const Profile = () => {
  const { user, changeToken } = useAuth();
  const { toast } = useToast();
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
      photo_profile: "",
    },
  });

  useEffect(() => {
    setValue("name", user?.name as string);
    setValue("user_name", user?.user_name as string);
    setValue("email", user?.email as string);
    // setValue("photo_profile", user?.photo_profile ?? "");
  }, [user]);

  const handleUpdateUser = async (body: IUserType) => {
    console.log(body.photo_profile[0]);
    try {
      const result = await updateUser(body);
      toast({
        description: result.message,
      });
      // window.location.reload();
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  const handleDeleteUser = async () => {
    try {
      const result = await deleteUser();
      changeToken();
      toast({
        description: result.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  return (
    <Layout>
      <div className=" bg-slate-100 min-h-screen ">
        <div className="flex">
          <Sidebar />
          <div className="container mx-auto p-10 my-8 shadow-sm rounded-lg bg-white space-y-16">
            <div className="flex flex-col items-center gap-y-4  flex-grow">
              <div className="relative">
                <img
                  src={user?.photo_profile || "https://via.placeholder.com/150"}
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
              <Alert
                title="Are you sure?"
                description={`This action cannot be undone. This will permanently delete the user account.`}
                onAction={handleDeleteUser}>
                <button className="px-6 py-2 text-xs font-semibold rounded-md border bg-red-500 text-white">
                  Remove Account
                </button>
              </Alert>
              <form
                onSubmit={handleSubmit(handleUpdateUser)}
                className=" p-10 rounded-lg max-w-6xl w-full space-y-4">
                <h1 className="text-2xl font-semibold -mt-6">Profile</h1>
                <input type="file" id="upload-image" hidden {...register("photo_profile")} />

                <div className="flex flex-col gap-y-1">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className=" w-full px-4 py-2 rounded-md border outline-none"
                    defaultValue={user?.name}
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
                    defaultValue={user?.user_name}
                  />
                  <p className="text-sm text-red-500 ">
                    {errors.user_name && errors.user_name.message}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    {...register("email")}
                    className=" w-full px-4 py-2 rounded-md border outline-none"
                    defaultValue={user?.email}
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
                  <p className="text-sm text-red-500 ">
                    {errors.password && errors.password.message}
                  </p>
                </div>
                <button
                  className="px-5 py-1 rounded-md border bg-sky-500 text-white "
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}>
                  {isSubmitting ? (
                    <p className="flex items-center gap-x-3 text-sm">
                      <Loader2 className={"animate-spin text-xl "} /> Please wait
                    </p>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
