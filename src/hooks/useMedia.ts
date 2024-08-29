import { mediaMobile, mediaTablet, mediaUnits, mediaWeb } from "@globals/media";
import { ref } from "vue";

function useMedia(sizeQuery: string) {
  const mediaQueryList = window.matchMedia(sizeQuery);
  const sw = ref<boolean>(mediaQueryList.matches);
  mediaQueryList.addEventListener('change', (event) => {
    sw.value = event.matches;
  });
  return sw;
}

function useMediaWeb () {
  return useMedia(`(min-width: ${mediaWeb}${mediaUnits})`);
}

function useMediaTablet () {
  return useMedia(`(min-width: ${mediaTablet}${mediaUnits}) and (max-width: ${mediaWeb - 1}${mediaUnits})`);
}

function useMediaMobile () {
  return useMedia(`(min-width: ${mediaMobile}${mediaUnits}) and (max-width: ${mediaTablet - 1}${mediaUnits})`);
}

export {
  useMedia,
  useMediaWeb,
  useMediaTablet,
  useMediaMobile
}