import { toast } from "react-hot-toast";

export const TosterStyle = {
  borderRadius: "10px",
  background: "#385a64",
  color: "#fff",
};

export const save = (message: string) =>
  toast.success(message, {
    style: TosterStyle,
  });
