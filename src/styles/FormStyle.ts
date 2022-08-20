import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  width: 640px;
`;
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 640px;
  height: 60px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(226, 111, 111, 1);
  background: linear-gradient(0deg, #f5e9e9, #f5e9e9);
  margin-bottom: 27px;
`;
export const ExclamationSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgba(238, 101, 101, 1);
  background: rgba(255, 200, 200, 1);
`;
export const TextError = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-left: 14px;
`;
export const ButtonSubmit = styled.input<{ $loading: boolean }>`
  font-size: 18px;
  font-weight: 700;
  padding: 0;
  width: 100%;
  height: 60px;
  color: white;
  border-radius: 8px;
  margin-top: 40px;
  border: none;
  background-color: ${(props) => (props.$loading ? "rgba(153, 169, 255, 1)" : "rgba(74, 103, 255, 1)")};
  transition: opacity 400ms;
  cursor: ${(props) => (props.$loading ? "default" : "pointer")};
  &:hover {
    opacity: ${(props) => (props.$loading ? "1" : "0.9")};
  }
`;
