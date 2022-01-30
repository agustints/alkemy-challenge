import { Container } from "./styles";
import { useLoading, Puff } from "@agney/react-loading";
export default function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="150" className="loading__animation" />,
  });

  return (
    <Container>
      <section {...containerProps}>{indicatorEl}</section>
    </Container>
  );
}
