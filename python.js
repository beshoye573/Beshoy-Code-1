window.PYTHON_COURSES = [
    {
        id: 'python-beginner',
        title: 'Python Beginner',
        language: 'Python',
        level: 'Beginner',
        description: 'أساسيات Python، المتغيرات، البيانات، الشروط، والحلقات.',
        lessons: [
            {
                id: 'python-beginner-1',
                title: 'Python introduction',
                description: 'تعرف على Python وقيمتها في البرمجة الحديثة.',
                explanation: 'Python لغة سهلة القراءة ومناسبة للمبتدئين، وتُستخدم في تطوير الويب، تحليل البيانات، الذكاء الاصطناعي، والأتمتة.',
                code: 'print("مرحبا بالعالم")',
                exercise: 'اطبع رسالة ترحيب.',
                challenge: 'قم بطباعة اسمك في الـ Console.',
                tips: ['Python بسيط وقوي.', 'استخدم print لاختبار النتائج.'],
                commonMistakes: ['تجاهل المسافات والتسطير'],
                nextLesson: 'python-beginner-2'
            },
            {
                id: 'python-beginner-2',
                title: 'Variables and data types',
                description: 'التعامل مع نصوص، أرقام، وقيم منطقية.',
                explanation: 'في Python يمكن تخزين قيم مختلفة في متغيرات بأسماء واضحة، مثل strings و integers و booleans.',
                code: 'name = "Beshoy"\nage = 25\nlogged_in = True',
                exercise: 'أنشئ ثلاثة متغيرات بالطبع.',
                challenge: 'أنشئ قاموسًا بسيطًا يحتوي على بيانات مستخدم.',
                tips: ['تأكد من نوع البيانات قبل الحسابات.'],
                commonMistakes: ['استخدام == بدل ='],
                nextLesson: 'python-beginner-3'
            },
            {
                id: 'python-beginner-3',
                title: 'Conditions and loops',
                description: 'اتخاذ القرار وتكرار العمليات.',
                explanation: 'if و else تتيح اتخاذ قرارات أساسية، في حين تساعد loops في التشغيل المتكرر.',
                code: 'for i in range(1, 6):\n    print(i)',
                exercise: 'اطبع الأرقام من 1 إلى 5.',
                challenge: 'استخدم شرطًا لمعرفة إذا كان الرقم زوجيًا.',
                tips: ['Python يستخدم المسافة للكتلة.', 'تجنب التكرار غير الضروري.'],
                commonMistakes: ['تجاهل المسافةIndentation'],
                nextLesson: 'python-beginner-4'
            },
            {
                id: 'python-beginner-4',
                title: 'Functions and collections',
                description: 'مقدمة إلى الدوال، القوائم، والمجموعات.',
                explanation: 'الدوال تُستخدم لتجزئة المهمة، والقوائم تُستخدم لتخزين عناصر متعددة.',
                code: 'numbers = [1, 2, 3]\nprint(numbers[0])\n\ndef greet(name):\n    print("مرحبا", name)',
                exercise: 'اكتب دالة تُعيد مجموع عددين.',
                challenge: 'أنشئ قائمة بأسماء وأضف عنصرًا جديدًا.',
                tips: ['القائمات مفيدة جدًا في التطبيقات.', 'الدوال تجعل التعليمات قابلة لإعادة الاستخدام.'],
                commonMistakes: ['IndexError عند الوصول لقيمة غير موجودة'],
                nextLesson: 'python-intermediate-1'
            }
        ]
    },
    {
        id: 'python-intermediate',
        title: 'Python Intermediate',
        language: 'Python',
        level: 'Intermediate',
        description: 'دوال متقدمة، files، exceptions، OOP Basics، والمكتبات.',
        lessons: [
            {
                id: 'python-intermediate-1',
                title: 'Functions and modules',
                description: 'تجهيز أكواد قابلة لإعادة الاستخدام.',
                explanation: 'الدوال في Python تعزل المنطق، والـ modules تسمح باستخراج أجزاء من التطبيق إلى ملفات منفصلة.',
                code: 'def multiply(a, b):\n    return a * b',
                exercise: 'اكتب دالة حسابية بسيطة.',
                challenge: 'قسم المشروع إلى ملفات وظيفية.',
                tips: ['استخدم أسماء دوال واضحة.', 'تقسيم التعليمات يحسن القراءة.'],
                commonMistakes: ['عدم إرجاع القيم'],
                nextLesson: 'python-intermediate-2'
            },
            {
                id: 'python-intermediate-2',
                title: 'Files and exceptions',
                description: 'قراءة وكتابة الملفات ومعالجة الأخطاء.',
                explanation: 'من المهم أن تكون قادرًا على حفظ البيانات وقراءة الملفات، وفي نفس الوقت التعامل مع الأخطاء والتقاط الاستثناءات.',
                code: 'try:\n    with open("data.txt", "r") as file:\n        print(file.read())\nexcept FileNotFoundError:\n    print("الملف غير موجود")',
                exercise: 'أنشئ ملف نصي واكتب فيه رسالة.',
                challenge: 'اقرأ ملفًا وستعرض محتواه.',
                tips: ['try/except يمنع انهيار البرنامج.'],
                commonMistakes: ['تجاهل أخطاء إدخال/إخراج'],
                nextLesson: 'python-intermediate-3'
            },
            {
                id: 'python-intermediate-3',
                title: 'Object Oriented Programming basics',
                description: 'تعلم Classes و Objects و Inheritance.',
                explanation: 'OOP يساعد في بناء كائنات لها خصائص وسلوكيات، مثل Student أو Product.',
                code: 'class Student:\n    def __init__(self, name):\n        self.name = name',
                exercise: 'أنشئ class للطالب.',
                challenge: 'أنشئ class وراثية للـ Teacher.',
                tips: ['الموضوعية تجعل التطبيق منظمًا.'],
                commonMistakes: ['عدم استخدام self'],
                nextLesson: 'python-intermediate-4'
            },
            {
                id: 'python-intermediate-4',
                title: 'Comprehensions and iterators',
                description: 'أساليب أكثر احترافية في التعامل مع البيانات.',
                explanation: 'List comprehensions و generators تجعل الشيفرة أقصر وأكثر قوة.',
                code: 'squares = [x * x for x in range(5)]\nprint(squares)',
                exercise: 'أنشئ قائمة مربعات الأرقام.',
                challenge: 'استخدم comprehensions لاستبعاد الأرقام الزوجية.',
                tips: ['المعرفة بهذه الأدوات تبسط الشيفرة.', 'لكن اكتب بوضوح.'],
                commonMistakes: ['تكرار غير ضروري'],
                nextLesson: 'python-advanced-1'
            }
        ]
    },
    {
        id: 'python-advanced',
        title: 'Python Advanced',
        language: 'Python',
        level: 'Advanced',
        description: 'OOP متقدم، decorators، context managers، APIs، ومشاريع أكبر.',
        lessons: [
            {
                id: 'python-advanced-1',
                title: 'Advanced OOP',
                description: 'استعمال الوراثة، تعدد الأشكال، والبرمجة الموجهة.',
                explanation: 'في المشاريع الأكبر، من المهم بناء كائنات تحاكي الأشياء الحقيقية بوضوح وبنية مرنة.',
                code: 'class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        print("Woof")',
                exercise: 'أنشئ فئتين مرتبطتين بتمثيل.',
                challenge: 'صمم نظام بسيط لمنتجات ومستخدمين.',
                tips: ['الوراثة تعود بالنفع عند تكرار البنية.'],
                commonMistakes: ['تجاوز كثير في الوراثة'],
                nextLesson: 'python-advanced-2'
            },
            {
                id: 'python-advanced-2',
                title: 'Decorators and context managers',
                description: 'إضافة ميزات في تطبيقك بطريقة احترافية.',
                explanation: 'Decorator يساعد في تعديل وظيفة أو إضافة سلوك مخصص، أما context manager فيتيح إدارة الموارد بشكل أنيق.',
                code: 'def logger(func):\n    def wrapper(*args, **kwargs):\n        print("بدء التنفيذ")\n        return func(*args, **kwargs)\n    return wrapper',
                exercise: 'اكتب decorator بسيط.',
                challenge: 'أنشئ logger يطبع توقيت التنفيذ.',
                tips: ['Decorator ليس سحريًا، لكنه قابل للتخصيص.'],
                commonMistakes: ['نقص الوعي بجلب args و kwargs'],
                nextLesson: 'python-advanced-3'
            },
            {
                id: 'python-advanced-3',
                title: 'APIs and JSON',
                description: 'العمل مع خدمات خارجية واستخدام JSON.',
                explanation: 'الـ APIs تسمح للتطبيقات بالتواصل مع خدمات أخرى، ويستخدم JSON للتبادل البسيط للبيانات.',
                code: 'import json\nuser = {"name": "Beshoy"}\nprint(json.dumps(user))',
                exercise: 'حول كائن Python إلى JSON.',
                challenge: 'اربط تطبيقًا بواجهة عامة APIs.',
                tips: ['JSON يسهل نمذجة البيانات.'],
                commonMistakes: ['عدم التعامل مع أخطاء الشبكة'],
                nextLesson: 'python-advanced-4'
            },
            {
                id: 'python-advanced-4',
                title: 'Project architecture',
                description: 'تنظيم المشاريع بشكل احترافي.',
                explanation: 'عندما يزداد المشروع، يصبح من الضروري تقسيم الملفات إلى modules، تنظيم الدوال، ووضع الـ config و utils',
                code: 'project/\n  app.py\n  utils.py\n  models.py\n  tests.py',
                exercise: 'صمم هيكل مشروع صغير.',
                challenge: 'قسّم مشروع ويب صغير إلى مكونات.',
                tips: ['استخدم أسماء واضحة ومجالات منطقية.'],
                commonMistakes: ['تجمع كل الكود في ملف واحد'],
                nextLesson: 'python-expert-1'
            }
        ]
    },
    {
        id: 'python-expert',
        title: 'Python Expert',
        language: 'Python',
        level: 'Expert',
        description: 'هندسة تطبيقات احترافية، جودة الكود، الأداء، والاعتماد على المشاريع الكبيرة.',
        lessons: [
            {
                id: 'python-expert-1',
                title: 'Advanced architecture',
                description: 'تصميم تطبيقات تجارية قوية.',
                explanation: 'التطبيقات الاحترافية تحتاج إلى تنظيم أفضل، وحدات مختلفة، إدارة بيانات، والتفكير طويل المدى.',
                code: 'from app.models import User\nfrom app.services import create_user',
                exercise: 'قم بتقسيم تطبيق صغير إلى طبقات.',
                challenge: 'صمم نظام إدارة مستخدمين بسيط.',
                tips: ['التقسيم يمنع الفوضى.'],
                commonMistakes: ['تداخل المنطق والخدمات'],
                nextLesson: 'python-expert-2'
            },
            {
                id: 'python-expert-2',
                title: 'Testing and clean code',
                description: 'كتابة أكواد قابلة للاختبار.',
                explanation: 'اختبارات البرامج تضمن عدم كسر المشروع عند تغييرات صغيرة وتساعد على اكتشاف الأخطاء مبكرًا.',
                code: 'def test_add():\n    assert add(2, 3) == 5',
                exercise: 'اكتب اختبارًا بسيطًا لوظيفة.',
                challenge: 'أنشئ suite tests لمشروع صغير.',
                tips: ['كتابة الأكواد القابلة للاختبار علامة احتراف.'],
                commonMistakes: ['تجاهل حالات الفشل'],
                nextLesson: 'python-expert-3'
            },
            {
                id: 'python-expert-3',
                title: 'Automation and tooling',
                description: 'أتمتة المهام المتكررة.',
                explanation: 'يمكنك أتمتة المهام مثل تحويل البيانات أو جمعها من مصادر خارجية أو تحليل ملفات كثيرة.',
                code: 'import os\nfor file in os.listdir("."):\n    print(file)',
                exercise: 'استخدم Python لعرض جميع الملفات في مجلد.',
                challenge: 'أنشئ أداة بسيطة لمجلدات الملفات.',
                tips: ['الأتمتة تزيد الإنتاجية.'],
                commonMistakes: ['تجاهل تنظيم المخرجات'],
                nextLesson: 'python-expert-4'
            },
            {
                id: 'python-expert-4',
                title: 'Performance and professional project organization',
                description: 'تحسين كود Python داخل المشاريع الكبيرة.',
                explanation: 'الأداء الدقيق يأتي من اختيار الخوارزميات الجيدة، أحيانًا تقليل التكرار، واستخدام المكتبات المناسبة.',
                code: 'import collections\n\ncounts = collections.Counter([1, 2, 2, 3])',
                exercise: 'حل مشكلة بسيطة مع دالة فعالة.',
                challenge: 'قم بتحسين كودك في مشروع منك.',
                tips: ['التقليل من العمليات الثقيلة مهم جدًا.'],
                commonMistakes: ['حلقة داخل حلقة'],
                nextLesson: 'python-beginner-1'
            }
        ]
    }
];

window.ALL_PYTHON_COURSES = window.PYTHON_COURSES;
