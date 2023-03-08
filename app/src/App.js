import { RouterProvider } from "react-router-dom";
import { UserLoginProvider } from "./context/usuario/useGlobalUser";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./layout/styles/themes/default";
import { GlobalStyle } from "./layout/styles/global";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserLoginProvider>
        <RouterProvider router={router} />
      </UserLoginProvider>
      <GlobalStyle />
    </ThemeProvider>

  );
}

export default App;
