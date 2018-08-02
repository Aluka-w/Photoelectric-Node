export const ConfigureList = [
  {
    id: '1',
    title: '常用',
    ConfigureItem: [
      {
        id: 1,
        itemName: '基本信息',
        url: '/Configure/CommonlyUsed/essentialInformation'
      },
      {
        id: 2,
        itemName: '本地配置',
        url: '/Configure/CommonlyUsed/localConfiguration'
      },
      {
        id: 3,
        itemName: '有线网口',
        url: '/Configure/CommonlyUsed/wireMesh'
      },
      {
        id: 4,
        itemName: '时间',
        url: '/Configure/CommonlyUsed/settingTime'
      },
      {
        id: 5,
        itemName: '服务器',
        url: '/Configure/CommonlyUsed/theServer'
      },
      {
        id: 6,
        itemName: 'OSD',
        url: '/Configure/CommonlyUsed/OSD'
      },
      {
        id: 7,
        itemName: '用户',
        url: '/Configure/CommonlyUsed/userMan'
      }
    ]
  },
  {
    id: '2',
    title: '网络设置',
    ConfigureItem: [
      {
        id: 1,
        itemName: '网口设置',
        url: '/Configure/LineConfig/networkPort'
      },
      {
        id: 2,
        itemName: 'DNS',
        url: '/Configure/LineConfig/NetworkDNS'
      },
      {
        id: 3,
        itemName: '端口配置',
        url: '/Configure/LineConfig/portSetting'
      },
      {
        id: 4,
        itemName: 'DDNS',
        url: '/Configure/LineConfig/networkDDNS'
      }
    ]
  },
  {
    id: '3',
    title: '音视频',
    ConfigureItem: [
      {
        id: 1,
        itemName: '视频',
        url: '/Configure/VideoAudio/Video'
      },
      {
        id: 2,
        itemName: '抓图',
        url: '/Configure/VideoAudio/Capture'
      },
      {
        id: 3,
        itemName: '音频',
        url: '/Configure/VideoAudio/Audio'
      },
      {
        id: 4,
        itemName: '流媒体管理',
        url: '/Configure/VideoAudio/streamingMedia'
      }
    ]
  },
  {
    id: '4',
    title: '图像',
    ConfigureItem: [
      {
        id: 1,
        itemName: '图像调节',
        url: '/Configure/Image/manageImage'
      },
      {
        id: 2,
        itemName: 'OSD',
        url: '/Configure/Image/OSD'
      }
    ]
  },
  {
    id: '5',
    title: '存储',
    ConfigureItem: [
      {
        id: 1,
        itemName: '存储设置',
        url: '/Configure/Storage/settingStorage'
      },
      {
        id: 2,
        itemName: 'FTP',
        url: '/Configure/Storage/FTP'
      }
    ]
  },
  {
    id: '6',
    title: '安全设置',
    ConfigureItem: [
      {
        id: 1,
        itemName: '用户',
        url: '/Configure/Security/userMan'
      },
      {
        id: 2,
        itemName: '网络安全',
        url: '/Configure/Security/networkSecurity'
      },
      {
        id: 3,
        itemName: '注册信息',
        url: '/Configure/Security/registInfo'
      },
      {
        id: 4,
        itemName: '视频水印',
        url: '/Configure/Security/watermark'
      }
    ]
  },
  {
    id: '7',
    title: '系统',
    ConfigureItem: [
      {
        id: 1,
        itemName: '时间',
        url: '/Configure/System/settingTime'
      },
      {
        id: 2,
        itemName: '服务器',
        url: '/Configure/System/theServer'
      },
      {
        id: 3,
        itemName: '维护',
        url: '/Configure/System/Maintain'
      }
    ]
  }
]

export const navList = [
  {
    id: 1,
    icon: '&#xe615;',
    navTitle: '实况',
    navItem: '/Live'
  },
  {
    id: 2,
    icon: '&#xe64d;',
    navTitle: '回放',
    navItem: '/PlayBack'
  },
  {
    id: 3,
    icon: '&#xe6df;',
    navTitle: '照片',
    navItem: '/Picture'
  },
  {
    id: 4,
    icon: '&#xe667;',
    navTitle: '配置',
    navItem: '/Configure'
  }
]
