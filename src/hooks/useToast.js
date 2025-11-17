import { useState, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState({
    visible: false,
    type: "success",
    message: "",
  });

  const showToast = useCallback((type, message, duration = 3000) => {
    setToast({ visible: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, duration);
  }, []);

  return { toast, showToast };
}
