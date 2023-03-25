import React, { FC, memo } from "react";
import { FieldGroup } from "form/interfaces";
import './TextField.css';
import closeIcon from './close.svg';

interface TextFieldProps extends FieldGroup {
  value: string;
  onChange: (fieldId: string, fieldValue: string) => void;
  onClearField: (fieldId: string, fieldValue: string) => void;
}
export const TextField: FC<TextFieldProps> = memo(({
  id,
  type,
  required,
  label,
  value,
  onChange,
  onClearField,
}) => {
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.id, e.target.value);
  }

  return (
    <div className="form__field">
      <label
        className="form__field_label"
        htmlFor={id}
      >
        {label}
        {required && '*'}
      </label>
      <div className="form__field_input-container">
        <input
          id={id}
          className="form__field_input"
          autoComplete="new-password"
          type={type}
          value={value}
          required={required}
          onChange={onHandleChange}
        />
        {value && (
          <button type="button" onClick={() => onClearField(id, '')} className="form__field_input-clear">
            <img src={closeIcon} alt="close icon"/>
          </button>
        )}
      </div>
    </div>
  )
})
