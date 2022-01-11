import { OutputData } from '@editorjs/editorjs';

import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun
} from "docx";
import { Header } from 'docx/build/file/header/header';
export class DOCXAdaptor {

  documentCreator: Document;

  constructor() {
  }

  createDocument(outputData: OutputData) {
    return new Document({
      sections: [
        {
          children: this.generateDocxDataFromEditorOutputData(outputData),
          properties: {
            page: {
              margin: {
                top: 3000,
                right: 20,
                bottom: 20,
                left: 2000
              }
            }
          }
        }
      ]
    })
  }

  generateDocxDataFromEditorOutputData(outputData: OutputData) {
    return outputData.blocks.map(
      block => {
        if (block.type === 'header') {
          return this.createHeader(block.data.text)
        } else if (block.type === 'paragraph') {
          return this.createParagraph(block.data.text)
        }
      }
    )
  }

  createParagraph(text: string): Paragraph {
    return new Paragraph({
      text
    })
  }

  createHeader(text: string, level: number = 2): Paragraph {
    return new Paragraph({
      text,
      heading: HeadingLevel.HEADING_2,
    })
  }

}
