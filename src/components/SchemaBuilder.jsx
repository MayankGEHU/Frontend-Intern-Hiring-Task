import React from "react";
import { useForm } from "react-hook-form";
import FieldList from "./FieldList";
import { Button } from "./ui/button";
import { renderJSON } from "./helpers";

function SchemaBuilder() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: { fields: [] },
  });

  const fields = watch("fields");

  return (
    <div style={{ display: "flex", gap: 32, padding: 32 }}>
      {/* Field editor section */}
      <div style={{ flex: 1 }}>
        <FieldList control={control} watch={watch} />
        <Button
          variant="default"
          style={{ marginTop: 10 }}
          type="button"
          onClick={handleSubmit(data =>
            alert(JSON.stringify(renderJSON(data.fields), null, 2))
          )}
        >
          Submit
        </Button>
      </div>

      {/* JSON preview section */}
      <div style={{ flex: 1 }}>
        <pre style={{ background: "#f9f9f9", padding: 16, borderRadius: 6 }}>
          {JSON.stringify(renderJSON(fields || []), null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default SchemaBuilder;
