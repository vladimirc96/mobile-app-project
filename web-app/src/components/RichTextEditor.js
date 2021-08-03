import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../css/RichTextEditor.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class RichTextEditor extends Component {
	render() {
		return (
			<div>
				<Editor wrapperClassName="rich-text-editor" toolbarClassName="rich-text-toolbar" />
			</div>
		);
	}
}

export default RichTextEditor;
