import React from 'react';

// Интерфейсы из задания
export interface Param {
  id: number;
  name: string;
  type?: 'string';
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

interface Props {
  params: Param[];
  model: Model;
}

// Интерфейс состояния компонента
interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Инициализируем состояние значениями из модели
    this.state = {
      paramValues: [...props.model.paramValues]
    };
  }

  // Метод для обновления значения параметра
  handleParamChange = (paramId: number, value: string) => {
    const { paramValues } = this.state;

    // Ищем параметр в текущих значениях
    const paramValueIndex = paramValues.findIndex(param => param.paramId === paramId);

    if (paramValueIndex !== -1) {
      // Если параметр существует, обновляем его значение
      const updatedParamValues = [...paramValues];
      updatedParamValues[paramValueIndex] = { paramId, value };

      this.setState({ paramValues: updatedParamValues });
    } else {
      // Если параметра еще нет, добавляем его
      this.setState({
        paramValues: [...paramValues, { paramId, value }]
      });
    }
  };

  // Метод для получения обновленной модели
  public getModel(): Model {
    return {
      paramValues: this.state.paramValues,
      colors: this.props.model.colors || []
    };
  }

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div className="param-editor">
        {params.map(param => {
          // Для каждого параметра ищем его значение
          const paramValue = paramValues.find(pv => pv.paramId === param.id);
          const value = paramValue ? paramValue.value : '';

          return (
            <div key={param.id} className="param-item">
              <div className="param-name">{param.name}</div>
              <div className="param-value">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => this.handleParamChange(param.id, e.target.value)}
                  className="param-input"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ParamEditor;
