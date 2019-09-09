# An introduction to Web GIS for GEOG 4044: Computer Cartography  

Create a free account at https://www.arcgis.com  

## Exercise 1: Create a web app showing real-time earthquakes
- Follow this article on customizing a basemap https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/make-your-own-map-style
  - Go to the ArcGIS Online map viewer
  - Add the Light Gray basemap
  - Play around with colors
  - Hide water/land to imagery basemap
  - Save customizations and return to the map viewer
- Add other layers over the basemap
  - Search the Living Atlas for "demographics" and add Esri demographics layer to the map
    - Symbolize the map using an attribute like Baby Boomer population and normalize it
    - Now change the symbology based on population density at the county level
  - Add earthquake data
    - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv
    - Layer name: 4.5M+ earthquakes, past 30 days
    
## Exercise 2: Create a web app to compare imagery
- Create a map, add imagery of Pensacola 2010 (search ArcGIS Online for NAIP), save map
- Remove the 2010 NAIP, add 2017, and Save As a new map
- Share and create a web app (map comparison templates, swipe)

## Where's the data? Web services explained
- Examine the metadata for the demographics layer used in Ex. 1
  - https://www.arcgis.com/home/item.html?id=2718975e52e24286acf8c3882b7ceb18
- Go to the service URL and then to the county layer, then query at the bottom
  - https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer
  - Where: NAME = 'Livingston Parish'
  - Out Fields: NAME,TOTPOP_CY
  - [Query results](https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AGOL_Base_2018_Final/FeatureServer/2/query?where=NAME+%3D+%27Livingston+Parish%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CTOTPOP_CY&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=)
