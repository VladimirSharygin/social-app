// config.js - Конфигурационный файл

module.exports = {
    // Настройки базы данных
    database: {
        host: 'localhost',
        port: 5432,
        name: 'volunteer_app',
        user: 'admin',
        password: 'password'
    },
    
    // Настройки API
    api: {
        baseUrl: 'https://api.voluteerapp.ru',
        version: 'v1'
    },
    
    // Настройки уведомлений
    notifications: {
        pushEnabled: true,
        emailEnabled: true,
        smsEnabled: false
    },
    
    // Настройки безопасности
    security: {
        jwtSecret: 'your-secret-key-here',
        sessionTimeout: 3600000 // 1 час
    }
};
