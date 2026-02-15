export interface CameraLocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
  thumbnail?: string;
  streamUrl?: string;
}

export interface GlobeProps {
  onMarkerClick: (location: CameraLocation) => void;
  isRotating: boolean;
}
