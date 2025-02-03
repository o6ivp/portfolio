import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.contact": "Contact",

    // About Section
    "about.title": "Software Engineer",
    "about.description":
      "Full-stack developer with experience in IoT solutions and web application development. Graduate of National Defense Academy with a strong foundation in engineering principles. Currently focusing on cloud-native development and seeking international opportunities.",
    "about.age": "years old",
    "about.location": "Japan",
    "about.remote": "Remote Work Available",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.languages": "Programming Languages",
    "skills.frameworks": "Frameworks",
    "skills.databases": "Databases",
    "skills.cloud": "Cloud Services (AWS)",
    "skills.tools": "Tools",
    "skills.years": "years",

    // Projects Section
    "projects.title": "Projects",
    "projects.attendance.title": "Attendance Management System",
    "projects.attendance.description":
      "Shift generation and attendance management application",
    "projects.attendance.role": "Full-stack Developer",
    "projects.attendance.responsibilities.1":
      "Led end-to-end development from requirements to testing",
    "projects.attendance.responsibilities.2":
      "Designed and implemented serverless architecture with AWS",
    "projects.attendance.responsibilities.3":
      "Built authentication system using Cognito",
    "projects.attendance.responsibilities.4":
      "Developed full-stack application with React frontend and Go backend",

    "projects.iot.title": "IoT Sensor Evaluation System",
    "projects.iot.description": "Real-time sensor data analysis system",
    "projects.iot.role": "Backend Developer",
    "projects.iot.responsibilities.1":
      "Developed sensor data processing system in C++",
    "projects.iot.responsibilities.2": "Created RESTful API using Flask",
    "projects.iot.responsibilities.3":
      "Implemented real-time monitoring dashboard with Grafana",
    "projects.iot.responsibilities.4":
      "Designed and implemented MySQL database architecture",

    "projects.vpn.title": "VPN System Implementation",
    "projects.vpn.description": "WireGuard VPN system on Ubuntu",
    "projects.vpn.role": "Infrastructure Engineer",
    "projects.vpn.responsibilities.1":
      "Architected and implemented WireGuard VPN solution",
    "projects.vpn.responsibilities.2": "Optimized security configurations",
    "projects.vpn.responsibilities.3":
      "Established comprehensive system monitoring",

    "projects.responsibilities": "Responsibilities",
    "projects.tech": "Technologies",

    // Research Section
    "research.title": "Research Experience",
    "research.project.title": "Drowsiness Prevention System Research",
    "research.project.subtitle":
      "National Defense Academy - Graduation Research Project",
    "research.project.overview": "Project Overview",
    "research.project.description":
      "Developed a system to detect and prevent drowsiness by monitoring environmental conditions and user state using multiple sensors and computer vision techniques.",
    "research.project.implementation": "Technical Implementation",
    "research.implementation.1":
      "Integration of multiple sensors (CO2, distance, infrared) with Raspberry Pi",
    "research.implementation.2":
      "Implementation of I2C communication protocol for sensor data collection",
    "research.implementation.3":
      "Development of eye detection and tracking system using OpenCV and dlib",
    "research.implementation.4":
      "Implementation of machine learning algorithms for drowsiness detection",
    "research.project.tech": "Technologies Used",
    "research.tech.stack":
      "Python, OpenCV, dlib, Raspberry Pi, I2C, CO2 Sensor, Distance Sensor, Infrared Sensor, TensorFlow",
    "research.details": "Details",
    "research.details.item1": "https://github.com/squiffer9/drosiness_detection",

    // Contact Section
    "contact.title": "Contact",
    "contact.message":
      "I'm open to remote work opportunities and international collaboration. Feel free to reach out!",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
  },
  ja: {
    // Navigation
    "nav.about": "概要",
    "nav.skills": "スキル",
    "nav.projects": "プロジェクト",
    "nav.research": "研究",
    "nav.contact": "連絡先",

    // About Section
    "about.title": "ソフトウェアエンジニア",
    "about.description":
      "IoTソリューションとWebアプリケーション開発を経験しました。現在はクラウドネイティブ開発に注力しており、AWSの知見を増やしたいと考えています。",
    "about.age": "歳",
    "about.location": "日本",
    "about.remote": "リモートワーク可能",

    // Skills Section
    "skills.title": "技術スキル",
    "skills.languages": "プログラミング言語",
    "skills.frameworks": "フレームワーク",
    "skills.databases": "データベース",
    "skills.cloud": "クラウドサービス（AWS）",
    "skills.tools": "ツール",
    "skills.years": "年",

    // Projects Section
    "projects.title": "プロジェクト実績",
    "projects.attendance.title": "勤怠管理システム",
    "projects.attendance.description":
      "シフト生成機能付き勤怠管理アプリケーション",
    "projects.attendance.role": "フルスタック開発者",
    "projects.attendance.responsibilities.1":
      "要件定義から実装、テストまでの全工程を担当",
    "projects.attendance.responsibilities.2":
      "AWSを活用したサーバーレスアーキテクチャの設計と実装",
    "projects.attendance.responsibilities.3": "認証システムの実装（Cognito）",
    "projects.attendance.responsibilities.4":
      "フロントエンド（React）とバックエンド（Go）の開発",

    "projects.iot.title": "IoTセンサー評価システム",
    "projects.iot.description": "リアルタイムセンサーデータ分析システム",
    "projects.iot.role": "バックエンド開発者",
    "projects.iot.responsibilities.1":
      "C++によるセンサーデータ処理システムの開発",
    "projects.iot.responsibilities.2": "Flaskを使用したAPI開発",
    "projects.iot.responsibilities.3": "Grafanaによるダッシュボード構築",
    "projects.iot.responsibilities.4": "MySQLデータベース設計と実装",

    "projects.vpn.title": "VPNシステム構築",
    "projects.vpn.description": "Ubuntu上でのWireGuard VPNシステム構築",
    "projects.vpn.role": "インフラエンジニア",
    "projects.vpn.responsibilities.1": "WireGuard VPNの設計と実装",
    "projects.vpn.responsibilities.2": "セキュリティ設定の最適化",
    "projects.vpn.responsibilities.3": "システム監視の構築",

    "projects.responsibilities": "担当業務",
    "projects.tech": "使用技術",

    // Research Section
    "research.title": "卒業研究",
    "research.project.title": "居眠り防止システムの基礎研究",
    "research.project.subtitle": "授業中の居眠りと二酸化炭素濃度、室温、体表面温度、瞬きの回数の関係のリアルタイム分析",
    "research.project.overview": "プロジェクト概要",
    "research.project.description":
      "環境条件とユーザーの状態を複数のセンサーとコンピュータビジョンを用いてモニタリングし、居眠りを検知・防止するシステムを開発。",
    "research.project.implementation": "技術実装",
    "research.implementation.1":
      "Raspberry Piを使用した複数センサー（CO2、距離、赤外線）の統合",
    "research.implementation.2": "I2C通信プロトコルの実装",
    "research.implementation.3": "OpenCVとdlibを使用した目の検出システム開発",
    "research.implementation.4": "機械学習アルゴリズムの適用",
    "research.project.tech": "使用技術",
    "research.tech.stack":
      "Python, OpenCV, dlib, Raspberry Pi, I2C, CO2センサー, 測距センサー, 赤外線センサー, TensorFlow",
    "research.details": "詳細",
    "research.details.item1": "https://github.com/squiffer9/drosiness_detection",

    // Contact Section
    "contact.title": "連絡先",
    "contact.message":
      "リモートワークや国際的な協業の機会を探しています。お気軽にご連絡ください。",
    "contact.email": "メール",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ja");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
