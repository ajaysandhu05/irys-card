import React, { useState, useRef } from 'react';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
  type PixelCrop,
} from 'react-image-crop';

interface ImageCropModalProps {
    uncroppedImage: string;
    onApply: (croppedImage: string) => void;
    onCancel: () => void;
}

// This helper function is recommended by the `react-image-crop` documentation.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

const ImageCropModal: React.FC<ImageCropModalProps> = ({ uncroppedImage, onApply, onCancel }) => {
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const imgRef = useRef<HTMLImageElement>(null);
    const aspect = 4 / 5;

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const { width, height } = e.currentTarget;
        setCrop(centerAspectCrop(width, height, aspect));
    }

    const getCroppedImg = (image: HTMLImageElement, crop: PixelCrop): Promise<string> => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return Promise.reject('Could not get canvas context');
        }

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve) => {
            resolve(canvas.toDataURL('image/png'));
        });
    };

    const handleApply = async () => {
        if (completedCrop && imgRef.current) {
            try {
                const croppedImageUrl = await getCroppedImg(imgRef.current, completedCrop);
                onApply(croppedImageUrl);
            } catch (e) {
                console.error('Error cropping image:', e);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-lg text-white shadow-2xl shadow-purple-500/20">
                <h3 className="font-orbitron text-xl font-bold mb-4 text-center">Crop Your Image</h3>
                <div className="flex justify-center bg-black/20 p-2 rounded-lg">
                    <ReactCrop
                        crop={crop}
                        onChange={c => setCrop(c)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspect}
                        className="max-w-full"
                    >
                        <img 
                            ref={imgRef} 
                            src={uncroppedImage} 
                            onLoad={onImageLoad} 
                            alt="Crop preview" 
                            style={{ maxHeight: '60vh' }}
                        />
                    </ReactCrop>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={onCancel} className="px-6 py-2 bg-gray-700/50 border border-gray-600 rounded-md font-semibold hover:bg-gray-600/50 transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleApply} className="px-6 py-2 bg-purple-600/80 border border-purple-500 rounded-md font-semibold hover:bg-purple-500/80 transition-colors">
                        Crop & Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropModal;