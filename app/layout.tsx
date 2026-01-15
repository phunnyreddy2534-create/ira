import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "IRA – Student Project Marketplace",
  description: "Build · Learn · Earn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
