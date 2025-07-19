import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { FIELD_TYPE_OPTIONS } from "./constants";

const FieldItem = ({ nestName, idx, control, remove, watch }) => {
  const fieldPath = `${nestName}.${idx}`;
  const field = watch?.(fieldPath) || {};

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <Controller
        name={`${fieldPath}.key`}
        control={control}
        defaultValue={field.key}
        render={({ field }) => (
          <Input {...field} placeholder="Field Name" style={{ width: 120 }} />
        )}
      />
      <Controller
        name={`${fieldPath}.type`}
        control={control}
        defaultValue={field.type}
        render={({ field: selectField }) => (
          <Select
            {...selectField}
            options={FIELD_TYPE_OPTIONS}
            style={{ width: 120 }}
            placeholder="Field Type"
          />
        )}
      />
      <Button
        variant="destructive"
        onClick={() => remove(idx)}
        type="button"
      >
        Delete
      </Button>
    </div>
  );
};

export default FieldItem;
