
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open-Source / Free",
    price: "Free",
    href: "https://github.com/marlonfan" || "#", // Example GitHub URL for WebTracer
    description:
      "Easily install WebTracer from the GitHub repository to start managing your browsing history with enhanced privacy and customization.",
    features: [
      "Completely free",
      "Full browsing history tracking",
      "Customizable privacy settings",
      "Open-source with an MIT License",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Customization",
    href: "mailto:i@marlon.life" || "#", // Example contact method
    description: "Subscribe to WebTracer Premium for advanced features, including cloud storage of browsing history and personalized analytics.",
    price: "$4.99/month",
    features: [
      "Cloud storage of browsing history",
      "Advanced data analytics",
      "Priority support",
      "Exclusive customization options",
    ],
    buttonText: "Subscribe Now",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "开源 / 免费",
    price: "免费",
    href: "https://github.com/marlonfan" || "#", // WebTracer的示例GitHub网址
    description: "从GitHub仓库轻松安装【痕迹】，开始带有增强隐私和自定义选项的浏览历史管理。",
    features: [
      "完全免费",
      "生命周期内浏览历史的云存储",
      "完整浏览历史跟踪",
      "可定制的隐私设置",
    ],
    buttonText: "开始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "高级定制",
    href: "mailto:i@marlon.life" || "#", // 示例联系方式
    description: "订阅【痕迹】高级版，获取包括浏览历史云存储和个性化分析在内的高级功能。",
    price: "¥34.99/月",
    features: [
      "浏览历史的云存储",
      "高级数据分析",
      "优先支持",
      "专属定制选项",
    ],
    buttonText: "敬请期待",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
}