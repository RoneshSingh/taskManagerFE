"use client";

export default function Page({ params }: { params: { id: number } }) {
  return <div className="bg-black text-white">My Post: {params.id}</div>;
}
