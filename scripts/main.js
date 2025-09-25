// scripts/main.js - Скрипты для работы с интерфейсом

// Переключение между секциями
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики навигации
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Скрыть все секции
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Снять активный класс с всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Активировать выбранную секцию
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
            
            // Добавить активный класс к текущей ссылке
            this.classList.add('active');
        });
    });
    
    // Инициализация интерфейса
    initApp();
});

function initApp() {
    // Загрузка данных организаций
    loadOrganizations();
    
    // Обработчики фильтров
    setupFilterHandlers();
    
    // Обработчики кнопок
    setupButtonHandlers();
}

function loadOrganizations() {
    // В реальном приложении здесь будет вызов API
    const organizations = [
        {
            id: 1,
            name: "Детский центр 'Светлое'",
            distance: 2.3,
            rating: 4.8,
            reviews: 127,
            projects: 5
        },
        {
            id: 2,
            name: "Приют для животных 'Домик'",
            distance: 1.1,
            rating: 4.9,
            reviews: 89,
            projects: 3
        }
    ];
    
    const organizationList = document.querySelector('.organization-list');
    
    organizations.forEach(org => {
        const card = createOrganizationCard(org);
        organizationList.appendChild(card);
    });
}

function createOrganizationCard(organization) {
    const card = document.createElement('div');
    card.className = 'organization-card';
    
    card.innerHTML = `
        <h3>${organization.name}</h3>
        <p>📍 ${organization.distance} км от вас</p>
        <p>⭐ ${organization.rating} (${organization.reviews} отзывов)</p>
        <p>📅 Волонтёрство: 15.03.2024</p>
        <button class="btn-primary" onclick="viewOrganization(${organization.id})">Подробнее</button>
    `;
    
    return card;
}

function setupFilterHandlers() {
    // Обработчик изменения фильтров
    const filterInputs = document.querySelectorAll('.filter-options input[type="checkbox"]');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Здесь будет логика фильтрации организаций
            console.log('Фильтр изменен:', this.id);
        });
    });
    
    // Обработчик выбора расстояния
    const distanceButtons = document.querySelectorAll('.distance-filters button');
    
    distanceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Снять активный класс у всех кнопок
            distanceButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавить активный класс к выбранной кнопке
            this.classList.add('active');
            
            // Здесь будет логика фильтрации по расстоянию
            console.log('Выбрано расстояние:', this.textContent);
        });
    });
}

function setupButtonHandlers() {
    // Обработчики кнопок
    const projectButtons = document.querySelectorAll('.project-card .btn-primary');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            alert(`Вы подали заявку на проект: ${projectName}`);
        });
    });
}

function viewOrganization(id) {
    // Логика открытия страницы организации
    console.log('Просмотр организации с ID:', id);
    
    // В реальном приложении здесь будет переход к странице организации
    alert(`Открытие информации об организации с ID ${id}`);
}

// Функция для работы с API
async function fetchOrganizations() {
    try {
        const response = await fetch('/api/organizations');
        const organizations = await response.json();
        return organizations;
    } catch (error) {
        console.error('Ошибка при получении организаций:', error);
        return [];
    }
}

// Функция для работы с проектами
async function fetchProjects() {
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Ошибка при получении проектов:', error);
        return [];
    }
}

// Функция для отправки заявки на участие
async function submitApplication(projectId, userData) {
    try {
        const response = await fetch(`/api/projects/${projectId}/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (response.ok) {
            alert('Заявка успешно отправлена!');
        } else {
            throw new Error('Ошибка при отправке заявки');
        }
    } catch (error) {
        console.error('Ошибка при отправке заявки:', error);
        alert('Произошла ошибка при отправке заявки');
    }
}
