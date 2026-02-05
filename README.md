Prerequisites

Node.js v18+ (LTS recommended)

npm or yarn

Git

(Optional) Visual Studio Code or another IDE

1. Clone the repository
git clone https://github.com/judethecreator1123/qa-automation-assessment.git
cd <your-repo>

2. Install dependencies
# Install Node dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps

# Install Faker for generating test data
npm install @faker-js/faker --save-dev

# Install dotenv for environment variable management
npm install dotenv --save

3. Configure environment variables

Create a .env file in the project root with the following content:

USERNAME=standard_user
PASSWORD=secret_sauce
INVENTORYPAGE=https://www.saucedemo.com/inventory.html
BASEURL=https://www.saucedemo.com

4. Run tests locally
Run all tests
npx playwright test

Run a specific test file
npx playwright test tests/checkout-flow.spec.ts


5. Global login / session

The first test run executes the global login fixture, saving auth.json.

Subsequent tests reuse this session for faster execution.

auth.json is automatically removed after running global teardown in teardown.ts:

6. Using Faker for dynamic test data

Example of generating a random postal code:

import { faker } from '@faker-js/faker';

const randomPostalCode = faker.address.zipCode();
console.log('Random postal code:', randomPostalCode);


Useful for testing forms, checkout flows, and other dynamic scenarios.

7. Folder structure

/data              -> test data     q
/fixtures          -> globalSetup & login/logout
/pages             -> Page Object Models (LoginPage, etc.)
/tests             -> Playwright test files
.env               -> environment variables
playwright.config.ts -> Playwright configuration
auth.json          -> generated authenticated session

10. For performance check on inventory page

Network throttling can be simulated for performance tests if needed.

Test titles are concise and behavior-focused for reporting clarity.
