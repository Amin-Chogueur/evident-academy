import React from "react";

type BackgroundImageProps = {
  imageKey:
    | "handsOnCourses"
    | "contactUs"
    | "followUs"
    | "evidenceAcademy"
    | "conferences"
    | "onlineCourses";
};

export default function BackgroundImage({ imageKey }: BackgroundImageProps) {
  const bgImage = {
    handsOnCourses: "bg-[url('/pic2.jpg')]",
    contactUs: "bg-[url('/ContactUs.jpg')]",
    followUs: "bg-[url('/FollowUs.jpg')]",
    evidenceAcademy: "bg-[url('/EvidenceAcademy.jpg')]",
    conferences: "bg-[url('/DentalConferences1.jpg')]",
    onlineCourses: "bg-[url('/pic3.jpg')]",
  }[imageKey];
  let position;
  if (imageKey === "contactUs" || imageKey === "evidenceAcademy") {
    position = "bg-bottom";
  } else {
    position = "bg-center";
  }
  return (
    <>
      <div
        className={`${bgImage} bg-cover ${position} h-[300px] md:h-[400px] w-full absolute left-0 top-0`}
      />
      <div className="h-[300px] md:h-[400px] w-full" />
    </>
  );
}
