import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { RegisterType, registerSchema } from "../../utils/apis/auth/types";
import { userRegister } from "../../utils/apis/auth/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "../../components/ui/use-toast";
const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterType>({ resolver: zodResolver(registerSchema) });

  const handleRegister = async (body: RegisterType) => {
    try {
      const result = await userRegister(body);
      toast({
        description: result.message,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  return (
    <Layout>
      <div className="flex min-h-screen ">
        <div
          className="w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
          }}></div>
        <div className="w-4/12 p-16 ">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col items-start  gap-y-10 pt-16">
            <h3 className="text-3xl font-semibold">Create an account</h3>
            <div className="p-4 flex flex-col w-full gap-y-8">
              <input
                type="text"
                placeholder="Name"
                className="border-b px-5 py-1 outline-none"
                {...register("name")}
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-red-500 -mt-3">{errors.name.message}</p>}

              <input
                type="text"
                placeholder="Username"
                className="border-b px-5 py-1 outline-none"
                {...register("user_name")}
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
              {errors.user_name && (
                <p className="text-sm text-red-500 -mt-3">{errors.user_name.message}</p>
              )}

              <input
                type="text"
                placeholder="Email"
                className="border-b px-5 py-1 outline-none"
                {...register("email")}
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
              {errors.email && <p className="text-sm text-red-500 -mt-3">{errors.email.message}</p>}
              <input
                type="password"
                placeholder="Password"
                className="border-b px-5 py-1 outline-none"
                {...register("password")}
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
              {errors.password && (
                <p className="text-sm text-red-500 -mt-3">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <button
                className="w-full py-3 rounded-md bg-red-500 text-white "
                disabled={isSubmitting}
                aria-disabled={isSubmitting}>
                {isSubmitting ? (
                  <p className="flex items-center justify-center gap-x-3 text-sm">
                    <Loader2 className={"animate-spin text-xl "} /> Please wait
                  </p>
                ) : (
                  "Create Account"
                )}
              </button>
              <p className="text-sm self-start">
                Already have account?{" "}
                <Link to={"/login"} className="underline">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
