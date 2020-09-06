export const parse = schema => {
    const fields = schema['fields'];
    const parsedSchema = {};
  
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
  
      parsedSchema[field.id] = {
        component: componentForField(field.type),
        label: field.label,
        options: field.opts || null
      }
    }
  
    return parsedSchema;
  }
  
  function componentForField(field) {
    switch(field) {
      case 'singleChoice': return 'BaseSelect';
      
      default: return 'BaseInput';
    }
  }