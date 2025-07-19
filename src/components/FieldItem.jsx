import React from "react";
import { Controller } from "react-hook-form";
import { Input as AntdInput, Select as AntdSelect, Button as AntdButton } from "antd";
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
          <AntdInput
            {...field}
            placeholder="Field Name"
            style={{ width: 120, borderRadius: 8 }}
          />
        )}
      />
      <Controller
        name={`${fieldPath}.type`}
        control={control}
        defaultValue={field.type}
        render={({ field: selectField }) => (
          <AntdSelect
            {...selectField}
            options={FIELD_TYPE_OPTIONS}
            style={{ width: 120 }}
            placeholder="Field Type"
            onChange={(value) => selectField.onChange(value)} 
          />
        )}
      />

      <AntdButton
        danger
        type="primary"
        onClick={() => remove(idx)}
        style={{ marginTop: 10 }}
      >
        Delete
      </AntdButton>
    </div>
  );
};

export default FieldItem;
