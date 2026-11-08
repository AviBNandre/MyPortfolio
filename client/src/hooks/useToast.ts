import { useState } from 'react';

export const useToast = (duration = 3500) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), duration);
  };

  return { toastMessage, showToast };
};
