import { useState, createRef } from 'react'
import './App.css'
import ParamEditor, { Param } from './components/ParamEditor'
import './components/ParamEditor.css'

// Тестовые данные из задания
const testParams = [
  {
    id: 1,
    name: "Назначение"
  },
  {
    id: 2,
    name: "Длина"
  }
]

const initialModel = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное"
    },
    {
      paramId: 2,
      value: "макси"
    }
  ],
  colors: [] // Пустой массив для соответствия интерфейсу
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  name: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

function App() {
  const [model] = useState<Model>(initialModel)
  const [resultModel, setResultModel] = useState<Model | null>(null)

  // Ссылка на экземпляр компонента ParamEditor
  const paramEditorRef = createRef<ParamEditor>()

  // Обработчик кнопки "Сохранить"
  const handleSave = () => {
    if (paramEditorRef.current) {
      const updatedModel = paramEditorRef.current.getModel()
      setResultModel(updatedModel)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Редактор параметров</h1>
      </header>
      <main className="app-main">
        <div className="editor-container">
          <ParamEditor
            ref={paramEditorRef}
            params={testParams as Param[]}
            model={model}
          />

          <div className="actions">
            <button onClick={handleSave}>Сохранить</button>
          </div>

          {resultModel && (
            <div className="result">
              <h3>Результат:</h3>
              <pre>{JSON.stringify(resultModel, null, 4)}</pre>
            </div>
          )}
        </div>
      </main>
      <footer className="app-footer">
        <p>Тестовое задание - Редактор параметров</p>
      </footer>
    </div>
  )
}

export default App
