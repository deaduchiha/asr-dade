import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";

const APP_NAME = "asr-dade";
const APP_DEFAULT_TITLE = "Asr Dade";
const APP_TITLE_TEMPLATE = "Asr Dade - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.rubik.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
