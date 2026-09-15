/* ===================================================
   مرسم الفنانة مريم جمال | إعدادات Tailwind
   tailwind.config.js
   =================================================== */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                palette: {
                    gold:        'var(--art-gold, #c8963e)',
                    terracotta:  'var(--art-terracotta, #c85a32)',
                    ultramarine: 'var(--art-ultramarine, #244b7a)',
                    viridian:    'var(--art-viridian, #1d6a54)',
                    canvas:      'var(--art-canvas, #fdfbf7)',
                    umber:       'var(--art-umber, #3e2723)',
                    primary:     'var(--art-primary, #b85d34)',
                    secondary:   'var(--art-secondary, #2a5247)'
                }
            },
            fontFamily: {
                cairo:       ['Cairo', 'sans-serif'],
                art:         ['"Aref Ruqaa"', 'serif'],
                calligraphy: ['"Amiri"', 'serif'],
                kufi:        ['"Reem Kufi"', 'sans-serif']
            }
        }
    }
};
