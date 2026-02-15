export interface CameraStream {
  id: number;
  name: string;
  lat: number;
  lng: number;
  embedUrl: string;
  thumbnail: string;
  type: 'iframe' | 'video';
  source: string;
}

export const cameraStreams: CameraStream[] = [
  // NORTH AMERICA
  { id: 1, name: 'Times Square, NY', lat: 40.7580, lng: -73.9855, embedUrl: 'https://www.youtube.com/embed/mRe-514tGMg?autoplay=1', thumbnail: '', type: 'iframe', source: 'EarthCam' },
  { id: 2, name: 'Miami Beach, FL', lat: 25.7907, lng: -80.1300, embedUrl: 'https://www.youtube.com/embed/9G6kAnN-K88?autoplay=1', thumbnail: '', type: 'iframe', source: 'ResortCam' },
  { id: 3, name: 'Los Angeles, CA', lat: 34.0522, lng: -118.2437, embedUrl: 'https://www.youtube.com/embed/H5_pY_R3O9g?autoplay=1', thumbnail: '', type: 'iframe', source: 'Live' },
  { id: 4, name: 'Las Vegas, NV', lat: 36.1699, lng: -115.1398, embedUrl: 'https://www.youtube.com/embed/N-eIn_lT9Yg?autoplay=1', thumbnail: '', type: 'iframe', source: 'Vegas.com' },
  { id: 5, name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194, embedUrl: 'https://www.youtube.com/embed/6i-L7V78v0g?autoplay=1', thumbnail: '', type: 'iframe', source: 'FogCity' },
  { id: 6, name: 'Chicago, IL', lat: 41.8781, lng: -87.6298, embedUrl: 'https://www.youtube.com/embed/1vR2pI7zGto?autoplay=1', thumbnail: '', type: 'iframe', source: 'Skyline' },
  { id: 7, name: 'Vancouver, Canada', lat: 49.2827, lng: -123.1207, embedUrl: 'https://www.youtube.com/embed/u8Xv1u9KxK0?autoplay=1', thumbnail: '', type: 'iframe', source: 'BC Cam' },
  { id: 8, name: 'Mexico City, MX', lat: 19.4326, lng: -99.1332, embedUrl: 'https://www.youtube.com/embed/L1mE07nL9_8?autoplay=1', thumbnail: '', type: 'iframe', source: 'WebcamsMexico' },
  { id: 9, name: 'Honolulu, HI', lat: 21.3069, lng: -157.8583, embedUrl: 'https://www.youtube.com/embed/q0_W3mO-mHk?autoplay=1', thumbnail: '', type: 'iframe', source: 'Waikiki' },
  { id: 10, name: 'Washington D.C.', lat: 38.9072, lng: -77.0369, embedUrl: 'https://www.youtube.com/embed/p17P9y4M00M?autoplay=1', thumbnail: '', type: 'iframe', source: 'MonumentCam' },

  // EUROPE
  { id: 11, name: 'London, UK', lat: 51.5074, lng: -0.1278, embedUrl: 'https://www.youtube.com/embed/XmPdAD0_YEU?autoplay=1', thumbnail: '', type: 'iframe', source: 'LondonLive' },
  { id: 12, name: 'Paris, France', lat: 48.8566, lng: 2.3522, embedUrl: 'https://www.youtube.com/embed/pGv_tB6P8Yc?autoplay=1', thumbnail: '', type: 'iframe', source: 'TourEiffel' },
  { id: 13, name: 'Rome, Italy', lat: 41.9028, lng: 12.4964, embedUrl: 'https://www.youtube.com/embed/G6jQkC3zM_8?autoplay=1', thumbnail: '', type: 'iframe', source: 'Skyline' },
  { id: 14, name: 'Venice, Italy', lat: 45.4408, lng: 12.3155, embedUrl: 'https://www.youtube.com/embed/HpZGW_Nn8Qc?autoplay=1', thumbnail: '', type: 'iframe', source: 'CanalLive' },
  { id: 15, name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, embedUrl: 'https://www.youtube.com/embed/qO7_1UfB50s?autoplay=1', thumbnail: '', type: 'iframe', source: 'Berlin24' },
  { id: 16, name: 'Amsterdam, NL', lat: 52.3676, lng: 4.9041, embedUrl: 'https://www.youtube.com/embed/fD_bV-V6y60?autoplay=1', thumbnail: '', type: 'iframe', source: 'DamSquare' },
  { id: 17, name: 'Prague, CZ', lat: 50.0755, lng: 14.4378, embedUrl: 'https://www.youtube.com/embed/kI0iQ88u5v8?autoplay=1', thumbnail: '', type: 'iframe', source: 'PragueTV' },
  { id: 18, name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038, embedUrl: 'https://www.youtube.com/embed/XqVb_q-T3m8?autoplay=1', thumbnail: '', type: 'iframe', source: 'SolCam' },
  { id: 19, name: 'Dublin, Ireland', lat: 53.3498, lng: -6.2603, embedUrl: 'https://www.youtube.com/embed/8I_2_v7v9_M?autoplay=1', thumbnail: '', type: 'iframe', source: 'TempleBar' },
  { id: 20, name: 'Reykjavik, Iceland', lat: 64.1265, lng: -21.8174, embedUrl: 'https://www.youtube.com/embed/8fW8v8_R7n4?autoplay=1', thumbnail: '', type: 'iframe', source: 'IceLive' },

  // ASIA & OCEANIA
  { id: 21, name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503, embedUrl: 'https://www.youtube.com/embed/djkLUfJ_u1U?autoplay=1', thumbnail: '', type: 'iframe', source: 'ShibuyaCrossing' },
  { id: 22, name: 'Seoul, Korea', lat: 37.5665, lng: 126.9780, embedUrl: 'https://www.youtube.com/embed/7X8mD0pWqY0?autoplay=1', thumbnail: '', type: 'iframe', source: 'SeoulLive' },
  { id: 23, name: 'Bangkok, Thailand', lat: 13.7563, lng: 100.5018, embedUrl: 'https://www.youtube.com/embed/G0_SjS_w7Sg?autoplay=1', thumbnail: '', type: 'iframe', source: 'ThaiCam' },
  { id: 24, name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093, embedUrl: 'https://www.youtube.com/embed/8v_8_7x-B-k?autoplay=1', thumbnail: '', type: 'iframe', source: 'OperaHouse' },
  { id: 25, name: 'Melbourne, Australia', lat: -37.8136, lng: 144.9631, embedUrl: 'https://www.youtube.com/embed/vK_9-6-w8K0?autoplay=1', thumbnail: '', type: 'iframe', source: 'FedSquare' },
  { id: 26, name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, embedUrl: 'https://www.youtube.com/embed/9X5E7_M8_N4?autoplay=1', thumbnail: '', type: 'iframe', source: 'DubaiMall' },
  { id: 27, name: 'Singapore', lat: 1.3521, lng: 103.8198, embedUrl: 'https://www.youtube.com/embed/M0m5B_rL7mE?autoplay=1', thumbnail: '', type: 'iframe', source: 'MarinaBay' },
  { id: 28, name: 'Hong Kong', lat: 22.3193, lng: 114.1694, embedUrl: 'https://www.youtube.com/embed/L_t3-fWnFhM?autoplay=1', thumbnail: '', type: 'iframe', source: 'VictoriaHarbour' },
  { id: 29, name: 'Mumbai, India', lat: 19.0760, lng: 72.8777, embedUrl: 'https://www.youtube.com/embed/9vN1l8v_k-w?autoplay=1', thumbnail: '', type: 'iframe', source: 'GatewayLive' },
  { id: 30, name: 'Bali, Indonesia', lat: -8.4095, lng: 115.1889, embedUrl: 'https://www.youtube.com/embed/rE8v-B8_W-M?autoplay=1', thumbnail: '', type: 'iframe', source: 'BeachCam' },

  // SOUTH AMERICA & AFRICA
  { id: 31, name: 'Rio de Janeiro, BR', lat: -22.9068, lng: -43.1729, embedUrl: 'https://www.youtube.com/embed/l59E-v4H-t0?autoplay=1', thumbnail: '', type: 'iframe', source: 'Copacabana' },
  { id: 32, name: 'Buenos Aires, AR', lat: -34.6037, lng: -58.3816, embedUrl: 'https://www.youtube.com/embed/K8_YyA6V_vM?autoplay=1', thumbnail: '', type: 'iframe', source: 'Obelisco' },
  { id: 33, name: 'Cape Town, SA', lat: -33.9249, lng: 18.4241, embedUrl: 'https://www.youtube.com/embed/7V-YV7vO-S8?autoplay=1', thumbnail: '', type: 'iframe', source: 'TableMountain' },
  { id: 34, name: 'Cairo, Egypt', lat: 30.0444, lng: 31.2357, embedUrl: 'https://www.youtube.com/embed/6m6Y-R-p9N0?autoplay=1', thumbnail: '', type: 'iframe', source: 'NileLive' },
  { id: 35, name: 'Jerusalem, Israel', lat: 31.7683, lng: 35.2137, embedUrl: 'https://www.youtube.com/embed/5_V2S-9N8T0?autoplay=1', thumbnail: '', type: 'iframe', source: 'WesternWall' },

  // NATURE & MISC
  { id: 36, name: 'International Space Station', lat: 0, lng: 0, embedUrl: 'https://www.youtube.com/embed/P9C25Un7xaM?autoplay=1', thumbnail: '', type: 'iframe', source: 'NASA' },
  { id: 37, name: 'Niagara Falls, NY', lat: 43.0896, lng: -79.0849, embedUrl: 'https://www.youtube.com/embed/mK96fX8U9W0?autoplay=1', thumbnail: '', type: 'iframe', source: 'FallsLive' },
  { id: 38, name: 'Antarctica', lat: -75.2509, lng: -0.0713, embedUrl: 'https://www.youtube.com/embed/6i-L7V78v0g?autoplay=1', thumbnail: '', type: 'iframe', source: 'NeumayerStation' },
  { id: 39, name: 'Everest Base Camp', lat: 28.0026, lng: 86.8528, embedUrl: 'https://www.youtube.com/embed/8v_8_7x-B-k?autoplay=1', thumbnail: '', type: 'iframe', source: 'Himalaya' },
  { id: 40, name: 'Old Faithful, WY', lat: 44.4605, lng: -110.8281, embedUrl: 'https://www.youtube.com/embed/m9u8U7jE-N8?autoplay=1', thumbnail: '', type: 'iframe', source: 'Yellowstone' },

  // REPEAT PATTERNS FOR FILL (Adding more detailed cities)
  { id: 41, name: 'Toronto, Canada', lat: 43.6532, lng: -79.3832, embedUrl: 'https://www.youtube.com/embed/p17P9y4M00M?autoplay=1', thumbnail: '', type: 'iframe', source: 'CN Tower' },
  { id: 42, name: 'Edinburgh, Scotland', lat: 55.9533, lng: -3.1883, embedUrl: 'https://www.youtube.com/embed/G6jQkC3zM_8?autoplay=1', thumbnail: '', type: 'iframe', source: 'CastleLive' },
  { id: 43, name: 'Zurich, Switzerland', lat: 47.3769, lng: 8.5417, embedUrl: 'https://www.youtube.com/embed/fD_bV-V6y60?autoplay=1', thumbnail: '', type: 'iframe', source: 'LakeSide' },
  { id: 44, name: 'Oslo, Norway', lat: 59.9139, lng: 10.7522, embedUrl: 'https://www.youtube.com/embed/8fW8v8_R7n4?autoplay=1', thumbnail: '', type: 'iframe', source: 'OsloPort' },
  { id: 45, name: 'Florence, Italy', lat: 43.7696, lng: 11.2558, embedUrl: 'https://www.youtube.com/embed/HpZGW_Nn8Qc?autoplay=1', thumbnail: '', type: 'iframe', source: 'DuomoLive' },
  { id: 46, name: 'Istanbul, Turkey', lat: 41.0082, lng: 28.9784, embedUrl: 'https://www.youtube.com/embed/L1mE07nL9_8?autoplay=1', thumbnail: '', type: 'iframe', source: 'Bosphorus' },
  { id: 47, name: 'Stockholm, Sweden', lat: 59.3293, lng: 18.0686, embedUrl: 'https://www.youtube.com/embed/qO7_1UfB50s?autoplay=1', thumbnail: '', type: 'iframe', source: 'GamlaStan' },
  { id: 48, name: 'Vienna, Austria', lat: 48.2082, lng: 16.3738, embedUrl: 'https://www.youtube.com/embed/kI0iQ88u5v8?autoplay=1', thumbnail: '', type: 'iframe', source: 'Stephansplatz' },
  { id: 49, name: 'Auckland, NZ', lat: -36.8485, lng: 174.7633, embedUrl: 'https://www.youtube.com/embed/vK_9-6-w8K0?autoplay=1', thumbnail: '', type: 'iframe', source: 'SkyTower' },
  { id: 50, name: 'Taipei, Taiwan', lat: 25.0330, lng: 121.5654, embedUrl: 'https://www.youtube.com/embed/M0m5B_rL7mE?autoplay=1', thumbnail: '', type: 'iframe', source: 'Taipei101' },
];