import { useEffect, useRef } from "react";

export default function CameraPreview() {
  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream =
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(
          "Camera access failed:",
          error
        );
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-xl border border-[#2F3D4B] bg-[#151B22] shadow-xl">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* LIVE */}
      <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-[#2F3D4B] bg-[#151B22]/90 px-4 py-2 text-sm font-semibold text-white">
        <span className="text-red-500">
          ●
        </span>

        LIVE
      </div>

      {/* HD */}
      <div className="absolute bottom-5 right-5 rounded-lg border border-[#2F3D4B] bg-[#151B22]/90 px-4 py-2 text-sm text-[#C7CDD4]">
        HD Camera
      </div>

    </div>
  );
}