import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { lightThemee, darkThemee } from "../theme";
import { ThemeModeProvider, useInitializeDarkMode } from "../UseDarkMode";
import { ToastContainer } from "react-toastify";
import NextNprogress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function MyApp({ Component, pageProps }) {
  const [isDarkMode, toggleMode] = useInitializeDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkThemee : lightThemee}>
      <ThemeModeProvider isDarkMode={isDarkMode} toggleMode={toggleMode}>
        <QueryClientProvider client={queryClient}>
          <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <ToastContainer />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
