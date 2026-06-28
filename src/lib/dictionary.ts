export type Locale = "vi" | "en";

export interface Dict {
  site: {
    name: string;
    nameShort: string;
    tagline: string;
    description: string;
    lang: string;
    brandPromise: string;
    brandPromiseEn: string;
    supportingLine: string;
    supportingLineEn: string;
  };
  nav: {
    overview: string;
    what: string;
    journey: string;
    programs: string;
    stories: string;
    articles: string;
    forOrgs: string;
    register: string;
    otherLocale: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    trust: string;
  };
  heroEn: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    trust: string;
  };
  sections: {
    biggerThanCV: { title: string; body: string };
    fourSteps: { title: string; body: string };
    notZero: { title: string; body: string };
    realExample: { title: string; body: string };
    program21: { title: string; body: string };
    forOrgs: { title: string; body: string };
    finalCTA: { title: string; body: string };
  };
  journey: {
    title: string;
    titleEn: string;
    subtitle: string;
    fourSteps: {
      step1: { title: string; titleEn: string; question: string; activities: string[]; output: string[] };
      step2: { title: string; titleEn: string; question: string; activities: string[]; output: string[] };
      step3: { title: string; titleEn: string; question: string; activities: string[]; output: string[] };
      step4: { title: string; titleEn: string; question: string; activities: string[]; output: string[] };
    };
  };
  program: {
    title: string;
    titleEn: string;
    subtitle: string;
    weeks: {
      week1: { title: string; activities: string[]; output: string };
      week2: { title: string; activities: string[]; output: string };
      week3: { title: string; activities: string[]; output: string[] };
    };
    disclaimer: string;
    disclaimerEn: string;
  };
  register: {
    h1: string;
    h1En: string;
    sections: {
      contact: { title: string; fields: { name: string; key: string; type: string }[] };
      current: { title: string; fields: { name: string; key: string; type: string }[] };
      abilities: { title: string; fields: { name: string; key: string; type: string }[] };
      readiness: { title: string; fields: { name: string; key: string; type: string }[] };
    };
    consentRequired: string[];
    consentOptional: string;
    submit: string;
    successTitle: string;
    successBody: string;
    successId: string;
    successTitleEn: string;
    successBodyEn: string;
    successIdEn: string;
  };
  what: {
    h1: string;
    h1En: string;
    definition: string[];
    definitionEn: string[];
    not: string[];
    notEn: string[];
  };
  about: {
    values: { title: string; desc: string }[];
  };
  faq: {
    h1: string;
    items: { q: string; a: string }[];
  };
  footer: {
    brand: string;
    attribution: string;
    navigation: string;
    info: string;
    privacy: string;
    terms: string;
    contact: string;
    omdalat: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
  meta: {
    homeTitle: string;
    homeDesc: string;
    homeTitleEn: string;
    homeDescEn: string;
  };
}

