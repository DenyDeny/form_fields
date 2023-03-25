import React from 'react';
import './App.css';
import { FormFields } from "form/FormFields/FormFields";
import { formConfig } from "form/data";
import { useForm } from "form/useForm";
import emoji from 'emoji.png';

function App() {
  const { form, onChangeForm, isFormValid, getPreparedFormData } = useForm(formConfig);
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data = getPreparedFormData();
    console.log(data);
  }
  return (
    <div className="App">
      <div className="form__container">
        <img className="form__container-image" src={emoji} alt="emoji"/>
        <h2 className="form__title">Авторизация</h2>
        <p className="form__description">Для доступа к личному кабинету вашей компании авторизуйтесь на сайте</p>
        <form className="form" autoComplete="off">
          <FormFields
            form={form}
            onChangeField={onChangeForm}
          />
          <button
            onClick={submitForm}
            className="form__button"
            disabled={!isFormValid()}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
