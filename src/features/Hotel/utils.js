import React from 'react'

export const freeRoomsText = (freeCount) => {
  switch (freeCount) {
    case 0:
      return <span>Нет свободных номеров<br/>такого типа</span>
    case 1:
      return <span>cвободный номер<br/>такого типа</span>
    case 2:
    case 3:
    case 4:
      return <span>свободных номера<br/>такого типа</span>
    default:
      return <span>свободных номеров<br/>такого типа</span>
  }
}