import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import { AppProvider } from "./context/AppContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}