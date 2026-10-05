window.CSS_COURSES = [
    {
        id: 'css-beginner',
        title: 'CSS Beginner',
        language: 'CSS',
        level: 'Beginner',
        description: 'أساسيات تصميم الواجهة، الألوان، الخطوط، المحددات، والمربع.',
        lessons: [
            {
                id: 'css-beginner-1',
                title: 'CSS introduction',
                description: 'تعرف على CSS وكيفية تطبيقه على HTML.',
                explanation: 'CSS اختصار Cascading Style Sheets، وهو اللغة المسؤولة عن الشكل واللون والهوامش والمسافات.',
                code: 'body {\n  font-family: Arial, sans-serif;\n  background: #f4f4f4;\n  color: #222;\n}',
                exercise: 'غير لون الخلفية ولون النص في صفحة.',
                challenge: 'أنشئ صفحة بكلاس وخصائص بسيطة.',
                tips: ['CSS يجعل الصفحة جميلة.', 'ابدأ بالأساسيات ثم التفاصيل.'],
                commonMistakes: ['عدم ربط الملف بالـ HTML', 'استخدام قيم غير صحيحة'],
                nextLesson: 'css-beginner-2'
            },
            {
                id: 'css-beginner-2',
                title: 'Selectors and classes',
                description: 'التعرف على المحددات المختلفة مثل class و id.',
                explanation: 'المحددات هي الأدوات التي تسمح لنا باختيار عناصر HTML وتطبيق الأنماط عليها.',
                code: '.card {\n  background: white;\n  border-radius: 12px;\n}\n#title {\n  color: #4f46e5;\n}',
                exercise: 'قم بإنشاء class و id وتطبيق أنماط عليهما.',
                challenge: 'صمم بطاقة بسيطة باستخدام class.',
                tips: ['استخدم classes للتكرار.', 'استخدم ids للعناصر الفريدة.'],
                commonMistakes: ['استخدام id أكثر من مرة', 'تحديد غير واضح'],
                nextLesson: 'css-beginner-3'
            },
            {
                id: 'css-beginner-3',
                title: 'Box Model',
                description: 'فهم المسافات داخل العناصر وخارجها.',
                explanation: 'Box Model يتكون من content، padding، border، و margin. هذا المفهوم أساسي في التصميم.',
                code: '.box {\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  margin: 16px;\n}',
                exercise: 'أنشئ مربعًا بحدود ومسافات مناسبة.',
                challenge: 'صمم بطاقتين متطابقتين باستخدام Box Model.',
                tips: ['margin يخرج العنصر خارج الحدود.', 'padding يزيد داخل المساحة.'],
                commonMistakes: ['تجاهل margen أو padding', 'عدم ضبط العرض'],
                nextLesson: 'css-beginner-4'
            },
            {
                id: 'css-beginner-4',
                title: 'Display and positioning basics',
                description: 'التعامل مع display و position والتموضع البسيط.',
                explanation: 'display تحدد طريقة عرض العنصر، مثل block أو inline أو flex. position يحدد موقعه داخل الصفحة.',
                code: '.menu {\n  display: flex;\n  gap: 16px;\n}\n.card {\n  position: relative;\n}',
                exercise: 'أنشئ قائمة أفقية باستخدام display flex.',
                challenge: 'صمم شريط تنقل بسيط.',
                tips: ['position static هو الوضع الافتراضي.', 'flex أسهل في تنظيم العناصر.'],
                commonMistakes: ['استخدام display غير صحيح', 'نقص gap'],
                nextLesson: 'css-intermediate-1'
            }
        ]
    },
    {
        id: 'css-intermediate',
        title: 'CSS Intermediate',
        language: 'CSS',
        level: 'Intermediate',
        description: 'التخطيط المرن، الاستجابة، والأنيميشن البسيط.',
        lessons: [
            {
                id: 'css-intermediate-1',
                title: 'Flexbox',
                description: 'تخطيط مرن للصفحات والأقسام.',
                explanation: 'Flexbox يساعد في ترتيب العناصر بشكل أفقي أو رأسي بسهولة، وهو أداة رئيسية في تصميم الواجهات.',
                code: '.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}',
                exercise: 'أنشئ صفًا يحتوي على 3 عناصر موزعة بالتساوي.',
                challenge: 'صمم navbar باستخدام flexbox.',
                tips: ['justify-content يضبط المحور الأفقي.', 'align-items يضبط المحور الرأسي.'],
                commonMistakes: ['تجاهل direction', 'عدم فهم المحاور'],
                nextLesson: 'css-intermediate-2'
            },
            {
                id: 'css-intermediate-2',
                title: 'Grid',
                description: 'بناء layouts أكثر تعقيدًا وتوزيعًا.',
                explanation: 'Grid مناسب للتخطيط المعقد ويُستخدم لإنشاء صفوف وأعمدة منظمة في واجهة كاملة.',
                code: '.layout {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 20px;\n}',
                exercise: 'أنشئ تخطيطًا بثلاثة أعمدة.',
                challenge: 'قم بتصميم صفحة متجر بسيطة باستخدام Grid.',
                tips: ['Grid قوي للصفحات الكبيرة.', 'استعمل الفواصل لتقسيم الأعمدة.'],
                commonMistakes: ['نقص gap', 'استخدام Grid لـ عناصر بسيطة'],
                nextLesson: 'css-intermediate-3'
            },
            {
                id: 'css-intermediate-3',
                title: 'Responsive design',
                description: 'كيف تبدو الصفحة بشكل جيد على الهاتف والتابلت والسطح المكتب؟',
                explanation: 'Responsive Design يعتمد على media queries وغيرها لتعديل الواجهة حسب حجم الشاشة.',
                code: '@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}',
                exercise: 'اجعل التخطيط يتبدل إلى عمود واحد على الهاتف.',
                challenge: 'مقارنة بين تطبيقات desktop و mobile.',
                tips: ['ابدأ بتصميم الهاتف ثم التوسع.', 'استخدمViewport.'],
                commonMistakes: ['عدم اختبار الهاتف', 'أبعاد ثابتة كثيرة'],
                nextLesson: 'css-intermediate-4'
            },
            {
                id: 'css-intermediate-4',
                title: 'Variables, transitions and shadows',
                description: 'إضفاء طابع احترافي على تصميم الواجهة.',
                explanation: 'Variables تُستخدم لتخزين الألوان والحجم، والـ transitions تعطي انتقالات مناسبة، والشadows تضيف عمقًا.',
                code: ':root { --primary: #4f46e5; }\n.card {\n  box-shadow: 0 12px 30px rgba(0,0,0,.12);\n  transition: transform .2s ease;\n}',
                exercise: 'أضف متغيرًا للألوان وshadow إلى بطاقة.',
                challenge: 'صمم زر hover احترافي.',
                tips: ['المتغيرات تجعل المشروع أسهل في الصيانة.', 'الانتقال خفيف لا يزعج المستخدم.'],
                commonMistakes: ['انتقالات طويلة جدًا', 'تكرار القيم'],
                nextLesson: 'css-advanced-1'
            }
        ]
    },
    {
        id: 'css-advanced',
        title: 'CSS Advanced',
        language: 'CSS',
        level: 'Advanced',
        description: 'تصميم أنظمة واجهات احترافية، Grid متقدم، وتصميم أنماط قابلة للتطوير.',
        lessons: [
            {
                id: 'css-advanced-1',
                title: 'Advanced grid and layout systems',
                description: 'تعلّم إنشاء layouts معقدة وقابلة للتوسعة.',
                explanation: 'حاويات متعددة، أعمدة متغيرة، تصميمات بأساليب احترافية يحتاج خبرة في Grid و minmax و repeat.',
                code: '.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}',
                exercise: 'صمم لوحة تحكم بسيطة باستخدام Grid.',
                challenge: 'قم بإنشاء صفحة إحصائيات احترافية.',
                tips: ['auto-fit مفيد جدًا للقوالب.', 'لا تضغط كل شيء في عمود واحد.'],
                commonMistakes: ['الحجم الثابت', 'ترك المساحات غير متوازنة'],
                nextLesson: 'css-advanced-2'
            },
            {
                id: 'css-advanced-2',
                title: 'Design systems',
                description: 'بناء نظام تصميم متسق عبر المشروع.',
                explanation: 'نظام التصميم يضم الألوان، الخطوط، الحواف، المسافات، والأنماط المتكررة.',
                code: ':root {\n  --color-primary: #4f46e5;\n  --radius-md: 16px;\n  --space-md: 16px;\n}',
                exercise: 'حدد عناصر التصميم الأساسية لمشروعك.',
                challenge: 'ضع توضيحًا لنظام ألوان وابعاد المتكررة.',
                tips: ['المتغيرات هي أساس نظام الـ design.'],
                commonMistakes: ['تجاهل القيم المتكررة'],
                nextLesson: 'css-advanced-3'
            },
            {
                id: 'css-advanced-3',
                title: 'Advanced animations',
                description: 'إضافة حركة احترافية للاستخدام دون الإزعاج.',
                explanation: 'الحركة مناسبة عندما يكون لها هدف: التوجيه، التفاعل، أو إظهار التغيير دون إرباك المستخدم.',
                code: '.card:hover {\n  transform: translateY(-6px);\n  transition: 250ms ease;\n}',
                exercise: 'أضف hover animation إلى بطاقات.',
                challenge: 'أنشئ لوحة بطاقات ذات تفاعل احترافي.',
                tips: ['حافظ على الحركة قصيرة وخفيفة.', 'لا تفرط في الـ animation.'],
                commonMistakes: ['تأثيرات بطيئة جدًا', 'حركة مزعجة'],
                nextLesson: 'css-advanced-4'
            },
            {
                id: 'css-advanced-4',
                title: 'Maintainable CSS',
                description: 'كتابة CSS قابلة للصيانة والتمديد.',
                explanation: 'كلما زادت الواجهة، زادت أهمية الترتيب، التنظيم، والتكرار المنخفض. من الأفضل استخدام وحدات منطقية.',
                code: '.btn-primary { background: var(--primary); }\n.btn-secondary { background: transparent; }',
                exercise: 'اعمل على إعادة استخدام الأنماط في مشروعك.',
                challenge: 'تحويل صفحة مكونة من CSS مبعثر إلى CSS نظيف.',
                tips: ['التكرار شيء سيئ في التصميم.', 'اسم المكونات بشكل واضح.'],
                commonMistakes: ['أنماط متكررة', 'أسماء غير واضحة'],
                nextLesson: 'css-expert-1'
            }
        ]
    },
    {
        id: 'css-expert',
        title: 'CSS Expert',
        language: 'CSS',
        level: 'Expert',
        description: 'هندسة تصميم واسعة النطاق، أنظمة مكونات، وتحسين الأداء.',
        lessons: [
            {
                id: 'css-expert-1',
                title: 'Large design systems',
                description: 'إنتاج أنظمة تصميم للمشاريع الكبيرة.',
                explanation: 'الإطار المنظم للألوان، الأنماط، الأبعاد، والزوايا أساسي في بناء تطبيقات كبيرة.',
                code: ':root {\n  --space-1: 4px; --space-2: 8px; --space-4:16px;\n  --radius-sm: 8px; --radius-xl: 24px;\n}',
                exercise: 'أنشئ مجموعة من المتغيرات الأساسية.',
                challenge: 'حدد نظامك الخاص للألوان والمسافات.',
                tips: ['الاستمرارية تجعل التصميم موحدًا.'],
                commonMistakes: ['قيم متكررة غير موحدة'],
                nextLesson: 'css-expert-2'
            },
            {
                id: 'css-expert-2',
                title: 'Scalable component systems',
                description: 'إنشاء مكونات قابلة لإعادة الاستخدام.',
                explanation: 'بناء مكونات مثل button، card، navbar، alert وتخصيصها عبر المتغيرات يجعل المشروع قابلًا للتوسع.',
                code: '.btn {\n  padding: 12px 18px;\n  border-radius: 12px;\n}',
                exercise: 'أنشئ مكونات أساسية يمكن تكرارها في المشروع.',
                challenge: 'بناء لوحة واجهات تستعمل نفس الأنماط.',
                tips: ['المكونات تعزز السرعة والتناسق.'],
                commonMistakes: ['أنماط مخصصة لكل عنصر']
            }
        ]
    }
];

window.ALL_CSS_COURSES = window.CSS_COURSES;
