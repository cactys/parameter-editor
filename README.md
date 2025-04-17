# Редактор параметров
[Demo](https://parameter-editor-phi.vercel.app/)
Простое React приложение для редактирования параметров модели. Этот проект предназначен для демонстрации работы с параметрами и их значениями в React с TypeScript.

## Описание проекта

Редактор параметров — это интерфейс для редактирования значений параметров модели. Приложение позволяет:
- Отображать список параметров и их текущие значения
- Редактировать значения параметров
- Сохранять изменения в модели

## Технологии

- React 19
- TypeScript
- Vite
- CSS (для стилизации компонентов)
- ESLint (для проверки кода)
- Prettier (для форматирования кода)

## Установка и запуск

### Предварительные требования

- Node.js (последняя стабильная версия)
- npm или yarn

### Шаги установки

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/cactys/parameter-editor.git
   cd parameter-editor
   ```

2. Установите зависимости:
   ```
   npm install
   ```
   или
   ```
   yarn install
   ```

3. Запустите приложение в режиме разработки:
   ```
   npm run dev
   ```
   или
   ```
   yarn dev
   ```

4. Откройте приложение в браузере по адресу: `http://localhost:5173`

## Сборка для production

Для создания production-сборки используйте:
```
npm run build
```
или
```
yarn build
```

## Документация по использованию

### Компонент ParamEditor

Основной компонент приложения — `ParamEditor`, который принимает следующие props:

- `params`: Массив параметров с полями `id` и `name`
- `model`: Объект модели с полями `paramValues` и `colors`

Компонент предоставляет метод `getModel()`, который возвращает обновленную модель с текущими значениями параметров.

### Пример использования

```tsx
import ParamEditor from './components/ParamEditor';

// Определение параметров
const params = [
  { id: 1, name: "Назначение" },
  { id: 2, name: "Длина" }
];

// Исходная модель
const model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" }
  ],
  colors: []
};

// Использование компонента
function App() {
  const paramEditorRef = createRef<ParamEditor>();
  
  const handleSave = () => {
    if (paramEditorRef.current) {
      const updatedModel = paramEditorRef.current.getModel();
      // Обработка обновленной модели
    }
  };
  
  return (
    <div>
      <ParamEditor
        ref={paramEditorRef}
        params={params}
        model={model}
      />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
}
```

## Лицензия

[MIT](LICENSE)
