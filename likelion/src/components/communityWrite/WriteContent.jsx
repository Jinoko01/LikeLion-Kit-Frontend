import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "image",
  "link",
  "align",
  "color",
  "background",
  "size",
];

const WriteContent = ({ changeField }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    changeField("write", "content", value);
  }, [value, changeField]);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={setValue}
      style={{ height: "25rem" }}
    />
  );
};

export default WriteContent;
