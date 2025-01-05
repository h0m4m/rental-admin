export const transformData = (data, schema) => {
  const transformedData = { ...data };

  Object.keys(schema).forEach((field) => {
    if (transformedData[field]) {
      switch (schema[field]) {
        case 'time':
          try {
            // Ensure valid time format (HH:mm:ss)
            const [hours, minutes, seconds] = transformedData[field].split(':');
            if (!hours || !minutes) throw new Error('Invalid time format');
            transformedData[field] = `${hours}:${minutes}:${seconds || '00'}`;
          } catch (error) {
            console.error(`Invalid time value for field "${field}":`, transformedData[field]);
            transformedData[field] = null; // Set to null if invalid
          }
          break;

        case 'date':
          try {
            // Ensure valid date format (YYYY-MM-DD)
            transformedData[field] = new Date(transformedData[field]).toISOString().slice(0, 10);
          } catch (error) {
            console.error(`Invalid date value for field "${field}":`, transformedData[field]);
            transformedData[field] = null; // Set to null if invalid
          }
          break;

        case 'datetime':
          try {
            // Ensure valid datetime format (ISO 8601)
            transformedData[field] = new Date(transformedData[field]).toISOString();
          } catch (error) {
            console.error(`Invalid datetime value for field "${field}":`, transformedData[field]);
            transformedData[field] = null; // Set to null if invalid
          }
          break;

        default:
          break;
      }
    } else {
      transformedData[field] = null; // Set missing fields to null
    }
  });

  return transformedData;
};
