const Box = (props: { text: string }) => {
  return <div style={{ width: "100px", height: "100px", backgroundColor: "pink" }}>{props.text}</div>;
};

export default Box;
