// hooks/use-toast.tsx
import React from "react";
import { toast } from "sonner";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: "default" | "success" | "error";
};

export function useToast() {
  return ({ title, description, variant = "default" }: ToastOptions) => {
    const colorClass =
      variant === "success"
        ? "text-green-600"
        : variant === "error"
        ? "text-red-600"
        : "text-foreground";

    // Renders JSX into toast
    toast.custom(() => (
      <div className="p-3 rounded-md bg-background shadow-lg border">
        <p className={`font-semibold ${colorClass}`}>{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    ));
  };
}
