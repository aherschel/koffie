import { useEffect, useState } from "react";

const useDismissable = (
  dismissableKey: string,
  isInitiallyDismissed: boolean
): [boolean, (newIsDismissed: boolean) => void] => {
  const [isDismissed, setIsDismissed] = useState(isInitiallyDismissed);
  const storageKey = `${dismissableKey}.isDismissed`;

  useEffect(() => {
    if (localStorage.getItem(storageKey) !== null) {
      setIsDismissed(JSON.parse(localStorage.getItem(storageKey)!));
    } else {
      setIsDismissed(isInitiallyDismissed);
    }
  }, [isInitiallyDismissed, storageKey]);

  const updateIsDismissed = (newIsDismissed: boolean) => {
    localStorage.setItem(storageKey, JSON.stringify(newIsDismissed));
    setIsDismissed(newIsDismissed);
  };

  return [isDismissed, updateIsDismissed];
};

export default useDismissable;
