var globe
require([
  "esri/views/SceneView",
  "esri/WebScene",
  "dojo/domReady!"
],
function(
  SceneView, WebScene
) {
  var scene = new WebScene({
		portalItem: {
		  id: "ee0e96bbdcf64e489b9a7065d2855e18"
		}
  });
  globe = new SceneView({
		map: scene,
		container: "arcgis-map"
  })
});
