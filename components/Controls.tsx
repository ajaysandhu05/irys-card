
import React, { useRef } from 'react';

interface ControlsProps {
  onReset: () => void;
  onDownload: () => void;
  onImageUpload: (image: string) => void;
}

const ControlButton: React.FC<{ onClick?: () => void, children: React.ReactNode, title: string }> = ({ onClick, children, title }) => (
    <button
        onClick={onClick}
        title={title}
        className="h-14 w-14 bg-black/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 hover:border-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform hover:scale-110"
    >
        {children}
    </button>
);


const Controls: React.FC<ControlsProps> = ({ onReset, onDownload, onImageUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onImageUpload(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
        event.target.value = '';
    };

    const triggerFileUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                accept="image/*"
                className="hidden"
            />
            <ControlButton onClick={onReset} title="Reset Card">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </ControlButton>
            <ControlButton onClick={onDownload} title="Download Card">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </ControlButton>
            <ControlButton onClick={triggerFileUpload} title="Upload Image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </ControlButton>
        </>
    );
};

export default Controls;
