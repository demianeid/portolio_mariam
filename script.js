/* ===================================================
   مرسم الفنانة مريم جمال | ملف الجافاسكريبت الرئيسي
   script.js
   =================================================== */

// ============================================================
// 1. سلايدر اللوحة المعروضة على حامل اللوحات (Easel Auto Slider)
// ============================================================
const easelPaintings = [
    {
        img:   "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
        badge: "لوحة الأسبوع: ترانيم الفجر",
        title: "ترانيم الفجر والضوء",
        desc:  "مقاس: 100 × 80 سم • أصباغ زيتية معتّقة على كتان"
    },
    {
        img:   "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=85",
        badge: "إشراقة أندلسية: فناء الحمراء",
        title: "فناء الحمراء والياسمين",
        desc:  "مقاس: 110 × 85 سم • طبقات زيت وورنيش دمار"
    },
    {
        img:   "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=800&q=85",
        badge: "طاقة لونية: تدرجات الروح",
        title: "سيمفونية تدرجات الروح",
        desc:  "مقاس: 120 × 90 سم • أكريليك وورق ذهب عيار 24"
    }
];

let currentEaselIndex = 0;
let easelTimer = null;
const EASEL_INTERVAL = 2000; // مللي ثانية بين كل لوحة

/**
 * بناء شرائح الصور وإنشاء نقاط التنقل
 */
function buildEaselSlider() {
    const slidesEl = document.getElementById('easel-slides');
    const dotsEl   = document.getElementById('easel-dots');
    slidesEl.innerHTML = '';
    dotsEl.innerHTML   = '';

    easelPaintings.forEach((p, i) => {
        // شريحة: absolute تغطي كامل الإطار - crossfade
        const slide = document.createElement('div');
        slide.className = 'easel-slide absolute inset-0';
        slide.style.cssText = `
            opacity: ${i === 0 ? '1' : '0'};
            transform: scale(${i === 0 ? '1' : '1.05'});
            z-index: ${i === 0 ? '1' : '0'};
            transition: opacity 0.7s ease, transform 0.7s ease;
        `;
        slide.innerHTML = `<img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover" loading="${i === 0 ? 'eager' : 'lazy'}">`;
        slidesEl.appendChild(slide);

        // نقطة التنقل
        const dot = document.createElement('button');
        dot.className = 'easel-dot w-2 h-2 rounded-full transition-all duration-300 border border-white/50 ' +
            (i === 0 ? 'bg-amber-400 scale-125' : 'bg-white/40 hover:bg-white/70');
        dot.setAttribute('aria-label', `لوحة ${i + 1}`);
        dot.onclick = () => goToEaselSlide(i);
        dotsEl.appendChild(dot);
    });
}

/**
 * الانتقال إلى شريحة معينة بالفهرس
 */
function goToEaselSlide(index) {
    currentEaselIndex = (index + easelPaintings.length) % easelPaintings.length;
    updateEaselUI();
    resetEaselTimer();
}

/**
 * التحريك يميناً (+1) أو يساراً (-1)
 */
function moveEaselSlider(dir) {
    goToEaselSlide(currentEaselIndex + dir);
}

/**
 * تحديث الـ UI (الشرائح + البطاقة التعريفية + النقاط)
 */
function updateEaselUI() {
    const p      = easelPaintings[currentEaselIndex];
    const slides = document.querySelectorAll('.easel-slide');
    const dotsEl = document.getElementById('easel-dots');

    // crossfade: إظهار الشريحة النشطة وإخفاء الباقي
    slides.forEach((slide, i) => {
        if (i === currentEaselIndex) {
            slide.style.opacity   = '1';
            slide.style.transform = 'scale(1)';
            slide.style.zIndex    = '1';
        } else {
            slide.style.opacity   = '0';
            slide.style.transform = 'scale(1.05)';
            slide.style.zIndex    = '0';
        }
    });

    // تحديث بطاقة اللوحة
    document.getElementById('hero-badge-text').innerText    = p.badge;
    document.getElementById('hero-painting-title').innerText = p.title;
    document.getElementById('hero-painting-desc').innerText  = p.desc;

    // تحديث نقاط التنقل
    dotsEl.querySelectorAll('.easel-dot').forEach((dot, i) => {
        if (i === currentEaselIndex) {
            dot.classList.add('bg-amber-400', 'scale-125');
            dot.classList.remove('bg-white/40');
        } else {
            dot.classList.remove('bg-amber-400', 'scale-125');
            dot.classList.add('bg-white/40');
        }
    });
}

