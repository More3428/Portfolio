'use client';

import { useAuth } from "@/app/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) {
    return null; // Prevents flickering before redirecting
  }

  return <>{children}</>;
};

export default ProtectedRoute;
