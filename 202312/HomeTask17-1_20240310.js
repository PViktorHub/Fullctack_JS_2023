{
    class GameDeveloper {
        constructor(name, skillLevel, experience) {
            this.name = name;
            this.skillLevel = skillLevel;
            this.experience = experience;
        }
    }

    class GameProject {
        constructor(name, description, developers = []) {
            this.name = name;
            this.description = description;
            this.developers = developers;
        }

        addDeveloper(developer) {
            this.developers.push(developer);
        }
    }

    class GameCompany {
        constructor(name) {
            this.name = name;
            this.projects = [];
        }

        addProject(project) {
            this.projects.push(project);
        }
    }


    const developer1 = new GameDeveloper("John Doe", "Senior", 5);
    const developer2 = new GameDeveloper("Jane Smith", "Junior", 2);


    const project1 = new GameProject("Project A", "An exciting adventure game");
    const project2 = new GameProject("Project B", "A multiplayer online battle game");


    project1.addDeveloper(developer1);
    project2.addDeveloper(developer2);


    const company = new GameCompany("GameDev Company");


    company.addProject(project1);
    company.addProject(project2);


    console.log("Company Name:", company.name);
    console.log("Projects:");
    company.projects.forEach((project, index) => {
        console.log(`Project ${index + 1}:`);
        console.log("Name:", project.name);
        console.log("Description:", project.description);
        console.log("Developers:");
        project.developers.forEach((developer, idx) => {
            console.log(`Developer ${idx + 1}:`);
            console.log("Name:", developer.name);
            console.log("Skill Level:", developer.skillLevel);
            console.log("Experience:", developer.experience);
        });
    });
}

{
    class Developer {
        constructor(name, skillLevel, salary) {
            this.name = name;
            this.skillLevel = skillLevel;
            this.salary = salary;
            Developer.totalDevelopers++;
        }
    
        displayInfo() {
            console.log(`Name: ${this.name}`);
            console.log(`Skill Level: ${this.skillLevel}`);
            console.log(`Salary: ${this.salary}`);
        }
    
        static getTotalDevelopers() {
            return Developer.totalDevelopers;
        }
    }
    
    Developer.totalDevelopers = 0;
    
    class FrontendDeveloper extends Developer {
        constructor(name, skillLevel, salary, frameworks, frontendExperience) {
            super(name, skillLevel, salary);
            this.frameworks = frameworks;
            this.frontendExperience = frontendExperience;
            FrontendDeveloper.totalFrontendDevelopers++;
        }
    
        displayInfo() {
            super.displayInfo();
            console.log(`Frameworks: ${this.frameworks}`);
            console.log(`Frontend Experience: ${this.frontendExperience} years`);
        }
    
        static getTotalFrontendDevelopers() {
            return FrontendDeveloper.totalFrontendDevelopers;
        }
    }
    
    FrontendDeveloper.totalFrontendDevelopers = 0;
    
    class BackendDeveloper extends Developer {
        constructor(name, skillLevel, salary, languages, backendExperience) {
            super(name, skillLevel, salary);
            this.languages = languages;
            this.backendExperience = backendExperience;
            BackendDeveloper.totalBackendDevelopers++;
        }
    
        displayInfo() {
            super.displayInfo();
            console.log(`Languages: ${this.languages}`);
            console.log(`Backend Experience: ${this.backendExperience} years`);
        }
    
        static getTotalBackendDevelopers() {
            return BackendDeveloper.totalBackendDevelopers;
        }
    }
    
    BackendDeveloper.totalBackendDevelopers = 0;
    
    class FullStackDeveloper extends Developer {
        constructor(name, skillLevel, salary, frameworks, languages, frontendExperience, backendExperience) {
            super(name, skillLevel, salary);
            this.frameworks = frameworks;
            this.languages = languages;
            this.frontendExperience = frontendExperience;
            this.backendExperience = backendExperience;
            FullStackDeveloper.totalFullStackDevelopers++;
        }
    
        displayInfo() {
            super.displayInfo();
            console.log(`Frameworks: ${this.frameworks}`);
            console.log(`Languages: ${this.languages}`);
            console.log(`Frontend Experience: ${this.frontendExperience} years`);
            console.log(`Backend Experience: ${this.backendExperience} years`);
        }
    
        static getTotalFullStackDevelopers() {
            return FullStackDeveloper.totalFullStackDevelopers;
        }
    }
    
    FullStackDeveloper.totalFullStackDevelopers = 0;
    

    const frontendDev = new FrontendDeveloper("John Doe", "Senior", 5000, ["React", "Angular"], 5);
    const backendDev = new BackendDeveloper("Jane Smith", "Senior", 6000, ["Java", "Python"], 7);
    const fullStackDev = new FullStackDeveloper("Alice Johnson", "Mid", 5500, ["Vue", "Express"], ["JavaScript", "Python"], 4, 6);
    
    console.log("Frontend Developer:");
    frontendDev.displayInfo();
    console.log("\nBackend Developer:");
    backendDev.displayInfo();
    console.log("\nFull Stack Developer:");
    fullStackDev.displayInfo();
    
    console.log("\nTotal Developers:", Developer.getTotalDevelopers());
    console.log("Total Frontend Developers:", FrontendDeveloper.getTotalFrontendDevelopers());
    console.log("Total Backend Developers:", BackendDeveloper.getTotalBackendDevelopers());
    console.log("Total Full Stack Developers:", FullStackDeveloper.getTotalFullStackDevelopers());

}