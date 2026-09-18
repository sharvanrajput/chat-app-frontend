
import { useState, type FormEvent } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

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

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password) {
      setError("Enter your admin password to continue.");
      return;
    }

    setError("");
    console.log("Admin login submitted", { password });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(196,181,253,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(232,121,249,0.2),transparent_32%),linear-gradient(135deg,#2e1065_0%,#581c87_48%,#701a75_100%)] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl" />

      <Card className="relative w-full max-w-md border-white/20 bg-white/95 shadow-2xl shadow-purple-950/30 backdrop-blur-sm">
        <CardHeader className="space-y-5 pb-6 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 shadow-inner shadow-violet-200">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-semibold tracking-tight text-violet-950">
              Admin access
            </CardTitle>
            <CardDescription className="text-sm text-slate-500">
              Enter your password to continue to the dashboard.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-slate-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="admin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your password"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "admin-password-error" : undefined}
                  className="h-11 border-slate-200 bg-white pr-12 text-slate-900 shadow-sm focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-400 transition-colors hover:text-violet-700 focus-visible:text-violet-700 focus-visible:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {error && (
                <p id="admin-password-error" className="text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-11 w-full bg-violet-700 text-white shadow-lg shadow-violet-700/20 hover:bg-violet-800"
            >
              Sign in securely
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
