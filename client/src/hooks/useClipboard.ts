import { useState } from 'react';

export const useClipboard = (timeout = 2500) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = async (text: string, onSuccess?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      if (onSuccess) onSuccess();
      setTimeout(() => setHasCopied(false), timeout);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return { hasCopied, copy };
};
