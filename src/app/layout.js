import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "الأسهم المالية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Michroma&display=swap" rel="stylesheet" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
          {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
          a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
          r.src=n;var u=t.getElementsByTagName(s)[0];
          u.parentNode.insertBefore(r,u);})(window,document,
          'https://sc-static.net/scevent.min.js');
          snaptr('init', '03b3a34a-843a-4551-b798-0e4c7c78eb2d', {});
          snaptr('track', 'PAGE_VIEW');
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );

}
