window.HTML_COURSES = [
    {
        id: 'html-beginner',
        title: 'HTML Beginner',
        language: 'HTML',
        level: 'Beginner',
        description: 'أساسيات بناء الصفحات الإلكترونية ومفاهيم HTML الأساسية.',
        lessons: [
            {
                id: 'html-beginner-1',
                title: 'What is HTML?',
                description: 'تعرف على ماهية HTML وكيفية بناء أول صفحة ويب.',
                explanation: 'HTML هو اختصار HyperText Markup Language ويستخدم لوصف هيكل الصفحة. لا يُستخدم لتزيين الصفحة فقط، بل لبناء محتواها باستخدام عناصر مثل headings، paragraphs، buttons، and links.',
                examples: ['نصوص', 'روابط', 'صور', 'جدول', 'نموذج'],
                code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>صفحة بسيطة</title>\n  </head>\n  <body>\n    <h1>مرحبا بالعالم</h1>\n    <p>هذا أول درس في HTML.</p>\n  </body>\n</html>',
                exercise: 'أنشئ صفحة HTML بها عنوان رئيسي، فقرة، وصورة.',
                challenge: 'أنشئ صفحة Profile تحتوي على صورة واسم ووصف وزرين باستخدام HTML.',
                tips: ['استخدم العناصر المناسبة حسب المعنى.', 'لا تكرر نفس العلامات دون داعي.', 'التنسيق مهم، لكن البنية أولًا.'],
                commonMistakes: ['نسيان إغلاق الوسوم', 'استخدام h1 أكثر من مرة في الصفحة', 'عدم إضافة DOCTYPE'],
                nextLesson: 'html-beginner-2'
            },
            {
                id: 'html-beginner-2',
                title: 'HTML document structure',
                description: 'تعلّم هيكل المستند HTML وكيفية تنظيم الصفحة.',
                explanation: 'كل صفحة HTML تبدأ بDOCTYPE ثم html ثم head ثم body. في head نضع معلومات الصفحة مثل العنوان والسمات الوصفية، أما body فيحتوي المحتوى المرئي.',
                code: '<!DOCTYPE html>\n<html lang="ar">\n  <head>\n    <meta charset="UTF-8" />\n    <title>هيكل الصفحة</title>\n  </head>\n  <body>\n    <h2>محتوى الصفحة</h2>\n  </body>\n</html>',
                exercise: 'أضف meta charset و title داخل head.',
                challenge: 'أنشئ صفحة تحتوي على head و body وعنونها بشكل صحيح.',
                tips: ['يجب أن تكون العناصر متداخلة بشكل صحيح.', 'استخدم lang لسهولة الوصول.'],
                commonMistakes: ['وضع المحتوى داخل head بدل body', 'استخدام لغة غير صحيحة في lang'],
                nextLesson: 'html-beginner-3'
            },
            {
                id: 'html-beginner-3',
                title: 'Headings, paragraphs and text formatting',
                description: 'تعرف على العناوين والفقرات والتنسيق النصي.',
                explanation: 'العناوين تساعد في هيكلة الصفحة، والفقرات توضح المحتوى، بينما تنسيق النص يساعد في إبراز الكلمات أو التمييز بين أجزاء المقال.',
                code: '<h1>عنوان رئيسي</h1>\n<h2>عنوان ثانوي</h2>\n<p>هذا نص <strong>مهم</strong> مع <em>تأكيد</em>.</p>',
                exercise: 'استخدم h1 إلى h3 مع فقرة ودعم bold و italic.',
                challenge: 'أنشئ صفحة خبر مختصرة مع عنوان ونصوص مختلفة.',
                tips: ['استخدم h1 فقط مرة واحدة في الصفحة.', 'لا تستخدم text formatting فقط للزينة.'],
                commonMistakes: ['استعمال strong بدل b أو العكس', 'تكرار العناوين بشكل غير منظم'],
                nextLesson: 'html-beginner-4'
            },
            {
                id: 'html-beginner-4',
                title: 'Links, images and lists',
                description: 'أضف الروابط والصور والقوائم لتكوين المحتوى.',
                explanation: 'الرابط يسمح بالتنقل بين الصفحات أو العناصر، الصورة تضيف محتوى بصريًا، والقوائم تنظم العناصر في مجموعات.',
                code: '<a href="https://example.com">زيارة الموقع</a>\n<img src="photo.jpg" alt="صورة توضيحية" />\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>',
                exercise: 'أنشئ قائمة من 3 عناصر ثم أضف رابط وصورة.',
                challenge: 'أنشئ صفحة مخصصة تحتوي على قائمة خدمات وقائمة اجتماعية.',
                tips: ['أضف alt دائمًا للصورة.', 'استخدم ul و ol حسب السياق.'],
                commonMistakes: ['إهمال alt', 'استعمال رابط بدون href'],
                nextLesson: 'html-beginner-5'
            }
        ]
    },
    {
        id: 'html-intermediate',
        title: 'HTML Intermediate',
        language: 'HTML',
        level: 'Intermediate',
        description: 'بناء صفحات أكثر احترافية مع النماذج، Accessibility، وSEO.',
        lessons: [
            {
                id: 'html-intermediate-1',
                title: 'Semantic structure',
                description: 'تعلم استخدام العناصر الدلالية لهيكلة الصفحة بشكل صحيح.',
                explanation: 'العناصر الدلالية مثل header، nav، main، section، article، aside، footer تحسن الوصولية وفهم الصفحة للمتصفحات والبرامج.',
                code: '<header>\n  <nav><a href="#">الرئيسية</a></nav>\n</header>\n<main>\n  <section>\n    <article>محتوى رئيسي</article>\n  </section>\n</main>\n<footer>معلومات السفلية</footer>',
                exercise: 'قسّم صفحة كاملة إلى header، main، section، footer.',
                challenge: 'قم بإنشاء هيكل HTML لصفحة منتج كامل.',
                tips: ['استخدم العناصر المناسبة بدل divs المتكررة.', 'الهيكل الدلالي يعزز SEO.'],
                commonMistakes: ['استخدام div لكل شيء', 'نقص main أو header فيها'],
                nextLesson: 'html-intermediate-2'
            },
            {
                id: 'html-intermediate-2',
                title: 'Forms and validation',
                description: 'أساسيات النماذج والتحقق من البيانات.',
                explanation: 'النموذج Form هو عنصر يستخدم لجمع إدخال المستخدم، أما validation فتعني التحقق من البيانات قبل الإرسال.',
                code: '<form>\n  <label for="name">الاسم</label>\n  <input id="name" type="text" required />\n  <button type="submit">إرسال</button>\n</form>',
                exercise: 'أنشئ نموذج تسجيل دخول بسيط.',
                challenge: 'أنشئ نموذج تواصل يحتوي على اسم، بريد، رسالة، وزر إرسال.',
                tips: ['استخدم required و type المناسب.', 'أضف labels لكل input.'],
                commonMistakes: ['عدم ربط label و input', 'استخدام input بدون type'],
                nextLesson: 'html-intermediate-3'
            },
            {
                id: 'html-intermediate-3',
                title: 'Accessibility basics',
                description: 'كيف تجعل موقعك أسهل في الاستخدام؟',
                explanation: 'Accessibility يعني جعل المشروع usable للأشخاص ذوي الاحتياجات المختلفة. من المهم استخدام labels، alt، contrast، headings، وأزرار واضحة.',
                code: '<img src="profile.jpg" alt="صورة شخصية للمستخدم" />\n<label for="email">البريد</label>\n<input id="email" type="email" />',
                exercise: 'التحقق من أن كل صورة لها alt وكل input له label.',
                challenge: 'قم بإنشاء صفحة تسجيل بسهولة وصول عالية.',
                tips: ['اختر ألوان متوازنة.', 'تأكد من أن التركيز visible.'],
                commonMistakes: ['نقص alt', 'أزرار غير واضحة'],
                nextLesson: 'html-intermediate-4'
            },
            {
                id: 'html-intermediate-4',
                title: 'SEO basics and metadata',
                description: 'تحسين ظهور الموقع في محركات البحث.',
                explanation: 'SEO يعتمد على بنية الصفحة، الكلمات، والعناصر الوصفية. العنوان، الوصف، والهيكل الدلالي من أهم العوامل.',
                code: '<meta name="description" content="تعلم HTML من الصفر" />\n<title>دروس HTML للمبتدئين</title>\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
                exercise: 'أضف title و meta description لصفحتك.',
                challenge: 'كتابة metadata لصفحة تعليمية كاملة.',
                tips: ['استخدم عنوان دقيق.', 'أضف viewport للتوافق مع الهاتف.'],
                commonMistakes: ['عنوان غامض', 'عدم وجود viewport'],
                nextLesson: 'html-advanced-1'
            }
        ]
    },
    {
        id: 'html-advanced',
        title: 'HTML Advanced',
        language: 'HTML',
        level: 'Advanced',
        description: 'بنية كبيرة، معايير ويب، وتطوير HTML للمشاريع الاحترافية.',
        lessons: [
            {
                id: 'html-advanced-1',
                title: 'Advanced accessibility',
                description: 'أداء أفضل في الوصولية وتعزيز تجربة الاستخدام.',
                explanation: 'Accessibility في المشاريع الكبيرة يتطلب أكثر من label و alt؛ يشمل aria-label و landmarks و focus management و contrast.',
                code: '<button aria-label="إغلاق النافذة">✖</button>\n<nav aria-label="التنقل الرئيسي"></nav>\n<main id="content"></main>',
                exercise: 'أضف aria-label إلى عناصر إن وجدت.',
                challenge: 'قم بتحسين صفحة تسجيل الدخول لتكون متوافقة مع accessibility.',
                tips: ['تأكد من أن العناصر التفاعلية يمكن الوصول إليها.', 'ابحث عن contrast ratios.'],
                commonMistakes: ['استخدام div كأزرار', 'تفويت الأوضاع التفاعلية'],
                nextLesson: 'html-advanced-2'
            },
            {
                id: 'html-advanced-2',
                title: 'Complex forms and UX',
                description: 'نماذج معقدة وواجهات احترافية.',
                explanation: 'في المشاريع الكبيرة، تكون النماذج كثيفة وتتطلب تنسيق جيد، حقول متقدمة، خطأ واضح، وأسلوب تفاعل مريح.',
                code: '<fieldset>\n  <legend>معلومات شخصية</legend>\n  <input type="email" placeholder="البريد" />\n</fieldset>',
                exercise: 'أنشئ نموذج يتضمن اسم، بريد، دولة، وسهولة الاتصال.',
                challenge: 'صمم صفحة تسجيل احترافية مع حقول متقدمة.',
                tips: ['استخدم fieldset و legend.', 'الحقول يجب أن تكون واضحة ومجمعة.'],
                commonMistakes: ['إضافة أكثر من label في نفس الحقل', 'حقول غير مهيأة'],
                nextLesson: 'html-advanced-3'
            },
            {
                id: 'html-advanced-3',
                title: 'Maintainable markup',
                description: 'إبقاء الكود HTML منظمًا وقابل للصيانة.',
                explanation: 'العلامات الجيدة تساهم في سهولة الصيانة. استخدم بنية منطقية، تجنب التداخل العشوائي، واسمًا واضحًا لملفات ومكونات الصفحة.',
                code: '<section class="pricing">\n  <article class="plan">...</article>\n</section>',
                exercise: 'قسم صفحة كاملة إلى أقسام منطقية.',
                challenge: 'قم بتصميم هيكل HTML لصفحة متجر إلكتروني.',
                tips: ['احتفظ بالهيكل منظمًا.', 'تقسيم الصفحات لكتل منطقية مهم.'],
                commonMistakes: ['تداخل كبير', 'نقص الترتيب الهرمي'],
                nextLesson: 'html-advanced-4'
            },
            {
                id: 'html-advanced-4',
                title: 'Production-style HTML',
                description: 'تحويل HTML إلى بنية إنتاجية.',
                explanation: 'في المشاريع الحقيقية، نستخدم قوالب، وحدات، Semantic HTML، تحسين الأداء، والتفكير في التوسع.',
                code: '<main class="container">\n  <section class="hero">\n    <article class="card">...</article>\n  </section>\n</main>',
                exercise: 'حاول بناء قالب منتج صفحة كاملة منظم.',
                challenge: 'أنشئ صفحة Landing Page احترافية من النموذج.',
                tips: ['استخدم العناصر المعنوية.', 'التكرار يقلل الجودة.'],
                commonMistakes: ['هيكل متداخل بدون غرض', 'تخطيط غير منظم'],
                nextLesson: 'html-expert-1'
            }
        ]
    },
    {
        id: 'html-expert',
        title: 'HTML Expert',
        language: 'HTML',
        level: 'Expert',
        description: 'بناء معماريات احترافية لمشاريع ضخمة مع جودة عالية وقابلية صيانة.',
        lessons: [
            {
                id: 'html-expert-1',
                title: 'Large-scale HTML architecture',
                description: 'تصميم البنية المعمارية لصفحات وقوالب كبيرة.',
                explanation: 'المشاريع الكبيرة تحتاج إلى تنظيم واضح بين الأقسام، المكونات، والعناصر المكررة، مع الاستفادة من التجريد البنيوي.',
                code: '<header class="site-header"></header>\n<main class="page-shell">\n  <section class="hero"></section>\n</main>',
                exercise: 'صمم هيكل صفحة مع header، main، section، footer.',
                challenge: 'قم بتصميم بنية مقترحة لموقع تعليم كامل.',
                tips: ['التقسيم المنطقي يقلل التكرار.', 'التوثيق يساعد على الصيانة.'],
                commonMistakes: ['تداخل غير ضروري', 'نقص التمييز بين sections'],
                nextLesson: 'html-expert-2'
            },
            {
                id: 'html-expert-2',
                title: 'Accessibility strategy',
                description: 'إطار استراتيجي للوصولية على مستوى المشروع.',
                explanation: 'Accessibility لا يقتصر على العنصر الفردي، بل هو استدامة في هيكل المشروع، التفاعل، والوضوح العام.',
                code: '<button type="button" aria-label="فتح القائمة">☰</button>\n<a href="#" aria-describedby="help">المساعدة</a>',
                exercise: 'حدد العناصر غير الواضحة في صفحة ما وأصلحها.',
                challenge: 'اعمل على مشروع بتوافق عالٍ مع accessibility.',
                tips: ['اختبار المشروع باستخدام keyboard مهم.', 'النسق المرتفع يؤثر على الوصول.'],
                commonMistakes: ['عدم اختبار التفاعل عبر keyboard', 'عنصر غير صحيح arialabel'],
                nextLesson: 'html-expert-3'
            },
            {
                id: 'html-expert-3',
                title: 'SEO architecture',
                description: 'كيف تصمم HTML ليحسن الظهور في محركات البحث؟',
                explanation: 'من خلال استخدام هياكل واضحة، عناوين منطقية، ومحتوى ذي معنى، مع metadata مناسبة ومحتوى رقمي موحد.',
                code: '<article>\n  <h1>دروس HTML للمبتدئين</h1>\n  <p>محتوى مفصل عن هيكل HTML.</p>\n</article>',
                exercise: 'استعرض صفحة وقيّم جودة الهياكل SEO فيها.',
                challenge: 'اكتب صفحة واعدة SEO مع عناوين واضحة.',
                tips: ['المحتوى الواضح أفضل للاستهداف.', 'معايير HTML مهمة للـ crawl.'],
                commonMistakes: ['عنواين مبهمة', 'روابط بلا هدف'],
                nextLesson: 'html-expert-4'
            },
            {
                id: 'html-expert-4',
                title: 'Performance and maintenance',
                description: 'ابنِ صفحات قوية، صغيرة، وسهلة الصيانة.',
                explanation: 'فكر في HTML كهيكل يحافظ على الأداء، تقليل التكرار، وتحديد العناصر الأساسية بعيدًا عن الطبقات العشوائية.',
                code: '<main>\n  <section class="hero">\n    <article class="card">...</article>\n  </section>\n</main>',
                exercise: 'اقترح تحسينات على صفحة كبيرة باستخدام بنية أوضح.',
                challenge: 'تجميع أجزاء الصفحة في مكونات منطقية ومقاومة للتغيير.',
                tips: ['التنسيق يهون التنفيذ لكن البنية تعظم الجودة.', 'سهل القراءة = سهل الصيانة.'],
                commonMistakes: ['التكرار المفرط', 'هيكل غير منظم'],
                nextLesson: 'html-beginner-1'
            }
        ]
    }
];

window.ALL_HTML_COURSES = window.HTML_COURSES;
