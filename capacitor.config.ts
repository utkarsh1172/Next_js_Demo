import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecom.app',
  appName: 'e-com',
  webDir: 'out',
  bundledWebRuntime: false,
  server:{
    url : "http://192.168.0.198:3000",
    cleartext:true
  }
};

export default config;
