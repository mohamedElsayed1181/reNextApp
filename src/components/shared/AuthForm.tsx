"use client";
import { useAuthStore } from "@/src/store/auth.store";
import { AuthMode, LoginData, RegisterData } from "@/src/types/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ForgetPassword from "../Models/ForgetPassword";
import { useState } from "react";
type Props = {
  mode: AuthMode;
};

export default function AuthForm({ mode }: Props) {
  const { registerUser, loginUser } = useAuthStore();
  const router = useRouter();
  const [openForget, setOpenForget] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData & LoginData>();

  const submit = async (data: RegisterData & LoginData) => {
    try {
      if (mode === "register") {
        await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
          rePassword: data.rePassword,
          phone: data.phone,
        });
        router.push("/login");
      } else {
        await loginUser({
          email: data.email,
          password: data.password,
        });
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="
        w-full 
        max-w-md 
        bg-white 
        rounded-2xl 
        shadow-lg 
        p-8
      "
      >
        <h1
          className="
          text-3xl 
          font-bold 
          text-center 
          mb-6
        "
        >
          {mode === "register" ? "Create Account" : "Login"}
        </h1>

        <form onSubmit={handleSubmit(submit)} className="space-y-5">
          {mode === "register" && (
            <>
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>

                <input
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-black
                    "
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "name is required",
                  })}
                />

                <p className="text-red-500 text-sm mt-1">
                  {errors.name?.message}
                </p>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>

                <input
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-black
                    "
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "phone required",
                  })}
                />

                <p className="text-red-500 text-sm mt-1">
                  {errors.phone?.message}
                </p>
              </div>
            </>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>

            <input
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-black
              "
              placeholder="Email"
              {...register("email", {
                required: "email required",
              })}
            />

            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>

            <input
              type="password"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-black
              "
              placeholder="Password"
              {...register("password", {
                required: "password required",

                minLength: {
                  value: 6,

                  message: "min 6 chars",
                },
              })}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          {mode === "register" && (
            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-black
                  "
                placeholder="Confirm password"
                {...register("rePassword", {
                  validate: (value) =>
                    value === watch("password") || "password not match",
                })}
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.rePassword?.message}
              </p>
            </div>
          )}

          <button
            className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:opacity-90
            transition
            cursor-pointer
            "
          >
            {mode === "register" ? "Create Account" : "Login"}
          </button>

          <h2
            onClick={() => setOpenForget(true)}
            className="
text-md
font-regular
text-gray-500
cursor-pointer
flex
justify-center
"
          >
            Forget Password
          </h2>
        </form>
        {openForget && (
          <ForgetPassword closeModal={() => setOpenForget(false)} />
        )}
      </div>
    </div>
  );
}
