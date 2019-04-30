/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Alignment,
	CKFinder,
	EasyImage,
	Font,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Table,
	TableToolbar
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	alignment: {
		options: [
			'left',
			'center',
			'right',
			'justify',
		],
	},
	fontColor: {
		columns: 6,
		colors: [
			{
				color: '#f44336',
				label: 'red'
			},
			{
				color: '#e91e63',
				label: 'pink'
			},
			{
				color: '#9c27b0',
				label: 'purple'
			},
			{
				color: '#673ab7',
				label: 'deepPurple'
			},
			{
				color: '#3f51b5',
				label: 'indigo',
			},
			{
				color: '#2196f3',
				label: 'blue',
			},
			{
				color: '#03a9f4',
				label: 'lightBlue',
			},
			{
				color: '#00bcd4',
				label: 'cyan',
			},
			{
				color: '#009688',
				label: 'teal',
			},
			{
				color: '#4caf50',
				label: 'green',
			},
			{
				color: '#8bc34a',
				label: 'lightGreen',
			},
			{
				color: '#cddc39',
				label: 'lime',
			},
			{
				color: '#ffeb3b',
				label: 'yellow',
			},
			{
				color: '#ffc107',
				label: 'amber',
			},
			{
				color: '#ff9800',
				label: 'orange',
			},
			{
				color: '#ff5722',
				label: 'deepOrange',
			},
			{
				color: '#795548',
				label: 'brown',
			},
			{
				color: '#9e9e9e',
				label: 'grey',
			},
			{
				color: '#000',
				label: 'black',
			},
			{
				color: '#fff',
				label: 'white',
				hasBorder: true
			},
		]
	},
	fontBackgroundColor: {
		columns: 6,
		colors: [
			{
				color: '#f44336',
				label: 'red'
			},
			{
				color: '#e91e63',
				label: 'pink'
			},
			{
				color: '#9c27b0',
				label: 'purple'
			},
			{
				color: '#673ab7',
				label: 'deepPurple'
			},
			{
				color: '#3f51b5',
				label: 'indigo',
			},
			{
				color: '#2196f3',
				label: 'blue',
			},
			{
				color: '#03a9f4',
				label: 'lightBlue',
			},
			{
				color: '#00bcd4',
				label: 'cyan',
			},
			{
				color: '#009688',
				label: 'teal',
			},
			{
				color: '#4caf50',
				label: 'green',
			},
			{
				color: '#8bc34a',
				label: 'lightGreen',
			},
			{
				color: '#cddc39',
				label: 'lime',
			},
			{
				color: '#ffeb3b',
				label: 'yellow',
			},
			{
				color: '#ffc107',
				label: 'amber',
			},
			{
				color: '#ff9800',
				label: 'orange',
			},
			{
				color: '#ff5722',
				label: 'deepOrange',
			},
			{
				color: '#795548',
				label: 'brown',
			},
			{
				color: '#9e9e9e',
				label: 'grey',
			},
			{
				color: '#000',
				label: 'black',
			},
			{
				color: '#fff',
				label: 'white',
				hasBorder: true
			},
		]
	},
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		],
	},
	fontSize: {
		options: [
			'tiny',
			'small',
			'default',
			'big',
			'huge',
		]
	},
	toolbar: {
		items: [
			'removeFormat',
			'|',
			'heading',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			// 'bulletedList',
			// 'numberedList',
			'blockQuote',
			'alignment',
			'|',
			'link',
			'imageUpload',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			{ name: 'paragraph', groups: [ 'list' ], items: [ 'NumberedList', 'BulletedList' ] }
		],
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
