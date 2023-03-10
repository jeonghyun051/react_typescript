import React, { useCallback, useState } from 'react';
import { Form } from './MyForm2';

const useMyForm = (initValue: Form) => {
  const [form, setForm] = useState(initValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('e :', e.target);
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form]
  );

  return { form, onChange };
};

export default useMyForm;
