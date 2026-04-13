import ImageCard from "./ImageCard";

export default function ImageGrid({ images }: any) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {images.map((img: any) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}