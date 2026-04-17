(() => {
  // node_modules/@microsoft/clarity/src/utils.js
  function injectScript(projectId) {
    try {
      (function(c, l, a, r, i, t, y) {
        if (l.getElementById("clarity-script")) {
          return;
        }
        c[a] = c[a] || function() {
          (c[a].q = c[a].q || []).push(arguments);
        };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i + "?ref=npm";
        t.id = "clarity-script";
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", projectId);
      return;
    } catch (error) {
      return;
    }
  }

  // node_modules/@microsoft/clarity/index.js
  var Clarity = {
    init(projectId) {
      injectScript(projectId, "clarity-script");
    },
    setTag(key, value) {
      window.clarity("set", key, value);
    },
    identify(customerId, customSessionId, customPageId, friendlyName) {
      window.clarity("identify", customerId, customSessionId, customPageId, friendlyName);
    },
    consent(consent = true) {
      window.clarity("consent", consent);
    },
    consentV2(consentOptions = { ad_Storage: "granted", analytics_Storage: "granted" }) {
      window.clarity("consentv2", consentOptions);
    },
    upgrade(reason) {
      window.clarity("upgrade", reason);
    },
    event(eventName) {
      window.clarity("event", eventName);
    }
  };
  var clarity_default = Clarity;

  // src/site.js
  clarity_default.init("wcajtudkrx");
  document.documentElement.classList.add("js");
  var optionLetters = ["A", "B", "C", "D"];
  function mcq(title, prompt, options, answerIndex, note = "") {
    const answerText = `${optionLetters[answerIndex]}. ${options[answerIndex]}`;
    const explanation = note || "This option matches the correct concept, function or example asked in the question.";
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
  function autoMcqs(entries) {
    return entries.map((entry, index) => {
      var _a;
      const correctIndex = (_a = entry.correctIndex) != null ? _a : index % 4;
      const options = [...entry.distractors];
      options.splice(correctIndex, 0, entry.correct);
      return mcq(entry.title, entry.prompt, options, correctIndex, entry.note || "");
    });
  }
  function essay(title, promptHtml, answerHtml, searchText) {
    return {
      title,
      promptHtml,
      answerHtml: `<h4>Answer</h4>${answerHtml}`,
      searchText: `${title} ${searchText}`.toLowerCase()
    };
  }
  var questionGroups = [
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
        mcq("Question 19", "A computer lab is arranged to protect users\u2019 eyes. Proper lighting helps to:", ["save power", "reduce glare and eye strain", "increase flickering", "place screens under bright light"], 1),
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
    },
    {
      paper: "SAMPLE",
      section: "Strand 1 Additional Practice",
      description: "20 additional sample questions from Strand 1: Introduction to Computing.",
      items: [
        mcq("Strand 1 Sample 1", "Which part of a computer system refers to the physical parts you can touch?", ["Hardware", "Software", "Data", "Procedure"], 0),
        mcq("Strand 1 Sample 2", "Which feature is strongly linked with fifth-generation computers?", ["Artificial intelligence", "Vacuum tubes", "Punch cards", "Magnetic drums"], 0),
        mcq("Strand 1 Sample 3", "Perceptual computing mainly allows a computer to respond to:", ["voice and gestures", "paper files only", "ink printing", "manual typing alone"], 0),
        mcq("Strand 1 Sample 4", "Which of the following is an example of assistive technology?", ["Screen reader", "Flash disk", "Router", "Projector"], 0),
        mcq("Strand 1 Sample 5", "Which device is used mainly for permanent storage of data?", ["Hard disk", "Monitor", "Keyboard", "Scanner"], 0),
        mcq("Strand 1 Sample 6", "The main work of a device driver is to:", ["help the operating system control hardware", "create spreadsheets", "translate web pages", "print in color only"], 0),
        mcq("Strand 1 Sample 7", "Cloud storage usually needs:", ["internet access", "a joystick", "a plotter", "a barcode"], 0),
        mcq("Strand 1 Sample 8", "Poor sitting posture when using a computer can lead to:", ["back pain", "faster internet", "clearer printing", "better sound quality"], 0),
        mcq("Strand 1 Sample 9", "Which safety rule is best in a computer lab?", ["Keep liquids away from devices", "Pull cables from the socket carelessly", "Cover the monitor vents", "Touch exposed wires"], 0),
        mcq("Strand 1 Sample 10", "A solid-state drive is different from an HDD because it:", ["has no moving parts", "can only store pictures", "needs no electricity", "cannot be used in computers"], 0),
        mcq("Strand 1 Sample 11", "E-waste refers to:", ["discarded electronic equipment", "healthy computer habits", "network cables", "website addresses"], 0),
        mcq("Strand 1 Sample 12", "Which of the following is an input device?", ["QR code reader", "Monitor", "Speaker", "Printer"], 0),
        mcq("Strand 1 Sample 13", "Which of these is a portable digital device?", ["Tablet", "Desktop tower only", "Server rack", "Large photocopier"], 0),
        mcq("Strand 1 Sample 14", "Which software manages hardware and software resources in a computer?", ["Operating system", "Presentation package", "Antivirus definition file", "Database record"], 0),
        mcq("Strand 1 Sample 15", "Network storage means storage that is:", ["shared across a network", "kept only on paper", "built into a mouse", "used only for audio"], 0),
        essay(
          "Strand 1 Sample 16",
          `
          <p>What is a computer system? State three components of a computer system.</p>
        `,
          `
          <p>A <strong>computer system</strong> is the complete set of parts that work together to collect, process, store and output information. Three components are <strong>hardware</strong>, <strong>software</strong> and <strong>users</strong>. Data and procedures can also be counted as components.</p>
        `,
          "computer system components hardware software users"
        ),
        essay(
          "Strand 1 Sample 17",
          `
          <p>Differentiate between assistive technology and adaptive technology. Give one example of each.</p>
        `,
          `
          <p><strong>Assistive technology</strong> is a tool specially designed to help a person with a disability perform a task more easily, for example a <strong>screen reader</strong>. <strong>Adaptive technology</strong> is an existing tool that has been modified to suit the user's needs, for example an <strong>adapted keyboard</strong> with larger keys.</p>
        `,
          "assistive adaptive technology examples"
        ),
        essay(
          "Strand 1 Sample 18",
          `
          <p>Explain two health issues that can come from poor computer use and state two safety precautions in the computer lab.</p>
        `,
          `
          <ul class="clean-list">
            <li>Two health issues are <strong>eye strain</strong> from staring at the screen for too long and <strong>back or neck pain</strong> from poor posture.</li>
            <li>Two safety precautions are <strong>keeping liquids away from the devices</strong> and <strong>avoiding loose or exposed cables</strong>.</li>
          </ul>
        `,
          "health issues safety precautions eye strain posture cables liquids"
        ),
        essay(
          "Strand 1 Sample 19",
          `
          <p>Differentiate between HDD and SSD and state one advantage of each.</p>
        `,
          `
          <p>An <strong>HDD</strong> stores data on spinning magnetic disks, while an <strong>SSD</strong> stores data on flash memory chips. One advantage of an HDD is that it is usually <strong>cheaper for large storage</strong>. One advantage of an SSD is that it is <strong>faster and more resistant to shock</strong>.</p>
        `,
          "hdd ssd difference advantage"
        ),
        essay(
          "Strand 1 Sample 20",
          `
          <p>Explain what fifth-generation computers are and state what perceptual computing means.</p>
        `,
          `
          <p><strong>Fifth-generation computers</strong> are modern computers associated with artificial intelligence, high processing power and smarter decision-making. <strong>Perceptual computing</strong> means a computer can respond to natural human input such as voice, gesture, movement or facial expression.</p>
        `,
          "fifth generation perceptual computing ai voice gesture"
        )
      ]
    },
    {
      paper: "SAMPLE",
      section: "Strand 2 Additional Practice",
      description: "20 additional sample questions from Strand 2: Productivity Software.",
      items: [
        mcq("Strand 2 Sample 1", "Which application is best for typing letters and reports?", ["Word processor", "Web browser", "Media player", "Operating system"], 0),
        mcq("Strand 2 Sample 2", "Changing the font size and color of text is called:", ["Formatting", "Editing", "Saving", "Scanning"], 0),
        mcq("Strand 2 Sample 3", "The effect used when one slide changes to another is called:", ["Transition", "Filter", "Formula", "Folder"], 0),
        mcq("Strand 2 Sample 4", "A spreadsheet formula usually begins with:", ["=", "#", "&", "%"], 0),
        mcq("Strand 2 Sample 5", "Which spreadsheet function is used to find the average of values?", ["AVERAGE", "COUNTIF", "UPPER", "MERGE"], 0),
        mcq("Strand 2 Sample 6", "The cell address B5 refers to:", ["column B, row 5", "row B, column 5", "book 5", "button 5"], 0),
        mcq("Strand 2 Sample 7", "Filtering in a spreadsheet helps to:", ["show only records that meet a condition", "change every cell to bold", "print without margins", "draw a flowchart"], 0),
        mcq("Strand 2 Sample 8", "Which package is most suitable for creating a brochure or flyer?", ["Desktop publishing software", "Operating system", "Antivirus software", "Device driver"], 0),
        mcq("Strand 2 Sample 9", "Landscape page orientation means the page is:", ["wider than it is tall", "taller than it is wide", "always square", "meant only for photos"], 0),
        mcq("Strand 2 Sample 10", "A header in a document appears at the:", ["top of the page", "bottom of the page", "center of a table only", "end of a paragraph only"], 0),
        mcq("Strand 2 Sample 11", "Which chart type is commonly used to compare values in categories?", ["Bar chart", "Pie menu", "Slide sorter", "Mail merge"], 0),
        mcq("Strand 2 Sample 12", "Which command combines selected table cells into one cell?", ["Merge cells", "Split text", "Paste special", "Track changes"], 0),
        mcq("Strand 2 Sample 13", "Mail merge is useful when you want to:", ["send many letters with similar content to different people", "repair a keyboard", "compress a file", "protect a network with a firewall"], 0),
        mcq("Strand 2 Sample 14", "An animation in presentation software mainly affects:", ["objects on a slide", "network cables", "printer cartridges", "folder names"], 0),
        mcq("Strand 2 Sample 15", "Which tool helps to capture part of the computer screen into a document or slide?", ["Screenshot", "Spell checker", "Recycle bin", "Scroll bar"], 0),
        essay(
          "Strand 2 Sample 16",
          `
          <p>What is a word processor? State four features of a word processing application.</p>
        `,
          `
          <p>A <strong>word processor</strong> is an application used to create, edit, format and print text documents. Four features are <strong>spell checking</strong>, <strong>text alignment</strong>, <strong>font formatting</strong> and <strong>inserting tables or pictures</strong>.</p>
        `,
          "word processor features spell check alignment font tables pictures"
        ),
        essay(
          "Strand 2 Sample 17",
          `
          <p>Differentiate between editing and formatting with one example of each.</p>
        `,
          `
          <p><strong>Editing</strong> means changing the content of a document, for example correcting a spelling mistake or deleting a wrong sentence. <strong>Formatting</strong> means changing the appearance of the content, for example making a heading bold or increasing the font size.</p>
        `,
          "editing formatting difference examples"
        ),
        essay(
          "Strand 2 Sample 18",
          `
          <p>Explain how a student can calculate the total and average marks in a spreadsheet.</p>
        `,
          `
          <p>The student should type the numbers into cells, select an empty cell for the total and enter a formula such as <code>=SUM(B2:B6)</code>. For the average, the student should use another cell and enter <code>=AVERAGE(B2:B6)</code>. The spreadsheet then calculates the results automatically.</p>
        `,
          "spreadsheet total average sum average formula"
        ),
        essay(
          "Strand 2 Sample 19",
          `
          <p>What is desktop publishing? State two products that can be created with it.</p>
        `,
          `
          <p><strong>Desktop publishing</strong> is the use of software to design and arrange text and pictures for attractive printed or digital publications. Two products that can be created are <strong>brochures</strong> and <strong>newsletters</strong>. Posters, flyers and magazines are also examples.</p>
        `,
          "desktop publishing products brochures newsletters flyers posters"
        ),
        essay(
          "Strand 2 Sample 20",
          `
          <p>Differentiate between transitions and animations in presentation software and state one use of each.</p>
        `,
          `
          <p><strong>Transitions</strong> are effects used when moving from one slide to another, while <strong>animations</strong> are effects applied to objects such as text or pictures on a single slide. A transition can make slide changes smooth, while an animation can help reveal points one by one during a presentation.</p>
        `,
          "transitions animations difference uses presentation"
        )
      ]
    },
    {
      paper: "SAMPLE",
      section: "Strand 3 Additional Practice",
      description: "20 additional sample questions from Strand 3: Communication Networks.",
      items: [
        mcq("Strand 3 Sample 1", "Which network type normally covers a school computer laboratory?", ["LAN", "WAN", "MAN", "PAN"], 0),
        mcq("Strand 3 Sample 2", "DNS is used to:", ["change domain names into IP addresses", "print web pages", "delete emails", "compress images"], 0),
        mcq("Strand 3 Sample 3", "Which email field hides copied recipients from other receivers?", ["BCC", "CC", "To", "Reply"], 0),
        mcq("Strand 3 Sample 4", "A PAN is best described as a network around:", ["one person and nearby personal devices", "an entire country", "many cities", "a school district only"], 0),
        mcq("Strand 3 Sample 5", "In a star topology, devices are connected through a:", ["central device", "single ring only", "straight chain of printers", "satellite signal only"], 0),
        mcq("Strand 3 Sample 6", "A URL is the:", ["address of a web resource", "type of keyboard", "measure of storage size", "name of a spreadsheet chart"], 0),
        mcq("Strand 3 Sample 7", "Phishing is an attempt to:", ["trick people into giving personal information", "improve internet speed", "change a file extension", "create a strong password"], 0),
        mcq("Strand 3 Sample 8", "A firewall mainly helps to:", ["block unauthorized access to a network or device", "increase monitor brightness", "format a document", "clean computer screens"], 0),
        mcq("Strand 3 Sample 9", "Confidentiality in information security means data should be:", ["seen only by authorized people", "available only at night", "stored only on paper", "shared with everyone"], 0),
        mcq("Strand 3 Sample 10", "The World Wide Web is:", ["a service that runs on the internet", "another name for a keyboard", "a type of printer", "a file extension"], 0),
        mcq("Strand 3 Sample 11", "A blog is best described as:", ["a regularly updated website or web page", "a computer virus", "a spreadsheet row", "a storage device"], 0),
        mcq("Strand 3 Sample 12", "Which of the following is a search engine?", ["Google", "PowerPoint", "Excel", "Publisher"], 0),
        mcq("Strand 3 Sample 13", "Cyberbullying is the use of digital tools to:", ["harass or hurt others online", "design posters", "repair hardware", "convert files"], 0),
        mcq("Strand 3 Sample 14", "A strong password should usually include:", ["letters, numbers and symbols", "only the user's name", "one repeated digit", "only lowercase letters"], 0),
        mcq("Strand 3 Sample 15", "IPv6 was introduced mainly because:", ["more IP addresses were needed", "printers became slower", "web pages became shorter", "emails stopped working"], 0),
        essay(
          "Strand 3 Sample 16",
          `
          <p>What is a computer network? State two benefits of networking computers.</p>
        `,
          `
          <p>A <strong>computer network</strong> is a group of connected computers and devices that can communicate and share resources. Two benefits are <strong>sharing files and printers</strong> and <strong>making communication faster</strong> between users.</p>
        `,
          "computer network benefits file sharing printer communication"
        ),
        essay(
          "Strand 3 Sample 17",
          `
          <p>Differentiate between the internet and the World Wide Web.</p>
        `,
          `
          <p>The <strong>internet</strong> is the worldwide system of connected computer networks. The <strong>World Wide Web</strong> is a collection of websites and web pages that use the internet. This means the web is one service that works on top of the internet.</p>
        `,
          "internet world wide web difference"
        ),
        essay(
          "Strand 3 Sample 18",
          `
          <p>Explain the meanings of cyberbullying, cyberstalking and digital footprint.</p>
        `,
          `
          <ul class="clean-list">
            <li><strong>Cyberbullying</strong> is using digital platforms to insult, threaten or embarrass someone.</li>
            <li><strong>Cyberstalking</strong> is repeatedly following, monitoring or threatening a person online.</li>
            <li><strong>Digital footprint</strong> is the trail of information a person leaves behind while using digital tools and online services.</li>
          </ul>
        `,
          "cyberbullying cyberstalking digital footprint meanings"
        ),
        essay(
          "Strand 3 Sample 19",
          `
          <p>Describe the email fields To, CC, BCC and Subject.</p>
        `,
          `
          <ul class="clean-list">
            <li><strong>To</strong> is for the main receiver or receivers of the email.</li>
            <li><strong>CC</strong> sends a copy to other receivers and their addresses can be seen by the others.</li>
            <li><strong>BCC</strong> sends a hidden copy so other receivers do not see that address.</li>
            <li><strong>Subject</strong> gives a short title showing what the email is about.</li>
          </ul>
        `,
          "email to cc bcc subject fields"
        ),
        essay(
          "Strand 3 Sample 20",
          `
          <p>Explain confidentiality, integrity and availability, and state two methods of protecting information.</p>
        `,
          `
          <ul class="clean-list">
            <li><strong>Confidentiality</strong> means only authorized users should see the data.</li>
            <li><strong>Integrity</strong> means the data should remain correct and not be changed improperly.</li>
            <li><strong>Availability</strong> means the data or service should be accessible when needed.</li>
            <li>Two protection methods are <strong>using strong passwords</strong> and <strong>encrypting important data</strong>. Firewalls and backups also help.</li>
          </ul>
        `,
          "confidentiality integrity availability protection methods passwords encryption"
        )
      ]
    },
    {
      paper: "SAMPLE",
      section: "Strand 4 Additional Practice",
      description: "20 additional sample questions from Strand 4: Computational Thinking.",
      items: [
        mcq("Strand 4 Sample 1", "An algorithm is best described as:", ["a step-by-step method for solving a problem", "a type of monitor", "a network cable", "a file extension"], 0),
        mcq("Strand 4 Sample 2", "Which flowchart symbol is used for decision making?", ["Decision", "Process", "Terminator", "Input/Output"], 0),
        mcq("Strand 4 Sample 3", "A variable is used to store a value that:", ["can change", "must never change", "is always hidden", "cannot be displayed"], 0),
        mcq("Strand 4 Sample 4", "A constant is a value that:", ["stays fixed", "changes every second", "is always negative", "must be printed"], 0),
        mcq("Strand 4 Sample 5", "Which data type stores only True or False?", ["Boolean", "Float", "String", "Integer"], 0),
        mcq("Strand 4 Sample 6", "Which operator gives the remainder after division?", ["mod", "+", "=", "/"], 0),
        mcq("Strand 4 Sample 7", "Sequence in programming means instructions are carried out:", ["in the correct order", "only in circles", "without any output", "at random"], 0),
        mcq("Strand 4 Sample 8", "Iteration means:", ["repeating a set of steps", "printing a document", "deleting all files", "drawing a table"], 0),
        mcq("Strand 4 Sample 9", "An IDE is mainly used to:", ["write and test programs", "connect a router", "clean a keyboard", "play music"], 0),
        mcq("Strand 4 Sample 10", "Which robot part collects information from the environment?", ["Sensor", "Actuator", "Speaker", "Cable"], 0),
        mcq("Strand 4 Sample 11", "Which robot part causes movement or action?", ["Actuator", "Sensor", "Monitor", "Keyboard"], 0),
        mcq("Strand 4 Sample 12", "An expert system mainly uses:", ["IF-THEN rules", "ink cartridges", "web browsers", "hard disks"], 0),
        mcq("Strand 4 Sample 13", "Machine learning allows a computer to:", ["learn patterns from data", "become a monitor", "remove electricity", "turn into a printer"], 0),
        mcq("Strand 4 Sample 14", "The controller in a robot mainly acts like the robot's:", ["brain", "paper tray", "screen stand", "power cable"], 0),
        mcq("Strand 4 Sample 15", "According to BODMAS, in the expression 3 + 4 x 2, which operation is done first?", ["Multiplication", "Addition", "Subtraction", "Comparison"], 0),
        essay(
          "Strand 4 Sample 16",
          `
          <p>What is an algorithm? State three characteristics of a good algorithm.</p>
        `,
          `
          <p>An <strong>algorithm</strong> is a step-by-step set of instructions for solving a problem. Three characteristics of a good algorithm are that it should be <strong>clear</strong>, <strong>logical</strong> and <strong>finite</strong>, meaning it should end after a number of steps.</p>
        `,
          "algorithm characteristics clear logical finite"
        ),
        essay(
          "Strand 4 Sample 17",
          `
          <p>Name four common flowchart symbols and state the use of each.</p>
        `,
          `
          <ul class="clean-list">
            <li><strong>Terminator</strong>: shows the start or end of a process.</li>
            <li><strong>Process</strong>: shows an action or calculation.</li>
            <li><strong>Decision</strong>: shows a point where a yes/no choice is made.</li>
            <li><strong>Input/Output</strong>: shows data entering or leaving the system.</li>
          </ul>
        `,
          "flowchart symbols terminator process decision input output"
        ),
        essay(
          "Strand 4 Sample 18",
          `
          <p>Differentiate between a variable and a constant and list four data types.</p>
        `,
          `
          <p>A <strong>variable</strong> stores a value that can change, while a <strong>constant</strong> stores a fixed value. Four common data types are <strong>integer</strong>, <strong>float</strong>, <strong>string</strong> and <strong>Boolean</strong>.</p>
        `,
          "variable constant data types integer float string boolean"
        ),
        essay(
          "Strand 4 Sample 19",
          `
          <p>Write pseudocode to find the larger of two numbers.</p>
        `,
          `
          <ul class="clean-list">
            <li>Start</li>
            <li>Input firstNumber</li>
            <li>Input secondNumber</li>
            <li>If firstNumber &gt; secondNumber, display firstNumber</li>
            <li>Else display secondNumber</li>
            <li>Stop</li>
          </ul>
        `,
          "pseudocode larger number comparison"
        ),
        essay(
          "Strand 4 Sample 20",
          `
          <p>Explain three main parts of a robot and state two uses of artificial intelligence.</p>
        `,
          `
          <ul class="clean-list">
            <li><strong>Sensor</strong>: collects information from the surroundings.</li>
            <li><strong>Controller</strong>: processes the information and makes decisions.</li>
            <li><strong>Actuator</strong>: carries out movement or action.</li>
            <li>Two uses of artificial intelligence are <strong>voice assistants</strong> and <strong>expert medical support systems</strong>.</li>
          </ul>
        `,
          "robot parts sensor controller actuator artificial intelligence uses"
        )
      ]
    },
    {
      paper: "SAMPLE",
      section: "Sample Booster to 100",
      description: "7 extra sample questions added to bring the earlier 93 SAMPLE questions to 100.",
      items: autoMcqs([
        { title: "Sample Booster 1", prompt: "Which computer generation is closely linked with artificial intelligence?", correct: "Fifth generation", distractors: ["First generation", "Second generation", "Third generation"] },
        { title: "Sample Booster 2", prompt: "Which application is mainly used to prepare slide presentations?", correct: "Presentation software", distractors: ["Device driver", "Web server", "Operating system"] },
        { title: "Sample Booster 3", prompt: "Which network topology uses one central device to connect all computers?", correct: "Star topology", distractors: ["Ring topology", "Bus topology", "Mesh topology"] },
        { title: "Sample Booster 4", prompt: "Which flowchart symbol is used to show a yes-or-no choice?", correct: "Decision symbol", distractors: ["Process symbol", "Terminator symbol", "Input/Output symbol"] },
        { title: "Sample Booster 5", prompt: "Which storage device uses flash memory and can fit in a pocket?", correct: "USB flash drive", distractors: ["Monitor", "Projector", "Speaker"] },
        { title: "Sample Booster 6", prompt: "Which email field hides copied addresses from the main receivers?", correct: "BCC", distractors: ["CC", "To", "Subject"] },
        { title: "Sample Booster 7", prompt: "Which robot part acts like the brain by processing information and making decisions?", correct: "Controller", distractors: ["Sensor", "Actuator", "Cable"] }
      ])
    },
    {
      paper: "SAMPLE",
      section: "Strand 1 Mega Practice",
      description: "50 more sample questions from Strand 1: Introduction to Computing.",
      items: autoMcqs([
        { title: "Strand 1 Mega 1", prompt: "Which term describes the physical parts of a computer that can be touched?", correct: "Hardware", distractors: ["Software", "Data", "Information"] },
        { title: "Strand 1 Mega 2", prompt: "Programs and instructions used by a computer are called:", correct: "Software", distractors: ["Hardware", "Firmware case", "Storage media"] },
        { title: "Strand 1 Mega 3", prompt: "Raw facts that have not yet been processed are called:", correct: "Data", distractors: ["Information", "Knowledge base", "Output"] },
        { title: "Strand 1 Mega 4", prompt: "Processed data that is meaningful to the user is called:", correct: "Information", distractors: ["Noise", "Command", "Storage"] },
        { title: "Strand 1 Mega 5", prompt: "Which device is commonly used to type letters and numbers into the computer?", correct: "Keyboard", distractors: ["Monitor", "Speaker", "Projector"] },
        { title: "Strand 1 Mega 6", prompt: "Which device displays the computer's output on a screen?", correct: "Monitor", distractors: ["Scanner", "Mouse", "Microphone"] },
        { title: "Strand 1 Mega 7", prompt: "Which device produces a hard copy of documents?", correct: "Printer", distractors: ["Joystick", "Router", "Barcode reader"] },
        { title: "Strand 1 Mega 8", prompt: "Which input device captures text or pictures from paper into the computer?", correct: "Scanner", distractors: ["Speaker", "Printer", "Plotter"] },
        { title: "Strand 1 Mega 9", prompt: "Which device is mainly used for permanent internal storage of files and programs?", correct: "Hard disk drive", distractors: ["Mouse", "Monitor", "Headphones"] },
        { title: "Strand 1 Mega 10", prompt: "Which storage device has no moving parts and is usually faster than an HDD?", correct: "Solid-state drive", distractors: ["Projector", "Scanner", "Webcam"] },
        { title: "Strand 1 Mega 11", prompt: "Storage that keeps files on remote internet servers is called:", correct: "Cloud storage", distractors: ["Paper storage", "RAM storage", "Monitor storage"] },
        { title: "Strand 1 Mega 12", prompt: "Storage shared by devices on the same local network is called:", correct: "Network storage", distractors: ["Optical storage", "Manual storage", "Portable display"] },
        { title: "Strand 1 Mega 13", prompt: "The ending part of a filename such as .pdf or .docx is called the:", correct: "File extension", distractors: ["Folder path", "Password", "Shortcut key"] },
        { title: "Strand 1 Mega 14", prompt: "A folder is mainly used to:", correct: "contain files and other folders", distractors: ["print text", "display video", "scan barcodes"] },
        { title: "Strand 1 Mega 15", prompt: "A device driver is software that helps the operating system to:", correct: "control hardware devices", distractors: ["browse the internet", "create tables only", "translate every document"] },
        { title: "Strand 1 Mega 16", prompt: "Which software manages hardware and software resources on a computer?", correct: "Operating system", distractors: ["Spreadsheet package", "Presentation file", "USB cable"] },
        { title: "Strand 1 Mega 17", prompt: "Which computer generation used vacuum tubes?", correct: "First generation", distractors: ["Fourth generation", "Fifth generation", "Next generation"] },
        { title: "Strand 1 Mega 18", prompt: "Which computer generation is strongly linked with microprocessors?", correct: "Fourth generation", distractors: ["First generation", "Second generation", "Third generation"] },
        { title: "Strand 1 Mega 19", prompt: "Which feature is associated with fifth-generation computers?", correct: "Artificial intelligence", distractors: ["Vacuum tubes", "Punch cards only", "Mechanical gears"] },
        { title: "Strand 1 Mega 20", prompt: "Perceptual computing mainly allows a computer to respond to:", correct: "voice, gesture and movement", distractors: ["paper files only", "manual filing cabinets", "handwritten notebooks only"] },
        { title: "Strand 1 Mega 21", prompt: "Quantum computing is based on the use of:", correct: "qubits", distractors: ["ink cartridges", "mechanical levers", "audio cables"] },
        { title: "Strand 1 Mega 22", prompt: "Which of the following is an example of assistive technology?", correct: "Screen reader", distractors: ["Network switch", "Projector stand", "Ethernet plug"] },
        { title: "Strand 1 Mega 23", prompt: "A modified keyboard with larger keys is an example of:", correct: "adaptive technology", distractors: ["optical storage", "cloud service", "parallel processing"] },
        { title: "Strand 1 Mega 24", prompt: "Which of the following is a wearable digital device?", correct: "Smart watch", distractors: ["Desktop tower", "Photocopier", "Server rack"] },
        { title: "Strand 1 Mega 25", prompt: "Staring at a screen for too long can cause:", correct: "eye strain", distractors: ["faster typing", "better battery life", "stronger signal"] },
        { title: "Strand 1 Mega 26", prompt: "Repeated use of the keyboard without breaks can lead to:", correct: "repetitive strain injury", distractors: ["better memory", "quieter speakers", "file compression"] },
        { title: "Strand 1 Mega 27", prompt: "Which habit helps to reduce back pain when using a computer?", correct: "Sitting with good posture", distractors: ["Bending close to the screen", "Using the keyboard on the floor", "Blocking the air vents"] },
        { title: "Strand 1 Mega 28", prompt: "Which of the following is a safety hazard in a computer lab?", correct: "Overloaded sockets", distractors: ["A labeled folder", "A word processor", "An updated driver"] },
        { title: "Strand 1 Mega 29", prompt: "Which is the safest rule when working around computers?", correct: "Keep liquids away from devices", distractors: ["Touch exposed wires", "Pull cables roughly", "Cover cooling vents"] },
        { title: "Strand 1 Mega 30", prompt: "E-waste refers to:", correct: "discarded electronic equipment", distractors: ["stored email messages", "healthy posture", "a browser cache"] },
        { title: "Strand 1 Mega 31", prompt: "Which device reads patterns of black bars on products?", correct: "Barcode reader", distractors: ["Headset", "Projector", "Touchpad"] },
        { title: "Strand 1 Mega 32", prompt: "Which device is used to scan a quick response square code?", correct: "QR reader", distractors: ["Monitor", "Speaker", "Motherboard"] },
        { title: "Strand 1 Mega 33", prompt: "RFID technology is mainly used to:", correct: "read radio tags without direct contact", distractors: ["print text in Braille", "cool a processor", "store files on paper"] },
        { title: "Strand 1 Mega 34", prompt: "Which output device helps visually impaired users read printed information by touch?", correct: "Braille printer", distractors: ["Joystick", "Scanner", "Router"] },
        { title: "Strand 1 Mega 35", prompt: "Which output device is often used to display a lesson on a wall in class?", correct: "Projector", distractors: ["Microphone", "Mouse", "Flash reader"] },
        { title: "Strand 1 Mega 36", prompt: "Which storage device is very small and often used in phones and cameras?", correct: "Memory card", distractors: ["Plotter", "Router", "Web browser"] },
        { title: "Strand 1 Mega 37", prompt: "Which device is a small portable storage tool that connects to a USB port?", correct: "Flash drive", distractors: ["Monitor", "Scanner", "Graphics tablet"] },
        { title: "Strand 1 Mega 38", prompt: "A CD or DVD is an example of:", correct: "optical storage", distractors: ["cloud storage", "magnetic tape only", "input hardware"] },
        { title: "Strand 1 Mega 39", prompt: "User accounts on a computer are important because they help to:", correct: "control access for different users", distractors: ["increase printer speed", "replace a keyboard", "translate web pages"] },
        { title: "Strand 1 Mega 40", prompt: "File permissions determine:", correct: "who can open, edit or delete a file", distractors: ["the screen size", "the internet speed", "the keyboard color"] },
        { title: "Strand 1 Mega 41", prompt: "If a printer is connected but not working well, one useful step is to:", correct: "update or reinstall the device driver", distractors: ["delete all folders", "turn the monitor upside down", "rename the desktop"] },
        { title: "Strand 1 Mega 42", prompt: "One advantage of cloud storage is that files can be:", correct: "accessed from different places", distractors: ["typed only once", "used without electricity", "printed without software"] },
        { title: "Strand 1 Mega 43", prompt: "One common advantage of SSDs over HDDs is:", correct: "faster access speed", distractors: ["always larger size", "no need for power", "paper output"] },
        { title: "Strand 1 Mega 44", prompt: "One common advantage of HDDs over SSDs is:", correct: "lower cost for large capacity", distractors: ["faster boot time always", "higher shock resistance", "smaller weight in all cases"] },
        { title: "Strand 1 Mega 45", prompt: "Which of the following is a portable device useful for mobile learning?", correct: "Tablet", distractors: ["Server cabinet", "Desktop case only", "Laser printer"] },
        { title: "Strand 1 Mega 46", prompt: "Natural language processing helps computers to:", correct: "understand and work with human language", distractors: ["cool their hardware", "store files in folders", "print in Braille"] },
        { title: "Strand 1 Mega 47", prompt: "A computer using a microphone and camera to detect speech and gestures is using:", correct: "perceptual computing", distractors: ["desktop publishing", "optical storage", "manual filing"] },
        { title: "Strand 1 Mega 48", prompt: "To use cloud storage effectively, a user usually needs:", correct: "internet access", distractors: ["a printer cable only", "a barcode label", "a paper notebook"] },
        { title: "Strand 1 Mega 49", prompt: "Which storage method is best when a school wants many computers to share one storage space on the same network?", correct: "Network storage", distractors: ["Sound card", "Graphics adapter", "Mouse pad"] },
        { title: "Strand 1 Mega 50", prompt: "One use of a smart watch is to:", correct: "track body activities", distractors: ["replace all network cables", "format hard disks automatically", "scan textbooks into PDF"] }
      ])
    },
    {
      paper: "SAMPLE",
      section: "Strand 2 Mega Practice",
      description: "50 more sample questions from Strand 2: Productivity Software.",
      items: autoMcqs([
        { title: "Strand 2 Mega 1", prompt: "Which application is mainly used for typing letters and reports?", correct: "Word processor", distractors: ["Web browser", "Media player", "Router setup tool"] },
        { title: "Strand 2 Mega 2", prompt: "Changing the style, size or color of text is called:", correct: "Formatting", distractors: ["Editing", "Scanning", "Compressing"] },
        { title: "Strand 2 Mega 3", prompt: "Correcting a wrong word in a paragraph is an example of:", correct: "Editing", distractors: ["Formatting", "Printing", "Downloading"] },
        { title: "Strand 2 Mega 4", prompt: "Landscape page orientation means the page is:", correct: "wider than it is tall", distractors: ["taller than it is wide", "always square", "only for pictures"] },
        { title: "Strand 2 Mega 5", prompt: "Portrait page orientation means the page is:", correct: "taller than it is wide", distractors: ["wider than it is tall", "rotated into a circle", "hidden from view"] },
        { title: "Strand 2 Mega 6", prompt: "Information that appears at the top of every page is found in the:", correct: "Header", distractors: ["Footer", "Margin", "Clipboard"] },
        { title: "Strand 2 Mega 7", prompt: "Information that appears at the bottom of every page is found in the:", correct: "Footer", distractors: ["Header", "Toolbar", "Status bar"] },
        { title: "Strand 2 Mega 8", prompt: "The blank spaces around the edges of a page are called:", correct: "Margins", distractors: ["Captions", "Rows", "Themes"] },
        { title: "Strand 2 Mega 9", prompt: "Which command combines selected table cells into one larger cell?", correct: "Merge cells", distractors: ["Filter records", "Insert chart", "Track changes"] },
        { title: "Strand 2 Mega 10", prompt: "Which command divides one table cell into smaller cells?", correct: "Split cells", distractors: ["Spell check", "Print preview", "Mail merge"] },
        { title: "Strand 2 Mega 11", prompt: "Which tool helps to find spelling mistakes in a document?", correct: "Spell checker", distractors: ["Recycle bin", "Search engine", "Task manager"] },
        { title: "Strand 2 Mega 12", prompt: "Which tool helps a writer find a word with a similar meaning?", correct: "Thesaurus", distractors: ["Clipboard", "Firewall", "Device manager"] },
        { title: "Strand 2 Mega 13", prompt: "Mail merge is useful when a school wants to:", correct: "send similar letters to many people", distractors: ["repair a projector", "scan photographs", "share internet data"] },
        { title: "Strand 2 Mega 14", prompt: "Which type of software is best for designing brochures and flyers?", correct: "Desktop publishing software", distractors: ["Operating system", "Driver software", "Antivirus software"] },
        { title: "Strand 2 Mega 15", prompt: "A text box is useful because it allows text to:", correct: "be placed freely on a page or slide", distractors: ["delete itself automatically", "open the internet", "replace a table"] },
        { title: "Strand 2 Mega 16", prompt: "Which tool captures part or all of the screen as an image?", correct: "Screenshot tool", distractors: ["Barcode reader", "Slide sorter", "Document holder"] },
        { title: "Strand 2 Mega 17", prompt: "Which application type is best for making slide shows?", correct: "Presentation software", distractors: ["Device firmware", "Network utility", "Storage driver"] },
        { title: "Strand 2 Mega 18", prompt: "An effect used when moving from one slide to the next is called a:", correct: "Transition", distractors: ["Formula", "Comment", "Folder"] },
        { title: "Strand 2 Mega 19", prompt: "An effect applied to text or pictures on the same slide is called:", correct: "Animation", distractors: ["Orientation", "Footer", "Filter"] },
        { title: "Strand 2 Mega 20", prompt: "A theme in presentation software mainly controls the:", correct: "overall design style", distractors: ["keyboard layout", "internet speed", "amount of RAM"] },
        { title: "Strand 2 Mega 21", prompt: "A slideshow is a presentation shown in:", correct: "full-screen mode", distractors: ["a printer tray", "a spreadsheet cell", "a file explorer only"] },
        { title: "Strand 2 Mega 22", prompt: "A spreadsheet is arranged in:", correct: "rows and columns", distractors: ["slides and notes", "folders and drives", "tracks and sectors"] },
        { title: "Strand 2 Mega 23", prompt: "The cell reference C4 means:", correct: "column C and row 4", distractors: ["column 4 and row C", "chart 4 in category C", "copy 4 times"] },
        { title: "Strand 2 Mega 24", prompt: "Most spreadsheet formulas begin with the symbol:", correct: "=", distractors: ["#", "&", "@"] },
        { title: "Strand 2 Mega 25", prompt: "A spreadsheet function is best described as:", correct: "a built-in formula", distractors: ["a printer setting", "a folder command", "an audio effect"] },
        { title: "Strand 2 Mega 26", prompt: "Which spreadsheet function is used to find the total of a range?", correct: "SUM", distractors: ["LEFT", "COUNTBLANK", "RENAME"] },
        { title: "Strand 2 Mega 27", prompt: "Which function is used to calculate the mean of values?", correct: "AVERAGE", distractors: ["MAXIMUM", "TOP", "JOIN"] },
        { title: "Strand 2 Mega 28", prompt: "Which function returns the highest value in a range?", correct: "MAX", distractors: ["MIN", "MID", "SUMIFTEXT"] },
        { title: "Strand 2 Mega 29", prompt: "Which function returns the lowest value in a range?", correct: "MIN", distractors: ["MAX", "UPPER", "MERGE"] },
        { title: "Strand 2 Mega 30", prompt: "Sorting in a spreadsheet means:", correct: "arranging data in a chosen order", distractors: ["hiding all records", "printing only charts", "deleting formulas"] },
        { title: "Strand 2 Mega 31", prompt: "Filtering in a spreadsheet is used to:", correct: "show records that match a condition", distractors: ["change all fonts", "lock the keyboard", "rename the workbook"] },
        { title: "Strand 2 Mega 32", prompt: "Which chart is commonly used to compare amounts in categories?", correct: "Bar chart", distractors: ["Footnote", "Mail merge", "Address book"] },
        { title: "Strand 2 Mega 33", prompt: "Which chart is often used to show parts of a whole?", correct: "Pie chart", distractors: ["Line pointer", "Page break", "Slide sorter"] },
        { title: "Strand 2 Mega 34", prompt: "Which chart type is useful for showing changes over time?", correct: "Line chart", distractors: ["Text box", "Comment bubble", "Header row"] },
        { title: "Strand 2 Mega 35", prompt: "A single page in a workbook is called a:", correct: "Worksheet", distractors: ["Footer", "Slide", "Thread"] },
        { title: "Strand 2 Mega 36", prompt: "A workbook is a collection of:", correct: "worksheets", distractors: ["printers", "monitors", "routers"] },
        { title: "Strand 2 Mega 37", prompt: "Rows in a spreadsheet run:", correct: "horizontally", distractors: ["vertically", "diagonally only", "behind the chart"] },
        { title: "Strand 2 Mega 38", prompt: "Columns in a spreadsheet run:", correct: "vertically", distractors: ["horizontally", "in circles", "outside the sheet"] },
        { title: "Strand 2 Mega 39", prompt: "Making text darker and thicker is called:", correct: "Bold", distractors: ["Italic", "Indent", "Crop"] },
        { title: "Strand 2 Mega 40", prompt: "Making text slant slightly to one side is called:", correct: "Italic", distractors: ["Underline", "Bullets", "Sort"] },
        { title: "Strand 2 Mega 41", prompt: "Placing a line beneath text is called:", correct: "Underline", distractors: ["Align left", "Filter", "Transition"] },
        { title: "Strand 2 Mega 42", prompt: "Left, center and right are examples of text:", correct: "alignment options", distractors: ["chart types", "file extensions", "security tools"] },
        { title: "Strand 2 Mega 43", prompt: "Save is used to:", correct: "update the current file", distractors: ["create a new operating system", "share internet access", "install hardware"] },
        { title: "Strand 2 Mega 44", prompt: "Save As is used when a user wants to:", correct: "create a new copy with a different name or location", distractors: ["switch off the monitor", "delete all slides", "scan a document"] },
        { title: "Strand 2 Mega 45", prompt: "Which shortcut is commonly used for copy?", correct: "Ctrl + C", distractors: ["Ctrl + V", "Ctrl + P", "Ctrl + Z"] },
        { title: "Strand 2 Mega 46", prompt: "Which shortcut is commonly used for paste?", correct: "Ctrl + V", distractors: ["Ctrl + X", "Ctrl + A", "Ctrl + F"] },
        { title: "Strand 2 Mega 47", prompt: "A slide layout controls the:", correct: "arrangement of placeholders on a slide", distractors: ["speed of the internet", "color of cables", "type of printer paper"] },
        { title: "Strand 2 Mega 48", prompt: "A template is best described as:", correct: "a ready-made design used as a starting point", distractors: ["a computer virus", "a hardware socket", "a backup battery"] },
        { title: "Strand 2 Mega 49", prompt: "Word wrap makes text:", correct: "move automatically to the next line", distractors: ["change into a picture", "sort alphabetically", "send itself by email"] },
        { title: "Strand 2 Mega 50", prompt: "Which product can be created with desktop publishing software?", correct: "Newsletter", distractors: ["Operating system", "Robot controller", "Network cable"] }
      ])
    },
    {
      paper: "SAMPLE",
      section: "Strand 3 Mega Practice",
      description: "50 more sample questions from Strand 3: Communication Networks.",
      items: autoMcqs([
        { title: "Strand 3 Mega 1", prompt: "A computer network is a group of connected computers that can:", correct: "share information and resources", distractors: ["work only without electricity", "print without software", "replace all teachers"] },
        { title: "Strand 3 Mega 2", prompt: "A PAN is mainly a network around:", correct: "one person and nearby devices", distractors: ["a whole country", "many schools in a city", "an entire continent"] },
        { title: "Strand 3 Mega 3", prompt: "Which network type usually connects computers within one school building?", correct: "LAN", distractors: ["WAN", "MAN", "PAN"] },
        { title: "Strand 3 Mega 4", prompt: "A MAN normally covers:", correct: "a town or city", distractors: ["one desk only", "one person only", "the whole world only"] },
        { title: "Strand 3 Mega 5", prompt: "A WAN usually covers:", correct: "a very large geographical area", distractors: ["just one classroom", "only a keyboard", "one small office desk"] },
        { title: "Strand 3 Mega 6", prompt: "Which topology connects all devices through one central hub or switch?", correct: "Star topology", distractors: ["Bus topology", "Ring topology", "Tree root format"] },
        { title: "Strand 3 Mega 7", prompt: "Which topology forms a closed loop path?", correct: "Ring topology", distractors: ["Star topology", "Bus topology", "Grid notebook"] },
        { title: "Strand 3 Mega 8", prompt: "Which topology uses one main cable shared by devices?", correct: "Bus topology", distractors: ["Mesh topology", "Star topology", "Cloud topology"] },
        { title: "Strand 3 Mega 9", prompt: "A mesh topology is known for having:", correct: "many links that improve redundancy", distractors: ["only one cable", "no devices", "a single hidden folder"] },
        { title: "Strand 3 Mega 10", prompt: "The main work of a router is to:", correct: "connect different networks", distractors: ["print assignments", "edit documents", "scan barcodes"] },
        { title: "Strand 3 Mega 11", prompt: "A switch is mainly used to connect:", correct: "devices on the same local network", distractors: ["paper files", "operating systems only", "screen brightness settings"] },
        { title: "Strand 3 Mega 12", prompt: "A modem helps a user to:", correct: "connect to the internet service", distractors: ["merge table cells", "animate text", "measure battery size"] },
        { title: "Strand 3 Mega 13", prompt: "An IP address is used to:", correct: "identify a device on a network", distractors: ["name a printer cable", "format text", "store paper records"] },
        { title: "Strand 3 Mega 14", prompt: "DNS changes a domain name into:", correct: "an IP address", distractors: ["a folder name", "a printer icon", "a slide transition"] },
        { title: "Strand 3 Mega 15", prompt: "Which software is used to open and view websites?", correct: "Web browser", distractors: ["Spreadsheet", "Driver update", "Sound recorder"] },
        { title: "Strand 3 Mega 16", prompt: "A URL is the:", correct: "address of a web page or resource", distractors: ["name of a keyboard key", "type of monitor", "size of a spreadsheet"] },
        { title: "Strand 3 Mega 17", prompt: "A search engine is used to:", correct: "find information on the web", distractors: ["print documents only", "repair hardware", "replace a mouse"] },
        { title: "Strand 3 Mega 18", prompt: "The World Wide Web is best described as:", correct: "a service that works on the internet", distractors: ["a type of printer", "a hardware port", "a spreadsheet formula"] },
        { title: "Strand 3 Mega 19", prompt: "Email is short for:", correct: "electronic mail", distractors: ["external mailroom", "easy memory", "electrical machine"] },
        { title: "Strand 3 Mega 20", prompt: "Which email field is used for visible copied recipients?", correct: "CC", distractors: ["BCC", "Reply", "Attachment"] },
        { title: "Strand 3 Mega 21", prompt: "Which email field hides copied recipients from the others?", correct: "BCC", distractors: ["CC", "To", "Subject"] },
        { title: "Strand 3 Mega 22", prompt: "A file sent together with an email is called an:", correct: "attachment", distractors: ["extension", "domain", "footnote"] },
        { title: "Strand 3 Mega 23", prompt: "Downloading means:", correct: "copying a file from the internet to your device", distractors: ["printing a web page", "typing a password", "deleting a browser tab"] },
        { title: "Strand 3 Mega 24", prompt: "Uploading means:", correct: "sending a file from your device to an online service", distractors: ["switching off the router", "closing all apps", "renaming a folder"] },
        { title: "Strand 3 Mega 25", prompt: "Social media platforms are mainly used to:", correct: "share and interact with digital content", distractors: ["format spreadsheets", "install drivers", "cool processors"] },
        { title: "Strand 3 Mega 26", prompt: "Cyberbullying is the use of digital tools to:", correct: "hurt or embarrass others online", distractors: ["repair a document", "increase storage size", "open a PDF file"] },
        { title: "Strand 3 Mega 27", prompt: "Cyberstalking involves:", correct: "repeatedly monitoring or harassing someone online", distractors: ["writing a blog post", "sorting spreadsheet data", "editing a slideshow"] },
        { title: "Strand 3 Mega 28", prompt: "A digital footprint is:", correct: "the trail of information left by online activity", distractors: ["the size of a screen", "a type of firewall", "a printer setting"] },
        { title: "Strand 3 Mega 29", prompt: "A digital shadow is information about a person that is:", correct: "posted or created by others online", distractors: ["saved only in a flash drive", "printed in secret", "stored in RAM only"] },
        { title: "Strand 3 Mega 30", prompt: "Phishing tries to trick a user into:", correct: "revealing personal or account details", distractors: ["writing a flowchart", "charging a battery", "creating a brochure"] },
        { title: "Strand 3 Mega 31", prompt: "Malware is:", correct: "harmful software", distractors: ["healthy posture", "a network cable", "a spreadsheet chart"] },
        { title: "Strand 3 Mega 32", prompt: "Encryption helps to protect data by:", correct: "turning it into coded form", distractors: ["making it larger", "printing it quickly", "sorting it alphabetically"] },
        { title: "Strand 3 Mega 33", prompt: "A firewall helps to protect a network by:", correct: "blocking unauthorized access", distractors: ["cleaning the monitor", "joining cells", "adding animations"] },
        { title: "Strand 3 Mega 34", prompt: "Antivirus software is mainly used to:", correct: "detect and remove malicious programs", distractors: ["design posters", "project slides", "convert numbers to charts"] },
        { title: "Strand 3 Mega 35", prompt: "A strong password should usually contain:", correct: "a mix of letters, numbers and symbols", distractors: ["only the user's first name", "one repeated digit", "only lowercase vowels"] },
        { title: "Strand 3 Mega 36", prompt: "A backup is:", correct: "an extra copy of important data", distractors: ["a social media account", "a type of network topology", "a presentation effect"] },
        { title: "Strand 3 Mega 37", prompt: "Confidentiality means data should be:", correct: "seen only by authorized users", distractors: ["deleted after printing", "visible to everyone", "stored only in charts"] },
        { title: "Strand 3 Mega 38", prompt: "Integrity means data should remain:", correct: "accurate and unchanged unless properly updated", distractors: ["public to all users", "printed in blue ink", "stored only offline"] },
        { title: "Strand 3 Mega 39", prompt: "Availability means information should be:", correct: "accessible when needed", distractors: ["hidden forever", "typed in capital letters", "saved only on phones"] },
        { title: "Strand 3 Mega 40", prompt: "A blog is best described as:", correct: "a regularly updated website or web page", distractors: ["a hardware scanner", "an operating system", "a barcode label"] },
        { title: "Strand 3 Mega 41", prompt: "A virtual learning environment is mainly used for:", correct: "online teaching and learning", distractors: ["repairing cables", "running a printer only", "cooling computer labs"] },
        { title: "Strand 3 Mega 42", prompt: "Browser history stores:", correct: "a record of visited web pages", distractors: ["the printer queue", "all deleted files forever", "speaker volume settings"] },
        { title: "Strand 3 Mega 43", prompt: "A hashtag on social media is often used to:", correct: "group related posts under a topic", distractors: ["open a hard disk", "convert text into charts", "protect against lightning"] },
        { title: "Strand 3 Mega 44", prompt: "IPv4 is:", correct: "an older IP addressing system", distractors: ["a word processor", "a slide theme", "an antivirus tool"] },
        { title: "Strand 3 Mega 45", prompt: "IPv6 was developed mainly to provide:", correct: "many more IP addresses", distractors: ["fewer websites", "new printer paper sizes", "faster handwriting"] },
        { title: "Strand 3 Mega 46", prompt: "Which online behavior is safest?", correct: "Do not share passwords with friends", distractors: ["Post private data publicly", "Click every unknown link", "Use the same weak password everywhere"] },
        { title: "Strand 3 Mega 47", prompt: "Using quotation marks in a search can help to:", correct: "find exact phrases", distractors: ["delete browser history", "turn off Wi-Fi", "merge email accounts"] },
        { title: "Strand 3 Mega 48", prompt: "One risk of using public Wi-Fi carelessly is:", correct: "others may intercept your data", distractors: ["your monitor becomes bigger", "your keyboard turns wireless automatically", "your printer gains more ink"] },
        { title: "Strand 3 Mega 49", prompt: "Which part of a web address often identifies the type of organization, such as .org or .com?", correct: "Domain ending", distractors: ["Cell reference", "Flowchart shape", "Robot sensor"] },
        { title: "Strand 3 Mega 50", prompt: "Most cloud services depend heavily on:", correct: "internet connectivity", distractors: ["vacuum tubes", "paper storage", "manual slide sorting"] }
      ])
    },
    {
      paper: "SAMPLE",
      section: "Strand 4 Mega Practice",
      description: "50 more sample questions from Strand 4: Computational Thinking.",
      items: autoMcqs([
        { title: "Strand 4 Mega 1", prompt: "An algorithm is:", correct: "a step-by-step method for solving a problem", distractors: ["a storage device", "a monitor setting", "a network cable"] },
        { title: "Strand 4 Mega 2", prompt: "Pseudocode is used to:", correct: "describe program logic in simple structured language", distractors: ["repair hardware", "draw printed charts", "measure screen size"] },
        { title: "Strand 4 Mega 3", prompt: "A flowchart uses symbols to show:", correct: "the steps in a process or algorithm", distractors: ["the types of printers in a lab", "how many files are in a folder", "the cost of a mouse"] },
        { title: "Strand 4 Mega 4", prompt: "Which flowchart symbol shows the start or end of a process?", correct: "Terminator", distractors: ["Decision", "Process", "Input/Output"] },
        { title: "Strand 4 Mega 5", prompt: "Which flowchart symbol represents an action or calculation?", correct: "Process", distractors: ["Terminator", "Connector cable", "Decision"] },
        { title: "Strand 4 Mega 6", prompt: "Which flowchart symbol is used for data input or output?", correct: "Input/Output symbol", distractors: ["Decision symbol", "Terminator symbol", "Merge symbol"] },
        { title: "Strand 4 Mega 7", prompt: "Which flowchart symbol is used for a yes-or-no question?", correct: "Decision symbol", distractors: ["Process symbol", "Header symbol", "Speaker icon"] },
        { title: "Strand 4 Mega 8", prompt: "Sequence in programming means steps are carried out:", correct: "in the correct order", distractors: ["only in reverse", "without any logic", "outside the program"] },
        { title: "Strand 4 Mega 9", prompt: "Selection in programming happens when a program:", correct: "chooses between different paths", distractors: ["prints every file", "deletes all variables", "stops using data"] },
        { title: "Strand 4 Mega 10", prompt: "Iteration means:", correct: "repeating a set of instructions", distractors: ["locking a folder", "merging cells", "uploading email"] },
        { title: "Strand 4 Mega 11", prompt: "A variable stores a value that:", correct: "can change", distractors: ["must remain fixed forever", "cannot be displayed", "is always text only"] },
        { title: "Strand 4 Mega 12", prompt: "A constant stores a value that:", correct: "should not change during the program", distractors: ["must change every second", "is never used", "cannot be typed"] },
        { title: "Strand 4 Mega 13", prompt: "Which data type is used for whole numbers?", correct: "Integer", distractors: ["Boolean", "String", "Float text"] },
        { title: "Strand 4 Mega 14", prompt: "Which data type is suitable for decimal numbers such as 12.75?", correct: "Float", distractors: ["String", "Boolean", "Character folder"] },
        { title: "Strand 4 Mega 15", prompt: "Which data type is suitable for words and sentences?", correct: "String", distractors: ["Integer", "Boolean", "Processor"] },
        { title: "Strand 4 Mega 16", prompt: "Which data type stores only True or False values?", correct: "Boolean", distractors: ["Float", "Text line", "Date folder"] },
        { title: "Strand 4 Mega 17", prompt: "In programming, the symbol used to give a variable a value is called the:", correct: "assignment operator", distractors: ["projector switch", "network adapter", "mail merge field"] },
        { title: "Strand 4 Mega 18", prompt: "The symbols +, -, * and / are examples of:", correct: "arithmetic operators", distractors: ["storage devices", "network types", "slide transitions"] },
        { title: "Strand 4 Mega 19", prompt: "Which kind of operator compares values, such as > or =?", correct: "Relational operator", distractors: ["Optical operator", "Formatting operator", "Output device"] },
        { title: "Strand 4 Mega 20", prompt: "AND, OR and NOT are examples of:", correct: "logical operators", distractors: ["input devices", "chart types", "network addresses"] },
        { title: "Strand 4 Mega 21", prompt: "BODMAS helps a programmer to remember:", correct: "the correct order of operations", distractors: ["the parts of a router", "the email fields", "the steps of printing"] },
        { title: "Strand 4 Mega 22", prompt: "Binary is a number system with base:", correct: "2", distractors: ["8", "10", "16"] },
        { title: "Strand 4 Mega 23", prompt: "Decimal is a number system with base:", correct: "10", distractors: ["2", "4", "16"] },
        { title: "Strand 4 Mega 24", prompt: "Hexadecimal is a number system with base:", correct: "16", distractors: ["2", "8", "12"] },
        { title: "Strand 4 Mega 25", prompt: "What is the decimal value of binary 1010?", correct: "10", distractors: ["8", "12", "14"] },
        { title: "Strand 4 Mega 26", prompt: "Which binary number is equal to decimal 15?", correct: "1111", distractors: ["1010", "1001", "1100"] },
        { title: "Strand 4 Mega 27", prompt: "An IDE is mainly used to:", correct: "write, run and test programs", distractors: ["scan documents", "print posters", "store passwords on paper"] },
        { title: "Strand 4 Mega 28", prompt: "Debugging means:", correct: "finding and correcting errors in a program", distractors: ["hiding files in a folder", "locking a network", "creating a slideshow"] },
        { title: "Strand 4 Mega 29", prompt: "A syntax error is caused by:", correct: "wrong program grammar or structure", distractors: ["a low printer ink level", "good algorithm design", "correct flowchart symbols"] },
        { title: "Strand 4 Mega 30", prompt: "A runtime error happens:", correct: "while the program is running", distractors: ["before the computer is switched on", "only when printing", "only in a browser tab"] },
        { title: "Strand 4 Mega 31", prompt: "The word IF in pseudocode is often used for:", correct: "selection or decision making", distractors: ["network addressing", "storing video files", "changing page margins"] },
        { title: "Strand 4 Mega 32", prompt: "A loop is useful when a program needs to:", correct: "repeat steps", distractors: ["draw only one line", "delete the keyboard", "create a router"] },
        { title: "Strand 4 Mega 33", prompt: "The operator mod gives:", correct: "the remainder after division", distractors: ["the product of numbers", "the decimal point position", "a file extension"] },
        { title: "Strand 4 Mega 34", prompt: "In many algorithms, integer division gives:", correct: "the whole-number part of a division result", distractors: ["the remainder only", "a text string", "a Boolean answer"] },
        { title: "Strand 4 Mega 35", prompt: "Which robot part collects information from the environment?", correct: "Sensor", distractors: ["Actuator", "Folder", "Speaker cable"] },
        { title: "Strand 4 Mega 36", prompt: "Which robot part works like the brain and controls decisions?", correct: "Controller", distractors: ["Memory card", "Projector", "Subject line"] },
        { title: "Strand 4 Mega 37", prompt: "Which robot part performs movement or physical action?", correct: "Actuator", distractors: ["Sensor", "Browser", "Chart"] },
        { title: "Strand 4 Mega 38", prompt: "Robots are useful in dangerous environments because they can:", correct: "do risky tasks for humans", distractors: ["replace every network", "remove all passwords", "turn paper into software"] },
        { title: "Strand 4 Mega 39", prompt: "One common use of robots is in:", correct: "manufacturing", distractors: ["page numbering", "slide themes", "file compression only"] },
        { title: "Strand 4 Mega 40", prompt: "Asimov's First Law of Robotics says a robot should not:", correct: "harm a human being", distractors: ["read sensor data", "move an object", "follow a correct instruction"] },
        { title: "Strand 4 Mega 41", prompt: "Artificial intelligence is the ability of a computer to:", correct: "perform tasks that usually require human intelligence", distractors: ["be used as a monitor stand", "store only decimal numbers", "replace electricity"] },
        { title: "Strand 4 Mega 42", prompt: "An expert system commonly uses:", correct: "IF-THEN rules", distractors: ["paper labels", "printer drums", "USB audio"] },
        { title: "Strand 4 Mega 43", prompt: "In an expert system, the knowledge base stores:", correct: "facts and rules", distractors: ["keyboard keys", "network topologies", "page borders"] },
        { title: "Strand 4 Mega 44", prompt: "In an expert system, the inference engine is used to:", correct: "apply rules to reach conclusions", distractors: ["print brochures", "draw flowchart symbols", "measure battery size"] },
        { title: "Strand 4 Mega 45", prompt: "An artificial neural network is designed to imitate:", correct: "the way the human brain learns patterns", distractors: ["the shape of a keyboard", "the layout of a spreadsheet", "the wiring of a printer"] },
        { title: "Strand 4 Mega 46", prompt: "Machine learning allows computers to:", correct: "learn from data and improve their decisions", distractors: ["store all files in RAM forever", "work without instructions", "replace all teachers instantly"] },
        { title: "Strand 4 Mega 47", prompt: "Weak AI is AI built for:", correct: "specific tasks", distractors: ["every possible human task", "hardware repairs only", "printing only"] },
        { title: "Strand 4 Mega 48", prompt: "Strong AI refers to the idea of AI with:", correct: "general human-like intelligence", distractors: ["a larger monitor", "faster page margins", "extra network cables"] },
        { title: "Strand 4 Mega 49", prompt: "A chatbot is an example of:", correct: "an AI application", distractors: ["a storage device", "a spreadsheet chart", "a physical topology"] },
        { title: "Strand 4 Mega 50", prompt: "Self-driving features in vehicles often depend on:", correct: "artificial intelligence and sensors", distractors: ["paper filing systems", "mail merge letters", "optical discs only"] }
      ])
    }
  ];
  function ensurePrivacyNavLink() {
    document.querySelectorAll(".top-nav").forEach((nav) => {
      if (nav.querySelector('a[href="privacy.html"]')) {
        return;
      }
      const link = document.createElement("a");
      link.href = "privacy.html";
      link.textContent = "Privacy";
      nav.appendChild(link);
    });
  }
  function injectSiteDisclosure() {
    const disclosureText = 'We use Microsoft Clarity to understand how this revision site is used and to improve our lessons, question bank and overall experience. By using this site, you agree that we and Microsoft may collect and use behavioral data for analytics and improvement. Read our <a href="privacy.html" class="footer-link">Privacy Policy</a> for details.';
    document.querySelectorAll(".footer").forEach((footer) => {
      if (footer.querySelector(".site-disclosure")) {
        return;
      }
      const disclosure = document.createElement("div");
      disclosure.className = "site-disclosure";
      disclosure.innerHTML = `
      <strong>Site Disclosure</strong>
      <p>${disclosureText}</p>
    `;
      footer.appendChild(disclosure);
    });
  }
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
      const matchesDocuments = href === "documents.html" && (currentPage === "documents.html" || currentPage.startsWith("view-"));
      const matchesPrivacy = href === "privacy.html" && currentPage === "privacy.html";
      if (matchesDirect || matchesStrand1 || matchesStrand2 || matchesStrand3 || matchesStrand4 || matchesDocuments || matchesPrivacy) {
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
      return questionGroups.filter((group) => activePaper === "ALL" || group.paper === activePaper).map((group) => {
        const items = group.items.filter((item) => !query || item.searchText.includes(query));
        return { ...group, items };
      }).filter((group) => group.items.length > 0);
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
      root.innerHTML = visibleGroups.map((group) => {
        const cardHtml = group.items.map(
          (item) => `
              <details class="question-card">
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
        ).join("");
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
      }).join("");
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
    ensurePrivacyNavLink();
    injectSiteDisclosure();
    setActiveTopNav();
    initReveal();
    renderQuestionBank();
  });
})();
