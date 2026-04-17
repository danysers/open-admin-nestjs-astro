interface ImageCellProps {
  value?: string;
  width?: number;
  height?: number;
}

export function ImageCell({ value, width = 40, height = 40 }: ImageCellProps) {
  if (!value) return <span className="text-gray-400 text-xs">No image</span>;
  return <img src={value} alt="" style={{ width, height, objectFit: 'cover' }} className="rounded" />;
}
