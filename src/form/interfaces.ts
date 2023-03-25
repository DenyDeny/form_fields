export interface FieldGroup {
  id: string;
  type: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
}

export interface FormState {
  [key: string]: {
    value: string;
    required: boolean;
  }
}
