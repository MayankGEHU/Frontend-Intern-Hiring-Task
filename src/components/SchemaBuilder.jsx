import React from "react";
import { useForm } from "react-hook-form";
import FieldList from "./FieldList";
import { Button } from "antd";
import { renderJSON } from "./helpers";

function SchemaBuilder() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: { fields: [] },
  });

  const fields = watch("fields");

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .schema-container {
            flex-direction: column;
            padding: 16px !important;
          }
          .schema-section {
            max-width: 100% !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div
        className="schema-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          padding: 32,
        }}
      >
        {/* Field editor section */}
        <div
          className="schema-section"
          style={{ flex: 1, minWidth: 300, maxWidth: 500 }}
        >
          <FieldList control={control} watch={watch} />
          <Button
            type="default"
            ghost
            style={{
              marginTop: 10,
              borderColor: "black",
              color: "black",
            }}
            onClick={handleSubmit((data) =>
              alert(JSON.stringify(renderJSON(data.fields), null, 2))
            )}
          >
            Submit
          </Button>
        </div>

        {/* JSON preview section */}
        <div
          className="schema-section"
          style={{ flex: 1, minWidth: 200, maxWidth: 400 }}
        >
          <pre
            style={{
              background: "#f9f9f9",
              padding: 16,
              borderRadius: 6,
              border: "1px solid gray",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {JSON.stringify(renderJSON(fields || []), null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default SchemaBuilder;
