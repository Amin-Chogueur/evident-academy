"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./MenuBar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}
export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      HorizontalRule,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
