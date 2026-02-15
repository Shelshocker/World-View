import { Camera, X, Globe, Play, Pause, Volume2, VolumeX, ExternalLink, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CameraStream } from '../data/cameraStreams';

interface CameraViewerProps {
  location: CameraStream;
  onClose: () => void;
}

export function CameraViewer({ location, onClose }: CameraViewerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [location.id]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in zoom-in-95 duration-300">
      {/* Immersive Header (Clean Display) */}
      <div className="absolute top-0 left-0 right-0 z-[110] p-6 pt-12 flex items-start justify-between bg-gradient-to-b from-black/90 via-black/40 to-transparent">
        <div className="flex gap-4">
          <div className="p-3 bg-indigo-500/20 rounded-2xl backdrop-blur-md border border-indigo-500/30">
            <Camera className="text-indigo-400" size={24} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-white text-xl font-bold tracking-tight">{location.name}</h2>
              <span className="px-2 py-0.5 bg-red-500 text-[10px] font-black uppercase rounded text-white animate-pulse">Live</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm mt-1">
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                <span>{location.lat.toFixed(2)}, {location.lng.toFixed(2)}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>{location.source}</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="p-3 bg-white/5 hover:bg-white/10 active:scale-95 rounded-full border border-white/10 backdrop-blur-md transition-all group"
        >
          <X size={24} className="text-slate-300 group-hover:text-white" />
        </button>
      </div>

      {/* Main Fullscreen Player Area */}
      <div className="flex-1 relative bg-slate-950 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-slate-950">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full border-t-indigo-500 animate-spin" />
              <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500/50" size={20} />
            </div>
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase">Connecting to Stream...</p>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center bg-slate-950">
            <AlertCircle size={48} className="text-red-500 mb-4" />
            <h3 className="text-white text-xl font-bold">Signal Lost</h3>
            <p className="text-slate-400 mt-2 mb-8">Connection to {location.name} was interrupted.</p>
            <button onClick={onClose} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold">Return to Globe</button>
          </div>
        )}

        <div className="w-full h-full">
          {location.type === 'video' ? (
            <video
              src={location.embedUrl}
              className="w-full h-full object-cover"
              autoPlay={isPlaying}
              muted={isMuted}
              playsInline
              onCanPlay={handleIframeLoad}
              onError={handleIframeError}
            />
          ) : (
            <iframe
              ref={iframeRef}
              src={`${location.embedUrl}${location.embedUrl.includes('?') ? '&' : '?'}autoplay=1&mute=${isMuted ? 1 : 0}`}
              className="w-full h-full border-none pointer-events-auto"
              allow="autoplay; fullscreen; encrypted-media"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
      </div>

      {/* Control Bar (Floating Style) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[110] px-6 py-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center gap-8 shadow-2xl">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 text-slate-300 hover:text-white transition-colors">
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-slate-300 hover:text-white transition-colors">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
        <div className="h-4 w-[1px] bg-white/10" />
        <div className="flex flex-col min-w-[80px]">
          <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Status</span>
          <span className="text-xs text-green-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> ONLINE
          </span>
        </div>
        <button 
          onClick={() => window.open(location.embedUrl, '_blank')}
          className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl hover:bg-indigo-600/30 transition-all border border-indigo-500/20"
        >
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}