(function(){
    var script = {
 "start": "this.playAudioList([this.audio_9FBDEE40_B550_434E_41DE_80A30BD7C83F]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_A20C5511_B4D0_46F1_41DF_73DB3D576530",
  "this.Container_95071292_B550_C3F3_41DF_A77C98979074",
  "this.Container_AED13C8A_B9B6_8960_41E4_84F4A18EFAF6",
  "this.Container_A3029419_B996_7960_4192_C528E20A86B0",
  "this.Container_99C4460C_BA96_F961_41DA_E8E17F508E7D",
  "this.Container_9065F21F_BAAA_B99F_41C3_7B6D5F677BFF",
  "this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF",
  "this.Container_976B92CB_BA97_9EE7_41DE_B9B8B5CA6A8C",
  "this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8",
  "this.Container_E95CD64D_C9A3_35B7_41CB_94361090AF0B",
  "this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC",
  "this.Container_2846C54E_3A05_EE32_41C6_5EA6E77A3CC9",
  "this.Container_2C420815_3B30_894B_41B9_30F832AB9081",
  "this.Container_267CB8D8_3B30_8AF9_41C6_8717BB472285",
  "this.Container_27E551E2_3B13_9AC9_41CB_D66B21124B3A",
  "this.Container_57354086_45BA_1CDF_41CE_AA4D319AD0E7",
  "this.Container_5B61F956_45F5_EC7C_4166_83DED02E41D6",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "levels": [
  {
   "url": "media/popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A_0_0.jpeg",
   "width": 706,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A_0_1.jpeg",
   "width": 564,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A_0_2.jpeg",
   "width": 282,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_AC77401A_B999_B961_41DC_8EC028FC1290",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -80.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16785AE6_468A_2C5F_41A1_990B507DFA2E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 200,
 "id": "effect_76B09D68_5088_7E39_41BF_BAEF43C60DF8",
 "class": "FadeOutEffect",
 "easing": "quad_in"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 1.64,
 "audio": "this.audioresource_912C07CD_B570_C151_41D9_8DDE24385A11",
 "pitch": 3.27,
 "maximumAngle": 139.91,
 "id": "audio_93B040E3_BAAE_BAA7_41E3_57DAD3A7754D",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "jalanan backsound"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5BCC19D7_45F5_EC7C_41CF_1917D3D59FC8",
  "this.overlay_5AA51FB0_458B_E434_41D0_3CF226529177",
  "this.overlay_6460E388_458E_3CD3_41C2_65E3C48A67B5",
  "this.overlay_648AE971_458E_2C34_419B_51D0D3957BD5",
  "this.overlay_652CE5B9_458A_2434_41AF_23C9C16D59ED",
  "this.overlay_6539CA26_458A_2FDC_41B5_93E7E1A26B58",
  "this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061",
  "this.popup_6106BB76_4596_2C3F_41A6_D246DF494EE9",
  "this.popup_6032C035_4596_3C3D_41AF_0939A5BACBBD",
  "this.overlay_62ACBAD2_458A_2C77_4195_B1F895F507E4",
  "this.overlay_6E1A0023_4596_3BD4_41D1_5EACEF54DC94",
  "this.overlay_7CDFFFA4_468A_24D3_41C6_6CA08043E323"
 ],
 "thumbnailUrl": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_t.jpg",
 "id": "panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04",
 "label": "Bandung 0. KM",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -92.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.71,
   "panorama": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39",
   "distance": 1
  },
  {
   "yaw": 88.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -51,
   "panorama": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.video_A1568E81_B9B9_8963_4199_61CCC890F481",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0940BA15_468A_2FFC_41CB_E20D430D97D8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0940BA15_468A_2FFC_41CB_E20D430D97D8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0940BA15_468A_2FFC_41CB_E20D430D97D8",
 "class": "PlayList"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_4D468A42_571D_AF46_41C4_8C8358C32FB0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.video_A6F1806E_B4F3_BF52_41DA_4F726885D674",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09414A14_468A_2FFC_41CC_437B00338DFB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09414A14_468A_2FFC_41CC_437B00338DFB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09414A14_468A_2FFC_41CC_437B00338DFB",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_61D95A95_4596_6CFD_41C7_27D5D07B79C1",
   "start": "this.viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FCVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_61B4F8EE_458A_6C2F_41C9_9449A9AE9591, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_61B4F8EE_458A_6C2F_41C9_9449A9AE9591, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FCVideoPlayer)",
   "player": "this.viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FCVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_61B4F8EE_458A_6C2F_41C9_9449A9AE9591",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 30.2,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_9B013787_B531_C1D2_41B4_EB02BBA647F2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 28.1,
 "hideEasing": "cubic_out",
 "hfov": 12.44,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 1920,
  "mp4Url": "media/video_9A3B8A26_B531_C2D2_41D2_523573F47051.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_0_t.jpg",
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB_0",
 "width": 2048,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_0.jpg"
   }
  ]
 },
 "label": "3c1cadc823c550c9b496aa0e1dc75745",
 "class": "Photo",
 "height": 1151
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9B34E013_B977_9967_41E4_AFF9FB68C05E",
  "this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968",
  "this.overlay_9E346E54_B969_89E1_41D6_95F1AEFA1682",
  "this.overlay_DB5E0C14_C9A0_D5D6_41E4_F4917AA03BF7",
  "this.overlay_2596E6E0_3B11_86C9_41CC_958E1A7B48D3",
  "this.overlay_6927BF1A_458A_25F4_41C5_102147C24555",
  "this.overlay_72FD08E4_4695_EC5C_41C4_502C2577E958"
 ],
 "thumbnailUrl": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_t.jpg",
 "id": "panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA",
 "label": "DE MAJESTIC",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 72.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -8.59,
   "panorama": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/video_9A822FEB_B531_C152_41CB_77D920739439_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_9A822FEB_B531_C152_41CB_77D920739439",
 "label": "pikiran rakyat",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_9A822FEB_B531_C152_41CB_77D920739439.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "items": [
  {
   "media": "this.video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4",
   "start": "this.viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_78611354_46B6_3C73_41B6_16899BBF1894, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_78611354_46B6_3C73_41B6_16899BBF1894, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891VideoPlayer)",
   "player": "this.viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_78611354_46B6_3C73_41B6_16899BBF1894",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A86095BF_B9AE_7A9F_41B3_12C8092A8A4B",
  "this.overlay_ABEAA280_B9BF_B961_41D7_DB45D0F74918",
  "this.overlay_AB68A023_B9B6_79A7_41CC_94D52A541E4C",
  "this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552",
  "this.overlay_DB549911_C9AF_DFAF_41E4_54910DF3D13A",
  "this.overlay_DB10479F_C9A1_32D2_41C8_8C9BF947D736",
  "this.popup_DDF476AE_C9A3_32F2_41C0_BFB7E1AA77F0",
  "this.overlay_E84AABE5_C9A3_5276_41A3_2D77D3459E65",
  "this.overlay_7FFAFAEF_468E_6C2D_41BB_43430689AD64"
 ],
 "thumbnailUrl": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_t.jpg",
 "id": "panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
 "label": "PREANGER MUSEUM",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -168.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.77,
   "panorama": "this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0",
   "distance": 1
  },
  {
   "yaw": 126,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.6,
   "panorama": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39"
  },
  {
   "yaw": -93.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.48,
   "panorama": "this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_3_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_3",
 "width": 576,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_3.jpg"
   }
  ]
 },
 "label": "Daendels",
 "class": "Photo",
 "height": 768
},
{
 "initialPosition": {
  "yaw": 67.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16043AB0_468A_2C33_41B7_9EA149817883",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_1_t.jpg",
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB_1",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_1.jpg"
   }
  ]
 },
 "label": "70689228_516996599138004_8953055257441630422_n",
 "class": "Photo",
 "height": 720
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_D286B26D_C9E3_7277_41D8_69AEBC4109F0_t.jpg",
 "id": "photo_D286B26D_C9E3_7277_41D8_69AEBC4109F0",
 "width": 512,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_D286B26D_C9E3_7277_41D8_69AEBC4109F0.jpg"
   }
  ]
 },
 "label": "gedung 2",
 "class": "Photo",
 "height": 358
},
{
 "levels": [
  {
   "url": "media/popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865_0_0.jpeg",
   "width": 689,
   "class": "ImageResourceLevel",
   "height": 1254
  },
  {
   "url": "media/popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865_0_1.jpeg",
   "width": 562,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865_0_2.jpeg",
   "width": 281,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_AC773019_B999_B963_41BC_8D5F33CF5BBB",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_0_t.jpg",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_0",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_0.jpg"
   }
  ]
 },
 "label": "102422672_715055905921183_2420856338913216810_n",
 "class": "Photo",
 "height": 1350
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_3_t.jpg",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_3",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_3.jpg"
   }
  ]
 },
 "label": "SWIMMING POOL",
 "class": "Photo",
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_D1EA9529_C9E3_77FE_41D9_79F0C95D94A8_t.jpg",
 "id": "photo_D1EA9529_C9E3_77FE_41D9_79F0C95D94A8",
 "width": 631,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_D1EA9529_C9E3_77FE_41D9_79F0C95D94A8.jpg"
   }
  ]
 },
 "label": "gedung merdeka1",
 "class": "Photo",
 "height": 415
},
{
 "initialPosition": {
  "yaw": 117.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16EA2B43_468A_2C55_41A0_72734BDDA6A0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_D19C642E_C9E3_75F5_41E3_D85181A1931B_t.jpg",
 "id": "photo_D19C642E_C9E3_75F5_41E3_D85181A1931B",
 "width": 493,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_D19C642E_C9E3_75F5_41E3_D85181A1931B.jpg"
   }
  ]
 },
 "label": "gedung 4",
 "class": "Photo",
 "height": 277
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_1_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_1",
 "width": 640,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_1.jpg"
   }
  ]
 },
 "label": "Bandung Tempoe Doeloe 0 km",
 "class": "Photo",
 "height": 491
},
{
 "initialPosition": {
  "yaw": -107.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09DBBA90_468A_2CF3_41C4_6F187FDAB4BD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_0965FA02_468A_2FD4_41C8_261C68E3B510, 0)",
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84PhotoAlbumPlayer"
  }
 ],
 "id": "playList_0965FA02_468A_2FD4_41C8_261C68E3B510",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -169.36,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_A098DB3D_B99A_8FA3_41E4_C7AE5336EC85",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 9.61,
 "hideEasing": "cubic_out",
 "hfov": 9.68,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 640,
  "mp4Url": "media/video_A3CDA463_B99B_99A7_41B9_F6EABD986164.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "thumbnailUrl": "media/video_AC495992_B99F_8B61_41CC_8FD6D7A7A772_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_AC495992_B99F_8B61_41CC_8FD6D7A7A772",
 "label": "savoy homan",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC495992_B99F_8B61_41CC_8FD6D7A7A772.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_2_t.jpg",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_2",
 "width": 1068,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_2.jpg"
   }
  ]
 },
 "label": "Gedung-Majestic-3",
 "class": "Photo",
 "height": 796
},
{
 "items": [
  {
   "media": "this.video_A4C4DE67_B4D7_C352_41D6_746F65A23287",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0941BA14_468A_2FFC_41C0_B847E100CCB3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0941BA14_468A_2FFC_41C0_B847E100CCB3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0941BA14_468A_2FFC_41C0_B847E100CCB3",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 149.69,
  "class": "PanoramaCameraPosition",
  "pitch": 15.61
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16B25B19_468A_2DF5_4182_A02969E5E72A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_0961FA03_468A_2FD4_41BF_D7F51AB2F682, 0)",
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6BPhotoAlbumPlayer"
  }
 ],
 "id": "playList_0961FA03_468A_2FD4_41BF_D7F51AB2F682",
 "class": "PlayList"
},
{
 "label": "MERDEKA BUILDING",
 "id": "panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65",
 "overlays": [
  "this.overlay_928D8502_BA9B_9B61_41E5_017A1C337AC1",
  "this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64",
  "this.overlay_907E2A71_BAAA_89A3_41DC_57FB9C51A706",
  "this.overlay_DD20A791_C9A1_D2AF_41D2_039E644DEC61",
  "this.overlay_6904E72C_458A_25D3_4199_086FCD9BEDD0",
  "this.overlay_73BF222F_4696_1C2C_41B8_2420FC5F1F72"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 79.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.66,
   "panorama": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "audios": [
  "this.audio_93B040E3_BAAE_BAA7_41E3_57DAD3A7754D"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_2A3FEB0B_3013_5095_41AF_885003A85966",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -25.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09E0CA5C_468A_2C73_41C6_1FD7409F8A9B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_96DB004F_BA96_99FF_41D3_C1F343A0EAFA",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09402A15_468A_2FFC_41B0_3C24DBCAB0C3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09402A15_468A_2FFC_41B0_3C24DBCAB0C3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09402A15_468A_2FFC_41B0_3C24DBCAB0C3",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/video_96DB004F_BA96_99FF_41D3_C1F343A0EAFA_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_96DB004F_BA96_99FF_41D3_C1F343A0EAFA",
 "label": "vidio",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_96DB004F_BA96_99FF_41D3_C1F343A0EAFA.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_6531D7D6_70A2_FBC7_41B1_74A873D95E74",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -39.16,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_7DD51C3F_46B6_242C_4192_CED23EA41047",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 6.4,
 "hideEasing": "cubic_out",
 "hfov": 12.7,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 640,
  "mp4Url": "media/video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "playList": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_AlbumPlayList",
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_t.png",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558",
 "label": "majestikalbumuy",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_2C44A08B_3EE0_B386_41A4_719E9E785ABD",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -91.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1697BB2E_468A_2C2F_41C6_3E86F76A782C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -172.43,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865_0_1.jpeg",
    "width": 562,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -3.27,
 "hideEasing": "cubic_out",
 "hfov": 4.94,
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_0_t.jpg",
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_0",
 "width": 1200,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_0.jpg"
   }
  ]
 },
 "label": "1200px-Conference_Hall_Gedung_Merdeka",
 "class": "Photo",
 "height": 900
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_3_t.jpg",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_3",
 "width": 600,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_3.jpeg"
   }
  ]
 },
 "label": "img-9-600x400",
 "class": "Photo",
 "height": 400
},
{
 "thumbnailUrl": "media/video_9A3B8A26_B531_C2D2_41D2_523573F47051_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_9A3B8A26_B531_C2D2_41D2_523573F47051",
 "label": "hospot vidio savoy homan",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_9A3B8A26_B531_C2D2_41D2_523573F47051.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "thumbnailUrl": "media/video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "loop": false,
 "id": "video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6",
 "label": "charlie chaplin",
 "class": "Video",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "label": "Savoy Hotel Room",
 "hfovMin": "150%",
 "id": "panorama_55B6208D_459F_FCEC_41A1_0036483C54EC",
 "overlays": [
  "this.overlay_5435BB48_45B5_EC54_41C5_054917A4A12E",
  "this.overlay_53632CF0_45BE_2434_41D0_DA3A00BAB2C8",
  "this.overlay_56562B1E_45BA_2DEC_4193_C8B0777C33E1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 154.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.04,
   "panorama": "this.panorama_4B458775_459F_E43C_41C3_947957808976",
   "distance": 1
  },
  {
   "yaw": 154.38,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.04,
   "panorama": "this.panorama_4B458775_459F_E43C_41C3_947957808976",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_61D95A95_4596_6CFD_41C7_27D5D07B79C1_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "loop": false,
 "id": "video_61D95A95_4596_6CFD_41C7_27D5D07B79C1",
 "label": "VIDEO MOBIL",
 "class": "Video",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_61D95A95_4596_6CFD_41C7_27D5D07B79C1.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_7AB8FF13_46B6_25F4_41C9_EDED76930847",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window84574"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -40.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16615AD2_468A_2C77_41B5_C6350B117639",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "levels": [
  {
   "url": "media/popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1_0_0.jpeg",
   "width": 698,
   "class": "ImageResourceLevel",
   "height": 1256
  },
  {
   "url": "media/popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1_0_1.jpeg",
   "width": 569,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1_0_2.jpeg",
   "width": 284,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_AC77F019_B999_B963_4183_74DC477B76D0",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 168.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB_0_1.jpeg",
    "width": 552,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.23,
 "hideEasing": "cubic_out",
 "hfov": 5.3,
 "class": "PopupPanoramaOverlay"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_66E8932B_70AD_144D_41D6_124667C114CD",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 3.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16A95B0E_468A_2DEF_41C0_633A4676B42A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": -100.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_162C8A9B_468A_2CF5_41A4_29F65484837F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "HOTEL PREANGER",
 "id": "panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39",
 "overlays": [
  "this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA",
  "this.overlay_A8D0F340_B530_C14E_41E0_09010592CA0F",
  "this.overlay_A8B90102_B530_5ED2_41B8_AE3B7BF511A5",
  "this.overlay_D8885D29_C9A7_37FE_41D8_BFC3E20753B4",
  "this.overlay_DF197A22_C9E7_3DF2_41E0_7565B6D723C2",
  "this.overlay_2C6092CB_3A06_6A32_41C6_4F2FF60B5484",
  "this.overlay_22FA7D4D_3A02_9E36_41C8_12F9E71DD465",
  "this.overlay_A9BD4406_B530_46D2_41DB_E087AA42EB3B",
  "this.overlay_1F6A3B10_3A02_7A2E_4176_C6668BB895E2",
  "this.overlay_2BCE5239_3AF1_99B8_41A0_C3659BD6E115",
  "this.overlay_278D7187_3B10_7B48_41B0_A68FEE0CCD73",
  "this.overlay_68787FE7_459E_245C_41CA_0C45F6FDEDEF",
  "this.overlay_7FE6F8CD_468A_EC6D_41D0_10CD4541CDE1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.35,
   "panorama": "this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04",
   "distance": 1
  },
  {
   "yaw": -176.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 126,
   "panorama": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "audios": [
  "this.audio_97DBC096_B570_DFF2_41D1_C62EF1FF4955"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "viewerArea": "this.ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6B",
 "id": "ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6BPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "initialPosition": {
  "yaw": 87.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_098C1A3C_468A_2C2C_41CA_DFD1F58EA5D3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_7D4EB38D_46BE_1CEC_41C7_6E1282E2297D",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4D"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window83265"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_A3CDA463_B99B_99A7_41B9_F6EABD986164",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09406A15_468A_2FFC_41C1_7D1B8316785F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09406A15_468A_2FFC_41C1_7D1B8316785F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09406A15_468A_2FFC_41C1_7D1B8316785F",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -162.41,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A_0_1.jpeg",
    "width": 564,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.52,
 "hideEasing": "cubic_out",
 "hfov": 4.72,
 "class": "PopupPanoramaOverlay"
},
{
 "initialPosition": {
  "yaw": -48.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16305AA5_468A_2CDD_41CC_9E076620956F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4C",
 "id": "ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "initialPosition": {
  "yaw": -93.67,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "automaticZoomSpeed": 10,
 "id": "camera_099FFA52_468A_2C77_41C5_F212F07A8B8B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08",
   "start": "this.changeBackgroundWhilePlay(this.playList_091B0A02_468A_2FD4_41AC_B4CC3CFB0C19, 0, '#000000')",
   "begin": "this.loopAlbum(this.playList_091B0A02_468A_2FD4_41AC_B4CC3CFB0C19, 0)",
   "player": "this.ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97PhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_091B0A02_468A_2FD4_41AC_B4CC3CFB0C19",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_0_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_0",
 "width": 448,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_0.jpg"
   }
  ]
 },
 "label": "Bandung 0 Km",
 "class": "Photo",
 "height": 271
},
{
 "items": [
  {
   "media": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_camera"
  },
  {
   "media": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_camera"
  },
  {
   "media": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_camera"
  },
  {
   "media": "this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_camera"
  },
  {
   "media": "this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_camera"
  },
  {
   "media": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "playList": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_AlbumPlayList",
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_t.png",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C",
 "label": "photo album 0 km",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_9A3B8A26_B531_C2D2_41D2_523573F47051",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09413A14_468A_2FFC_4191_B24C49EDC36F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09413A14_468A_2FFC_4191_B24C49EDC36F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09413A14_468A_2FFC_4191_B24C49EDC36F",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -80.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16752ADC_468A_2C73_41B7_6C72B356E5B4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": 129,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09D7CA84_468A_2CD3_41A0_394444659E8A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_2_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_2",
 "width": 600,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_2.jpg"
   }
  ]
 },
 "label": "prasasti Bandung 0km",
 "class": "Photo",
 "height": 337
},
{
 "initialPosition": {
  "yaw": -88.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09C28A7A_468A_2C37_41C4_5F557EBBA82E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 113.99,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_6106BB76_4596_2C3F_41A6_D246DF494EE9",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 20.91,
 "hideEasing": "cubic_out",
 "hfov": 3.81,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 640,
  "mp4Url": "media/video_61D95A95_4596_6CFD_41C7_27D5D07B79C1.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_1_t.jpg",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_1",
 "width": 1181,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_1.jpg"
   }
  ]
 },
 "label": "PREANGER BUILDING",
 "class": "Photo",
 "height": 817
},
{
 "initialPosition": {
  "yaw": -54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_0997FA46_468A_2C5C_41AF_A3FAF18A9359",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_09672A03_468A_2FD4_41CB_CCB24AB93614, 0)",
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_09672A03_468A_2FD4_41CB_CCB24AB93614",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 39.69,
 "audio": "this.audioresource_912C07CD_B570_C151_41D9_8DDE24385A11",
 "pitch": 7.54,
 "maximumAngle": 151.99,
 "id": "audio_85EBA1BB_B570_4132_41E4_04BB6EA341A4",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "jalanan backsound"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_9A3B8A26_B531_C2D2_41D2_523573F47051",
   "start": "this.viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_5F225547_45B5_E45C_41A4_987ECB4ECAD9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5F225547_45B5_E45C_41A4_987ECB4ECAD9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828VideoPlayer)",
   "player": "this.viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_5F225547_45B5_E45C_41A4_987ECB4ECAD9",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_4_t.jpg",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_4",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_4.jpg"
   }
  ]
 },
 "label": "shutterstock_1144895537",
 "class": "Photo",
 "height": 666
},
{
 "initialPosition": {
  "yaw": 91.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_165A2B04_468A_2DDC_41D0_8164163CC165",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "PIKIRAN RAKYAT & SAVOY HOMAN",
 "id": "panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
 "overlays": [
  "this.overlay_9219EF44_B570_4156_41DD_AFA5F0A1E056",
  "this.overlay_9E007C15_B550_46F1_41E1_58F2F8116647",
  "this.popup_980574D8_B550_477E_41DB_3213BCA7C484",
  "this.overlay_98649778_B530_C13E_41D2_B1B06FCAA469",
  "this.popup_9B013787_B531_C1D2_41B4_EB02BBA647F2",
  "this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5",
  "this.overlay_9BB076D5_B531_C376_41D0_EFDC58BB5C79",
  "this.overlay_ACF5B794_B99A_8761_41E5_BB658DA368DC",
  "this.overlay_6ED562D8_458A_7C73_41CD_2D60ECA881A2",
  "this.overlay_7323E148_468A_7C53_41B5_D5F8743B5EB6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -51,
   "class": "AdjacentPanorama",
   "backwardYaw": 88.05,
   "panorama": "this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04",
   "distance": 1
  },
  {
   "yaw": 131.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.39,
   "panorama": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
   "distance": 1
  },
  {
   "yaw": -11.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.3,
   "panorama": "this.panorama_4B458775_459F_E43C_41C3_947957808976",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "audios": [
  "this.audio_85EBA1BB_B570_4132_41E4_04BB6EA341A4"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_3_t.jpg",
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_3",
 "width": 1095,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_3.jpg"
   }
  ]
 },
 "label": "gedung_merdeka_bandung_by_fadeyjevera_d5y2l8p-pre",
 "class": "Photo",
 "height": 730
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_61176252_4596_3C74_41D0_6CCAA0598AC9",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FC"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window34603"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 172.64,
 "audio": "this.audioresource_912C07CD_B570_C151_41D9_8DDE24385A11",
 "pitch": -5.32,
 "maximumAngle": 107.18,
 "id": "audio_907ED62B_BAAF_99A7_41D2_0A8A6FCD7249",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "jalanan backsound"
 }
},
{
 "initialPosition": {
  "yaw": 78.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1650CAFA_468A_2C37_41BF_AD48B7B317C5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/video_9DE45B6D_B969_8FA3_41D8_B29263D9AA27_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_9DE45B6D_B969_8FA3_41D8_B29263D9AA27",
 "label": "de majestic",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_9DE45B6D_B969_8FA3_41D8_B29263D9AA27.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "playList": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_AlbumPlayList",
 "thumbnailUrl": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_t.png",
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135",
 "label": "foto asia afrika",
 "class": "PhotoAlbum"
},
{
 "viewerArea": "this.ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47C",
 "id": "ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "initialPosition": {
  "yaw": 171.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_164D8AF0_468A_2C33_41A7_D91D51F2CF50",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": 11.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_161C7AC7_468A_2C5D_41C8_FEC47DD8507B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_9A822FEB_B531_C152_41CB_77D920739439",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0940FA14_468A_2FFC_41C7_C22832E6E769, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0940FA14_468A_2FFC_41C7_C22832E6E769, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0940FA14_468A_2FFC_41C7_C22832E6E769",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -69.95,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_AD702096_B9EF_9961_41DB_16314013E6F6",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AD702096_B9EF_9961_41DB_16314013E6F6_0_0.jpg",
    "width": 700,
    "class": "ImageResourceLevel",
    "height": 467
   },
   {
    "url": "media/popup_AD702096_B9EF_9961_41DB_16314013E6F6_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "pitch": -6.14,
 "hideEasing": "cubic_out",
 "hfov": 12.2,
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_4_t.jpg",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_4",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_4.jpg"
   }
  ]
 },
 "label": "LOBBY",
 "class": "Photo",
 "height": 682
},
{
 "items": [
  {
   "media": "this.video_AABEDE67_B530_4352_41D2_EA8849D009FD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09416A14_468A_2FFC_41A9_09EA5059AFB2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09416A14_468A_2FFC_41A9_09EA5059AFB2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09416A14_468A_2FFC_41A9_09EA5059AFB2",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_2_t.jpg",
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB_2",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_2.jpg"
   }
  ]
 },
 "label": "91024024_595792237813537_7405381972834490165_n",
 "class": "Photo",
 "height": 1350
},
{
 "duration": 400,
 "from": "left",
 "id": "effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "thumbnailUrl": "media/video_A4C4DE67_B4D7_C352_41D6_746F65A23287_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_A4C4DE67_B4D7_C352_41D6_746F65A23287",
 "label": "opening",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_A4C4DE67_B4D7_C352_41D6_746F65A23287.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_1_t.jpg",
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_1",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_1.jpg"
   }
  ]
 },
 "label": "93451981_930352040716336_1901497702607967611_n",
 "class": "Photo",
 "height": 810
},
{
 "initialPosition": {
  "yaw": -25.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09F5AA66_468A_2C5F_41CF_32256C4E8460",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B458775_459F_E43C_41C3_947957808976_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_295AC50B_3013_5095_41C4_35DF3AD0D0AF",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "label": "Fasad at Savoy",
 "hfovMin": "135%",
 "id": "panorama_4B458775_459F_E43C_41C3_947957808976",
 "overlays": [
  "this.overlay_55C30153_459A_7C75_41C9_1287DC2909D7",
  "this.overlay_5580158A_459A_24D7_41C2_91528962AFB5",
  "this.overlay_54A06563_458A_2454_41CB_2185AFA1623C",
  "this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04",
  "this.overlay_6801B0BD_457A_3C2D_41B9_0BEC30E188C4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 99.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.54,
   "panorama": "this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC",
   "distance": 1
  },
  {
   "yaw": 98.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.54,
   "panorama": "this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC",
   "distance": 1
  },
  {
   "yaw": -62.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.01,
   "panorama": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4B458775_459F_E43C_41C3_947957808976_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4B458775_459F_E43C_41C3_947957808976_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_61D95A95_4596_6CFD_41C7_27D5D07B79C1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0943CA15_468A_2FFC_41CB_2C62DDF32285, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0943CA15_468A_2FFC_41CB_2C62DDF32285, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0943CA15_468A_2FFC_41CB_2C62DDF32285",
 "class": "PlayList"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_60552D7A_4596_2434_41B0_F2A2ADD5BECA",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window33898"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6",
   "start": "this.viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7861A353_46B6_3C75_41C9_7B0DF2D20436, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7861A353_46B6_3C75_41C9_7B0DF2D20436, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4DVideoPlayer)",
   "player": "this.viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4DVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_7861A353_46B6_3C75_41C9_7B0DF2D20436",
 "class": "PlayList"
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -133.15,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_7CA7E159_46BE_1C75_41CA_FE3B0DD068F5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 6.85,
 "hideEasing": "cubic_out",
 "hfov": 12.72,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 640,
  "mp4Url": "media/video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_2_t.jpg",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_2",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_2.jpg"
   }
  ]
 },
 "label": "PREANGER ROOM",
 "class": "Photo",
 "height": 853
},
{
 "items": [
  {
   "media": "this.video_61D95A95_4596_6CFD_41C7_27D5D07B79C1",
   "start": "this.viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_61B538EE_458A_6C2F_4195_3145197AC9A0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_61B538EE_458A_6C2F_4195_3145197AC9A0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228VideoPlayer)",
   "player": "this.viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_61B538EE_458A_6C2F_4195_3145197AC9A0",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_5_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_5",
 "width": 512,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_5.jpg"
   }
  ]
 },
 "label": "Bandung Titik 0",
 "class": "Photo",
 "height": 339
},
{
 "playList": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB_AlbumPlayList",
 "thumbnailUrl": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_t.png",
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB",
 "label": "De Vries Photo",
 "class": "PhotoAlbum"
},
{
 "levels": [
  {
   "url": "media/popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB_0_0.jpeg",
   "width": 691,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB_0_1.jpeg",
   "width": 552,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB_0_2.jpeg",
   "width": 276,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_AC741018_B999_B961_41E5_AD65B94AE481",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_9FBDEE40_B550_434E_41DE_80A30BD7C83F.ogg",
  "mp3Url": "media/audio_9FBDEE40_B550_434E_41DE_80A30BD7C83F.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9FBDEE40_B550_434E_41DE_80A30BD7C83F",
 "class": "MediaAudio",
 "data": {
  "label": "nyunda dulu"
 }
},
{
 "autoplay": true,
 "loop": true,
 "yaw": -3.52,
 "audio": "this.audioresource_912C07CD_B570_C151_41D9_8DDE24385A11",
 "pitch": 7.29,
 "maximumAngle": 159.15,
 "id": "audio_97DBC096_B570_DFF2_41D1_C62EF1FF4955",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "jalanan backsound"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_2_t.jpg",
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_2",
 "width": 1400,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_2.jpg"
   }
  ]
 },
 "label": "4154246102",
 "class": "Photo",
 "height": 930
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_4911825E_4576_3C6F_41A2_9F10FBC0F770",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BD"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window662"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0943BA15_468A_2FFC_41C2_57EDDCE71978, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0943BA15_468A_2FFC_41C2_57EDDCE71978, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0943BA15_468A_2FFC_41C2_57EDDCE71978",
 "class": "PlayList"
},
{
 "viewerArea": "this.ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84",
 "id": "ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "initialPosition": {
  "yaw": -90.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16E59B39_468A_2C35_4191_B476D0E2AFC5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "initialPosition": {
  "yaw": 86.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16090ABC_468A_2C33_41C8_9239EFF74B7A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_0_t.jpg",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_0",
 "width": 1024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_0.jpg"
   }
  ]
 },
 "label": "PREANGER RESTAURANT",
 "class": "Photo",
 "height": 591
},
{
 "displayOriginPosition": {
  "yaw": 167.09,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 167.09,
  "class": "PanoramaCameraPosition",
  "pitch": -2.29
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -2.29,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "levels": [
  {
   "url": "media/popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77_0_0.jpeg",
   "width": 689,
   "class": "ImageResourceLevel",
   "height": 1253
  },
  {
   "url": "media/popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77_0_1.jpeg",
   "width": 563,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77_0_2.jpeg",
   "width": 281,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_AC774018_B999_B961_41DD_41DCAE52A08C",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ABAA207E_B9B9_99A1_41C4_393C716EF06E",
  "this.overlay_ABC3CDA2_B9BB_8AA1_41D2_2A41568F463F",
  "this.overlay_ADF44170_B9EF_9BA1_41AA_FB025D1349DA",
  "this.popup_AD702096_B9EF_9961_41DB_16314013E6F6",
  "this.overlay_ACB98007_B9E9_F96F_41E5_FDB814A6AA65",
  "this.popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77",
  "this.overlay_AC6A8803_B9EA_8967_4179_61FF3C0BA873",
  "this.popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB",
  "this.overlay_ACCFABFD_B9EA_8EA3_41CA_1B119172F62F",
  "this.popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1",
  "this.overlay_AC7AADC4_B9E9_8AE1_4192_86A0D9F3A311",
  "this.popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865",
  "this.overlay_ACE14AB5_B996_8EA3_41D0_DFE836AEFDA2",
  "this.popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A",
  "this.overlay_7C818209_46BE_7FD4_41C9_0A370A427B66",
  "this.popup_7CA7E159_46BE_1C75_41CA_FE3B0DD068F5",
  "this.overlay_7DFFF490_46B6_24F4_41A6_A3A4EAEE3E6C",
  "this.popup_7DD51C3F_46B6_242C_4192_CED23EA41047",
  "this.overlay_02329116_468E_1DFC_41C3_80C317549FE9"
 ],
 "thumbnailUrl": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_t.jpg",
 "id": "panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2",
 "label": "spot 8",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 139.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -112.5,
   "panorama": "this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0",
   "distance": 1
  },
  {
   "yaw": 64.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.84,
   "panorama": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_4_t.jpg",
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_4",
 "width": 740,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_4.jpg"
   }
  ]
 },
 "label": "Titik Nol Bandung",
 "class": "Photo",
 "height": 400
},
{
 "label": "DE VRIES BUILDING",
 "id": "panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
 "overlays": [
  "this.overlay_ACFE5455_B99B_F9E3_41B5_452DB2CF5590",
  "this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793",
  "this.overlay_AF37D87E_B9BA_89A1_41DA_DE282E3A73EC",
  "this.popup_A098DB3D_B99A_8FA3_41E4_C7AE5336EC85",
  "this.overlay_A23DF679_B96A_B9A3_41CC_50C9EC2E9962",
  "this.overlay_98EF07BF_B976_869F_41A1_C9B2C023DFD3",
  "this.overlay_9D7C3916_BA99_8B61_41E4_2D2830EA4374",
  "this.overlay_DE6F86F1_C9FF_326E_41D9_4B6E9F3A649E",
  "this.overlay_EBC1DCD7_CA5F_3652_41B7_6D24BE8D929F",
  "this.overlay_687CA77D_458E_242C_41CB_0E8845C6E6EC",
  "this.overlay_73A93959_468A_2C74_41C8_E13950E1FD54"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -8.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 72.41,
   "panorama": "this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA",
   "distance": 1
  },
  {
   "yaw": -101.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.36,
   "panorama": "this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65",
   "distance": 1
  },
  {
   "yaw": 89.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.11,
   "panorama": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "audios": [
  "this.audio_907ED62B_BAAF_99A7_41D2_0A8A6FCD7249"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08",
   "start": "this.changeBackgroundWhilePlay(this.playList_091B9A01_468A_2FD4_41B5_F0017622996E, 0, '#000000')",
   "begin": "this.loopAlbum(this.playList_091B9A01_468A_2FD4_41B5_F0017622996E, 0)",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_091B9A01_468A_2FD4_41B5_F0017622996E",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AB4997E3_B9BA_86A7_41E2_D1655AE10EC3",
  "this.overlay_AB63186B_B9B7_89A0_41E6_A04C5FF69B21",
  "this.overlay_DCDC2520_C9A0_F7EE_41E3_CAFC795B4B64",
  "this.overlay_DA634C3E_C9A7_55D2_41DE_9AA02C863BB5",
  "this.overlay_0517A084_468E_1CDC_41C4_A24722D200AF"
 ],
 "thumbnailUrl": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_t.jpg",
 "id": "panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0",
 "label": "spot 9",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -88.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.95,
   "panorama": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
   "distance": 1
  },
  {
   "yaw": -112.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 139.5,
   "panorama": "this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.video_AC495992_B99F_8B61_41CC_8FD6D7A7A772",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09408A14_468A_2FFC_41C7_7A70B32232BC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09408A14_468A_2FFC_41C7_7A70B32232BC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09408A14_468A_2FFC_41C7_7A70B32232BC",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_camera"
  },
  {
   "media": "this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_camera"
  },
  {
   "media": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_camera"
  },
  {
   "media": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_camera"
  },
  {
   "media": "this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_camera"
  },
  {
   "media": "this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_camera"
  },
  {
   "media": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_camera"
  },
  {
   "media": "this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_camera"
  },
  {
   "media": "this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_camera"
  },
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08",
   "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_camera"
  },
  {
   "media": "this.panorama_4B458775_459F_E43C_41C3_947957808976",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4B458775_459F_E43C_41C3_947957808976_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_1_t.jpg",
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_1",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_9D33973B_BA97_87A7_41DF_5A70FB157558_1.jpg"
   }
  ]
 },
 "label": "de-majestic-bandung",
 "class": "Photo",
 "height": 744
},
{
 "thumbnailUrl": "media/video_A1568E81_B9B9_8963_4199_61CCC890F481_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_A1568E81_B9B9_8963_4199_61CCC890F481",
 "label": "the vries building",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_A1568E81_B9B9_8963_4199_61CCC890F481.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "playList": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_AlbumPlayList",
 "thumbnailUrl": "media/album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_t.png",
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08",
 "label": "Photo Album Preanger",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_D2A33389_C9E3_72BF_41E4_520F038567ED_t.jpg",
 "id": "photo_D2A33389_C9E3_72BF_41E4_520F038567ED",
 "width": 360,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_D2A33389_C9E3_72BF_41E4_520F038567ED.jpg"
   }
  ]
 },
 "label": "gedung 3",
 "class": "Photo",
 "height": 240
},
{
 "items": [
  {
   "media": "this.video_9DE45B6D_B969_8FA3_41D8_B29263D9AA27",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_09400A15_468A_2FFC_41C4_C59474D21523, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_09400A15_468A_2FFC_41C4_C59474D21523, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_09400A15_468A_2FFC_41C4_C59474D21523",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_A3CDA463_B99B_99A7_41B9_F6EABD986164",
   "start": "this.viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_5F5DC547_45B5_E45C_41CC_3A6D645239B8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5F5DC547_45B5_E45C_41CC_3A6D645239B8, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BDVideoPlayer)",
   "player": "this.viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BDVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_5F5DC547_45B5_E45C_41CC_3A6D645239B8",
 "class": "PlayList"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_49133258_4576_3C73_41C9_B44243DCEA57",
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "closeButtonRollOverBorderSize": 0,
 "backgroundColor": [],
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "borderSize": 0,
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 0,
 "bodyPaddingLeft": 0,
 "class": "Window",
 "titlePaddingRight": 5,
 "headerBackgroundOpacity": 0,
 "footerHeight": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverIconColor": "#666666",
 "headerPaddingTop": 10,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 0,
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "layout": "vertical",
 "closeButtonPaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBorderSize": 0,
 "shadowHorizontalLength": 3,
 "bodyPaddingRight": 0,
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "data": {
  "name": "Window661"
 },
 "titleFontFamily": "Arial"
},
{
 "viewerArea": "this.ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97",
 "id": "ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421"
 ]
},
{
 "thumbnailUrl": "media/video_AABEDE67_B530_4352_41D2_EA8849D009FD_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_AABEDE67_B530_4352_41D2_EA8849D009FD",
 "label": "0 km bdg",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_AABEDE67_B530_4352_41D2_EA8849D009FD.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 179.39,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1_0_1.jpeg",
    "width": 569,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.7,
 "hideEasing": "cubic_out",
 "hfov": 4.76,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/video_A3CDA463_B99B_99A7_41B9_F6EABD986164_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "loop": false,
 "id": "video_A3CDA463_B99B_99A7_41B9_F6EABD986164",
 "label": "devries video",
 "class": "Video",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_A3CDA463_B99B_99A7_41B9_F6EABD986164.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "initialPosition": {
  "yaw": -115.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1681EB23_468A_2DD5_415A_04959B76F994",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 116.69,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_6032C035_4596_3C3D_41AF_0939A5BACBBD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "pitch": 14.51,
 "hideEasing": "cubic_out",
 "hfov": 5.35,
 "class": "PopupPanoramaOverlay",
 "video": {
  "width": 640,
  "mp4Url": "media/video_61D95A95_4596_6CFD_41C7_27D5D07B79C1.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "thumbnailUrl": "media/video_A6F1806E_B4F3_BF52_41DA_4F726885D674_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_A6F1806E_B4F3_BF52_41DA_4F726885D674",
 "label": "grand preanger",
 "class": "Video",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_A6F1806E_B4F3_BF52_41DA_4F726885D674.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_09642A03_468A_2FD4_41C8_3CBFF01A4923, 0)",
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_09642A03_468A_2FD4_41C8_3CBFF01A4923",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 157.5,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77_0_1.jpeg",
    "width": 563,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.5,
 "hideEasing": "cubic_out",
 "hfov": 5.38,
 "class": "PopupPanoramaOverlay"
},
{
 "initialPosition": {
  "yaw": 168.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_09FEFA70_468A_2C33_41CB_74733D763D93",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0943AA15_468A_2FFC_41CA_37D5728C484A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0943AA15_468A_2FFC_41CA_37D5728C484A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_0943AA15_468A_2FFC_41CA_37D5728C484A",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "loop": false,
 "id": "video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4",
 "label": "amelia",
 "class": "Video",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 37.84,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DDF476AE_C9A3_32F2_41C0_BFB7E1AA77F0",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_DDF476AE_C9A3_32F2_41C0_BFB7E1AA77F0_0_0.jpg",
    "width": 800,
    "class": "ImageResourceLevel",
    "height": 600
   },
   {
    "url": "media/popup_DDF476AE_C9A3_32F2_41C0_BFB7E1AA77F0_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 384
   }
  ]
 },
 "pitch": -25.16,
 "hideEasing": "cubic_out",
 "hfov": 18.14,
 "class": "PopupPanoramaOverlay"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_66792B32_70AD_145F_41CF_B927F1C684B0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 161.03,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_980574D8_B550_477E_41DB_3213BCA7C484",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_980574D8_B550_477E_41DB_3213BCA7C484_0_0.jpg",
    "width": 800,
    "class": "ImageResourceLevel",
    "height": 600
   },
   {
    "url": "media/popup_980574D8_B550_477E_41DB_3213BCA7C484_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 384
   }
  ]
 },
 "pitch": -1.19,
 "hideEasing": "cubic_out",
 "hfov": 14.82,
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_3_t.jpg",
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB_3",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A2FF3A7D_B996_89A3_41E1_942205482DFB_3.jpg"
   }
  ]
 },
 "label": "95012643_158515585581262_2348551521238315235_n",
 "class": "Photo",
 "height": 1349
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#FFFFFF",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 55,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "overflow": "scroll",
 "height": 641,
 "propagateClick": true,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": 15,
 "propagateClick": true,
 "height": 133,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "bottom": 0,
 "overflow": "visible",
 "height": 118,
 "propagateClick": true,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--BDG 0 KM"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_A20CE511_B4D0_46F1_41D3_600A02C1BF50"
 ],
 "id": "Container_A20C5511_B4D0_46F1_41DF_73DB3D576530",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_A20C5511_B4D0_46F1_41DF_73DB3D576530, true, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "preangeralbum"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_9507B292_B550_C3F3_41B7_00EEF0F5B8B6"
 ],
 "id": "Container_95071292_B550_C3F3_41DF_A77C98979074",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_95071292_B550_C3F3_41DF_A77C98979074, true, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM 0km"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_AED14C8A_B9B6_8960_41E2_89D78B9CDD96",
  "this.Container_AED16C8A_B9B6_8960_41E0_8E4160E87BCD"
 ],
 "id": "Container_AED13C8A_B9B6_8960_41E4_84F4A18EFAF6",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_AED13C8A_B9B6_8960_41E4_84F4A18EFAF6, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---videodevries"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_A3030419_B996_7960_41B4_E02D8D33B2C0"
 ],
 "id": "Container_A3029419_B996_7960_4192_C528E20A86B0",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--devriesalbum"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_99C3D60C_BA96_F961_41E3_F3A5CBDAD6FD"
 ],
 "id": "Container_99C4460C_BA96_F961_41DA_E8E17F508E7D",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_99C4460C_BA96_F961_41DA_E8E17F508E7D, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---majesticalbum"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_9065421F_BAAA_B99F_41E0_0AC282C4CD9C"
 ],
 "id": "Container_9065F21F_BAAA_B99F_41C3_7B6D5F677BFF",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_9065F21F_BAAA_B99F_41C3_7B6D5F677BFF, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---fotoasia"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_97324545_BAAB_9BE3_41DD_C660C73EA16B",
  "this.Container_9733A545_BAAB_9BE3_41E5_870A2CB77CAB"
 ],
 "id": "Container_97338545_BAAB_9BE3_41B5_0221C9782FFF",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---MAPS"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_976A52CB_BA97_9EE7_41E5_558F701D1D0C",
  "this.Container_976BB2CB_BA97_9EE7_41D5_D7A9BC18D79D"
 ],
 "id": "Container_976B92CB_BA97_9EE7_41DE_B9B8B5CA6A8C",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_976B92CB_BA97_9EE7_41DE_B9B8B5CA6A8C, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---qubic360"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_DAE8F8E8_C9A1_FE7D_41CC_8EA0F33BCE33",
  "this.Container_DAE8D8E8_C9A1_FE7D_41E6_6EFC0C18C06B"
 ],
 "id": "Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "bookhotel"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_E95C064C_C9A3_35B5_41B7_5EF5439AF3FF",
  "this.Container_E95C264D_C9A3_35B7_41E9_0ABE0EBEA575"
 ],
 "id": "Container_E95CD64D_C9A3_35B7_41CB_94361090AF0B",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_E95CD64D_C9A3_35B7_41CB_94361090AF0B, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "orderstarbuck"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_E20CAA60_CAA1_F26E_41E7_AEE956410804",
  "this.Container_E2137A60_CAA1_F26E_41E8_6FE4DD98407A"
 ],
 "id": "Container_E2135A60_CAA1_F26E_41A3_2589A86764FC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "chatbot"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2847054E_3A05_EE32_41C9_1AF69282BF8D",
  "this.Container_2847254E_3A05_EE32_4150_87D41FA5677B"
 ],
 "id": "Container_2846C54E_3A05_EE32_41C6_5EA6E77A3CC9",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2846C54E_3A05_EE32_41C6_5EA6E77A3CC9, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---form"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2C41F814_3B30_8949_41B8_523599E17082",
  "this.Container_2C425815_3B30_894B_4195_FF761645A056"
 ],
 "id": "Container_2C420815_3B30_894B_41B9_30F832AB9081",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2C420815_3B30_894B_41B9_30F832AB9081, false, 0, this.effect_76B09D68_5088_7E39_41BF_BAEF43C60DF8, 'hideEffect', false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--RENT CAR"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_267C68D8_3B30_8AF9_41AE_A8AEDF65AD7A",
  "this.Container_267C88D8_3B30_8AF9_41A9_FC9B5E2482A7"
 ],
 "id": "Container_267CB8D8_3B30_8AF9_41C6_8717BB472285",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_267CB8D8_3B30_8AF9_41C6_8717BB472285, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---KLOOK RAJATOUR"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_27E311E2_3B13_9AC9_41C4_270188C6A903",
  "this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41"
 ],
 "id": "Container_27E551E2_3B13_9AC9_41CB_D66B21124B3A",
 "width": 300.05,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "35.95%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "overflow": "scroll",
 "height": "93.88%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- Anothertour"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_5732F086_45BA_1CDF_41D0_C0D9B42148E3",
  "this.Container_57329086_45BA_1CDF_41CE_22567265CD5B"
 ],
 "id": "Container_57354086_45BA_1CDF_41CE_AA4D319AD0E7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_57354086_45BA_1CDF_41CE_AA4D319AD0E7, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--- book savoy homan"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_5B663956_45F5_EC7C_41A1_1A1E25590463",
  "this.Container_5B661956_45F5_EC7C_41C0_163BBA6083FD"
 ],
 "id": "Container_5B61F956_45F5_EC7C_4166_83DED02E41D6",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_5B61F956_45F5_EC7C_4166_83DED02E41D6, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "---AUTOMOBIL"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "UIComponent87011"
 },
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ZoomImage87012"
 }
},
{
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 5,
 "right": 10,
 "paddingLeft": 5,
 "borderRadius": 0,
 "minHeight": 0,
 "pressedIconColor": "#888888",
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "iconColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "borderSize": 0,
 "paddingBottom": 5,
 "gap": 5,
 "paddingTop": 5,
 "fontStyle": "normal",
 "class": "CloseButton",
 "iconLineWidth": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "data": {
  "name": "CloseButton87013"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "oggUrl": "media/audio_97DBC096_B570_DFF2_41D1_C62EF1FF4955.ogg",
 "mp3Url": "media/audio_97DBC096_B570_DFF2_41D1_C62EF1FF4955.mp3",
 "id": "audioresource_912C07CD_B570_C151_41D9_8DDE24385A11",
 "class": "AudioResource"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.68,
   "yaw": 116.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0_HS_0_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 14.51
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6032C035_4596_3C3D_41AF_0939A5BACBBD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_61176252_4596_3C74_41D0_6CCAA0598AC9, this.video_61D95A95_4596_6CFD_41C7_27D5D07B79C1, this.PlayList_61B4F8EE_458A_6C2F_41C9_9449A9AE9591, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_5BCC19D7_45F5_EC7C_41CF_1917D3D59FC8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.81,
   "yaw": 113.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.91
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6106BB76_4596_2C3F_41A6_D246DF494EE9, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_60552D7A_4596_2434_41B0_F2A2ADD5BECA, this.video_61D95A95_4596_6CFD_41C7_27D5D07B79C1, this.PlayList_61B538EE_458A_6C2F_4195_3145197AC9A0, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_66D7BB03_459A_2DD5_41C4_86729F244C18",
   "pitch": 20.91,
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 113.99
  }
 ],
 "id": "overlay_5AA51FB0_458B_E434_41D0_3CF226529177",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.29,
   "yaw": -178.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.09
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_95071292_B550_C3F3_41DF_A77C98979074, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_66D70B03_459A_2DD5_419B_D8E205F1FD20",
   "pitch": 2.09,
   "hfov": 6.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -178.22
  }
 ],
 "id": "overlay_6460E388_458E_3CD3_41C2_65E3C48A67B5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.35
  }
 ],
 "data": {
  "label": "Circle Arrow 07"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39, this.camera_09C28A7A_468A_2C37_41C4_5F557EBBA82E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_66D72B03_459A_2DD5_41BD_72AEF26FD44F",
   "pitch": 2.35,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.35
  }
 ],
 "id": "overlay_648AE971_458E_2C34_419B_51D0D3957BD5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.55,
   "yaw": 88.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.06
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF, this.camera_09D7CA84_468A_2CD3_41A0_394444659E8A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_66D74B04_459A_2DD3_41B5_7943C57715EB",
   "pitch": -0.06,
   "hfov": 9.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.05
  }
 ],
 "id": "overlay_652CE5B9_458A_2434_41AF_23C9C16D59ED",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.33,
   "yaw": 14.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.96
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 29.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_6_0.png",
      "width": 1291,
      "class": "ImageResourceLevel",
      "height": 1103
     }
    ]
   },
   "pitch": -18.96,
   "yaw": 14.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6539CA26_458A_2FDC_41B5_93E7E1A26B58",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_644298CE_459A_2C6F_4199_0A28C5C5C061', [this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061]); } else { this.resumeGlobalAudios('overlay_644298CE_459A_2C6F_4199_0A28C5C5C061'); }",
 "blending": 0,
 "id": "overlay_644298CE_459A_2C6F_4199_0A28C5C5C061",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_644298CE_459A_2C6F_4199_0A28C5C5C061_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -10.84,
 "chromaSmoothing": 0.07,
 "roll": -0.38,
 "click": "if(this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061.get('state') != 'playing'){ this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061.play(); } else { this.overlay_644298CE_459A_2C6F_4199_0A28C5C5C061.pause(); }",
 "hfov": 20.2,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": -130.73,
 "vfov": 37.38,
 "rotationY": 1.2,
 "useHandCursor": true,
 "rotationX": 2.52,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.24,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AABEDE67_B530_4352_41D2_EA8849D009FD.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.44,
   "yaw": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.98
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6E09EEC8_45BD_E453_419F_7D90AF7E2DDC",
   "pitch": -8.98,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.24
  }
 ],
 "id": "overlay_62ACBAD2_458A_2C77_4195_B1F895F507E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.04,
   "yaw": -137.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0_HS_8_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 8.17
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0_HS_8_0.png",
      "width": 506,
      "class": "ImageResourceLevel",
      "height": 601
     }
    ]
   },
   "pitch": 8.17,
   "yaw": -137.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E1A0023_4596_3BD4_41D1_5EACEF54DC94",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -141.06,
 "pitch": 69.15,
 "bleaching": 0.7,
 "id": "overlay_7CDFFFA4_468A_24D3_41C6_6CA08043E323",
 "class": "LensFlarePanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FC",
 "id": "viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FCVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.17,
   "yaw": 72.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.84
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8, this.camera_164D8AF0_468A_2C33_41A7_D91D51F2CF50); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D7F3D0_3B13_FEC8_41A7_C0D3AE4EBC79",
   "pitch": -1.84,
   "hfov": 17.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 72.41
  }
 ],
 "id": "overlay_9B34E013_B977_9967_41E4_AFF9FB68C05E",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968', [this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968]); } else { this.resumeGlobalAudios('overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968'); }",
 "blending": 0,
 "id": "overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -6.09,
 "chromaSmoothing": 0.05,
 "roll": 0,
 "click": "if(this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968.get('state') != 'playing'){ this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968.play(); } else { this.overlay_9AFC7C3C_B969_89A1_41D7_50F8F749D968.pause(); }",
 "hfov": 17.08,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": -147.95,
 "vfov": 33.12,
 "rotationY": 0,
 "useHandCursor": true,
 "rotationX": 10.73,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.26,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_9DE45B6D_B969_8FA3_41D8_B29263D9AA27.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.35,
   "yaw": -174.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.75
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_99C4460C_BA96_F961_41DA_E8E17F508E7D, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_1_0.png",
      "width": 434,
      "class": "ImageResourceLevel",
      "height": 357
     }
    ]
   },
   "pitch": 6.75,
   "yaw": -174.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9E346E54_B969_89E1_41D6_95F1AEFA1682",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.81,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.91
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 36.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_3_0.png",
      "width": 1806,
      "class": "ImageResourceLevel",
      "height": 1500
     }
    ]
   },
   "pitch": -31.91,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB5E0C14_C9A0_D5D6_41E4_F4917AA03BF7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.87,
   "yaw": -46.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.98
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.openLink('https://www.google.co.id/maps/@-6.9207258,107.6100756,3a,75y,94.14h,88.95t/data=!3m7!1e1!3m5!1sAF1QipPRdf_PqbRzf_GCyLXg0sZ-xjruFEUt8VRsPvsQ!2e10!3e11!7i13312!8i6656', '_top')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1BFC9D81_3B10_8B48_41A3_8898144C63FD",
   "pitch": -8.98,
   "hfov": 17.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.85
  }
 ],
 "id": "overlay_2596E6E0_3B11_86C9_41CC_958E1A7B48D3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -154.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.93
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0_HS_5_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 433
     }
    ]
   },
   "pitch": 8.93,
   "yaw": -154.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6927BF1A_458A_25F4_41C5_102147C24555",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -87.55,
 "pitch": 60.1,
 "bleaching": 0.7,
 "id": "overlay_72FD08E4_4695_EC5C_41C4_502C2577E958",
 "class": "LensFlarePanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891",
 "id": "viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.33,
   "yaw": 126,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.86
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39, this.camera_16A95B0E_468A_2DEF_41C0_633A4676B42A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D753D1_3B13_FEC8_41A6_88BF09C3D9C4",
   "pitch": -2.86,
   "hfov": 25.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126
  }
 ],
 "id": "overlay_A86095BF_B9AE_7A9F_41B3_12C8092A8A4B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.13,
   "yaw": -93.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2, this.camera_1681EB23_468A_2DD5_415A_04959B76F994); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D713D1_3B13_FEC8_41BE_662532891FBD",
   "pitch": -26.59,
   "hfov": 23.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.84
  }
 ],
 "id": "overlay_ABEAA280_B9BF_B961_41D7_DB45D0F74918",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.29,
   "yaw": -168.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.52
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0, this.camera_165A2B04_468A_2DDC_41D0_8164163CC165); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D6E3D1_3B13_FEC8_41C0_E3DF7B5CED7C",
   "pitch": 5.52,
   "hfov": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.95
  }
 ],
 "id": "overlay_AB68A023_B9B6_79A7_41CC_94D52A541E4C",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552', [this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552]); } else { this.resumeGlobalAudios('overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552'); }",
 "blending": 0,
 "id": "overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -21.33,
 "chromaSmoothing": 0.04,
 "roll": 1.7,
 "click": "if(this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552.get('state') != 'playing'){ this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552.play(); } else { this.overlay_AA02EE51_B9FE_89E3_41E6_2241768E8552.pause(); }",
 "hfov": 28.29,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": -127.14,
 "vfov": 54.75,
 "rotationY": -1.89,
 "useHandCursor": true,
 "rotationX": 18.37,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.26,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_A6F1806E_B4F3_BF52_41DA_4F726885D674.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 39.93,
   "yaw": -8.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -38.03
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 39.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_4_0.png",
      "width": 1866,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -38.03,
   "yaw": -8.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB549911_C9AF_DFAF_41E4_54910DF3D13A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.14,
   "yaw": 37.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.16
  }
 ],
 "data": {
  "label": "Info Red 08"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DDF476AE_C9A3_32F2_41C0_BFB7E1AA77F0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23E9C3D2_3B13_FEC8_41C0_4CDB6EE08426",
   "pitch": -25.16,
   "hfov": 18.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.84
  }
 ],
 "id": "overlay_DB10479F_C9A1_32D2_41C8_8C9BF947D736",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.58,
   "yaw": 125.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.52
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39, this.camera_16B25B19_468A_2DF5_4182_A02969E5E72A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_6_0.png",
      "width": 1139,
      "class": "ImageResourceLevel",
      "height": 951
     }
    ]
   },
   "pitch": 13.52,
   "yaw": 125.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E84AABE5_C9A3_5276_41A3_2D77D3459E65",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.04,
   "yaw": -139.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.29
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_0_HS_7_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 799
     }
    ]
   },
   "pitch": 7.29,
   "yaw": -139.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7FFAFAEF_468E_6C2D_41BB_43430689AD64",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.9,
   "yaw": 79.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.43
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8, this.camera_1650CAFA_468A_2C37_41BF_AD48B7B317C5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D453D1_3B13_FEC8_41B4_0ADF0D48BD07",
   "pitch": -1.43,
   "hfov": 13.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.36
  }
 ],
 "id": "overlay_928D8502_BA9B_9B61_41E5_017A1C337AC1",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64', [this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64]); } else { this.resumeGlobalAudios('overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64'); }",
 "blending": 0,
 "id": "overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -5.24,
 "chromaSmoothing": 0.05,
 "roll": 0.57,
 "click": "if(this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64.get('state') != 'playing'){ this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64.play(); } else { this.overlay_92DD4173_BA96_9BA7_41D9_FF1BD9BADE64.pause(); }",
 "hfov": 20.79,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": 5.43,
 "vfov": 31.06,
 "rotationY": -2.22,
 "useHandCursor": true,
 "rotationX": 5.21,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.26,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_96DB004F_BA96_99FF_41D3_C1F343A0EAFA.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.76,
   "yaw": -36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.14
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_9065F21F_BAAA_B99F_41C3_7B6D5F677BFF, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_1_0.png",
      "width": 409,
      "class": "ImageResourceLevel",
      "height": 409
     }
    ]
   },
   "pitch": 6.14,
   "yaw": -36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_907E2A71_BAAA_89A3_41DC_57FB9C51A706",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.01,
   "yaw": -29.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_3_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.76
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 36.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_3_0.png",
      "width": 1567,
      "class": "ImageResourceLevel",
      "height": 1089
     }
    ]
   },
   "pitch": -16.76,
   "yaw": -29.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DD20A791_C9A1_D2AF_41D2_039E644DEC61",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -3.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.56
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_0_HS_4_0.png",
      "width": 527,
      "class": "ImageResourceLevel",
      "height": 548
     }
    ]
   },
   "pitch": 9.56,
   "yaw": -3.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6904E72C_458A_25D3_4199_086FCD9BEDD0",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -1.38,
 "pitch": 61.61,
 "bleaching": 0.7,
 "id": "overlay_73BF222F_4696_1C2C_41B8_2420FC5F1F72",
 "class": "LensFlarePanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.33",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.26",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_9D33973B_BA97_87A7_41DF_5A70FB157558_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_9D33973B_BA97_87A7_41DF_5A70FB157558_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 55,
 "maxWidth": 56,
 "id": "IconButton_2C44A08B_3EE0_B386_41A4_719E9E785ABD",
 "width": 56,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "5.91%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "0%",
 "height": 55,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_D1028355_D6DE_1EB3_41B9_9E35CE8C5AC1.png",
 "shadow": false,
 "data": {
  "name": "IconButton10837"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "right": 30,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.7,
   "yaw": 26.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.35
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_57354086_45BA_1CDF_41CE_AA4D319AD0E7, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 33.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_0_0.png",
      "width": 503,
      "class": "ImageResourceLevel",
      "height": 387
     }
    ]
   },
   "pitch": -2.35,
   "yaw": 26.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5435BB48_45B5_EC54_41C5_054917A4A12E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.91,
   "yaw": 154.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.15
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B458775_459F_E43C_41C3_947957808976, this.camera_16752ADC_468A_2C73_41B7_6C72B356E5B4); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5F360532_45B5_E434_41CA_CE46655725F3",
   "pitch": 0.15,
   "hfov": 15.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.54
  }
 ],
 "id": "overlay_53632CF0_45BE_2434_41D0_DA3A00BAB2C8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.47,
   "yaw": 154.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.16
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B458775_459F_E43C_41C3_947957808976, this.camera_16785AE6_468A_2C5F_41A1_990B507DFA2E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.47,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_2_0.png",
      "width": 405,
      "class": "ImageResourceLevel",
      "height": 405
     }
    ]
   },
   "pitch": 20.16,
   "yaw": 154.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_56562B1E_45BA_2DEC_4193_C8B0777C33E1",
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid09456A12_468A_2FF4_41BB_CAE9F914E891",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87010"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "stateChange": "if(this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA', [this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA]); } else { this.resumeGlobalAudios('overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA'); }",
 "blending": 0,
 "id": "overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -13.91,
 "chromaSmoothing": 0.03,
 "roll": -1.07,
 "click": "if(this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA.get('state') != 'playing'){ this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA.play(); } else { this.overlay_BA72DEDA_B4D0_4372_41C9_BC20B1863CEA.pause(); }",
 "hfov": 24.7,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": 142.05,
 "vfov": 41.87,
 "rotationY": -7.01,
 "useHandCursor": true,
 "rotationX": 15.11,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.25,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_A4C4DE67_B4D7_C352_41D6_746F65A23287.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -176.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.75
  }
 ],
 "data": {
  "label": "Info Red 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87, this.camera_0997FA46_468A_2C5C_41AF_A3FAF18A9359); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23DA73CA_3B13_FED8_41C2_47A40DEB9E68",
   "pitch": 0.75,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -176.6
  }
 ],
 "id": "overlay_A8D0F340_B530_C14E_41E0_09010592CA0F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": 91.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04, this.camera_098C1A3C_468A_2C2C_41CA_DFD1F58EA5D3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23DA33CB_3B13_FED8_415F_C24D794209FC",
   "pitch": -0.94,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.71
  }
 ],
 "id": "overlay_A8B90102_B530_5ED2_41B8_AE3B7BF511A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.12,
   "yaw": 48.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -27.4
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 30.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_5_0.png",
      "width": 1413,
      "class": "ImageResourceLevel",
      "height": 1635
     }
    ]
   },
   "pitch": -27.4,
   "yaw": 48.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8885D29_C9A7_37FE_41D8_BFC3E20753B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.26,
   "yaw": -175.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_9_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.73
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87, this.camera_099FFA52_468A_2C77_41C5_F212F07A8B8B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_9_0.png",
      "width": 645,
      "class": "ImageResourceLevel",
      "height": 546
     }
    ]
   },
   "pitch": 9.73,
   "yaw": -175.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF197A22_C9E7_3DF2_41E0_7565B6D723C2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.55,
   "yaw": -148.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_10_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.42
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_10_0.png",
      "width": 653,
      "class": "ImageResourceLevel",
      "height": 517
     }
    ]
   },
   "pitch": 7.42,
   "yaw": -148.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2C6092CB_3A06_6A32_41C6_4F2FF60B5484",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.52,
   "yaw": -168.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_11_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.47
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_27E551E2_3B13_9AC9_41CB_D66B21124B3A, true, 0, null, null, false); this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 29.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_11_0.png",
      "width": 1312,
      "class": "ImageResourceLevel",
      "height": 1103
     }
    ]
   },
   "pitch": -20.47,
   "yaw": -168.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22FA7D4D_3A02_9E36_41C8_12F9E71DD465",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -148.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.25
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23DCF3CB_3B13_FED8_4195_7F93B6024051",
   "pitch": 0.25,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.48
  }
 ],
 "id": "overlay_A9BD4406_B530_46D2_41DB_E087AA42EB3B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.24,
   "yaw": -57.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_12_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ]
   },
   "pitch": -7.53
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2C420815_3B30_894B_41B9_30F832AB9081, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 23.24,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_12_0.png",
      "width": 981,
      "class": "ImageResourceLevel",
      "height": 709
     }
    ]
   },
   "pitch": -7.53,
   "yaw": -57.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F6A3B10_3A02_7A2E_4176_C6668BB895E2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": 64.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.74
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23DC63CB_3B13_FED8_41AD_C116BAB222C5",
   "pitch": -19.74,
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.52
  }
 ],
 "id": "overlay_2BCE5239_3AF1_99B8_41A0_C3659BD6E115",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -65.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2C420815_3B30_894B_41B9_30F832AB9081, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_25BCC219_3B11_997B_41A3_9929F1EF3706",
   "pitch": -0.19,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -65.19
  }
 ],
 "id": "overlay_278D7187_3B10_7B48_41B0_A68FEE0CCD73",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.66,
   "yaw": 131.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.64
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_15_0.png",
      "width": 572,
      "class": "ImageResourceLevel",
      "height": 560
     }
    ]
   },
   "pitch": 5.64,
   "yaw": 131.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68787FE7_459E_245C_41CA_0C45F6FDEDEF",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -166.94,
 "pitch": 66.89,
 "bleaching": 0.7,
 "id": "overlay_7FE6F8CD_468A_EC6D_41D0_10CD4541CDE1",
 "class": "LensFlarePanoramaOverlay"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6B",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6B.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_0961FA03_468A_2FD4_41BF_D7F51AB2F682.set('selectedIndex', -1); }, this); this.playList_0961FA03_468A_2FD4_41BF_D7F51AB2F682.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedRollOverIconURL": "skin/IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedRollOverIconURL": "skin/IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A3028419_B996_7960_41CB_70858BF443D8",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_A3028419_B996_7960_41CB_70858BF443D8_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A3028419_B996_7960_41CB_70858BF443D8_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A3028419_B996_7960_41CB_70858BF443D8.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedRollOverIconURL": "skin/IconButton_A3028419_B996_7960_41CB_70858BF443D8_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_99C3A60C_BA96_F961_41E3_872301B58419_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_99C3A60C_BA96_F961_41E3_872301B58419_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_99C3A60C_BA96_F961_41E3_872301B58419.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedRollOverIconURL": "skin/IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_95073292_B550_C3F3_41E1_807B1D26EB34_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_95073292_B550_C3F3_41E1_807B1D26EB34_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_95073292_B550_C3F3_41E1_807B1D26EB34.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedRollOverIconURL": "skin/IconButton_95073292_B550_C3F3_41E1_807B1D26EB34_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedRollOverIconURL": "skin/IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_99C3860C_BA96_F961_41E0_46132593A3A0_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_99C3860C_BA96_F961_41E0_46132593A3A0_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_99C3860C_BA96_F961_41E0_46132593A3A0.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4D",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87009"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_09672A03_468A_2FD4_41CB_CCB24AB93614.set('selectedIndex', -1); }, this); this.playList_09672A03_468A_2FD4_41CB_CCB24AB93614.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "items": [
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.66",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.44",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_AA4C1B96_B551_C1F2_41C9_C73623CA2E2C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "viewerArea": "this.viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828",
 "id": "viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.28,
   "yaw": -51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.58
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04, this.camera_1697BB2E_468A_2C2F_41C6_3E86F76A782C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D1F3CC_3B13_FED8_41C7_B0CA325B55AE",
   "pitch": 3.58,
   "hfov": 11.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51
  }
 ],
 "id": "overlay_9219EF44_B570_4156_41DD_AFA5F0A1E056",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.82,
   "yaw": 161.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_980574D8_B550_477E_41DB_3213BCA7C484, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D143CD_3B13_FED8_41C0_5FFF9449F79E",
   "pitch": -1.19,
   "hfov": 14.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.03
  }
 ],
 "id": "overlay_9E007C15_B550_46F1_41E1_58F2F8116647",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.44,
   "yaw": 30.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.1
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9B013787_B531_C1D2_41B4_EB02BBA647F2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_49133258_4576_3C73_41C9_B44243DCEA57, this.video_9A3B8A26_B531_C2D2_41D2_523573F47051, this.PlayList_5F225547_45B5_E45C_41A4_987ECB4ECAD9, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_2_0.png",
      "width": 587,
      "class": "ImageResourceLevel",
      "height": 427
     }
    ]
   },
   "pitch": 28.1,
   "yaw": 30.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_98649778_B530_C13E_41D2_B1B06FCAA469",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_9822D729_B530_42DE_41E4_01223EBE8ED5', [this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5]); } else { this.resumeGlobalAudios('overlay_9822D729_B530_42DE_41E4_01223EBE8ED5'); }",
 "blending": 0,
 "id": "overlay_9822D729_B530_42DE_41E4_01223EBE8ED5",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_9822D729_B530_42DE_41E4_01223EBE8ED5_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -13.52,
 "chromaSmoothing": 0.03,
 "roll": 0.53,
 "click": "if(this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5.get('state') != 'playing'){ this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5.play(); } else { this.overlay_9822D729_B530_42DE_41E4_01223EBE8ED5.pause(); }",
 "hfov": 21.95,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": -173.1,
 "vfov": 41.07,
 "rotationY": -2.65,
 "useHandCursor": true,
 "rotationX": 12.12,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.27,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_9A822FEB_B531_C152_41CB_77D920739439.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.21,
   "yaw": -11.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.4
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B458775_459F_E43C_41C3_947957808976, this.camera_16EA2B43_468A_2C55_41A0_72734BDDA6A0); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5F3CF528_45B5_E5D4_41BC_569877B3D41C",
   "pitch": -13.4,
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.01
  }
 ],
 "id": "overlay_9BB076D5_B531_C376_41D0_EFDC58BB5C79",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.32,
   "yaw": 131.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8, this.camera_16E59B39_468A_2C35_4191_B476D0E2AFC5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D353CF_3B13_FED8_41A5_CFEB0FC70DCE",
   "pitch": 0,
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 131.11
  }
 ],
 "id": "overlay_ACF5B794_B99A_8761_41E5_BB658DA368DC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": 177.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.66
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_8_0.png",
      "width": 527,
      "class": "ImageResourceLevel",
      "height": 496
     }
    ]
   },
   "pitch": 4.66,
   "yaw": 177.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6ED562D8_458A_7C73_41CD_2D60ECA881A2",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -139.3,
 "pitch": 65.38,
 "bleaching": 0.7,
 "id": "overlay_7323E148_468A_7C53_41B5_D5F8743B5EB6",
 "class": "LensFlarePanoramaOverlay"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid09742A0B_468A_2FD4_41BF_D91455E410FC",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87005"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "items": [
  {
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.36",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_D286B26D_C9E3_7277_41D8_69AEBC4109F0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_D2A33389_C9E3_72BF_41E4_520F038567ED",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_D19C642E_C9E3_75F5_41E3_D85181A1931B",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_D1EA9529_C9E3_77FE_41D9_79F0C95D94A8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_90FE43EE_BAA9_BEA1_417B_B3D07D975135_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_09642A03_468A_2FD4_41C8_3CBFF01A4923.set('selectedIndex', -1); }, this); this.playList_09642A03_468A_2FD4_41C8_3CBFF01A4923.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.14,
   "yaw": -62.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.35
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF, this.camera_09FEFA70_468A_2C33_41CB_74733D763D93); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_66D45B03_459A_2DD5_41CB_2D86B91CF6E9",
   "pitch": -8.35,
   "hfov": 19.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.3
  }
 ],
 "id": "overlay_55C30153_459A_7C75_41C9_1287DC2909D7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.12,
   "yaw": 99.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.7
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC, this.camera_09E0CA5C_468A_2C73_41C6_1FD7409F8A9B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5F312532_45B5_E434_413C_8666753B9C7C",
   "pitch": 13.7,
   "hfov": 10.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.04
  }
 ],
 "id": "overlay_5580158A_459A_24D7_41C2_91528962AFB5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.95,
   "yaw": 98.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 29.98
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B6208D_459F_FCEC_41A1_0036483C54EC, this.camera_09F5AA66_468A_2C5F_41CF_32256C4E8460); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_1_HS_2_0.png",
      "width": 597,
      "class": "ImageResourceLevel",
      "height": 549
     }
    ]
   },
   "pitch": 29.98,
   "yaw": 98.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54A06563_458A_2454_41CB_2185AFA1623C",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_62443220_45B6_1FD4_4187_09FABBF8CD04', [this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04]); } else { this.resumeGlobalAudios('overlay_62443220_45B6_1FD4_4187_09FABBF8CD04'); }",
 "blending": 0,
 "id": "overlay_62443220_45B6_1FD4_4187_09FABBF8CD04",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_62443220_45B6_1FD4_4187_09FABBF8CD04_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -13.82,
 "chromaSmoothing": 0.14,
 "roll": 0.68,
 "click": "if(this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04.get('state') != 'playing'){ this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04.play(); } else { this.overlay_62443220_45B6_1FD4_4187_09FABBF8CD04.pause(); }",
 "hfov": 29.71,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#0AE533",
 "autoplay": true,
 "yaw": 141.74,
 "vfov": 55.6,
 "rotationY": -6.54,
 "useHandCursor": true,
 "rotationX": 11.38,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.27,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC495992_B99F_8B61_41CC_8FD6D7A7A772.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.17,
   "yaw": 127.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.65
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0_HS_3_0.png",
      "width": 380,
      "class": "ImageResourceLevel",
      "height": 385
     }
    ]
   },
   "pitch": 14.65,
   "yaw": 127.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6801B0BD_457A_3C2D_41B9_0BEC30E188C4",
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87006"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "viewerArea": "this.viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4D",
 "id": "viewer_uid0945CA12_468A_2FF4_41A8_4F52F5765E4DVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "viewerArea": "this.viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228",
 "id": "viewer_uid09777A0C_468A_2FEC_41A4_B8EAB5EAC228VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_A2FF3A7D_B996_89A3_41E1_942205482DFB_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.52",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_A2FF3A7D_B996_89A3_41E1_942205482DFB_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BD",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87008"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_0965FA02_468A_2FD4_41C8_261C68E3B510.set('selectedIndex', -1); }, this); this.playList_0965FA02_468A_2FD4_41C8_261C68E3B510.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.27,
   "yaw": 64.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87, this.camera_16090ABC_468A_2C33_41C8_9239EFF74B7A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23E973D2_3B13_FEC8_41B6_690E41404AC1",
   "pitch": -28.64,
   "hfov": 21.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.48
  }
 ],
 "id": "overlay_ABAA207E_B9B9_99A1_41C4_393C716EF06E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.23,
   "yaw": 139.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.91
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0, this.camera_16043AB0_468A_2C33_41B7_9EA149817883); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23E933D2_3B13_FEC8_41C3_8B1800703A3A",
   "pitch": -4.91,
   "hfov": 12.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139.5
  }
 ],
 "id": "overlay_ABC3CDA2_B9BB_8AA1_41D2_2A41568F463F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -69.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ],
 "data": {
  "label": "Info Red 08"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_AD702096_B9EF_9961_41DB_16314013E6F6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23E893D2_3B13_FEC8_41C8_96B3319C6495",
   "pitch": -6.14,
   "hfov": 12.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -69.95
  }
 ],
 "id": "overlay_ADF44170_B9EF_9BA1_41AA_FB025D1349DA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.16,
   "yaw": 157.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.5
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_AC8CD119_B9EA_9B63_41C4_147CE5B21D77, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_AC774018_B999_B961_41DD_41DCAE52A08C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23E863D2_3B13_FEC8_41C0_C50317802929",
   "pitch": 4.5,
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.5
  }
 ],
 "id": "overlay_ACB98007_B9E9_F96F_41E5_FDB814A6AA65",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": 168.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.23
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_AC2D797A_B9EB_8BA1_41C4_43DA650A80EB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_AC741018_B999_B961_41E5_AD65B94AE481, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EBD3D3_3B13_FEC8_41BF_0BB64022D75B",
   "pitch": -1.23,
   "hfov": 9.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.14
  }
 ],
 "id": "overlay_AC6A8803_B9EA_8967_4179_61FF3C0BA873",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.56,
   "yaw": 179.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.7
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A1B4BF0A_B9EA_8761_41E5_3FB695F65AE1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_AC77F019_B999_B963_4183_74DC477B76D0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EBA3D3_3B13_FEC8_41B6_FB3A0D1E2463",
   "pitch": 4.7,
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.39
  }
 ],
 "id": "overlay_ACCFABFD_B9EA_8EA3_41CA_1B119172F62F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.39,
   "yaw": -172.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_AC48BB26_B9E9_8FA1_4190_BAAF31723865, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_AC773019_B999_B963_41BC_8D5F33CF5BBB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EB23D3_3B13_FEC8_41C8_B7FC182567D6",
   "pitch": -3.27,
   "hfov": 9.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.43
  }
 ],
 "id": "overlay_AC7AADC4_B9E9_8AE1_4192_86A0D9F3A311",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.14,
   "yaw": -162.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.52
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_ACE083E3_B996_BEA7_41A7_28EAAA02E06A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_AC77401A_B999_B961_41DC_8EC028FC1290, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EAF3D3_3B13_FEC8_41CB_02E6B73C66B2",
   "pitch": 5.52,
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.41
  }
 ],
 "id": "overlay_ACE14AB5_B996_8EA3_41D0_DFE836AEFDA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.72,
   "yaw": -133.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.85
  }
 ],
 "data": {
  "label": "Info Red 07"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_7CA7E159_46BE_1C75_41CA_FE3B0DD068F5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7D4EB38D_46BE_1CEC_41C7_6E1282E2297D, this.video_7A773C96_46BE_24FF_41CB_2B79BFA28BD6, this.PlayList_7861A353_46B6_3C75_41C9_7B0DF2D20436, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0F568C1A_468A_2BF4_41CE_76E6E2FBE186",
   "pitch": 6.85,
   "hfov": 12.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -133.15
  }
 ],
 "id": "overlay_7C818209_46BE_7FD4_41C9_0A370A427B66",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.7,
   "yaw": -39.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.4
  }
 ],
 "data": {
  "label": "Info Red 07"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_7DD51C3F_46B6_242C_4192_CED23EA41047, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7AB8FF13_46B6_25F4_41C9_EDED76930847, this.video_7FED7A1E_46B6_6FEC_4144_E9C89F7B08C4, this.PlayList_78611354_46B6_3C73_41B6_16899BBF1894, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_7872B34C_46B6_3C53_41C4_0F50BB850C66",
   "pitch": 6.4,
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.16
  }
 ],
 "id": "overlay_7DFFF490_46B6_24F4_41A6_A3A4EAEE3E6C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.69,
   "yaw": -10.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.79
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.69,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_10_0.png",
      "width": 1124,
      "class": "ImageResourceLevel",
      "height": 1103
     }
    ]
   },
   "pitch": -23.79,
   "yaw": -10.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_02329116_468E_1DFC_41C3_80C317549FE9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.13,
   "yaw": 89.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.05
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF, this.camera_16305AA5_468A_2CDD_41CC_9E076620956F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D263CF_3B13_FED8_41CA_5A5A63125612",
   "pitch": 2.05,
   "hfov": 15.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.39
  }
 ],
 "id": "overlay_ACFE5455_B99B_F9E3_41B5_452DB2CF5590",
 "class": "HotspotPanoramaOverlay"
},
{
 "stateChange": "if(this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793', [this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793]); } else { this.resumeGlobalAudios('overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793'); }",
 "blending": 0,
 "id": "overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793",
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1920
   }
  ]
 },
 "pitch": -11.83,
 "chromaSmoothing": 0.05,
 "roll": 1.61,
 "click": "if(this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793.get('state') != 'playing'){ this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793.play(); } else { this.overlay_AF7D5B38_B9BA_8FA1_41D2_85D4CD1B1793.pause(); }",
 "hfov": 23.84,
 "class": "VideoPanoramaOverlay",
 "chromaColor": "#28C034",
 "autoplay": true,
 "yaw": -125.16,
 "vfov": 38.86,
 "rotationY": 1.64,
 "useHandCursor": true,
 "rotationX": 7.68,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.26,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_A1568E81_B9B9_8963_4199_61CCC890F481.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.68,
   "yaw": -169.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 9.61
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_A098DB3D_B99A_8FA3_41E4_C7AE5336EC85, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_4911825E_4576_3C6F_41A2_9F10FBC0F770, this.video_A3CDA463_B99B_99A7_41B9_F6EABD986164, this.PlayList_5F5DC547_45B5_E45C_41CC_3A6D645239B8, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_1_0.png",
      "width": 409,
      "class": "ImageResourceLevel",
      "height": 392
     }
    ]
   },
   "pitch": 9.61,
   "yaw": -169.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AF37D87E_B9BA_89A1_41DA_DE282E3A73EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.62,
   "yaw": -147.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.66
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_A3029419_B996_7960_4192_C528E20A86B0, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_2_0.png",
      "width": 409,
      "class": "ImageResourceLevel",
      "height": 426
     }
    ]
   },
   "pitch": 11.66,
   "yaw": -147.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A23DF679_B96A_B9A3_41CC_50C9EC2E9962",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.15,
   "yaw": -8.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.48
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA, this.camera_09DBBA90_468A_2CF3_41C4_6F187FDAB4BD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D523D0_3B13_FEC8_41AE_719DE23586DD",
   "pitch": 3.48,
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -8.59
  }
 ],
 "id": "overlay_98EF07BF_B976_869F_41A1_C9B2C023DFD3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.3,
   "yaw": -101.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.07
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65, this.camera_162C8A9B_468A_2CF5_41A4_29F65484837F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23D483D0_3B13_FEC8_41C6_47BBC2880B4A",
   "pitch": 3.07,
   "hfov": 14.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.66
  }
 ],
 "id": "overlay_9D7C3916_BA99_8B61_41E4_2D2830EA4374",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.18,
   "yaw": -159.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_6_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.8
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_6_0.png",
      "width": 1328,
      "class": "ImageResourceLevel",
      "height": 1055
     }
    ]
   },
   "pitch": -18.8,
   "yaw": -159.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DE6F86F1_C9FF_326E_41D9_4B6E9F3A649E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.25,
   "yaw": 52.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.92
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E95CD64D_C9A3_35B7_41CB_94361090AF0B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 33.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_7_0.png",
      "width": 1473,
      "class": "ImageResourceLevel",
      "height": 1197
     }
    ]
   },
   "pitch": 19.92,
   "yaw": 52.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBC1DCD7_CA5F_3652_41B7_6D24BE8D929F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.61,
   "yaw": -133.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0_HS_8_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.41
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_0_HS_8_0.png",
      "width": 527,
      "class": "ImageResourceLevel",
      "height": 454
     }
    ]
   },
   "pitch": 5.41,
   "yaw": -133.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_687CA77D_458E_242C_41CB_0E8845C6E6EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 11.93,
 "pitch": 67.14,
 "bleaching": 0.7,
 "id": "overlay_73A93959_468A_2C74_41C8_E13950E1FD54",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.71,
   "yaw": -88.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.45
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87, this.camera_161C7AC7_468A_2C5D_41C8_FEC47DD8507B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EA53D3_3B13_FEC8_41CA_8D1270A4BD9B",
   "pitch": 2.45,
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.77
  }
 ],
 "id": "overlay_AB4997E3_B9BA_86A7_41E2_D1655AE10EC3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.71,
   "yaw": -112.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.86
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2, this.camera_16615AD2_468A_2C77_41B5_C6350B117639); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_23EA23D3_3B13_FEC8_41C2_268B41E2E773",
   "pitch": 2.86,
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.5
  }
 ],
 "id": "overlay_AB63186B_B9B7_89A0_41E6_A04C5FF69B21",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.36,
   "yaw": -31.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.21
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 34.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_2_0.png",
      "width": 1515,
      "class": "ImageResourceLevel",
      "height": 1157
     }
    ]
   },
   "pitch": -19.21,
   "yaw": -31.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DCDC2520_C9A0_F7EE_41E3_CAFC795B4B64",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.15,
   "yaw": -42.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -7.15
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_3_0.png",
      "width": 510,
      "class": "ImageResourceLevel",
      "height": 561
     }
    ]
   },
   "pitch": -7.15,
   "yaw": -42.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA634C3E_C9A7_55D2_41DE_9AA02C863BB5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.75,
   "yaw": 148.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0_HS_4_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.41
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 28.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_0_HS_4_0.png",
      "width": 1469,
      "class": "ImageResourceLevel",
      "height": 1532
     }
    ]
   },
   "pitch": -35.41,
   "yaw": 148.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0517A084_468E_1CDC_41C4_A24722D200AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.54",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.46",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.40",
     "zoomFactor": 1.1
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   }
  }
 ],
 "id": "album_ACE40A41_B4D0_4351_41E4_BE7F1660CA08_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "viewerArea": "this.viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BD",
 "id": "viewer_uid09721A0E_468A_2FEC_41C4_0D27B88A07BDVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid09704A0D_468A_2FEC_41C3_6354E759D828",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea87007"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_091B0A02_468A_2FD4_41AC_B4CC3CFB0C19.set('selectedIndex', -1); }, this); this.playList_091B0A02_468A_2FD4_41AC_B4CC3CFB0C19.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "overflow": "visible",
 "height": 110,
 "propagateClick": true,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "height": "85.959%",
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "left",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "width": 501,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "textShadowOpacity": 1,
 "text": "BACK TO WEBSITE",
 "top": 5,
 "propagateClick": true,
 "textShadowVerticalLength": 0,
 "height": 86,
 "minWidth": 1,
 "fontSize": "45px",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://gurilaps.com/', '_top')",
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Book",
 "horizontalAlign": "left",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "width": 388,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "textShadowOpacity": 1,
 "text": "GURILAPS.COM",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 41,
 "textShadowVerticalLength": 0,
 "height": 46,
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://gurilaps.com/', '_top')",
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "shadow": false,
 "data": {
  "name": "white line"
 }
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 41,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "13.26%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "6.65%",
 "height": 38,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowSpread": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowSpread": 1,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_A20CD511_B4D0_46F1_41E4_06E8B667B827",
  "this.Container_A20C9511_B4D0_46F1_41C0_971DD33BE5DF"
 ],
 "shadowSpread": 1,
 "id": "Container_A20CE511_B4D0_46F1_41D3_600A02C1BF50",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_95079292_B550_C3F3_41B1_1D5A9B82624B",
  "this.Container_9507D292_B550_C3F3_41CD_C0D762530B00"
 ],
 "shadowSpread": 1,
 "id": "Container_9507B292_B550_C3F3_41B7_00EEF0F5B8B6",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_AED17C8A_B9B6_8960_41BA_68D5FF654B84"
 ],
 "shadowSpread": 1,
 "id": "Container_AED14C8A_B9B6_8960_41E2_89D78B9CDD96",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_AED10C8A_B9B6_8960_41DC_52816A9DE4B6"
 ],
 "id": "Container_AED16C8A_B9B6_8960_41E0_8E4160E87BCD",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_A3031419_B996_7960_41E4_2FD1A67FA782",
  "this.Container_A3035419_B996_7960_41E6_935FEC603B7F"
 ],
 "shadowSpread": 1,
 "id": "Container_A3030419_B996_7960_41B4_E02D8D33B2C0",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_99C3E60C_BA96_F961_41D0_2309880E3C85"
 ],
 "shadowSpread": 1,
 "id": "Container_99C3D60C_BA96_F961_41E3_F3A5CBDAD6FD",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_9065521F_BAAA_B99F_41D0_D7F10F211655"
 ],
 "shadowSpread": 1,
 "id": "Container_9065421F_BAAA_B99F_41E0_0AC282C4CD9C",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_9733B545_BAAB_9BE3_41E2_D403BA818CDF"
 ],
 "shadowSpread": 1,
 "id": "Container_97324545_BAAB_9BE3_41DD_C660C73EA16B",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_97339545_BAAB_9BE3_41DB_E3A4C0B49EF3"
 ],
 "id": "Container_9733A545_BAAB_9BE3_41E5_870A2CB77CAB",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_976A42CB_BA97_9EE7_41DF_80B8B0284699"
 ],
 "shadowSpread": 1,
 "id": "Container_976A52CB_BA97_9EE7_41E5_558F701D1D0C",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_976BA2CB_BA97_9EE7_41D4_B2C7A4AAAC0B"
 ],
 "id": "Container_976BB2CB_BA97_9EE7_41D5_D7A9BC18D79D",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_DAE8C8E8_C9A1_FE7D_41E3_62478D54213E"
 ],
 "shadowSpread": 1,
 "id": "Container_DAE8F8E8_C9A1_FE7D_41CC_8EA0F33BCE33",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_DAE8B8E8_C9A1_FE7D_414B_FD7B38359DD8"
 ],
 "id": "Container_DAE8D8E8_C9A1_FE7D_41E6_6EFC0C18C06B",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_E95C164D_C9A3_35B7_41DD_678C6CC626DF"
 ],
 "shadowSpread": 1,
 "id": "Container_E95C064C_C9A3_35B5_41B7_5EF5439AF3FF",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_E95C364D_C9A3_35B7_41E8_665E2A7C5C80"
 ],
 "id": "Container_E95C264D_C9A3_35B7_41E9_0ABE0EBEA575",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_E20C9A60_CAA1_F26E_41E3_8BDD5B97FE66"
 ],
 "shadowSpread": 1,
 "id": "Container_E20CAA60_CAA1_F26E_41E7_AEE956410804",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_E2134A60_CAA1_F26E_41E4_13440F51D6D8"
 ],
 "id": "Container_E2137A60_CAA1_F26E_41E8_6FE4DD98407A",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_2847154E_3A05_EE32_41C8_996968339EFA"
 ],
 "shadowSpread": 1,
 "id": "Container_2847054E_3A05_EE32_41C9_1AF69282BF8D",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_2847354E_3A05_EE32_41AB_F127196263DA"
 ],
 "id": "Container_2847254E_3A05_EE32_4150_87D41FA5677B",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_2C41C815_3B30_894B_41C8_5C2E58E6051B",
  "this.Container_2C41A815_3B30_894B_41C8_D754F326429B"
 ],
 "shadowSpread": 1,
 "id": "Container_2C41F814_3B30_8949_41B8_523599E17082",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_2C422815_3B30_894B_41BB_F06EF95C1503"
 ],
 "id": "Container_2C425815_3B30_894B_4195_FF761645A056",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_267C78D8_3B30_8AF9_41C9_CD8DF0FC2BC7"
 ],
 "shadowSpread": 1,
 "id": "Container_267C68D8_3B30_8AF9_41AE_A8AEDF65AD7A",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_267CA8D8_3B30_8AF9_41C0_6D81E8E19F44"
 ],
 "id": "Container_267C88D8_3B30_8AF9_41A9_FC9B5E2482A7",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_27E331E2_3B13_9AC9_41C0_BC452C5292A7",
  "this.IconButton_27E351E2_3B13_9AC9_41C7_9AD04165312C"
 ],
 "id": "Container_27E311E2_3B13_9AC9_41C4_270188C6A903",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_27E291E2_3B13_9AC9_41C1_AFBCF73F3968",
  "this.Container_27E281E2_3B13_9AC9_41A6_87D4CD606152",
  "this.Container_27E5D1E2_3B13_9AC9_41CA_F2580D391000"
 ],
 "id": "Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41",
 "width": 300,
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 40,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 40,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 40,
 "paddingTop": 40,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_57328086_45BA_1CDF_41AA_36F1F8234311"
 ],
 "shadowSpread": 1,
 "id": "Container_5732F086_45BA_1CDF_41D0_C0D9B42148E3",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_5732B086_45BA_1CDF_41D0_E5EA8006F288"
 ],
 "id": "Container_57329086_45BA_1CDF_41CE_22567265CD5B",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_5B662956_45F5_EC7C_41CB_07907C90B486"
 ],
 "shadowSpread": 1,
 "id": "Container_5B663956_45F5_EC7C_41A1_1A1E25590463",
 "left": "15%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_5B660956_45F5_EC7C_41C6_AF235C847638"
 ],
 "id": "Container_5B661956_45F5_EC7C_41C0_163BBA6083FD",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 20,
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_66D7BB03_459A_2DD5_41C4_86729F244C18",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_66D70B03_459A_2DD5_419B_D8E205F1FD20",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_66D72B03_459A_2DD5_41BD_72AEF26FD44F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_66D74B04_459A_2DD3_41B5_7943C57715EB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5873EAF4_45FA_2C3C_41B7_95C8783FBD04_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6E09EEC8_45BD_E453_419F_7D90AF7E2DDC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D7F3D0_3B13_FEC8_41A7_C0D3AE4EBC79",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF644DFB_B4D0_4132_41C4_307D949FEDFA_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_1BFC9D81_3B10_8B48_41A3_8898144C63FD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D753D1_3B13_FEC8_41A6_88BF09C3D9C4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_23D713D1_3B13_FEC8_41BE_662532891FBD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D6E3D1_3B13_FEC8_41C0_E3DF7B5CED7C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B36FD_B4D0_4336_41DE_F1A5F6D43D87_1_HS_5_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_23E9C3D2_3B13_FEC8_41C0_4CDB6EE08426",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF62A4ED_B4D0_C756_41E5_11D32E635B65_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D453D1_3B13_FEC8_41B4_0ADF0D48BD07",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55B6208D_459F_FCEC_41A1_0036483C54EC_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5F360532_45B5_E434_41CA_CE46655725F3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_2_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_23DA73CA_3B13_FED8_41C2_47A40DEB9E68",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23DA33CB_3B13_FED8_415F_C24D794209FC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_23DCF3CB_3B13_FED8_4195_7F93B6024051",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_1_HS_13_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23DC63CB_3B13_FED8_41AD_C116BAB222C5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C5FE9E_B4D0_C3F2_41C3_08BDC82C4F39_0_HS_14_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_25BCC219_3B11_997B_41A3_9929F1EF3706",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D1F3CC_3B13_FED8_41C7_B0CA325B55AE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_23D143CD_3B13_FED8_41C0_5FFF9449F79E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5F3CF528_45B5_E5D4_41BC_569877B3D41C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF62AB8A_B4D1_C1D2_41C9_3AB47A165ECF_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D353CF_3B13_FED8_41A5_CFEB0FC70DCE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_66D45B03_459A_2DD5_41CB_2D86B91CF6E9",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B458775_459F_E43C_41C3_947957808976_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5F312532_45B5_E434_413C_8666753B9C7C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_23E973D2_3B13_FEC8_41B6_690E41404AC1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23E933D2_3B13_FEC8_41C3_8B1800703A3A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_2_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_23E893D2_3B13_FEC8_41C8_96B3319C6495",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_23E863D2_3B13_FEC8_41C0_C50317802929",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_23EBD3D3_3B13_FEC8_41BF_0BB64022D75B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_23EBA3D3_3B13_FEC8_41B6_FB3A0D1E2463",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_23EB23D3_3B13_FEC8_41C8_B7FC182567D6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_1_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_23EAF3D3_3B13_FEC8_41CB_02E6B73C66B2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_8_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0F568C1A_468A_2BF4_41CE_76E6E2FBE186",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF1BD363_B4D0_4152_41E0_88A59386BBA2_0_HS_9_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_7872B34C_46B6_3C53_41C4_0F50BB850C66",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D263CF_3B13_FED8_41CA_5A5A63125612",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D523D0_3B13_FEC8_41AE_719DE23586DD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF65CC4D_B4D0_4756_41D3_88F15C5534B8_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23D483D0_3B13_FEC8_41C6_47BBC2880B4A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23EA53D3_3B13_FEC8_41CA_8D1270A4BD9B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF6B8D56_B4D0_C172_41AC_609DB65A8FD0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23EA23D3_3B13_FEC8_41C2_268B41E2E773",
 "rowCount": 6,
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, true, 0, null, null, false)",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "MAP ASIA AFRIKA",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverShadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "PLACES",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_976B92CB_BA97_9EE7_41DE_B9B8B5CA6A8C, true, 0, null, null, false)",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "QUBIC360",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false)",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "CONTACT US",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 90,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "label": "REALTOR",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button realtor"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemMinHeight": 50,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "itemMinWidth": 50,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColor": [],
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "minWidth": 1,
 "class": "ThumbnailGrid",
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "backgroundColorDirection": "vertical",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "gap": 26,
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemHorizontalAlign": "center",
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemThumbnailBorderRadius": 0
},
{
 "horizontalAlign": "center",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 90,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_A20CC511_B4D0_46F1_41A6_93EF67119BB2",
  "this.IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86"
 ],
 "id": "Container_A20CD511_B4D0_46F1_41E4_06E8B667B827",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_A20C8511_B4D0_46F1_41CC_7CA6DF9C0B97",
  "this.IconButton_A20C7511_B4D0_46F1_41E3_D631C6696DFF",
  "this.IconButton_A20C6511_B4D0_46F1_41AE_14BBED61E4D0"
 ],
 "id": "Container_A20C9511_B4D0_46F1_41C0_971DD33BE5DF",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_091B9A01_468A_2FD4_41B5_F0017622996E.set('selectedIndex', -1); }, this); this.playList_091B9A01_468A_2FD4_41B5_F0017622996E.set('selectedIndex', 0)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_9507F292_B550_C3F3_41D7_D39AAE136322",
  "this.IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425"
 ],
 "id": "Container_95079292_B550_C3F3_41B1_1D5A9B82624B",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 90,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_95072292_B550_C3F3_41D3_B35FC7D6CC84",
  "this.IconButton_95073292_B550_C3F3_41E1_807B1D26EB34",
  "this.IconButton_95070292_B550_C3F3_41C5_5316F7D50FB6"
 ],
 "id": "Container_9507D292_B550_C3F3_41CD_C0D762530B00",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "WebFrame_AED17C8A_B9B6_8960_41BA_68D5FF654B84",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "//www.youtube.com/embed/gKX3Ed_Ix0Q",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_AED10C8A_B9B6_8960_41DC_52816A9DE4B6",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_AED10C8A_B9B6_8960_41DC_52816A9DE4B6_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_AED10C8A_B9B6_8960_41DC_52816A9DE4B6_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_AED13C8A_B9B6_8960_41E4_84F4A18EFAF6, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_AED10C8A_B9B6_8960_41DC_52816A9DE4B6.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_A3032419_B996_7960_41CE_73A4E5F75AD0",
  "this.IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA"
 ],
 "id": "Container_A3031419_B996_7960_41E4_2FD1A67FA782",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_A3036419_B996_7960_41E1_2326B6B3C47C",
  "this.IconButton_A3037419_B996_7960_41E6_0A9776F1E0C8",
  "this.IconButton_A3028419_B996_7960_41CB_70858BF443D8"
 ],
 "id": "Container_A3035419_B996_7960_41E6_935FEC603B7F",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_99C3F60C_BA96_F961_41E1_11276D721C4C",
  "this.IconButton_99C3860C_BA96_F961_41E0_46132593A3A0",
  "this.IconButton_99C3A60C_BA96_F961_41E3_872301B58419",
  "this.IconButton_99C3B60C_BA96_F961_41D8_31997CE6D846"
 ],
 "id": "Container_99C3E60C_BA96_F961_41D0_2309880E3C85",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_9065A21F_BAAA_B99F_41C1_3F7F787E9F6B",
  "this.IconButton_9065B21F_BAAA_B99F_41D6_6984779D8421",
  "this.IconButton_9065921F_BAAA_B99F_41E1_844DAB40CA45",
  "this.IconButton_9065E21F_BAAA_B99F_41DB_7555177507B8"
 ],
 "id": "Container_9065521F_BAAA_B99F_41D0_D7F10F211655",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "WebFrame_9733B545_BAAB_9BE3_41E2_D403BA818CDF",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.3701573252667!2d107.60972145778295!3d-6.921615898749731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62592fbeb5b%3A0x3f35bcf7f235386b!2sJl.%20Asia%20Afrika%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1596555786240!5m2!1sid!2sid",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_97339545_BAAB_9BE3_41DB_E3A4C0B49EF3",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_97339545_BAAB_9BE3_41DB_E3A4C0B49EF3_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_97339545_BAAB_9BE3_41DB_E3A4C0B49EF3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_97338545_BAAB_9BE3_41B5_0221C9782FFF, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_97339545_BAAB_9BE3_41DB_E3A4C0B49EF3.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_976A42CB_BA97_9EE7_41DF_80B8B0284699",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://www.qubic360.com/",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_976BA2CB_BA97_9EE7_41D4_B2C7A4AAAC0B",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_976BA2CB_BA97_9EE7_41D4_B2C7A4AAAC0B_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_976BA2CB_BA97_9EE7_41D4_B2C7A4AAAC0B_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_976B92CB_BA97_9EE7_41DE_B9B8B5CA6A8C, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_976BA2CB_BA97_9EE7_41D4_B2C7A4AAAC0B.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_DAE8C8E8_C9A1_FE7D_41E3_62478D54213E",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://m.grandhotelpreanger.com/home",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_DAE8B8E8_C9A1_FE7D_414B_FD7B38359DD8",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_DAE8B8E8_C9A1_FE7D_414B_FD7B38359DD8_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_DAE8B8E8_C9A1_FE7D_414B_FD7B38359DD8_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_DAE888E8_C9A1_FE7D_4198_2F28CD550AC8, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_DAE8B8E8_C9A1_FE7D_414B_FD7B38359DD8.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_E95C164D_C9A3_35B7_41DD_678C6CC626DF",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://chats.landbot.io/v2/H-663665-B4V0EX8FD5LPKYPU/index.html",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_E95C364D_C9A3_35B7_41E8_665E2A7C5C80",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_E95C364D_C9A3_35B7_41E8_665E2A7C5C80_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E95C364D_C9A3_35B7_41E8_665E2A7C5C80_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_E95CD64D_C9A3_35B7_41CB_94361090AF0B, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_E95C364D_C9A3_35B7_41E8_665E2A7C5C80.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_E20C9A60_CAA1_F26E_41E3_8BDD5B97FE66",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://chats.landbot.io/v2/H-663693-8I2PF142PL6YBKHI/index.html",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_E2134A60_CAA1_F26E_41E4_13440F51D6D8",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_E2134A60_CAA1_F26E_41E4_13440F51D6D8_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_E2134A60_CAA1_F26E_41E4_13440F51D6D8_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_E2134A60_CAA1_F26E_41E4_13440F51D6D8.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_2847154E_3A05_EE32_41C8_996968339EFA",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://form.jotform.com/202413662729051",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2847354E_3A05_EE32_41AB_F127196263DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2847354E_3A05_EE32_41AB_F127196263DA_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2847354E_3A05_EE32_41AB_F127196263DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2846C54E_3A05_EE32_41C6_5EA6E77A3CC9, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2847354E_3A05_EE32_41AB_F127196263DA.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.WebFrame_21E556D6_3B30_86C8_41BD_FFB6511D2A93"
 ],
 "id": "Container_2C41C815_3B30_894B_41C8_5C2E58E6051B",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2C41B815_3B30_894B_41B7_F18CB863B7AB",
  "this.Container_2C418815_3B30_894B_41BA_EF93235BEEC9",
  "this.Container_2C424815_3B30_894B_41C5_2DF4A30E7696"
 ],
 "id": "Container_2C41A815_3B30_894B_41C8_D754F326429B",
 "width": "50%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2C422815_3B30_894B_41BB_F06EF95C1503",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2C422815_3B30_894B_41BB_F06EF95C1503_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 40,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2C422815_3B30_894B_41BB_F06EF95C1503_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2C420815_3B30_894B_41B9_30F832AB9081, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2C422815_3B30_894B_41BB_F06EF95C1503.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_267C78D8_3B30_8AF9_41C9_CD8DF0FC2BC7",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://rajatourbandung.com/bandung-private-car-charter/",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_267CA8D8_3B30_8AF9_41C0_6D81E8E19F44",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_267CA8D8_3B30_8AF9_41C0_6D81E8E19F44_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_267CA8D8_3B30_8AF9_41C0_6D81E8E19F44_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_267CB8D8_3B30_8AF9_41C6_8717BB472285, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_267CA8D8_3B30_8AF9_41C0_6D81E8E19F44.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E331E2_3B13_9AC9_41C0_BC452C5292A7",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container black"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_27E351E2_3B13_9AC9_41C7_9AD04165312C",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_27E351E2_3B13_9AC9_41C7_9AD04165312C_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "40%",
 "propagateClick": true,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, true, 0, this.effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7, 'showEffect', false); this.setComponentVisibility(this.Container_27E311E2_3B13_9AC9_41C4_270188C6A903, false, 0, this.effect_4D468A42_571D_AF46_41C4_8C8358C32FB0, 'hideEffect', false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_27E351E2_3B13_9AC9_41C7_9AD04165312C.png",
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_27E291E2_3B13_9AC9_41C1_AFBCF73F3968",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_27E291E2_3B13_9AC9_41C1_AFBCF73F3968.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 30,
 "top": "0%",
 "propagateClick": true,
 "height": "25%",
 "minWidth": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image Company"
 }
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_27E2B1E2_3B13_9AC9_41C2_8408201AD9C5",
  "this.Button_27E2A1E2_3B13_9AC9_41A0_37E7D2B0FABF",
  "this.Container_27E2D1E2_3B13_9AC9_41A5_674209D3A988",
  "this.Button_27E2C1E2_3B13_9AC9_41C6_683619970F39",
  "this.Container_27E2F1E2_3B13_9AC9_41B7_565C2FF8D862",
  "this.Button_27E231E2_3B13_9AC9_41B2_5939791C2180",
  "this.Container_27E251E2_3B13_9AC9_41BD_36C79B27C04F",
  "this.Button_27E241E2_3B13_9AC9_41C2_EA6312A4DAEC",
  "this.Container_27E271E2_3B13_9AC9_41A7_A9F8674E1001",
  "this.Button_27E261E2_3B13_9AC9_41CD_6EB5AB7F6AAF",
  "this.Container_27E581E2_3B13_9AC9_4183_07474885600C",
  "this.Button_27E5B1E2_3B13_9AC9_41C0_E56913D1A20D",
  "this.Container_27E5A1E2_3B13_9AC9_41CC_5FB904016A45"
 ],
 "id": "Container_27E281E2_3B13_9AC9_41A6_87D4CD606152",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "overflow": "scroll",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_27E5F1E2_3B13_9AC9_41CD_0B9036A8CB36",
  "this.HTMLText_27E511E2_3B13_9AC9_41C1_8A47E95413F8",
  "this.IconButton_27E531E2_3B13_9AC9_41C7_78E1628E2074"
 ],
 "id": "Container_27E5D1E2_3B13_9AC9_41CA_F2580D391000",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "height": "26.316%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "WebFrame_57328086_45BA_1CDF_41AA_36F1F8234311",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://reservations.travelclick.com/108332?&datein=09/01/2020&dateout=09/02/2020&rooms=1&adults=1&languageid=1&_ga=2.119633096.1937100575.1598895453-1456518743.1598895453#/accommodation/room",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_5732B086_45BA_1CDF_41D0_E5EA8006F288",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_5732B086_45BA_1CDF_41D0_E5EA8006F288_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5732B086_45BA_1CDF_41D0_E5EA8006F288_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_57354086_45BA_1CDF_41CE_AA4D319AD0E7, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_5732B086_45BA_1CDF_41D0_E5EA8006F288.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_5B662956_45F5_EC7C_41CB_07907C90B486",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "//www.youtube.com/embed/5J_LpHZMa0w",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_5B660956_45F5_EC7C_41C6_AF235C847638",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_5B660956_45F5_EC7C_41C6_AF235C847638_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5B660956_45F5_EC7C_41C6_AF235C847638_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_5B61F956_45F5_EC7C_4166_83DED02E41D6, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_5B660956_45F5_EC7C_41C6_AF235C847638.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "shadow": false,
 "data": {
  "name": "Image"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "minHeight": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.92vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Bebas Neue Bold';\">PLACES</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.92vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.122%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "71.429%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.92vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Bebas Neue Bold';\">BDG 0.KM</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "right": "0%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressRight": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_A20CC511_B4D0_46F1_41A6_93EF67119BB2",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.25vh;font-family:'Bebas Neue Bold';\">HOTEL PREANGER</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_A20C5511_B4D0_46F1_41DF_73DB3D576530, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedRollOverIconURL": "skin/IconButton_A20CA511_B4D0_46F1_41DD_C24004FA2E86_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "HTMLText_9507F292_B550_C3F3_41D7_D39AAE136322",
 "left": "0%",
 "width": "77.122%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "71.429%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.25vh;font-family:'Bebas Neue Bold';\">BDG 0.KM</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_95071292_B550_C3F3_41DF_A77C98979074, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedRollOverIconURL": "skin/IconButton_9507C292_B550_C3F3_41D6_6A3B7134D425_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "HTMLText_A3032419_B996_7960_41CE_73A4E5F75AD0",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.25vh;font-family:'Bebas Neue Bold';\">De Vries Building</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_A3029419_B996_7960_4192_C528E20A86B0, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedRollOverIconURL": "skin/IconButton_A3033419_B996_7960_41E6_EA3C8189C6EA_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_99C3B60C_BA96_F961_41D8_31997CE6D846",
 "width": "10%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_99C3B60C_BA96_F961_41D8_31997CE6D846_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_99C3B60C_BA96_F961_41D8_31997CE6D846_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_99C4460C_BA96_F961_41DA_E8E17F508E7D, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_99C3B60C_BA96_F961_41D8_31997CE6D846.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_9065E21F_BAAA_B99F_41DB_7555177507B8",
 "width": "10%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_9065E21F_BAAA_B99F_41DB_7555177507B8_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_9065E21F_BAAA_B99F_41DB_7555177507B8_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_9065F21F_BAAA_B99F_41C3_7B6D5F677BFF, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_9065E21F_BAAA_B99F_41DB_7555177507B8.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_21E556D6_3B30_86C8_41BD_FFB6511D2A93",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "-0.06%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://sketchfab.com/models/240e909a9180493ebdc1def6cbdde88f/embed?autospin=0.2&amp;autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame11270"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_2C41B815_3B30_894B_41B7_F18CB863B7AB",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 50,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_2C419815_3B30_894B_41CC_1E3D22924873",
  "this.Image_2C426815_3B30_894B_4180_8A614AD123D1",
  "this.Button_2C427815_3B30_894B_419B_969C2DCAADAE"
 ],
 "id": "Container_2C418815_3B30_894B_41BA_EF93235BEEC9",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 25,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_2C424815_3B30_894B_41C5_2DF4A30E7696",
 "width": 370,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_27E2B1E2_3B13_9AC9_41C2_8408201AD9C5",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_295AC50B_3013_5095_41C4_35DF3AD0D0AF, 'hideEffect', false); this.openLink('https://virtual.digitalindonesia.net/vrgaleri/index.htm', '_top')",
 "id": "Button_27E2A1E2_3B13_9AC9_41A0_37E7D2B0FABF",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "ART GALERY BANDUNG",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E2D1E2_3B13_9AC9_41A5_674209D3A988",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_2A3FEB0B_3013_5095_41AF_885003A85966, 'hideEffect', false); this.openLink('https://virtual.digitalindonesia.net/transhotel/index.htm', '_top')",
 "id": "Button_27E2C1E2_3B13_9AC9_41C6_683619970F39",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "THE TRANS HOTEL",
 "paddingTop": 0,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E2F1E2_3B13_9AC9_41B7_565C2FF8D862",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "pressedLabel": "Location",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_6531D7D6_70A2_FBC7_41B1_74A873D95E74, 'hideEffect', false); this.openLink('https://virtual.digitalindonesia.net/GOFOOD180CAFE/index.htm', '_top')",
 "id": "Button_27E231E2_3B13_9AC9_41B2_5939791C2180",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "UNIQUE CAFE BANDUNG",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E251E2_3B13_9AC9_41BD_36C79B27C04F",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_66E8932B_70AD_144D_41D6_124667C114CD, 'hideEffect', false)",
 "id": "Button_27E241E2_3B13_9AC9_41C2_EA6312A4DAEC",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "NIGHT IN MUSEUM",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E271E2_3B13_9AC9_41A7_A9F8674E1001",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_66792B32_70AD_145F_41CF_B927F1C684B0, 'hideEffect', false)",
 "id": "Button_27E261E2_3B13_9AC9_41CD_6EB5AB7F6AAF",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "CULINERY TOURISM",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E581E2_3B13_9AC9_4183_07474885600C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "rollOverBackgroundOpacity": 0.8,
 "click": "this.setComponentVisibility(this.Container_E2135A60_CAA1_F26E_41A3_2589A86764FC, true, 0, null, null, false); this.setComponentVisibility(this.Container_27E551E2_3B13_9AC9_41CB_D66B21124B3A, false, 0, null, null, false)",
 "id": "Button_27E5B1E2_3B13_9AC9_41C0_E56913D1A20D",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "Contact Information",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_27E5A1E2_3B13_9AC9_41CC_5FB904016A45",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_27E5F1E2_3B13_9AC9_41CD_0B9036A8CB36",
 "width": 40,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "height": 2,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "blue line"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_27E511E2_3B13_9AC9_41C1_8A47E95413F8",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>JASWITA JABAR</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.jaswisatajabar.co.id</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>admin@jaswitajabar.co.id</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: 022-4260484</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_27E531E2_3B13_9AC9_41C7_78E1628E2074",
 "width": 42,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_27E531E2_3B13_9AC9_41C7_78E1628E2074_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_27E341E2_3B13_9AC9_41BC_969AF1A7FB41, false, 0, this.effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C, 'hideEffect', false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_27E531E2_3B13_9AC9_41C7_78E1628E2074.png",
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.1vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.45vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.45vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.28vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.28vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.61vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "height": "30%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.1vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.45vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.45vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.28vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.28vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.1vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.45vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.28vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.28vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": 34,
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "id": "HTMLText_2C419815_3B30_894B_41CC_1E3D22924873",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "height": "62.894%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 3,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.92vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.79vh;font-family:'Oswald';\"><B>RENT CAR</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.4vh;font-family:'Oswald Regular';\"><B>Bandung Private Car Charter</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.75vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.2vh;font-family:'Oswald';\"> \u2022 </SPAN><SPAN STYLE=\"font-size:1.75vh;font-family:'Oswald';\">Travel safely around Bandung in a private car charter, good for up to groups of 5.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.2vh;font-family:'Oswald';\"> \u2022 </SPAN><SPAN STYLE=\"font-size:1.75vh;font-family:'Oswald';\">Plan your own 10 hour itinerary and let your driver find the easiest routes to get to where you want to be.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.2vh;font-family:'Oswald';\"> \u2022 </SPAN><SPAN STYLE=\"font-size:1.75vh;font-family:'Oswald';\">Explore Bandung at your own pace and tick things off your bucket list as you go!</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.2vh;font-family:'Oswald';\"> \u2022 </SPAN><SPAN STYLE=\"font-size:1.75vh;font-family:'Oswald';\">Feel safe in the hands of your experienced english speaking driver throughout the entire journey.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#FF361B",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 120,
 "maxWidth": 211,
 "id": "Image_2C426815_3B30_894B_4180_8A614AD123D1",
 "width": "70%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_2C426815_3B30_894B_4180_8A614AD123D1.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "30%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image logo"
 },
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald Regular",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "click": "this.setComponentVisibility(this.Container_267CB8D8_3B30_8AF9_41C6_8717BB472285, true, 0, null, null, false); this.setComponentVisibility(this.Container_2C420815_3B30_894B_41B9_30F832AB9081, false, 0, null, null, false)",
 "id": "Button_2C427815_3B30_894B_419B_969C2DCAADAE",
 "width": 208,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "layout": "horizontal",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": "2.83vh",
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "BOOKING",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF"
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "minWidth": 20,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
