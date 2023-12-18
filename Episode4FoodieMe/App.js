import React from "react";
import ReactDOM from "react-dom/client";

// Header
//    -Logo
//    -Navitems
// Body 
//    -Search
//    -Res Card 
//    -Card Container 
//    -Restuarant Container
//        -image
//        -name,star rating cuisine, delivery time
// Footer
//    -Copyright
//    -Disclaimer
//    -Address & Name of the Company  


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src="https://pbs.twimg.com/profile_images/2895050464/e450886d7a7a3b738d2d0443d5410d95_400x400.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
//we can give style as a js object.
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const resObj = // 20231217160327
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CKFTEOwkKICgmJSphZXvDTDCDjgD",
      "widgetOffset": {
        "restaurantCountWidget": "",
        "inlineFacetFilter": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83645",
            "title": "North Indian",
            "description": "Indulge with the best of North Indian cuisines.",
            "imageId": "v1674029942/PC_Creative%20refresh/3D_bau/collections_new/North_Indian.png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "454 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 454,
            "facetList": [
              {
                "label": "Veg/Non-veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Pure veg",
                    "id": "isVegfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery3",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by"
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery3",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by"
              },
              {
                "label": "Cost for two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Rs. 300-Rs. 600",
                    "id": "costForTwofacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery4",
                    "analytics": {
                      
                    }
                  },
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery5",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "top": 20,
                "right": 16,
                "bottom": 16
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "454 restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "316859",
              "name": "Jalandhari Vibes",
              "cloudinaryImageId": "yzzyihsdvti17p3cmelt",
              "locality": "Golf Course",
              "areaName": "Sector 45",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian",
                "Mughlai",
                "Biryani"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "316859",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 6500
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 6500
              },
              "parentId": "109271",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=9992587~p=1~eid=0000018c-7756-80ef-1a74-29ab00030107~srvts=1702809207023~83645",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-17 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=316859&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "591764",
              "name": "Imperfecto",
              "cloudinaryImageId": "87f428ecaf14a7153bbb6ed5570c287f",
              "locality": "Logix City Centre",
              "areaName": "Sector 32",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Continental",
                "Asian",
                "Kebabs"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "591764",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4800
              },
              "parentId": "239216",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=9734159~p=2~eid=0000018c-7756-80ef-1a74-29ac00030250~srvts=1702809207023~83645",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-18 00:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=591764&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "735170",
              "name": "Chaat Street - Desi Chaat & Chai",
              "cloudinaryImageId": "0b2d768141a3d15440dbf03026d43099",
              "locality": "Golf Course",
              "areaName": "Sector 49",
              "costForTwo": "₹270 for two",
              "cuisines": [
                "Snacks",
                "Chaat",
                "Street Food",
                "North Indian",
                "Fast Food"
              ],
              "avgRating": 3.9,
              "veg": true,
              "feeDetails": {
                "restaurantId": "735170",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 6600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 6600
              },
              "parentId": "5635",
              "avgRatingString": "3.9",
              "totalRatingsString": "100+",
              "promoted": true,
              "adTrackingId": "cid=9656118~p=3~eid=0000018c-7756-80ef-1a74-29ad0003030c~srvts=1702809207023~83645",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-17 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=735170&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "453660",
              "name": "Express By Ab's",
              "cloudinaryImageId": "za7w9owlxah8re0cubmc",
              "locality": "Golf Course",
              "areaName": "Sector 38",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Kebabs",
                "Biryani"
              ],
              "avgRating": 4.8,
              "feeDetails": {
                "restaurantId": "453660",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4800
              },
              "parentId": "10320",
              "avgRatingString": "4.8",
              "totalRatingsString": "10+",
              "promoted": true,
              "adTrackingId": "cid=9958205~p=4~eid=0000018c-7756-80ef-1a74-29ae00030465~srvts=1702809207023~83645",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-17 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=453660&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "677932",
              "name": "Goila Butter Chicken",
              "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
              "locality": "Aghapur",
              "areaName": "Noida Sec 41",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Biryani",
                "Kebabs",
                "Desserts"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "677932",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 6100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 6100
              },
              "parentId": "322587",
              "avgRatingString": "4.2",
              "totalRatingsString": "100+",
              "promoted": true,
              "adTrackingId": "cid=9893606~p=5~eid=0000018c-7756-80ef-1a74-29af00030573~srvts=1702809207023~83645",
              "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "43 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-18 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                    "description": "gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                          "description": "gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=677932&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "20621",
              "name": "Kapoors Balle Balle",
              "cloudinaryImageId": "qtbhqyecb4tqfx4rmgcr",
              "locality": "Brahmaputra Shopping Complex",
              "areaName": "Sector 29",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Snacks"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                "restaurantId": "20621",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4100
              },
              "parentId": "3721",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-17 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=20621&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "291139",
              "name": "JSB Evergreen Snacks & Sweets",
              "cloudinaryImageId": "gla3lho2btvce1zcr7pi",
              "locality": "Brahmaputra Shopping Complex",
              "areaName": "Sector 29",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Sweets"
              ],
              "avgRating": 4.3,
              "veg": true,
              "feeDetails": {
                "restaurantId": "291139",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3600
              },
              "parentId": "111702",
              "avgRatingString": "4.3",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-17 22:30:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "description": "",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=291139&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "71ecc026-db08-445f-8879-f8cc8110e7bf",
  "sid": "b2f82872-8e48-4e17-b6ae-1025deaa760a",
  "deviceId": "793046ed-477b-9f04-9558-0f9cda0cda1b",
  "csrfToken": "DYBTrhiZy5mX-SgoA61EHjM70cozbcO8shOnSJvI"
};

const RestuarantCard = (props) => {
    console.log(props);
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
             <img className="res-logo" alt="res-card" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/etvxd3obobx5neaja47o"></img>
     
            <h3 className="">{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>38 mins ETA</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
            <RestuarantCard resName="Meghna Food" cuisine="Chicken, North India, Asain"/>
            <RestuarantCard resName="KFC" cuisine="Burger, Fast Food, "/>
            {/* <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard />
            <RestuarantCard /> */}
                
            </div>


        </div>
    )
}
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)