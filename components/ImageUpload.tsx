import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  onChange: (url: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  label,
  value,
  disabled,
}) => {
  const [image, setImage] = useState(value);

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{
        sources: ['local'],
      }}
      onSuccess={(result: any) => {
        const url = result.info.secure_url;
        setImage(url);
        onChange(url);
      }}
    >
      {({ open }) => (
        <div
          onClick={() => !disabled && open()}
          className="w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral cursor-pointer"
        >
          {image ? (
            <div className="flex items-center justify-center">
              <Image
                src={image}
                height={100}
                width={100}
                alt="Uploaded image"
              />
            </div>
          ) : (
            <p>{label}</p>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
}
export default ImageUpload;
