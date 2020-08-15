import { useState } from "react";

export function useFormFields<T>(initialState: T): [T, (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
    inputs,
    function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
      setValues({
        ...inputs,
        [event.target.name]: event.target.value
      });
    }
  ];
}