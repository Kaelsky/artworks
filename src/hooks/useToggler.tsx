import { useCallback, useState } from "react";

export const useToggler = (isToggled: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(isToggled);
  // Memoize toggler in case we passing down its value to another component
  const toggle = useCallback(() => setValue((state) => !state), []);
  return [value, toggle];
};
