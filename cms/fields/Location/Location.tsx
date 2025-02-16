import type { BasicFormField, FormFieldStoredValue } from "@keystatic/core";
import { FieldPrimitive } from "@keystar/ui/field";

export function Location({ label, defaultValue, description }) {
  return {
    kind: "form",
    formKind: undefined,
    label,
    Input(props) {
      return (
        <FieldPrimitive>
          <p>Placeholder for Location field</p>
        </FieldPrimitive>
      );
    },
  };
}
