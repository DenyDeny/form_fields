import React, { FC } from "react";
import { formConfig } from 'form/data';
import { TextField } from "form/TextField/TextField";
import { FIELD_TYPE_MAP } from "form/constants";
import { FormState } from "form/interfaces";

interface FormFieldsProps {
  form: FormState;
  onChangeField: (fieldId: string, fieldValue: string) => void;
}
export const FormFields: FC<FormFieldsProps> = ({ form, onChangeField }) => (
  <>
    {formConfig.map((field) => (
      <TextField
        key={field.id}
        id={field.id}
        label={field.label}
        required={field.required}
        defaultValue={field.defaultValue}
        type={FIELD_TYPE_MAP[field.type]}
        value={form[field.id].value}
        onChange={onChangeField}
        onClearField={onChangeField}
      />
    ))}
  </>
)
