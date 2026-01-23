TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE",
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
     "hfovMax": 120,
     "pitch": 0,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270",
        "hfovMax": 120,
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE",
           "hfovMax": 120,
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270",
             "yaw": 7.71,
             "distance": 1,
             "backwardYaw": -51.7
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "006",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "class": "ImageResourceLevel",
                "width": 3000,
                "url": "media/panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_hq.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270, this.camera_FA3F2B2C_EB8E_3BCD_41D2_CD6C8D04C931); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_E46C032B_EB97_CBF8_41E2_9A63FA3E806C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.08,
                 "yaw": 7.71,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 29,
                    "class": "ImageResourceLevel",
                    "width": 25,
                    "url": "media/panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -7.21
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 7.71,
                 "hfov": 6.08,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 51,
                    "url": "media/panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -7.21
                }
               ]
              }
             ]
            }
           ],
           "thumbnailUrl": "media/panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_t.jpg"
          },
          "yaw": -51.7,
          "distance": 1,
          "backwardYaw": 7.71
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
          "yaw": -87.25,
          "distance": 1,
          "backwardYaw": 114.11
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533",
           "hfovMax": 120,
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270",
             "yaw": 24.42,
             "distance": 1,
             "backwardYaw": 105.31
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "007",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "class": "ImageResourceLevel",
                "width": 3000,
                "url": "media/panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_hq.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270, this.camera_FA151B12_EB8E_3BD5_41DB_4EEA314F90C4); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_E423E3E3_EB96_4A6E_41D2_FADCE743FFB0",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.27,
                 "yaw": 24.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 31,
                    "class": "ImageResourceLevel",
                    "width": 30,
                    "url": "media/panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.48
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 24.42,
                 "hfov": 7.27,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 62,
                    "class": "ImageResourceLevel",
                    "width": 61,
                    "url": "media/panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -10.48
                }
               ]
              }
             ]
            }
           ],
           "thumbnailUrl": "media/panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_t.jpg"
          },
          "yaw": 105.31,
          "distance": 1,
          "backwardYaw": 24.42
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "004",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "class": "ImageResourceLevel",
             "width": 3000,
             "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE, this.camera_F99E7B63_EB8E_3A7B_41DC_F99729E43BE8); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_E45ECFAD_EBF2_FAEB_41E1_11D68E6A8FBC",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.87,
              "yaw": -87.25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -16.89
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -87.25,
              "hfov": 5.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 51,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -16.89
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE, this.camera_F9EC5B5D_EB8E_3A4F_41D2_95DA44B28F5D); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "id": "overlay_FBCCB8E6_EB96_C676_41E3_663DAC6BBBAD",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.33,
              "yaw": -51.7,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 36,
                 "class": "ImageResourceLevel",
                 "width": 39,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.09
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -51.7,
              "hfov": 9.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 78,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -7.09
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533, this.camera_F9913B68_EB8E_3A75_41DC_5BBA78F3EB07); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "id": "overlay_FB8EE419_EB91_CDDA_41E7_1B5676E0C102",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.38,
              "yaw": 105.31,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 26,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -1.81
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 105.31,
              "hfov": 6.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 53,
                 "url": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -1.81
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_t.jpg"
       },
       "yaw": 114.11,
       "distance": 1,
       "backwardYaw": -87.25
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530",
        "hfovMax": 120,
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
          "yaw": 43.39,
          "distance": 1,
          "backwardYaw": 125.54
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "003",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "class": "ImageResourceLevel",
             "width": 3000,
             "url": "media/panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE, this.camera_F9FD2B58_EB8E_3A55_41E8_E32A6A356A20); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_E4A34C36_EBF3_DDF9_41B3_E9D9F5DB8A14",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.08,
              "yaw": 43.39,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.09
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 43.39,
              "hfov": 7.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "class": "ImageResourceLevel",
                 "width": 59,
                 "url": "media/panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -7.09
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_t.jpg"
       },
       "yaw": 125.54,
       "distance": 1,
       "backwardYaw": 43.39
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE",
       "yaw": -146.79,
       "distance": 1,
       "backwardYaw": 16.88
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C",
        "hfovMax": 120,
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
          "yaw": 163.72,
          "distance": 1,
          "backwardYaw": -21.68
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "002",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "class": "ImageResourceLevel",
             "width": 3000,
             "url": "media/panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE, this.camera_F9808B6C_EB8E_3A4D_41EC_3154E7F742D2); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_E4E3E16D_EBF1_C669_41E2_10170FA0E0FF",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.04,
              "yaw": 163.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 27,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -26.56
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 163.72,
              "hfov": 5.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -26.56
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_t.jpg"
       },
       "yaw": -21.68,
       "distance": 1,
       "backwardYaw": 163.72
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "001",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "class": "ImageResourceLevel",
          "width": 3000,
          "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C, this.camera_F9C86B53_EB8E_3A5B_41E9_5625FAA087A7); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_E6EAF866_EB97_C5DC_41B8_9F68F0A12A42",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.76,
           "yaw": -21.68,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "class": "ImageResourceLevel",
              "width": 25,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.03
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -21.68,
           "hfov": 5.76,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 51,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -20.03
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE, this.camera_F9D9EB4C_EB8E_3A4D_41DA_A10FA3A1B064); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_E671B391_EB96_CB77_41E3_ECB341E2C089",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.73,
           "yaw": -146.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "class": "ImageResourceLevel",
              "width": 29,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -19.52
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -146.79,
           "hfov": 6.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -19.52
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530, this.camera_FA24DB41_EB8E_3BB7_41E9_3BDA12DD1EE9); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "id": "overlay_E677BDE0_EB96_7ED6_41D6_45459EE79728",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.61,
           "yaw": 125.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 26,
              "class": "ImageResourceLevel",
              "width": 23,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.83
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 125.54,
           "hfov": 5.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -4.83
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270, this.camera_FA33BB37_EB8E_3BDB_41EC_167E932870CE); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "id": "overlay_E5BD66B0_EB91_CAB7_41B7_F27B8F54AAFC",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.37,
           "yaw": 114.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "class": "ImageResourceLevel",
              "width": 26,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.32
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 114.11,
           "hfov": 6.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "class": "ImageResourceLevel",
              "width": 53,
              "url": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -4.32
          }
         ]
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_t.jpg"
    },
    "yaw": 16.88,
    "distance": 1,
    "backwardYaw": -146.79
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57",
     "hfovMax": 120,
     "pitch": 0,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE",
       "yaw": -170.03,
       "distance": 1,
       "backwardYaw": 44.27
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "005",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "class": "ImageResourceLevel",
          "width": 3000,
          "url": "media/panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE, this.camera_FA089B1D_EB8E_3BCF_41D0_75D76B7727E9); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_E46ED52C_EBF1_CFE9_41CE_9540C655171E",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.89,
           "yaw": -170.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 29,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.94
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -170.03,
           "hfov": 7.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "class": "ImageResourceLevel",
              "width": 65,
              "url": "media/panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -1.94
          }
         ]
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_t.jpg"
    },
    "yaw": 44.27,
    "distance": 1,
    "backwardYaw": -170.03
   }
  ],
  "vfov": 180,
  "partial": false,
  "label": "000",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1500,
       "class": "ImageResourceLevel",
       "width": 3000,
       "url": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_hq.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE, this.camera_FA616AFD_EB8E_3A4F_41D8_C3EE7B7942B7); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_E7D24ADF_EB93_FAC1_41D9_07AE852700C0",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.12,
        "yaw": 16.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.38
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 16.88,
        "hfov": 6.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 48,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -16.38
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57, this.camera_FA1ABB07_EB8E_3BBB_41EA_24A94E2A8C92); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_E6F666F0_EB92_4ADF_41D0_6211F3BD43A3",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.33,
        "yaw": 44.27,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.47
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 44.27,
        "hfov": 5.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44,
           "url": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -7.47
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_t.jpg"
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E179AC42_EB8E_DD38_41D4_78265E829FCE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E6E15CF3_EB96_DEB5_41E6_0F5416AED4CE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E49217D5_EBBE_CA95_416A_BE2A389C876C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E51581C9_EBF6_46A9_41E0_D9D022B83530_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E4D783D4_EBF6_4ABF_41D2_5CE5BB812270_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E626A5E1_EBF6_4E99_41E6_EE5ACB03AD57_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E4A50F8D_EB96_DABB_41DB_7553A7D6F2FE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533",
    "camera": "this.panorama_E4666113_EB96_C7AF_41C1_252A3F4A1533_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.21,
   "pitch": 0
  },
  "id": "camera_FA616AFD_EB8E_3A4F_41D8_C3EE7B7942B7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.97,
   "pitch": 0
  },
  "id": "camera_FA1ABB07_EB8E_3BBB_41EA_24A94E2A8C92",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.69,
   "pitch": 0
  },
  "id": "camera_FA151B12_EB8E_3BD5_41DB_4EEA314F90C4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.73,
   "pitch": 0
  },
  "id": "camera_FA089B1D_EB8E_3BCF_41D0_75D76B7727E9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.3,
   "pitch": 0
  },
  "id": "camera_FA3F2B2C_EB8E_3BCD_41D2_CD6C8D04C931",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.75,
   "pitch": 0
  },
  "id": "camera_FA33BB37_EB8E_3BDB_41EC_167E932870CE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.61,
   "pitch": 0
  },
  "id": "camera_FA24DB41_EB8E_3BB7_41E9_3BDA12DD1EE9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.12,
   "pitch": 0
  },
  "id": "camera_F9D9EB4C_EB8E_3A4D_41DA_A10FA3A1B064",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.28,
   "pitch": 0
  },
  "id": "camera_F9C86B53_EB8E_3A5B_41E9_5625FAA087A7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.46,
   "pitch": 0
  },
  "id": "camera_F9FD2B58_EB8E_3A55_41E8_E32A6A356A20",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.29,
   "pitch": 0
  },
  "id": "camera_F9EC5B5D_EB8E_3A4F_41D2_95DA44B28F5D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.89,
   "pitch": 0
  },
  "id": "camera_F99E7B63_EB8E_3A7B_41DC_F99729E43BE8",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.58,
   "pitch": 0
  },
  "id": "camera_F9913B68_EB8E_3A75_41DC_5BBA78F3EB07",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.32,
   "pitch": 0
  },
  "id": "camera_F9808B6C_EB8E_3A4D_41EC_3154E7F742D2",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderSize": 0,
  "progressBorderRadius": 0,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "minHeight": 50,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "width": "100%",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipBorderRadius": 3,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3
 }
], 
 "class": "Player",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingTop": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "scrollBarWidth": 10,
 "width": "100%",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "creationPolicy": "delayed",
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player451"
 },
 "layout": "absolute",
 "paddingBottom": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})