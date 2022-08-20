import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #1f1f1f;
`;
export const LabelСheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #1f1f1f;
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
  }
  & > span::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 4px;
    border: 3px solid #fff;
    outline: 1px solid rgba(0, 0, 0, 1);
    margin-right: 14px;
    box-sizing: border-box;
  }
  & > input:checked + span::before {
    background: rgba(74, 103, 255, 1);
  }
`;
export const TextError = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 20px;
  color: rgba(226, 111, 111, 1);
`;
export const Сheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 20px;
  height: 20px;
`;
export const TextInput = styled.input<{ error: boolean }>`
  width: 100%;
  height: 60px;
  border: ${(props) => (props.error ? "1px solid rgba(226, 111, 111, 1)" : "none")};
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: ${(props) => (props.error ? "0px" : "20px")};
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #232323;
  &:focus {
    outline: none;
  }
`;
