# PTCG CardDB - Gemini 3 Pro Edition

## 💎 設計主題：Quantum Nebula (量子星雲)

**Gemini 3 Pro Edition** 採用了 Google 最新的 Material Design 3 靈感，結合 Gemini 品牌的 **AI 未來感**與 **量子計算** 美學。設計核心在於「智慧」、「清晰」與「流暢」。

### 視覺語言 (Visual Language)

*   **色彩 (Colors):**
    *   **背景**: 極簡的灰白基底 (`#f0f4f8` / `#ffffff`)，象徵實驗室般的純淨。
    *   **核心漸層 (Gemini Gradient)**: `linear-gradient(90deg, #4285F4, #9B72CB, #D96570)` (Google Blue -> Deep Purple -> Soft Red)。用於文字、按鈕與強調元素，象徵多模態 AI 的融合。
    *   **狀態色**: 柔和的粉彩背景搭配深色文字 (e.g., `bg-green-100 text-green-700`)，現代且不刺眼。

*   **形狀 (Shapes):**
    *   **超圓角 (Super Rounded)**: 大量的 `rounded-3xl` 和 `rounded-full`，呈現有機、友善的科技感。
    *   **玻璃擬態 (Glassmorphism)**: 導航列與卡片使用 `backdrop-blur-xl` + 半透明白背景，營造輕盈懸浮感。

*   **排版 (Typography):**
    *   **Noto Sans TC**: 確保中文閱讀體驗極佳。
    *   **Material Icons Round**: 使用圓潤風格的 Material Icons，與 UI 的圓角語言呼應。

### 頁面總覽

1.  **首頁 (index.html)**
    *   **AI 驅動 Hero Section**: 展示「莉佳的霸王花ex」的環境分析，使用 Gemini 漸層背景與獨特的旋轉卡片展示區。
    *   **智慧篩選側邊欄**: 圓潤的 Material 風格篩選器。
    *   **數據可視化卡片**: 卡片列表直接整合勝率/使用率數據，資訊密度高但保持清爽。

2.  **套牌構築 (deck-builder.html)**
    *   **生產力介面**: 採用應用程式佈局 (App-like layout)，左側素材庫、中間工作區、右側 AI 助理。
    *   **AI 側邊欄**: 專屬的「Gemini AI 分析」面板，提供套牌評級、優化建議 (如建議增加抽牌手段) 和對戰優劣勢分析。

3.  **賽事中心 (events.html)**
    *   **Dashboard 風格**: 頂部展示四個關鍵數據卡片。
    *   **現代化表格**: 寬敞的行距、懸浮效果、狀態標籤使用膠囊樣式。

4.  **賽事詳情 (event-detail.html)**
    *   **沉浸式標題**: 背景光暈效果，搭配詳細的賽事資訊。
    *   **Top 8 排名**: 金/銀/銅牌的視覺化列表，強調選手與套牌資訊。
    *   **套牌分布條**: 漸層進度條展示 Meta 分布。

5.  **登入頁面 (login.html)**
    *   **極簡登入框**: 漂浮在帶有星雲光點背景的中心。
    *   **Gemini Branding**: 強烈的品牌識別與流暢的動效。

### 互動體驗

*   **Hover Effects**: 元素懸停時會有輕微的上浮 (`-translate-y`) 和 陰影擴散，提供觸感般的回饋。
*   **Micro-interactions**: 按鈕點擊、連結 hover 都有細緻的過渡動畫。

---
*Created by Gemini 3 Pro Agent*
