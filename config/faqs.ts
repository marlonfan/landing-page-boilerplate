export const FAQS_EN = [
  {
    title: "What is WebTracer?",
    content:
      "WebTracer is a Chrome extension that allows users to track and record their browsing history across the internet. It's designed to help users monitor their digital footprint, analyze their browsing habits, and improve their online experience by providing insights and data on their internet usage.",
  },
  {
    title: "How does WebTracer work?",
    content:
      "Once installed, WebTracer runs in the background of your Chrome browser, automatically tracking and logging all web pages you visit. It organizes your browsing history in a user-friendly interface, offering various tools for analysis and data management without compromising your privacy.",
  },
  {
    title: "Is WebTracer free to use?",
    content:
      "Yes, WebTracer is completely free to use. Our goal is to provide a powerful tool for internet users to understand and manage their online presence more effectively without any cost.",
  },
  {
    title: "How can I install WebTracer?",
    content:
      "You can install WebTracer by visiting the Chrome Web Store and searching for 'WebTracer'. Click on 'Add to Chrome' to install the extension. After installation, WebTracer will begin tracking your browsing history automatically.",
  },
  {
    title: "Can I customize what WebTracer tracks?",
    content:
      "Absolutely. WebTracer offers customizable settings that allow you to choose what data is tracked and recorded. You can exclude specific websites from being tracked or adjust the level of detail for your browsing history logs.",
  },
  {
    title: "How does WebTracer ensure my privacy?",
    content:
      "Privacy is a core principle of WebTracer. All data collected by WebTracer is stored locally on your device. We do not collect, share, or sell any personal information. You have complete control over your data and can delete it at any time.",
  },
  {
    title: "Can I export my browsing history from WebTracer?",
    content:
      "Yes, WebTracer provides an export feature that allows you to download your browsing history as a CSV file. This can be useful for backing up your data or for further analysis using other tools.",
  },
  {
    title: "Does WebTracer work on other browsers?",
    content:
      "Currently, WebTracer is only available for Chrome. However, we are working on versions for other browsers. Stay tuned for updates on our website and social media channels.",
  },
  {
    title: "What makes WebTracer different from built-in browser history?",
    content:
      "Unlike the basic browsing history feature in browsers, WebTracer offers advanced tracking and analysis tools. It provides more detailed insights, better organization, and customizable settings to manage and review your digital footprint in a way that built-in browser history does not.",
  },
  {
    title: "How do I contact support for WebTracer?",
    content:
      "If you need help or have questions about WebTracer, you can contact our support team by emailing i@marlon.life. We aim to respond to all inquiries within 48 hours.",
  },
];

export const FAQS_ZH = [
  {
    title: "什么是【痕迹】？",
    content:
      "【痕迹】是一个专为Chrome浏览器设计的扩展插件，旨在帮助用户跟踪和记录他们在互联网上的浏览历史。它为用户提供了监控数字足迹、分析浏览习惯以及通过提供互联网使用情况的见解和数据来改善在线体验的能力。",
  },
  {
    title: "【痕迹】如何工作？",
    content:
      "安装后，【痕迹】将在您的Chrome浏览器后台运行，自动跟踪和记录您访问的所有网页。它以用户友好的界面组织您的浏览历史，提供分析和数据管理的各种工具，同时不会妥协您的隐私。",
  },
  {
    title: "【痕迹】是否免费？",
    content:
      "是的，【痕迹】完全免费使用。我们的目标是提供一个强大的工具，使互联网用户能够更有效地理解和管理他们的在线存在，而无需任何成本。",
  },
  {
    title: "如何安装【痕迹】？",
    content:
      "您可以通过访问Chrome网上应用店并搜索【痕迹】来安装【痕迹】。点击 “添加至Chrome” 即可安装扩展。安装后，【痕迹】将自动开始跟踪您的浏览历史。",
  },
  {
    title: "我可以自定义【痕迹】跟踪什么吗？",
    content:
      "当然。【痕迹】提供了可自定义的设置，允许您选择哪些数据被跟踪和记录。您可以排除特定网站，不被跟踪，或调整您的浏览历史日志的详细程度。",
  },
  {
    title: "【痕迹】如何确保我的隐私？",
    content:
      "隐私是【痕迹】的核心原则之一。【痕迹】收集的所有数据都存储在您的设备上。我们不收集、分享或出售任何个人信息。您对您的数据拥有完全的控制权，并可以随时删除它。",
  },
  {
    title: "我可以从【痕迹】导出我的浏览历史吗？",
    content:
      "是的，【痕迹】提供了一个导出功能，允许您将您的浏览历史作为CSV文件下载。这对于备份您的数据或使用其他工具进一步分析可能很有用。",
  },
  {
    title: "【痕迹】能在其他浏览器上工作吗？",
    content:
      "目前，【痕迹】仅适用于Chrome浏览器。然而，我们正在开发其他浏览器的版本。请关注我们的网站和社交媒体频道，获取更新信息。",
  },
  {
    title: "【痕迹】与内置的浏览器历史记录有什么不同？",
    content:
      "与浏览器的基本浏览历史功能不同，【痕迹】提供了高级的跟踪和分析工具。它提供了更详细的见解，更好的组织和可自定义的设置，以一种内置的浏览器历史记录所不具备的方式管理和审查您的数字足迹。",
  },
  {
    title: "如何联系【痕迹】的客户支持？",
    content:
      "如果您需要帮助或对【痕迹】有任何疑问，可以通过发送电子邮件至 i@marlon.life 来联系我们的支持团队。我们的目标是在48小时内回应所有询问。",
  },
];



interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
}