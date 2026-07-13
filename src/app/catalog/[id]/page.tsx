import CamperDetailsPage from "@/components/camper/CamperDetailsPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <CamperDetailsPage camperId={id} />;
}
