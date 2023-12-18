import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

/* This hook helps us to warm up the browser (specifically for Android) 
when we do the sign in so the browser comes up faster. This can significantly 
improve the performance on Android. Runs once in the beginning warmUpAsync to 
warm up the browser and runs coolDownAsync when we are done */
export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
