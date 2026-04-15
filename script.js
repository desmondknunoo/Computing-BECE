document.documentElement.classList.add("js");

const optionLetters = ["A", "B", "C", "D"];

function mcq(title, prompt, options, answerIndex, note = "") {
  const answerText = `${optionLetters[answerIndex]}. ${options[answerIndex]}`;
  const explanation =
    note || "This option matches the correct concept, function or example asked in the question.";
  const noteHtml = `<p>${explanation}</p>`;

  return {
    title,
    promptHtml: `
      <p>${prompt}</p>
      <ul class="clean-list">
        ${options.map((option, index) => `<li><strong>${optionLetters[index]}.</strong> ${option}</li>`).join("")}
      </ul>
    `,
    answerHtml: `
      <h4>Answer</h4>
      <p><strong>${answerText}</strong></p>
      ${noteHtml}
    `,
    searchText: `${title} ${prompt} ${options.join(" ")} ${answerText} ${note}`.toLowerCase()
  };
}

function essay(title, promptHtml, answerHtml, searchText) {
  return {
    title,
    promptHtml,
    answerHtml: `<h4>Answer</h4>${answerHtml}`,
    searchText: `${title} ${searchText}`.toLowerCase()
  };
}

const questionGroups = [
  {
    paper: "MOCK 2",
    section: "Paper 2 - Essay",
    description: "Best Spark Mock 2, November 2025 essay paper and marking scheme.",
    items: [
      essay(
        "Question 1: Spreadsheet and Flowchart Basics",
        `
          <p>The spreadsheet entries below represent marks obtained by five students in a class.</p>
          <ul class="clean-list">
            <li>(a) State the name of the active cell.</li>
            <li>(b) State the name of the typeface used.</li>
            <li>(c) Write Excel functions for the highest mark, lowest mark, total mark and average mark.</li>
            <li>(d) Describe how to merge two or more table cells in Microsoft Word.</li>
            <li>(e) State the function of these flowchart symbols: terminator, decision, process and input/output.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Active cell: <strong>E5</strong>.</li>
            <li>(b) Typeface: <strong>Times New Roman</strong>.</li>
            <li>(c) Highest: <code>=MAX(B2:B6)</code>, Lowest: <code>=MIN(B2:B6)</code>, Total: <code>=SUM(B2:B6)</code>, Average: <code>=AVERAGE(B2:B6)</code>.</li>
            <li>(d) Select the cells, then use <strong>Merge Cells</strong> from the table tools, or right-click the selected cells and choose <strong>Merge Cells</strong>.</li>
            <li>(e) Terminator = start/stop, Decision = choice making, Process = calculation or action, Input/Output = reading or displaying data.</li>
          </ul>
        `,
        "active cell typeface max min sum average merge cells flowchart terminator decision process input output"
      ),
      essay(
        "Question 2: Parallel Computing and Storage",
        `
          <ul class="clean-list">
            <li>(a) Explain parallel computing and state three types of parallel computing.</li>
            <li>(b) State two differences between hard disk drives and solid state drives.</li>
            <li>(c) State the two main techniques for compressing files.</li>
            <li>(d) Differentiate between assistive technologies and adaptive technologies.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Parallel computing is when multiple processors or computers work at the same time to solve a problem faster. Types: <strong>bit-level parallelism</strong>, <strong>instruction-level parallelism</strong> and <strong>data parallelism</strong>.</li>
            <li>(b) HDDs use spinning magnetic platters, while SSDs use flash memory. SSDs are faster and stronger against shock, while HDDs are usually cheaper and offer larger capacity.</li>
            <li>(c) The two techniques are <strong>lossless compression</strong> and <strong>lossy compression</strong>.</li>
            <li>(d) Assistive technologies are tools specially designed to help people with disabilities perform tasks, while adaptive technologies are modified versions of existing tools to make them usable for people with disabilities.</li>
          </ul>
        `,
        "parallel computing hard disk ssd compression assistive adaptive"
      ),
      essay(
        "Question 3: Social Media, Partitioning, Fifth Generation and Word Wrap",
        `
          <ul class="clean-list">
            <li>(a) State three social media platforms for business advertising and two risks of social media.</li>
            <li>(b) Explain hard disk partitioning and state two importance of partitioning.</li>
            <li>(c) State two features of fifth-generation computers and explain artificial intelligence.</li>
            <li>(d) Explain word wrap and differentiate hard word wrap from soft wrap.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Examples: <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>TikTok</strong>, <strong>Twitter</strong>. Risks: <strong>cyberbullying</strong>, <strong>privacy breach</strong> or <strong>identity theft</strong>.</li>
            <li>(b) Hard disk partitioning is dividing a hard disk into separate sections that work like separate units. Importance: better organisation, easier backup and recovery, improved performance, support for multiple operating systems or reduced fragmentation.</li>
            <li>(c) Features include <strong>artificial intelligence</strong>, <strong>high-speed processing</strong>, <strong>natural language processing</strong> or <strong>superconducting materials</strong>. AI is the ability of computers to perform tasks that normally need human intelligence.</li>
            <li>(d) Word wrap automatically moves text to the next line when the current line ends. Hard wrap inserts a line break manually, while soft wrap only changes how text is displayed on screen.</li>
          </ul>
        `,
        "social media partitioning fifth generation artificial intelligence word wrap"
      ),
      essay(
        "Question 4: Spreadsheet Data Types, Shortcuts and Data Threats",
        `
          <ul class="clean-list">
            <li>(a) Identify spreadsheet data types such as <code>=C3+D3-E3</code>, <code>=PRODUCT(B3:C3)</code>, a date and a currency value. Differentiate a spreadsheet function from a spreadsheet formula.</li>
            <li>(b) State differences between a folder and a file, and outline steps to create a folder without using a mouse.</li>
            <li>(c) Differentiate Save and Save As. State the actions for <code>Ctrl + C</code>, <code>Ctrl + K</code>, <code>Ctrl + V</code> and <code>Ctrl + D</code> in word processing.</li>
            <li>(d) Differentiate operators and operands.</li>
            <li>(e) Explain data threat, give two examples and state four ways to secure data.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) <code>=C3+D3-E3</code> is a <strong>formula</strong>, <code>=PRODUCT(B3:C3)</code> is a <strong>function</strong>, a date entry is <strong>Date</strong>, and <code>$100.00</code> is <strong>Currency</strong>. A function is a built-in formula, while a formula is any user-written expression that calculates a result.</li>
            <li>(b) A folder can contain files and folders, while a file contains stored data. Files usually have extensions, folders usually do not. To create a folder with the keyboard: move to the location, press <strong>Ctrl + Shift + N</strong>, type the name and press Enter.</li>
            <li>(c) Save updates the current file. Save As stores the work under a new name, location or format. <code>Ctrl + C</code> = copy, <code>Ctrl + K</code> = insert hyperlink, <code>Ctrl + V</code> = paste, <code>Ctrl + D</code> = open font dialog.</li>
            <li>(d) Operators are symbols used to perform operations, while operands are the values or variables acted upon.</li>
            <li>(e) A data threat is anything that can damage, steal, change or block data. Examples: hacking and malware. Protection methods: encryption, access control, backups and firewalls.</li>
          </ul>
        `,
        "formula function folder file save save as shortcuts operators operands data threat security"
      ),
      essay(
        "Question 5: Robotics, Presentation and Programming Data Types",
        `
          <ul class="clean-list">
            <li>(a) Outline Isaac Asimov's laws of robotics and state two disadvantages of robots in everyday life.</li>
            <li>(b) Differentiate transitions from animations and give two examples of transition effects.</li>
            <li>(c) State the programming data types of <code>1.28</code>, <code>"Ama"</code>, <code>A</code>, <code>-1</code> and a true-or-false statement, then evaluate <code>5//2 + 4*2^3 + 6mod4</code>.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) First law: a robot must not harm a human. Second law: a robot must obey humans unless that conflicts with the first law. Third law: a robot must protect itself unless that conflicts with the first or second law. Disadvantages include job displacement, cost, malfunction risk, hacking risk and reduced human interaction.</li>
            <li>(b) A transition is an effect between slides, while an animation affects objects on a slide. Examples of transitions: <strong>Fade</strong>, <strong>Wipe</strong>, <strong>Zoom</strong> or <strong>Morph</strong>.</li>
            <li>(c) Data types: <strong>Float</strong>, <strong>String</strong>, <strong>Character</strong>, <strong>Integer</strong> and <strong>Boolean</strong>. The expression evaluates to <strong>36</strong>.</li>
          </ul>
        `,
        "robotics laws transitions animations data types boolean evaluate expression"
      )
    ]
  },
  {
    paper: "MOCK 2",
    section: "Paper 1 - Objective 1 to 10",
    description: "Multiple-choice questions from Best Spark Mock 2.",
    items: [
      mcq("Question 1", "The basic unit of information in computing is:", ["Byte", "Bit", "Kilobyte", "Megabyte"], 1),
      mcq("Question 2", "What is the main function of an operating system?", ["To compile programs", "To manage computer hardware and software resources", "To facilitate internet browsing", "To perform arithmetic operations"], 1),
      mcq("Question 3", "Which of the following is an example of application software?", ["Microsoft Word", "Linux", "BIOS", "UNIX"], 0),
      mcq("Question 4", "What device is primarily used to capture video input?", ["Scanner", "Microphone", "Webcam", "Printer"], 2),
      mcq("Question 5", "Which of the following protocols is used for secure internet transactions?", ["FTP", "HTTP", "HTTPS", "SMTP"], 2),
      mcq("Question 6", "Which device is used for entering text into a computer?", ["Mouse", "Keyboard", "Monitor", "Printer"], 1),
      mcq("Question 7", "RAM in computing stands for:", ["Read Access Memory", "Random Access Memory", "Read And Modify", "Random And Modify"], 1),
      mcq("Question 8", "Which of the following is a volatile memory type?", ["ROM", "SSD", "RAM", "HDD"], 2),
      mcq("Question 9", "The part of the computer responsible for executing instructions is the:", ["Hard drive", "CPU", "RAM", "Motherboard"], 1),
      mcq("Question 10", "The shortcut key to copy text in most software applications is:", ["Ctrl + A", "Ctrl + S", "Ctrl + C", "Ctrl + X"], 2)
    ]
  },
  {
    paper: "MOCK 2",
    section: "Paper 1 - Objective 11 to 20",
    description: "Multiple-choice questions from Best Spark Mock 2.",
    items: [
      mcq("Question 11", "Which of the following is not an operating system?", ["Windows 10", "MacOS", "Linux", "Microsoft Word"], 3),
      mcq("Question 12", "What does WAN stand for in networking?", ["Wide Area Network", "World Area Network", "Wireless Area Network", "Web Area Network"], 0),
      mcq("Question 13", "Which of the following is a primary function of an antivirus program?", ["Increase processing speed", "Detect and remove malware", "Manage network connections", "Optimize software performance"], 1),
      mcq("Question 14", "In computing, what does URL stand for?", ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"], 0),
      mcq("Question 15", "Which component is considered the brain of the computer?", ["Hard drive", "CPU", "RAM", "Motherboard"], 1),
      mcq("Question 16", "Which of the following is a programming language?", ["HTML", "HTTP", "USB", "ISP"], 0, "Exam-style answer from the source key: HTML. In stricter computer science language, HTML is usually described as a markup language."),
      mcq("Question 17", "The main function of a router is to:", ["Store data", "Print documents", "Connect different networks", "Perform calculations"], 2),
      mcq("Question 18", "Which of the following is a disadvantage of cloud computing?", ["Limited storage capacity", "Requires internet connection", "High hardware costs", "Limited accessibility"], 1),
      mcq("Question 19", "The software that allows users to browse the internet is called:", ["Browser", "Search engine", "Web server", "ISP"], 0),
      mcq("Question 20", "A small, portable device used to store and transfer data is called:", ["Hard drive", "SSD", "USB flash drive", "CD-ROM"], 2)
    ]
  },
  {
    paper: "MOCK 2",
    section: "Paper 1 - Objective 21 to 30",
    description: "Multiple-choice questions from Best Spark Mock 2.",
    items: [
      mcq("Question 21", "Which of the following is not a characteristic of a good password?", ["Short and simple", "Combination of letters, numbers, and symbols", "Unique and not easily guessable", "Regularly updated"], 0),
      mcq("Question 22", "The device used to connect a computer to a telephone line for internet access is called:", ["Router", "Switch", "Modem", "Hub"], 2),
      mcq("Question 23", "The process of starting or restarting a computer is known as:", ["Booting", "Logging in", "Installing", "Formatting"], 0),
      mcq("Question 24", "The command to create a new folder in most operating systems is:", ["Ctrl + N", "Ctrl + F", "Ctrl + T", "Ctrl + O"], 0, "The source marking scheme gives A. In many Windows systems, the common keyboard shortcut is Ctrl + Shift + N."),
      mcq("Question 25", "Which of the following is not an input device?", ["Scanner", "Mouse", "Printer", "Keyboard"], 2),
      mcq("Question 26", "The software used to create spreadsheets is:", ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Access"], 1),
      mcq("Question 27", "Which of the following is an output device?", ["Monitor", "Keyboard", "Mouse", "Scanner"], 0),
      mcq("Question 28", "Which type of storage device is known for having no moving parts?", ["HDD", "SSD", "Floppy disk", "DVD"], 1),
      mcq("Question 29", "In networking, what does LAN stand for?", ["Local Access Network", "Local Area Network", "Large Area Network", "Long Area Network"], 1),
      mcq("Question 30", "Which of the following is a use of database management systems?", ["Browsing the internet", "Managing large sets of structured data", "Editing images", "Designing websites"], 1)
    ]
  },
  {
    paper: "MOCK 2",
    section: "Paper 1 - Objective 31 to 40",
    description: "Multiple-choice questions from Best Spark Mock 2.",
    items: [
      mcq("Question 31", "The process of converting human-readable data into a coded form is known as:", ["Compression", "Encryption", "Decompression", "Decryption"], 1),
      mcq("Question 32", "Which device is used to convert printed documents into digital format?", ["Printer", "Monitor", "Scanner", "Keyboard"], 2),
      mcq("Question 33", "The term used for malicious software designed to harm or exploit a computer system is:", ["Virus", "Program", "Software", "Application"], 0),
      mcq("Question 34", "Which of the following is an example of an optical storage device?", ["USB flash drive", "Hard disk", "DVD", "SSD"], 2),
      mcq("Question 35", "Which component of a computer is responsible for generating the visual output on a display screen?", ["Sound card", "Network card", "Graphics card", "Motherboard"], 2),
      mcq("Question 36", "Which of the following is an example of an input/output device?", ["Printer", "Monitor", "Keyboard", "Touchscreen"], 3),
      mcq("Question 37", "What is the primary purpose of using a firewall in a computer network?", ["To speed up the internet connection", "To protect the network from unauthorized access", "To store backup data", "To monitor system performance"], 1),
      mcq("Question 38", "Which type of memory is used to store the BIOS settings in a computer?", ["RAM", "ROM", "Cache", "Flash memory"], 1),
      mcq("Question 39", "The process of finding and correcting errors in software code is known as:", ["Compiling", "Debugging", "Executing", "Testing"], 1),
      mcq("Question 40", "Which of the following is a common use of spreadsheets in business?", ["Writing reports", "Analyzing financial data", "Designing websites", "Sending emails"], 1)
    ]
  },
  {
    paper: "MOCK 3",
    section: "Paper 2 - Essay",
    description: "Pathfinder Mock 3, January 2026 essay paper and marking scheme.",
    items: [
      essay(
        "Question 1: OSI Model, Document Holder and Wearable Technology",
        `
          <ul class="clean-list">
            <li>(a) Identify the OSI layer for signals or bits, the layer that ensures delivery without errors, the layer that breaks a message into smaller segments, and the layer that provides the user interface. Explain why the OSI model matters.</li>
            <li>(b) Identify the device connected to the monitor, explain its function, give two benefits and state two types.</li>
            <li>(c) Give three examples of wearable technology and four ways wearable technologies are important in daily life.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Physical layer = signals or bits. Data link layer = error-free local delivery. Transport layer = segmentation. Application layer = user interface. The OSI model is important because it organises communication into layers and supports standard, reliable data transmission between devices.</li>
            <li>(b) The device is a <strong>document holder</strong>. It holds papers at eye level for easy reference. Benefits include reduced neck and eye strain, improved typing speed and better organisation. Types: <strong>clip-on document holder</strong> and <strong>free-standing document holder</strong>.</li>
            <li>(c) Examples: <strong>smartwatch</strong>, <strong>fitness tracker</strong>, <strong>VR headset</strong>, <strong>smart glasses</strong> or <strong>Bluetooth earpiece</strong>. Importance: health monitoring, notifications, communication, safety and navigation assistance.</li>
          </ul>
        `,
        "osi model physical layer data link transport application document holder wearable technology"
      ),
      essay(
        "Question 2: Publisher Ribbons, Internet Terms and Presentation Software",
        `
          <ul class="clean-list">
            <li>(a) State the uses of the Home, Insert, Design and Text Box ribbons in Publisher.</li>
            <li>(b) Explain the terms broadband and browser.</li>
            <li>(c) List four examples of presentation software.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) <strong>Home</strong> formats text and paragraphs. <strong>Insert</strong> adds objects like pictures, shapes and tables. <strong>Design</strong> controls themes, colour schemes and page design. <strong>Text Box</strong> inserts text boxes.</li>
            <li>(b) <strong>Broadband</strong> is a high-speed internet connection. A <strong>browser</strong> is software used to access and view web pages.</li>
            <li>(c) Examples include <strong>Microsoft PowerPoint</strong>, <strong>Google Slides</strong>, <strong>Prezi</strong>, <strong>LibreOffice Impress</strong> and <strong>Canva</strong>.</li>
          </ul>
        `,
        "publisher ribbons broadband browser presentation software"
      ),
      essay(
        "Question 3: Tables, Photo Sharing and Keyboarding",
        `
          <ul class="clean-list">
            <li>(a) Explain what tables are in word processing and outline the steps to insert a table.</li>
            <li>(b) Give two examples of photo sharing sites and state two advantages of using them.</li>
            <li>(c) State two keyboarding techniques that help a student type quickly and accurately.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Tables organise data into rows and columns. To insert one, place the cursor where it is needed, open the <strong>Insert</strong> tab, choose <strong>Table</strong> and select the number of rows and columns.</li>
            <li>(b) Examples: <strong>Instagram</strong>, <strong>Flickr</strong>, <strong>Pinterest</strong>, <strong>Imgur</strong> or <strong>Google Photos</strong>. Advantages: easier sharing, online storage, collaboration and feedback.</li>
            <li>(c) <strong>Touch typing</strong> and <strong>correct finger placement</strong>.</li>
          </ul>
        `,
        "tables word processing photo sharing keyboarding touch typing"
      ),
      essay(
        "Question 4: Perceptual Computing, Drivers and Workstations",
        `
          <ul class="clean-list">
            <li>(a) Explain perceptual computing and state three features.</li>
            <li>(b) State three purposes of device drivers and explain why updating them is important.</li>
            <li>(c) What is a workstation?</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Perceptual computing lets users interact with computers using natural methods such as gestures, voice and facial recognition. Features include <strong>gesture recognition</strong>, <strong>voice commands</strong>, <strong>motion sensing</strong>, <strong>eye tracking</strong> and <strong>facial expression recognition</strong>.</li>
            <li>(b) Drivers help the operating system communicate with hardware, control devices and ensure devices work properly. Updating drivers fixes bugs, improves performance and compatibility, adds features and strengthens security.</li>
            <li>(c) A workstation is a high-performance computer designed for technical, professional or scientific work.</li>
          </ul>
        `,
        "perceptual computing drivers workstation"
      ),
      essay(
        "Question 5: Operators, Data Security and File Extensions",
        `
          <ul class="clean-list">
            <li>(a) Explain arithmetic logical operators and state three types of programming expressions.</li>
            <li>(b) Explain data security and state three ways data can be protected.</li>
            <li>(c) What is a file name extension?</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Arithmetic logical operators are symbols used in programming for calculations and comparisons, for example <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> and comparison signs. The three types of expressions are <strong>arithmetic</strong>, <strong>relational</strong> and <strong>logical</strong> expressions.</li>
            <li>(b) Data security means protecting digital information from unauthorised access, corruption or theft. Protection methods include <strong>strong passwords</strong>, <strong>antivirus software</strong>, <strong>regular backups</strong>, <strong>encryption</strong> and <strong>access restrictions</strong>.</li>
            <li>(c) A file name extension is the ending part of a file name that shows the file type, such as <code>.docx</code>, <code>.jpg</code> or <code>.pdf</code>.</li>
          </ul>
        `,
        "operators expressions data security file extension"
      )
    ]
  },
  {
    paper: "MOCK 3",
    section: "Paper 1 - Objective 1 to 10",
    description: "Multiple-choice questions from Pathfinder Mock 3.",
    items: [
      mcq("Question 1", "Ama receives repeated threatening messages from a classmate through WhatsApp and Instagram. This behaviour is best described as:", ["online security breach", "cyber harassment", "digital protection", "cyber intimidation"], 1),
      mcq("Question 2", "A programmer runs a program and corrects mistakes that prevent it from working properly. This process is known as:", ["program testing", "error correction", "bug creation", "game coding"], 1),
      mcq("Question 3", "A school decides to reduce energy use and electronic waste in its computer lab. This practice is known as:", ["ergonomic computing", "green technology", "safety computing", "environmental care"], 1),
      mcq("Question 4", "A student plays a movie stored on a flash drive using a computer. The action performed by the computer is called:", ["data recording", "data caching", "data reading", "data writing"], 2),
      mcq("Question 5", "While designing a flyer, Kwame removes unwanted edges of a picture without deleting it. The tool he uses is called:", ["erase tool", "image formatting", "picture cropping", "image shaping"], 2),
      mcq("Question 6", "Scientists explain why quantum computers are faster than traditional computers. This is mainly because quantum bits:", ["exist in multiple states at the same time", "are physically larger than normal bits", "need constant electricity", "store only one value"], 0),
      mcq("Question 7", "A technology student lists possible uses of smart watches. Which one is NOT a typical use?", ["Tracking body activities", "Improving gaming experience", "Operating home devices", "Forecasting rainfall"], 3),
      mcq("Question 8", "An office shares files through a storage system connected to its internal network. This system is known for:", ["storing data offline only", "depending on the internet always", "providing shared storage over a local network", "allowing access by one user only"], 2),
      mcq("Question 9", "Kojo wants to insert a screenshot into a PowerPoint slide. Which tab should he use?", ["Home", "Insert", "Design", "Review"], 1),
      mcq("Question 10", "A social media user decides who can view personal posts. This action relates to:", ["public sharing", "platform restriction", "automatic posting", "privacy control"], 3)
    ]
  },
  {
    paper: "MOCK 3",
    section: "Paper 1 - Objective 11 to 20",
    description: "Multiple-choice questions from Pathfinder Mock 3.",
    items: [
      mcq("Question 11", "A user wants to create a new publication in Desktop Publishing. Which option is NOT a valid way?", ["Print-based publication", "Ready-made template", "Blank publication", "Highlighted template"], 3),
      mcq("Question 12", "A user scrolls through a long document using a mouse. This is mainly done with the:", ["pointer", "click button", "scroll wheel", "sensitivity control"], 2),
      mcq("Question 13", "While browsing a website, Samuel notices underlined words in blue that lead to other pages. These words are known as:", ["web titles", "icons", "hyperlinks", "captions"], 2),
      mcq("Question 14", "A teacher wants students to understand the main function of an operating system. Which of the following best describes an operating system?", ["A device used for input", "Software that manages computer hardware and software", "A storage device", "A programming language"], 1),
      mcq("Question 15", "A presenter wants to summarize ideas using diagrams and visuals in PowerPoint. Which feature is best for this?", ["Slide controller", "SmartArt graphics", "Speaker notes", "Slide arrangement"], 1),
      mcq("Question 16", "An IT expert tests a system legally to find weaknesses before hackers do. This activity is known as:", ["data theft", "system disruption", "ethical hacking", "malware spreading"], 2),
      mcq("Question 17", "A journalist wants to combine two table cells into one in a document. Which option should be used?", ["Join rows", "Merge cells", "Expand column", "Adjust table style"], 1),
      mcq("Question 18", "Someone illegally breaks into a computer network to cause harm. This act is called:", ["cyber harassment", "online tracking", "hacking", "phishing"], 2),
      mcq("Question 19", "A computer lab is arranged to protect users’ eyes. Proper lighting helps to:", ["save power", "reduce glare and eye strain", "increase flickering", "place screens under bright light"], 1),
      mcq("Question 20", "A user wants to divide a merged table cell back into parts. Which action should be taken?", ["Right-click and select split cells", "Double-click the cell", "Press Ctrl + S", "Change font size"], 1, "The source marking scheme gives B. In practical Word use, the common command is usually Split Cells.")
    ]
  },
  {
    paper: "MOCK 3",
    section: "Paper 1 - Objective 21 to 30",
    description: "Multiple-choice questions from Pathfinder Mock 3.",
    items: [
      mcq("Question 21", "A community adopts technology to improve business efficiency. Technology contributes by:", ["limiting small businesses", "improving productivity", "encouraging monopoly", "reducing innovation"], 1),
      mcq("Question 22", "A user applies ready-made text formatting in PowerPoint. The best feature to use is:", ["WordArt", "Text effects", "Font colour", "Quick styles"], 3),
      mcq("Question 23", "A manager lists discussion points that do not follow a specific order. The best method to use is:", ["numbering", "bullet points", "tables", "footnotes"], 1),
      mcq("Question 24", "A presenter practices slide timing before the actual presentation. Which option is used?", ["Presenter mode", "Slide display", "Rehearse timings", "Record slideshow"], 2),
      mcq("Question 25", "A computer processes all data using a specific number system. That system is:", ["decimal", "octal", "binary", "hexadecimal"], 2),
      mcq("Question 26", "A student learns about correct sitting posture at the computer. Which posture is NOT recommended?", ["Sitting upright with support", "Feet flat on the floor", "Leaning forward with rounded back", "Back properly supported"], 2),
      mcq("Question 27", "Fifth-generation computers use neural networks mainly to:", ["enable wireless connections", "store cloud data", "imitate human thinking patterns", "power peripheral devices"], 2),
      mcq("Question 28", "Smart glasses display digital images on real surroundings. This feature is called:", ["virtual reality", "augmented reality", "3D imaging", "hologram display"], 1),
      mcq("Question 29", "A school stores files that can be accessed by computers within the same network. This storage type is:", ["primary storage", "secondary storage", "network storage", "holographic storage"], 2),
      mcq("Question 30", "Data is stored using laser beams as three-dimensional images. This technology is known as:", ["holographic storage", "cloud storage", "smart cards", "network storage"], 0)
    ]
  },
  {
    paper: "MOCK 3",
    section: "Paper 1 - Objective 31 to 40",
    description: "Multiple-choice questions from Pathfinder Mock 3.",
    items: [
      mcq("Question 31", "A family sets up a system to manage music and videos at home. The best technology is:", ["cloud server", "media server", "direct storage", "storage network"], 1),
      mcq("Question 32", "A student discusses advantages of cloud storage. Which is NOT an advantage?", ["Accessible anywhere", "Cannot be expanded", "Has security features", "Cost-effective"], 1),
      mcq("Question 33", "A user compares SSD and HDD storage devices. One disadvantage of SSD is that it:", ["costs more", "writes faster", "has no moving parts", "uses less power"], 0),
      mcq("Question 34", "A teacher lists examples of flash memory. Which one does NOT belong?", ["Solid-state drive", "Memory card", "USB flash drive", "Hard disk drive"], 3),
      mcq("Question 35", "A shop prints receipts using heat-sensitive paper. The printer used is:", ["inkjet", "thermal", "laser", "solid ink"], 1),
      mcq("Question 36", "Products in supermarkets have vertical lines for identification. These lines are called:", ["QR codes", "barcodes", "item numbers", "RFID labels"], 1),
      mcq("Question 37", "An object appears on a slide during a presentation. Which animation group controls this?", ["Exit", "Entrance", "Emphasis", "Motion path"], 1),
      mcq("Question 38", "A digital currency operates without banks or government control. This currency is:", ["electronic money", "mobile money", "transaction card", "bitcoin"], 3),
      mcq("Question 39", "A user responds only to the sender of an email. This action is called:", ["reply", "forward", "reply all", "forward all"], 0),
      mcq("Question 40", "A student learns about copyright protection. Which item is NOT protected?", ["Books", "Audio recordings", "Ideas", "Software"], 2)
    ]
  },
  {
    paper: "SECTION B PRACTICE",
    section: "Theory Questions",
    description: "User-supplied Section B practice questions with model answers.",
    items: [
      essay(
        "Question 1: General ICT Concepts",
        `
          <ul class="clean-list">
            <li>(a) What is a computer system? State two components of a computer system.</li>
            <li>(b) Define the information processing cycle and list its four stages.</li>
            <li>(c) State three functions of an operating system.</li>
            <li>(d) Give two examples each of input devices and output devices.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) A computer system is a complete arrangement of hardware, software, data, procedures and users that work together to process data into information. Two components are <strong>hardware</strong> and <strong>software</strong>.</li>
            <li>(b) The information processing cycle is the series of steps used to turn raw data into useful information. The four stages are <strong>input</strong>, <strong>processing</strong>, <strong>output</strong> and <strong>storage</strong>.</li>
            <li>(c) Functions of an operating system include managing hardware resources, providing a user interface, managing files and controlling application programs.</li>
            <li>(d) Input devices: keyboard, mouse. Output devices: monitor, printer.</li>
          </ul>
        `,
        "computer system information processing cycle operating system input output"
      ),
      essay(
        "Question 2: Internet and Communication",
        `
          <ul class="clean-list">
            <li>(a) What is the internet and state two uses of it.</li>
            <li>(b) What is a web browser and give two examples.</li>
            <li>(c) Explain URL and search engine.</li>
            <li>(d) State two dangers of using the internet.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) The internet is a worldwide network of connected computers and devices. Uses include communication, research, learning, online business and entertainment.</li>
            <li>(b) A web browser is software used to open and view web pages. Examples: <strong>Google Chrome</strong> and <strong>Mozilla Firefox</strong>.</li>
            <li>(c) <strong>URL</strong> means Uniform Resource Locator and it is the address of a resource on the web. A <strong>search engine</strong> is a web tool used to find information online, such as Google or Bing.</li>
            <li>(d) Dangers include cyberbullying, scams, phishing, identity theft, malware and exposure to false information.</li>
          </ul>
        `,
        "internet browser url search engine internet dangers"
      ),
      essay(
        "Question 3: Storage and Memory",
        `
          <ul class="clean-list">
            <li>(a) Differentiate RAM and ROM.</li>
            <li>(b) State three examples of storage devices.</li>
            <li>(c) Explain two uses of a USB flash drive.</li>
            <li>(d) What is backup and why is it important?</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) <strong>RAM</strong> is temporary memory that loses data when power goes off, whereas <strong>ROM</strong> stores permanent instructions and keeps data without power.</li>
            <li>(b) Examples: hard disk, SSD, USB flash drive, memory card, CD or DVD.</li>
            <li>(c) A USB flash drive can be used to store files and to transfer files from one computer to another.</li>
            <li>(d) Backup is the process of making a copy of data so it can be restored if the original is lost, damaged or deleted. It is important for recovery and protection against data loss.</li>
          </ul>
        `,
        "ram rom storage devices usb flash drive backup"
      ),
      essay(
        "Question 4: Word Processing and Application Software",
        `
          <ul class="clean-list">
            <li>(a) What is a word processor?</li>
            <li>(b) State four features of a word processing application.</li>
            <li>(c) Explain the difference between editing and formatting.</li>
            <li>(d) List two examples of word processing software.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) A word processor is software used to create, edit, format and print text documents.</li>
            <li>(b) Features include spell check, find and replace, text formatting, tables, headers and footers, page numbering and alignment.</li>
            <li>(c) <strong>Editing</strong> changes the content, for example inserting or deleting words. <strong>Formatting</strong> changes the appearance, for example font size, colour or alignment.</li>
            <li>(d) Examples: <strong>Microsoft Word</strong> and <strong>LibreOffice Writer</strong>.</li>
          </ul>
        `,
        "word processor editing formatting features software"
      ),
      essay(
        "Question 5: Computer Hardware and Devices",
        `
          <ul class="clean-list">
            <li>(a) What is hardware and state three types of hardware devices.</li>
            <li>(b) Explain the function of the keyboard, mouse and monitor.</li>
            <li>(c) What is a pointing device? Give two examples.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Hardware is the physical part of a computer that can be seen and touched. Types include input devices, output devices, storage devices and processing devices.</li>
            <li>(b) Keyboard: enters text and commands. Mouse: points, clicks and selects items. Monitor: displays output visually.</li>
            <li>(c) A pointing device is a device used to control the pointer on the screen. Examples: mouse and touchpad.</li>
          </ul>
        `,
        "hardware keyboard mouse monitor pointing device"
      ),
      essay(
        "Question 6: Data and Information",
        `
          <ul class="clean-list">
            <li>(a) Differentiate data and information.</li>
            <li>(b) State three characteristics of good information.</li>
            <li>(c) Explain two ways of storing data.</li>
            <li>(d) State two uses of data in everyday life.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) Data are raw facts that have not been processed, whereas information is processed data that has meaning and is useful.</li>
            <li>(b) Good information should be <strong>accurate</strong>, <strong>relevant</strong>, <strong>timely</strong> and <strong>complete</strong>.</li>
            <li>(c) Data can be stored <strong>electronically</strong> using digital devices such as hard drives and flash drives, or <strong>manually</strong> using paper files, books or records.</li>
            <li>(d) Data is used for decision making, record keeping, planning, business analysis and communication.</li>
          </ul>
        `,
        "data information characteristics storing data uses"
      ),
      essay(
        "Question 7: Flowchart and Problem Solving",
        `
          <ul class="clean-list">
            <li>(a) What is a flowchart?</li>
            <li>(b) Draw and name three flowchart symbols.</li>
            <li>(c) State two importance of flowcharts.</li>
            <li>(d) Write an algorithm to find the sum of two numbers.</li>
          </ul>
        `,
        `
          <ul class="clean-list">
            <li>(a) A flowchart is a diagram that shows the steps of a process or algorithm using standard symbols.</li>
            <li>(b) Three symbols: terminator for start/stop, process for action, and decision for yes/no choice. Input/output is also common.</li>
            <li>(c) Flowcharts make a process easy to understand and help identify errors before coding.</li>
            <li>(d) Example algorithm: Start. Input first number. Input second number. Set sum = first number + second number. Display sum. Stop.</li>
          </ul>
        `,
        "flowchart symbols importance algorithm sum of two numbers"
      )
    ]
  },
  {
    paper: "SAMPLE",
    section: "Objective Practice",
    description: "New practice questions created from the syllabus, with heavier focus on Strands 3 and 4.",
    items: [
      mcq("Sample Objective 1", "Which network type usually covers a school computer lab?", ["WAN", "LAN", "MAN", "PAN"], 1),
      mcq("Sample Objective 2", "Which email feature hides copied recipients from the main receiver?", ["To", "CC", "BCC", "Reply"], 2),
      mcq("Sample Objective 3", "Which flowchart symbol is used for a yes-or-no choice?", ["Process", "Decision", "Input/Output", "Terminator"], 1),
      mcq("Sample Objective 4", "Which data type stores a decimal number such as 14.75?", ["Integer", "String", "Float", "Boolean"], 2),
      mcq("Sample Objective 5", "The main purpose of encryption is to:", ["speed up data entry", "hide data from unauthorized people", "print documents clearly", "arrange records alphabetically"], 1),
      mcq("Sample Objective 6", "A blog is best described as:", ["a hardware device for networking", "a regularly updated website or web page for sharing posts", "a spreadsheet chart type", "a desktop icon"], 1),
      mcq("Sample Objective 7", "Which robot part collects information from the environment?", ["Controller", "Sensor", "Actuator", "Monitor"], 1),
      mcq("Sample Objective 8", "An expert system mainly uses which rule structure?", ["Paint-Print", "Load-Save", "IF-THEN", "Start-Stop"], 2)
    ]
  },
  {
    paper: "SAMPLE",
    section: "Theory Practice",
    description: "New theory questions created from the syllabus, with heavier focus on Strands 3 and 4.",
    items: [
      essay(
        "Sample Theory 1: Internet and Web",
        `
          <p>Differentiate between the internet and the World Wide Web, then state two uses of each.</p>
        `,
        `
          <p>The <strong>internet</strong> is the global system of connected networks, while the <strong>World Wide Web</strong> is a service on the internet made up of web pages and websites. Uses of the internet include email, online gaming, file transfer and video calls. Uses of the web include searching for information, reading articles, learning online and using web applications.</p>
        `,
        "internet world wide web uses"
      ),
      essay(
        "Sample Theory 2: Information Security",
        `
          <p>Explain confidentiality, integrity and availability, and give one practical example for each.</p>
        `,
        `
          <ul class="clean-list">
            <li><strong>Confidentiality</strong> means data should only be seen by authorised people. Example: protecting student records with passwords.</li>
            <li><strong>Integrity</strong> means data should stay correct and unchanged unless updated properly. Example: exam scores should not be edited secretly.</li>
            <li><strong>Availability</strong> means data and services should be ready when needed. Example: a school portal should be accessible during registration.</li>
          </ul>
        `,
        "confidentiality integrity availability examples"
      ),
      essay(
        "Sample Theory 3: Variables and Constants",
        `
          <p>Differentiate between a variable and a constant, then give one example of each in a school program.</p>
        `,
        `
          <p>A <strong>variable</strong> stores a value that can change, while a <strong>constant</strong> stores a value that should remain fixed. Example of a variable: <code>studentScore</code>. Example of a constant: <code>PASS_MARK = 50</code>.</p>
        `,
        "variable constant examples"
      ),
      essay(
        "Sample Theory 4: Pseudocode",
        `
          <p>Write pseudocode to check whether a number entered by the user is even or odd.</p>
        `,
        `
          <ul class="clean-list">
            <li>Start</li>
            <li>Input number</li>
            <li>If number mod 2 = 0, display "Even"</li>
            <li>Else display "Odd"</li>
            <li>Stop</li>
          </ul>
        `,
        "pseudocode even odd mod"
      ),
      essay(
        "Sample Theory 5: Robotics and AI",
        `
          <p>State three uses of robots in society and explain one way artificial intelligence improves modern services.</p>
        `,
        `
          <p>Robots are used in manufacturing, surgery, transport, packaging, laboratories and dangerous environments. Artificial intelligence improves modern services by helping systems learn from data, make decisions and produce faster results, for example in expert medical support, voice assistants or image recognition.</p>
        `,
        "robots society ai services"
      )
    ]
  }
];

function setActiveTopNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".top-nav a").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    const matchesDirect = href === currentPage;
    const matchesStrand3 = href === "strand-3.html" && currentPage.startsWith("strand-3");
    const matchesStrand4 = href === "strand-4.html" && currentPage.startsWith("strand-4");
    const matchesStrand1 = href === "strand-1.html" && currentPage.startsWith("strand-1");
    const matchesStrand2 = href === "strand-2.html" && currentPage.startsWith("strand-2");
    const matchesDocuments =
      href === "documents.html" && (currentPage === "documents.html" || currentPage.startsWith("view-"));

    if (matchesDirect || matchesStrand1 || matchesStrand2 || matchesStrand3 || matchesStrand4 || matchesDocuments) {
      link.classList.add("active");
    }
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function renderQuestionBank() {
  const root = document.querySelector("[data-question-bank]");
  const searchField = document.getElementById("question-search");
  const resultNote = document.getElementById("results-note");
  const filterButtons = document.querySelectorAll("[data-paper-filter]");
  const actionButtons = document.querySelectorAll("[data-question-action]");

  if (!root || !searchField || !resultNote || !filterButtons.length) {
    return;
  }

  let activePaper = "ALL";

  function getVisibleGroups() {
    const query = searchField.value.trim().toLowerCase();

    return questionGroups
      .filter((group) => activePaper === "ALL" || group.paper === activePaper)
      .map((group) => {
        const items = group.items.filter((item) => !query || item.searchText.includes(query));
        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }

  function render() {
    const visibleGroups = getVisibleGroups();
    const totalItems = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

    resultNote.textContent = `Showing ${totalItems} question${totalItems === 1 ? "" : "s"} across ${visibleGroups.length} section${visibleGroups.length === 1 ? "" : "s"}.`;

    if (!visibleGroups.length) {
      root.innerHTML = `
        <div class="empty-state">
          No questions match this filter. Try another paper name or a broader keyword.
        </div>
      `;
      return;
    }

    root.innerHTML = visibleGroups
      .map((group) => {
        const cardHtml = group.items
          .map(
            (item) => `
              <details class="question-card" open>
                <summary>
                  <span class="question-title-wrap">
                    <span class="question-tag">${group.paper}</span>
                    <span class="question-title">${item.title}</span>
                  </span>
                  <span class="question-toggle">Open</span>
                </summary>
                <div class="question-body">
                  <div class="question-prompt">${item.promptHtml}</div>
                  <div class="question-answer">${item.answerHtml}</div>
                </div>
              </details>
            `
          )
          .join("");

        return `
          <section class="question-section" data-paper="${group.paper}">
            <div class="question-section-head">
              <div>
                <h2>${group.paper}</h2>
                <p><strong>${group.section}</strong><br>${group.description}</p>
              </div>
              <span class="question-count">${group.items.length} item${group.items.length === 1 ? "" : "s"}</span>
            </div>
            <div class="question-list">${cardHtml}</div>
          </section>
        `;
      })
      .join("");

    root.querySelectorAll("details").forEach((detail) => {
      detail.addEventListener("toggle", () => {
        const toggle = detail.querySelector(".question-toggle");
        if (toggle) {
          toggle.textContent = detail.open ? "Close" : "Open";
        }
      });
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activePaper = button.getAttribute("data-paper-filter") || "ALL";
      filterButtons.forEach((other) => other.classList.toggle("is-active", other === button));
      render();
    });
  });

  searchField.addEventListener("input", render);

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-question-action");
      root.querySelectorAll("details").forEach((detail) => {
        detail.open = action === "open-all";
      });
    });
  });

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveTopNav();
  initReveal();
  renderQuestionBank();
});
