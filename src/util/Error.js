function Error({ children }) {
  try {
    return <>{children}</>;
  } catch (err) {
    <p>{err.message}</p>;
  }
}

export default Error;
