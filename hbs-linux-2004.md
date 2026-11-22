# HBS Case (2005) — Linux in 2004

## 基本資料
- **作者**：Pankaj Ghemawat（HBS）、Brian Subirana（MIT）、Christina Pham（p.1）
- **個案編號與年份**：HBS 9-705-407（Rev: July 7, 2005；Copyright © 2004，p.1）
- **標題**：Linux in 2004
- **原始檔名**：`raw/Linux in 2004 平台該開放還是封閉.pdf`
- **涵蓋頁數**：全文精讀，共 35 頁（PDF p.1–p.35，含 Appendix A–B、Exhibit 1–9 與 Endnotes）
- **頁碼對照備註**：本文件 **PDF 頁碼與 HBS 印刷頁碼完全一致**（PDF p.1 = 印刷 p.1，至 PDF p.35 = 印刷 p.35）。

---

## 核心論點
1. **開放原始碼（OSS）以「市集模式」顛覆「大教堂模式」**：透過 GNU GPL（「著佐權 Copyleft」）確保原始碼開放與衍生作品不得閉源，Linux 結合全球志願開發者平行除錯與 Linus Torvalds 核心決策機制，展現出高穩定性、跨硬體互通性與叢集運算優勢，卻也面臨介面較不親民、商業應用不足與程式碼分叉（code-forking）風險（p.2–p.6）。
2. **伺服器市場快速滲透，但桌面端仍大幅落後 Windows**：Linux 憑藉成本、彈性與效能表現成功打入華爾街金融機構、大型企業與各國政府伺服器市場，但因 GUI 與多媒體及套裝應用不足，在桌面端仍難以撼動 Windows 95%–96% 的統治地位（p.1, p.6–p.10）。
3. **互補者商業模式分化：通才巨頭獲利遠勝專精廠商**：作業系統商品化（commoditization）使單純販售套裝軟體的高毛利模式（50%–80%）轉向較低毛利的服務與訂閱模式（服務毛利通常 ≤20%，p.10）。專精互補者（如 Red Hat）開始調漲企業版訂閱價，而通才互補者（如 IBM、HP）則靠賣伺服器硬體、企業軟體與顧問服務賺取更大利益，並以 Linux 作為對抗 Microsoft 的戰略武器（p.10–p.12）。
4. **SCO 智財訴訟凸顯開源生態系的法律與治理成熟化需求**：2003 年 SCO 控告 Linux 廠商與企業用戶侵害 UNIX 著作權，迫使主流廠商提供法律賠償保證（legal indemnification）、核心團隊導入開發者來源證明（Developer's Certificate of Origin），並由 OSDL 設立 1,000 萬美元法律基金（p.13）。
5. **封閉陣營的分化反擊（Sun 雙軌苦撐 vs. Microsoft 混合防禦）**：原本採軟硬體獨家綁定（Solaris + Sparc）的 Sun 被迫於 2002 年轉向在低階市場支援 Linux 與 Intel 晶片，陷入左右互搏；Microsoft 則在遭遇 Software Assurance 漲價反彈後，採取「選擇性原始碼共享（SSI/GSP）＋價格彈性＋整合創新（Longhorn）」多管齊下守住霸權（p.13–p.16）。

---

## 關鍵框架與數據

### 1. 開源授權、開發模式與組織結構（p.2–p.5, p.20–p.21）
- **GNU GPL（Copyleft）**：由 Richard Stallman 建立，確保任何人皆可「使用、複製、修改與散布修改版本」，且整合 GPL 程式碼的衍生軟體也必須以 GPL 釋出，防止「軟體囤積（software hoarding）」或私有化，但允許商業販售（p.2, p.20）。
- **市集（Bazaar）vs. 大教堂（Cathedral）**：Eric Raymond 比喻開源為熱鬧混亂的市集（平行開發除錯、早釋出常釋出），封閉軟體則如嚴謹靜謐的大教堂（小團隊秘密開發直到完成）（p.3）。
- **開源開發者畫像與動機**：逾 98% 為男性、逾 70% 年齡介於 22–37 歲、逾 80% 來自歐美、逾半任職 IT 業、逾 90% 為兼職投入（p.3–p.4）；動機包含工作熱情、創意展現、線上贈禮文化（gift culture）、名聲與自我滿足（**egoboo**，公開紀錄頁表揚貢獻者）及對 Microsoft 壟斷的反感（p.4–p.5, p.20）。
- **Linux 組織架構**：1991 年 10 月 Linus Torvalds 釋出核心、結合 Stallman 的 GNU shell 成為 Linux OS（p.4）；由 Torvalds 握最終決定權，搭配 3–6 名副官（lieutenants，負責決定何時 code freeze 以進行平行開發）與估計 4,000+ 至 10,000+ 名開發者（含 121 名模組維護者、2,605 名補丁貢獻者、1,562 名除錯者）（p.5）。

