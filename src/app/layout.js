import "./globals.css";

export const metadata = {
  title: "VRFK Dashboard",
  description: "VRFK Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
