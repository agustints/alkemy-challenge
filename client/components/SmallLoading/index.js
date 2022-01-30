import { useLoading, Puff } from "@agney/react-loading";
export default function SmallLoading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="150" className="loading__animation" />,
  });

  return <section {...containerProps}>{indicatorEl}</section>;
}
