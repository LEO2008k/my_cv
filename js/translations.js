// NEO GLOW - Translations (UK/EN)

const translations = {
    uk: {
        // Navigation
        nav_home: "Головна",
        nav_about: "Про мене",
        nav_work: "Робота",
        nav_awards: "Сертифікати",
        nav_violinist: "Скрипаль",
        nav_projects: "Проєкти",
        nav_volunteer: "Волонтерство",

        // Homepage
        hero_subtitle: "System/Network Administrator | DevOps | Cyber Security Engineer",
        hero_location: "Vancouver, British Columbia, Canada",
        btn_download_cv: "Завантажити CV",
        section_learn_more: "Дізнайтесь більше",

        // Page Cards
        card_about_title: "Про мене",
        card_about_desc: "Технічні навички, контакти та особиста інформація",
        card_work_title: "Робоча історія",
        card_work_desc: "Від 2008 року: ISP, DevOps, Security та більше",
        card_awards_title: "Нагороди та сертифікати",
        card_awards_desc: "CCNA, MikroTik, CS50, RedHat та інші",
        card_violinist_title: "Скрипаль",
        card_violinist_desc: "Музична сторона мого життя",
        card_projects_title: "Домашні проєкти",
        card_projects_desc: "Особисті технічні проєкти та експерименти",
        card_volunteer_title: "Волонтерство в BC",
        card_volunteer_desc: "BSides Vancouver, VanLUG та спільнота",

        // Contact Section
        contact_title: "Зв'язатися зі мною",

        // About Page
        about_title: "Про мене",
        about_subtitle: "System/Network Administrator | DevOps | Cyber Security Engineer",
        bio_title: "Біографія",
        bio_text_1: "Досвідчений IT-спеціаліст з понад 15 роками досвіду в мережевому адмініструванні, системах безпеки та DevOps практиках. Народився в Україні, зараз проживаю та працюю у Vancouver, BC, Canada.",
        bio_text_2: "Спеціалізуюсь на кібербезпеці, підтримці Tier 1,2, Linux системах, мережевій інфраструктурі, автоматизації та моніторингу. Завжди готовий вчитися новому та ділитися знаннями зі спільнотою.",
        contacts_title: "Контакти",
        skills_title: "Технічні навички",
        skills_programming: "Мови програмування",
        skills_network: "Мережеві технології",
        skills_security: "Безпека",
        skills_os: "Операційні системи",
        skills_devops: "DevOps інструменти",
        skills_database: "Бази даних та Інше",
        btn_download_resume: "Завантажити моє резюме",

        // Work History Page
        work_title: "Історія роботи",
        work_subtitle: "Понад 15 років досвіду в IT",
        work_current: "Поточне місце",
        work_improved: "Покращені навички:",

        // Netskrt
        work_netskrt_role: "LiveOps & Linux Administrator",
        work_netskrt_date: "Травень 2025 - Вересень 2025 • 5 міс",
        work_netskrt_desc: `<ul style="margin-top: 1rem; padding-left: 1.2rem;">
<li>Встановлення та налаштування RAID на серверах Linux, усунення технічних несправностей.</li>
<li>Забезпечення конфігурацій Linux за допомогою Ansible.</li>
<li>Налаштування фаєрволу UFW, оновлення системи та оптимізація продуктивності ('tuned').</li>
<li>Впровадження моніторингу цілісності файлів (inotify).</li>
<li>Моніторинг серверів Linux та CDN для забезпечення плавної відеострімінгу (Prometheus, Grafana, Zabbix).</li>
<li>Оптимізація доставки контенту через CDN, зменшення затримок.</li>
<li>Робота з Jira, JQL, CQL для документації.</li>
<li>Налаштування та дебаг мережі (curl, TCPDUMP), підтримка NetBox та DNS.</li>
<li>Встановлення та налаштування Kubernetes.</li>
</ul>`,

        // mThreat
        work_mthreat_role: "Cyber Security Research Engineer (Internship)",
        work_mthreat_date: "Січень 2025 - Лютий 2025 • 2 міс",
        work_mthreat_desc: `Успішне завершення стажування з фокусом на виявленні інтернет-аномалій та блокуванні ботнетів.
• Розслідування фішингових листів та аналіз заголовків email.
• Аналіз та додавання IP-адрес до списків репутації.
• Практичний досвід покращення безпеки користувачів у продуктовому середовищі.`,

        // TietoEVRY
        work_tieto_role: "DevOps Engineer",
        work_tieto_date: "Грудень 2020 - Липень 2023 • 2 роки 8 міс",
        work_tieto_desc: `Основний інженер з підтримки Tenable Security Center ("Tenable.sc") та інфраструктури з понад 100 сканерів Nessus.
• Використання Linux, Bash, Python, Jenkins, Gerrit, Git, Docker для автоматизації процесів.
• Моніторинг та візуалізація: Grafana (метрики), Loki (логи), checkmk.
• Автоматизація Python скриптів через Jenkins (сповіщення про статус сканерів).
• Траблшутинг: OpenSSL, traceroute, mtr, curl.
• Управління роботою через Kanban та Jira Query Language.
• Розробка скриптів для сповіщень про SLA, покращення підтримки користувачів.`,

        // AIT
        work_ait_role: "System Administrator & DevOps",
        work_ait_date: "Червень 2020 - Листопад 2020 • 6 міс",
        work_ait_desc: `IT Support Specialist (Tier 1). Спеціалізація: Linux та Windows (Server 2012/2016).
• Налаштування мережі, Windows AD, GPO, DNS.
• Розслідування інцидентів безпеки після хакерських атак.
• Налаштування DNS (Bind), підтримка бази даних WHOIS.
• Розгортання вебсайтів на cPanel через GitLab pipelines.
• Дотримання SLA та високий рівень задоволеності клієнтів.`,

        // SoftServe
        work_softserve_role: "DevOps at SoftServe (Lviv, Ukraine)",
        work_softserve_date: "Березень 2018 - Березень 2020 • 2 роки",
        work_softserve_desc: `Software Engineer у команді TIER 1 (SOC).
Відповідальність: підтримка та моніторинг IT-інфраструктури через RedHat, CentOS, Jenkins, Grafana, Git, Puppet, Nagios, Prometheus, Bash, Observium, BigPanda, Cisco UCS та ESXi.

Ключові досягнення та обов'язки:
• Забезпечення своєчасної роботи віртуальних машин Red Hat та CentOS 7.
• Використання Puppet для конфігурації та Ansible для оркестрації.
• Дотримання практик ITIL (RFC) та надання RCA (Root Cause Analysis).
• Значне зниження рівня "abuse rate", виведення IP з чорних списків.
• Розробка скриптів автоматизації (Docker, Jenkins, Python).
• Моніторинг метрик через Prometheus та візуалізація в Grafana.
• Агрегація алертів Nagios через BigPanda, розслідування в Observium.
• Управління віртуальними машинами на ESXi та Cisco UCS (vSphere).
• Управління Load Balancer (виведення нод під час інцидентів/патчингу).`,

        // Consulate
        work_consulate_role: "IT Support (SysAdmin) & Consultant",
        work_consulate_date: "Вересень 2018 - Січень 2023 • 4 роки 5 міс",
        work_consulate_desc: `Почесне консульство ФРН у Львові.
• IT Консультант: підтримка користувачів.
• Налаштування Windows 10/11, O365, Enterprise Security.
• Управління VM Ware ESXi, Firewall, IDS/IPS.
• Навички: Network Security, TCP/IP, Git, CentOS.`,

        // Pavlenko & Partners
        work_pavlenko_role: "Network and System Administrator",
        work_pavlenko_date: "Червень 2012 - Червень 2017 • 5 років 1 міс",
        work_pavlenko_desc: `Full-Stack Support Specialist (Pavlenko & Partners).
• Адміністрування клієнтських та серверних ОС (Windows Server 2003/2008 R2, macOS).
• Мережеве адміністрування: Mikrotik (RouterOS), Cisco Meraki (SD-WAN, wireless).
• Оптимізація мережі (QoS), безпека (IDS/IPS).
• Впровадження VDI та RDS для віддаленого доступу.
• Захист кінцевих точок (Symantec), анти-спам рішення (SPAMHAUSE).
• Адміністрування Active Directory, DHCP, Print Servers.
• Автоматизація: PowerShell, GPO.
• Відновлення систем після вірусних атак (Linux tools, USB/PXE boot).`,
        // SoftServe University
        work_softserve_uni_role: "SoftServe IT University",
        work_softserve_uni_date: "Вересень 2017 - Грудень 2017 • 4 міс",
        work_softserve_uni_desc: `Навчання та практика.
• Технології: MariaDB, Ha Proxy, Locust, AWS EC2, Autoscaling, Docker, Tomcat, Git, Ansible, Eucalyptus, Bash.`,

        // OurLan
        work_ourlan_role: "System/Network Administrator",
        work_ourlan_date: "Червень 2008 - Березень 2015 • 6 років 10 міс",
        work_ourlan_desc: `Власний бізнес (OurLan).
• Встановлення та обслуговування ISP LAN/WAN мереж.
• Управління smart-світчами, роутерами, білінгом.
• Робота з оптикою (Single & Multi-Mode Fiber), SCS, UTP/STP Cat 5/6.
• Обслуговування Data Center (Tier III), TCP/IP.`,
        awards_network: "Мережеві сертифікати",
        awards_security: "Кібербезпека",
        awards_education: "Освіта та навчання",
        awards_recognition: "Визнання",
        btn_view_pdf: "Переглянути PDF",

        // Violinist Page
        violinist_title: "Скрипаль",
        violinist_subtitle: "Музична сторона мого життя",
        coming_soon: "Скоро буде...",
        violinist_desc: "Ця сторінка буде присвячена моєму захопленню музикою та грі на скрипці.",
        violinist_plans: "Що буде на цій сторінці:",
        violinist_plan_1: "Мій музичний шлях",
        violinist_plan_2: "Відео виступів",
        violinist_plan_3: "Аудіозаписи",
        violinist_plan_4: "Фотогалерея",
        violin_isaca_title: "Isaca Hack The Halls (3rd Annual)",
        violin_isaca_desc: "Виступ на 3-му щорічному заході Isaca Hack The Halls.",

        // Projects Page
        projects_title: "Домашні проєкти",
        projects_subtitle: "Особисті технічні проєкти та експерименти",
        projects_desc: "Ця сторінка буде містити мої персональні технічні проєкти та home lab експерименти.",
        projects_categories: "Категорії проєктів:",
        btn_view_github: "Переглянути на GitHub",

        // Volunteer Page
        volunteer_title: "Волонтерство в BC",
        volunteer_subtitle: "Участь у технічній спільноті British Columbia",
        volunteer_bsides_desc: "BSides Vancouver — це некомерційна конференція з кібербезпеки, що об'єднує професіоналів, дослідників та ентузіастів безпеки.",
        volunteer_bsides_role: "Як волонтер, я допомагав в організації заходу та забезпеченні комфортної атмосфери для всіх учасників.",
        volunteer_vanlug_desc: "Активний учасник спільноти користувачів Linux у Ванкувері. VanLUG об'єднує ентузіастів Linux та open source технологій.",
        volunteer_other: "Інша діяльність",
        volunteer_other_desc: "Ця секція буде доповнена інформацією про інші волонтерські активності та участь у спільноті BC.",
        volunteer_future: "Плани на майбутнє:",
        volunteer_certs: "Сертифікати та подяки",
        btn_volunteer_cert: "Сертифікат волонтера",
        volunteer_isaca_desc: "Волонтер у Vancouver Chapter ISACA — міжнародна організація з IT аудиту та безпеки.",
        volunteer_bsides_van_2025_desc: "Волонтер на BSides Vancouver 2025 — щорічна конференція з кібербезпеки.",
        volunteer_bsides_vic_2025_desc: "Волонтер на BSides Victoria 2025 — конференція з кібербезпеки.",
        volunteer_rocky_desc: "Локалізація документації Rocky Linux українською мовою.",
        volunteer_google_desc: "Волонтер на Google I/O Extended Vancouver.",

        // Footer
        footer_rights: "All rights reserved."
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_work: "Work",
        nav_awards: "Certificates",
        nav_violinist: "Violinist",
        nav_projects: "Projects",
        nav_volunteer: "Volunteer",

        // Homepage
        hero_subtitle: "System/Network Administrator | DevOps | Cyber Security Engineer",
        hero_location: "Vancouver, British Columbia, Canada",
        btn_download_cv: "Download CV",
        section_learn_more: "Learn More",

        // Page Cards
        card_about_title: "About Me",
        card_about_desc: "Technical skills, contacts and personal info",
        card_work_title: "Work History",
        card_work_desc: "Since 2008: ISP, DevOps, Security and more",
        card_awards_title: "Awards & Certificates",
        card_awards_desc: "CCNA, MikroTik, CS50, RedHat and more",
        card_violinist_title: "Violinist",
        card_violinist_desc: "The musical side of my life",
        card_projects_title: "Home Projects",
        card_projects_desc: "Personal tech projects and experiments",
        card_volunteer_title: "Volunteering in BC",
        card_volunteer_desc: "BSides Vancouver, VanLUG and community",

        // Contact Section
        contact_title: "Contact Me",

        // About Page
        about_title: "About Me",
        about_subtitle: "System/Network Administrator | DevOps | Cyber Security Engineer",
        bio_title: "Biography",
        bio_text_1: "Experienced IT specialist with over 15 years of experience in network administration, security systems and DevOps practices. Born in Ukraine, currently living and working in Vancouver, BC, Canada.",
        bio_text_2: "I specialize in Cyber Security, Tier 1,2 Support Engineer, Linux systems, network infrastructure, automation and monitoring. Always ready to learn new things and share knowledge with the community.",
        contacts_title: "Contacts",
        skills_title: "Technical Skills",
        skills_programming: "Programming Languages",
        skills_network: "Network Technologies",
        skills_security: "Security",
        skills_os: "Operating Systems",
        skills_devops: "DevOps Tools",
        skills_database: "Databases & Other",
        btn_download_resume: "Download My Resume",

        // Work History Page
        work_title: "Work History",
        work_subtitle: "Over 15 years of IT experience",
        work_current: "Current",
        work_improved: "Improved skills:",

        // Netskrt
        work_netskrt_role: "LiveOps & Linux Administrator",
        work_netskrt_date: "May 2025 - Sep 2025 • 5 mos",
        work_netskrt_desc: `<ul style="margin-top: 1rem; padding-left: 1.2rem;">
<li>Installed and configured RAID on Linux servers, troubleshooting and resolving technical issues.</li>
<li>Provisioned Linux configurations using Ansible.</li>
<li>Configured UFW firewall, applied system updates, and tuned the system using the 'tuned' utility to enhance performance and security.</li>
<li>Planned and evaluated a file integrity monitoring solution with an inotify-based tool to strengthen system security.</li>
<li>Monitored Linux servers and CDN performance to ensure smooth video streaming, using Prometheus, Grafana, and Zabbix.</li>
<li>Optimized content delivery via CDN, improving video streaming performance and reducing latency.</li>
<li>Worked with Jira, JQL, and CQL to create and update documentation.</li>
<li>Configured and debugged networks using curl and TCPDUMP; maintained NetBox and supported DNS services.</li>
<li>Installed and configured Kubernetes; basic knowledge of Kubernetes concepts.</li>
</ul>`,

        // mThreat
        work_mthreat_role: "Cyber Security Research Engineer (Internship)",
        work_mthreat_date: "Jan 2025 - Feb 2025 • 2 mos",
        work_mthreat_desc: `Completed internship focusing on detecting internet anomalies and blocking bot networks.
• Investigated phishing emails and analyzed email headers.
• Analyzed and added IP addresses to reputation lists.
• Leveraged skills in a production environment to enhance user security.`,

        // TietoEVRY
        work_tieto_role: "DevOps Engineer",
        work_tieto_date: "Dec 2020 - Jul 2023 • 2 yrs 8 mos",
        work_tieto_desc: `Primary engineer supporting Tenable Security Center ("Tenable.sc") and 100+ Nessus scanners.
• Utilized Linux, Bash, Python, Jenkins, Gerrit, Git, Docker for automation.
• Monitoring & Visualization: Grafana (metrics), Loki (logs), checkmk.
• Automated Python scripts via Jenkins (e.g., scanner status notifications).
• Troubleshooting: OpenSSL, traceroute, mtr, curl.
• Managed work via Kanban and Jira Query Language.
• Developed scripts for SLA notifications to improve service quality.`,

        // AIT
        work_ait_role: "System Administrator & DevOps",
        work_ait_date: "Jun 2020 - Nov 2020 • 6 mos",
        work_ait_desc: `IT Support Specialist (Tier 1). Specialized in Linux & Windows (Server 2012/2016).
• Network configuration, Windows AD, GPO, DNS.
• Investigated and resolved security incidents following hacker breaches.
• Configured DNS (Bind) and supported WHOIS database.
• Deployed websites on cPanel using GitLab pipelines.
• Committed to upholding SLAs and ensuring high user satisfaction.`,

        // SoftServe
        work_softserve_role: "DevOps at SoftServe (Lviv, Ukraine)",
        work_softserve_date: "Mar 2018 - Mar 2020 • 2 yrs",
        work_softserve_desc: `Software Engineer at TIER 1 team(SOC).
Responsibility: support and monitoring of IT Infrastructure via RedHat, CentOS, Jenkins, Grafana, Git, Puppet, Nagios, Prometheus, Bash, Observium, BigPanda, Cisco UCS, and ESXi.

Key Duties & Achievements:
• Ensured timely operation of Red Hat and CentOS 7 VMs.
• Used Puppet for configuration and Ansible for orchestration.
• Followed ITIL practices (RFCs) and provided Root Cause Analysis (RCA).
• Significantly reduced abuse rate, removing IPs from blacklists.
• Developed automation scripts running in Docker/Jenkins.
• Visualized metrics with Grafana and Prometheus.
• Aggregated Nagios alerts using BigPanda; investigated incidents in Observium.
• Managed VMs on ESXi and Cisco UCS (vSphere).
• Managed Load Balancer (node removal/integration) for seamless operations.

Improved skills: Linux, Monitoring tools (Grafana, Nagios), scripting, Load Balancer.`,

        // Consulate
        work_consulate_role: "IT Support (SysAdmin) & Consultant",
        work_consulate_date: "Sep 2018 - Jan 2023 • 4 yrs 5 mos",
        work_consulate_desc: `Honorary Consulate of the Federal Republic of Germany in Lviv.
• IT Consultant: provided support for users.
• Configured Windows 10/11, O365, Enterprise Security.
• VM Ware ESXi, Firewall, IDS/IPS management.
• Skills: Network Security, TCP/IP, Git, CentOS.`,

        // Pavlenko & Partners
        work_pavlenko_role: "Network and System Administrator",
        work_pavlenko_date: "Jun 2012 - Jun 2017 • 5 yrs 1 mo",
        work_pavlenko_desc: `Experienced Full-Stack Support Specialist (Pavlenko & Partners).
• Managed client/server OS (Windows Server 2003/2008 R2, macOS).
• Network Administration: Mikrotik (RouterOS), Cisco Meraki (SD-WAN, wireless).
• Network Optimization (QoS) and Security (IDS/IPS).
• Deployed VDI and Remote Desktop Services (RDS).
• Administered Symantec Endpoint Security and SPAMHAUSE anti-spam solutions.
• Managed Active Directory, DHCP, Print Servers.
• Automation: PowerShell scripting, Group Policy Objects (GPO).
• Malware remediation using Linux-based tools (USB/PXE).`,
        awards_recognition: "Recognition",
        btn_view_pdf: "View PDF",

        // Violinist Page
        violinist_title: "Violinist",
        violinist_subtitle: "The musical side of my life",
        coming_soon: "Coming soon...",
        violinist_desc: "This page will be dedicated to my passion for music and playing the violin.",
        violinist_plans: "What will be on this page:",
        violinist_plan_1: "My musical journey",
        violinist_plan_2: "Performance videos",
        violinist_plan_3: "Audio recordings",
        violinist_plan_4: "Photo gallery",
        violin_isaca_title: "Isaca Hack The Halls (3rd Annual)",
        violin_isaca_desc: "Performance at the 3rd Annual Isaca Hack The Halls event.",

        // Projects Page
        projects_title: "Home Projects",
        projects_subtitle: "Personal tech projects and experiments",
        projects_desc: "This page will contain my personal technical projects and home lab experiments.",
        projects_categories: "Project Categories:",
        btn_view_github: "View on GitHub",

        // Volunteer Page
        volunteer_title: "Volunteering in BC",
        volunteer_subtitle: "Participation in the British Columbia tech community",
        volunteer_bsides_desc: "BSides Vancouver is a non-profit cybersecurity conference that brings together professionals, researchers and security enthusiasts.",
        volunteer_bsides_role: "As a volunteer, I helped organize the event and ensure a comfortable atmosphere for all participants.",
        volunteer_vanlug_desc: "Active member of the Linux user community in Vancouver. VanLUG brings together Linux and open source technology enthusiasts.",
        volunteer_other: "Other Activities",
        volunteer_other_desc: "This section will be supplemented with information about other volunteer activities and participation in the BC community.",
        volunteer_future: "Future Plans:",
        volunteer_certs: "Certificates & Thanks",
        btn_volunteer_cert: "Volunteer Certificate",
        volunteer_isaca_desc: "Volunteer at ISACA Vancouver Chapter — international IT audit and security organization.",
        volunteer_bsides_van_2025_desc: "Volunteer at BSides Vancouver 2025 — annual cybersecurity conference.",
        volunteer_bsides_vic_2025_desc: "Volunteer at BSides Victoria 2025 — cybersecurity conference.",
        volunteer_rocky_desc: "Localization of Rocky Linux documentation into Ukrainian language.",
        volunteer_google_desc: "Volunteer at Google I/O Extended Vancouver.",

        // Footer
        footer_rights: "All rights reserved."
    }
};

// Make translations available globally
window.translations = translations;
