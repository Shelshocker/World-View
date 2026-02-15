import { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe2, ZoomIn, ZoomOut, Info, Play, Pause } from 'lucide-react';
import { Globe3D } from './components/Globe3D';
import { CameraViewer } from './components/CameraViewer';
import { CameraStream } from './data/cameraStreams';

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="#1e40af" wireframe />
    </mesh>
  );
}

function App() {
  const [selectedLocation, setSelectedLocation] = useState<CameraStream | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleMarkerClick = useCallback((location: CameraStream) => {
    setSelectedLocation(location);
    setIsRotating(false);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setSelectedLocation(null);
    setIsRotating(true);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-lg rounded-full border border-white/10">
            <Globe2 className="text-indigo-400" size={24} />
            <span className="text-white font-bold text-lg">World Cams</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 px-4 bg-black/30 backdrop-blur-lg rounded-full hover:bg-black/50 transition-colors border border-white/10"
          >
            <Info className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Info Panel */}
      {showInfo && (
        <div className="absolute top-20 right-4 z-20 w-80 bg-black/90 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold text-lg mb-3">🌍 World Cams</h3>
          <p className="text-gray-300 text-sm mb-4">
            Explore live cameras from iconic locations around the world on an interactive 3D globe.
          </p>
          
          <h4 className="text-white font-semibold mb-2">📱 How to Install</h4>
          <ol className="text-gray-400 text-sm space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-indigo-400 font-bold">1.</span>
              Tap the Share button in Safari
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-400 font-bold">2.</span>
              Scroll down and tap "Add to Home Screen"
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-400 font-bold">3.</span>
              Tap "Add" to install as an app
            </li>
          </ol>

          <h4 className="text-white font-semibold mb-2">🎮 Controls</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Drag to rotate the globe</li>
            <li>• Pinch to zoom</li>
            <li>• Tap pink markers to view cameras</li>
          </ul>
        </div>
      )}

      {/* Stats */}
      <div className="absolute bottom-24 left-4 z-10">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-lg rounded-full border border-white/10">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-sm">20 live cameras worldwide</span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          title={isRotating ? 'Stop rotation' : 'Auto rotate'}
        >
          {isRotating ? (
            <Pause className="text-white" size={20} />
          ) : (
            <Play className="text-white" size={20} />
          )}
        </button>
        <div className="w-px h-6 bg-white/20" />
        <button
          onClick={() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
              const currentZoom = canvas.style.transform;
              canvas.style.transform = 'scale(1.2)';
              setTimeout(() => canvas.style.transform = currentZoom, 100);
            }
          }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="text-white" size={20} />
        </button>
        <button
          onClick={() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
              const currentZoom = canvas.style.transform;
              canvas.style.transform = 'scale(0.8)';
              setTimeout(() => canvas.style.transform = currentZoom, 100);
            }
          }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="text-white" size={20} />
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
          <Globe3D 
            onMarkerClick={handleMarkerClick} 
            isRotating={isRotating} 
          />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={7}
            maxDistance={20}
            rotateSpeed={0.5}
            zoomSpeed={0.5}
            autoRotate={isRotating}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Camera Viewer Modal */}
      {selectedLocation && (
        <CameraViewer 
          location={selectedLocation} 
          onClose={handleCloseViewer} 
        />
      )}
    </div>
  );
}

export default App;
