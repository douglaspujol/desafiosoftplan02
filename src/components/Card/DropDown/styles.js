import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  div.options {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    align-items: flex-start;
    width: 186px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    position:absolute;
    padding: 10px 10px 16px 10px;
    left:-40px;
    top:20px;
    p {
      font-size: 14px;
      margin-bottom: 5px;a
    }
  }
`;

export const MenuDropDown = styled.button`
  display: ${(props) => (props.tagsLength ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border: none;
  background: #fff;
  margin: 0 20px;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  transition: background 0.2s;
  &:hover {
    background: #eaeaea;
  }
  svg {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 25px;
  width: 167px;

  font-size: 12px;
  color: #ffffff;
  padding: 5px;
  background: ${(props) => props.buttonColor || ' #01ae76'};
`;
