import React from "react";

function fourDays() {
  // Calcula los siguientes 4 dias de la funcion new Date()
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Consigue la fecha de mañana
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Crear un array para guardar los siguientes 4 dias
  const next4Days = [];

  for (let i = 1; i < 5; i++) {
    // Calcula la fecha para el siguiente dia
    const nextDate = new Date(tomorrow);
    nextDate.setDate(tomorrow.getDate() + i);

    // Extrae informacion day, date, and month
    const dayOfWeek = daysOfWeek[nextDate.getDay()];
    const date = nextDate.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      nextDate
    );

    // Formateo como "Dia, DD Mes"
    const formattedDate = `${dayOfWeek}, ${date} ${month}`;

    next4Days.push(formattedDate);
  }

  return next4Days;
}

export default fourDays;
