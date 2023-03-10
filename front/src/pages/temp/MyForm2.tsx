import React from 'react';
import useMyForm from './useMyForm';

export interface Form {
  name: string;
  password: string;
  description: string;
}

export const initValue: Form = {
  name: '',
  password: '',
  description: '',
};

function MyForm2() {
  const { form, onChange } = useMyForm(initValue);

  const { name, password, description } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange} />
      <input name='password' value={password} onChange={onChange} />
      <input name='description' value={description} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  );
}

export default MyForm2;
