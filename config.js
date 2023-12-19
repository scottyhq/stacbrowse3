module.exports = {
    catalogUrl: null,
    catalogTitle: "STAC Browser",
    allowExternalAccess: true, // Must be true if catalogUrl is not given
    allowedDomains: [],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
//      "de-CH",
        "es",
        "en",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => {
        let assetKey = asset.getKey();
        if (assetKey.startsWith("gamma0")) {
          return "https://titiler.xyz/cog/tiles/{z}/{x}/{y}@2x?url={url}&expression=sqrt(b1)&rescale=0,1";
        } 
//        else if (asset.key == "incidence") {
//          return "https://titiler.xyz/cog/tiles/{z}/{x}/{y}@2x?url={url}&expression=b1*0.01&rescale=0,90&cmap=viridis";
//        }
        else {
          return "https://titiler.xyz/cog/tiles/{z}/{x}/{y}@2x?url={url}&expression=b1*0.01&colormap_name=viridis&rescale=0,90";
        }
      },
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showThumbnailsAsAssets: false,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    preprocessSTAC: null,
    authConfig: null
};
