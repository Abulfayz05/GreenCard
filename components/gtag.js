import Script from "next/script";

function Gtag() {
  return (
    <div className="container">
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1NFFPW8P4G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1NFFPW8P4G');
        `}
      </Script>
    </div>
  );
}

export default Gtag;
