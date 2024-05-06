import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.BizSwap.JFCTD',
  appName: 'BizSwap',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    //url:'http://localhost:4200', //for local debugging
  }
};

export default config;
