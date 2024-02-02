# Cloning the Automation Project
## Write Access to the Repository
To get Read / Write Access for this repository, place a request in the magento-devops slack channel.  They will need the github handle for the person needing access.

## Mac

### All the commands below can be run in CLI/Terminal

1. Install Homebrew: Homebrew helps install programs, packages and etc for Apple and Linux system (https://brew.sh/)

```
1. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2. echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile (or your profile of your choice)
3. source .bash_profile (or your profile of your choice)
```

2. Ensure a JDK 8 is installed. You can check by running `java -version` inside Terminal. If no java version is found
   run the command below

```
brew install openjdk@11
```

3. Install Node Version Manager: This tool helps switch between different node version easily

```
brew install nvm
nvm install 16
node -v <---verifies node version is installed
```

For Mac using M1 chips please follow this guide to set up your terminal:
https://dev.to/courier/tips-and-tricks-to-setup-your-apple-m1-for-development-547g

4. Adding your SSH key to Github
   Run the command in the terminal or your preferred CLI tool
   ```
   ssh-keygen -t rsa
   ```
	- Press ENTER key to keep the default location
	- Enter a passphrase if you choose too. If you enter a passphrase any code you push will need to enter that
	  passphrase
	- System will generate the ssh key
	- Run
	```
	pbcopy < ~/.ssh/id_rsa.pub
	```
	- Add the ssh key to your user's SSH key in Github - https://github.com/settings/keys
		- Enable SSO and authorize Univar


5. Clone the project in a easily accessible location (e.g. Document folder)

	```
	git clone git@github.com:Univar/ecommerce-qa-automation-webdriverio.git
	npm i <--- will install the required node packages for the project
	```
	- Open project using an IDE. Currently the team use VS Code or Intellij IDEA

	- List of extensions for VS Code:
		1. Bracket Pair Colorizer
		2. Code Spell Checker
		3. ESLint
		4. Git History
		5. Open In Default Browser (Used to Open Allure Reports)
		6. Prettier - Code formatter
		7. JavaScript Debugger (Nightly) (For Debugging on VSCode)
			- More info on WebDriverIO debugging (https://webdriver.io/docs/debugging/)

6. Copy the sample.env
	- On the commandline/terminal run the command `cp sample.env .env`. This will create a copy of the sample.env file
	- After the file is copied, open the file `.env` and fill out the user info for `QUSERNAME` and `QPASSWORD`. The login
	  can be found on confluence

7. If everything was installed correctly try running a simple test
	- Run the command `npm run test_qa_us`
	- Chrome should launch and run a single test

## Windows

1. Installing GitBash
	- Link for GitBash: https://gitforwindows.org/
	- GitBash is a helpful CLI tool for Windows

2. Installing Java on Windows
	- Open JDK 11 for windows https://jdk.java.net/archive/
	- Download version `11.0.2 (build 11.0.2+9)` for windows

3. Installing Node on Windows
	- Go to https://nodejs.org/en/download/
	- Click on the tab for LTS and download the Windows Version

4. Adding your SSH key to Github
   Run the command in GitBash
   ```
   ssh-keygen -t rsa
   ```
	- Press ENTER key to keep the default location
	- Enter a passphrase if you choose too. If you enter a passphrase any code you push will need to enter that
	  passphrase
	- System will generate the ssh key
	- Run
   ```
   cat ~/.ssh/id_rsa.pub
   ```
	- Add the ssh key to your user's SSH key in Github - https://github.com/settings/keys
		- Enable SSO and authorize Univar


5. Clone the project in a easily accessible location (e.g. Document folder)

	```
	git clone https://github.com/srinathband1/ecommerce-qa-automation-webDriverIO.git
	npm i <--- will install the required node packages for the project
	```
	- Open project using an IDE. Currently the team use VS Code or Intellij IDEA

	- List of extensions for VS Code:
		1. Bracket Pair Colorizer
		2. Code Spell Checker
		3. ESLint
		4. Git History
		5. Open In Default Browser (Used to Open Allure Reports)
		6. Prettier - Code formatter

6. Copy the sample.env
	- On the commandline/terminal run the command `cp sample.env .env`. This will create a copy of the sample.env file
	- After the file is copy open the file `.env` and fill out the user info for `QUSERNAME` and `QPASSWORD`. The login
	  can be found on confluence

7. If everything was installed correctly try running a simple test
	- Run the command `npm run test_qa_us`
	- Chrome should launch and run a test.

## Installing pre-commit hooks

Pre-commit hooks is a plugin that will run checks on the code base before any changes can get pushed in to GitHub. This is to ensure clean code can get pushed into GitHub.
# Mac

For Mac on M1/M2 chips please use the command `arch -arm64 brew install pre-commit`
	- Intel chips use this guide How to install pre-commit https://pre-commit.com/


# Windows

Link on how to install pip https://www.geeksforgeeks.org/how-to-install-pip-on-windows/

How to fix if pip is not found on windows: https://www.youtube.com/watch?v=PzlQPNNt8T4

```
	1. Once Python is installed run the command `pip install pre-commit`
	2. Run the command `pre-commit install`. This will install the pre-commit hooks
	3. To test the pre-commit make a change in any file. Then try committing the change it should fail. If the commit fails then you've successfully installed the pre-commit hooks
```

## About Framework

- WebdriverIO framework that Mocha,Chai, Page Object model.
- Framework is able to test web apps using Javascript.
- Framework followed the page object model, Xpath and Css locators and page wise actions.
- Framework accept the assertion from chai.

## Test Case

- Test case will pass when run in the following configurations:
- Run Individually on locally in Chrome.
- Ensure that each test case should run successfully in multiple regions as long as that feature is enabled in the region

## Naming Conventions

- File name and directory name are in Camel case followed by "_"
- Methods and variable names should use camelCase
- Tests files should be in camelCase and ends with .js file extension.
- Always use common wdio action methods from commonAction class under Utilities folder in the Framework.

## Run a test to verify the install
- In one of the config file (e.g. wdio.conf_us.js) update the smoke suite to run only one test (e.g. `'./UnivarUI/TestSuite/TS0018*.js',`).
- Each country has there own config because of certain features that are only enabled in certain region (e.g. One time ship for Nordics or Instant Checkout on US and Canada). 
- To run a suite of script use the command `npm run us_smoke --ENV=QA --SUITE=smoke --SLACK=false`. This command will run the smoke suite on US QA	
	* List of Region to each config file:
		- wdio.conf_us.js
			- US (us_smoke)
   		- wdio.conf_ca.js
			- Canada (EN/FR) (ca_en_smoke or ca_fr_smoke)
     		- wdio.conf_mx.js
       			- Mexico (mx_smoke)
          	- wdio.conf_nordics.js
			- Sweden, Denmark, Norway, Finland 
				- (se_smoke, dk_smoke, no_smoke and fi_smoke)
		- wdio.conf_uk.js  
			- UK, IE/NE, France, Italy, Belgium (NL/FR), Netherlands (10/30) and Spain
				- (uk_smoke, ie_smoke, it_smoke, be_smoke, be_fr_smoke, nl_smoke, nl_be_smoke and es_smoke)

## Troubleshooting tips

- If you are prompted to enter your email and password while taking a pull or pushing the code upstream, add the github
  emailId and use the generated personal token as a password and store it in your MacBook keychain.
