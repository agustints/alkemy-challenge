import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="manifest"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`}
          />
          <link
            rel="apple-touch-icon"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/icon.png`}
          ></link>
          <meta content="mascoty" name="author"></meta>
          <meta content="mascoty" name="copyright"></meta>
          <meta name="theme-color" content="#fff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta
            name="keywords"
            content="mascoty,Mascoty,MascotyApp,Mascotas,Uruguay,mascoty app,adopciones,canelones,adopcion responsable,castraciones,adoptar,animales, animales canelones,rescate,vidas,salvando vidas"
          ></meta>
          <meta name="language" content="Spanish"></meta>
          <meta name="robots" content="index"></meta>
          <link
            rel="shortcut icon"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/icon.png`}
            type="image/png"
          ></link>
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}`}
          ></link>
          <meta name="MobileOptimized" content="width"></meta>
          <meta name="HandheldFriendly" content="true"></meta>
          {/* apple splash screen images */}
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple_splash.png"
            sizes="640x1136"
          />
          {/* apple splash screen images */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v12.0"
            nonce="1NFIF3Dz"
          ></script>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";

    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (
      persistedColorPreference == "light" ||
      persistedColorPreference == "dark"
    ) {
      return persistedColorPreference;
    } else {
      return "light";
    }
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty("--initial-color-mode", colorMode);

  // add HTML attribute if dark mode
  if (colorMode == "dark")
    document.documentElement.setAttribute("data-theme", "dark");
}
