import React, { useState, useEffect } from 'react';

const categories = ['Nombre', 'País', 'Animal', 'Color', 'Fruta']; // Lista de categorías

const TutifrutiApp = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [completedCategories, setCompletedCategories] = useState([]);
  const [timer, setTimer] = useState(60); // Tiempo inicial del temporizador

  // Función para iniciar el temporizador
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          // Aquí puedes agregar lógica para manejar el fin del juego
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Función para generar una nueva categoría
  const generateCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    setCurrentCategory(categories[randomIndex]);
  };

  // Función para marcar una categoría como completada
  const completeCategory = () => {
    if (!completedCategories.includes(currentCategory)) {
      setCompletedCategories([...completedCategories, currentCategory]);
    }
  };

  // Verificar si todas las categorías están completadas
  const allCategoriesCompleted = completedCategories.length === categories.length;

  return (
    <div>
      <h1>Tutifruti</h1>
      <div>
        <h2>Categoría actual: {currentCategory}</h2>
        <button onClick={generateCategory}>Generar categoría</button>
        <button onClick={completeCategory}>Completar categoría</button>
      </div>
      <div>
        <h2>Temporizador: {timer} segundos</h2>
      </div>
      {allCategoriesCompleted && (
        <button onClick={() => console.log('Basta para mí, basta para todos')}>
          Basta para mí, basta para todos
        </button>
      )}
      {/* Aquí puedes agregar más componentes y funcionalidades, como un formulario para ingresar respuestas */}
    </div>
  );
};

export default TutifrutiApp;