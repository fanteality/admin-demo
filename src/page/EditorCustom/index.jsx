import React from 'react';
import { Row, Col } from 'antd';
import BreadcrumCustom from '../../components/BreadcrumbCustom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss';
export default class EditorCustom extends React.Component {
    state = {
        editorState: EditorState.createEmpty()
    };
    onEditorStateChange = editorState => {
        this.setState({
            editorState
        });
    };
    render() {
        const { editorState } = this.state;
        return (
            <div className="admin-editor">
                <BreadcrumCustom navTitle={this.props.navTitle} />
                <Row >
                    <Editor editorState={editorState} wrapperClassName="demo-wrapper" editorClassName="demo-editor" onEditorStateChange={this.onEditorStateChange} />
                </Row>
                <Row gutter={16}>
                    <Col md={8}>
                        <TransferPanel title='转换为HTML' value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
                    </Col>
                    <Col md={8}>
                        <TransferPanel title='转换为HTML' value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
                    </Col>
                    <Col md={8}>
                        <TransferPanel title='转换为HTML' value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
const TransferPanel = props => (
    <div className="admin-editor-transfer">
        <p>{props.title}</p>
        <textarea disabled value={props.value} />
    </div>
);
