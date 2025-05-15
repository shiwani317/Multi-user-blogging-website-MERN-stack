"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useUserStore } from "@/stores/userStore";
import { clientPatch, clientPost } from "@/lib/service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const { verifyEmail, setVerifyEmail } = useUserStore();
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Send OTP to email
  const handleSendEmail = async () => {
    setIsLoading(true);
    setError("");
    console.log("Sending OTP to:", verifyEmail);

    try {
      const res = await clientPost("/api/v1/users/send-verify-otp", null, {
        email: verifyEmail,
      });
      if (!res.success) throw new Error(res.message);
      setIsEmailSent(true);
      toast.success("OTP sent to your email");
    } catch (err) {
      setError(err.message || "Failed to send OTP");
      console.error("Send OTP Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError("");
    console.log("Verifying OTP for:", verifyEmail);

    try {
      const res = await clientPatch("/api/v1/users/verify-user-by-otp", null, {
        email: verifyEmail,
        OTP: otp,
      });
      if (!res.success) throw new Error(res.message);
      toast.success("User Verified");
      router.push("/auth/login");
    } catch (err) {
      setError(err.message || "OTP verification failed");
      console.error("Verify OTP Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            {isEmailSent
              ? "Enter the OTP sent to your email"
              : "Enter your email to receive an OTP"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                disabled={isEmailSent}
                className="w-full bg-gray-50 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* OTP Input */}
            {isEmailSent && (
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-gray-700 dark:text-gray-300">
                  OTP
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-700 dark:text-white"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            )}

            {/* Action Button */}
            <Button
              type="button"
              onClick={isEmailSent ? handleVerifyOtp : handleSendEmail}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : isEmailSent ? (
                "Verify OTP"
              ) : (
                "Send OTP"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Didn&apos;t receive the OTP?{" "}
            <button
              onClick={handleSendEmail}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Resend OTP
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
