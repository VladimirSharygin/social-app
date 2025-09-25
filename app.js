// app.js - Главный файл приложения

// Импорт необходимых модулей
const express = require('express');
const app = express();
const port = 3000;

// Middleware для работы с JSON
app.use(express.json());

// Маршруты
app.get('/', (req, res) => {
    res.send('Добро пожаловать в приложение "Сообщество"!');
});

// Маршруты для организаций
app.get('/api/organizations', (req, res) => {
    // Логика получения списка организаций
    res.json({
        organizations: [
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
        ]
    });
});

// Маршруты для волонтёрских проектов
app.get('/api/projects', (req, res) => {
    // Логика получения проектов
    res.json({
        projects: [
            {
                id: 1,
                name: "Работа с детьми в библиотеке",
                date: "18.03.2024",
                time: "14:00 - 16:00",
                required: 3
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
