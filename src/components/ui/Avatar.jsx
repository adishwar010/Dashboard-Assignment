export default function Avatar({ src, alt = 'avatar' }) {
  return (
    <img
      src={src}
      alt={alt}
      className="size-8 rounded-full object-cover ring-1 ring-white/10"
      loading="lazy"
    />
  );
}
