import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaChartBar, FaCircle, FaCloud, FaEye, FaHeadset, FaLock } from "react-icons/fa6";

export const FEATURES_EN = [
  {
    title: "Comprehensive Tracking",
    content: "Records every step you take on the internet, ensuring no important information is missed.",
    icon: FaEye,
  },
  {
    title: "Privacy Protection",
    content: "Respects user privacy with multi-layered privacy protection settings to ensure the security of your tracking data.",
    icon: FaLock,
  },
  {
    title: "Data Analysis",
    content: "Provides insightful analysis of your browsing data with advanced analytical tools, helping you understand your browsing habits better.",
    icon: FaChartBar,
  },
  {
    title: "Cloud Sync",
    content: "Synchronizes your browsing data in real-time, regardless of the device you are using, making it easy to access your history records.",
    icon: FaCloud,
  },
  {
    title: "Ease of Use",
    content: "Features a clean and intuitive user interface, allowing you to easily master all functionalities without the need for complex settings.",
    icon: FaCircle,
  },
  {
    title: "Customer Support",
    content: "Provides round-the-clock customer support service, ready to answer your questions at any time.",
    icon: FaHeadset,
  },
];

export const FEATURES_ZH = [
  {
    title: "全面跟踪",
    content: "记录你在互联网上的每一步，确保不错过任何重要信息。",
    icon: FaEye,
  },
  {
    title: "隐私保护",
    content: "尊重用户隐私，提供多层次的隐私保护设置，确保跟踪数据的安全。",
    icon: FaLock,
  },
  {
    title: "数据分析",
    content: "通过高级分析工具，提供洞察力强的浏览数据分析，帮助你更好地理解你的浏览习惯。",
    icon: FaChartBar,
  },
  {
    title: "云同步",
    content: "无论你使用哪种设备，都能实时同步你的浏览数据，轻松访问你的历史记录。",
    icon: FaCloud,
  },
  {
    title: "易于使用",
    content: "简洁直观的用户界面，让你轻松掌握所有功能，无需复杂设置。",
    icon: FaCircle,
  },
  {
    title: "客户支持",
    content: "提供全天候客户支持服务，随时解答你的疑问。",
    icon: FaHeadset,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
}