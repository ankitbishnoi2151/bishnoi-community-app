import "./globals.css";

export const metadata = {
  title: "Bishnoi Community",
  description: "Heritage, history, environment and community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
