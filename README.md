# 🎨 مرسم الفنانة مريم جمال | Mariam Gamal Fine Art Portfolio

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/demianeid/portolio_mariam?style=for-the-badge&color=b85d34)
![GitHub stars](https://img.shields.io/github/stars/demianeid/portolio_mariam?style=for-the-badge&color=c8963e)
![GitHub forks](https://img.shields.io/github/forks/demianeid/portolio_mariam?style=for-the-badge&color=24584e)
![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br />

**موقع ومعرض فني تفاعلي يعرض أعمال ولوحات الفنانة التشكيلية مريم جمال بأحدث معايير الويب والتصميم الجمالي الفاخر.**

[🌐 زيارة الموقع الحي (Live Demo)](https://portolio-mariam.vercel.app) • [✨ استعراض المعرض](#-معرض-الأعمال) • [🚀 التشغيل المحلي](#-التشغيل-محليا)

</div>

---

## 📖 نبذة عن المشروع (About The Project)

موقع محفظة فنية متكامل (Artist Portfolio Website) صُمم خصيصاً ليعكس روح المرسم الكلاسيكي مع لمسة عصرية راقية. يتميز الموقع بملمس قماش الكانفاس الطبيعي وتأثيرات ألوان مائية حية، مع دعم كامل للغة العربية والاتجاه من اليمين إلى اليسار (RTL).

تمت هندسة الموقع وتقسيمه بدقة إلى ملفات مستقلة نظيفة (**HTML5**, **CSS3**, **JavaScript**, **Tailwind CSS**) مع تحسينات مكثفة للأداء والسرعة وسهولة التصفح.

---

## ✨ المميزات الرئيسية (Key Features)

- 🎨 **حامل لوحات تفاعلي (Interactive Easel Slider):**
  - عرض مميز لأبرز اللوحات مع تأثير انتقال سلس (Crossfade) وتبديل تلقائي وتفاعلي.
  - إبراز مقاسات اللوحات والخامات المستخدمة وشارات الأعمال المميزة.

- 🖼️ **معرض أعمال متكامل وفلترة سريعة (Gallery Filtering):**
  - تصفية فورية حسب الفئات: *كل الأعمال، لوحات زيتية، أكريليك، بورتريه وتعبيري، تجريدي*.
  - تأثير ظهور متحرك (Fade-in) سريع وخفيف.

- 🔍 **نافذة تفاصيل العمل الفني (Artwork Lightbox Modal):**
  - استعراض اللوحة بدقة عالية.
  - تفاصيل مقاسات الكانفاس، الخامة، الحالة (متاحة للبيع أو في مقتنيات خاصة).
  - باليتة الأصباغ المستوحاة من كل عمل فني.

- 📜 **مظهر بصري فريد (Artistic Aesthetic & Textures):**
  - خلفية نسيج الكانفاس القطني المتداخل.
  - بقع ألوان مائية متحركة عضوياً (Organic watercolor blobs).
  - ضربات فرشاة مخصصة للعناوين والروابط النشطة.

- ⚡ **أداء فائق وتحسين الـ Core Web Vitals:**
  - تحميل مسبق للخطوط والصور الحرجة (`preload`, `preconnect`, `fetchpriority="high"`).
  - خطوط عربية مميزة (`Cairo`, `Amiri`, `Aref Ruqaa`, `Reem Kufi`) مع تفعيل `display=swap`.
  - تحسين تمرير القائمة التفاعلية (ScrollSpy) باستخدام `requestAnimationFrame` لمنع التقطيع.

- 📱 **متجاوب بالكامل (Fully Responsive):**
  - متوافق مع كافة الأجهزة وشاشات الجوال والأجهزة اللوحية والحواسيب المكتبية.
  - قائمة ملاحة جانبية للشاشات الصغيرة.

- 💌 **نموذج حجز وتكليف فني (Art Commission Form):**
  - إمكانية طلب لوحة مخصصة بحجم ونوع محدد بسهولة.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

| التقنية | الاستخدام |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | البنية الهيكلية ودلالات الويب (Semantic HTML5) ودعم كامل للـ RTL |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | الأنماط المخصصة، نسيج الكانفاس، الحركات الانسيابية، ومتغيرات الألوان |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | التنسيق الشبكي السريع ونظام المسافات والألوان |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | السلايدر التفاعلي، نظام الفلترة، النافذة المنبثقة، وتتبع التمرير |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | الاستضافة والنشر السحابي المستمر (CI/CD) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | إدارة الإصدارات والتحكم في الكود |

---

## 📂 هيكل المشروع (Project Structure)

```plaintext
Portolio_Mariam/
├── index.html          # هيكل الصفحة الرئيسي ودلالات العناصر
├── styles.css          # ملف الأنماط المخصصة، مؤثرات الكانفاس والألوان المائية
├── script.js           # منطق الجافاسكريبت (السلايدر، الفلترة، النافذة المنبثقة، ScrollSpy)
├── tailwind.config.js  # إعدادات وتخصيصات سمة Tailwind
├── .gitignore          # استثناء الملفات غير المرغوبة من Git
└── README.md           # دليل وثائق المشروع
```

---

## 🚀 التشغيل محلياً (Getting Started Locally)

لتشغيل المشروع على جهازك المحلي، اتبع الخطوات البسيطة التالية:

### 1. استنساخ المستودع (Clone Repository)
```bash
git clone https://github.com/demianeid/portolio_mariam.git
cd portolio_mariam
```

### 2. فتح الموقع
المشروع عبارة عن موقع ثابت (Static Website) لا يحتاج إلى تثبيت حزم أو خوادم خلفية:
- يمكنك فتح ملف `index.html` مباشرة بالنقر المزدوج في أي متصفح ويب.
- أو تشغيله بواسطة إضافة **Live Server** في VS Code / Antigravity IDE.
- أو عبر خادم محلي سريع باستخدام Python:
  ```bash
  python -m http.server 8080
  ```
  ثم زيارة: `http://localhost:8080`

---

## 🎨 باليتة ألوان المرسم (Brand Color Palette)

```css
:root {
    --art-primary:   #b85d34; /* تيراكوتا دافئ وطين فخاري */
    --art-secondary: #24584e; /* زيتي أندلسي عميق */
    --art-gold:      #c8963e; /* لمسات ورنيش وذهب عتيق */
    --art-canvas:    #faf7f2; /* بياض الكانفاس الطبيعي */
    --art-paper:     #fffefb; /* ورق الرسم والقطن */
    --art-ink:       #221d1a; /* حبر رسم فحمي عميق */
}
```

---

## 🌐 النشر والاستضافة (Deployment)

المشروع مربوط تلقائياً بـ **Vercel**؛ أي تعديل يتم دفعه إلى فرع `main` يُعاد نشره تلقائياً:
```bash
git add .
git commit -m "update: enhancements"
git push origin main
```

الرابط المباشر للإنتاج: **[https://portolio-mariam.vercel.app](https://portolio-mariam.vercel.app)**

---

## 📜 الترخيص (License)

هذا المشروع متاح تحت رخصة [MIT](LICENSE) - يمكنك استخدامه والاستفادة منه بحرية مع الإشارة للمصدر.

---

<div align="center">
  صُنع بشغف لمرسم الفنانة <b>مريم جمال</b> 🖌️✨
</div>
