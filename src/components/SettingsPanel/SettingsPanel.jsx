import {
  ClearButton,
  SelectTheme,
  SelectThemeWrapper,
  SettingsContainer,
  SettingsHeader,
  SettingsPWrapper,
  Text,
} from "./styled";

const SettingsPanel = () => {
  return (
    <SettingsPWrapper>
      <SettingsHeader>Settings</SettingsHeader>
      <Text>Switch Theme</Text>
      <SettingsContainer>
        <SelectThemeWrapper>
          <SelectTheme>
            <option value="light">Light Theme</option>
            <option value="colored">Colored Theme</option>
            <option value="dark">Dark Theme</option>
          </SelectTheme>
        </SelectThemeWrapper>
        <ClearButton>Clear All History</ClearButton>
      </SettingsContainer>
    </SettingsPWrapper>
  );
};

export default SettingsPanel;
