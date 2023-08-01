import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';


interface TextEditorProps {
  onChange: (value: string) => void;
  value: string;
}

const TextEditor: React.FC<TextEditorProps> = (props) => {
  return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={props.onChange}
        value={props.value}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
  );
}

export default TextEditor;
