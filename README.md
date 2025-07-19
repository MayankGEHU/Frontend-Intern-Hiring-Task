# 🏗️ JSON Schema Builder — Frontend Assignment

This project is my solution to the frontend assignment for the JSON Schema Builder.  
It demonstrates my abilities with React, managing complex and recursive UI, and real-time data preview using modern best practices.

---

## ✨ Features

- **Dynamic Form Builder:** Add, remove, and edit fields with various data types.
- **Recursive Nesting:** Unlimited nesting of "nested" field types.
- **Supported Types:** `string`, `number`, `objectId`, `float`, `boolean`, and `nested`.
- **Required Toggle:** Mark any field as required.
- **Real-Time JSON Preview:** See live JSON output auto-updating as you work.
- **Modern Custom UI:** Clean, accessible, responsive interface using reusable React components.

---

## 🚀 How to Run Locally

1. **Clone the Repository**
    ```
    git clone https://github.com/YOUR_GITHUB_USERNAME/json-schema-builder-assignment.git
    cd json-schema-builder-assignment
    ```

2. **Install Dependencies**
    ```
    npm install
    # or
    yarn
    ```

3. **Start the Development Server**
    ```
    npm run dev
    # or
    yarn dev
    ```

4. **Open in Browser**  
   Visit https://frontend-intern-hiring-task.vercel.app/ to test the deployed app.

---

## 🖥️ Usage

- Click **+ Add Item** to add a field.
- Select a field type from the dropdown (`string`, `number`, `nested`, etc.).
- For nested objects, select `nested` to add child fields.
- Use the checkbox to set "required".
- The right panel shows a live JSON preview that reflects changes instantly.
- Click **Submit** to display the schema as JSON.

---

## ⚙️ Tech Stack & Approach

- **React** for UI and state management.
- **react-hook-form** for performant form logic and field arrays.
- **Reusable components**: Button, Card, Input, Select built using CSS utility classes.
- **Recursive Components** carefully designed for nesting and performance.
- **Responsive layout** with flexbox and minimal styling for clarity.

---

## 📂 Project Structure
```
src/
├── components/
│ ├── ui/
│ │ ├── button.jsx
│ │ ├── card.jsx
│ │ ├── input.jsx
│ │ ├── select.jsx
│ ├── constants.js
│ ├── FieldItem.jsx
│ ├── FieldList.jsx
│ ├── helpers.js
│ ├── NestedFields.jsx
│ └── SchemaBuilder.jsx
├── utils/
│ └── defaultField.js
├── App.css
└── App.js
```

---

## 🙋‍♂️ About

**Author:** [Mayank Singh]  
**Email:** [minku6296@gmail.com]  

For any questions about my approach or code, feel free to reach out or leave feedback!

---

