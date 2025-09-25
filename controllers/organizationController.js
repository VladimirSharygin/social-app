// controllers/organizationController.js - Контроллер для работы с организациями

const Organization = require('../models/organization');

class OrganizationController {
    constructor() {
        this.organizations = [
            new Organization(
                1,
                "Детский центр 'Светлое'",
                "ул. Ленина, 15",
                4.8,
                127,
                [
                    {
                        id: 1,
                        name: "Помощь в школьном саду",
                        date: "15.03.2024",
                        time: "10:00 - 12:00",
                        required: 5
                    },
                    {
                        id: 2,
                        name: "Работа с детьми в библиотеке",
                        date: "18.03.2024",
                        time: "14:00 - 16:00",
                        required: 3
                    }
                ]
            ),
            new Organization(
                2,
                "Приют для животных 'Домик'",
                "ул. Пушкина, 25",
                4.9,
                89,
                [
                    {
                        id: 3,
                        name: "Помощь в уходе за животными",
                        date: "20.03.2024",
                        time: "16:00 - 18:00",
                        required: 2
                    }
                ]
            )
        ];
    }

    // Получить список всех организаций
    getAllOrganizations() {
        return this.organizations;
    }

    // Получить организацию по ID
    getOrganizationById(id) {
        return this.organizations.find(org => org.id === id);
    }

    // Добавить новую организацию
    addOrganization(organization) {
        organization.id = this.organizations.length + 1;
        this.organizations.push(organization);
        return organization;
    }

    // Обновить информацию об организации
    updateOrganization(id, updatedData) {
        const index = this.organizations.findIndex(org => org.id === id);
        if (index !== -1) {
            this.organizations[index] = { ...this.organizations[index], ...updatedData };
            return this.organizations[index];
        }
        return null;
    }

    // Удалить организацию
    deleteOrganization(id) {
        const index = this.organizations.findIndex(org => org.id === id);
        if (index !== -1) {
            return this.organizations.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new OrganizationController();
