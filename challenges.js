window.CHALLENGES_DATA = [
    {
        id: 'challenge-html-profile',
        title: 'إنشاء Profile Page',
        language: 'HTML',
        difficulty: 'Beginner',
        description: 'أنشئ صفحة Profile تحتوي على صورة واسم ووصف وزرين باستخدام HTML وCSS.',
        requirements: ['صورة', 'اسم', 'وصف', 'زران'],
        hint: 'استخدم section و div و button في هيكل منظم.',
        completed: false
    },
    {
        id: 'challenge-css-card',
        title: 'بطاقة محترفة',
        language: 'CSS',
        difficulty: 'Intermediate',
        description: 'صمم بطاقة منتج بصور، سعر، وصف، وزر شراء.',
        requirements: ['صورة', 'عنوان', 'سعر', 'زر'],
        hint: 'استخدم border-radius، shadow، و hover animation.',
        completed: false
    },
    {
        id: 'challenge-js-todo',
        title: 'To-Do App',
        language: 'JavaScript',
        difficulty: 'Intermediate',
        description: 'أنشئ تطبيق مهام يقوم بإضافة مهام وحذفها وتحديدها كمنجزة.',
        requirements: ['إدخال', 'قائمة', 'حذف', 'تحديد'],
        hint: 'احفظ المهام في localStorage لتحافظ عليها.',
        completed: false
    },
    {
        id: 'challenge-python-tools',
        title: 'أداة صغيرة',
        language: 'Python',
        difficulty: 'Intermediate',
        description: 'اكتب Script Python يلتقط أسماء الملفات داخل مجلد ويعرضها.',
        requirements: ['os', 'loop', 'list'],
        hint: 'استخدم os.listdir و for loop.',
        completed: false
    }
];

window.ALL_CHALLENGES = window.CHALLENGES_DATA;
