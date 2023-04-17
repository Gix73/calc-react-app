import styled from "styled-components";

export const SettingsPWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px 50px;
`;

export const SettingsHeader = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 200px;
  width: 100%;
`;

export const SelectTheme = styled.select`
  width: 100%;
  appearance: none;
  border: 1.5px solid black;
  border-radius: 5px;
  font-size: 17px;
  padding: 15px 40px 15px 15px;
  outline: none;
  cursor: pointer;
`;

export const SelectThemeWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 13px 7.5px 0 7.5px;
    border-color: #4b4b4bb2 transparent transparent transparent;
    pointer-events: none;
  }
`;

export const ClearButton = styled.button`
  width: 100%;
  border: 1.5px solid black;
  border-radius: 5px;
  font-size: 17px;
  padding: 15px 40px 15px 15px;
  text-align: left;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 20px;
`;
