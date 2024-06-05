"use client";

export default function GenerateMoreButton({ offset }) {
  return (
    <button
      className="btn"
      onClick={() => {
        console.log(offset);
        offset += 20;
      }}
    >
      Generate More
    </button>
  );
}
