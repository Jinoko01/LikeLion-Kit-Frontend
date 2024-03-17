import styled from "styled-components";
import palette from "../../lib/styles/palette";
import SelectBox from "../common/SelectBox";

const CategoryBlock = styled.div`
  width: 80%;
  margin: 1rem auto;
  border: 1px solid ${palette.gray[5]};
  border-radius: 20px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

const CategorySelect = styled.div`
  width: 15%;
  margin-left: 2rem;
`;

const WriteCategory = ({ changeCategory }) => {
  return (
    <CategoryBlock>
      <label>카테고리</label>
      <CategorySelect>
        <SelectBox
          options={["프론트엔드", "백엔드"]}
          type={"category"}
          name={"track"}
          placeholder={"트랙"}
          changeField={changeCategory}
        />
      </CategorySelect>
      <CategorySelect>
        <SelectBox
          options={["Assign", "Study", "Inquire"]}
          type={"category"}
          name={"group"}
          placeholder={"분류"}
          changeField={changeCategory}
        />
      </CategorySelect>
    </CategoryBlock>
  );
};

export default WriteCategory;
