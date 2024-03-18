import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useCallback, useEffect, useRef, useState } from "react";

const StyledSelect = styled.div`
  position: relative;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  margin-top: 1rem;
  margin-bottom: 1rem;

  &::before {
    content: "⌵";
    position: absolute;
    top: -5px;
    right: 0px;
    color: #454545;
  }

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Abril Fatface", sans-serif;
`;

const Label = styled.label`
  font-size: 1rem;
  cursor: pointer;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  z-index: 3;
  top: 1.8rem;
  left: 0;
  width: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #454545;
`;

const Option = styled.li`
  font-size: 1rem;
  padding: 0.3rem 0.4rem;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const SelectBox = ({ options, type, name, placeholder, changeField }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(placeholder);
  const ref = useRef(null);

  const handleOnChangeSelectValue = useCallback((e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  }, []);

  useEffect(() => {
    if (currentValue === "") setCurrentValue(placeholder);
  }, [currentValue, placeholder]);

  useEffect(() => {
    if (currentValue === placeholder) return;

    changeField(type, name, currentValue);
  }, [changeField, name, type, currentValue, placeholder]);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsShowOptions(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, isShowOptions]);

  return (
    <StyledSelect onClick={() => setIsShowOptions((prev) => !prev)} ref={ref}>
      <Label>{currentValue}</Label>
      <SelectOptions show={isShowOptions}>
        {options.map((element) => (
          <Option onClick={handleOnChangeSelectValue}>{element}</Option>
        ))}
      </SelectOptions>
    </StyledSelect>
  );
};

export default SelectBox;
