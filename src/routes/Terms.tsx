import useGetSettings from "@/hooks/useGetSettings";

export default function Terms() {
  const { data } = useGetSettings();

  return (
    <div
      className="container mx-auto px-4 py-8 prose prose-gray max-w-3xl"
      dangerouslySetInnerHTML={{ __html: data?.data.terms ?? "" }}
    />
  );
}
