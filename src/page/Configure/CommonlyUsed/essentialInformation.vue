<template>
  <div>
    <el-tabs type="border-card" tab-position="right">
      <el-tab-pane label="基本信息">
        <ConfigCard :ConfigList="ConfigList"></ConfigCard>
      </el-tab-pane>
      <el-tab-pane label="基本信息2">
        <ConfigCard :ConfigList="ConfigList"></ConfigCard>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ConfigCard from '@/components/ConfigCard'
export default {
  data () {
    return {
      ConfigList: {
        title: '基本信息',
        ConfigItems: [
          {
            id: 1,
            ConfigItemName: '产品型号',
            ConfigItemData: 'HIC5661'
          },
          {
            id: 2,
            ConfigItemName: '产品配置',
            ConfigItemData: 'H-KC'
          },
          {
            id: 3,
            ConfigItemName: '软件版本',
            ConfigItemData: 'IPC_1234567'
          },
          {
            id: 4,
            ConfigItemName: '硬件版本',
            ConfigItemData: 'A'
          },
          {
            id: 5,
            ConfigItemName: '引导版本',
            ConfigItemData: 'V1.2'
          },
          {
            id: 6,
            ConfigItemName: '序列号',
            ConfigItemData: '12213129y81379812719'
          },
          {
            id: 7,
            ConfigItemName: '网络信息',
            ConfigItemData: '12213129y81379812719'
          },
          {
            id: 8,
            ConfigItemName: 'MAC地址',
            ConfigItemData: 'ad:12:fs:as:12:68'
          }
        ]
      }
    }
  },
  components: {
    ConfigCard
  },
  methods: {

  }
}
</script>

<style  lang='scss'>
  @import '../../../assets/css/utils.scss';
</style>