export const dictionaries: Record<Locale, Dict> = {
  vi: {
    site: {
      name: "Chạm Ôm Đà Lạt",
      nameShort: "Chạm Ôm",
      tagline: "Chạm vào Đà Lạt theo cách của bạn",
      description: "Khám phá Đà Lạt qua những trải nghiệm thật — sống, làm, học và kết nối cùng con người nơi đây.",
      lang: "Tiếng Việt",
      brandPromise: "Bạn lớn hơn những gì mình từng làm.",
      brandPromiseEn: "You are more than what you have done.",
      supportingLine: "Chạm vào khả năng đang chờ được sống.",
      supportingLineEn: "Touch the potential waiting to be lived.",
    },
    nav: {
      overview: "Tổng quan",
      what: "Chạm là gì",
      journey: "Hành trình",
      programs: "Chương trình",
      stories: "Câu chuyện",
      articles: "Bài viết",
      forOrgs: "Dành cho tổ chức",
      register: "Đăng ký",
      otherLocale: "English",
    },
    hero: {
      eyebrow: "CHẠM ÔM ĐÀ LẠT · HÀNH TRÌNH TIỀM NĂNG CON NGƯỜI",
      title: "Bạn lớn hơn những gì mình từng làm.",
      subtitle: "Chạm Ôm Đà Lạt giúp bạn nhìn lại những khả năng chưa được gọi tên, thử một hướng đi mới bằng hành động nhỏ và tạo ra bằng chứng thật trước khi đưa ra quyết định lớn.",
      cta: "Bắt đầu từ chính mình",
      cta2: "Xem hành trình Chạm",
      trust: "Chạm không hứa tìm ra \"câu trả lời đúng\" cho cuộc đời bạn. Chạm giúp bạn xây một thử nghiệm đủ rõ để tự nhìn thấy điều gì đáng tiếp tục.",
    },
    heroEn: {
      eyebrow: "CHAM OM DALAT · A HUMAN POTENTIAL JOURNEY",
      title: "You are more than what you have done.",
      subtitle: "Cham Om Dalat helps you recognize unnamed potential, test a new direction through small real-world action, and build evidence before making a major life decision.",
      cta: "Start with yourself",
      cta2: "Explore the Cham journey",
      trust: "Cham does not promise to reveal the single \"right answer\" for your life. It helps you design a clear experiment so you can see what is worth continuing.",
    },
    sections: {
      biggerThanCV: {
        title: "Một con người luôn lớn hơn hồ sơ của họ",
        body: "CV nói về quá khứ; Chạm giúp kiểm chứng khả năng tương lai."
      },
      fourSteps: {
        title: "Bốn bước của Chạm",
        body: "Khám phá → Thử nghiệm → Tạo giá trị → Trao lại."
      },
      notZero: {
        title: "Không bắt đầu lại từ số 0",
        body: "Kỹ năng và kinh nghiệm được chuyển hóa, không bị xóa bỏ."
      },
      realExample: {
        title: "Một ví dụ thật",
        body: "Marketer muốn thử interior design bằng project nhỏ, không nghỉ việc ngay."
      },
      program21: {
        title: "21 Ngày Chạm",
        body: "Nhìn lại, chọn giả thuyết, thực hiện thử nghiệm, tạo evidence."
      },
      forOrgs: {
        title: "Dành cho tổ chức",
        body: "Tạo project nhỏ với phạm vi, đầu ra, quyền sở hữu và trạng thái trả phí rõ."
      },
      finalCTA: {
        title: "Một hướng đi mới có thể bắt đầu bằng một thử nghiệm nhỏ.",
        body: ""
      },
    },
    journey: {
      title: "Hành trình Chạm",
      titleEn: "The Cham Journey",
      subtitle: "Bốn bước từ khám phá đến trao lại",
      fourSteps: {
        step1: {
          title: "Chạm Khám Phá",
          titleEn: "Discover",
          question: "Tôi là ai ngoài chức danh hiện tại?",
          activities: [
            "kể lại các chặng đời",
            "nhận diện kỹ năng chuyển đổi",
            "điều tạo năng lượng",
            "khả năng chưa thử",
            "giới hạn và bối cảnh thật",
          ],
          output: ["Potential Profile", "Potential Map", "ba giả thuyết hướng đi", "một câu hỏi cần kiểm chứng"],
        },
        step2: {
          title: "Chạm Thử Nghiệm",
          titleEn: "Explore",
          question: "Tôi có thể kiểm chứng điều này bằng hành động nhỏ nào?",
          activities: [
            "chọn một giả thuyết",
            "thiết kế thử nghiệm 7–21 ngày",
            "xác định đầu ra",
            "xác định người phản hồi",
            "ghi lại tiến trình",
          ],
          output: ["Experiment Plan", "nhật ký", "evidence đầu tiên", "quyết định tiếp tục, đổi hướng hoặc dừng"],
        },
        step3: {
          title: "Chạm Tạo Giá Trị",
          titleEn: "Create",
          question: "Khả năng này có thể trở thành giá trị gì?",
          activities: [
            "xây portfolio",
            "tạo prototype",
            "tạo dịch vụ nhỏ",
            "tạo bài viết hoặc workshop",
            "hợp tác project thật",
          ],
          output: ["project", "portfolio", "prototype", "service offer", "verified outcome"],
        },
        step4: {
          title: "Chạm Trao Lại",
          titleEn: "Give Back",
          question: "Điều tôi đã học có thể trở thành cơ hội cho ai?",
          activities: [
            "mentor",
            "mở thử nghiệm",
            "tạo project",
            "chia sẻ câu chuyện",
            "kết nối người và cơ hội",
          ],
          output: ["mentor contribution", "opportunity", "community role", "collaboration record"],
        },
      },
    },
    program: {
      title: "21 Ngày Chạm",
      titleEn: "21-Day Cham Journey",
      subtitle: "Từ khả năng chưa gọi tên đến thử nghiệm đầu tiên",
      weeks: {
        week1: {
          title: "Tuần 1 — Nhìn lại",
          activities: ["life story", "skills", "energy", "constraints", "patterns"],
          output: "Potential Map draft",
        },
        week2: {
          title: "Tuần 2 — Mở khả năng",
          activities: ["hidden possibilities", "transferable skills", "three hypotheses", "choose one"],
          output: "Experiment hypothesis",
        },
        week3: {
          title: "Tuần 3 — Thực hiện",
          activities: ["build", "ask for feedback", "document", "complete", "review"],
          output: ["Evidence record", "next-step decision"],
        },
      },
      disclaimer: "Chương trình không bảo đảm đổi nghề, có việc, tăng thu nhập hoặc tìm ra một câu trả lời duy nhất. Giá trị của hành trình nằm ở việc hoàn thành một thử nghiệm và tạo bằng chứng để ra quyết định rõ hơn.",
      disclaimerEn: "The program does not guarantee a career change, employment, income growth, or a single definitive answer. Its value lies in completing an experiment and creating evidence that supports a clearer decision.",
    },
    register: {
      h1: "Bắt đầu bằng việc kể cho Chạm biết bạn đang đứng ở đâu.",
      h1En: "Begin by telling Cham where you are now.",
      sections: {
        contact: {
          title: "Liên hệ",
          fields: [
            { name: "Họ và tên", key: "full_name", type: "text" },
            { name: "Email", key: "email", type: "email" },
            { name: "Số điện thoại hoặc WhatsApp", key: "phone", type: "tel" },
            { name: "Nơi đang sống", key: "current_location", type: "text" },
            { name: "Ngôn ngữ ưu tiên", key: "preferred_language", type: "text" },
            { name: "Múi giờ", key: "timezone", type: "text" },
          ],
        },
        current: {
          title: "Hiện tại",
          fields: [
            { name: "Công việc hoặc vai trò hiện tại", key: "current_role", type: "text" },
            { name: "Số năm kinh nghiệm", key: "years_experience", type: "number" },
            { name: "Điều đang khiến bạn băn khoăn", key: "current_tension", type: "textarea" },
            { name: "Điều bạn không muốn tiếp tục", key: "wants_to_stop", type: "textarea" },
            { name: "Điều bạn muốn thử nhưng chưa thử", key: "wants_to_try", type: "textarea" },
          ],
        },
        abilities: {
          title: "Khả năng và bằng chứng",
          fields: [
            { name: "Kỹ năng thường được người khác ghi nhận", key: "recognized_skills", type: "textarea" },
            { name: "Việc làm tốt nhưng chưa coi là nghề", key: "underused_strengths", type: "textarea" },
            { name: "Portfolio, LinkedIn hoặc website", key: "portfolio_url", type: "url" },
            { name: "Project tự hào", key: "proud_project", type: "textarea" },
            { name: "Một lần đã thay đổi hướng đi", key: "change_story", type: "textarea" },
          ],
        },
        readiness: {
          title: "Mức sẵn sàng",
          fields: [
            { name: "Giờ có thể dành mỗi tuần", key: "weekly_hours", type: "number" },
            { name: "Hành trình muốn tham gia", key: "desired_path", type: "text" },
            { name: "Sẵn sàng thử project nhỏ?", key: "ready_for_experiment", type: "text" },
            { name: "Quan tâm chương trình trả phí?", key: "paid_program_interest", type: "text" },
            { name: "Khoảng ngân sách", key: "budget_range", type: "text" },
            { name: "Thời gian bắt đầu", key: "start_window", type: "text" },
          ],
        },
      },
      consentRequired: [
        "Đồng ý xử lý dữ liệu cho việc xem xét hồ sơ.",
        "Hiểu Chạm không chẩn đoán tâm lý, không bảo đảm việc làm, thu nhập hoặc kết quả nghề nghiệp.",
      ],
      consentOptional: "Nhận email về bài viết, chương trình và cộng đồng.",
      submit: "Gửi hồ sơ",
      successTitle: "Hồ sơ của bạn đã được ghi nhận.",
      successBody: "Chạm sẽ xem xét thông tin trước khi phản hồi. Việc gửi hồ sơ chưa phải xác nhận tham gia, chưa tạo nghĩa vụ thanh toán và không phải cam kết về việc làm hoặc kết quả nghề nghiệp.",
      successId: "Mã hồ sơ:",
      successTitleEn: "Your application has been received.",
      successBodyEn: "Cham will review the information before responding. Submission does not confirm participation, create a payment obligation, or guarantee employment or career outcomes.",
      successIdEn: "Application ID:",
    },
    what: {
      h1: "Chạm Ôm Đà Lạt là gì",
      h1En: "What is Cham Om Dalat",
      definition: [
        "Chạm Ôm Đà Lạt là một hành trình phát triển tiềm năng con người bắt đầu từ tự nhận biết, đi qua thử nghiệm nhỏ trong đời sống thật, chuyển hóa thành project hoặc bằng chứng năng lực, rồi mở ra khả năng đóng góp và trao cơ hội cho người khác.",
        "Chạm giúp bạn nhìn thấy khả năng chưa được gọi tên, thử chúng trong đời sống thật, tạo bằng chứng có thể kiểm tra và từng bước làm chủ hướng đi của chính mình.",
      ],
      definitionEn: [
        "Cham Om Dalat is a human potential journey that begins with self-awareness, moves through small real-world experiments, turns emerging ability into projects or evidence, and eventually enables people to contribute and create opportunities for others.",
        "Cham helps you recognize unnamed potential, test it in real life, create verifiable evidence, and gradually take ownership of your own direction.",
      ],
      not: [
        "job board",
        "nền tảng tuyển dụng",
        "bài test tính cách",
        "nền tảng chữa lành",
        "khóa học online",
        "marketplace coaching",
        "mạng xã hội",
        "AI quyết định nghề nghiệp thay người dùng",
      ],
      notEn: [
        "a job board",
        "a recruiting platform",
        "a personality test",
        "a healing platform",
        "an online course",
        "a coaching marketplace",
        "a social network",
        "AI that decides your career for you",
      ],
    },
    about: {
      values: [
        { title: "Thật", desc: "Mọi trải nghiệm đều được tạo ra bởi con người thật, tại Đà Lạt thật." },
        { title: "Chậm", desc: "Không chạy theo số lượng. Mỗi hành trình có nhịp riêng của nó." },
        { title: "Kết nối", desc: "Giữa người với người, giữa người với nơi chốn, giữa người với chính mình." },
      ],
    },
    faq: {
      h1: "Câu hỏi thường gặp",
      items: [
        { q: "Chạm Ôm Đà Lạt có phải tour du lịch không?", a: "Không. Chạm là một hành trình phát triển tiềm năng con người. Du lịch có thể là một phần của trải nghiệm, nhưng mục tiêu là giúp bạn nhìn thấy và kiểm chứng khả năng mới." },
        { q: "Tôi có cần nghỉ việc để tham gia không?", a: "Không. Chạm được thiết kế để bạn có thể thử nghiệm song song với công việc hiện tại. Các thử nghiệm được thiết kế trong khung 7–21 ngày với cam kết thời gian linh hoạt." },
        { q: "Chạm có đảm bảo tôi tìm được việc mới không?", a: "Không. Chạm không phải dịch vụ tuyển dụng và không bảo đảm kết quả nghề nghiệp. Giá trị của Chạm nằm ở việc giúp bạn tạo bằng chứng để tự đưa ra quyết định rõ hơn." },
        { q: "Ai có thể tham gia?", a: "Chạm phù hợp với người đã đi làm 4–12 năm, đang băn khoăn về hướng đi hiện tại và muốn kiểm chứng khả năng mới với rủi ro thấp." },
        { q: "Chạm có thu phí không?", a: "Hiện tại Chạm đang trong giai đoạn đầu. Một số chương trình có thể có phí trong tương lai. Thông tin sẽ được công bố rõ ràng trước khi có bất kỳ cam kết tài chính nào." },
      ],
    },
    footer: {
      brand: "Chạm Ôm Đà Lạt — một dự án độc lập",
      attribution: "Thuộc hệ Ôm Đà Lạt",
      navigation: "Điều hướng",
      info: "Thông tin",
      privacy: "Quyền riêng tư",
      terms: "Điều khoản",
      contact: "Liên hệ",
      omdalat: "omdalat.com",
    },
    notFound: {
      title: "Trang không tìm thấy",
      body: "Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.",
      cta: "Về trang chủ",
    },
    meta: {
      homeTitle: "Chạm Ôm Đà Lạt | Khám phá tiềm năng qua thử nghiệm thật",
      homeDesc: "Chạm Ôm Đà Lạt giúp bạn nhìn thấy khả năng chưa được gọi tên, thử một hướng đi mới và tạo bằng chứng thật trước khi đưa ra quyết định lớn.",
      homeTitleEn: "Cham Om Dalat | Discover potential through real experiments",
      homeDescEn: "Cham Om Dalat helps people recognize unnamed potential, test a new direction, and build real evidence before making a major life decision.",
    },
  },

  en: {
    site: {
      name: "Cham Om Dalat",
      nameShort: "Cham Om",
      tagline: "Touch Da Lat your way",
      description: "Discover Da Lat through real experiences — live, work, learn, and connect with the people and rhythm of this place.",
      lang: "English",
      brandPromise: "You are more than what you have done.",
      brandPromiseEn: "You are more than what you have done.",
      supportingLine: "Touch the potential waiting to be lived.",
      supportingLineEn: "Touch the potential waiting to be lived.",
    },
    nav: {
      overview: "Overview",
      what: "What is Cham",
      journey: "Journey",
      programs: "Programs",
      stories: "Stories",
      articles: "Articles",
      forOrgs: "For Organizations",
      register: "Apply",
      otherLocale: "Tiếng Việt",
    },
    hero: {
      eyebrow: "CHAM OM DALAT · A HUMAN POTENTIAL JOURNEY",
      title: "You are more than what you have done.",
      subtitle: "Cham Om Dalat helps you recognize unnamed potential, test a new direction through small real-world action, and build evidence before making a major life decision.",
      cta: "Start with yourself",
      cta2: "Explore the Cham journey",
      trust: "Cham does not promise to reveal the single \"right answer\" for your life. It helps you design a clear experiment so you can see what is worth continuing.",
    },
    heroEn: {
      eyebrow: "CHAM OM DALAT · A HUMAN POTENTIAL JOURNEY",
      title: "You are more than what you have done.",
      subtitle: "Cham Om Dalat helps you recognize unnamed potential, test a new direction through small real-world action, and build evidence before making a major life decision.",
      cta: "Start with yourself",
      cta2: "Explore the Cham journey",
      trust: "Cham does not promise to reveal the single \"right answer\" for your life. It helps you design a clear experiment so you can see what is worth continuing.",
    },
    sections: {
      biggerThanCV: {
        title: "A person is always bigger than their resume",
        body: "A CV tells the past; Cham helps verify future potential."
      },
      fourSteps: {
        title: "The four steps of Cham",
        body: "Discover → Explore → Create → Give Back."
      },
      notZero: {
        title: "You don't have to start from zero",
        body: "Skills and experience are transformed, not erased."
      },
      realExample: {
        title: "A real example",
        body: "A marketer wanting to try interior design through a small project, without quitting their job."
      },
      program21: {
        title: "21-Day Cham Journey",
        body: "Reflect, choose a hypothesis, run the experiment, create evidence."
      },
      forOrgs: {
        title: "For organizations",
        body: "Create small projects with clear scope, outputs, ownership, and paid status."
      },
      finalCTA: {
        title: "A new direction can start with a small experiment.",
        body: ""
      },
    },
    journey: {
      title: "The Cham Journey",
      titleEn: "The Cham Journey",
      subtitle: "Four steps from discovery to giving back",
      fourSteps: {
        step1: {
          title: "Discover",
          titleEn: "Discover",
          question: "Who am I beyond my current title?",
          activities: [
            "tell your life story",
            "identify transferable skills",
            "what gives you energy",
            "untried abilities",
            "real constraints and context",
          ],
          output: ["Potential Profile", "Potential Map", "three direction hypotheses", "one question to verify"],
        },
        step2: {
          title: "Explore",
          titleEn: "Explore",
          question: "How can I test this through a small action?",
          activities: [
            "choose one hypothesis",
            "design a 7–21 day experiment",
            "define expected output",
            "identify feedback sources",
            "document progress",
          ],
          output: ["Experiment Plan", "journal", "first evidence", "continue, pivot, or stop decision"],
        },
        step3: {
          title: "Create",
          titleEn: "Create",
          question: "What value can this ability become?",
          activities: [
            "build a portfolio",
            "create a prototype",
            "offer a small service",
            "write or run a workshop",
            "collaborate on a real project",
          ],
          output: ["project", "portfolio", "prototype", "service offer", "verified outcome"],
        },
        step4: {
          title: "Give Back",
          titleEn: "Give Back",
          question: "Who can benefit from what I've learned?",
          activities: [
            "mentor someone",
            "open an experiment",
            "create a project",
            "share your story",
            "connect people and opportunities",
          ],
          output: ["mentor contribution", "opportunity", "community role", "collaboration record"],
        },
      },
    },
    program: {
      title: "21-Day Cham Journey",
      titleEn: "21-Day Cham Journey",
      subtitle: "From unnamed potential to a first experiment",
      weeks: {
        week1: {
          title: "Week 1 — Look back",
          activities: ["life story", "skills", "energy", "constraints", "patterns"],
          output: "Potential Map draft",
        },
        week2: {
          title: "Week 2 — Open possibilities",
          activities: ["hidden possibilities", "transferable skills", "three hypotheses", "choose one"],
          output: "Experiment hypothesis",
        },
        week3: {
          title: "Week 3 — Execute",
          activities: ["build", "ask for feedback", "document", "complete", "review"],
          output: ["Evidence record", "next-step decision"],
        },
      },
      disclaimer: "The program does not guarantee a career change, employment, income growth, or a single definitive answer. Its value lies in completing an experiment and creating evidence that supports a clearer decision.",
      disclaimerEn: "The program does not guarantee a career change, employment, income growth, or a single definitive answer. Its value lies in completing an experiment and creating evidence that supports a clearer decision.",
    },
    register: {
      h1: "Begin by telling Cham where you are now.",
      h1En: "Begin by telling Cham where you are now.",
      sections: {
        contact: {
          title: "Contact",
          fields: [
            { name: "Full name", key: "full_name", type: "text" },
            { name: "Email", key: "email", type: "email" },
            { name: "Phone or WhatsApp", key: "phone", type: "tel" },
            { name: "Current location", key: "current_location", type: "text" },
            { name: "Preferred language", key: "preferred_language", type: "text" },
            { name: "Timezone", key: "timezone", type: "text" },
          ],
        },
        current: {
          title: "Current situation",
          fields: [
            { name: "Current role or job", key: "current_role", type: "text" },
            { name: "Years of experience", key: "years_experience", type: "number" },
            { name: "What is troubling you?", key: "current_tension", type: "textarea" },
            { name: "What do you want to stop doing?", key: "wants_to_stop", type: "textarea" },
            { name: "What have you wanted to try but haven't?", key: "wants_to_try", type: "textarea" },
          ],
        },
        abilities: {
          title: "Abilities and evidence",
          fields: [
            { name: "Skills others often recognize in you", key: "recognized_skills", type: "textarea" },
            { name: "Things you do well but don't consider a profession", key: "underused_strengths", type: "textarea" },
            { name: "Portfolio, LinkedIn, or website", key: "portfolio_url", type: "url" },
            { name: "A project you're proud of", key: "proud_project", type: "textarea" },
            { name: "A time you changed direction", key: "change_story", type: "textarea" },
          ],
        },
        readiness: {
          title: "Readiness",
          fields: [
            { name: "Hours available per week", key: "weekly_hours", type: "number" },
            { name: "Preferred journey path", key: "desired_path", type: "text" },
            { name: "Ready to try a small project?", key: "ready_for_experiment", type: "text" },
            { name: "Interested in paid programs?", key: "paid_program_interest", type: "text" },
            { name: "Budget range", key: "budget_range", type: "text" },
            { name: "Preferred start time", key: "start_window", type: "text" },
          ],
        },
      },
      consentRequired: [
        "Consent to data processing for application review.",
        "I understand Cham does not provide psychological diagnosis, does not guarantee employment, income, or career outcomes.",
      ],
      consentOptional: "Receive emails about articles, programs, and community.",
      submit: "Submit application",
      successTitle: "Your application has been received.",
      successBody: "Cham will review the information before responding. Submission does not confirm participation, create a payment obligation, or guarantee employment or career outcomes.",
      successId: "Application ID:",
      successTitleEn: "Your application has been received.",
      successBodyEn: "Cham will review the information before responding. Submission does not confirm participation, create a payment obligation, or guarantee employment or career outcomes.",
      successIdEn: "Application ID:",
    },
    what: {
      h1: "What is Cham Om Dalat",
      h1En: "What is Cham Om Dalat",
      definition: [
        "Cham Om Dalat is a human potential journey that begins with self-awareness, moves through small real-world experiments, turns emerging ability into projects or evidence, and eventually enables people to contribute and create opportunities for others.",
        "Cham helps you recognize unnamed potential, test it in real life, create verifiable evidence, and gradually take ownership of your own direction.",
      ],
      definitionEn: [
        "Cham Om Dalat is a human potential journey that begins with self-awareness, moves through small real-world experiments, turns emerging ability into projects or evidence, and eventually enables people to contribute and create opportunities for others.",
        "Cham helps you recognize unnamed potential, test it in real life, create verifiable evidence, and gradually take ownership of your own direction.",
      ],
      not: [
        "a job board",
        "a recruiting platform",
        "a personality test",
        "a healing platform",
        "an online course",
        "a coaching marketplace",
        "a social network",
        "AI that decides your career for you",
      ],
      notEn: [
        "a job board",
        "a recruiting platform",
        "a personality test",
        "a healing platform",
        "an online course",
        "a coaching marketplace",
        "a social network",
        "AI that decides your career for you",
      ],
    },
    about: {
      values: [
        { title: "Real", desc: "Every experience is created by real people, in the real Da Lat." },
        { title: "Slow", desc: "Not chasing quantity. Every journey has its own rhythm." },
        { title: "Connected", desc: "Between people, between people and place, between people and themselves." },
      ],
    },
    faq: {
      h1: "Frequently Asked Questions",
      items: [
        { q: "Is Cham Om Dalat a tour?", a: "No. Cham is a human potential journey. Travel may be part of the experience, but the goal is to help you see and test new abilities." },
        { q: "Do I need to quit my job to participate?", a: "No. Cham is designed for you to experiment alongside your current work. Experiments are 7–21 days with flexible time commitment." },
        { q: "Does Cham guarantee I'll find a new job?", a: "No. Cham is not a recruitment service and does not guarantee career outcomes. Its value lies in helping you create evidence for clearer decisions." },
        { q: "Who can join?", a: "Cham is suitable for people with 4–12 years of work experience who are questioning their current direction and want to test new abilities with low risk." },
        { q: "Does Cham charge a fee?", a: "Cham is currently in early stages. Some programs may have fees in the future. Clear information will be provided before any financial commitment." },
      ],
    },
    footer: {
      brand: "Cham Om Dalat — an independent project",
      attribution: "Part of the Om Dalat ecosystem",
      navigation: "Navigation",
      info: "Information",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      omdalat: "omdalat.com",
    },
    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has been moved.",
      cta: "Back to home",
    },
    meta: {
      homeTitle: "Cham Om Dalat | Discover potential through real experiments",
      homeDesc: "Cham Om Dalat helps people recognize unnamed potential, test a new direction, and build real evidence before making a major life decision.",
      homeTitleEn: "Cham Om Dalat | Discover potential through real experiments",
      homeDescEn: "Cham Om Dalat helps people recognize unnamed potential, test a new direction, and build real evidence before making a major life decision.",
    },
  },
};

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.vi;
}
