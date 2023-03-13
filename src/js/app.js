/* eslint-disable linebreak-style */
export const arrObj = [];
export default function specialAttacks({
  special: [{
    id, name, icon, description = 'Описание недоступно',
  }, ...data],
}) {
  arrObj.push({
    id, name, icon, description,
  });
  if (data.length) {
    specialAttacks({ special: data });
  }

  return arrObj;
}
