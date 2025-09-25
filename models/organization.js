// models/organization.js - Модель организации

class Organization {
    constructor(id, name, address, rating, reviews, projects) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rating = rating;
        this.reviews = reviews;
        this.projects = projects;
    }

    // Получение информации об организации
    getInfo() {
        return {
            id: this.id,
            name: this.name,
            address: this.address,
            rating: this.rating,
            reviews: this.reviews,
            projects: this.projects
        };
    }

    // Получение проектов организации
    getProjects() {
        return this.projects;
    }

    // Добавление нового проекта
    addProject(project) {
        this.projects.push(project);
    }
}

module.exports = Organization;
