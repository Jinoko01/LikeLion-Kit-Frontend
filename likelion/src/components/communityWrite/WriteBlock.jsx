import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import styled from "styled-components";
import { community } from "../../store/community";
import WriteCategory from "./WriteCategory";
import WriteContent from "./WriteContent";
import Button from "../common/Button";
import UploadIcon from "@mui/icons-material/Upload";
import { useEffect } from "react";

const WriteDiv = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

const TitleInput = styled.input`
  display: block;
  width: 80%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  outline: none;
  padding: 1rem 2rem;
  font-size: 28px;

  &:focus {
    border-bottom: 1px solid ${palette.gray[7]};
  }
`;

const ContentBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 30rem;
`;

const UploadButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 4px;
  margin-bottom: 3rem;
  float: right;
`;

const WriteBlock = () => {
  const { write, category, changeField, initializeCommunity } = community();
  const { title, content } = write;

  const onChange = (e) => {
    const { value, name } = e.target;
    changeField("write", name, value);
  };

  useEffect(() => {
    initializeCommunity();
  }, [initializeCommunity]);

  useEffect(() => {
    console.log(title);
    console.log(category);
    console.log(content);
  }, [title, category, content]);

  return (
    <Responsive>
      <WriteDiv>
        <TitleInput
          name="title"
          placeholder="제목"
          onChange={onChange}
          value={title}
        />
        <WriteCategory changeCategory={changeField} />
        <ContentBlock>
          <WriteContent changeField={changeField} />
        </ContentBlock>
      </WriteDiv>
      <input type="file" />
      <UploadButton
        lightorange
        onClick={() => {
          console.log({
            title,
            category,
            content,
          });
        }}
      >
        <UploadIcon />
        업로드
      </UploadButton>
      <div style={{ clear: "both" }}></div>
    </Responsive>
  );
};

export default WriteBlock;