### 2. 市場規模、市占與客戶採納數據（p.6–p.10, p.23–p.25, p.29）
- **全球伺服器市場**：2003 年全球伺服器營收約 **457 億美元**（年增 3.2%）、出貨 **530 萬台**（年增 18.3%）（p.6）。
- **Linux 成長與伺服器市占**：全球用戶自 1992 年 1,000 人增至 2000 年 1,800 萬人，IDC 預估 2004 年達 **3,000 萬人**（相較 Microsoft 3.38 億人）並取得伺服器安裝用戶 **37%** 市占（p.6）。2001 年全球伺服器安裝基數市占（Exhibit 9, p.29）：Windows **43%**、Novell NetWare **17%**、Unix **16%**、Linux **13%**、其他 11%。2001–2006 年伺服器安裝基數 CAGR（Exhibit 3, p.23）：Linux **24.7%**、Windows **15.2%**、Unix **-5.0%**、NetWare **-12.5%**。
- **用戶端／桌面市場差距**：Windows 占桌面市占 **95%–96%**（p.7, p.15）；2002 年新授權出貨 Windows 1.09 億套 vs. Linux 350 萬套，安裝基數 Windows 3.26 億 vs. Linux 380 萬（p.6）。
- **三大客群採納數據**：
  - **中小企業（SMB，<1,000 人）**：2003 年 IT 支出逾 4,200 億美元，Gartner 顯示 45% 中型企業已使用或測試 Linux（p.7）。
  - **大型企業**：2004 年美國大型企業使用率達 **39%**（2000 年近 0%、2001 年 9%、2002 年 14%）；Forrester 調查顯示 72% 將擴大使用、24% 正以 Linux 取代 Windows 伺服器（p.8）。代表案例（p.1, p.8, Exhibit 5 p.25）：Dresdner Kleinwort Wasserstein 以 40 台 3,000 美元 Linux 取代 32 台 50,000 美元 Unix，風險計算時間從 **17 小時縮至 11 分鐘**；Google 運行 **10,000 台** Linux 伺服器並自行精簡程式碼提速；Amazon.com 年省 **1,700 萬美元**（25% 科技預算，性價比提升 4 倍）；Merrill Lynch 獲 **10 倍**性價比提升。
  - **政府部門**：截至 2003 年 1 月已有逾 76 個政府客戶轉用 Linux；中國政府 2003 年 11 月與 Sun 簽約於逾 **2 億台**電腦安裝 Linux 桌面（p.9）；英國政府以轉用 Linux 為籌碼與 Microsoft 談判續約省下預估 **1.5 億美元**；南非威脅立法挺開源後獲 Microsoft 免費提供全國 **32,000 所**公立學校軟體（p.9–p.10）。

### 3. 互補者與競爭者財務／定價數據（p.10–p.16, p.27–p.28）
- **總擁有成本（TCO）結構**：初期軟體採購僅占 TCO 的 **10%**，**50%–70%** 來自安裝後的人力與維護成本（p.11 註 g）。
- **專精互補者（Red Hat）**：FY2004（截至 2004/2/29）營收 **1.261 億美元**（年增 39%，FY2003 為 9,090 萬美元），FY2004 Q4 營收 3,700 萬美元、淨利 500 萬美元，訂閱占營收 66%、服務占 34%（p.11–p.12）。Red Hat Advanced Server 年訂閱費分 799 / 1,499 / 2,499 美元（採全場址強制涵蓋 all-or-none），逐漸逼近 Windows 2000 Advanced Server 的 3,999 美元（p.11）。
- **通才互補者（IBM / HP / Dell）**：IBM 於 2000 年底宣布 2001 年投入 **10 億美元**於 Linux 相關業務（p.12）；FY2004 同期 IBM Linux 相關伺服器銷售達 **5.52 億美元**（年增 60%，遠超 Red Hat 總營收，p.12）。2002 年 Q4 美國 Linux 伺服器前三大通才廠商（Exhibit 8, p.28）：IBM 1.6 億美元（+112%）、HP 8,000 萬美元（+81%）、Dell 7,700 萬美元（+66%）。
- **封閉勁敵（Sun vs. Microsoft，Exhibit 7 p.27）**：
  - **Sun**：FY2003 營收 114.34 億美元、稅後淨損 3.88 億美元（FY2002 虧損 34.29 億美元）；德意志銀行研究指 Intel 伺服器跑 Linux 性價比為 Sun 伺服器的 **4–15 倍**（p.14 註 k）。
  - **Microsoft**：FY2003 營收 **321.87 億美元**、稅後淨利 **99.93 億美元**、現金 **490.48 億美元**（p.27）；估計高達 **25%** 營收面臨開源威脅（p.15）。Software Assurance（SA）年費（伺服器初始授權 25%）引發客戶成本暴增 94%–107% 的反彈，反向推升 Linux 遷移意願（p.15）。

---

## 延伸概念與個案連結
- [[cases/linux-2004-open-vs-closed]]
- [[concepts/platform-openness-and-open-source]]
- [[concepts/ecosystem-governance-access-attachment]]
- [[concepts/ecosystem-roles-and-multi-ecosystem]]
