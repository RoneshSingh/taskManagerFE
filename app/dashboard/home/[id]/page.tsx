"use client";

export default function Page({ params }: { params: { slug: number } }) {
  return <div className="bg-black text-white">My Post: {params.slug}</div>;
}
