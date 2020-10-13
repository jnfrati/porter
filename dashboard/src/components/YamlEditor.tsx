import React, { Component } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-terminal';

type PropsType = {
  value: string,
  onChange: (e: any) => void,
  height?: string,
  border?: boolean
}

type StateType = {
}

class YamlEditor extends Component<PropsType, StateType> {

  // Uses the yaml-lint library to determine if a given string is valid yaml.
  // If the code is invalid, it returns an error message detailing what went wrong.
  checkYaml = () => {
    /*
    yamlLint.lint(y).then(() => {
      alert('Valid YAML file.');
    }).catch((error) => {
      alert(error.message);
    });
    */
  }

  // Calls checkYaml and passes in the value from the textarea
  handleChange = (e: any) => {
    this.setState({ yaml: e });
  }

  handleSubmit = (e: any) => {
    this.checkYaml();
    e.preventDefault();
  }

  render() {
    return (
      <Holder>
        <Editor
          onSubmit={this.handleSubmit}
          border={this.props.border}
        >
          <AceEditor
            mode='yaml'
            value={this.props.value}
            theme='terminal'
            onChange={this.props.onChange}
            name='codeEditor'
            editorProps={{ $blockScrolling: true }}
            height={this.props.height}
            width='100%'
            style={{ borderRadius: '5px' }}
          />
        </Editor>
      </Holder>
    );
  }
}

export default YamlEditor;

const Editor = styled.form`
  border-radius: ${(props: { border: boolean }) => props.border ? '5px' : ''};
  border: ${(props: { border: boolean }) => props.border ? '1px solid #ffffff22' : ''};
`;

const Holder = styled.div`
  .ace_scrollbar {
    display: none;
  }
  .ace_editor, .ace_editor * {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas", monospace !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    letter-spacing: 0 !important;
  }
`;