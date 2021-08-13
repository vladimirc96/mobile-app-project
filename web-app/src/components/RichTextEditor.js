import React, { Component } from "react";
import "../css/RichTextEditor.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
var classNames = require("classnames");

const toolbarConfig = {
	options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "link", "remove", "history"],
	inline: {
		inDropdown: false,
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		options: ["bold", "italic", "underline", "strikethrough", "monospace"],
	},
};

export class RichTextEditor extends Component {
	constructor() {
		super();
		this.state = {
			editorState: EditorState.createEmpty(),
			html: "",
		};
	}

	initEditorState = async () => {
		if (this.props.value) {
			const contentBlock = htmlToDraft(this.props.value);
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			const editorState = EditorState.createWithContent(contentState);
			await this.setState({ editorState: editorState });
		}
	};

	async componentDidMount() {
		await this.initEditorState();
	}

	handleChange = async (state) => {
		await this.setState({ editorState: state });
		this.props.onChange(this.props.formikProps, draftToHtml(convertToRaw(state.getCurrentContent())));
	};

	render() {
		return (
			<div>
				<Editor
					toolbar={toolbarConfig}
					editorState={this.state.editorState}
					wrapperClassName={classNames("rich-text-editor", this.props.classes)}
					toolbarClassName="rich-text-toolbar"
					editorClassName="rich-text-content"
					onEditorStateChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default RichTextEditor;
