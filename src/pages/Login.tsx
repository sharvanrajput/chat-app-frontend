import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Navigate } from "react-router-dom";
import { api } from "@/api/api";
import { userExist } from "@/redux/slices/auth";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    username: z.string().min(3, "Username must be at least 3 characters"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Record<string, string>;

export default function Auth() {
  // Login/Register mode
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState<FormValues>({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect
  if (user) {
    return <Navigate to={"/"} />;
  }
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    if (isLogin) {
      const result = loginSchema.safeParse({
        username: values.username,
        password: values.password,
      });

      // Validation failed
      if (!result.success) {
        const fieldErrors: FormErrors = {};

        result.error.issues.forEach((issue) => {
          const field = issue.path[0];

          if (typeof field === "string") {
            fieldErrors[field] = issue.message;
          }
        });

        setErrors(fieldErrors);
        return;
      }

      // Validation successful
      console.log("Login Data:", result.data);
      const res = await api.post("/user/signin", result.data);
      localStorage.setItem("token", res.data.token);
      const me = await api.get("/user/me");
      console.log(me.data.user);
      dispatch(userExist(me.data.user));
      return;
    }

    const result = registerSchema.safeParse(values);

    // Validation failed
    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);

      return;
    }

    // Validation successful
    console.log("Register Data:", result.data);
  };

  const handleModeChange = () => {
    setIsLogin((prev) => !prev);

    // Reset form
    setValues({
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    // Reset errors
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-md bg-white/95 shadow-2xl">
        {/* ================= HEADER ================= */}

        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </CardTitle>

          <CardDescription>
            {isLogin
              ? "Login to continue to your account"
              : "Create your account to get started"}
          </CardDescription>
        </CardHeader>

        {/* ================= FORM ================= */}

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* =========================================
                NAME - REGISTER ONLY
            ========================================= */}

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
            )}

            {/* =========================================
                USERNAME
            ========================================= */}

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>

              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />

              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            {/* =========================================
                PASSWORD
            ========================================= */}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />

              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* =========================================
                CONFIRM PASSWORD - REGISTER ONLY
            ========================================= */}

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>

                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />

                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* =========================================
                SUBMIT BUTTON
            ========================================= */}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLogin ? "Login" : "Create Account"}
            </Button>

            {/* =========================================
                SWITCH LOGIN / REGISTER
            ========================================= */}

            <div className="text-center text-sm">
              {isLogin ? (
                <>
                  <span className="text-gray-500">Don't have an account? </span>

                  <button
                    type="button"
                    onClick={handleModeChange}
                    className="font-semibold text-purple-600 hover:underline"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-500">
                    Already have an account?{" "}
                  </span>

                  <button
                    type="button"
                    onClick={handleModeChange}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
