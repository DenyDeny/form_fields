import { useCallback, useState } from "react";
import { FieldGroup, FormState } from "form/interfaces";

export const useForm = (config: FieldGroup[]) => {
  const [form, setForm] = useState<FormState>(() => {
    return config.reduce((acc, { id, defaultValue, required }) => {
      acc[id] = { value: '', required: false };
      acc[id].value = defaultValue || '';
      acc[id].required = Boolean(required);
      return acc;
    }, {} as FormState)
  });

  const onChangeForm = useCallback((fieldId: string, fieldValue: string) => {
    setForm({
      ...form,
      [fieldId]: { ...form[fieldId], value: fieldValue },
    })
  }, [form, setForm]);

  const findEmptyRequiredFields = () => {
    return Object.values(form).filter(({ value, required }) => required && value.length === 0);
  }

  const isFormValid = () => findEmptyRequiredFields().length === 0;

  const getPreparedFormData = () => {
    return Object.entries(form).reduce((acc, [id, { value }]) => {
      acc[id] = value;
      return acc;
    }, {} as { [key: string]: string })
  }

  return {
    form,
    onChangeForm,
    isFormValid,
    getPreparedFormData,
  }
};
