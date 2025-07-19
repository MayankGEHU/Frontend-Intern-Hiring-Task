export const defaultField = () => ({
  key: "",
  type: "string",
  children: [],
});

export const renderJSON = (fields = []) => {
  const result = {};
  fields.forEach((field) => {
    if (!field.key) return;
    switch (field.type) {
      case "nested":
        result[field.key] = renderJSON(field.children || []);
        break;
      case "string":
        result[field.key] = "STRING";
        break;
      case "number":
        result[field.key] = "NUMBER";
        break;
      case "float":
        result[field.key] = "FLOAT";
        break;
      case "objectId":
        result[field.key] = "OBJECT_ID";
        break;
      case "boolean":
        result[field.key] = "BOOLEAN";
        break;
      default:
        result[field.key] = null;
    }
  });
  return result;
};
