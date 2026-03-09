export function createPageUrl(pageName = "") {
  const normalized = String(pageName).trim().toLowerCase();

  const routeMap = {
    home: "/",
    about: "/about",
    services: "/services",
    gallery: "/gallery",
    reviews: "/reviews",
    blog: "/blog",
    contact: "/contact",
    terms: "/terms",
    beforeafter: "/before-after",
    "before/after": "/before-after",
    servicearea: "/service-area",
    "service area": "/service-area",

    fullservice: "/services/full-service",
    "full service": "/services/full-service",

    interiordetail: "/services/interior-detail",
    "interior detail": "/services/interior-detail",

    exteriordetail: "/services/exterior-detail",
    "exterior detail": "/services/exterior-detail",

    paintcorrectionceramic: "/services/paint-correction-ceramic",
    "paint correction ceramic": "/services/paint-correction-ceramic",
    "paint correction & ceramic": "/services/paint-correction-ceramic",
    "paint correction + ceramic": "/services/paint-correction-ceramic",

    alacarte: "/services/a-la-carte",
    "a la carte": "/services/a-la-carte",
    "à la carte": "/services/a-la-carte",
  };

  return routeMap[normalized] || "/";
}