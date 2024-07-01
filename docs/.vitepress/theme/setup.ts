import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";

export default () => {
  // plugin: vitepress-plugin-image-viewer
  const route = useRoute();
  imageViewer(route, ".vp-doc", {
    title: true,
    navbar: true,
    toolbar: true,
  });
};
