import Box from "./Box";
import Button from "./Button";

function App() {
  return (
    <>
      <Box />
      <Box />
      <Button backgroundColor="primary" borderRadius="hard" />
      <Button backgroundColor="secondary" borderRadius="hard" />
      <Button backgroundColor="primary" borderRadius="smooth" />
      <Button backgroundColor="secondary" borderRadius="circle" />
      <Button backgroundColor="secondary" borderRadius="circle" />
      <Button backgroundColor="secondary" borderRadius="smooth" />
    </>
  );
}

export default App;
