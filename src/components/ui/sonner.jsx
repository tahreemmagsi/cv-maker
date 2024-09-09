import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#1e293b] group-[.toaster]:text-white group-[.toaster]:border-[#6366f1] group-[.toaster]:shadow-2xl border-2",
          description: "group-[.toast]:text-[#cbd5e1]",
          actionButton:
            "group-[.toast]:bg-[#6366f1] group-[.toast]:text-white group-[.toast]:hover:bg-[#4f46e5]",
          cancelButton:
            "group-[.toast]:bg-[#64748b] group-[.toast]:text-white group-[.toast]:hover:bg-[#475569]",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
