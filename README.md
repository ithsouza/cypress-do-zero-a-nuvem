## Automated Testing Project – Customer Service Center (TAT)

### Description
This project contains automated tests developed with **[Cypress](https://www.cypress.io)** to validate the features of the **Customer Service Center (TAT)** application.  
The goal is to ensure that the system’s behavior remains correct and stable after every code update.

The tests cover functionalities such as:
- Filling and submitting forms  
- Validating required fields  
- File uploads  
- Selecting products and service types  
- Checking responsive behavior (mobile mode)

---

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Git](https://git-scm.com/) (to clone the repository)
- A code editor like [VS Code](https://code.visualstudio.com/)

You can verify that Node and npm are installed by running:
```bash
node -v
npm -v
```

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wlsf82/cypress-do-zero-a-nuvem.git
   ```

2. Enter the project directory:
   ```bash
   cd cypress-do-zero-a-nuvem
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

### Running the tests

#### Interactive mode (Cypress Runner)
Open the Cypress interface:
```bash
npm run cy:open
```

#### Mobile mode (410 × 860 px)
Simulate a mobile device:
```bash
npm run cy:open:mobile
```

#### Headless mode (no GUI)
Run all tests directly in the terminal:
```bash
npm test
```

#### Headless mode simulating mobile
```bash
npm run test:mobile
```

---

### Project structure

```
cypress-do-zero-a-nuvem/
│
├── cypress/
│   ├── e2e/
│   │   └── CAC-TAT.cy.js        # Main test file
│   ├── fixtures/                # Test data files (e.g., example.json)
│   ├── support/
│   │   └── commands.js          # Custom commands (e.g., fillMandatoryFieldsAndSubmit)
│
├── src/                         # Application files (HTML/CSS/JS)
│
├── package.json                 # Scripts and dependencies
└── README.md                    # Project documentation
```

---

### Available scripts

| Command | Description |
|----------|-------------|
| `npm run cy:open` | Opens Cypress in interactive mode |
| `npm run cy:open:mobile` | Opens Cypress simulating 410×860 viewport |
| `npm test` | Runs tests in headless mode |
| `npm run test:mobile` | Runs tests in headless mode simulating mobile viewport |

---

### Useful tips

- Use `cy.viewport(width, height)` inside a test if you want to change the screen size dynamically.  
- Keep your test and file names clear and descriptive.  
- Always update this README when new features or dependencies are added.  
- Follow good commit practices (for example, [Conventional Commits](https://www.conventionalcommits.org/)).

---

### Author
**Walmyr Filho (TAT School)**  
Based on the course *“Cypress, from Zero to the Cloud”*  
Adapted and maintained by **Thiago Francisco**
