/* ============================================
   OS Study — All JavaScript
   Data + Utils + App
   ============================================ */

(function() {
  'use strict';

// --- DATA ---

var syllabus = [
  {
    id: 'intro-os-functions',
    title: 'Operating System and Functions',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'repeated',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q7',questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.',marks:'5',type:'theory',isOR:false},{year:'2025-26',questionNumber:'Q7',questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Operating System (OS) computer ka sabse important software hai jo hardware aur user ke beech bridge ka kaam karta hai. Ye manage karta hai resources aur services.',
    definition: 'An Operating System is system software that acts interface between computer hardware and computer users. It manages hardware resources and provides a platform for application programs to run.',
    easyExplanation: 'Socho hotel manager jo sab coordinate karta hai. OS bhi computer ka manager hai - decide karta hai kaunsa process kab CPU lega, kitni memory kisko milegi.',
    realLifeExample: 'School principal jo manage karta hai kaunsa teacher kaunsi class lega. OS bhi resources manage karta hai.',
    keyPoints: ['OS hardware aur user ke beech interface hai','Resource management karta hai (CPU, Memory, I/O)','Functions: Process, Memory, File, I/O, Security Management','Bootstrap loader ke through sabse pehle load hota hai','Without OS, computer nahi chal sakta practically'],
    diagramDescription: 'User Apps -> System Calls -> OS -> Hardware',
    examPointOfView: [{year:'2024-25',question:'Q7: Discuss main functions/services of OS',isRepeated:true},{year:'2025-26',question:'Q7: Discuss main function or service provided by OS',isRepeated:true}],
    examAnswer: { threeMarks: 'OS ek system software hai jo hardware aur user ke beech interface hai. Functions: Process Management, Memory Management, File Management, I/O Management, Security.', fiveMarks: 'OS interface hai hardware aur users ke beech. (1) Process Management: create, schedule, terminate. (2) Memory Management: RAM allocate/deallocate. (3) File Management: organize files. (4) Device Management: I/O devices control. (5) Security: unauthorized access rokta hai.' },
    commonMistakes: ['OS ko sirf program mat bolo - ye system software hai','Functions ko confuse mat karo'],
    quickRevision: 'OS = Hardware + User interface. Functions: Process, Memory, File, Device, Security Mgmt. Repeated in 2024 AND 2025.',
    practiceQuestions: [{id:'intro-os-functions-pq1',level:'basic',question:'Operating System kya hai?',answer:'OS ek system software hai jo hardware aur user ke beech interface hai.',explanation:'Simplest definition'},{id:'intro-os-functions-pq2',level:'conceptual',question:'OS ke 5 main functions?',answer:'Process, Memory, File, Device, Security Management.',explanation:'Core functions'},{id:'intro-os-functions-pq3',level:'exam-pattern',question:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.',answer:'See five-mark answer above.',explanation:'Exact PYQ - repeated in both papers'},{id:'intro-os-functions-pq4',level:'conceptual',question:'Without OS computer kyun nahi chal sakta?',answer:'Hardware ke saath directly interact karna padta jo complex hai.',explanation:'OS abstraction provide karta hai'}],
  },
  {
    id: 'intro-classification',
    title: 'Classification of Operating Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'OS ko working style, user support, aur architecture ke basis pe classify kiya jata hai.',
    definition: 'Classification of Operating Systems refers to categorizing OS based on methodology, users, processing technique, and response time.',
    easyExplanation: 'Jaise cars alag purpose ke liye hain - sedan, SUV - usi tarah OS ke types hain.',
    realLifeExample: 'Fast food (Batch), Dine-in (Interactive), Fine dining (Time Sharing), Hospital emergency (Real-Time).',
    keyPoints: ['Batch OS - grouped jobs execute','Interactive OS - user directly interact','Time Sharing - multiple users','Real-Time OS - strict deadlines','Multiprocessor OS - multiple CPUs'],
    diagramDescription: 'OS Classification tree: Batch, Interactive, Time Sharing, Real-Time, Multiprocess, Multiuser, Multithreaded',
    examPointOfView: [],
    examAnswer: { threeMarks: 'OS types: Batch, Interactive, Time Sharing, Real-Time, Multiprocessor.', fiveMarks: '(1) Batch OS: Users nahi interact karte. Jobs grouped. Example: payroll. (2) Interactive: User commands deta hai. (3) Time Sharing: CPU time distribute hota hai. (4) Real-Time: Strict deadlines. (5) Multiprocessor: Multiple CPUs.' },
    commonMistakes: ['Multiprogramming ko Multitasking mat samjho','Real-Time = fast nahi hai, deadline-based hai'],
    quickRevision: 'OS types: Batch, Interactive, Time Sharing, Real-Time, Multiprocess, Multiuser, Multithreaded.',
    practiceQuestions: [{id:'intro-classification-pq1',level:'basic',question:'Batch OS kya hai?',answer:'Jobs grouped mein process hoti hain bina user interaction ke.',explanation:'Oldest type'},{id:'intro-classification-pq2',level:'conceptual',question:'Time Sharing aur Multiprogramming mein kya difference hai?',answer:'Multiprogramming = CPU utilization. Time Sharing = User response time.',explanation:'Alag goals'},{id:'intro-classification-pq3',level:'exam-pattern',question:'Classify different types of operating systems with examples.',answer:'See five-mark answer above.',explanation:'Classification question'}],
  },
  {
    id: 'intro-batch',
    title: 'Batch Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Batch Systems sabse purane OS hain jahan users directly interact nahi karte.',
    definition: 'A Batch Operating System groups similar jobs and executes them sequentially without user interaction.',
    easyExplanation: '50 assignments grade karne ho - ek pile mein rakh ke ek ek karke karte ho.',
    realLifeExample: 'Bank night transactions, payroll processing, utility bills.',
    keyPoints: ['User directly interact nahi karta','Similar jobs grouped','Better CPU utilization','Job queue mein wait','Operator batches arrange karta hai'],
    diagramDescription: 'User -> Job Deck -> Operator -> Batch Queue -> OS -> CPU -> Output',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Batch OS mein grouped jobs process hoti hain bina interaction ke. CPU utilization better hota hai.', fiveMarks: '(1) Users interact nahi karte. (2) Jobs cards/files se submit. (3) Operator groups banata hai. (4) OS batch execute karta hai. (5) CPU utilization badhta hai.' },
    commonMistakes: ['Batch OS = slow nahi hai'],
    quickRevision: 'Batch OS: grouped jobs, no user interaction, better CPU utilization.',
    practiceQuestions: [{id:'intro-batch-pq1',level:'basic',question:'Batch OS mein user interact kyun nahi karta?',answer:'Jobs predefined batch mein submit hoti hain.',explanation:'Design choice'},{id:'intro-batch-pq2',level:'conceptual',question:'Batch OS ke advantages?',answer:'Better CPU utilization, less idle time.',explanation:'Efficiency'}],
  },
  {
    id: 'intro-interactive',
    title: 'Interactive Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Interactive Systems mein user directly commands deta hai aur real-time response milta hai.',
    definition: 'An Interactive OS allows users to interact through commands or GUI, receiving immediate responses.',
    easyExplanation: 'Phone pe chat karte ho - message bhejte ho, instant reply milta hai.',
    realLifeExample: 'Windows, macOS, Linux desktop.',
    keyPoints: ['User directly commands','Immediate response','Time sharing use hoti hai','GUI aur CLI dono','Multiple users access'],
    diagramDescription: 'User <-> Terminal <-> OS <-> Hardware',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Interactive OS mein user directly commands deta hai aur real-time mein response milta hai.', fiveMarks: '(1) User commands/keyboard se interact. (2) Immediate response. (3) Time sharing for multiple users. (4) Example: Unix, Windows. (5) Advantages: User-friendly.' },
    commonMistakes: ['Interactive OS ko Time Sharing OS mat samjho - related hai par alag hai'],
    quickRevision: 'Interactive OS: direct user interaction, commands/GUI, immediate response, time sharing based.',
    practiceQuestions: [{id:'intro-interactive-pq1',level:'basic',question:'Interactive OS kya hai?',answer:'User directly commands de sakta hai.',explanation:'Direct communication'},{id:'intro-interactive-pq2',level:'conceptual',question:'Interactive OS kaise kaam karta hai?',answer:'Time sharing se CPU distribute hota hai.',explanation:'Key mechanism'}],
  },
  {
    id: 'intro-timesharing',
    title: 'Time Sharing Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q1',questionText:'Write short notes on Time Sharing System.',marks:'3',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Time Sharing System mein CPU ka time chhote slices mein distribute hota hai. Har user ko lagta hai CPU sirf uske liye hai.',
    definition: 'A Time-Sharing System uses CPU scheduling and multiprogramming to provide each user with a small portion of a shared computer.',
    easyExplanation: 'Teacher 30 bacchon ko padha raha hai - har ek ko 2 min. Itna fast ki sabko lagta hai sirf unhe padha raha hai.',
    realLifeExample: 'Unix pehla time sharing OS. Windows, Linux, macOS ab bhi use karte hain.',
    keyPoints: ['CPU time chhote slices (time quanta) mein distribute','Multiple users ek saath','Quick response time','Context switching hoti hai','Time quantum milliseconds mein','User ko lagta hai CPU sirf uske liye hai'],
    diagramDescription: 'CPU time divided: User1(2ms) -> User2(2ms) -> User3(2ms) -> User1...',
    examPointOfView: [{year:'2024-25',question:'Q1: Write short notes on Time Sharing System',isRepeated:false}],
    examAnswer: { threeMarks: 'CPU time chhote slices mein multiple users ko milta hai. Quick response milta hai.', fiveMarks: '(1) CPU scheduling aur multiprogramming use. (2) Time slices (quanta). (3) Har user ko fixed time. (4) Context switching. (5) Quick response. (6) Example: Unix. (7) Advantage: simultaneous users. (8) Disadvantage: switching overhead.' },
    commonMistakes: ['Time Sharing ko Multitasking mat samjho','Time quantum bada = poor response time'],
    quickRevision: 'Time Sharing: CPU chhote slices mein, multiple users, quick response, context switching. Asked in 2024.',
    practiceQuestions: [{id:'intro-timesharing-pq1',level:'basic',question:'Time Sharing kya hai?',answer:'CPU time chhote slices mein distribute hota hai.',explanation:'Quick response'},{id:'intro-timesharing-pq2',level:'conceptual',question:'Time quantum ka role?',answer:'CPU ka time kitna milega. Chhota = zyada switching. Bada = poor response.',explanation:'Balance important'},{id:'intro-timesharing-pq3',level:'exam-pattern',question:'Write short notes on Time Sharing System.',answer:'See five-mark answer above.',explanation:'2024 PYQ'}],
  },
  {
    id: 'intro-realtime',
    title: 'Real-Time Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q1',questionText:'Write short notes on Real-Time System.',marks:'3',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Real-Time Systems mein result fixed time deadline ke andar dena hota hai.',
    definition: 'A Real-Time OS guarantees critical operations complete within a specified time constraint.',
    easyExplanation: 'Hospital ventilator - 1 sec bhi band ho to danger. RTOS guarantee deta hai time pe kaam karega.',
    realLifeExample: 'Air traffic control, medical devices, ABS braking, missile guidance.',
    keyPoints: ['Fixed time deadline','Deadline miss = unacceptable','Hard Real-Time: strict','Soft Real-Time: tolerable','Response time guaranteed','Critical systems mein use'],
    diagramDescription: 'Event -> Processing -> Response within deadline. Miss = failure.',
    examPointOfView: [{year:'2024-25',question:'Q1: Write short notes on Real-Time System',isRepeated:false}],
    examAnswer: { threeMarks: 'RTOS guaranteed time ke andar response deta hai. Hard = strict. Soft = tolerable.', fiveMarks: '(1) Critical time constraints. (2) Hard: miss = failure. Medical, air traffic. (3) Soft: miss tolerable. Video streaming. (4) Guaranteed response. (5) Priority scheduling. (6) Minimal interrupt latency.' },
    commonMistakes: ['RTOS = fast nahi hai, time-guaranteed hai','Soft RT miss se crash nahi hota'],
    quickRevision: 'Real-Time OS: guaranteed response time. Hard (strict) vs Soft (flexible). Critical systems. Asked in 2024.',
    practiceQuestions: [{id:'intro-realtime-pq1',level:'basic',question:'Real-Time OS kya hai?',answer:'Fixed deadline ke andar guaranteed response.',explanation:'Deadline critical'},{id:'intro-realtime-pq2',level:'conceptual',question:'Hard vs Soft Real-Time?',answer:'Hard mein miss = failure. Soft mein tolerable.',explanation:'Strictness level'},{id:'intro-realtime-pq3',level:'exam-pattern',question:'Write short notes on Real-Time System.',answer:'See five-mark answer.',explanation:'2024 PYQ'}],
  },
  {
    id: 'intro-multiprocess',
    title: 'Multiprocess Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Multiprocess Systems mein do ya zyada CPUs parallel mein kaam karte hain.',
    definition: 'A Multiprocessor System has two or more processors sharing memory and I/O devices.',
    easyExplanation: 'Restaurant mein 1 chef = slow. 5 chefs = 5 orders ek saath.',
    realLifeExample: 'Servers, supercomputers, dual-core/quad-core processors.',
    keyPoints: ['Do ya zyada CPUs','Parallel processing','Speed badhti hai','Fault tolerance','Shared memory','SMP and AMP types'],
    diagramDescription: 'Multiple CPUs -> Common Bus -> Shared Memory + I/O',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Multiple CPUs parallel mein kaam karte hain. Speed aur reliability badhti hai.', fiveMarks: '(1) Multiple CPUs share memory. (2) Parallel processing. (3) SMP: sab equal. (4) AMP: master-slave. (5) Fault tolerance.' },
    commonMistakes: ['Multiprocessor aur Multicore mein antar samjho'],
    quickRevision: 'Multiprocess: multiple CPUs, parallel processing, SMP vs AMP.',
    practiceQuestions: [{id:'intro-multiprocess-pq1',level:'basic',question:'Multiprocess kya hai?',answer:'Multiple CPUs parallel mein kaam karte hain.',explanation:'Speed badhti hai'},{id:'intro-multiprocess-pq2',level:'conceptual',question:'SMP vs AMP?',answer:'SMP: sab equal. AMP: master-slave.',explanation:'Architecture alag'}],
  },
  {
    id: 'intro-multiuser',
    title: 'Multiuser Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Multiuser Systems mein multiple users ek hi computer access kar sakte hain.',
    definition: 'A Multiuser OS allows multiple users to access a single computer simultaneously.',
    easyExplanation: 'Library mein 50 students ek saath padh sakte hain.',
    realLifeExample: 'Unix/Linux mainframe, university computer labs.',
    keyPoints: ['Multiple users simultaneously','User accounts/permissions','Time sharing','Security important','Resource sharing'],
    diagramDescription: 'Multiple terminals -> Central computer',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Multiple users ek hi computer simultaneously access kar sakte hain.', fiveMarks: '(1) Multiple users. (2) Accounts/permissions. (3) Time sharing. (4) Security. (5) Example: Unix, Linux.' },
    commonMistakes: [],
    quickRevision: 'Multiuser: multiple users, time sharing, security, accounts.',
    practiceQuestions: [{id:'intro-multiuser-pq1',level:'basic',question:'Multiuser kya hai?',answer:'Multiple users ek computer use karein.',explanation:'Time sharing based'}],
  },
  {
    id: 'intro-multithreaded',
    title: 'Multithreaded Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Multithreaded Systems mein ek process ke andar multiple threads parallel execute ho sakte hain.',
    definition: 'A Multithreaded OS supports multiple threads within a single process for concurrent operations.',
    easyExplanation: 'Chef ek saath soup bana raha hai aur salad prepare kar raha hai - dono different threads hain.',
    realLifeExample: 'Web browser (load + type simultaneously), text editors.',
    keyPoints: ['Process ke andar multiple threads','Same memory share','Parallel execution','Context switching fast','Responsiveness badhti hai'],
    diagramDescription: 'Process box -> Thread1, Thread2, Thread3 executing in parallel',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Ek process ke andar multiple threads parallel execute ho sakte hain.', fiveMarks: '(1) Multiple threads in process. (2) Code, data, heap share. (3) Har thread ka apna stack. (4) Advantages: responsiveness, sharing, economy, scalability.' },
    commonMistakes: ['Thread aur Process mein antar samjho'],
    quickRevision: 'Multithreaded: multiple threads in process, shared memory, fast switching.',
    practiceQuestions: [{id:'intro-multithreaded-pq1',level:'basic',question:'Thread kya hai?',answer:'Lightweight process jo independently execute ho sakta hai.',explanation:'Lightweight'}],
  },
  {
    id: 'intro-os-structure',
    title: 'Operating System Structure',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'OS Structure batata hai ki OS andar se kaise organize hai.',
    definition: 'OS Structure defines how different OS components are organized and interact.',
    easyExplanation: 'Building ka structure - foundation, walls, roof. OS ka bhi structure hota hai.',
    realLifeExample: 'Linux=Monolithic, Windows=Hybrid, MINIX=Microkernel.',
    keyPoints: ['Monolithic: sab ek binary','Microkernel: sirf essential services','Layered: numbered layers','Hybrid: combination','Structure affects performance'],
    diagramDescription: 'Side by side: Monolithic vs Microkernel vs Layered',
    examPointOfView: [],
    examAnswer: { threeMarks: 'OS structure define karta hai components kaise organize hain.', fiveMarks: '(1) Monolithic: all in kernel space. Fast, hard to maintain. (2) Microkernel: essential only in kernel. More reliable. (3) Layered: numbered. (4) Hybrid: combination.' },
    commonMistakes: [],
    quickRevision: 'OS structures: Monolithic, Microkernel, Layered, Hybrid.',
    practiceQuestions: [{id:'intro-os-structure-pq1',level:'basic',question:'Monolithic vs Microkernel?',answer:'Monolithic: sab kernel mein. Microkernel: sirf essential.',explanation:'Size differ'},{id:'intro-os-structure-pq2',level:'exam-pattern',question:'Compare monolithic and microkernel structures.',answer:'See five-mark answer.',explanation:'Repeated PYQ concept'}],
  },
  {
    id: 'intro-system-components',
    title: 'System Components',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'OS ke different components milkar kaam karte hain.',
    definition: 'System Components handle specific tasks like process control, memory allocation, device management.',
    easyExplanation: 'Hospital mein doctor, nurse, pharmacist sab alag kaam karte hain.',
    realLifeExample: 'Process Manager, Memory Manager, File Manager, Device Manager.',
    keyPoints: ['Process Manager','Memory Manager','File Manager','Device Manager','Security Manager','Storage Manager'],
    diagramDescription: 'Central OS -> Process, Memory, File, Device, Security managers',
    examPointOfView: [],
    examAnswer: { threeMarks: 'OS components: Process, Memory, File, Device, Security managers.', fiveMarks: '(1) Process Manager. (2) Memory Manager. (3) File Manager. (4) Device Manager. (5) Security Manager.' },
    commonMistakes: [],
    quickRevision: 'OS components: Process, Memory, File, Device, Security managers.',
    practiceQuestions: [{id:'intro-system-components-pq1',level:'basic',question:'OS ke components?',answer:'Process, Memory, File, Device, Security managers.',explanation:'5 main'}],
  },
  {
    id: 'intro-os-services',
    title: 'Operating System Services',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'repeated',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q7',questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.',marks:'5',type:'theory',isOR:false},{year:'2025-26',questionNumber:'Q7',questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'OS services wo functions hain jo user programs ko provide hote hain.',
    definition: 'Operating System Services are functions provided to user programs for resource management and convenience.',
    easyExplanation: 'Hotel jo guest ko room service, laundry, restaurant deta hai. OS bhi services deta hai.',
    realLifeExample: 'Program execution, I/O operations, file manipulation, error detection, resource allocation.',
    keyPoints: ['Program execution','I/O operations','File manipulation','Error detection','Resource allocation','Protection'],
    diagramDescription: 'OS center -> services radiating: Process, Memory, File, I/O, Security, UI',
    examPointOfView: [{year:'2024-25',question:'Q7: Discuss main functions/services of OS',isRepeated:true},{year:'2025-26',question:'Q7: Discuss main function or service provided by OS',isRepeated:true}],
    examAnswer: { threeMarks: 'OS services: Program execution, I/O, File manipulation, Error detection, Resource allocation, Protection.', fiveMarks: '(1) Program Execution: load aur run. (2) I/O: read/write. (3) File: create, delete. (4) Error Detection. (5) Resource Allocation. (6) Accounting. (7) Protection. (8) Communication.' },
    commonMistakes: ['Services aur Functions similar hain par Services specific hain'],
    quickRevision: 'OS services: Execution, I/O, Files, Errors, Resources, Protection. REPEATED in both papers.',
    practiceQuestions: [{id:'intro-os-services-pq1',level:'exam-pattern',question:'Discuss the main function or service provided by an operating system.',answer:'See five-mark answer. EXACT repeated PYQ.',explanation:'Both 2024 and 2025'},{id:'intro-os-services-pq2',level:'basic',question:'OS 3 main services?',answer:'Program execution, File manipulation, I/O operations.',explanation:'Basic'}],
  },
  {
    id: 'intro-kernels',
    title: 'Kernels',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Kernel OS ka sabse core part hai jo hardware ke sabse close hai.',
    definition: 'The Kernel is the core component of an OS with complete control over the system.',
    easyExplanation: 'Kernel OS ka dil hai. Sab coordinate karta hai.',
    realLifeExample: 'Linux kernel, Windows NT kernel, macOS XNU kernel.',
    keyPoints: ['Core component','Hardware closest','Process scheduling, memory, drivers','System calls through kernel','Types: Monolithic, Microkernel, Hybrid'],
    diagramDescription: 'Concentric: Hardware -> Kernel -> System Calls -> User Apps',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Kernel OS ka core hai jo hardware control karta hai.', fiveMarks: '(1) OS ka important part. (2) Hardware closest. (3) Scheduling, memory, drivers. (4) System calls route. (5) Types: Monolithic, Microkernel, Hybrid.' },
    commonMistakes: ['Kernel ko OS mat bolo - kernel OS ka part hai'],
    quickRevision: 'Kernel = OS core. Hardware control, scheduling, memory. Monolithic vs Microkernel.',
    practiceQuestions: [{id:'intro-kernels-pq1',level:'basic',question:'Kernel kya hai?',answer:'OS ka core component.',explanation:'Dil hai OS ka'},{id:'intro-kernels-pq2',level:'conceptual',question:'Monolithic vs Microkernel mein kernel role?',answer:'Monolithic: sab kernel mein. Microkernel: sirf essential.',explanation:'Size difference'}],
  },
  {
    id: 'intro-monolithic-microkernel',
    title: 'Monolithic and Microkernel Systems',
    unit: 'introduction',
    unitName: 'Introduction',
    syllabusIndex: undefined,
    priority: 'very-high',
    pyqStatus: 'repeated',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q3',questionText:'Compare monolithic and microkernel structures and recommend the best approach.',marks:'5',type:'theory',isOR:false},{year:'2025-26',questionNumber:'Q3',questionText:'Compare Monolithic Architecture and Microkernel Architecture. Justify your answer.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Monolithic aur Microkernel OS ke do main structural approaches hain.',
    definition: 'Monolithic: all services in kernel space. Microkernel: only essential in kernel, rest in user space.',
    easyExplanation: 'Monolithic = ek badi factory. Microkernel = chhota hub + alag buildings.',
    realLifeExample: 'Linux=Monolithic, MINIX=Microkernel, Windows=Hybrid.',
    keyPoints: ['Monolithic: sab kernel mein, fast, hard to maintain','Microkernel: essential only in kernel, reliable, IPC overhead','Hybrid: combination','2024 aur 2025 dono mein aaya hai - VERY IMPORTANT','Modern trend: Hybrid approach'],
    diagramDescription: 'Monolithic: big kernel box. Microkernel: small kernel + user space services via IPC.',
    examPointOfView: [{year:'2024-25',question:'Q3: Compare monolithic and microkernel',isRepeated:true},{year:'2025-26',question:'Q3: Compare Monolithic and Microkernel Architecture',isRepeated:true}],
    examAnswer: { threeMarks: 'Monolithic: sab services kernel mein, fast. Microkernel: essential only, reliable, IPC overhead.', fiveMarks: 'Monolithic: (1) All in kernel space. (2) Direct calls - fast. (3) Single binary. (4) Hard to modify. (5) Example: Linux. Microkernel: (1) Essential only in kernel. (2) IPC messages - slower. (3) User space services. (4) Easy to modify. (5) More fault tolerant. (6) Example: MINIX, QNX. Recommendation: Hybrid for modern OS.' },
    commonMistakes: ['Microkernel = slow nahi hai - overhead hai par reliability zyada','Monolithic = outdated nahi hai','Hybrid is modern trend'],
    quickRevision: 'Monolithic: all in kernel, fast. Microkernel: essential only, reliable. Hybrid: modern. REPEATED in both papers.',
    practiceQuestions: [{id:'intro-monolithic-microkernel-pq1',level:'exam-pattern',question:'Compare monolithic and microkernel structures. Which is better?',answer:'See five-mark comparison above.',explanation:'BOTH papers - MUST PREPARE'},{id:'intro-monolithic-microkernel-pq2',level:'conceptual',question:'IPC overhead kya hota hai in microkernel?',answer:'Services user space mein hain, kernel se communicate karna padta hai.',explanation:'Trade-off'},{id:'intro-monolithic-microkernel-pq3',level:'basic',question:'Linux kis type ka structure hai?',answer:'Monolithic.',explanation:'Example'}],
  },
  {
    id: 'pm-process-concept',
    title: 'Process Concept',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Process Concept ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Process Concept is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Process Concept basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Process Concept is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Process Concept',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Process Concept is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Process Concept is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Process Concept: Important Process Management topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'pm-process-concept-pq1',level:'basic',question:'Process Concept kya hai?',answer:'Process Concept is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-process-concept-pq2',level:'conceptual',question:'Explain Process Concept with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-process-states',
    title: 'Process States',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'very-high',
    pyqStatus: 'repeated',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Process States ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Process States is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Process States basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Process States is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Process States',
    examPointOfView: [{year:'Both',question:'Asked in multiple years',isRepeated:true}],
    examAnswer: { threeMarks: 'Process States is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Process States is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Process States: Important Process Management topic. PyqStatus: repeated. Priority: very-high.',
    practiceQuestions: [{id:'pm-process-states-pq1',level:'basic',question:'Process States kya hai?',answer:'Process States is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-process-states-pq2',level:'conceptual',question:'Explain Process States with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-process-sync',
    title: 'Process Synchronization',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Process Synchronization ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Process Synchronization is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Process Synchronization basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Process Synchronization is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Process Synchronization',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Process Synchronization is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Process Synchronization is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Process Synchronization: Important Process Management topic. PyqStatus: asked-2024. Priority: high.',
    practiceQuestions: [{id:'pm-process-sync-pq1',level:'basic',question:'Process Synchronization kya hai?',answer:'Process Synchronization is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-process-sync-pq2',level:'conceptual',question:'Explain Process Synchronization with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-critical-section',
    title: 'Critical Section',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Critical Section ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Critical Section is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Critical Section basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Critical Section is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Critical Section',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Critical Section is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Critical Section is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Critical Section: Important Process Management topic. PyqStatus: asked-2024. Priority: high.',
    practiceQuestions: [{id:'pm-critical-section-pq1',level:'basic',question:'Critical Section kya hai?',answer:'Critical Section is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-critical-section-pq2',level:'conceptual',question:'Explain Critical Section with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-mutual-exclusion',
    title: 'Mutual Exclusion',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Mutual Exclusion ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Mutual Exclusion is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Mutual Exclusion basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Mutual Exclusion is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Mutual Exclusion',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Mutual Exclusion is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Mutual Exclusion is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Mutual Exclusion: Important Process Management topic. PyqStatus: asked-2024. Priority: high.',
    practiceQuestions: [{id:'pm-mutual-exclusion-pq1',level:'basic',question:'Mutual Exclusion kya hai?',answer:'Mutual Exclusion is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-mutual-exclusion-pq2',level:'conceptual',question:'Explain Mutual Exclusion with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-classical-sync',
    title: 'Classical Synchronization Problems',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Classical Synchronization Problems ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Classical Synchronization Problems is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Classical Synchronization Problems basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Classical Synchronization Problems is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Classical Synchronization Problems',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Classical Synchronization Problems is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Classical Synchronization Problems is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Classical Synchronization Problems: Important Process Management topic. PyqStatus: asked-2024. Priority: high.',
    practiceQuestions: [{id:'pm-classical-sync-pq1',level:'basic',question:'Classical Synchronization Problems kya hai?',answer:'Classical Synchronization Problems is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-classical-sync-pq2',level:'conceptual',question:'Explain Classical Synchronization Problems with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-process-scheduling',
    title: 'Process Scheduling',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Process Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Process Scheduling is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Process Scheduling basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Process Scheduling is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Process Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Process Scheduling is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Process Scheduling is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Process Scheduling: Important Process Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'pm-process-scheduling-pq1',level:'basic',question:'Process Scheduling kya hai?',answer:'Process Scheduling is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-process-scheduling-pq2',level:'conceptual',question:'Explain Process Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-process-transitions',
    title: 'Process Transitions',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'very-high',
    pyqStatus: 'repeated',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Process Transitions ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Process Transitions is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Process Transitions basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Process Transitions is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Process Transitions',
    examPointOfView: [{year:'Both',question:'Asked in multiple years',isRepeated:true}],
    examAnswer: { threeMarks: 'Process Transitions is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Process Transitions is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Process Transitions: Important Process Management topic. PyqStatus: repeated. Priority: very-high.',
    practiceQuestions: [{id:'pm-process-transitions-pq1',level:'basic',question:'Process Transitions kya hai?',answer:'Process Transitions is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-process-transitions-pq2',level:'conceptual',question:'Explain Process Transitions with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-scheduling-algorithms',
    title: 'Scheduling Algorithms',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Scheduling Algorithms ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Scheduling Algorithms is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Scheduling Algorithms basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Scheduling Algorithms is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Scheduling Algorithms',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Scheduling Algorithms is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Scheduling Algorithms is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Scheduling Algorithms: Important Process Management topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'pm-scheduling-algorithms-pq1',level:'basic',question:'Scheduling Algorithms kya hai?',answer:'Scheduling Algorithms is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-scheduling-algorithms-pq2',level:'conceptual',question:'Explain Scheduling Algorithms with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-ipc',
    title: 'Inter-process Communication',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2025',
    pyqAppearances: [{year:'2025-26',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Inter-process Communication ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Inter-process Communication is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Inter-process Communication basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Inter-process Communication is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Inter-process Communication',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Inter-process Communication is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Inter-process Communication is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Inter-process Communication: Important Process Management topic. PyqStatus: asked-2025. Priority: high.',
    practiceQuestions: [{id:'pm-ipc-pq1',level:'basic',question:'Inter-process Communication kya hai?',answer:'Inter-process Communication is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-ipc-pq2',level:'conceptual',question:'Explain Inter-process Communication with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-threads',
    title: 'Threads and their Management',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Threads and their Management ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Threads and their Management is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Threads and their Management basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Threads and their Management is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Threads and their Management',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Threads and their Management is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Threads and their Management is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Threads and their Management: Important Process Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'pm-threads-pq1',level:'basic',question:'Threads and their Management kya hai?',answer:'Threads and their Management is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-threads-pq2',level:'conceptual',question:'Explain Threads and their Management with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'pm-security',
    title: 'Security Issues',
    unit: 'process-management',
    unitName: 'Process Management',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Security Issues ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Security Issues is a fundamental concept in operating systems that deals with process management.',
    easyExplanation: 'Ye topic samajhna simple hai - Security Issues basically process management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Security Issues is important for understanding Process Management','This concept appears in the syllabus under Process Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Security Issues',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Security Issues is an important concept in Process Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Security Issues is a core concept in Process Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Security Issues: Important Process Management topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'pm-security-pq1',level:'basic',question:'Security Issues kya hai?',answer:'Security Issues is a concept related to Process Management.',explanation:'Basic understanding'},{id:'pm-security-pq2',level:'conceptual',question:'Explain Security Issues with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-scheduling-concepts',
    title: 'Scheduling Concepts',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-once',
    pyqAppearances: [{year:'2025-26',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Scheduling Concepts ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Scheduling Concepts is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Scheduling Concepts basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Scheduling Concepts is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Scheduling Concepts',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Scheduling Concepts is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Scheduling Concepts is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Scheduling Concepts: Important CPU Scheduling topic. PyqStatus: asked-once. Priority: high.',
    practiceQuestions: [{id:'cpu-scheduling-concepts-pq1',level:'basic',question:'Scheduling Concepts kya hai?',answer:'Scheduling Concepts is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-scheduling-concepts-pq2',level:'conceptual',question:'Explain Scheduling Concepts with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-techniques',
    title: 'Techniques of Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Techniques of Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Techniques of Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Techniques of Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Techniques of Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Techniques of Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Techniques of Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Techniques of Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Techniques of Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'cpu-techniques-pq1',level:'basic',question:'Techniques of Scheduling kya hai?',answer:'Techniques of Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-techniques-pq2',level:'conceptual',question:'Explain Techniques of Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-preemptive-nonpreemptive',
    title: 'Preemptive and Non-Preemptive Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Preemptive and Non-Preemptive Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Preemptive and Non-Preemptive Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Preemptive and Non-Preemptive Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Preemptive and Non-Preemptive Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Preemptive and Non-Preemptive Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Preemptive and Non-Preemptive Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Preemptive and Non-Preemptive Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Preemptive and Non-Preemptive Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'cpu-preemptive-nonpreemptive-pq1',level:'basic',question:'Preemptive and Non-Preemptive Scheduling kya hai?',answer:'Preemptive and Non-Preemptive Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-preemptive-nonpreemptive-pq2',level:'conceptual',question:'Explain Preemptive and Non-Preemptive Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-fcfs',
    title: 'First-Come-First-Serve (FCFS)',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'First-Come-First-Serve (FCFS) ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'First-Come-First-Serve (FCFS) is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - First-Come-First-Serve (FCFS) basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['First-Come-First-Serve (FCFS) is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for First-Come-First-Serve (FCFS)',
    examPointOfView: [],
    examAnswer: { threeMarks: 'First-Come-First-Serve (FCFS) is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'First-Come-First-Serve (FCFS) is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'First-Come-First-Serve (FCFS): Important CPU Scheduling topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'cpu-fcfs-pq1',level:'basic',question:'First-Come-First-Serve (FCFS) kya hai?',answer:'First-Come-First-Serve (FCFS) is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-fcfs-pq2',level:'conceptual',question:'Explain First-Come-First-Serve (FCFS) with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-sjn',
    title: 'Shortest Job Next (SJN)',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2025',
    pyqAppearances: [{year:'2025-26',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Shortest Job Next (SJN) ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Shortest Job Next (SJN) is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Shortest Job Next (SJN) basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Shortest Job Next (SJN) is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Shortest Job Next (SJN)',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Shortest Job Next (SJN) is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Shortest Job Next (SJN) is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Shortest Job Next (SJN): Important CPU Scheduling topic. PyqStatus: asked-2025. Priority: high.',
    practiceQuestions: [{id:'cpu-sjn-pq1',level:'basic',question:'Shortest Job Next (SJN) kya hai?',answer:'Shortest Job Next (SJN) is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-sjn-pq2',level:'conceptual',question:'Explain Shortest Job Next (SJN) with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-hrrn',
    title: 'Highest Response Ratio Next (HRRN)',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Highest Response Ratio Next (HRRN) ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Highest Response Ratio Next (HRRN) is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Highest Response Ratio Next (HRRN) basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Highest Response Ratio Next (HRRN) is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Highest Response Ratio Next (HRRN)',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Highest Response Ratio Next (HRRN) is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Highest Response Ratio Next (HRRN) is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Highest Response Ratio Next (HRRN): Important CPU Scheduling topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'cpu-hrrn-pq1',level:'basic',question:'Highest Response Ratio Next (HRRN) kya hai?',answer:'Highest Response Ratio Next (HRRN) is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-hrrn-pq2',level:'conceptual',question:'Explain Highest Response Ratio Next (HRRN) with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-roundrobin',
    title: 'Round Robin',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'asked-2024',
    pyqAppearances: [{year:'2024-25',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Round Robin ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Round Robin is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Round Robin basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Round Robin is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Round Robin',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Round Robin is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Round Robin is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Round Robin: Important CPU Scheduling topic. PyqStatus: asked-2024. Priority: high.',
    practiceQuestions: [{id:'cpu-roundrobin-pq1',level:'basic',question:'Round Robin kya hai?',answer:'Round Robin is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-roundrobin-pq2',level:'conceptual',question:'Explain Round Robin with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-lcn',
    title: 'Least Circle Next',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Least Circle Next ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Least Circle Next is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Least Circle Next basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Least Circle Next is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Least Circle Next',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Least Circle Next is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Least Circle Next is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Least Circle Next: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'cpu-lcn-pq1',level:'basic',question:'Least Circle Next kya hai?',answer:'Least Circle Next is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-lcn-pq2',level:'conceptual',question:'Explain Least Circle Next with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-sttg',
    title: 'Shortest Time to Go',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Shortest Time to Go ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Shortest Time to Go is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Shortest Time to Go basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Shortest Time to Go is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Shortest Time to Go',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Shortest Time to Go is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Shortest Time to Go is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Shortest Time to Go: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'cpu-sttg-pq1',level:'basic',question:'Shortest Time to Go kya hai?',answer:'Shortest Time to Go is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-sttg-pq2',level:'conceptual',question:'Explain Shortest Time to Go with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-long-scheduling',
    title: 'Long Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Long Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Long Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Long Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Long Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Long Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Long Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Long Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Long Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'cpu-long-scheduling-pq1',level:'basic',question:'Long Scheduling kya hai?',answer:'Long Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-long-scheduling-pq2',level:'conceptual',question:'Explain Long Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-medium-scheduling',
    title: 'Medium Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Medium Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Medium Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Medium Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Medium Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Medium Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Medium Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Medium Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Medium Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'cpu-medium-scheduling-pq1',level:'basic',question:'Medium Scheduling kya hai?',answer:'Medium Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-medium-scheduling-pq2',level:'conceptual',question:'Explain Medium Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-short-scheduling',
    title: 'Short Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Short Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Short Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Short Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Short Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Short Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Short Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Short Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Short Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'cpu-short-scheduling-pq1',level:'basic',question:'Short Scheduling kya hai?',answer:'Short Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-short-scheduling-pq2',level:'conceptual',question:'Explain Short Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'cpu-priority',
    title: 'Priority Scheduling',
    unit: 'cpu-scheduling',
    unitName: 'CPU Scheduling',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Priority Scheduling ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Priority Scheduling is a fundamental concept in operating systems that deals with cpu scheduling.',
    easyExplanation: 'Ye topic samajhna simple hai - Priority Scheduling basically cpu scheduling se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Priority Scheduling is important for understanding CPU Scheduling','This concept appears in the syllabus under CPU Scheduling','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Priority Scheduling',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Priority Scheduling is an important concept in CPU Scheduling. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Priority Scheduling is a core concept in CPU Scheduling. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Priority Scheduling: Important CPU Scheduling topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'cpu-priority-pq1',level:'basic',question:'Priority Scheduling kya hai?',answer:'Priority Scheduling is a concept related to CPU Scheduling.',explanation:'Basic understanding'},{id:'cpu-priority-pq2',level:'conceptual',question:'Explain Priority Scheduling with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'dl-system-model',
    title: 'System Model',
    unit: 'deadlock',
    unitName: 'Deadlock',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'System Model ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'System Model is a fundamental concept in operating systems that deals with deadlock.',
    easyExplanation: 'Ye topic samajhna simple hai - System Model basically deadlock se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['System Model is important for understanding Deadlock','This concept appears in the syllabus under Deadlock','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for System Model',
    examPointOfView: [],
    examAnswer: { threeMarks: 'System Model is an important concept in Deadlock. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'System Model is a core concept in Deadlock. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'System Model: Important Deadlock topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'dl-system-model-pq1',level:'basic',question:'System Model kya hai?',answer:'System Model is a concept related to Deadlock.',explanation:'Basic understanding'},{id:'dl-system-model-pq2',level:'conceptual',question:'Explain System Model with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'dl-characterization',
    title: 'Deadlock Characterization',
    unit: 'deadlock',
    unitName: 'Deadlock',
    syllabusIndex: undefined,
    priority: 'very-high',
    pyqStatus: 'asked-2025',
    pyqAppearances: [{year:'2025-26',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Deadlock Characterization ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Deadlock Characterization is a fundamental concept in operating systems that deals with deadlock.',
    easyExplanation: 'Ye topic samajhna simple hai - Deadlock Characterization basically deadlock se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Deadlock Characterization is important for understanding Deadlock','This concept appears in the syllabus under Deadlock','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Deadlock Characterization',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Deadlock Characterization is an important concept in Deadlock. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Deadlock Characterization is a core concept in Deadlock. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Deadlock Characterization: Important Deadlock topic. PyqStatus: asked-2025. Priority: very-high.',
    practiceQuestions: [{id:'dl-characterization-pq1',level:'basic',question:'Deadlock Characterization kya hai?',answer:'Deadlock Characterization is a concept related to Deadlock.',explanation:'Basic understanding'},{id:'dl-characterization-pq2',level:'conceptual',question:'Explain Deadlock Characterization with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'dl-prevention',
    title: 'Deadlock Prevention',
    unit: 'deadlock',
    unitName: 'Deadlock',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Deadlock Prevention ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Deadlock Prevention is a fundamental concept in operating systems that deals with deadlock.',
    easyExplanation: 'Ye topic samajhna simple hai - Deadlock Prevention basically deadlock se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Deadlock Prevention is important for understanding Deadlock','This concept appears in the syllabus under Deadlock','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Deadlock Prevention',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Deadlock Prevention is an important concept in Deadlock. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Deadlock Prevention is a core concept in Deadlock. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Deadlock Prevention: Important Deadlock topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'dl-prevention-pq1',level:'basic',question:'Deadlock Prevention kya hai?',answer:'Deadlock Prevention is a concept related to Deadlock.',explanation:'Basic understanding'},{id:'dl-prevention-pq2',level:'conceptual',question:'Explain Deadlock Prevention with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'dl-avoidance-detection',
    title: 'Deadlock Avoidance and Detection',
    unit: 'deadlock',
    unitName: 'Deadlock',
    syllabusIndex: undefined,
    priority: 'very-high',
    pyqStatus: 'asked-2025',
    pyqAppearances: [{year:'2025-26',questionNumber:'Q-RE',questionText:'Related question from previous year paper.',marks:'5',type:'theory',isOR:false}],
    isCompleted: false,
    overview: 'Deadlock Avoidance and Detection ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Deadlock Avoidance and Detection is a fundamental concept in operating systems that deals with deadlock.',
    easyExplanation: 'Ye topic samajhna simple hai - Deadlock Avoidance and Detection basically deadlock se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Deadlock Avoidance and Detection is important for understanding Deadlock','This concept appears in the syllabus under Deadlock','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Deadlock Avoidance and Detection',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Deadlock Avoidance and Detection is an important concept in Deadlock. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Deadlock Avoidance and Detection is a core concept in Deadlock. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Deadlock Avoidance and Detection: Important Deadlock topic. PyqStatus: asked-2025. Priority: very-high.',
    practiceQuestions: [{id:'dl-avoidance-detection-pq1',level:'basic',question:'Deadlock Avoidance and Detection kya hai?',answer:'Deadlock Avoidance and Detection is a concept related to Deadlock.',explanation:'Basic understanding'},{id:'dl-avoidance-detection-pq2',level:'conceptual',question:'Explain Deadlock Avoidance and Detection with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'dl-recovery',
    title: 'Recovery from Deadlock',
    unit: 'deadlock',
    unitName: 'Deadlock',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Recovery from Deadlock ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Recovery from Deadlock is a fundamental concept in operating systems that deals with deadlock.',
    easyExplanation: 'Ye topic samajhna simple hai - Recovery from Deadlock basically deadlock se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Recovery from Deadlock is important for understanding Deadlock','This concept appears in the syllabus under Deadlock','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Recovery from Deadlock',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Recovery from Deadlock is an important concept in Deadlock. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Recovery from Deadlock is a core concept in Deadlock. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Recovery from Deadlock: Important Deadlock topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'dl-recovery-pq1',level:'basic',question:'Recovery from Deadlock kya hai?',answer:'Recovery from Deadlock is a concept related to Deadlock.',explanation:'Basic understanding'},{id:'dl-recovery-pq2',level:'conceptual',question:'Explain Recovery from Deadlock with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-allocation',
    title: 'Memory Allocation',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Memory Allocation ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Memory Allocation is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Memory Allocation basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Memory Allocation is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Memory Allocation',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Memory Allocation is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Memory Allocation is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Memory Allocation: Important Memory Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'mm-allocation-pq1',level:'basic',question:'Memory Allocation kya hai?',answer:'Memory Allocation is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-allocation-pq2',level:'conceptual',question:'Explain Memory Allocation with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-relocation',
    title: 'Relocation',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Relocation ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Relocation is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Relocation basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Relocation is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Relocation',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Relocation is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Relocation is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Relocation: Important Memory Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'mm-relocation-pq1',level:'basic',question:'Relocation kya hai?',answer:'Relocation is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-relocation-pq2',level:'conceptual',question:'Explain Relocation with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-protection',
    title: 'Protection',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Protection ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Protection is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Protection basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Protection is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Protection',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Protection is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Protection is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Protection: Important Memory Management topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'mm-protection-pq1',level:'basic',question:'Protection kya hai?',answer:'Protection is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-protection-pq2',level:'conceptual',question:'Explain Protection with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-sharing',
    title: 'Sharing',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'low',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Sharing ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Sharing is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Sharing basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Sharing is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Sharing',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Sharing is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Sharing is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Sharing: Important Memory Management topic. PyqStatus: not-asked. Priority: low.',
    practiceQuestions: [{id:'mm-sharing-pq1',level:'basic',question:'Sharing kya hai?',answer:'Sharing is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-sharing-pq2',level:'conceptual',question:'Explain Sharing with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-paging',
    title: 'Paging',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Paging ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Paging is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Paging basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Paging is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Paging',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Paging is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Paging is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Paging: Important Memory Management topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'mm-paging-pq1',level:'basic',question:'Paging kya hai?',answer:'Paging is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-paging-pq2',level:'conceptual',question:'Explain Paging with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-segmentation',
    title: 'Segmentation',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Segmentation ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Segmentation is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Segmentation basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Segmentation is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Segmentation',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Segmentation is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Segmentation is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Segmentation: Important Memory Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'mm-segmentation-pq1',level:'basic',question:'Segmentation kya hai?',answer:'Segmentation is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-segmentation-pq2',level:'conceptual',question:'Explain Segmentation with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-virtual-memory',
    title: 'Virtual Memory',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Virtual Memory ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Virtual Memory is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Virtual Memory basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Virtual Memory is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Virtual Memory',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Virtual Memory is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Virtual Memory is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Virtual Memory: Important Memory Management topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'mm-virtual-memory-pq1',level:'basic',question:'Virtual Memory kya hai?',answer:'Virtual Memory is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-virtual-memory-pq2',level:'conceptual',question:'Explain Virtual Memory with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-demand-paging',
    title: 'Demand Paging',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Demand Paging ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Demand Paging is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Demand Paging basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Demand Paging is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Demand Paging',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Demand Paging is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Demand Paging is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Demand Paging: Important Memory Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'mm-demand-paging-pq1',level:'basic',question:'Demand Paging kya hai?',answer:'Demand Paging is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-demand-paging-pq2',level:'conceptual',question:'Explain Demand Paging with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-page-replacement',
    title: 'Page Replacement Algorithms',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'high',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Page Replacement Algorithms ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Page Replacement Algorithms is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Page Replacement Algorithms basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Page Replacement Algorithms is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Page Replacement Algorithms',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Page Replacement Algorithms is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Page Replacement Algorithms is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Page Replacement Algorithms: Important Memory Management topic. PyqStatus: not-asked. Priority: high.',
    practiceQuestions: [{id:'mm-page-replacement-pq1',level:'basic',question:'Page Replacement Algorithms kya hai?',answer:'Page Replacement Algorithms is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-page-replacement-pq2',level:'conceptual',question:'Explain Page Replacement Algorithms with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
  {
    id: 'mm-thrashing',
    title: 'Thrashing',
    unit: 'memory-management',
    unitName: 'Memory Management',
    syllabusIndex: undefined,
    priority: 'medium',
    pyqStatus: 'not-asked',
    pyqAppearances: [],
    isCompleted: false,
    overview: 'Thrashing ek important topic hai Operating Systems mein. Isko samajhna exam ke liye bahut zaroori hai.',
    definition: 'Thrashing is a fundamental concept in operating systems that deals with memory management.',
    easyExplanation: 'Ye topic samajhna simple hai - Thrashing basically memory management se related hai. Isko exam ke liye achhe se padho.',
    realLifeExample: 'Real-world applications mein ye concept bahut jagah use hota hai.',
    keyPoints: ['Thrashing is important for understanding Memory Management','This concept appears in the syllabus under Memory Management','Understanding this helps with related topics','This is a foundation for advanced concepts'],
    diagramDescription: 'Standard diagram for Thrashing',
    examPointOfView: [],
    examAnswer: { threeMarks: 'Thrashing is an important concept in Memory Management. It deals with the fundamental aspects of operating system design and functionality.', fiveMarks: 'Thrashing is a core concept in Memory Management. Key points: (1) It is fundamental to OS design. (2) Understanding it helps with related topics. (3) It appears in the syllabus separate topic. (4) Important for exam preparation. (5) Connects to other concepts in the unit.' },
    commonMistakes: ['Isko lightly mat lo - exam mein aa sakta hai','Related topics ke saath confuse mat karo'],
    quickRevision: 'Thrashing: Important Memory Management topic. PyqStatus: not-asked. Priority: medium.',
    practiceQuestions: [{id:'mm-thrashing-pq1',level:'basic',question:'Thrashing kya hai?',answer:'Thrashing is a concept related to Memory Management.',explanation:'Basic understanding'},{id:'mm-thrashing-pq2',level:'conceptual',question:'Explain Thrashing with example.',answer:'See overview and easy explanation sections.',explanation:'Conceptual clarity'}],
  },
];

var syllabus;



var pyqs = [
  { id:'pyq-2024-q1', year:'2024-25', section:'A', questionNumber:'Q1', questionText:'Write short notes on: (1) Time Sharing System (2) Real-Time System (3) Multi Programming System', marks:'3', type:'theory', relatedTopics:['intro-timesharing','intro-realtime','intro-classification'], difficulty:'easy', isOR:false, priority:'high' },
  { id:'pyq-2024-q2', year:'2024-25', section:'A', questionNumber:'Q2', questionText:'Explain the 5-state process state diagram, focusing on the role of schedulers in managing transitions.', marks:'5', type:'theory', relatedTopics:['pm-process-states','pm-process-transitions'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2024-q3', year:'2024-25', section:'A', questionNumber:'Q3', questionText:'Compare monolithic and microkernel structures and recommend the best approach for the company needs.', marks:'5', type:'theory', relatedTopics:['intro-monolithic-microkernel','intro-os-structure','intro-kernels'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2024-q4', year:'2024-25', section:'A', questionNumber:'Q4', questionText:'How would you implement semaphores to ensure proper synchronization? Describe wait() and signal() functions.', marks:'5', type:'theory', relatedTopics:['pm-process-sync','pm-critical-section','pm-mutual-exclusion'], difficulty:'medium', isOR:false, priority:'high' },
  { id:'pyq-2024-q5', year:'2024-25', section:'A', questionNumber:'Q5', questionText:'Implement the solution for the Bounded Buffer Producer Consumer problem using semaphores, ensuring no race conditions.', marks:'5', type:'theory', relatedTopics:['pm-classical-sync'], difficulty:'hard', isOR:false, priority:'high' },
  { id:'pyq-2024-q6', year:'2024-25', section:'B', questionNumber:'Q6', questionText:'CPU Scheduling Numerical: Round Robin with Time Quantum 2. Processes: P1(0,5), P2(1,3), P3(2,1), P4(3,2), P5(4,3). Calculate Average Waiting Time and Average Turnaround Time.', marks:'5', type:'numerical', relatedTopics:['cpu-roundrobin','cpu-scheduling-concepts'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2024-q7', year:'2024-25', section:'B', questionNumber:'Q7', questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.', marks:'5', type:'theory', relatedTopics:['intro-os-services','intro-os-functions'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2024-q8', year:'2024-25', section:'B', questionNumber:'Q8', questionText:'Explain how Peterson solution can be implemented for mutual exclusion. How it ensures only one thread enters the critical section. Limitations in modern multi-threaded environments.', marks:'5', type:'theory', relatedTopics:['pm-mutual-exclusion','pm-critical-section'], difficulty:'hard', isOR:false, priority:'high' },
  { id:'pyq-2025-q1', year:'2025-26', section:'A', questionNumber:'Q1', questionText:'Explain the difference between Multiprogramming and Multitasking.', marks:'3', type:'theory', relatedTopics:['intro-classification'], difficulty:'easy', isOR:false, priority:'medium' },
  { id:'pyq-2025-q2', year:'2025-26', section:'A', questionNumber:'Q2', questionText:'Create a process state diagram and provide a detailed explanation of each state.', marks:'5', type:'theory', relatedTopics:['pm-process-states','pm-process-transitions'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q3', year:'2025-26', section:'A', questionNumber:'Q3', questionText:'Which architecture is better suited for modern operating system design? Compare Monolithic and Microkernel Architecture.', marks:'5', type:'theory', relatedTopics:['intro-monolithic-microkernel','intro-os-structure'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q4', year:'2025-26', section:'A', questionNumber:'Q4', questionText:'Identify and describe the four conditions required for a deadlock situation to occur.', marks:'5', type:'theory', relatedTopics:['dl-characterization'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q5', year:'2025-26', section:'A', questionNumber:'Q5', questionText:'Analyze the role of system calls in interacting with the operating system and explain any three system calls.', marks:'5', type:'theory', relatedTopics:['pm-ipc'], difficulty:'medium', isOR:false, priority:'high' },
  { id:'pyq-2025-q6', year:'2025-26', section:'B', questionNumber:'Q6', questionText:'CPU Scheduling Numerical: SRTF. Processes: P1(0,8), P2(1,4), P3(2,9), P4(3,5). Calculate Average Waiting Time and Average Turnaround Time.', marks:'5', type:'numerical', relatedTopics:['cpu-sjn'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q7', year:'2025-26', section:'B', questionNumber:'Q7', questionText:'Discuss the main function or service provided by an operating system and analyze how each contributes to the overall operation of a computer system.', marks:'5', type:'theory', relatedTopics:['intro-os-services','intro-os-functions'], difficulty:'medium', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q8a', year:'2025-26', section:'B', questionNumber:'Q8', questionText:'Banker Algorithm: Given Allocation, Maximum, and Available matrices, find Need Matrix, Safe State, and Safe Sequence.', marks:'5', type:'numerical', relatedTopics:['dl-avoidance-detection'], difficulty:'hard', isOR:false, priority:'very-high' },
  { id:'pyq-2025-q8b', year:'2025-26', section:'B', questionNumber:'Q8(OR)', questionText:'Write and explain an algorithm to solve the Dining Philosopher Problem using semaphores.', marks:'5', type:'theory', relatedTopics:['pm-classical-sync'], difficulty:'hard', isOR:true, priority:'high' },
];

var pyqs;


var predictions = [
  {
    id: 'pred-1',
    question: 'Explain process states and the 5-state process state diagram with scheduler roles.',
    probability: 'very-high',
    reasoning: ['Asked in BOTH 2024-25 and 2025-26 papers exactly','Core concept of Process Management','Fundamental topic that connects to scheduling and transitions'],
    relatedTopics: ['pm-process-states', 'pm-process-transitions']
  },
  {
    id: 'pred-2',
    question: 'Compare Monolithic and Microkernel OS structures.',
    probability: 'very-high',
    reasoning: ['Asked in BOTH papers with slightly different wording','Core OS architecture concept','Tests deep understanding of OS design'],
    relatedTopics: ['intro-monolithic-microkernel', 'intro-os-structure', 'intro-kernels']
  },
  {
    id: 'pred-3',
    question: 'Discuss the main functions/services of an operating system.',
    probability: 'very-high',
    reasoning: ['Asked in BOTH papers with IDENTICAL wording','Fundamental intro topic','Tests breadth of OS knowledge'],
    relatedTopics: ['intro-os-services', 'intro-os-functions']
  },
  {
    id: 'pred-4',
    question: 'CPU Scheduling numerical problem (any algorithm).',
    probability: 'very-high',
    reasoning: ['Round Robin numerical in 2024, SRTF numerical in 2025','Algorithm changed but concept repeated','Practice FCFS, SJF, Round Robin, Priority scheduling'],
    relatedTopics: ['cpu-roundrobin', 'cpu-sjn', 'cpu-fcfs', 'cpu-priority', 'cpu-scheduling-concepts']
  },
  {
    id: 'pred-5',
    question: 'Explain semaphores and their implementation for synchronization.',
    probability: 'high',
    reasoning: ['Semaphores asked directly in 2024','Synchronization is a core Process Management concept','Classical problems tested (Producer-Consumer, Dining Philosophers)'],
    relatedTopics: ['pm-process-sync', 'pm-critical-section', 'pm-mutual-exclusion', 'pm-classical-sync']
  },
  {
    id: 'pred-6',
    question: 'Explain the four necessary conditions for deadlock.',
    probability: 'high',
    reasoning: ['Asked in 2025-26','Deadlock is a core syllabus unit','Prevention/Avoidance topics not directly tested yet'],
    relatedTopics: ['dl-characterization', 'dl-prevention']
  },
  {
    id: 'pred-7',
    question: 'Solve a Banker Algorithm numerical problem.',
    probability: 'high',
    reasoning: ['Asked in 2025-26','Only numerical from Deadlock unit in available papers','Important algorithmic concept'],
    relatedTopics: ['dl-avoidance-detection']
  },
  {
    id: 'pred-8',
    question: 'Explain system calls and their role in OS interaction.',
    probability: 'high',
    reasoning: ['Asked in 2025-26','Connects to IPC and OS services','Fundamental concept'],
    relatedTopics: ['pm-ipc']
  },
  {
    id: 'pred-9',
    question: 'Explain Peterson solution for mutual exclusion.',
    probability: 'moderate',
    reasoning: ['Asked in 2024 (Q8)','Mutual exclusion and synchronization strongly represented','Alternative to semaphores'],
    relatedTopics: ['pm-mutual-exclusion', 'pm-critical-section']
  },
  {
    id: 'pred-10',
    question: 'Write short notes on Memory Management concepts (Paging, Virtual Memory, etc.).',
    probability: 'moderate',
    reasoning: ['Not yet appeared in available papers','Entire Memory Management unit untested','Syllabus requires coverage of these topics'],
    relatedTopics: ['mm-paging', 'mm-virtual-memory', 'mm-page-replacement', 'mm-segmentation']
  },
  {
    id: 'pred-11',
    question: 'Explain deadlocks: prevention, avoidance, detection, and recovery.',
    probability: 'moderate',
    reasoning: ['Only characterization tested so far','Prevention and recovery not directly tested','Important syllabus section'],
    relatedTopics: ['dl-prevention', 'dl-recovery', 'dl-avoidance-detection']
  },
  {
    id: 'pred-12',
    question: 'Explain different scheduling algorithms with comparison.',
    probability: 'moderate',
    reasoning: ['Scheduling numericals repeated but theory not directly asked','FCFS, Priority, HRRN not tested numerically','Theory comparison likely'],
    relatedTopics: ['cpu-scheduling-concepts', 'cpu-techniques', 'cpu-preemptive-nonpreemptive', 'cpu-fcfs', 'cpu-priority']
  },
];
var predictions;

// --- UTILS ---
var PREFIX = 'os-study-';

function loadState(key, defaultVal) {
  try {
    var raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch(e) { return defaultVal; }
}

function saveState(key, val) {
  localStorage.setItem(PREFIX + key, JSON.stringify(val));
}

function loadCompletedTopics() {
  var arr = loadState('completed', []);
  return new Set(arr);
}

function saveCompletedTopics(ids) {
  saveState('completed', Array.from(ids));
}

function loadPracticeResults() {
  return loadState('practice-results', {});
}

function savePracticeResults(r) {
  saveState('practice-results', r);
}

function fcfs(processes) {
  var sorted = processes.slice().sort(function(a,b) { return a.arrivalTime - b.arrivalTime; });
  var time = 0;
  var ct = {};
  var gantt = [];
  for (var i = 0; i < sorted.length; i++) {
    var p = sorted[i];
    if (time < p.arrivalTime) time = p.arrivalTime;
    var start = time;
    time += p.burstTime;
    ct[p.id] = time;
    gantt.push({ processId: p.id, start: start, end: time });
  }
  return calcResult(processes, ct, gantt);
}

function sjf(processes) {
  var remaining = processes.map(function(p) { return { id: p.id, arrivalTime: p.arrivalTime, burstTime: p.burstTime, rem: p.burstTime }; });
  var time = 0;
  var ct = {};
  var done = new Set();
  var gantt = [];
  while (done.size < processes.length) {
    var avail = remaining.filter(function(p) { return p.arrivalTime <= time && !done.has(p.id); });
    if (avail.length === 0) { time++; continue; }
    avail.sort(function(a,b) { return a.rem - b.rem; });
    var cur = avail[0];
    var start = time;
    time += cur.rem;
    ct[cur.id] = time;
    done.add(cur.id);
    gantt.push({ processId: cur.id, start: start, end: time });
  }
  return calcResult(processes, ct, gantt);
}

function roundRobin(processes, quantum) {
  var remaining = processes.map(function(p) { return { id: p.id, arrivalTime: p.arrivalTime, burstTime: p.burstTime, rem: p.burstTime }; });
  var time = 0;
  var ct = {};
  var gantt = [];
  var queue = [];
  var inQueue = new Set();
  var sorted = remaining.slice().sort(function(a,b) { return a.arrivalTime - b.arrivalTime; });
  var idx = 0;
  var done = new Set();
  if (sorted.length > 0) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); idx++; }
  while (done.size < processes.length) {
    if (queue.length === 0) { time++; while (idx < sorted.length && sorted[idx].arrivalTime <= time) { if (!inQueue.has(sorted[idx].id)) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); } idx++; } continue; }
    var cur = queue.shift();
    var execTime = Math.min(quantum, cur.rem);
    var start = time;
    time += execTime;
    cur.rem -= execTime;
    while (idx < sorted.length && sorted[idx].arrivalTime <= time) { if (!inQueue.has(sorted[idx].id)) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); } idx++; }
    if (cur.rem > 0) { queue.push(cur); }
    else { ct[cur.id] = time; done.add(cur.id); }
    gantt.push({ processId: cur.id, start: start, end: time });
  }
  return calcResult(processes, ct, gantt);
}

function calcResult(processes, ct, gantt) {
  var tat = {};
  var wt = {};
  var totalTat = 0, totalWt = 0;
  for (var i = 0; i < processes.length; i++) {
    var p = processes[i];
    tat[p.id] = ct[p.id] - p.arrivalTime;
    wt[p.id] = tat[p.id] - p.burstTime;
    totalTat += tat[p.id];
    totalWt += wt[p.id];
  }
  return {
    ganttChart: gantt,
    completionTime: ct,
    turnaroundTime: tat,
    waitingTime: wt,
    avgTurnaroundTime: totalTat / processes.length,
    avgWaitingTime: totalWt / processes.length
  };
}

function bankersAlgorithm(input) {
  var processes = input.processes;
  var resources = input.resources;
  var allocation = input.allocation;
  var maximum = input.maximum;
  var available = input.available;
  var n = processes.length;
  var m = resources.length;

  var need = [];
  for (var i = 0; i < n; i++) {
    need[i] = [];
    for (var j = 0; j < m; j++) {
      need[i][j] = maximum[i][j] - allocation[i][j];
    }
  }

  var work = available.slice();
  var finish = [];
  for (var i = 0; i < n; i++) { finish[i] = false; }
  var sequence = [];
  var steps = [];
  var found = true;

  while (found) {
    found = false;
    for (var i = 0; i < n; i++) {
      if (finish[i]) continue;
      var canAllocate = true;
      for (var j = 0; j < m; j++) {
        if (need[i][j] > work[j]) { canAllocate = false; break; }
      }
      if (canAllocate) {
        var newAvail = [];
        for (var j = 0; j < m; j++) { newAvail[j] = work[j] + allocation[i][j]; }
        steps.push({ process: processes[i], available: work.slice(), need: need[i].slice(), canAllocate: true, newAvailable: newAvail });
        for (var j = 0; j < m; j++) work[j] += allocation[i][j];
        finish[i] = true;
        sequence.push(processes[i]);
        found = true;
      } else {
        steps.push({ process: processes[i], available: work.slice(), need: need[i].slice(), canAllocate: false, newAvailable: null });
      }
    }
  }

  var safe = finish.every(function(f) { return f; });
  return { needMatrix: need, safe: safe, safeSequence: safe ? sequence : null, steps: steps };
}

// --- APP ---

  var completedTopics = loadCompletedTopics();

  var syllabusUnits = [
    { id: 'introduction', name: 'Introduction' },
    { id: 'process-management', name: 'Process Management' },
    { id: 'cpu-scheduling', name: 'CPU Scheduling' },
    { id: 'deadlock', name: 'Deadlock' },
    { id: 'memory-management', name: 'Memory Management' }
  ];

  var pyqBadgeMap = {
    repeated: 'badge-red',
    'asked-2024': 'badge-blue',
    'asked-2025': 'badge-indigo',
    'asked-once': 'badge-amber'
  };

  var pyqLabelMap = {
    repeated: 'Asked in 2024 & 2025 — VERY IMPORTANT',
    'asked-2024': 'Asked in 2024-25',
    'asked-2025': 'Asked in 2025-26',
    'asked-once': 'Asked once in PYQ',
    'not-asked': 'Not yet seen in available PYQs'
  };

  var priorityBadgeMap = {
    'very-high': 'badge-red',
    high: 'badge-amber',
    medium: 'badge-slate',
    low: 'badge-slate'
  };

  var examState = { started: false, current: 0, showAnswer: {}, done: false };

  var calcState = {
    tab: 'cpu',
    algo: 'fcfs',
    quantum: 2,
    processes: [
      { id: 'P1', arrivalTime: 0, burstTime: 5 },
      { id: 'P2', arrivalTime: 1, burstTime: 3 },
      { id: 'P3', arrivalTime: 2, burstTime: 1 },
      { id: 'P4', arrivalTime: 3, burstTime: 2 }
    ],
    result: null,
    bankerInput: {
      processes: ['P0', 'P1', 'P2', 'P3', 'P4'],
      resources: ['A', 'B', 'C'],
      allocation: [[1, 1, 1], [2, 0, 0], [3, 1, 1], [1, 3, 2], [0, 0, 2]],
      maximum: [[6, 4, 3], [4, 2, 2], [7, 3, 2], [3, 4, 3], [5, 2, 4]],
      available: [2, 2, 1]
    },
    bankerResult: null
  };

  var syllabusFilter = 'all';
  var pyqYear = 'all';
  var pyqType = 'all';
  var practiceUnit = 'all';
  var practiceLevel = 'all';
  var practiceAnswers = {};
  var topicShowAnswer = {};

  var mockQuestions = [
    { id: 'eq-1', section: 'A', q: 'Write short notes on: (a) Critical Section (b) Virtual Memory (c) Real-Time Systems', marks: '3', answer: '(a) Critical Section: Wo code part jahan shared resource access hoti hai. Sirf ek process at a time. (b) Virtual Memory: Logical memory ko physical memory se alag treat karna. Processes bada address space use kar sakte hain. (c) Real-Time Systems: Guaranteed time ke andar response dena hota hai. Hard (strict) aur Soft (flexible) types.' },
    { id: 'eq-2', section: 'A', q: 'Explain the four necessary conditions for deadlock.', marks: '5', answer: '(1) Mutual Exclusion: Resource ek time pe sirf ek process use kar sakti hai. (2) Hold and Wait: Process resource hold karti hai aur doosri ka wait karti hai. (3) No Preemption: Resource forcefully wapas nahi le sakte. (4) Circular Wait: Process chain bana ke wait karti hai.' },
    { id: 'eq-3', section: 'A', q: 'Compare preemptive and non-preemptive scheduling.', marks: '5', answer: 'Preemptive: CPU forcefully le sakti hai process se. Example: Round Robin, SRTF. Better response time. Non-Preemptive: Process jab CPU chhode tabhi milegi doosri ko. Example: FCFS, SJF. Less overhead but poor response.' },
    { id: 'eq-4', section: 'B', q: 'Solve: P1(0,6), P2(1,4), P3(2,2), P4(3,3) using Round Robin (Q=2). Calculate avg TAT and WT.', marks: '5', answer: 'Gantt: P1(0-2), P2(2-4), P3(4-6), P1(6-8), P4(8-10), P2(10-11), P1(11-13). CT: P1=13,P2=11,P3=6,P4=10. TAT: P1=13,P2=10,P3=4,P4=7. Avg TAT=8.5, Avg WT=5.5.' },
    { id: 'eq-5', section: 'B', q: 'Explain Producer-Consumer problem using semaphores. Write pseudocode.', marks: '5', answer: 'Three semaphores: mutex=1, empty=n, full=0. Producer: wait(empty), wait(mutex), produce, signal(mutex), signal(full). Consumer: wait(full), wait(mutex), consume, signal(mutex), signal(empty).' },
    { id: 'eq-6', section: 'B', q: 'What is paging? Explain page table and address translation.', marks: '5', answer: 'Paging: Logical address ko fixed-size blocks (pages) mein divide karna. Physical memory ko frames mein divide karta hai. Page table maps page number to frame number. Address = (page number, offset).' }
  ];

  var probConfig = {
    'very-high': { label: 'Very High Probability', icon: '\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25', badge: 'badge-red' },
    high: { label: 'High Probability', icon: '\uD83D\uDD25\uD83D\uDD25', badge: 'badge-amber' },
    moderate: { label: 'Moderate Probability', icon: '\uD83D\uDD25', badge: 'badge-slate' }
  };

  var navGroups = [
    {
      label: 'Study',
      items: [
        { path: '#/', label: 'Dashboard', icon: '\uD83D\uDCCA', route: '/' },
        { path: '#/syllabus', label: 'Syllabus', icon: '\uD83D\uDCDA', route: '/syllabus' },
        { path: '#/important', label: 'Important Topics', icon: '\uD83D\uDD25', route: '/important' },
        { path: '#/revision', label: 'Quick Revision', icon: '\u26A1', route: '/revision' }
      ]
    },
    {
      label: 'Practice',
      items: [
        { path: '#/pyqs', label: 'Previous Year Qs', icon: '\uD83D\uDCDD', route: '/pyqs' },
        { path: '#/predictions', label: 'Predictions', icon: '\uD83D\uDD2E', route: '/predictions' },
        { path: '#/practice', label: 'Practice Questions', icon: '\u270F\uFE0F', route: '/practice' },
        { path: '#/calculator', label: 'Calculators', icon: '\uD83E\uDDEE', route: '/calculator' },
        { path: '#/exam', label: 'Exam Mode', icon: '\uD83C\uDFAF', route: '/exam' }
      ]
    }
  ];

  function getRoute() {
    var hash = window.location.hash || '#/';
    var route = hash.replace(/^#/, '');
    if (route === '' || route === '/') return '/';
    return route;
  }

  function navigate(route) {
    window.location.hash = '#' + route;
  }

  function esc(str) {
    if (str == null) return '';
    var div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

  // ── Dashboard ────────────────────────────────────────────────
  function renderDashboard() {
    var total = syllabus.length;
    var done = completedTopics.size;
    var pct = Math.round((done / total) * 100);
    var veryHigh = syllabus.filter(function (t) { return t.priority === 'very-high'; });
    var repeated = syllabus.filter(function (t) { return t.pyqStatus === 'repeated'; });
    var notAsked = syllabus.filter(function (t) { return t.pyqStatus === 'not-asked'; });
    var recommended = syllabus.filter(function (t) { return !completedTopics.has(t.id) && (t.priority === 'very-high' || t.priority === 'high'); }).slice(0, 5);

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Dashboard</h1><p class="page-subtitle">Your OS exam preparation at a glance</p></div>';

    html += '<div class="card">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12">';
    html += '<div><span style="font-size:28;font-weight:800;color:var(--color-primary);letter-spacing:-0.03em">' + done + '/' + total + '</span><span style="font-size:13;color:var(--color-text-muted);margin-left:8">topics completed</span></div>';
    html += '<span style="font-size:13;font-weight:600;color:var(--color-text-secondary)">' + pct + '%</span>';
    html += '</div>';
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '</div>';

    html += '<div class="card" style="margin-top:16">';
    html += '<div class="card-title">Overview</div>';
    html += '<div class="stat-grid">';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-primary)">' + total + '</div><div class="stat-label">Total Topics</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-indigo)">' + (total - notAsked.length) + '</div><div class="stat-label">In PYQs</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-red)">' + repeated.length + '</div><div class="stat-label">Repeated</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-amber)">' + veryHigh.length + '</div><div class="stat-label">Very High</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-text-muted)">' + notAsked.length + '</div><div class="stat-label">Not Yet Asked</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-green)">' + done + '</div><div class="stat-label">Completed</div></div>';
    html += '</div></div>';

    html += '<div class="card" style="margin-top:16">';
    html += '<div class="card-title">Quick Actions</div>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10">';
    var actions = [
      { to: '/pyqs', label: 'PYQs', icon: '\uD83D\uDCDD' },
      { to: '/predictions', label: 'Predictions', icon: '\uD83D\uDD2E' },
      { to: '/calculator', label: 'Calculator', icon: '\uD83E\uDDEE' },
      { to: '/exam', label: 'Exam Mode', icon: '\uD83C\uDFAF' }
    ];
    for (var i = 0; i < actions.length; i++) {
      var a = actions[i];
      html += '<a href="#' + a.to + '" style="display:flex;flex-direction:column;align-items:center;gap:6;padding:16px 12px;background:var(--color-bg);border-radius:var(--radius-sm);border:1px solid var(--color-border-light);text-decoration:none;transition:all 0.12s ease">';
      html += '<span style="font-size:22">' + a.icon + '</span>';
      html += '<span style="font-size:12;font-weight:600;color:var(--color-text-secondary)">' + a.label + '</span>';
      html += '</a>';
    }
    html += '</div></div>';

    if (recommended.length > 0) {
      html += '<div class="card" style="margin-top:16">';
      html += '<div class="card-title">Continue Studying</div>';
      html += '<div style="display:flex;flex-direction:column;gap:6">';
      for (var j = 0; j < recommended.length; j++) {
        var t = recommended[j];
        html += '<a href="#/topic/' + t.id + '" class="link-card">';
        html += '<div style="display:flex;align-items:center;gap:10">';
        html += '<span style="font-size:13;font-weight:600;color:var(--color-text)">' + esc(t.title) + '</span>';
        html += '<span class="badge badge-slate">' + esc(t.unitName) + '</span>';
        html += '</div>';
        html += '<div style="display:flex;align-items:center;gap:6">';
        if (t.pyqStatus === 'repeated') html += '<span class="badge badge-red">Repeated</span>';
        if (t.priority === 'very-high') html += '<span style="font-size:13">\uD83D\uDD25</span>';
        html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="color:var(--color-text-muted)"><polyline points="9 18 15 12 9 6"></polyline></svg>';
        html += '</div></a>';
      }
      html += '</div></div>';
    }

    html += '<div class="card" style="margin-top:16">';
    html += '<div class="card-title">PYQ Pattern Analysis</div>';
    html += '<div class="table-scroll"><table class="data-table"><thead><tr><th>Topic</th><th style="text-align:center">2024</th><th style="text-align:center">2025</th><th style="text-align:center">Freq</th><th style="text-align:center">Priority</th></tr></thead><tbody>';
    var pyqTopics = syllabus.filter(function (t) { return t.pyqStatus !== 'not-asked'; }).slice(0, 15);
    for (var k = 0; k < pyqTopics.length; k++) {
      var tp = pyqTopics[k];
      html += '<tr>';
      html += '<td style="font-weight:600">' + esc(tp.title) + '</td>';
      html += '<td style="text-align:center">';
      if (tp.pyqStatus === 'repeated' || tp.pyqStatus === 'asked-2024') html += '<span class="badge badge-green">Yes</span>';
      html += '</td>';
      html += '<td style="text-align:center">';
      if (tp.pyqStatus === 'repeated' || tp.pyqStatus === 'asked-2025') html += '<span class="badge badge-green">Yes</span>';
      html += '</td>';
      html += '<td style="text-align:center;font-weight:600">' + (tp.pyqStatus === 'repeated' ? 2 : 1) + '</td>';
      html += '<td style="text-align:center"><span class="priority-' + tp.priority + '" style="font-weight:700;font-size:12">';
      if (tp.priority === 'very-high') html += 'Very High';
      else if (tp.priority === 'high') html += 'High';
      else if (tp.priority === 'medium') html += 'Medium';
      else html += 'Low';
      html += '</span></td>';
      html += '</tr>';
    }
    html += '</tbody></table></div></div>';

    return html;
  }

  // ── Syllabus ─────────────────────────────────────────────────
  function renderSyllabus() {
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Syllabus (' + syllabus.length + ' Topics)</h1></div>';

    html += '<div class="card" style="margin-bottom:16">';
    html += '<div class="filter-buttons">';
    html += '<button onclick="window._setSyllabusFilter(\'all\')" class="filter-btn' + (syllabusFilter === 'all' ? ' active' : '') + '">All</button>';
    for (var u = 0; u < syllabusUnits.length; u++) {
      var unit = syllabusUnits[u];
      html += '<button onclick="window._setSyllabusFilter(\'' + unit.id + '\')" class="filter-btn' + (syllabusFilter === unit.id ? ' active' : '') + '">' + esc(unit.name) + '</button>';
    }
    html += '</div></div>';

    for (var u2 = 0; u2 < syllabusUnits.length; u2++) {
      var unit2 = syllabusUnits[u2];
      if (syllabusFilter !== 'all' && syllabusFilter !== unit2.id) continue;
      var ut = syllabus.filter(function (t) { return t.unit === unit2.id; });
      html += '<div style="margin-bottom:20">';
      html += '<div style="font-size:14;font-weight:700;color:var(--color-text);margin-bottom:10;display:flex;align-items:center;gap:8">';
      html += esc(unit2.name) + ' <span style="font-size:12;font-weight:500;color:var(--color-text-muted)">(' + ut.length + ')</span>';
      html += '</div>';
      html += '<div style="display:flex;flex-direction:column;gap:6">';
      for (var j = 0; j < ut.length; j++) {
        var t = ut[j];
        var isDone = completedTopics.has(t.id);
        var borderColor = isDone ? 'borderColor:#bbf7d0;' : '';
        var bgColor = isDone ? 'background:#f0fdf4;' : '';
        html += '<div class="link-card" style="' + borderColor + bgColor + '">';
        html += '<a href="#/topic/' + t.id + '" style="flex:1;display:flex;align-items:center;gap:10;text-decoration:none">';
        html += '<span style="font-size:14">' + (isDone ? '\u2705' : '\u25CB') + '</span>';
        html += '<span style="font-size:14;font-weight:500;color:var(--color-text)">' + esc(t.title) + '</span>';
        if (t.pyqStatus !== 'not-asked') {
          html += '<span class="badge ' + (pyqBadgeMap[t.pyqStatus] || 'badge-slate') + '">';
          if (t.pyqStatus === 'repeated') html += 'Repeated';
          else if (t.pyqStatus === 'asked-2024') html += '2024';
          else if (t.pyqStatus === 'asked-2025') html += '2025';
          else html += 'PYQ';
          html += '</span>';
        }
        html += '<span style="font-size:12;font-weight:600" class="priority-' + t.priority + '">';
        if (t.priority === 'very-high') html += '\uD83D\uDD25 Very High';
        else if (t.priority === 'high') html += 'High';
        else if (t.priority === 'medium') html += 'Medium';
        html += '</span>';
        html += '</a>';
        html += '<button onclick="window._toggleTopicComplete(\'' + t.id + '\')" class="btn btn-sm ' + (isDone ? 'btn-outline' : 'btn-ghost') + '" style="font-size:12;flex-shrink:0">';
        html += isDone ? 'Done' : 'Mark';
        html += '</button>';
        html += '</div>';
      }
      html += '</div></div>';
    }
    return html;
  }

  // ── Topic Page ───────────────────────────────────────────────
  function renderTopicPage(topicId) {
    var topic = syllabus.find(function (t) { return t.id === topicId; });
    if (!topic) {
      return '<div style="text-align:center;padding:60px 20px"><h2 style="font-size:18;font-weight:600;margin-bottom:12">Topic not found</h2><a href="#/syllabus" style="color:var(--color-primary);font-size:14">Go to Syllabus</a></div>';
    }

    var html = '';
    html += '<a href="#/syllabus" style="display:inline-flex;align-items:center;gap:4;font-size:13;color:var(--color-text-muted);margin-bottom:16;text-decoration:none"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> Back to Syllabus</a>';

    html += '<div class="card">';
    html += '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:8;margin-bottom:12">';
    html += '<h1 style="font-size:22;font-weight:700;letter-spacing:-0.02em">' + esc(topic.title) + '</h1>';
    html += '<span class="badge ' + (priorityBadgeMap[topic.priority] || 'badge-slate') + '">' + esc(topic.priority) + '</span>';
    html += '<span class="badge badge-slate">' + esc(topic.unitName) + '</span>';
    html += '</div>';
    html += '<div class="info-amber" style="display:flex;align-items:center;gap:6">';
    html += '<span class="badge ' + (pyqBadgeMap[topic.pyqStatus] || 'badge-slate') + '">' + esc(topic.pyqStatus) + '</span>';
    html += '<span>' + esc(pyqLabelMap[topic.pyqStatus] || '') + '</span>';
    html += '</div></div>';

    html += '<div class="topic-block">';
    html += '<div class="topic-block-title"><span>\uD83D\uDCD6</span> Understanding the Topic</div>';
    html += '<div style="margin-bottom:18"><div style="font-size:11;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6">Overview</div><p style="font-size:14;line-height:1.7;color:var(--color-text)">' + esc(topic.overview) + '</p></div>';
    html += '<div style="margin-bottom:18"><div style="font-size:11;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6">Definition</div><div class="topic-definition">' + esc(topic.definition) + '</div></div>';
    html += '<div style="margin-bottom:18"><div style="font-size:11;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6">Easy Explanation</div><p style="font-size:14;line-height:1.7;color:var(--color-text)">' + esc(topic.easyExplanation) + '</p></div>';
    html += '<div><div style="font-size:11;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6">Real-Life Example</div><p style="font-size:14;line-height:1.7;color:var(--color-text)">' + esc(topic.realLifeExample) + '</p></div>';
    html += '</div>';

    html += '<div class="topic-block">';
    html += '<div class="topic-block-title"><span>\uD83D\uDCA1</span> Key Points</div>';
    html += '<div style="display:flex;flex-direction:column;gap:8">';
    for (var i = 0; i < topic.keyPoints.length; i++) {
      html += '<div class="key-point-item"><span class="key-point-num">' + (i + 1) + '.</span><span>' + esc(topic.keyPoints[i]) + '</span></div>';
    }
    html += '</div></div>';

    html += '<div class="topic-block">';
    html += '<div class="topic-block-title"><span>\uD83D\uDCCA</span> Diagram / Visual</div>';
    html += '<div style="background:var(--color-bg);padding:16px 20px;border-radius:var(--radius-sm);border:1px dashed var(--color-border);text-align:center;color:var(--color-text-secondary);font-size:14">' + esc(topic.diagramDescription) + '</div>';
    html += '</div>';

    if (topic.examPointOfView.length > 0) {
      html += '<div class="topic-block">';
      html += '<div class="topic-block-title"><span>\uD83C\uDFAF</span> Exam Point of View</div>';
      html += '<div style="display:flex;flex-direction:column;gap:10">';
      for (var e = 0; e < topic.examPointOfView.length; e++) {
        var ep = topic.examPointOfView[e];
        html += '<div class="topic-exam-pov" style="display:flex;align-items:flex-start;gap:10">';
        html += '<span class="badge badge-blue">' + esc(ep.year) + '</span>';
        html += '<span style="flex:1;font-size:14;color:var(--color-text)">' + esc(ep.question) + '</span>';
        if (ep.isRepeated) html += '<span class="badge badge-red">\uD83D\uDD25 Repeated</span>';
        html += '</div>';
      }
      html += '</div></div>';
    }

    html += '<div class="topic-block">';
    html += '<div class="topic-block-title"><span>\u2705</span> Exam Answer</div>';
    html += '<div class="btn-group" style="margin-bottom:14">';
    html += '<button onclick="window._toggleTopicAnswer(\'' + topic.id + '\',\'threeMarks\')" class="btn ' + (topicShowAnswer[topic.id + '_threeMarks'] ? 'btn-ghost' : 'btn-outline') + '" style="font-size:13">' + (topicShowAnswer[topic.id + '_threeMarks'] ? '\u25BC' : '\u25B6') + ' 3-Mark Answer</button>';
    html += '<button onclick="window._toggleTopicAnswer(\'' + topic.id + '\',\'fiveMarks\')" class="btn ' + (topicShowAnswer[topic.id + '_fiveMarks'] ? 'btn-ghost' : 'btn-outline') + '" style="font-size:13">' + (topicShowAnswer[topic.id + '_fiveMarks'] ? '\u25BC' : '\u25B6') + ' 5-Mark Answer</button>';
    html += '</div>';
    if (topicShowAnswer[topic.id + '_threeMarks']) {
      html += '<div class="qa-answer"><div class="qa-answer-label">3-Mark Answer</div><p>' + esc(topic.examAnswer.threeMarks) + '</p></div>';
    }
    if (topicShowAnswer[topic.id + '_fiveMarks']) {
      html += '<div class="qa-answer" style="margin-top:10"><div class="qa-answer-label">5-Mark Answer</div><p>' + esc(topic.examAnswer.fiveMarks) + '</p></div>';
    }
    html += '</div>';

    if (topic.commonMistakes.length > 0) {
      html += '<div class="topic-block">';
      html += '<div class="topic-block-title"><span>\u26A0\uFE0F</span> Common Mistakes</div>';
      html += '<div style="display:flex;flex-direction:column;gap:8">';
      for (var m = 0; m < topic.commonMistakes.length; m++) {
        html += '<div class="topic-mistake"><span style="font-weight:700;color:var(--color-red)">\u2717</span><span>' + esc(topic.commonMistakes[m]) + '</span></div>';
      }
      html += '</div></div>';
    }

    html += '<div class="topic-block">';
    html += '<div class="topic-block-title"><span>\u26A1</span> Quick Revision</div>';
    html += '<div class="topic-revision">' + esc(topic.quickRevision) + '</div>';
    html += '</div>';

    if (topic.practiceQuestions.length > 0) {
      html += '<div class="topic-block">';
      html += '<div class="topic-block-title"><span>\uD83D\uDCDD</span> Practice Questions</div>';
      html += '<div style="display:flex;flex-direction:column;gap:12">';
      for (var pq = 0; pq < topic.practiceQuestions.length; pq++) {
        var q = topic.practiceQuestions[pq];
        var levelBadge = 'badge-slate';
        if (q.level === 'exam-pattern') levelBadge = 'badge-red';
        else if (q.level === 'conceptual') levelBadge = 'badge-blue';
        else if (q.level === 'application') levelBadge = 'badge-indigo';
        html += '<div class="qa-card">';
        html += '<div class="qa-card-header"><span class="badge ' + levelBadge + '">' + esc(q.level) + '</span></div>';
        html += '<div class="qa-card-body">';
        html += '<div class="qa-question">' + esc(q.question) + '</div>';
        var showId = topic.id + '_pq_' + q.id;
        if (!topicShowAnswer[showId]) {
          html += '<div class="qa-toggle"><button onclick="window._toggleTopicAnswer(\'' + showId + '\',\'pq\')" class="btn btn-outline btn-sm">\u25B6 Show Answer</button></div>';
        } else {
          html += '<div class="qa-answer"><div class="qa-answer-label">Answer</div><p style="font-weight:600;margin-bottom:4">' + esc(q.answer) + '</p><p style="opacity:0.8">' + esc(q.explanation) + '</p></div>';
        }
        html += '</div></div>';
      }
      html += '</div></div>';
    }

    var isComplete = completedTopics.has(topic.id);
    html += '<div style="margin-top:20;padding-bottom:24">';
    html += '<button onclick="window._toggleTopicComplete(\'' + topic.id + '\')" class="btn ' + (isComplete ? 'btn-outline' : 'btn-primary') + '" style="padding:10px 24px">';
    html += isComplete ? '\u2705 Completed \u2014 Click to Unmark' : '\u2610 Mark as Complete';
    html += '</button></div>';

    return html;
  }

  // ── PYQ Page ─────────────────────────────────────────────────
  function renderPYQPage() {
    var filtered = pyqs.filter(function (p) {
      if (pyqYear !== 'all' && p.year !== pyqYear) return false;
      if (pyqType !== 'all' && p.type !== pyqType) return false;
      return true;
    });

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Previous Year Questions</h1><p class="page-subtitle">2024-25 & 2025-26 mid-term papers. OR questions marked.</p></div>';

    html += '<div class="card" style="margin-bottom:16">';
    html += '<div class="filter-bar">';
    html += '<div class="filter-group"><span class="filter-label">Year</span><div class="filter-buttons">';
    var years = ['all', '2024-25', '2025-26'];
    for (var y = 0; y < years.length; y++) {
      var yr = years[y];
      html += '<button onclick="window._setPYQYear(\'' + yr + '\')" class="filter-btn' + (pyqYear === yr ? ' active' : '') + '">' + (yr === 'all' ? 'All Years' : yr) + '</button>';
    }
    html += '</div></div>';
    html += '<div class="filter-group"><span class="filter-label">Type</span><div class="filter-buttons">';
    var types = ['all', 'theory', 'numerical'];
    for (var tp = 0; tp < types.length; tp++) {
      var ty = types[tp];
      html += '<button onclick="window._setPYQType(\'' + ty + '\')" class="filter-btn' + (pyqType === ty ? ' active-purple' : '') + '">' + (ty === 'all' ? 'All Types' : ty.charAt(0).toUpperCase() + ty.slice(1)) + '</button>';
    }
    html += '</div></div>';
    html += '</div></div>';

    html += '<div style="display:flex;flex-direction:column;gap:10">';
    for (var i = 0; i < filtered.length; i++) {
      var p = filtered[i];
      var borderStyle = p.isOR ? 'borderLeft:3px solid var(--color-amber)' : '';
      var diffBadge = p.difficulty === 'hard' ? 'badge-red' : p.difficulty === 'medium' ? 'badge-amber' : 'badge-green';
      var typeBadge = p.type === 'numerical' ? 'badge-indigo' : 'badge-blue';
      html += '<div class="qa-card" style="' + borderStyle + '">';
      html += '<div class="qa-card-header">';
      html += '<span class="badge badge-blue">' + esc(p.year) + '</span>';
      html += '<span style="font-size:12;font-weight:600;color:var(--color-text-secondary)">' + esc(p.section) + ' \u2014 ' + esc(p.questionNumber) + '</span>';
      html += '<span class="badge ' + typeBadge + '">' + esc(p.type) + '</span>';
      html += '<span class="badge ' + diffBadge + '">' + esc(p.difficulty) + '</span>';
      html += '<span class="badge badge-slate">' + esc(p.marks) + ' marks</span>';
      if (p.isOR) html += '<span class="badge badge-amber">OR</span>';
      if (p.priority === 'very-high') html += '<span class="badge badge-red">\uD83D\uDD25 Very High</span>';
      html += '</div>';
      html += '<div class="qa-card-body">';
      html += '<div class="qa-question">' + esc(p.questionText) + '</div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:4;margin-top:10">';
      for (var r = 0; r < p.relatedTopics.length; r++) {
        html += '<span class="badge badge-indigo">' + esc(p.relatedTopics[r]) + '</span>';
      }
      html += '</div></div></div>';
    }
    if (filtered.length === 0) {
      html += '<div class="card" style="text-align:center;padding:40px 20px;color:var(--color-text-muted)">No questions match the current filters.</div>';
    }
    html += '</div>';

    html += '<div class="card" style="margin-top:20">';
    html += '<div class="card-title">Pattern Analysis Summary</div>';
    html += '<div style="display:flex;flex-direction:column;gap:10">';
    html += '<div style="background:var(--color-green-light);border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:12px 16px"><div style="font-size:12;font-weight:700;color:var(--color-green);margin-bottom:4">Directly Repeated Concepts</div><div style="font-size:13;color:var(--color-text);line-height:1.6">Process States, Monolithic vs Microkernel, OS Services/Functions, CPU Scheduling Numericals</div></div>';
    html += '<div style="background:var(--color-primary-light);border:1px solid #bfdbfe;border-radius:var(--radius-sm);padding:12px 16px"><div style="font-size:12;font-weight:700;color:var(--color-primary);margin-bottom:4">Strongest Patterns</div><div style="font-size:13;color:var(--color-text);line-height:1.6">Section A: theory/definitions. Section B: numericals & long answers. Synchronization tested multiple ways in 2024.</div></div>';
    html += '<div style="background:var(--color-amber-light);border:1px solid #fde68a;border-radius:var(--radius-sm);padding:12px 16px"><div style="font-size:12;font-weight:700;color:var(--color-amber);margin-bottom:4">OR Questions</div><div style="font-size:13;color:var(--color-text);line-height:1.6">Q8 in 2025-26 had an alternative (Banker\'s Algorithm OR Dining Philosophers).</div></div>';
    html += '</div></div>';
    return html;
  }

  // ── Important Topics ─────────────────────────────────────────
  function renderImportantTopics() {
    var veryHigh = syllabus.filter(function (t) { return t.priority === 'very-high'; });
    var high = syllabus.filter(function (t) { return t.priority === 'high'; });
    var medium = syllabus.filter(function (t) { return t.priority === 'medium'; });
    var low = syllabus.filter(function (t) { return t.priority === 'low'; });

    var sections = [
      { title: 'Very High Priority', sub: 'Topics directly repeated across both papers. MUST prepare.', topics: veryHigh, icon: '\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25' },
      { title: 'High Priority', sub: 'Asked in one paper, strongly connected to repeated patterns.', topics: high, icon: '\uD83D\uDD25\uD83D\uDD25' },
      { title: 'Medium Priority', sub: 'Important syllabus topics, asked once or foundational.', topics: medium, icon: '\uD83D\uDD25' },
      { title: 'Not Yet Asked', sub: 'Not observed in available papers. Still important by syllabus relevance.', topics: low, icon: '\u25CB' }
    ];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Important Topics</h1><p class="page-subtitle">Based on PYQ frequency, semantic similarity, and syllabus importance</p></div>';

    for (var s = 0; s < sections.length; s++) {
      var sec = sections[s];
      html += '<div style="margin-bottom:24">';
      html += '<div style="display:flex;align-items:center;gap:8;margin-bottom:6">';
      html += '<span style="font-size:14">' + sec.icon + '</span>';
      html += '<span style="font-size:15;font-weight:700;color:var(--color-text)">' + sec.title + '</span>';
      html += '<span class="badge badge-slate">' + sec.topics.length + '</span>';
      html += '</div>';
      html += '<p style="font-size:13;color:var(--color-text-muted);margin-bottom:10;padding-left:26">' + sec.sub + '</p>';
      html += '<div style="display:flex;flex-direction:column;gap:6">';
      for (var j = 0; j < sec.topics.length; j++) {
        var t = sec.topics[j];
        html += '<a href="#/topic/' + t.id + '" class="link-card">';
        html += '<div style="display:flex;align-items:center;gap:8">';
        html += '<span style="font-size:14;font-weight:500">' + esc(t.title) + '</span>';
        html += '<span style="font-size:12;color:var(--color-text-muted)">' + esc(t.unitName) + '</span>';
        if (t.pyqStatus !== 'not-asked' && t.pyqStatus !== 'asked-once') {
          html += '<span class="badge ' + (pyqBadgeMap[t.pyqStatus] || 'badge-slate') + '">';
          if (t.pyqStatus === 'repeated') html += 'Repeated';
          else if (t.pyqStatus === 'asked-2024') html += '2024-25';
          else html += '2025-26';
          html += '</span>';
        }
        html += '</div>';
        html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="color:var(--color-text-muted)"><polyline points="9 18 15 12 9 6"></polyline></svg>';
        html += '</a>';
      }
      html += '</div></div>';
    }
    return html;
  }

  // ── Predictions Page ─────────────────────────────────────────
  function renderPredictionsPage() {
    var probs = ['very-high', 'high', 'moderate'];
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Predicted Important Questions</h1><p class="page-subtitle">Based on limited 2 papers. Study priorities, NOT guarantees.</p></div>';

    for (var p = 0; p < probs.length; p++) {
      var prob = probs[p];
      var items = predictions.filter(function (pr) { return pr.probability === prob; });
      if (!items.length) continue;
      var cfg = probConfig[prob];

      html += '<div style="margin-bottom:24">';
      html += '<div style="display:flex;align-items:center;gap:8;margin-bottom:12">';
      html += '<span style="font-size:14">' + cfg.icon + '</span>';
      html += '<span style="font-size:15;font-weight:700">' + cfg.label + '</span>';
      html += '<span class="badge badge-slate">' + items.length + '</span>';
      html += '</div>';
      html += '<div style="display:flex;flex-direction:column;gap:10">';
      for (var j = 0; j < items.length; j++) {
        var pr = items[j];
        html += '<div class="qa-card"><div class="qa-card-body">';
        html += '<div class="qa-question" style="margin-bottom:10">' + esc(pr.question) + '</div>';
        html += '<div style="margin-bottom:10"><div style="font-size:12;font-weight:700;color:var(--color-text-secondary);margin-bottom:4">Reasoning:</div>';
        html += '<ul style="margin-left:16;font-size:13;color:var(--color-text-secondary);line-height:1.7">';
        for (var r = 0; r < pr.reasoning.length; r++) {
          html += '<li>' + esc(pr.reasoning[r]) + '</li>';
        }
        html += '</ul></div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:4">';
        for (var t = 0; t < pr.relatedTopics.length; t++) {
          html += '<span class="badge badge-indigo">' + esc(pr.relatedTopics[t]) + '</span>';
        }
        html += '</div></div></div>';
      }
      html += '</div></div>';
    }
    return html;
  }

  // ── Practice ─────────────────────────────────────────────────
  function renderPractice() {
    var allQ = [];
    for (var s = 0; s < syllabus.length; s++) {
      var topic = syllabus[s];
      for (var q = 0; q < topic.practiceQuestions.length; q++) {
        var pq = topic.practiceQuestions[q];
        allQ.push({ id: pq.id, level: pq.level, question: pq.question, answer: pq.answer, explanation: pq.explanation, topicTitle: topic.title, topicUnit: topic.unit });
      }
    }
    var filtered = allQ.filter(function (q) {
      if (practiceUnit !== 'all' && q.topicUnit !== practiceUnit) return false;
      if (practiceLevel !== 'all' && q.level !== practiceLevel) return false;
      return true;
    });

    var unitOptions = [['all', 'All Units'], ['introduction', 'Introduction'], ['process-management', 'Process Mgmt'], ['cpu-scheduling', 'CPU Scheduling'], ['deadlock', 'Deadlock'], ['memory-management', 'Memory']];
    var levelOptions = [['all', 'All'], ['basic', 'Basic'], ['conceptual', 'Conceptual'], ['exam-pattern', 'Exam Pattern'], ['application', 'Application']];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Practice Questions</h1><p class="page-subtitle">' + filtered.length + ' questions available</p></div>';

    html += '<div class="card" style="margin-bottom:16">';
    html += '<div class="filter-bar">';
    html += '<div class="filter-group"><span class="filter-label">Unit</span><div class="filter-buttons">';
    for (var u = 0; u < unitOptions.length; u++) {
      html += '<button onclick="window._setPracticeUnit(\'' + unitOptions[u][0] + '\')" class="filter-btn' + (practiceUnit === unitOptions[u][0] ? ' active' : '') + '">' + esc(unitOptions[u][1]) + '</button>';
    }
    html += '</div></div>';
    html += '<div class="filter-group"><span class="filter-label">Level</span><div class="filter-buttons">';
    for (var l = 0; l < levelOptions.length; l++) {
      html += '<button onclick="window._setPracticeLevel(\'' + levelOptions[l][0] + '\')" class="filter-btn' + (practiceLevel === levelOptions[l][0] ? ' active-purple' : '') + '">' + esc(levelOptions[l][1]) + '</button>';
    }
    html += '</div></div>';
    html += '</div></div>';

    html += '<div style="display:flex;flex-direction:column;gap:10">';
    var shown = filtered.slice(0, 50);
    for (var i = 0; i < shown.length; i++) {
      var q = shown[i];
      var levelBadge = 'badge-slate';
      if (q.level === 'exam-pattern') levelBadge = 'badge-red';
      else if (q.level === 'conceptual') levelBadge = 'badge-blue';
      else if (q.level === 'application') levelBadge = 'badge-indigo';

      html += '<div class="qa-card">';
      html += '<div class="qa-card-header">';
      html += '<span class="badge ' + levelBadge + '">' + esc(q.level) + '</span>';
      html += '<span style="font-size:12;color:var(--color-text-muted)">' + esc(q.topicTitle) + '</span>';
      html += '</div>';
      html += '<div class="qa-card-body">';
      html += '<div class="qa-question">' + esc(q.question) + '</div>';
      if (!practiceAnswers[q.id]) {
        html += '<div class="qa-toggle"><button onclick="window._showPracticeAnswer(\'' + q.id + '\')" class="btn btn-outline btn-sm">\u25B6 Show Answer</button></div>';
      } else {
        html += '<div class="qa-answer"><div class="qa-answer-label">Answer</div><p style="font-weight:600;margin-bottom:4">' + esc(q.answer) + '</p><p style="opacity:0.8">' + esc(q.explanation) + '</p></div>';
      }
      html += '</div></div>';
    }
    if (filtered.length === 0) {
      html += '<div class="card" style="text-align:center;padding:40px 20px;color:var(--color-text-muted)">No questions match the current filters.</div>';
    }
    html += '</div>';
    return html;
  }

  // ── Calculator ───────────────────────────────────────────────
  function renderCalculator() {
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Calculators</h1></div>';

    html += '<div class="card" style="margin-bottom:16">';
    html += '<div class="btn-group" style="margin-bottom:14">';
    html += '<button onclick="window._setCalcTab(\'cpu\')" class="btn ' + (calcState.tab === 'cpu' ? 'btn-primary' : 'btn-outline') + '">CPU Scheduling</button>';
    html += '<button onclick="window._setCalcTab(\'banker\')" class="btn ' + (calcState.tab === 'banker' ? 'btn-primary' : 'btn-outline') + '">Banker\'s Algorithm</button>';
    html += '</div>';
    if (calcState.tab === 'cpu') {
      html += '<div class="btn-group">';
      var algos = [['fcfs', 'FCFS'], ['sjf', 'SJN/SRTF'], ['rr', 'Round Robin']];
      for (var a = 0; a < algos.length; a++) {
        html += '<button onclick="window._setCalcAlgo(\'' + algos[a][0] + '\')" class="filter-btn' + (calcState.algo === algos[a][0] ? ' active' : '') + '">' + algos[a][1] + '</button>';
      }
      html += '</div>';
      if (calcState.algo === 'rr') {
        html += '<div style="display:flex;align-items:center;gap:8;margin-top:10"><label style="font-size:13;font-weight:600">Time Quantum:</label><input type="number" id="calc-quantum" value="' + calcState.quantum + '" style="width:64px;padding:6px 8px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="1" onchange="window._setCalcQuantum(this.value)"></div>';
      }
    }
    html += '</div>';

    if (calcState.tab === 'cpu') {
      html += renderCPUCalculator();
    } else {
      html += renderBankerCalculator();
    }
    return html;
  }

  function renderCPUCalculator() {
    var html = '';
    html += '<div class="card">';
    html += '<div class="card-title">Process Table</div>';
    html += '<div class="table-scroll"><table class="data-table"><thead><tr><th>Process</th><th>Arrival Time</th><th>Burst Time</th><th></th></tr></thead><tbody>';
    for (var i = 0; i < calcState.processes.length; i++) {
      var p = calcState.processes[i];
      html += '<tr>';
      html += '<td style="font-weight:600">' + esc(p.id) + '</td>';
      html += '<td><input type="number" value="' + p.arrivalTime + '" style="width:64px;padding:4px 6px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="0" onchange="window._updateCPUProcess(' + i + ',\'arrivalTime\',this.value)"></td>';
      html += '<td><input type="number" value="' + p.burstTime + '" style="width:64px;padding:4px 6px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="1" onchange="window._updateCPUProcess(' + i + ',\'burstTime\',this.value)"></td>';
      html += '<td><button onclick="window._removeCPUProcess(' + i + ')" style="background:none;border:none;color:var(--color-red);cursor:pointer;font-size:12;font-weight:600">Remove</button></td>';
      html += '</tr>';
    }
    html += '</tbody></table></div>';
    html += '<div class="btn-group" style="margin-top:12">';
    html += '<button onclick="window._addCPUProcess()" class="btn btn-outline">+ Add Process</button>';
    html += '<button onclick="window._calcCPU()" class="btn btn-primary">Calculate</button>';
    html += '</div></div>';

    if (calcState.result) {
      var res = calcState.result;
      html += '<div style="margin-top:16;display:flex;flex-direction:column;gap:12">';
      html += '<div class="card"><div class="card-title">Gantt Chart</div><div style="display:flex;gap:0;overflow-x:auto;padding-bottom:4">';
      for (var g = 0; g < res.ganttChart.length; g++) {
        var entry = res.ganttChart[g];
        html += '<div style="flex-shrink:0;text-align:center"><div class="gantt-bar">' + esc(entry.processId) + '</div><div class="gantt-time">' + entry.start + '\u2013' + entry.end + '</div></div>';
      }
      html += '</div></div>';

      html += '<div class="card"><div class="card-title">Results</div><div class="table-scroll"><table class="data-table"><thead><tr><th>Process</th><th>Completion</th><th>Turnaround</th><th>Waiting</th></tr></thead><tbody>';
      for (var p = 0; p < calcState.processes.length; p++) {
        var proc = calcState.processes[p];
        html += '<tr><td style="font-weight:600">' + esc(proc.id) + '</td><td>' + res.completionTime[proc.id] + '</td><td>' + res.turnaroundTime[proc.id] + '</td><td>' + res.waitingTime[proc.id] + '</td></tr>';
      }
      html += '</tbody><tfoot><tr><td style="font-weight:700">Average</td><td></td><td style="font-weight:700;color:var(--color-primary)">' + res.avgTurnaroundTime.toFixed(2) + '</td><td style="font-weight:700;color:var(--color-primary)">' + res.avgWaitingTime.toFixed(2) + '</td></tr></tfoot></table></div></div>';

      html += '<div class="card"><div class="card-title">Calculation Steps (Hinglish)</div><div style="font-size:13;line-height:1.7;color:var(--color-text-secondary)">';
      for (var i = 0; i < res.ganttChart.length; i++) {
        var ge = res.ganttChart[i];
        html += '<div style="margin-bottom:4"><strong style="color:var(--color-text)">' + esc(ge.processId) + '</strong> ' + (i === 0 ? 'sabse pehle execute hua' : 'iske baad execute hua') + ' | Time: ' + ge.start + ' se ' + ge.end + ' | Duration: ' + (ge.end - ge.start) + ' units</div>';
      }
      html += '<div style="margin-top:8;font-weight:600;color:var(--color-text)">Avg TAT = ' + res.avgTurnaroundTime.toFixed(2) + ' &nbsp;|&nbsp; Avg WT = ' + res.avgWaitingTime.toFixed(2) + '</div>';
      html += '</div></div>';
      html += '</div>';
    }
    return html;
  }

  function renderBankerCalculator() {
    var bi = calcState.bankerInput;
    var html = '';
    html += '<div class="info-amber" style="margin-bottom:16"><strong>Banker\'s Algorithm Practice</strong> \u2014 Based on 2025-26 PYQ Q8. Enter matrices and solve.</div>';
    html += '<div class="card"><div class="table-scroll">';

    html += '<div style="margin-bottom:16"><div style="font-size:13;font-weight:700;margin-bottom:8">Allocation Matrix</div>';
    html += '<table class="data-table"><thead><tr><th>Process</th>';
    for (var r = 0; r < bi.resources.length; r++) html += '<th>' + esc(bi.resources[r]) + '</th>';
    html += '</tr></thead><tbody>';
    for (var i = 0; i < bi.allocation.length; i++) {
      html += '<tr><td style="font-weight:600">' + esc(bi.processes[i]) + '</td>';
      for (var j = 0; j < bi.allocation[i].length; j++) {
        html += '<td><input type="number" value="' + bi.allocation[i][j] + '" style="width:48px;padding:4px 6px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="0" onchange="window._updateBankerAlloc(' + i + ',' + j + ',this.value)"></td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table></div>';

    html += '<div style="margin-bottom:16"><div style="font-size:13;font-weight:700;margin-bottom:8">Maximum Matrix</div>';
    html += '<table class="data-table"><thead><tr><th>Process</th>';
    for (var r2 = 0; r2 < bi.resources.length; r2++) html += '<th>' + esc(bi.resources[r2]) + '</th>';
    html += '</tr></thead><tbody>';
    for (var i2 = 0; i2 < bi.maximum.length; i2++) {
      html += '<tr><td style="font-weight:600">' + esc(bi.processes[i2]) + '</td>';
      for (var j2 = 0; j2 < bi.maximum[i2].length; j2++) {
        html += '<td><input type="number" value="' + bi.maximum[i2][j2] + '" style="width:48px;padding:4px 6px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="0" onchange="window._updateBankerMax(' + i2 + ',' + j2 + ',this.value)"></td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table></div>';

    html += '<div style="margin-bottom:16"><div style="font-size:13;font-weight:700;margin-bottom:8">Available Resources</div><div style="display:flex;gap:12">';
    for (var k = 0; k < bi.available.length; k++) {
      html += '<div style="display:flex;align-items:center;gap:4"><span style="font-size:13;font-weight:600">' + esc(bi.resources[k]) + ':</span><input type="number" value="' + bi.available[k] + '" style="width:48px;padding:4px 6px;border:1px solid var(--color-border);border-radius:6px;font-size:13" min="0" onchange="window._updateBankerAvail(' + k + ',this.value)"></div>';
    }
    html += '</div></div>';
    html += '<button onclick="window._calcBanker()" class="btn btn-primary">Solve (Banker\'s Algorithm)</button>';
    html += '</div></div>';

    if (calcState.bankerResult) {
      var res = calcState.bankerResult;
      html += '<div style="margin-top:16;display:flex;flex-direction:column;gap:12">';

      html += '<div class="card"><div class="card-title">Need Matrix (Maximum \u2212 Allocation)</div><div class="table-scroll"><table class="data-table"><thead><tr><th>Process</th>';
      for (var r3 = 0; r3 < bi.resources.length; r3++) html += '<th>' + esc(bi.resources[r3]) + '</th>';
      html += '</tr></thead><tbody>';
      for (var i3 = 0; i3 < res.needMatrix.length; i3++) {
        html += '<tr><td style="font-weight:600">' + esc(bi.processes[i3]) + '</td>';
        for (var j3 = 0; j3 < res.needMatrix[i3].length; j3++) {
          html += '<td>' + res.needMatrix[i3][j3] + '</td>';
        }
        html += '</tr>';
      }
      html += '</tbody></table></div></div>';

      var safeBg = res.safe ? 'var(--color-green-light)' : 'var(--color-red-light)';
      var safeBdr = res.safe ? '#bbf7d0' : '#fecaca';
      var safeClr = res.safe ? 'var(--color-green)' : 'var(--color-red)';
      html += '<div class="card" style="background:' + safeBg + ';border-color:' + safeBdr + '">';
      html += '<div style="font-size:15;font-weight:700;color:' + safeClr + ';margin-bottom:4">' + (res.safe ? '\u2713 System is in SAFE State' : '\u2717 System is in UNSAFE State') + '</div>';
      if (res.safeSequence) html += '<div style="font-size:13;font-weight:600">Safe Sequence: ' + res.safeSequence.join(' \u2192 ') + '</div>';
      html += '</div>';

      html += '<div class="card"><div class="card-title">Step-by-Step Explanation</div><div style="display:flex;flex-direction:column;gap:8">';
      for (var s = 0; s < res.steps.length; s++) {
        var step = res.steps[s];
        if (!step.canAllocate) continue;
        html += '<div style="background:var(--color-green-light);border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:10px 14px;font-size:13">';
        html += '<div style="font-weight:600;margin-bottom:2">' + esc(step.process) + ' \u2014 can be allocated</div>';
        html += '<div style="color:var(--color-text-secondary)">Available: [' + step.available.join(', ') + '] | Need: [' + step.need.join(', ') + ']</div>';
        html += '<div style="color:var(--color-text-secondary)">After completion: New Available = [' + (step.newAvailable ? step.newAvailable.join(', ') : '') + ']</div>';
        html += '</div>';
      }
      html += '</div></div></div>';
    }
    return html;
  }

  // ── Exam Mode ────────────────────────────────────────────────
  function renderExamMode() {
    var sectionA = mockQuestions.filter(function (q) { return q.section === 'A'; });
    var sectionB = mockQuestions.filter(function (q) { return q.section === 'B'; });

    if (!examState.started) {
      var html = '<div style="max-width:480px;margin:40px auto;text-align:center">';
      html += '<h1 class="page-title" style="text-align:center;margin-bottom:20">Exam Mode</h1>';
      html += '<div class="card" style="padding:36px 28px">';
      html += '<div style="font-size:40;margin-bottom:16">\uD83C\uDFAF</div>';
      html += '<h2 style="font-size:18;font-weight:700;margin-bottom:8">Mock Exam</h2>';
      html += '<p style="font-size:14;color:var(--color-text-secondary);margin-bottom:16">Based on observed paper pattern.</p>';
      html += '<div style="display:flex;justify-content:center;gap:8;margin-bottom:16">';
      html += '<span class="badge badge-blue">Section A: ' + sectionA.length + ' \u00D7 3 marks</span>';
      html += '<span class="badge badge-indigo">Section B: ' + sectionB.length + ' \u00D7 5 marks</span>';
      html += '</div>';
      html += '<p style="font-size:12;color:var(--color-amber);margin-bottom:20">Practice questions, NOT actual university questions.</p>';
      html += '<button onclick="window._startExam()" class="btn btn-primary" style="padding:10px 32px;font-size:14">Start Exam</button>';
      html += '</div></div>';
      return html;
    }

    if (examState.done) {
      var html2 = '<div style="max-width:480px;margin:40px auto;text-align:center">';
      html2 += '<h1 class="page-title" style="text-align:center;margin-bottom:20">Exam Complete</h1>';
      html2 += '<div class="card" style="padding:36px 28px">';
      html2 += '<div style="font-size:40;margin-bottom:12">\u2705</div>';
      html2 += '<h2 style="font-size:18;font-weight:700;margin-bottom:8">All ' + mockQuestions.length + ' questions reviewed</h2>';
      html2 += '<p style="font-size:14;color:var(--color-text-secondary);margin-bottom:20">Total Marks: ' + (sectionA.length * 3 + sectionB.length * 5) + '</p>';
      html2 += '<button onclick="window._retryExam()" class="btn btn-outline">Retry</button>';
      html2 += '</div></div>';
      return html2;
    }

    var q = mockQuestions[examState.current];
    var html3 = '<div style="max-width:640px;margin:0 auto">';
    html3 += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12">';
    html3 += '<h1 class="page-title" style="margin-bottom:0">Question ' + (examState.current + 1) + '/' + mockQuestions.length + '</h1>';
    html3 += '<div style="display:flex;gap:6">';
    html3 += '<span class="badge badge-slate">Section ' + q.section + '</span>';
    html3 += '<span class="badge badge-blue">' + q.marks + ' marks</span>';
    html3 += '</div></div>';

    var pctExam = ((examState.current + 1) / mockQuestions.length * 100);
    html3 += '<div class="progress-track" style="margin-bottom:20"><div class="progress-fill" style="width:' + pctExam + '%"></div></div>';

    html3 += '<div class="qa-card">';
    html3 += '<div class="qa-card-header"><span class="badge badge-blue">Question ' + (examState.current + 1) + '</span></div>';
    html3 += '<div class="qa-card-body">';
    html3 += '<div class="qa-question" style="font-size:15;line-height:1.7;margin-bottom:14">' + esc(q.q) + '</div>';
    if (!examState.showAnswer[q.id]) {
      html3 += '<button onclick="window._revealExamAnswer(\'' + q.id + '\')" class="btn btn-outline btn-sm">\u25B6 Reveal Answer</button>';
    } else {
      html3 += '<div class="qa-answer"><div class="qa-answer-label">Answer</div><p>' + esc(q.answer) + '</p></div>';
    }
    html3 += '</div></div>';

    html3 += '<div style="display:flex;justify-content:space-between;margin-top:16;padding-bottom:24">';
    html3 += '<button onclick="window._prevExam()" class="btn btn-outline" style="opacity:' + (examState.current === 0 ? 0.4 : 1) + '" ' + (examState.current === 0 ? 'disabled' : '') + '>\u2190 Previous</button>';
    if (examState.current < mockQuestions.length - 1) {
      html3 += '<button onclick="window._nextExam()" class="btn btn-primary">Next \u2192</button>';
    } else {
      html3 += '<button onclick="window._finishExam()" class="btn btn-primary" style="background:var(--color-green);border-color:var(--color-green)">Finish \u2713</button>';
    }
    html3 += '</div></div>';
    return html3;
  }

  // ── Quick Revision ───────────────────────────────────────────
  function renderQuickRevision() {
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Quick Revision</h1><p class="page-subtitle">30-second revision for every topic. Key definitions, formulas, and concepts.</p></div>';
    html += '<div style="display:flex;flex-direction:column;gap:8">';
    for (var i = 0; i < syllabus.length; i++) {
      var t = syllabus[i];
      var icon = t.priority === 'very-high' ? '\uD83D\uDD25' : t.priority === 'high' ? '\uD83D\uDFE0' : '\u25CB';
      html += '<a href="#/topic/' + t.id + '" class="link-card">';
      html += '<div style="display:flex;align-items:flex-start;gap:10;flex:1;min-width:0">';
      html += '<span style="font-size:14;margin-top:1px;flex-shrink:0">' + icon + '</span>';
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-size:14;font-weight:600;color:var(--color-text);margin-bottom:2">' + esc(t.title) + '</div>';
      html += '<div style="font-size:12;color:var(--color-text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(t.quickRevision) + '</div>';
      html += '</div></div>';
      if (t.pyqStatus === 'repeated') html += '<span class="badge badge-red" style="flex-shrink:0">R</span>';
      html += '</a>';
    }
    html += '</div>';
    return html;
  }

  // ── Render engine ────────────────────────────────────────────
  function render() {
    var route = getRoute();
    var main = document.getElementById('main-content');
    if (!main) main = document.querySelector('.app-main') || document.querySelector('main');
    if (!main) return;

    var html = '';
    if (route === '/') {
      html = renderDashboard();
    } else if (route === '/syllabus') {
      html = renderSyllabus();
    } else if (route.indexOf('/topic/') === 0) {
      var topicId = route.replace('/topic/', '');
      html = renderTopicPage(topicId);
    } else if (route === '/pyqs') {
      html = renderPYQPage();
    } else if (route === '/important') {
      html = renderImportantTopics();
    } else if (route === '/predictions') {
      html = renderPredictionsPage();
    } else if (route === '/practice') {
      html = renderPractice();
    } else if (route === '/calculator') {
      html = renderCalculator();
    } else if (route === '/exam') {
      html = renderExamMode();
    } else if (route === '/revision') {
      html = renderQuickRevision();
    } else {
      html = '<div style="text-align:center;padding:60px 20px"><h2 style="font-size:18;font-weight:600;margin-bottom:12">Page not found</h2><a href="#/" style="color:var(--color-primary);font-size:14">Go to Dashboard</a></div>';
    }
    main.innerHTML = html;

    updateSidebarActive();
    updateHeaderProgress();
  }

  function updateSidebarActive() {
    var route = getRoute();
    var items = document.querySelectorAll('.nav-item');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var href = item.getAttribute('href') || '';
      var itemRoute = href.replace('#', '');
      if (route === itemRoute || (route === '/' && itemRoute === '/')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  }

  function updateHeaderProgress() {
    var total = syllabus.length;
    var done = completedTopics.size;
    var pct = Math.round((done / total) * 100);
    var progFills = document.querySelectorAll('.progress-track .progress-fill');
    for (var i = 0; i < progFills.length; i++) {
      var el = progFills[i];
      var parent = el.parentElement;
      if (parent && parent.classList.contains('progress-track')) {
        var w = parent.getAttribute('style');
        if (w && w.indexOf('width:80') !== -1) {
          el.style.width = pct + '%';
        }
      }
    }
    var countEls = document.querySelectorAll('.app-header span');
    for (var j = 0; j < countEls.length; j++) {
      var el2 = countEls[j];
      if (el2.textContent && el2.textContent.indexOf('/' + total) !== -1) {
        el2.innerHTML = '<span style="color:var(--color-primary)">' + done + '</span>/' + total;
      }
    }
  }

  // ── Global event handlers ────────────────────────────────────
  window._setSyllabusFilter = function (f) {
    syllabusFilter = f;
    render();
  };

  window._toggleTopicComplete = function (id) {
    if (completedTopics.has(id)) {
      completedTopics.delete(id);
    } else {
      completedTopics.add(id);
    }
    saveCompletedTopics(completedTopics);
    render();
  };

  window._toggleTopicAnswer = function (id, key) {
    var fullKey = key === 'pq' ? id : id + '_' + key;
    topicShowAnswer[fullKey] = !topicShowAnswer[fullKey];
    render();
  };

  window._setPYQYear = function (y) {
    pyqYear = y;
    render();
  };

  window._setPYQType = function (t) {
    pyqType = t;
    render();
  };

  window._setPracticeUnit = function (u) {
    practiceUnit = u;
    render();
  };

  window._setPracticeLevel = function (l) {
    practiceLevel = l;
    render();
  };

  window._showPracticeAnswer = function (id) {
    practiceAnswers[id] = true;
    render();
  };

  window._setCalcTab = function (tab) {
    calcState.tab = tab;
    render();
  };

  window._setCalcAlgo = function (algo) {
    calcState.algo = algo;
    render();
  };

  window._setCalcQuantum = function (val) {
    calcState.quantum = parseInt(val, 10) || 2;
    render();
  };

  window._updateCPUProcess = function (idx, field, val) {
    calcState.processes[idx][field] = parseInt(val, 10) || 0;
    render();
  };

  window._addCPUProcess = function () {
    var n = calcState.processes.length + 1;
    calcState.processes.push({ id: 'P' + n, arrivalTime: 0, burstTime: 1 });
    calcState.result = null;
    render();
  };

  window._removeCPUProcess = function (idx) {
    calcState.processes.splice(idx, 1);
    calcState.result = null;
    render();
  };

  window._calcCPU = function () {
    if (calcState.algo === 'fcfs') {
      calcState.result = fcfs(calcState.processes);
    } else if (calcState.algo === 'sjf') {
      calcState.result = sjf(calcState.processes);
    } else if (calcState.algo === 'rr') {
      calcState.result = roundRobin(calcState.processes, calcState.quantum);
    }
    render();
  };

  window._updateBankerAlloc = function (i, j, val) {
    calcState.bankerInput.allocation[i][j] = parseInt(val, 10) || 0;
  };

  window._updateBankerMax = function (i, j, val) {
    calcState.bankerInput.maximum[i][j] = parseInt(val, 10) || 0;
  };

  window._updateBankerAvail = function (j, val) {
    calcState.bankerInput.available[j] = parseInt(val, 10) || 0;
  };

  window._calcBanker = function () {
    calcState.bankerResult = bankersAlgorithm(calcState.bankerInput);
    render();
  };

  window._startExam = function () {
    examState.started = true;
    examState.done = false;
    examState.current = 0;
    examState.showAnswer = {};
    render();
  };

  window._revealExamAnswer = function (id) {
    examState.showAnswer[id] = true;
    render();
  };

  window._nextExam = function () {
    if (examState.current < mockQuestions.length - 1) {
      examState.current++;
      render();
    }
  };

  window._prevExam = function () {
    if (examState.current > 0) {
      examState.current--;
      render();
    }
  };

  window._finishExam = function () {
    examState.done = true;
    render();
  };

  window._retryExam = function () {
    examState.started = false;
    examState.done = false;
    examState.current = 0;
    examState.showAnswer = {};
    render();
  };

  // ── Init ─────────────────────────────────────────────────────
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);

  if (document.readyState !== 'loading') {
    render();
  }

})();
