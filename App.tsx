import { Dashboard } from "@/app/dashboard";
import theme from "@/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
