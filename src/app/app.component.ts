import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import EditorJS, { BlockAPI, OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import NestedList from '@editorjs/nested-list';
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import ImageTool from '@editorjs/image'
import Marker from '@editorjs/marker'
import { DOCXAdaptor } from './docx.adaptor';
import { Packer } from 'docx';
import { saveAs } from "file-saver";
import { ExampleImage } from './editorPlugins/exampleImage';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-ty-editor';
  editor: EditorJS = null;
  editorOuputData: OutputData = null;
  isShowingAuthor = false;
  constructor(private zone: NgZone){

  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(()=>{
      this.editor = new EditorJS({
        holder: 'ty-editor',
        readOnly: false,
        tools: {
          header: {
            class: Header,
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          table: Table,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          image: ImageTool,
          marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
          },
          ei: {
            class: ExampleImage,
          }
        },

        onReady: ()=>{
          console.log('editor is ready')
        },

        onChange: ()=>{
          console.log('you are typing')
          console.log('blocks are ', this.editor.blocks.getBlockByIndex(0))
        },



        data:
        {
            "time" : 1636956677083,
            "blocks" : [
                {
                    "id" : "K7kVZXVm7J",
                    "type" : "header",
                    "data" : {
                        "text" : "hello world",
                        // "level" : 2
                    }
                },
                {
                    "id" : "noPkz7cNLd",
                    "type" : "paragraph",
                    "data" : {
                        "text" : "zhangpeng liao"
                    }
                },
                // {
                //     "id" : "LZxxNAHTnd",
                //     "type" : "header",
                //     "data" : {
                //         "text" : "Key features",
                //         "level" : 3
                //     }
                // },
                // {
                //     "id" : "4mofzdSx7m",
                //     "type" : "list",
                //     "data" : {
                //         "style" : "unordered",
                //         "items" : [
                //             "It is a block-styled editor",
                //             "It returns clean data output in JSON",
                //             "Designed to be extendable and pluggable with a simple API"
                //         ]
                //     }
                // },
                // {
                //     "id" : "Gy3sGVRsmd",
                //     "type" : "header",
                //     "data" : {
                //         "text" : "What does it mean «block-styled editor»",
                //         "level" : 3
                //     }
                // },
                // {
                //     "id" : "3shKuRkHYw",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
                //     }
                // },
                // {
                //     "id" : "QUogzsJCYP",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
                //     }
                // },
                // {
                //     "id" : "3RQYLCpq8O",
                //     "type" : "header",
                //     "data" : {
                //         "text" : "What does it mean clean data output",
                //         "level" : 3
                //     }
                // },
                // {
                //     "id" : "3BB7U9U2qu",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                //     }
                // },
                // {
                //     "id" : "oVMPp6m9gF",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
                //     }
                // },
                // {
                //     "id" : "XaA2pqxgHL",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "Clean data is useful to sanitize, validate and process on the backend."
                //     }
                // },
                // {
                //     "id" : "P-qQ3gBDcE",
                //     "type" : "paragraph",
                //     "data" : {
                //         "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                //     }
                // },
                // {
                //     "id" : "6epE2JKxil",
                //     "type" : "image",
                //     "data" : {
                //         "file" : {
                //             "url" : "https://codex.so/public/app/img/external/codex2x.png"
                //         },
                //         "caption" : "",
                //         "withBorder" : false,
                //         "stretched" : false,
                //         "withBackground" : false
                //     }
                // }
            ],
            "version" : "2.22.2"
        }

      });
    })
  }

  save(){
    if(this.editor){
      this.editor.save().then(
        data=>{
          console.log('save editor content')
          console.log('---------------------')
          console.log(data);
        }
      )
    }
  }

  getEditorOutputData(){
    if(this.editor){
      return this.editor.save()
    }
    return Promise.resolve(null);
  }

  async export(fileType: 'pdf' | 'docx'){
    const outputData = await this.getEditorOutputData();
    console.log('the outputData is ',outputData)
    const docxAdaptor = new DOCXAdaptor();
    const doc = docxAdaptor.createDocument(outputData);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }

  showAuthor(){
    const blocks = this.editor.blocks;
    this.isShowingAuthor = !this.isShowingAuthor;
    for(let i = 0; i<blocks.getBlocksCount(); i++){
      const block = blocks.getBlockByIndex(i) as BlockAPI;
      const hostHolder: HTMLElement = block.holder
      const contentHolder = hostHolder.querySelector('.ce-block__content')
      contentHolder.classList.toggle('auth-123', this.isShowingAuthor)
    }
  }
}
