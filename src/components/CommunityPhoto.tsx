type CommunityPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function CommunityPhoto({ src, alt, className = '', imageClassName = '' }: CommunityPhotoProps) {
  return (
    <div className={`hud-panel scanline overflow-hidden rounded-[2rem] p-3 ${className}`}>
      <img src={src} alt={alt} className={`h-full w-full rounded-[1.5rem] object-cover ${imageClassName}`} />
    </div>
  );
}
