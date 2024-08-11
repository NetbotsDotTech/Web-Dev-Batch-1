import React, { useEffect, useRef } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

function CodeEditor({ value, onChange }) {
  const editorRef = useRef();

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
      }}
    />
  );
}

export default CodeEditor;
