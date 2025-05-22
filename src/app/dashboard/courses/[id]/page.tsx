import CourseDetails from "@/components/dashboard/courses/CourseDetail";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CourseDetails id={id} />;
}
