TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "id": "panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2500,
       "class": "ImageResourceLevel",
       "width": 5000,
       "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05, this.camera_462F9B15_4AE0_DFC8_41C2_5892962FC288); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_411D9D68_4AE1_5A58_41C6_8D2E0E44199D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 44,
           "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 16.88,
        "hfov": 6.12,
        "pitch": -16.38
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
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
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 88,
           "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -16.38
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60, this.camera_4637AB0A_4AE0_DFD8_4169_2E046323D345); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_411DBD68_4AE1_5A58_41CC_CC4A91CCB84E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 44.27,
        "hfov": 5.33,
        "pitch": -7.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
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
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 74,
           "url": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_0_HS_1_0.png"
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
  "class": "Panorama",
  "label": "000",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "id": "panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60",
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2500,
          "class": "ImageResourceLevel",
          "width": 5000,
          "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28, this.camera_412B5B4A_4AE0_DE59_41B7_0A4BF8B65386); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_412E5693_4AE1_B6C8_41D0_86912E4EB2D9",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 35,
              "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "yaw": 164.22,
           "hfov": 5.03,
           "pitch": -11.36
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 71,
              "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -11.36
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8, this.camera_4134AB44_4AE0_DE49_41C0_AC777F4D6B1C); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_412EB693_4AE1_B6C8_41C4_DDB7B5DB8093",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 51,
              "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "yaw": -103.2,
           "hfov": 7.3,
           "pitch": -8.85
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 102,
              "url": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_0_HS_5_0.png"
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
     "class": "Panorama",
     "label": "001",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8",
       "yaw": -103.2,
       "backwardYaw": 44.27,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "id": "panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60, this.camera_4133FB3F_4AE0_DE37_41A5_DA15ECC98BBD); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_41258B59_4AE0_BE78_4187_C31A4ABFE16A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 48,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -168.77,
              "hfov": 6.73,
              "pitch": -12.24
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 95,
                 "url": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_0_HS_1_0.png"
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
        "class": "Panorama",
        "label": "006",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60",
          "yaw": -168.77,
          "backwardYaw": 164.22,
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_t.jpg"
       },
       "yaw": 164.22,
       "backwardYaw": -168.77,
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "vfov": 180,
     "thumbnailUrl": "media/panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_t.jpg"
    },
    "yaw": 44.27,
    "backwardYaw": -103.2,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "id": "panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2500,
          "class": "ImageResourceLevel",
          "width": 5000,
          "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8, this.camera_46E44B78_4AE0_DE38_41D1_2986534A8CD4); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_41536C59_4AE1_DA78_41C6_34BB8DD2C678",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -148.29,
           "hfov": 5.39,
           "pitch": -16.76
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 78,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -16.76
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_415E76F4_4AE1_D648_41A8_7146FB00B977, this.camera_46EB6B73_4AE0_DE48_4194_98962E0475A4); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_41537C59_4AE1_DA78_41C4_1086BA72C6D9",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 40,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": -31.35,
           "hfov": 5.55,
           "pitch": -19.4
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 86,
              "class": "ImageResourceLevel",
              "width": 81,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -19.4
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A, this.camera_46DE2B7D_4AE0_DE38_41C5_A61C238FE2FC); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_41530C59_4AE1_DA78_4190_ACE2B8EBDFEE",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 48,
              "class": "ImageResourceLevel",
              "width": 37,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": 125.91,
           "hfov": 5.32,
           "pitch": -8.47
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 74,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -8.47
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440, this.camera_46CACB82_4AE0_DEC8_41BD_53F7A6233AC8); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "enabledInCardboard": true,
         "id": "overlay_41532C59_4AE1_DA78_415A_270AF9560C38",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 36,
              "class": "ImageResourceLevel",
              "width": 40,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "yaw": 115.36,
           "hfov": 5.84,
           "pitch": -6.84
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
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
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 81,
              "url": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_0_HS_3_0.png"
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
     "class": "Panorama",
     "label": "002",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "id": "panorama_415E76F4_4AE1_D648_41A8_7146FB00B977",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05, this.camera_463FFAFF_4AE0_DE38_41A9_D4B4926C5283); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_415E56F4_4AE1_D648_41BA_1B0C1E62FDBC",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 42,
                 "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 157.19,
              "hfov": 5.5,
              "pitch": -26.18
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 85,
                 "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -26.18
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_415E26F4_4AE1_D648_41AC_D7FE803C4A1E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 41,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": 137.97,
              "hfov": 5.87,
              "pitch": -2.94
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 83,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_0_HS_2_0.png"
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
        "class": "Panorama",
        "label": "003",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
          "yaw": 157.19,
          "backwardYaw": -31.35,
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_t.jpg"
       },
       "yaw": -31.35,
       "backwardYaw": 157.19,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8",
       "yaw": -148.29,
       "backwardYaw": 16.88,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "id": "panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05, this.camera_46261B21_4AE0_DFC8_41D1_573024BFE960); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_415CB2D2_4AE1_4E48_41B3_17790207BA3A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "yaw": 43.01,
              "hfov": 5.85,
              "pitch": -6.08
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_0_HS_3_0.png"
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
        "class": "Panorama",
        "label": "004",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
          "yaw": 43.01,
          "backwardYaw": 125.91,
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_t.jpg"
       },
       "yaw": 125.91,
       "backwardYaw": 43.01,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "id": "panorama_41235FA0_4AE1_76C8_4199_EF83C9083440",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1, this.camera_41257B53_4AE0_DE4F_41A1_9BBA09CC7279); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_41237FA0_4AE1_76C8_41BE_860E01B5C2A2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 39,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 72.03,
              "hfov": 5.59,
              "pitch": -6.96
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 90,
                 "class": "ImageResourceLevel",
                 "width": 78,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -6.96
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D, this.camera_412F1B4F_4AE0_DE57_41D2_860F3C1E85F5); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_41236FA0_4AE1_76C8_41D1_2E002A2BDB31",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 37,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": 105.56,
              "hfov": 5.34,
              "pitch": -6.84
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 74,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -6.84
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05, this.camera_41191B5A_4AE0_DE78_41D2_4BC048712A80); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "enabledInCardboard": true,
            "id": "overlay_41228FA0_4AE1_76C8_41CE_94967FA0483B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "yaw": -87.5,
              "hfov": 6.52,
              "pitch": -10.61
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
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
                 "height": 100,
                 "class": "ImageResourceLevel",
                 "width": 92,
                 "url": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_0_HS_3_0.png"
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
        "class": "Panorama",
        "label": "005",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "id": "panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D",
           "pitch": 0,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2500,
                "class": "ImageResourceLevel",
                "width": 5000,
                "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440, this.camera_46F17B6E_4AE0_DE58_41CA_D9D979918A93); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "enabledInCardboard": true,
               "id": "overlay_413204DF_4AE3_4A78_416D_EB1E7D6235E2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "class": "ImageResourceLevel",
                    "width": 46,
                    "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 23.04,
                 "hfov": 6.5,
                 "pitch": -11.48
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
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
                    "height": 104,
                    "class": "ImageResourceLevel",
                    "width": 92,
                    "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -11.48
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3, this.camera_4107DB69_4AE0_DE58_4190_B5E013CBBE6D); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "enabledInCardboard": true,
               "id": "overlay_413234DF_4AE3_4A78_41D1_04CC0ECF01DA",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 39,
                    "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -167.64,
                 "hfov": 5.36,
                 "pitch": -17.89
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
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
                    "height": 86,
                    "class": "ImageResourceLevel",
                    "width": 78,
                    "url": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_0_HS_1_0.png"
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
           "class": "Panorama",
           "label": "009",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "id": "panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3",
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2500,
                   "class": "ImageResourceLevel",
                   "width": 5000,
                   "url": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D, this.camera_46130B27_4AE0_DFC8_41B3_DD6417769389); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "id": "overlay_412CFB5C_4AE3_5E78_41C3_D5248F287DC3",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -11.13,
                    "hfov": 5.76,
                    "pitch": -29.7
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
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
                       "height": 86,
                       "class": "ImageResourceLevel",
                       "width": 92,
                       "url": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_0_HS_0_0.png"
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
              "class": "Panorama",
              "label": "010",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D",
                "yaw": -11.13,
                "backwardYaw": -167.64,
                "distance": 1
               }
              ],
              "hfov": 360,
              "partial": false,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_t.jpg"
             },
             "yaw": -167.64,
             "backwardYaw": -11.13,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440",
             "yaw": 23.04,
             "backwardYaw": 105.56,
             "distance": 1
            }
           ],
           "hfov": 360,
           "partial": false,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_t.jpg"
          },
          "yaw": 105.56,
          "backwardYaw": 23.04,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "id": "panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1",
           "pitch": 0,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2500,
                "class": "ImageResourceLevel",
                "width": 5000,
                "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440, this.camera_410CBB64_4AE0_DE48_41C0_8C86B760EEAE); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "enabledInCardboard": true,
               "id": "overlay_412269AD_4AE0_FAD8_41B0_3A433C2F3916",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "class": "ImageResourceLevel",
                    "width": 51,
                    "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 10.35,
                 "hfov": 7.23,
                 "pitch": -11.74
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
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
                    "height": 104,
                    "class": "ImageResourceLevel",
                    "width": 102,
                    "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -11.74
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F, this.camera_41132B5F_4AE0_DE78_41D0_AE5AF425B2BA); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "enabledInCardboard": true,
               "id": "overlay_412219AD_4AE0_FAD8_41B7_3CFA03D2B244",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 46,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -171.84,
                 "hfov": 6.69,
                 "pitch": -9.58
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
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
                    "height": 93,
                    "class": "ImageResourceLevel",
                    "width": 94,
                    "url": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_0_HS_1_0.png"
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
           "class": "Panorama",
           "label": "007",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "id": "panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F",
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2500,
                   "class": "ImageResourceLevel",
                   "width": 5000,
                   "url": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1, this.camera_4600CB2C_4AE0_DFD8_41D1_5EC782BF4662); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "id": "overlay_41353AC5_4AE0_BE48_41CE_F337DCCB7D5D",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 52,
                       "class": "ImageResourceLevel",
                       "width": 47,
                       "url": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -9.49,
                    "hfov": 6.81,
                    "pitch": -8.47
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
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
                       "height": 104,
                       "class": "ImageResourceLevel",
                       "width": 95,
                       "url": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_0_HS_0_0.png"
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
              "class": "Panorama",
              "label": "008",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1",
                "yaw": -9.49,
                "backwardYaw": -171.84,
                "distance": 1
               }
              ],
              "hfov": 360,
              "partial": false,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_t.jpg"
             },
             "yaw": -171.84,
             "backwardYaw": -9.49,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440",
             "yaw": 10.35,
             "backwardYaw": 72.03,
             "distance": 1
            }
           ],
           "hfov": 360,
           "partial": false,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_t.jpg"
          },
          "yaw": 72.03,
          "backwardYaw": 10.35,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
          "yaw": -87.5,
          "backwardYaw": 115.36,
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_t.jpg"
       },
       "yaw": 115.36,
       "backwardYaw": -87.5,
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "vfov": 180,
     "thumbnailUrl": "media/panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_t.jpg"
    },
    "yaw": 16.88,
    "backwardYaw": -148.29,
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60",
 {
  "id": "panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
 {
  "id": "panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_415E76F4_4AE1_D648_41A8_7146FB00B977",
 {
  "id": "panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A",
 {
  "id": "panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440",
 {
  "id": "panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28",
 {
  "id": "panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1",
 {
  "id": "panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F",
 {
  "id": "panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D",
 {
  "id": "panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3",
 {
  "id": "panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_411D7D68_4AE1_5A58_41B2_72C92F15B4F8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_412E7693_4AE1_B6C8_41B4_4928C2D12E60_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_41535C59_4AE1_DA78_41CD_1B1D28436D05_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_415E76F4_4AE1_D648_41A8_7146FB00B977",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_415E76F4_4AE1_D648_41A8_7146FB00B977_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_415C92D2_4AE1_4E48_41A7_790E1E17772A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_41235FA0_4AE1_76C8_4199_EF83C9083440_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4125AB59_4AE0_BE78_41C4_8239C9A4DE28_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_412259AD_4AE0_FAD8_41D1_B8E5849D24D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_41355AC5_4AE0_BE48_41AE_FE93D13E795F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_412DE4DF_4AE3_4A78_41B5_7C187977D04D_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_412C9B5B_4AE3_5E78_41B3_4FD0E8312BA3_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)"
   }
  ]
 },
 {
  "id": "camera_463FFAFF_4AE0_DE38_41A9_D4B4926C5283",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_4637AB0A_4AE0_DFD8_4169_2E046323D345",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_462F9B15_4AE0_DFC8_41C2_5892962FC288",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.71,
   "pitch": 0
  }
 },
 {
  "id": "camera_46261B21_4AE0_DFC8_41D1_573024BFE960",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.09,
   "pitch": 0
  }
 },
 {
  "id": "camera_46130B27_4AE0_DFC8_41B3_DD6417769389",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.36,
   "pitch": 0
  }
 },
 {
  "id": "camera_4600CB2C_4AE0_DFD8_41D1_5EC782BF4662",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.16,
   "pitch": 0
  }
 },
 {
  "id": "camera_4133FB3F_4AE0_DE37_41A5_DA15ECC98BBD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_4134AB44_4AE0_DE49_41C0_AC777F4D6B1C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.73,
   "pitch": 0
  }
 },
 {
  "id": "camera_412B5B4A_4AE0_DE59_41B7_0A4BF8B65386",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.23,
   "pitch": 0
  }
 },
 {
  "id": "camera_412F1B4F_4AE0_DE57_41D2_860F3C1E85F5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.96,
   "pitch": 0
  }
 },
 {
  "id": "camera_41257B53_4AE0_DE4F_41A1_9BBA09CC7279",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_41191B5A_4AE0_DE78_41D2_4BC048712A80",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -64.64,
   "pitch": 0
  }
 },
 {
  "id": "camera_41132B5F_4AE0_DE78_41D0_AE5AF425B2BA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.51,
   "pitch": 0
  }
 },
 {
  "id": "camera_410CBB64_4AE0_DE48_41C0_8C86B760EEAE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.97,
   "pitch": 0
  }
 },
 {
  "id": "camera_4107DB69_4AE0_DE58_4190_B5E013CBBE6D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.87,
   "pitch": 0
  }
 },
 {
  "id": "camera_46F17B6E_4AE0_DE58_41CA_D9D979918A93",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.44,
   "pitch": 0
  }
 },
 {
  "id": "camera_46EB6B73_4AE0_DE48_4194_98962E0475A4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.81,
   "pitch": 0
  }
 },
 {
  "id": "camera_46E44B78_4AE0_DE38_41D1_2986534A8CD4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.12,
   "pitch": 0
  }
 },
 {
  "id": "camera_46DE2B7D_4AE0_DE38_41C5_A61C238FE2FC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.99,
   "pitch": 0
  }
 },
 {
  "id": "camera_46CACB82_4AE0_DEC8_41BD_53F7A6233AC8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.5,
   "pitch": 0
  }
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "paddingRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "shadow": false,
  "toolTipPaddingRight": 6,
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressRight": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowSpread": 0,
  "toolTipBorderColor": "#767676",
  "minHeight": 50,
  "progressBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "toolTipFontWeight": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBottom": 5,
  "playbackBarRight": 0,
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "height": "100%",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "progressBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarLeft": 0,
  "progressLeft": 0,
  "progressBarBorderColor": "#000000",
  "width": "100%",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "minWidth": 100,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowColor": "#333333",
  "toolTipOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "toolTipShadowOpacity": 1,
  "id": "MainViewer",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingLeft": 0,
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBorderSize": 0,
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "progressHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "borderSize": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible",
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "gap": 10,
 "height": "100%",
 "width": "100%",
 "class": "Player",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "shadow": false,
 "minWidth": 20,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "creationPolicy": "delayed",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "data": {
  "name": "Player451"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "borderSize": 0
})