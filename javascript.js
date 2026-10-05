window.JAVASCRIPT_COURSES = [
    {
        id: 'javascript-beginner',
        title: 'JavaScript Beginner',
        language: 'JavaScript',
        level: 'Beginner',
        description: 'أساسيات البرمجة من المتغيرات إلى DOM Basics.',
        lessons: [
            {
                id: 'javascript-beginner-1',
                title: 'What is JavaScript?',
                description: 'تعرف على دور JavaScript في بناء صفحات تفاعلية.',
                explanation: 'JavaScript هي لغة برمجة تفاعلية تجعل الصفحة تستجيب للأحداث مثل النقر، الإدخال، والتحكم في المحتوى.',
                code: 'const greeting = "مرحبا";\nconsole.log(greeting);',
                exercise: 'اطبع رسالة ترحيب في الـ Console.',
                challenge: 'أنشئ ملفًا بسيطًا يكتب رسالة عند تحميل الصفحة.',
                tips: ['console.log مهم جدًا في التعلم.', 'JavaScript يعمل في المتصفح.'],
                commonMistakes: ['نسيان الفاصلة المنقوطة', 'عدم استخدام const أو let'],
                nextLesson: 'javascript-beginner-2'
            },
            {
                id: 'javascript-beginner-2',
                title: 'Variables and data types',
                description: 'تعلم التخزين والبيانات الأساسية.',
                explanation: 'المتغير Variable هو مكان نستخدمه لتخزين قيمة يمكن استخدامها لاحقًا. JavaScript يدعم أنواع مثل string، number، boolean، object، array.',
                code: 'const name = "Beshoy";\nconst age = 25;\nconst active = true;',
                exercise: 'أنشئ 3 متغيرات مختلفة وقم بطباعة قيمها.',
                challenge: 'أنشئ كائنًا يحتوي على معلومات طالب.',
                tips: ['const لا يمكن تغيير قيمتها.', 'let مناسب عندما تريد إعادة التعيين.'],
                commonMistakes: ['إعادة تعيين const', 'استخدام أسماء غير واضحة'],
                nextLesson: 'javascript-beginner-3'
            },
            {
                id: 'javascript-beginner-3',
                title: 'Conditions and loops',
                description: 'استخدام if، else، switch، و for.',
                explanation: 'الشروط تسمح للبرنامج باتخاذ قرار بناءً على قيمة معينة، أما الحلقات فتكرر نفس الكود عدة مرات.',
                code: 'if (score >= 50) {\n  console.log("نجحت");\n} else {\n  console.log("أعد المحاولة");\n}',
                exercise: 'أنشئ شرطًا يحدد إذا كان الطالب ناجحًا أم لا.',
                challenge: 'استخدم حلقة for لطباعة الأرقام من 1 إلى 10.',
                tips: ['استخدم switch عندما يكون هناك خيارات كثيرة.', 'for مفيد عندما تعرف عدد التكرارات.'],
                commonMistakes: ['نقص الأقواس', 'الشرط غير دقيق'],
                nextLesson: 'javascript-beginner-4'
            },
            {
                id: 'javascript-beginner-4',
                title: 'Functions and arrays',
                description: 'استعمال الدوال والمصفوفات في البرمجة.',
                explanation: 'الدالة Function هي قطعة من الكود يمكن تكرار استخدامها، والمصفوفة Array هي قائمة من القيم.',
                code: 'const fruits = ["تفاحة", "موز", "برتقال"];\nfunction printItems(items) {\n  items.forEach(item => console.log(item));\n}',
                exercise: 'أنشئ دالة تقوم بطباعة أسماء الطلاب.',
                challenge: 'استخدم Array methods مثل .length و .push.',
                tips: ['الدوال تعزل المنطق.', 'Arrays قابلة للتكرار.'],
                commonMistakes: ['عدم إرجاع قيمة من الدالة', 'نسخ المصفوفة دون فهمها'],
                nextLesson: 'javascript-intermediate-1'
            }
        ]
    },
    {
        id: 'javascript-intermediate',
        title: 'JavaScript Intermediate',
        language: 'JavaScript',
        level: 'Intermediate',
        description: 'DOM، الأحداث، Array Methods، LocalStorage، والبرمجة التفاعلية.',
        lessons: [
            {
                id: 'javascript-intermediate-1',
                title: 'DOM manipulation',
                description: 'التعامل مع عناصر الصفحة مباشرة من JavaScript.',
                explanation: 'DOM (Document Object Model) يمثل الصفحة كهيكل كامل، ويمكن الوصول إلى العناصر وتغيير النص أو النوع أو الخصائص.',
                code: 'const title = document.querySelector("h1");\n title.textContent = "عنوان جديد";',
                exercise: 'غيّر نص عنوان في الصفحة.',
                challenge: 'أنشئ زرًا يغيّر لون الخلفية عند النقر.',
                tips: ['querySelector أهم من getElementById في التطبيقات الحديثة.'],
                commonMistakes: ['قراءة العنصر قبل تحميل الصفحة'],
                nextLesson: 'javascript-intermediate-2'
            },
            {
                id: 'javascript-intermediate-2',
                title: 'Events and forms',
                description: 'التفاعل مع النقرات وإدخالات المستخدم.',
                explanation: 'الأحداث Events هي استجابة للخطوات مثل click، input، submit. وهي تُستخدم في التفاعل مع النماذج.',
                code: 'document.querySelector("button").addEventListener("click", () => {\n  console.log("تم النقر");\n});',
                exercise: 'اربط حدثًا بنقرة زر.',
                challenge: 'أنشئ نموذج تسجيل بسيط مع validation.',
                tips: ['استخدم addEventListener بدل inline events.'],
                commonMistakes: ['عدم تعطيل submit default'],
                nextLesson: 'javascript-intermediate-3'
            },
            {
                id: 'javascript-intermediate-3',
                title: 'Array and object methods',
                description: 'استخدام أدوات قوية في التعامل مع البيانات.',
                explanation: 'map، filter، reduce، forEach هي أساليب شائعة للعمل على المصفوفات، بينما objects تخزن بيانات في أزواج key/value.',
                code: 'const users = [{name: "A"}, {name: "B"}];\nconsole.log(users.map(user => user.name));',
                exercise: 'قم بتصفية قائمة أرقام.',
                challenge: 'أنشئ قائمة مهام تجميعية.',
                tips: ['map يُعيد مصفوفة جديدة.', 'filter يُعطي العناصر المقابلة للشروط.'],
                commonMistakes: ['تعديل المصفوفة الأصلية بدون قصد'],
                nextLesson: 'javascript-intermediate-4'
            },
            {
                id: 'javascript-intermediate-4',
                title: 'LocalStorage and JSON',
                description: 'حفظ البيانات محليًا داخل المتصفح.',
                explanation: 'LocalStorage يحفظ بيانات المستخدم داخل المتصفح، بينما JSON يهيئ البيانات ليتم تحويلها إلى نص.',
                code: 'localStorage.setItem("theme", "dark");\nconst theme = JSON.parse(localStorage.getItem("theme"));',
                exercise: 'احفظ اسم المستخدم في localStorage.',
                challenge: 'أنشئ تطبيق notes صغير يحفظ بياناته محليًا.',
                tips: ['JSON.stringify يحول الكائن إلى نص.', 'localStorage يعمل فقط في المتصفح.'],
                commonMistakes: ['تخزين كائن دون stringify'],
                nextLesson: 'javascript-advanced-1'
            }
        ]
    },
    {
        id: 'javascript-advanced',
        title: 'JavaScript Advanced',
        language: 'JavaScript',
        level: 'Advanced',
        description: 'Async، Fetch API، Classes، OOP، والقيم التفاعلية.',
        lessons: [
            {
                id: 'javascript-advanced-1',
                title: 'Promises and async/await',
                description: 'التعامل مع العمليات غير المتزامنة.',
                explanation: 'أحيانًا تحتاج تنفيذ التعليمات بعد فترة أو بعد طلب شبكة، وهذا ما يسمى async operations. promise و async/await من أهم الأدوات هنا.',
                code: 'async function loadData() {\n  const response = await fetch("./sample.json");\n  if (!response.ok) throw new Error("Could not load data");\n  return response.json();\n}',
                exercise: 'اكتب وظيفة async لتقرأ بيانات من API.',
                challenge: 'اعرض بيانات JSON في صفحة HTML.',
                tips: ['await يوقف التنفيذ داخل الدالة async فقط.'],
                commonMistakes: ['عدم التعامل مع الأخطاء'],
                nextLesson: 'javascript-advanced-2'
            },
            {
                id: 'javascript-advanced-2',
                title: 'Fetch API and REST concepts',
                description: 'الطلب إلى APIs وقراءة البيانات.',
                explanation: 'Fetch API يوفر طريقة لطلب البيانات من الخادم أو الخدمات الخارجية، ثم استخدام response.json أو text.',
                code: 'fetch("./sample.json")\n  .then(res => res.json())\n  .then(data => console.log(data));',
                exercise: 'احصل على بيانات من API مبسط.',
                challenge: 'أنشئ واجهة Weather UI.'
            },
            {
                id: 'javascript-advanced-3',
                title: 'Classes and OOP',
                description: 'البرمجة الكائنية في JavaScript.',
                explanation: 'الكلاس Class يساعد على моделـة الكيانات في التطبيق مثل User أو Product.',
                code: 'class Product {\n  constructor(name, price) { this.name = name; this.price = price; }\n}',
                exercise: 'أنشئ class للمنتجات.',
                challenge: 'أنشئ تطبيق بسيط للـ cart.',
                tips: ['OOP يقلل التكرار.'],
                commonMistakes: ['عدم فهم constructor'],
                nextLesson: 'javascript-advanced-4'
            },
            {
                id: 'javascript-advanced-4',
                title: 'Closures and higher-order functions',
                description: 'مفاهيم متقدمة في JavaScript.',
                explanation: 'Closures تسمح للدوال بالوصول إلى متغيرات خارج نطاقها، بينما Higher-order functions تستخدم دوال كمدخلات أو مخرجات.',
                code: 'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}',
                exercise: 'أنشئ عدادًا بسيطًا.',
                challenge: 'استخدم map و filter و reduce مع مجموعة بيانات.',
                tips: ['هذه المفاهيم أساسية في المشاريع الكبيرة.'],
                commonMistakes: ['سياق this غير واضح'],
                nextLesson: 'javascript-expert-1'
            }
        ]
    },
    {
        id: 'javascript-expert',
        title: 'JavaScript Expert',
        language: 'JavaScript',
        level: 'Expert',
        description: 'هندسة التطبيقات، الأداء، الأنماط المعمارية، والتطوير الاحترافي.',
        lessons: [
            {
                id: 'javascript-expert-1',
                title: 'Advanced architecture',
                description: 'بناء تطبيقات قابلة للتطوير والصيانة.',
                explanation: 'التطبيقات الكبيرة تحتاج إلى تنظيم الملفات، تقسيم المنطق، والحد من التبعيات غير الضرورية.',
                code: 'const app = {\n  state: {},\n  actions: {},\n  render() {}\n};',
                exercise: 'صمم هيكلًا بسيطًا لتطبيقك.',
                challenge: 'قارن بين بنية متغيرة وواجهة كاملة.',
                tips: ['التجزئة تقلل التعقيد.'],
                commonMistakes: ['كتابة منطق ضخم في صفحة واحدة'],
                nextLesson: 'javascript-expert-2'
            },
            {
                id: 'javascript-expert-2',
                title: 'State management concepts',
                description: 'فهم 상태 التطبيق وكيفية تحديثه بشكل منظم.',
                explanation: 'في التطبيقات المعقدة، يحتاج التطبيق إلى حالة مركزية واضحة لتحديث عناصر الواجهة.',
                code: 'const state = { count: 0 };\nfunction updateCounter() { state.count += 1; render(); }',
                exercise: 'أنشئ state لعداد.',
                challenge: 'قم بإنشاء dashboard صغير.',
                tips: ['التحديث المنظم يمنع الأخطاء.'],
                commonMistakes: ['تحديث الواجهة بشكل غير متوقع'],
                nextLesson: 'javascript-expert-3'
            },
            {
                id: 'javascript-expert-3',
                title: 'Performance and optimization',
                description: 'تحسين سرعة التطبيق وفعاليته.',
                explanation: 'تظهر مشكلات الأداء عندما يكون المشروع كبيرًا أو يحتوي على حلقات متكررة أو عمليات ثقيلة.',
                code: 'const filtered = data.filter(item => item.active);',
                exercise: 'إعادة كتابة منطق لتحسين التكرار.',
                challenge: 'حلل كودًا كبيرًا وعرض فرص التحسين.',
                tips: ['حجم الكود لا يعني جودة الكود.'],
                commonMistakes: ['حلقة داخل حلقة'],
                nextLesson: 'javascript-expert-4'
            },
            {
                id: 'javascript-expert-4',
                title: 'Testing concepts and security',
                description: 'فهم كيفية اختبار الكود والحماية منه.',
                explanation: 'التواصل مع الشبكات والبيانات يحتاج إلى تجنب الأخطاء وتحليل السلوك. الاختبار يضمن استقرار التطبيق.',
                code: 'if (userInput) {\n  console.log("مقبول")\n}',
                exercise: 'حدد حالات النجاح والفشل.',
                challenge: 'ضع قائمة من نقاط الأمان الأساسية في تطبيق ويب.',
                tips: ['لا تثق بجميع إدخالات المستخدم.'],
                commonMistakes: ['عدم التحقق من المدخلات'],
                nextLesson: 'javascript-beginner-1'
            }
        ]
    }
];

window.ALL_JAVASCRIPT_COURSES = window.JAVASCRIPT_COURSES;
