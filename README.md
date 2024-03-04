# nonveh-proposal-web

非车新一代-承保系统-前端工程
20210630
----

# 更新记录

## 2021.03.10

<details>
  <summary>【增加currency金额组件】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.currency"
      field-type="currency"
      name="currency"
      symbol="¥"
      :decimal="2"
      label="测试金额"
      placeholder=""
    />
    ```

- 属性说明：
    `field-type`固定为`currency`；`symbol`表示要显示的货币符号，可空；`decimal`表示要显示的小数位数。

</details>

<details>
  <summary>【增加按钮防重复点击指令】</summary>

- 示例程序：

    ```
    <el-button v-preventReClick="4000" @click="preventReclickTest">防重复点击{{ clickTimes }}</el-button>
    ```

- 属性说明：
    使用时在button组件上增加指令`v-preventReClick`，指令的参数为要控制多长时间内不能再次点击，单位为毫秒，默认2000毫秒。

</details>

## 2021.03.12

<details>
  <summary>【search组件支持不录入内容即可展示选项】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.comcode"
      field-type="search"
      :min-len="0"
      :init-on-load="true"
      name="comcode"
      :dict="'ComCode[matchfield=codecode]'"
      label="归属机构"
    />
    ```

- 属性说明：
    `field-type`固定为`search`；`min-len`表示最少输入几个字符才触发查询，此处应为0；`init-on-load`表示是否加载时就初始化一次选项，此处应为true。

</details>

## 2021.03.17

<details>
  <summary>【text组件增加放大镜功能】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.cardNo"
      field-type="text"
      name="cardNo"
      label="银行卡号"
      placeholder=""
      :magnifier="true"
    />
    ```

- 属性说明：
    在类型为`text`的field上，增加属性`magnifier`，属性值设置为true。

</details>

## 2021.03.18

<details>
  <summary>【search及select组件支持同时显示代码和中文】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.comcode"
      field-type="search"
      :show-code="true"
      name="comcode"
      :dict="'ComCode[matchfield=codecode]'"
      label="归属机构"
    />
    ```

- 属性说明：
    在 search 或 select 的 Field 上增加属性`show-code`,属性值设置为true。

</details>

<details>
  <summary>【新增TranslateLabel组件用于展示字典值的中文名】</summary>

- 示例程序：

    ```
    <el-table-column label="发票类型" prop="elecinvoiceflag" align="center" min-width="40px">
      <template v-slot="slot">
        <translate-label v-model="slot.row.elecinvoiceflag" :dict="dict.ElecInvoiceFlag" />
      </template>
    </el-table-column>
    ```

- 属性说明：
    translate-label组件可用在任何模块中，不一定是表格中，但大多需要使用的场景是在表格某单元格中展示一个字典值的中文。
    `v-model` 绑定的值为实际值，即字典项的`code`值，`dict` 为对应的字典选项数组。

</details>

## 2021.03.25

<details>
  <summary>【级联控件的视图模型支持】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.cascader"
      field-type="cascader"
      placeholder="级联选项"
      name="cascader"
      :dict="dict.cascType"
      label="测试级联"
    />
    ```

- Dict数据示例：

    ```
    [
      {
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }]
        }]
      }
    ]
    ```

- modelPath配置示例：

    ```
    {
      'name': 'cascader',
      'modelPath': 'guide.a|b|c'
    }
    ```

- 属性说明：
    modelPath中配置对应的保单模型字段名分别是 a,b,c，用|分隔

</details>

## 2021.03.26

<details>
  <summary>【select支持actions】</summary>

- 示例程序：

    ```
    <field
      v-model="pdComponentData.servicearea"
      field-type="select"
      name="servicearea"
      :dict="dict.ServiceArea"
      :actions="'<email={dbarea}>'"
      label="服务区域"
      filterable
    />
    ```

- Dict数据示例：

    ```
    ServiceArea: [
    {
      'value': 'nanfang',
      'label': '南方地区',
      'ext': {
        'dbarea': 'nan'
      }
    },
    {
      'value': 'beifang',
      'label': '北方地区',
      'ext': {
        'dbarea': 'bei'
      }
    }

  ],
    ```

- 属性说明：
    actions的<>中设置，作用是select所选项发生变化时，除自身值发生变化外，同时带值到其他字段。  
    如上例中 actions为 email={dbarea}，email是表单视图中另外一个字段名，dbarea是 Dict的 ext对象中的字段名，其对应的值会赋值给email。  
    actions支持带多个值，表达式使用逗号分隔，也支持赋绝对值，如 a={f1},b={f2},c=v1 ...

</details>

## 2021.03.27

<details>
  <summary>【Field的默认值支持内置变量】</summary>

- 示例程序：

    ```
    {
      'name': 'operator',
      'modelPath': 'main.operator',
      'label': '录单员',
      'hidden': false,
      'defaultvalue': '#currentUName'
    }
    ```

- 属性说明：
    defaultvalue支持的内置变量包括:
  - #currentDate: 当前时间
  - #currentUid: 当前登陆人工号
  - #currentUName: 当前登陆人姓名
  - #currentComcode: 当前登陆人所属机构代码

</details>

## 2021.03.28

<details>
  <summary>【TranslateLabel 兼容search】</summary>

- 示例程序：

    ```
    <translate-label v-model="row.kindcode" :dict="'ProductKindCode[matchfield=codecode]'" />
    ```

- 属性说明：
  - 和对应的search类field设置一样的dict即可  
  - 如果是在table中，要配合prop使用  

</details>

## 2021.03.30

<details>
  <summary>【增加dialog最大化指令】</summary>

- 示例程序：

    ```
    <el-dialog v-el-resize-dialog :visible.sync="dialogFormVisible" width="70%">
      <div slot="title" style="text-align:center">
        <span>新增客户</span>
      </div>
    </el-dialog>
    ```

- 属性说明：
  - 在`el-dialog`标签上增加`v-el-resize-dialog`指令即可  
  - 在dialog头部双击鼠标左键，窗口最大化，再次双击，窗口大小还原；按照鼠标左键拖动，可移动窗口位置

</details>

## 2021.04.06

<details>
  <summary>【search和select的action支持option里的值】</summary>

- 示例程序：

    ```
    <field
      v-model="row.coinscode"
      field-type="search"
      name="coinscode"
      placeholder="请选择"
      :prop="'.' + $index + '.coinscode'"
      :dict="'ComCode[matchfield=any]<coinsname={#label}>'"
      :show-code="true"
    />
    ```

- 属性说明：
  - 一般设置 #label  #value，属于option的值，不属于 ext  

</details>

## 2021.04.17

<details>
  <summary>【日期选择控件支持快捷选项】</summary>

- 示例程序：

    ```
    <el-form-item label="操作日期" prop="inputdatestart">
      <span class="demonstration" />
      <el-date-picker
        v-model="proposal.inputdatestart"
        type="daterange"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      />
    </el-form-item>

    import { datePickerOptions } from '@/utils/element-ui'

    pickerOptions: {
      shortcuts: datePickerOptions
    }
    ```

- 属性说明：
  - 引入选项变量`datePickerOptions`
  - 在`data`中声明变量`pickerOptions`
  - 在需要增加快捷选项的日期控件中，增加属性 `picker-options`

</details>
