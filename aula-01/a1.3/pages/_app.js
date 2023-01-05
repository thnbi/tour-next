function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: #f5f5f5;
            color: #332;
            font-size: 1.2rem;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
