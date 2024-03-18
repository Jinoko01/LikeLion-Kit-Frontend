import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";

const WriteContent = ({ changeField }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    changeField("write", "content", value);
  }, [value, changeField]);

  return (
    <div className="markarea">
      <MDEditor
        height={450}
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
};

export default WriteContent;
