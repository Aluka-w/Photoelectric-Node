import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Live from '@/page/Live'
import PlayBack from '@/page/PlayBack'
import Picture from '@/page/Picture'
import Configure from '@/page/Configure'
import Login from '@/page/Login'
// 最外层
import ConfigureWrapper from '@/page/Configure/index'
// CommonlyUsed 常用
import essentialInformation from '@/page/Configure/CommonlyUsed/essentialInformation'
import localConfiguration from '@/page/Configure/CommonlyUsed/localConfiguration'
import wireMesh from '@/page/Configure/CommonlyUsed/wireMesh'
import settingTime from '@/page/Configure/CommonlyUsed/settingTime'
import theServer from '@/page/Configure/CommonlyUsed/theServer'
import OSD from '@/page/Configure/CommonlyUsed/OSD'
import userMan from '@/page/Configure/CommonlyUsed/userMan'
// LineConfig 网络配置
import networkPort from '@/page/Configure/LineConfig/networkPort'
import NetworkDNS from '@/page/Configure/LineConfig/NetworkDNS'
import portSetting from '@/page/Configure/LineConfig/portSetting'
import networkDDNS from '@/page/Configure/LineConfig/networkDDNS'
// VideoAudio 音视频
import Video from '@/page/Configure/VideoAudio/Video'
import Capture from '@/page/Configure/VideoAudio/Capture'
import Audio from '@/page/Configure/VideoAudio/Audio'
import streamingMedia from '@/page/Configure/VideoAudio/streamingMedia'
// Image 图像
import manageImage from '@/page/Configure/Image/manageImage'
// Storage 存储
import settingStorage from '@/page/Configure/Storage/settingStorage'
import FTP from '@/page/Configure/Storage/FTP'
// Security 网络安全
import networkSecurity from '@/page/Configure/Security/networkSecurity'
import registInfo from '@/page/Configure/Security/registInfo'
import watermark from '@/page/Configure/Security/watermark'
// System 系统
import Maintain from '@/page/Configure/System/Maintain'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/Live'},
    {path: '/Configure', redirect: '/Configure/CommonlyUsed/essentialInformation'},
    {path: '/Configure/CommonlyUsed', redirect: '/Configure/CommonlyUsed/essentialInformation'},
    {path: '/Configure/LineConfig', redirect: '/Configure/LineConfig/networkPort'},
    {path: '/Configure/VideoAudio', redirect: '/Configure/VideoAudio/Video'},
    {path: '/Configure/Image', redirect: '/Configure/Image/manageImage'},
    {path: '/Configure/Storage', redirect: '/Configure/Storage/settingStorage'},
    {path: '/Configure/Security', redirect: '/Configure/Security/userMan'},
    {path: '/Configure/System', redirect: '/Configure/System/Maintain'},
    {path: '/Login', component: Login, name: 'Login'},
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'Live',
          name: 'Live',
          component: Live
        },
        {
          path: 'PlayBack',
          name: 'PlayBack',
          component: PlayBack
        },
        {
          path: 'Picture',
          name: 'Picture',
          component: Picture
        },
        {
          // RESTful整个路由, 便于映射嵌套关系
          path: 'Configure',
          name: 'Configure',
          component: Configure,
          children: [
            {
              path: 'CommonlyUsed',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'essentialInformation',
                  name: 'essentialInformation',
                  component: essentialInformation
                },
                {
                  path: 'localConfiguration',
                  name: 'localConfiguration',
                  component: localConfiguration
                },
                {
                  path: 'wireMesh',
                  name: 'wireMesh',
                  component: wireMesh
                },
                {
                  path: 'settingTime',
                  name: 'settingTime',
                  component: settingTime
                },
                {
                  path: 'theServer',
                  name: 'theServer',
                  component: theServer
                },
                {
                  path: 'OSD',
                  name: 'OSD',
                  component: OSD
                },
                {
                  path: 'userMan',
                  name: 'userMan',
                  component: userMan
                }
              ]
            },
            {
              path: 'LineConfig',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'networkPort',
                  name: 'networkPort',
                  component: networkPort
                },
                {
                  path: 'NetworkDNS',
                  name: 'NetworkDNS',
                  component: NetworkDNS
                },
                {
                  path: 'portSetting',
                  name: 'portSetting',
                  component: portSetting
                },
                {
                  path: 'networkDDNS',
                  name: 'networkDDNS',
                  component: networkDDNS
                }
              ]
            },
            {
              path: 'VideoAudio',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'Video',
                  name: 'Video',
                  component: Video
                },
                {
                  path: 'Capture',
                  name: 'Capture',
                  component: Capture
                },
                {
                  path: 'Audio',
                  name: 'Audio',
                  component: Audio
                },
                {
                  path: 'streamingMedia',
                  name: 'streamingMedia',
                  component: streamingMedia
                }
              ]
            },
            {
              path: 'Image',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'manageImage',
                  name: 'manageImage',
                  component: manageImage
                },
                {
                  path: 'OSD',
                  component: OSD
                }
              ]
            },
            {
              path: 'Storage',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'settingStorage',
                  name: 'settingStorage',
                  component: settingStorage
                },
                {
                  path: 'FTP',
                  name: 'FTP',
                  component: FTP
                }
              ]
            },
            {
              path: 'Security',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'userMan',
                  component: userMan
                },
                {
                  path: 'networkSecurity',
                  name: 'networkSecurity',
                  component: networkSecurity
                },
                {
                  path: 'registInfo',
                  name: 'registInfo',
                  component: registInfo
                },
                {
                  path: 'watermark',
                  name: 'watermark',
                  component: watermark
                }
              ]
            },
            {
              path: 'System',
              component: ConfigureWrapper,
              children: [
                {
                  path: 'settingTime',
                  component: settingTime
                },
                {
                  path: 'theServer',
                  component: theServer
                },
                {
                  path: 'Maintain',
                  name: 'Maintain',
                  component: Maintain
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
