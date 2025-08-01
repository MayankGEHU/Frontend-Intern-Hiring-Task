import React from "react";
import { useFieldArray } from "react-hook-form";
import { Card } from "./ui/card";
import { Button as AntdButton } from "antd"; 
import FieldItem from "./FieldItem";
import NestedFields from "./NestedFields";
import { defaultField } from "./helpers";

const FieldList = ({ control, watch }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const liveFields = watch("fields");

  return (
    <div>
      <AntdButton
        type="primary" 
        onClick={() => append(defaultField())}
        style={{ marginBottom: 12 }}
      >
        + Add Item
      </AntdButton>

      {fields.map((field, idx) => (
        <Card key={field.id || idx} style={{ padding: 16, marginBottom: 10 }}>
          <FieldItem
            nestName="fields"
            idx={idx}
            control={control}
            remove={remove}
            watch={watch}
          />
          {liveFields?.[idx]?.type === "nested" && (
            <NestedFields
              nestName={`fields.${idx}.children`}
              control={control}
              watch={watch}
            />
          )}
        </Card>
      ))}
    </div>
  );
};

export default FieldList;
