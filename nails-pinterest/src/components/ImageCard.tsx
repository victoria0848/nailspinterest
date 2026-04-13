export default function ImageCard({ image }: any) {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
    </div>
  );
}