// تشغيل وإيقاف المؤقت التلقائي
function startEaselTimer()  { easelTimer = setInterval(() => moveEaselSlider(1), EASEL_INTERVAL); }
function resetEaselTimer()  { clearInterval(easelTimer); startEaselTimer(); }
function pauseEaselSlider() { clearInterval(easelTimer); }
function resumeEaselSlider(){ startEaselTimer(); }

// تهيئة السلايدر عند تحميل الصفحة
buildEaselSlider();
startEaselTimer();


// ============================================================
// 2. تصفية المعرض الفني (Gallery Filtering)
// ============================================================
function filterGallery(category) {
    const items   = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-filter-btn');

    // تحديث حالة الأزرار (active / inactive)
    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('bg-[#b85d34]', 'text-white');
            btn.classList.remove('bg-white/90', 'text-amber-950');
        } else {
            btn.classList.remove('bg-[#b85d34]', 'text-white');
            btn.classList.add('bg-white/90', 'text-amber-950');
        }
    });

    // إظهار / إخفاء اللوحات مع تأثير fade-in
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = 'flex';
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease';
                item.style.opacity    = '1';
            }, 50);
        } else {
            item.style.display = 'none';
        }
    });
}


// ============================================================
// 3. نافذة تكبير وتفاصيل العمل الفني (Artwork Lightbox Modal)
// ============================================================
function openArtworkModal(title, imgSrc, medium, dims, desc, paletteColors, status) {
    document.getElementById('modal-title').innerText  = title;
    document.getElementById('modal-img').src          = imgSrc;
    document.getElementById('modal-medium').innerText = medium;
    document.getElementById('modal-dims').innerText   = dims;
    document.getElementById('modal-desc').innerText   = desc;
    document.getElementById('modal-status').innerText = status;

    // بناء شريط الألوان (باليتة الأصباغ)
    const paletteContainer = document.getElementById('modal-palette');
    paletteContainer.innerHTML = '';
    paletteColors.forEach(color => {
        const dot = document.createElement('span');
        dot.className = 'w-7 h-7 rounded-full border-2 border-white shadow-sm inline-block';
        dot.style.backgroundColor = color;
        paletteContainer.appendChild(dot);
    });

    const modal = document.getElementById('artwork-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeArtworkModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.closest('button')) return;
    const modal = document.getElementById('artwork-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}


// ============================================================
// 4. تقديم استمارة التكليف الفني
// ============================================================
function handleCommissionSubmit(e) {
    e.preventDefault();
    alert('🎨 شكراً لتواصلك مع مرسم مريم جمال! تم استلام تفاصيل طلبك الفني بنجاح، وستتواصل معك الفنانة مريم شخصياً خلال 24 ساعة لمناقشة الإسكتش والتفاصيل.');
    e.target.reset();
}


// ============================================================
// 5. ScrollSpy - تمييز الرابط النشط في الناف بار
//    محسّن باستخدام requestAnimationFrame لتجنب إعادة الرسم المتكررة
// ============================================================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link-brush');
    const header   = document.getElementById('main-header');
    let rafPending = false;

    function updateActiveNav() {
        rafPending = false;
        const scrollPos = window.scrollY + 140; // تعويض ارتفاع الهيدر الثابت

        let currentId = '';
        sections.forEach(section => {
            const top    = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentId = section.getAttribute('id');
            }
        });

        // عند الوصول لنهاية الصفحة نفعّل قسم التواصل تلقائياً
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
            currentId = 'contact';
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentId}`);
        });

        // ظل أقوى للهيدر عند التمرير
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('shadow-sm');
            } else {
                header.classList.remove('shadow-md');
                header.classList.add('shadow-sm');
            }
        }
    }

    function onScroll() {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(updateActiveNav);
        }
    }

    window.addEventListener('scroll', onScroll,      { passive: true });
    window.addEventListener('resize', onScroll,      { passive: true });
    updateActiveNav(); // تشغيل أولي
}


// ============================================================
// 6. فتح وإغلاق قائمة التنقل للشاشات الصغيرة (Mobile Menu)
// ============================================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    const isClosed = menu.classList.contains('hidden');
    if (isClosed) {
        menu.classList.remove('hidden');
        if (icon) icon.innerText = '✕';
    } else {
        menu.classList.add('hidden');
        if (icon) icon.innerText = '☰';
    }
}


// ============================================================
// تهيئة: تشغيل ScrollSpy بعد اكتمال تحميل DOM
// ============================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSpy);
} else {
    initScrollSpy();
}
