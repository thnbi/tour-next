function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            font-size: 2rem;
            font-family: sans-serif;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
