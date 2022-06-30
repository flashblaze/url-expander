import { useEffect } from "preact/hooks";
import { createSnackbar } from "@snackbar/core";
import "@snackbar/core/dist/snackbar.css";

interface ToastProps {
  error: string;
  setError: (error: string) => void;
}

const Toast = ({ error, setError }: ToastProps) => {
  useEffect(() => {
    createSnackbar(error, {
      timeout: 3000,
      actions: [],
    });

    return () => {
      setError("");
    };
  }, []);
  return null;
};

export default Toast;
