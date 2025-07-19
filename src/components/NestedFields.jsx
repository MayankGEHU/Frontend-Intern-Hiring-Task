import React from "react";
import { useFieldArray } from "react-hook-form";
import { Card } from "./ui/card";
import { Button as AntdButton } from "antd"; 
import { defaultField } from "./helpers";
import FieldItem from "./FieldItem";

const NestedFields = ({ nestName, control, watch }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: nestName,
  });

  const liveFields = watch(nestName);

  return (
    <div style={{ marginLeft: 24, borderLeft: "2px solid #eee", paddingLeft: 16 }}>
      {fields.map((field, idx) => (
        <Card key={field.id || idx} style={{ padding: 12, marginBottom: 8 }}>
          <FieldItem
            nestName={nestName}
            idx={idx}
            control={control}
            remove={remove}
            watch={watch}
          />
          {liveFields?.[idx]?.type === "nested" && (
            <NestedFields
              nestName={`${nestName}.${idx}.children`}
              control={control}
              watch={watch}
            />
          )}
        </Card>
      ))}
      <AntdButton
        type="primary" 
        onClick={() => append(defaultField())}
        style={{ marginBottom: 6 }}
      >
        + Add Item
      </AntdButton>
    </div>
  );
};

export default NestedFields;
