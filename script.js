TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_342712F0_3EFE_F042_41B4_D312D542A615",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "id": "panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
     "partial": false,
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "id": "panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F",
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
          "class": "AdjacentPanorama",
          "backwardYaw": -31.35,
          "yaw": 157.19
         }
        ],
        "label": "003",
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3, this.camera_3339502B_3F12_4590_41C7_27C6871B5B54); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_2ED3C639_3F03_D3C2_41C7_67F627E9C002",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.5,
              "yaw": 157.19,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "width": 25,
                 "url": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -26.18
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 157.19,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 51,
                 "url": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -26.18
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_2DE6A57B_3F02_5047_41CA_C16298E2CB2D",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.87,
              "yaw": 137.97,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 24,
                 "url": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.94
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 137.97,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "width": 49,
                 "url": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.94
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_t.jpg"
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 157.19,
       "yaw": -31.35
      },
      {
       "distance": 1,
       "panorama": {
        "id": "panorama_35785849_3EFE_3043_41C7_AE1D74246493",
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "id": "panorama_35174466_3EFE_704E_41C8_CB01BB654A29",
           "partial": false,
           "pitch": 0,
           "hfovMax": 120,
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_35785849_3EFE_3043_41C7_AE1D74246493",
             "class": "AdjacentPanorama",
             "backwardYaw": 105.56,
             "yaw": 23.04
            },
            {
             "distance": 1,
             "panorama": {
              "id": "panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8",
              "partial": false,
              "pitch": 0,
              "hfovMax": 120,
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29",
                "class": "AdjacentPanorama",
                "backwardYaw": -167.64,
                "yaw": -11.13
               }
              ],
              "label": "010",
              "vfov": 180,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 1500,
                   "width": 3000,
                   "url": "media/panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29, this.camera_35C8E04E_3F12_4590_41AA_034E6461A020); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_2E86CCD5_3F02_5042_41BA_46D01B86A743",
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.76,
                    "yaw": -11.13,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 26,
                       "width": 27,
                       "url": "media/panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -29.7
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -11.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.76,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 52,
                       "width": 55,
                       "url": "media/panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -29.7
                   }
                  ]
                 }
                ]
               }
              ],
              "thumbnailUrl": "media/panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_t.jpg"
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -11.13,
             "yaw": -167.64
            }
           ],
           "label": "009",
           "vfov": 180,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "width": 3000,
                "url": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_35785849_3EFE_3043_41C7_AE1D74246493, this.camera_35E3D05D_3F12_45B0_4196_598A3C39D061); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_2E186AFD_3F02_5042_41AB_64390DE5DBD3",
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 6.5,
                 "yaw": 23.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 31,
                    "width": 27,
                    "url": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -11.48
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 23.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 62,
                    "width": 55,
                    "url": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -11.48
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8, this.camera_35ED7062_3F12_4590_41C4_59ADBDAFE7BA); this.mainPlayList.set('selectedIndex', 10)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_2D0A0B19_3F03_D1C2_419E_1CC47C54F605",
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.36,
                 "yaw": -167.64,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 26,
                    "width": 23,
                    "url": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -17.89
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -167.64,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "width": 46,
                    "url": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -17.89
                }
               ]
              }
             ]
            }
           ],
           "thumbnailUrl": "media/panorama_35174466_3EFE_704E_41C8_CB01BB654A29_t.jpg"
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 23.04,
          "yaw": 105.56
         },
         {
          "distance": 1,
          "panorama": "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
          "class": "AdjacentPanorama",
          "backwardYaw": 115.36,
          "yaw": -87.5
         },
         {
          "distance": 1,
          "panorama": {
           "id": "panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0",
           "partial": false,
           "pitch": 0,
           "hfovMax": 120,
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_35785849_3EFE_3043_41C7_AE1D74246493",
             "class": "AdjacentPanorama",
             "backwardYaw": 72.03,
             "yaw": 10.35
            },
            {
             "distance": 1,
             "panorama": {
              "id": "panorama_354CA180_3EFE_70C2_41C2_73E61A646926",
              "partial": false,
              "pitch": 0,
              "hfovMax": 120,
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0",
                "class": "AdjacentPanorama",
                "backwardYaw": -171.84,
                "yaw": -9.49
               }
              ],
              "label": "008",
              "vfov": 180,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_354CA180_3EFE_70C2_41C2_73E61A646926_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 1500,
                   "width": 3000,
                   "url": "media/panorama_354CA180_3EFE_70C2_41C2_73E61A646926_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0, this.camera_35C53048_3F12_4590_41C5_A678A27D0E98); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_2FDF22BA_3F02_D0C6_41CA_38DF71782B6B",
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 6.81,
                    "yaw": -9.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 31,
                       "width": 28,
                       "url": "media/panorama_354CA180_3EFE_70C2_41C2_73E61A646926_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -8.47
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -9.49,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 62,
                       "width": 57,
                       "url": "media/panorama_354CA180_3EFE_70C2_41C2_73E61A646926_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -8.47
                   }
                  ]
                 }
                ]
               }
              ],
              "thumbnailUrl": "media/panorama_354CA180_3EFE_70C2_41C2_73E61A646926_t.jpg"
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -9.49,
             "yaw": -171.84
            }
           ],
           "label": "007",
           "vfov": 180,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "width": 3000,
                "url": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_35785849_3EFE_3043_41C7_AE1D74246493, this.camera_3464B095_3F12_46B0_41CB_BA5444F83EFE); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_3577DDD8_3EFF_F042_41BC_36717306BB05",
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 7.23,
                 "yaw": 10.35,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 31,
                    "width": 30,
                    "url": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -11.74
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 10.35,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 62,
                    "width": 61,
                    "url": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -11.74
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_354CA180_3EFE_70C2_41C2_73E61A646926, this.camera_3493009A_3F12_46B0_41C8_02F74B674855); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_2F7DB11C_3F02_51C2_41CB_1AACE4CC9908",
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 6.69,
                 "yaw": -171.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 28,
                    "width": 28,
                    "url": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -9.58
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -171.84,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.69,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 56,
                    "width": 56,
                    "url": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -9.58
                }
               ]
              }
             ]
            }
           ],
           "thumbnailUrl": "media/panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_t.jpg"
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 10.35,
          "yaw": 72.03
         }
        ],
        "label": "005",
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0, this.camera_340CA072_3F12_4670_41BC_7446F94886FE); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_2F0460F2_3F07_D041_41AC_320B93B4D56C",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.59,
              "yaw": 72.03,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 27,
                 "width": 23,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.96
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 72.03,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 54,
                 "width": 46,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.96
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29, this.camera_34179067_3F12_4590_4187_7DC8A174E6DB); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_30ED6249_3F06_3042_417F_9554CE99D891",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.34,
              "yaw": 105.56,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "width": 22,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.84
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 105.56,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.34,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 44,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.84
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3, this.camera_3402506D_3F12_4590_41C8_F433366B3878); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_2D8C398F_3F06_D0DE_4194_F12D466367BA",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 6.52,
              "yaw": -87.5,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 30,
                 "width": 27,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.61
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -87.5,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.52,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 60,
                 "width": 55,
                 "url": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.61
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_35785849_3EFE_3043_41C7_AE1D74246493_t.jpg"
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -87.5,
       "yaw": 115.36
      },
      {
       "distance": 1,
       "panorama": "this.panorama_342712F0_3EFE_F042_41B4_D312D542A615",
       "class": "AdjacentPanorama",
       "backwardYaw": 16.88,
       "yaw": -148.29
      },
      {
       "distance": 1,
       "panorama": {
        "id": "panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E",
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
          "class": "AdjacentPanorama",
          "backwardYaw": 125.91,
          "yaw": 43.01
         }
        ],
        "label": "004",
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3, this.camera_35F0B053_3F12_45B0_41A3_F9B2A1CD3540); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_30DC41DD_3F06_5043_41C5_EDD482D9A62B",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.85,
              "yaw": 43.01,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "width": 24,
                 "url": "media/panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.08
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 43.01,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 49,
                 "url": "media/panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.08
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_t.jpg"
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 43.01,
       "yaw": 125.91
      }
     ],
     "label": "002",
     "vfov": 180,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "width": 3000,
          "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_342712F0_3EFE_F042_41B4_D312D542A615, this.camera_342FF081_3F12_4690_41B5_E86E3753F91C); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_2EB9DF80_3F02_30C2_41BC_C0464F078159",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.39,
           "yaw": -148.29,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "width": 23,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -16.76
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -148.29,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.39,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "width": 46,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -16.76
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F, this.camera_3437C077_3F12_4670_41CC_80D08B8D69BF); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_2EB9EF80_3F02_30C2_41AF_3A1352FA5170",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.55,
           "yaw": -31.35,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 26,
              "width": 24,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -19.4
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -31.35,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "width": 49,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -19.4
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E, this.camera_345AC086_3F12_4690_41BF_A69DC7448920); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_2EB9FF80_3F02_30C2_419A_98180B2DEAB4",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.32,
           "yaw": 125.91,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 29,
              "width": 22,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.47
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 125.91,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "width": 44,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.47
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_35785849_3EFE_3043_41C7_AE1D74246493, this.camera_3422D07C_3F12_4670_41C7_7F37F9A01371); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_2EB90F80_3F02_30C2_41B7_4D6C051AA47D",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.84,
           "yaw": 115.36,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 21,
              "width": 24,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -6.84
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 115.36,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.84,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 43,
              "width": 49,
              "url": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -6.84
          }
         ]
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_t.jpg"
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -148.29,
    "yaw": 16.88
   },
   {
    "distance": 1,
    "panorama": {
     "id": "panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2",
     "partial": false,
     "pitch": 0,
     "hfovMax": 120,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "id": "panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A",
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2",
          "class": "AdjacentPanorama",
          "backwardYaw": 164.22,
          "yaw": -168.77
         }
        ],
        "label": "006",
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2, this.camera_35F97058_3F12_45B0_41C8_EEB0CDC75805); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_2F503965_3F06_5043_4199_8EF953ABF474",
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 6.73,
              "yaw": -168.77,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 29,
                 "width": 28,
                 "url": "media/panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -12.24
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -168.77,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.73,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "width": 57,
                 "url": "media/panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -12.24
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_t.jpg"
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -168.77,
       "yaw": 164.22
      },
      {
       "distance": 1,
       "panorama": "this.panorama_342712F0_3EFE_F042_41B4_D312D542A615",
       "class": "AdjacentPanorama",
       "backwardYaw": 44.27,
       "yaw": -103.2
      }
     ],
     "label": "001",
     "vfov": 180,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "width": 3000,
          "url": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A, this.camera_33289031_3F12_45F0_41C3_3BDEB32A694E); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_33778538_3EFD_D1C1_41B5_226594AC7940",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.03,
           "yaw": 164.22,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "width": 21,
              "url": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.36
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 164.22,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "width": 42,
              "url": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.36
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_342712F0_3EFE_F042_41B4_D312D542A615, this.camera_33563036_3F12_45F0_41AD_DF5555C665CA); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_31391600_3F02_33C1_41CC_E49A76BF1160",
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 7.3,
           "yaw": -103.2,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "width": 30,
              "url": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.85
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -103.2,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.3,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "width": 61,
              "url": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.85
          }
         ]
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_t.jpg"
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -103.2,
    "yaw": 44.27
   }
  ],
  "label": "000",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1500,
       "width": 3000,
       "url": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3, this.camera_3448408B_3F12_4690_41C3_CF0106C589A3); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_3427E2F0_3EFE_F042_41CD_FD938490B4DF",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.12,
        "yaw": 16.88,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 24,
           "width": 26,
           "url": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -16.38
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 16.88,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 48,
           "width": 53,
           "url": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -16.38
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2, this.camera_34776090_3F12_46B0_41CF_8463EF8B2429); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_3427C2F0_3EFE_F043_41C3_7F1DED92E6AE",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 5.33,
        "yaw": 44.27,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 22,
           "url": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -7.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 44.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 44,
           "url": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_0_HS_1_0.png",
           "class": "ImageResourceLevel"
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
  "thumbnailUrl": "media/panorama_342712F0_3EFE_F042_41B4_D312D542A615_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_342712F0_3EFE_F042_41B4_D312D542A615_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2",
 {
  "id": "panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
 {
  "id": "panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F",
 {
  "id": "panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E",
 {
  "id": "panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_35785849_3EFE_3043_41C7_AE1D74246493",
 {
  "id": "panorama_35785849_3EFE_3043_41C7_AE1D74246493_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A",
 {
  "id": "panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0",
 {
  "id": "panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_354CA180_3EFE_70C2_41C2_73E61A646926",
 {
  "id": "panorama_354CA180_3EFE_70C2_41C2_73E61A646926_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29",
 {
  "id": "panorama_35174466_3EFE_704E_41C8_CB01BB654A29_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8",
 {
  "id": "panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_342712F0_3EFE_F042_41B4_D312D542A615",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_342712F0_3EFE_F042_41B4_D312D542A615_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_356F1B9B_3EFE_D0C6_41CA_896DEA2D4FC2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2EB9CF80_3F02_30C2_41BA_E7CEA8F60EC3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2E553553_3F02_7047_41CE_9BDCB5EFCC5F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3566B84B_3EFE_5047_41C8_13BACED4BE8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_35785849_3EFE_3043_41C7_AE1D74246493",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_35785849_3EFE_3043_41C7_AE1D74246493_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3576EACD_3EFF_D042_41C9_00F8AE7EC60A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3577CDD8_3EFF_F042_41B6_C93EFC1133E0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_354CA180_3EFE_70C2_41C2_73E61A646926",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_354CA180_3EFE_70C2_41C2_73E61A646926_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_35174466_3EFE_704E_41C8_CB01BB654A29_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35CB3700_3EFE_71C2_41A4_35F04AA016A8_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)"
   }
  ]
 },
 {
  "id": "camera_3339502B_3F12_4590_41C7_27C6871B5B54",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 148.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_33289031_3F12_45F0_41C3_3BDEB32A694E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 11.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_33563036_3F12_45F0_41AD_DF5555C665CA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -135.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35C53048_3F12_4590_41C5_A678A27D0E98",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 8.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35C8E04E_3F12_4590_41AA_034E6461A020",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 12.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35F0B053_3F12_45B0_41A3_F9B2A1CD3540",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -54.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35F97058_3F12_45B0_41C8_EEB0CDC75805",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -15.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35E3D05D_3F12_45B0_4196_598A3C39D061",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -74.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_35ED7062_3F12_4590_41C4_59ADBDAFE7BA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 168.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_34179067_3F12_4590_4187_7DC8A174E6DB",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -156.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3402506D_3F12_4590_41C8_F433366B3878",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -64.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_340CA072_3F12_4670_41BC_7446F94886FE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -169.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3437C077_3F12_4670_41CC_80D08B8D69BF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -22.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3422D07C_3F12_4670_41C7_7F37F9A01371",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 92.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_342FF081_3F12_4690_41B5_E86E3753F91C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -163.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_345AC086_3F12_4690_41BF_A69DC7448920",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -136.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3448408B_3F12_4690_41C3_CF0106C589A3",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 31.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_34776090_3F12_46B0_41CF_8463EF8B2429",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 76.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3464B095_3F12_46B0_41CB_BA5444F83EFE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -107.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3493009A_3F12_46B0_41C8_02F74B674855",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 170.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "class": "ViewerArea",
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "height": "100%",
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 0,
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "paddingLeft": 0,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "vrPolyfillScale": 0.5,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "class": "Player",
 "gap": 10,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "width": "100%",
 "height": "100%",
 "scrollBarWidth": 10,
 "scripts": {
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "data": {
  "name": "Player451"
 },
 "minWidth": 20,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "overflow": "visible"
})