import useGetSettings from "@/hooks/useGetSettings";

export default function Privacy() {
  const { data } = useGetSettings();

  return (
    <div
      className="container mx-auto px-4 py-8 prose prose-gray max-w-6xl"
      dangerouslySetInnerHTML={{ __html: data?.data.terms ?? "" }}
    />
  );
}
