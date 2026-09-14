import { Helmet } from "react-helmet-async";

export default function Title({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
