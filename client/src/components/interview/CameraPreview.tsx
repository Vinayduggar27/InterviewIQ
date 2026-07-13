import { useEffect, useRef } from "react";

export default function CameraPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(error);
      }
    }

    startCamera();
  }, []);

  return (
    <div className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute top-5 left-5 bg-red-600 px-3 py-1 rounded-full font-semibold">
        ● LIVE
      </div>

      <div className="absolute bottom-5 right-5 bg-black/70 px-3 py-1 rounded-lg">
        HD Camera
      </div>

    </div>
  );
}