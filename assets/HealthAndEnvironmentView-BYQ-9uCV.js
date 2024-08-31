import{d as r,q as i,s as o,a,o as c,c as l}from"./vendor-HAsUspXb.js";import{_ as u}from"./index-Be3qep0Z.js";const d=r({components:{ATable:i},data(){return{columns:[{title:"风险点",dataIndex:"riskPoint",key:"风险点"},{title:"危害描述",dataIndex:"hazardDescription",key:"危害描述",customRender:({text:e})=>o("ul",{style:{paddingLeft:"20px"}},e.split(`
`).map((n,s)=>o("li",{key:s},n)))},{title:"后果",dataIndex:"consequence",key:"后果"},{title:"后果的严重程度",dataIndex:"severityOfConsequence",key:"后果的严重程度"},{title:"现有控制措施",dataIndex:"controlMeasures",key:"现有控制措施",customRender:({text:e})=>o("ul",{style:{paddingLeft:"20px"}},e.split(`
`).map((n,s)=>o("li",{key:s},n)))},{title:"风险等级",dataIndex:"riskLevel",key:"风险等级"}],data:[{key:"1",riskPoint:"精神状态",hazardDescription:"作业人员疲劳困乏或情绪异常",consequence:"人身伤害",severityOfConsequence:"次要（安全）：造成 1－2 人轻伤；设备、财产损失 1 万到 10 万元",controlMeasures:`1.根据每日晴雨表进行工作安排
  2.作业过程适当安排休息时间`,riskLevel:"轻微风险"},{key:"2",riskPoint:"噪声",hazardDescription:"设备转动产生的噪音",consequence:"听力损伤",severityOfConsequence:"次要（健康）：造成 1－2 例与职业有关的疾病；造成 3－9 例有轻微影响健康事件",controlMeasures:`1.佩戴耳塞
          2.合理安排噪声区域作业时间`,riskLevel:"轻微风险"},{key:"3",riskPoint:"高温",hazardDescription:"工作班成员2人在室内作业温度超过30℃，工作时间2-3小时，导致过量热积聚体内会产生中暑。",consequence:"中暑",severityOfConsequence:"次要（健康）：造成 1－2 例与职业有关的疾病；造成 3－9 例有轻微影响健康事件",controlMeasures:`1.备有足够的饮用水、中暑药品
          2.调整作业时段，避开高温时段作业`,riskLevel:"轻微风险"},{key:"4",riskPoint:"触电",hazardDescription:"安全隔离措施未正确执行",consequence:"触电",severityOfConsequence:"轻微：安全：轻微伤（小的割伤、擦伤、撞伤）；财产损失 1 万元以下；健康：造成 1 例～2 例有轻微影响健康事件；环境：仅对景观有轻度影响。",controlMeasures:`1.检修工作开始前工作许可人会同工作负责人共同检查确认工作票所列安全措施完善和正确执行
          2.执行停电挂牌制度
          3.配备绝缘鞋和验电笔`,riskLevel:"轻微风险"},{key:"5",riskPoint:"狭小空间",hazardDescription:`1.历史设计原因导致空间不足。
2.技改后工程导致空间不足。`,consequence:"其他伤害",severityOfConsequence:"次要（安全）：造成 1－2 人轻伤；设备、财产损失 1 万到 10 万元",controlMeasures:"1.正确佩戴安全帽，长发盘在安全帽内，扣好领口、袖口",riskLevel:"轻微风险"},{key:"6",riskPoint:"室外恶劣天气",hazardDescription:"冬季室外恶劣天气连续作业超过1小时可能导致作业的1-2人冻伤",consequence:"冻伤",severityOfConsequence:"轻微：安全：轻微伤（小的割伤、擦伤、撞伤）；财产损失 1 万元以下；健康：造成 1 例～2 例有轻微影响健康事件；环境：仅对景观有轻度影响。",controlMeasures:"1.冬季户外作业穿好棉服、棉帽，戴好手套",riskLevel:"轻微风险"},{key:"7",riskPoint:"裸露的高温管道",hazardDescription:`1.保温缺失破损
2.未进行保温措施。
3.防烫标识缺失`,consequence:"灼烫",severityOfConsequence:"轻微：安全：轻微伤（小的割伤、擦伤、撞伤）；财产损失 1 万元以下；健康：造成 1 例～2 例有轻微影响健康事件；环境：仅对景观有轻度影响。",controlMeasures:`劳动防护用品：
          1.正确佩戴安全帽，衣服和袖口应扣好，不得戴围巾领带，长发必须盘在安全帽内。
          工程技术措施：
          1.所有的高管管道采取保温隔离措施。
          2.管道按照目视化标准张贴高温烫伤标识。
          管理措施：
          1.每日通过设备巡视检查管道保温情况，并对有破损的情况进行及时修复。
          2.每日通过巡视检查目视化标识情况，并及时对缺失或破损的进行更新。`,riskLevel:"轻微风险"},{key:"8",riskPoint:"照明",hazardDescription:`1.照明灯具损坏
2.未设计照明设施技改后未考虑照度
3.空间照度不足。`,consequence:"其他伤害",severityOfConsequence:"次要（健康）：造成 1－2 例与职业有关的疾病；造成 3－9 例有轻微影响健康事件",controlMeasures:"1.配备临时照明手电/头灯",riskLevel:"轻微风险"},{key:"9",riskPoint:"粉尘",hazardDescription:"锅炉0米粉尘检测结果。0.5mg/m3，限值2.5mg/m3。粉尘区域连续作业超过1小时可能导致作业人员2人有可能引起肺组织的慢性纤维化，甚至导致肺心病、心血管病等一系列病变。",consequence:"肺部损伤",severityOfConsequence:"次要（健康）：造成 1－2 例与职业有关的疾病；造成 3－9 例有轻微影响健康事件",controlMeasures:"1.进入粉尘区域作业戴好防尘口罩",riskLevel:"轻微风险"}]}}});function k(e,n,s,p,y,m){const t=a("a-table");return c(),l(t,{columns:e.columns,dataSource:e.data,pagination:!1},null,8,["columns","dataSource"])}const q=u(d,[["render",k]]);export{q as default};
