import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.worldcams.app',
  appName: 'WorldCams',
  webDir: 'dist',
  server: {
    // This makes the iPhone think your app is a real HTTPS website
    iosScheme: 'https',
    androidScheme: 'https',
    allowNavigation: [
      'www.youtube.com',
      '*.youtube.com',
      '*.googlevideo.com',
      '*.ytimg.com'
    ]
  },
  ios: {
    contentInset: 'always'
  }
};

export default config;