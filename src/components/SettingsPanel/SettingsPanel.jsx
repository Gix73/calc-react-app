import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../constants/constants";
import { toggleTheme } from "../../store/slices/ThemeSlice";
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
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const [themeName, setThemeName] = useState(currentTheme);

  function setTheme() {
    if (themeName === "Light Theme") {
      dispatch(toggleTheme(theme.colors.light));
    }
    if (themeName === "Dark Theme") {
      dispatch(toggleTheme(theme.colors.dark));
    }
    if (themeName === "Colored Theme") {
      dispatch(toggleTheme(theme.colors.colored));
    }
  }

  useEffect(() => {
    setTheme();
  });

  return (
    <SettingsPWrapper>
      <SettingsHeader>Settings</SettingsHeader>
      <Text>Switch Theme</Text>
      <SettingsContainer>
        <SelectThemeWrapper>
          <SelectTheme
            value={themeName}
            onChange={(e) => {
              setThemeName(e.target.value);
            }}
          >
            <option value="Light Theme">Light Theme</option>
            <option value="Colored Theme">Colored Theme</option>
            <option value="Dark Theme">Dark Theme</option>
          </SelectTheme>
        </SelectThemeWrapper>
        <ClearButton>Clear All History</ClearButton>
      </SettingsContainer>
    </SettingsPWrapper>
  );
};

export default SettingsPanel;
