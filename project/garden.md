# 理想花园 - 物联网小程序

<img src="./image/garden.png" style="margin:16px 0"/>
<div style="display: flex;    border-radius: 8px;overflow:hidden">
    <div style="width:50%">
        <img src="./image/garden_device.png" />
    </div>
    <div style="width:50%">
        <img src="./image/garden_esp.jpg" />
    </div>
</div>

::: info 项目说明
通过小程序远程控制继电器驱动花园中设备，查看传感器数据  
负责小程序开发,嵌入式开发,
:::

::: tip 技术栈
小程序基于 uniapp 构建  
使用 uview 组件库  
嵌入式基于 esp32/arduino 开发，通过 RS485 获取传感器数据， mqtt 进行数据通讯  
使用 PubSubClient/ ArduinoJson/ nvs_flash
:::
