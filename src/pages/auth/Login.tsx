import { useForm } from "react-hook-form";
import { userLogin } from "../../utils/apis/auth/api";
import { LoginType, loginSchema } from "../../utils/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useAuth } from "../../utils/contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/use-toast";
import brand from "../../assets/logo-brand.png";

const Login = () => {
  const { toast } = useToast();
  const { changeToken } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (body: LoginType) => {
    try {
      const result = await userLogin(body);
      changeToken(result?.data.token);
      toast({
        description: result.message,
      });
      result.data.role === "admin" ? navigate("/admin/users") : navigate("/");
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex min-h-screen">
      <div
        className="w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
        }}
      ></div>
      <div className="w-4/12 p-16 ">
        <Link to={"/"}>
          <img src={brand} alt="logo-brand" width={80} height={80} />
        </Link>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col items-start  gap-y-16 pt-20"
        >
          <h3 className="text-4xl font-semibold ">Log In to Account</h3>
          <div className="flex flex-col w-full gap-y-8">
            <input
              type="text"
              placeholder="Email"
              className="border-b px-5 py-1 outline-none"
              {...register("email")}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500 -mt-3">
                {errors.email.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border-b px-5 py-1 outline-none"
              {...register("password")}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
            {errors.password && (
              <p className="text-sm text-red-500 -mt-3">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <button
              className="w-1/3 py-3 rounded-md bg-red-500 text-white "
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <p className="flex items-center justify-center gap-x-3 text-sm">
                  <Loader2 className={"animate-spin text-xl "} /> Please wait
                </p>
              ) : (
                "Log In"
              )}
            </button>
            <p className="text-sm self-start">
              Don't have an account yet?{" "}
              <Link to={"/register"} className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
