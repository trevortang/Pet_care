export const siteInfo = {
  name: "Trevor的宠物店",
  shortName: "Trevor的宠物店",
  englishName: "PAW & POLISH",
  phone: "021-68881280",
  phoneDisplay: "021 - 6888 1280",
  hours: "每日 10:00 - 21:00",
  address: "广州市番禺区大龙街新桥村泰安路西 11 巷 8 号",
  mapUrl:
    "https://uri.amap.com/search?keyword=%E5%B9%BF%E5%B7%9E%E5%B8%82%E7%95%AA%E7%A6%BA%E5%8C%BA%E5%A4%A7%E9%BE%99%E8%A1%97%E6%96%B0%E6%A1%A5%E6%9D%91%E6%B3%B0%E5%AE%89%E8%B7%AF%E8%A5%BF11%E5%B7%B78%E5%8F%B7",
} as const;

export const navItems = [
  { label: "洗护服务", href: "#services" },
  { label: "护理流程", href: "#process" },
  { label: "价格套餐", href: "#pricing" },
  { label: "预约到店", href: "#booking" },
] as const;

export const marqueeItems = [
  "基础洗护",
  "造型修剪",
  "猫咪洗护",
  "皮肤护理",
  "局部清洁",
] as const;

export const services = [
  {
    index: "01",
    name: "基础洗护",
    description:
      "双遍清洁、护毛、吹干、梳整、耳道清洁、指甲修剪与足底毛处理。",
    price: "¥88 起",
  },
  {
    index: "02",
    name: "造型修剪",
    description:
      "根据犬种、毛量和生活习惯设计轮廓，兼顾可爱度与日常打理成本。",
    price: "¥168 起",
  },
  {
    index: "03",
    name: "皮肤舒缓护理",
    description:
      "针对干燥、敏感、易打结毛发进行温和清洁与屏障护理，不替代医疗诊断。",
    price: "¥128 起",
  },
  {
    index: "04",
    name: "猫咪洗护",
    description:
      "安静独立空间，减少陌生气味和犬只声音刺激，优先使用低敏、低香产品。",
    price: "¥138 起",
  },
] as const;

export const careSteps = [
  {
    index: "01",
    title: "到店检查",
    description:
      "确认皮肤、耳道、指甲和毛结情况，先让宠物熟悉气味与声音。",
  },
  {
    index: "02",
    title: "温和清洁",
    description: "按毛质选择浴液，双遍清洗并充分乳化，减少残留与刺激。",
  },
  {
    index: "03",
    title: "吹整梳理",
    description: "根据接受度调整风速与温度，分区吹干，避免高温烘烤。",
  },
  {
    index: "04",
    title: "完成反馈",
    description: "交付前检查细节，并告知毛发、皮肤和日常护理建议。",
  },
] as const;

export const carePoints = [
  "首次到店先做 10 分钟环境适应",
  "犬猫分区，减少互相干扰",
  "洗护用品可提供成分信息",
] as const;

export const pricingPlans = [
  {
    name: "日常清洁",
    description: "适合短毛、状态稳定、每月规律洗护的犬猫。",
    price: "¥88",
    suffix: "起 / 次",
    features: ["基础清洁与护毛", "耳道、指甲、足底毛", "吹干与全身梳整"],
  },
  {
    name: "洗护造型",
    description:
      "适合需要定期修剪、希望轮廓利落又不过度造型的宠物。",
    price: "¥168",
    suffix: "起 / 次",
    features: [
      "包含日常清洁全部项目",
      "全身造型与局部修整",
      "造型前后照片记录",
    ],
    featured: true,
  },
  {
    name: "深层护理",
    description:
      "适合毛发干燥、易打结，或换季需要加强护理的宠物。",
    price: "¥228",
    suffix: "起 / 次",
    features: ["基础洗护与精华护理", "打结预处理与除浮毛", "居家护理建议清单"],
  },
] as const;

export const petTypes = ["小型犬", "中大型犬", "猫咪", "其他小宠"] as const;

export const bookingPlans = [
  "日常清洁",
  "洗护造型",
  "深层护理",
  "猫咪洗护",
  "到店评估",
] as const;

export const bookingTimeSlots = [
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
] as const;
