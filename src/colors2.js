export function colorFromId(id) {
    const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#BBDEFB', '#B2EBF2', '#C8E6C9', '#DCEDC8', '#FFF9C4', '#FFE0B2'];
    return colors[id % colors.length];
  }